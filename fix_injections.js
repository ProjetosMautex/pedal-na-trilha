import fs from 'fs';

let content = fs.readFileSync('src/components/MelhorGuidao.tsx', 'utf8');

// Fix the manopla broken string
content = content.replace(/Complete o combo para zerar as dores nas m.?.?os:/g, "Complete o combo para zerar as dores nas mãos:");

// Fix the mesa broken string
content = content.replace(/Op.?.?o de mesa curta \(35mm\) para guid.?.?es agressivos:/g, "Opção de mesa curta (35mm) para guidões agressivos:");

// Insert the torquimetro block!
const torquimetroInsert = `</div>
        
        <div className="my-12 p-6 bg-zinc-900/80 rounded-2xl border border-zinc-700 shadow-xl">
          <h4 className="text-xl font-bold text-cyan-400 mb-4">Recomendação do Mecânico</h4>
          <img loading="lazy" width="800" height="600" src={accessories.find(p => p.id === 'torquimetro-estalo')?.imageUrl} alt="Torquimetro Estalo" className="w-full max-h-[300px] object-contain rounded-xl bg-white p-4 mb-6" />
          <AffiliateCard product={accessories.find(p => p.id === 'torquimetro-estalo')!} />
        </div>`;

// Insert it right before the "Por que Investir em Alumínio 6061 para sua Bike?" heading
// Wait, the heading is <h3 className="text-2xl font-bold text-white mb-4">Por que Investir em Alumínio 6061 para sua Bike?</h3>
// It is right after </div> from the previous section.
content = content.replace(/(<\/div>\s*<h3 className="text-2xl font-bold text-white mb-4">Por que Investir em Alumínio)/, torquimetroInsert + "\n\n$1");

fs.writeFileSync('src/components/MelhorGuidao.tsx', content, 'utf8');
console.log("Fixed injections perfectly!");
