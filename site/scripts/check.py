#!/usr/bin/env python3
"""Pre-launch QA for a built site. Run after ./build.sh:
    python3 scripts/check.py <path-to-dist> [--screens]

Checks: broken internal links and images, JSON-LD parses, leftover TODO placeholders, placeholder images
(any image file with "placeholder" in its name, in img/srcset, CSS backgrounds, og:image or JSON-LD), one <h1> per page,
<title> and meta description length and uniqueness, missing alt text, banned words (scripts/banned.txt,
one per line: things the client doesn't want on the site). --screens also screenshots every page at
1280px and 390px into ../screenshots/ and flags sideways scrolling (needs Playwright).
Exit code 1 if anything blocking is found.
"""
import glob, html, json, os, re, sys

dist = sys.argv[1] if len(sys.argv) > 1 and not sys.argv[1].startswith('--') else 'dist'
os.chdir(dist)
pages = sorted(glob.glob('**/*.html', recursive=True))
files = {'/' + p for p in glob.glob('**/*', recursive=True)}
here = os.path.dirname(os.path.abspath(__file__))
banned_path = os.path.join(here, 'banned.txt')
banned = [l.strip().lower() for l in open(banned_path)] if os.path.exists(banned_path) else []
banned = [b for b in banned if b and not b.startswith('#')]

errors, warns = [], []
titles, descs = {}, {}

def exists(url):
    url = url.split('#')[0].split('?')[0]
    if not url or url == '/': return True
    if url.endswith('/'): return url + 'index.html' in files
    return url in files

for p in pages:
    h = open(p, encoding='utf-8').read()
    url = '/' + p.replace('index.html', '')
    noindex = 'noindex' in h
    for m in re.findall(r'href="(/[^"]*)"', h):
        if not exists(m): errors.append(f'{url}: broken link {m}')
    for m in re.findall(r'(?:src|srcset)="([^"]+)"', h):
        for u in re.split(r',\s*', m):
            u = u.strip().split(' ')[0]
            if u.startswith('/') and not exists(u): errors.append(f'{url}: missing file {u}')
    for s in re.findall(r'<script type="application/ld\+json">(.*?)</script>', h, re.S):
        try: json.loads(s)
        except Exception as e: errors.append(f'{url}: bad JSON-LD ({e})')
    body = re.sub(r'<(script|style)[^>]*>.*?</\1>', ' ', h, flags=re.S)
    text = html.unescape(re.sub(r'<[^>]+>', ' ', body))
    if 'TODO' in h: errors.append(f'{url}: contains TODO placeholder text')
    for m in sorted(set(re.findall(r'[^"\'\s(),]*placeholder[^"\'\s(),]*\.(?:webp|jpe?g|png|gif|avif|svg)', h, re.I))):
        errors.append(f'{url}: placeholder image still in use: {m}')
    low = text.lower()
    for b in banned:
        if b in low: errors.append(f'{url}: banned word/phrase "{b}"')
    h1s = len(re.findall(r'<h1[\s>]', h))
    if h1s != 1: errors.append(f'{url}: {h1s} <h1> tags (want exactly 1)')
    for tag in re.findall(r'<img\b[^>]*>', h):
        if not re.search(r'\balt="', tag): errors.append(f'{url}: <img> without alt')
    if noindex: continue
    t = re.search(r'<title>(.*?)</title>', h, re.S)
    d = re.search(r'<meta name="description" content="([^"]*)"', h)
    t = html.unescape(t.group(1).strip()) if t else ''
    d = html.unescape(d.group(1).strip()) if d else ''
    if not 25 <= len(t) <= 65: warns.append(f'{url}: title is {len(t)} chars (aim 30-60): {t}')
    if not 70 <= len(d) <= 165: warns.append(f'{url}: meta description is {len(d)} chars (aim 120-160)')
    titles.setdefault(t, []).append(url); descs.setdefault(d, []).append(url)
    if 'class="answer"' not in h and url not in ('/privacy/', '/thank-you/', '/faq/', '/get-a-quote/'):
        warns.append(f'{url}: no answer block (quotable summary for AI search)')

for t, us in titles.items():
    if len(us) > 1: errors.append(f'duplicate title on {us}: {t}')
for d, us in descs.items():
    if len(us) > 1: errors.append(f'duplicate meta description on {us}')
for f in ('/robots.txt', '/llms.txt', '/sitemap-index.xml'):
    if f not in files: errors.append(f'missing {f}')
for f in ('/robots.txt', '/llms.txt'):
    if f in files and 'TODO' in open(f.lstrip('/'), encoding='utf-8').read(): errors.append(f'{f} contains TODO')
for c in glob.glob('**/*.css', recursive=True):
    for m in sorted(set(re.findall(r'url\(["\']?([^"\')]*placeholder[^"\')]*)', open(c, encoding='utf-8').read(), re.I))):
        errors.append(f'/{c}: placeholder image used as CSS background: {m}')

if '--screens' in sys.argv:
    import asyncio, http.server, threading, functools
    from playwright.async_api import async_playwright
    out = os.path.abspath(os.path.join(here, '..', '..', 'screenshots')); os.makedirs(out, exist_ok=True)
    class Quiet(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a): pass
    srv = http.server.ThreadingHTTPServer(('127.0.0.1', 0), functools.partial(Quiet, directory='.'))
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    base = f'http://127.0.0.1:{srv.server_address[1]}'
    async def shots():
        async with async_playwright() as pw:
            b = await pw.chromium.launch()
            for w in (1280, 390):
                pg = await b.new_page(viewport={'width': w, 'height': 900})
                for p in pages:
                    u = '/' + p.replace('index.html', '')
                    await pg.goto(base + u, wait_until='load')
                    await pg.evaluate('document.querySelectorAll("img[loading=lazy]").forEach(i=>i.loading="eager")')
                    await pg.wait_for_timeout(400)
                    sw = await pg.evaluate('document.documentElement.scrollWidth')
                    if sw > w: errors.append(f'{u}: scrolls sideways at {w}px (scrollWidth {sw})')
                    name = (u.strip('/').replace('/', '_') or 'home') + f'-{w}.png'
                    await pg.screenshot(path=os.path.join(out, name), full_page=True)
            await b.close()
    asyncio.run(shots()); srv.shutdown()
    print(f'Screenshots: {out}')

print(f'Checked {len(pages)} pages.')
for w in warns: print('WARN ', w)
for e in errors: print('ERROR', e)
print(f'{len(errors)} errors, {len(warns)} warnings')
sys.exit(1 if errors else 0)
