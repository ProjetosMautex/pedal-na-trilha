import fs from 'fs';
let content = fs.readFileSync('src/components/MelhorGuidao.tsx', 'utf8');

content = content.replace(/Recomenda.?.?o do Mec.?.?nico/g, "Recomendação do Mecânico");
content = content.replace(/dores nas m.?.?os:/g, "dores nas mãos:");
content = content.replace(/Op.?.?o de mesa curta \(35mm\) para guid.?.?es agressivos:/g, "Opção de mesa curta (35mm) para guidões agressivos:");

fs.writeFileSync('src/components/MelhorGuidao.tsx', content, 'utf8');
console.log('Fixed MelhorGuidao.tsx!');
