import os
from PIL import Image

path = 'src/assets/gallery'
images = []
for f in os.listdir(path):
    if f.endswith('.jpeg') or f.endswith('.jpg'):
        filepath = os.path.join(path, f)
        try:
            with Image.open(filepath) as img:
                images.append((f, img.size[0], img.size[1]))
        except Exception as e:
            pass

images.sort(key=lambda x: x[0])
for f, w, h in images:
    print(f"{f}: {w}x{h}")
