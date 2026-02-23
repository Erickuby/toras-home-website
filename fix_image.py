from PIL import Image
import os

path = os.path.join('src', 'assets', 'gallery', 'new-gallery-09.jpeg')
print(f"Opening: {path}")
img = Image.open(path)
print(f"Original size: {img.size}")

# Rotate 90 degrees clockwise (people's heads go from left to top)
rotated = img.rotate(-90, expand=True)
print(f"Rotated size: {rotated.size}")

rotated.save(path, quality=95)
print("Saved successfully!")
