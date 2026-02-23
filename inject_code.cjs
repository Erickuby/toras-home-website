const fs = require('fs');
const path = require('path');

const galleryFile = path.join(__dirname, 'src', 'pages', 'Gallery.tsx');
const codeFile = path.join(__dirname, 'gallery_code.txt');

let galleryContent = fs.readFileSync(galleryFile, 'utf8');
const codeContent = fs.readFileSync(codeFile, 'utf8');

const targetStr = "const galleryItems: { type: 'image' | 'video'; src: string; description?: string }[] = [];";

galleryContent = galleryContent.replace(targetStr, codeContent);

fs.writeFileSync(galleryFile, galleryContent);
console.log('Successfully injected gallery code!');
