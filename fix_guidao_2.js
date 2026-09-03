import fs from 'fs';
let lines = fs.readFileSync('src/components/MelhorGuidao.tsx', 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('<img width="800" height="600" loading="lazy">')) {
    if (i < 700) {
      lines[i] = '          <img src="/images/blog/1/guidao-reto-vs-curvo.webp" alt="Comparativo Guidão Reto vs Curvo" className="w-full rounded-xl shadow-lg border border-zinc-700" width="800" height="600" loading="lazy" />';
    } else if (i < 750) {
      lines[i] = '          <img src="/images/blog/1/guidao-backsweep-maos.webp" alt="Backsweep guiando a posição natural das mãos" className="w-full rounded-xl shadow-lg border border-zinc-700" width="800" height="600" loading="lazy" />';
    } else {
      lines[i] = '            <img src="/images/autores/Rafael Martins.webp" alt="Rafael Martins" className="w-24 h-24 rounded-full border-4 border-cyan-400 object-cover" width="96" height="96" loading="lazy" />';
    }
  }
}

fs.writeFileSync('src/components/MelhorGuidao.tsx', lines.join('\n'));
console.log('Fixed remaining images');
