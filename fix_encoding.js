import fs from 'fs';

let content = fs.readFileSync('src/data/products.ts', 'utf8');

// The string was read as Windows-1252 (latin1) and saved as UTF-8.
// To reverse: encode string to latin1 buffer, decode buffer to UTF-8 string.
const buffer = Buffer.from(content, 'latin1');
const fixedContent = buffer.toString('utf8');

fs.writeFileSync('src/data/products.ts', fixedContent, 'utf8');
console.log('Fixed double encoding in products.ts!');
