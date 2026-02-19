import os
import requests

# Base paths
BASE_DIR = os.getcwd()
ASSETS_DIR = os.path.join(BASE_DIR, "src", "assets")
GALLERY_DIR = os.path.join(ASSETS_DIR, "gallery")
ABOUT_DIR = os.path.join(ASSETS_DIR, "about")

# Mappings
# { url: (directory, filename) }
assets_map = {
    # About Page
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/33.jpeg": (ABOUT_DIR, "wife.jpeg"),
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/35.jpeg": (ABOUT_DIR, "couple.jpeg"),

    # Existing Gallery (renaming for consistency)
    "https://www.torashome.org.ng/wp-content/uploads/2025/07/toras.png": (GALLERY_DIR, "gallery-01.png"),
    "https://www.torashome.org.ng/wp-content/uploads/2025/07/toras2.jpg": (GALLERY_DIR, "gallery-02.jpg"),
    "https://www.torashome.org.ng/wp-content/uploads/2025/07/toras1.jpg": (GALLERY_DIR, "gallery-03.jpg"),
    "https://www.torashome.org.ng/wp-content/uploads/2025/07/toras133.jpg": (GALLERY_DIR, "gallery-04.jpg"),
    "https://www.torashome.org.ng/wp-content/uploads/2025/07/toras4.jpg": (GALLERY_DIR, "gallery-05.jpg"),
    "https://www.torashome.org.ng/wp-content/uploads/2025/07/toras13.jpg": (GALLERY_DIR, "gallery-06.jpg"),
    "https://www.torashome.org.ng/wp-content/uploads/2025/07/toras12.jpg": (GALLERY_DIR, "gallery-07.jpg"),
    "https://www.torashome.org.ng/wp-content/uploads/2025/07/toras1-2.jpg": (GALLERY_DIR, "gallery-08.jpg"),
}

# New Gallery Items
new_gallery_urls = [
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/34.mp4",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/32.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/31.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/29.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/28.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/27.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/26.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/25-e1771516150996.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/24.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/23.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/22.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/20.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/19.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/18.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/17.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/16.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/14.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/13.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/12.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/11.mp4",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/10.mp4",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/9.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/8.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/7.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/6-e1771516776814.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/5-e1771516831650.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/4-e1771516881240.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/3.mp4",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/2.mp4",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/WhatsApp-Video-2026-02-17-at-5.28.07-PM.mp4",
]

# Add new items to map
for i, url in enumerate(new_gallery_urls):
    ext = url.split('.')[-1]
    filename = f"new-gallery-{i+1:02d}.{ext}"
    assets_map[url] = (GALLERY_DIR, filename)

def download_file(url, folder, filename):
    filepath = os.path.join(folder, filename)
    if os.path.exists(filepath):
        print(f"Skipping {filename} (already exists)")
        return

    try:
        print(f"Downloading {filename}...")
        headers = {'User-Agent': 'Mozilla/5.0'}
        response = requests.get(url, headers=headers, stream=True)
        response.raise_for_status()
        
        with open(filepath, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        print(f"Success: {filename}")
    except Exception as e:
        print(f"Failed to download {url}: {e}")

if __name__ == "__main__":
    # Ensure directories exist
    os.makedirs(GALLERY_DIR, exist_ok=True)
    os.makedirs(ABOUT_DIR, exist_ok=True)

    for url, (folder, filename) in assets_map.items():
        download_file(url, folder, filename)

    print("Download complete.")
