import fs from 'fs';
const content = fs.readFileSync('src/data/products.ts', 'utf8');
console.log(content.slice(-200));
