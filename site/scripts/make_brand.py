#!/usr/bin/env python3
"""Make the logo files the templates expect from the client's logo (PNG with transparency works best).
    python3 scripts/make_brand.py <logo.png> [--white-from-dark]
Writes public/images/brand/logo.png, logo-white.png (for the dark footer), public/favicon-32.png and
public/apple-touch-icon.png. --white-from-dark turns near-black pixels white for the footer version;
otherwise logo-white.png is a copy (replace it by hand if the client has a reversed logo).
"""
import os, shutil, sys
from PIL import Image
src = sys.argv[1]
root = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public')
brand = os.path.join(root, 'images', 'brand'); os.makedirs(brand, exist_ok=True)
im = Image.open(src).convert('RGBA')
im.save(os.path.join(brand, 'logo.png'), optimize=True)
if '--white-from-dark' in sys.argv:
    wh = im.copy(); px = wh.load()
    for y in range(wh.height):
        for x in range(wh.width):
            r, g, b, a = px[x, y]
            if a and max(r, g, b) < 70: px[x, y] = (255, 255, 255, a)
    wh.save(os.path.join(brand, 'logo-white.png'), optimize=True)
else:
    shutil.copy(os.path.join(brand, 'logo.png'), os.path.join(brand, 'logo-white.png'))
side = min(im.size); sq = im.crop((0, 0, side, side)) if im.width > im.height * 1.6 else im
canvas = Image.new('RGBA', (max(sq.size),) * 2, (255, 255, 255, 0))
canvas.paste(sq, ((canvas.width - sq.width) // 2, (canvas.height - sq.height) // 2), sq)
canvas.resize((180, 180)).save(os.path.join(root, 'apple-touch-icon.png'))
canvas.resize((32, 32)).save(os.path.join(root, 'favicon-32.png'))
print('Brand files written. Check the favicon crop; replace it by hand if the logo mark is not at the left.')
