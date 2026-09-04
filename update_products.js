import fs from 'fs';

let text = fs.readFileSync('src/data/products.ts', 'utf8');

// Find the Torquimetro object
text = text.replace(/  \{\r?\n    id: "torquimetro-estalo",[\s\S]*?category: "Ferramentas"\r?\n  \},\r?\n/, '');

// Find the Manopla object
text = text.replace(/  \{\r?\n    id: "manopla-gta-lock",[\s\S]*?category: "Acessórios"\r?\n  \},\r?\n/, '');

// Find the Mesa object
text = text.replace(/  \{\r?\n    id: "mesa-absolute-35mm",[\s\S]*?category: "Peças"\r?\n  \}\r?\n/, '');

fs.writeFileSync('src/data/products.ts', text, 'utf8');
console.log("products.ts updated!");
