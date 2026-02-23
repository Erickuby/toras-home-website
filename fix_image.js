const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const imgPath = path.join(__dirname, 'src', 'assets', 'gallery', 'new-gallery-09.jpeg');
const outPath = path.join(__dirname, 'src', 'assets', 'gallery', 'new-gallery-09-temp.jpeg');

console.log('Starting...');
console.log('Input:', imgPath);
console.log('Exists:', fs.existsSync(imgPath));

// Use sharp to auto-rotate based on EXIF, then save
sharp(imgPath)
    .rotate() // auto-rotate based on EXIF orientation
    .jpeg({ quality: 95 })
    .toFile(outPath)
    .then(info => {
        console.log('Output info:', JSON.stringify(info));
        // Replace original with fixed version
        fs.copyFileSync(outPath, imgPath);
        fs.unlinkSync(outPath);
        console.log('Replaced original with auto-rotated version');
    })
    .catch(err => {
        console.error('Error:', err.message);
    });
