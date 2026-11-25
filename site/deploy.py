#!/usr/bin/env python3
"""Upload a built site to SiteGround over FTPS using ONE login (SiteGround blocks rapid repeated logins).
Usage (normally via publish.sh): DIST=path/to/dist FTP_CRED=path/to/creds.txt python3 deploy.py [--dry-run]
Uploads only add/overwrite; nothing on the server is deleted. Removed pages need a 301 in .htaccess.
"""
import ftplib, json, os, ssl, sys
from pathlib import Path

here = Path(__file__).resolve().parent
cfg = json.loads((here / 'deploy.config.json').read_text())
dist = Path(os.environ.get('DIST', here / 'dist'))
cred = Path(os.environ['FTP_CRED'])
user, pw = [l.strip() for l in cred.read_text().splitlines()[:2]]
files = sorted(p for p in dist.rglob('*') if p.is_file())

if '--dry-run' in sys.argv:
    for p in files: print('would upload:', p.relative_to(dist))
    sys.exit(0)

ftp = ftplib.FTP_TLS(cfg['host'], timeout=60, context=ssl.create_default_context())
ftp.login(user, pw); ftp.prot_p()
# Some logins land in the account home, above the web root: work inside public_html when it exists.
if 'public_html' in [n.rsplit('/', 1)[-1] for n in ftp.nlst()]:
    ftp.cwd('public_html')
print('Deploying into:', ftp.pwd())

made = set()
def ensure_dir(rel_dir):
    parts = Path(rel_dir).parts
    for i in range(1, len(parts) + 1):
        d = '/'.join(parts[:i])
        if d in made: continue
        try: ftp.mkd(d)
        except ftplib.error_perm: pass
        made.add(d)

for n, p in enumerate(files, 1):
    rel = p.relative_to(dist).as_posix()
    if '/' in rel: ensure_dir(os.path.dirname(rel))
    with open(p, 'rb') as fh: ftp.storbinary(f'STOR {rel}', fh)
ftp.quit()
print(f'Uploaded {len(files)} files over one connection.')
