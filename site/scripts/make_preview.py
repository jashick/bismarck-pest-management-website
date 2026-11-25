# Turn the Astro build into a folder that opens from disk (file://): root-relative links become relative,
# and links to /page/ point at page/index.html.
import os, re, shutil, sys
src, dst = sys.argv[1], sys.argv[2]
# Overwrite in place (deleting files isn't allowed in the project folder).
shutil.copytree(src, dst, dirs_exist_ok=True)
def rel(url, depth):
    if url.startswith('//'): return url
    path, sep, rest = url.partition('#')
    q = ''
    if '?' in path: path, q = path.split('?', 1); q = '?' + q
    if path == '/' or path.endswith('/'): path = path + 'index.html'
    return '../' * depth + path.lstrip('/') + q + (sep + rest if sep else '')
for root, _, files in os.walk(dst):
    for f in files:
        if not f.endswith('.html'): continue
        p = os.path.join(root, f)
        depth = os.path.relpath(p, dst).count(os.sep)
        h = open(p, encoding='utf-8').read()
        h = re.sub(r'(href|src|action)="(/[^"]*)"', lambda m: f'{m.group(1)}="{rel(m.group(2), depth)}"', h)
        h = re.sub(r'srcset="([^"]*)"', lambda m: 'srcset="' + ', '.join(
            (rel(x.strip().split(' ')[0], depth) + ' ' + ' '.join(x.strip().split(' ')[1:])).strip() if x.strip().startswith('/') else x.strip()
            for x in m.group(1).split(',')) + '"', h)
        h = re.sub(r"url\((['\"]?)(/[^)'\"]+)\1\)", lambda m: f"url({m.group(1)}{rel(m.group(2), depth)}{m.group(1)})", h)
        h = h.replace('url(&#39;/', 'url(&#39;' + '../' * depth)
        open(p, 'w', encoding='utf-8').write(h)
print('ok')
