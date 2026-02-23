const fs = require('fs');
const path = require('path');
const https = require('https');

const urls = [
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/38.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/34.mp4",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/32.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/31.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/29.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/28.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/27.jpeg",
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
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/6-e1771516776814.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/5-e1771516831650.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/4-e1771516881240.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/3.mp4",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/2.mp4",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/WhatsApp-Video-2026-02-17-at-5.28.07-PM.mp4",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/39.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2026/02/40.jpeg",
    "https://www.torashome.org.ng/wp-content/uploads/2025/08/front2.jpg",
    "https://www.torashome.org.ng/wp-content/uploads/2025/08/front3.jpg",
    "https://www.torashome.org.ng/wp-content/uploads/2025/08/front5.jpg",
    "https://www.torashome.org.ng/wp-content/uploads/2025/08/front.jpg",
    "https://www.torashome.org.ng/wp-content/uploads/2025/08/front1.jpg",
    "https://www.torashome.org.ng/wp-content/uploads/2025/08/Community-intervention2.jpg",
    "https://www.torashome.org.ng/wp-content/uploads/2025/08/Psycho-social7.jpg",
    "https://www.torashome.org.ng/wp-content/uploads/2025/08/Psycho-social3.jpg",
    "https://www.torashome.org.ng/wp-content/uploads/2025/07/toras1-2.jpg"
];

const destDir = path.join(__dirname, 'src', 'assets', 'gallery');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

function normalizeFilename(filename, index) {
    const ext = path.extname(filename);
    const num = (index + 1).toString().padStart(2, '0');
    return `gallery-${num}${ext}`;
}

async function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, response => {
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
            } else if (response.statusCode !== 200) {
                return reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', err => {
            fs.unlink(dest, () => reject(err));
        });
    });
}

async function run() {
    console.log(`Downloading ${urls.length} files...`);
    let tsxImports = '';
    let tsxArray = 'const galleryItems: { type: "image" | "video"; src: string; description?: string }[] = [\n';

    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        let originalFilename = path.basename(url);
        originalFilename = originalFilename.split('?')[0]; // discard query params if any

        const newFilename = normalizeFilename(originalFilename, i);
        const diskPath = path.join(destDir, newFilename);

        console.log(`[${i + 1}/${urls.length}] Downloading ${url} -> ${newFilename}`);
        await downloadFile(url, diskPath);

        const type = originalFilename.endsWith('.mp4') ? 'video' : 'image';
        const importName = `gal${i + 1}`;
        tsxImports += `import ${importName} from "@/assets/gallery/${newFilename}";\n`;
        tsxArray += `  { type: "${type}", src: ${importName} },\n`;
    }

    tsxArray += '];\n';

    fs.writeFileSync(path.join(__dirname, 'gallery_code.txt'), tsxImports + '\n' + tsxArray);
    console.log('Done! Check gallery_code.txt for the TSX snippets.');
}

run().catch(console.error);
