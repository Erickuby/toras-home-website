const sizeOf = require('image-size');
const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, 'src', 'assets', 'gallery');
console.log('Reading directory:', galleryDir);

const files = fs.readdirSync(galleryDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg'));
console.log(`Found ${files.length} images.`);

files.forEach(file => {
    try {
        const dimensions = sizeOf(path.join(galleryDir, file));
        console.log(`${file}: ${dimensions.width}x${dimensions.height} (Orientation: ${dimensions.orientation || 'none'})`);
    } catch (e) {
        console.error(`Error reading ${file}:`, e.message);
    }
});
