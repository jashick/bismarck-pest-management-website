#!/usr/bin/env python3
"""Convert client photos (JPG, PNG, HEIC) to web-ready WebP in two sizes.
    python3 scripts/convert_photos.py <input-folder> photos.csv
photos.csv has two columns, no header: original file name, new descriptive name (lowercase-with-dashes,
include the service/town, e.g. "ac-unit-replacement-lakeland"). Writes public/images/photos/<name>.webp
(1600px) and <name>-800w.webp. Needs Pillow (and pillow-heif for iPhone HEIC):
    pip3 install pillow pillow-heif
Images are cached for a year by browsers: when replacing a photo, give it a NEW name.
"""
import csv, os, sys
from PIL import Image, ImageOps
try:
    from pillow_heif import register_heif_opener; register_heif_opener()
except ImportError:
    pass
src, mapping = sys.argv[1], sys.argv[2]
dst = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'images', 'photos')
os.makedirs(dst, exist_ok=True)
n = 0
for row in csv.reader(open(mapping)):
    if len(row) < 2 or not row[0].strip(): continue
    f, name = row[0].strip(), row[1].strip()
    im = ImageOps.exif_transpose(Image.open(os.path.join(src, f))).convert('RGB')
    for w, suf in ((1600, ''), (800, '-800w')):
        c = im.copy(); c.thumbnail((w, w * 2))
        c.save(os.path.join(dst, f'{name}{suf}.webp'), 'WEBP', quality=76, method=6)
    n += 1
print(f'Converted {n} photos into {os.path.normpath(dst)}')
