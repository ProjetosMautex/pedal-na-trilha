const fs = require('fs');

// 1. Fix ArtigoRavaAro29.tsx
let rava = fs.readFileSync('src/components/ArtigoRavaAro29.tsx', 'utf8');

// Fix cross-sell spacing
rava = rava.replace(/<div className="p-4 text-center flex flex-col items-center justify-between h-\[120px\]">/g, 
  '<div className="p-4 text-center flex flex-col items-center">');
rava = rava.replace(/<span className="bg-cyan-600 group-hover:bg-cyan-500 text-white w-full py-2\.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-md mt-2">Ver Preço →<\/span>/g,
  '<span className="block bg-cyan-600 group-hover:bg-cyan-500 text-white w-full py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-md mt-3">Ver Preço →</span>');

// Move cross-sells up below Conclusão
const crossSellBlockMatch = rava.match(/\{\/\* Cross-Sell Carrossel \*\/\}[\s\S]*?<\/div>\s*<\/div>/);
if (crossSellBlockMatch) {
  const block = crossSellBlockMatch[0];
  rava = rava.replace(block, '');
  rava = rava.replace('<h2>Conclusão</h2>', block + '\n\n          <h2>Conclusão</h2>');
}

// Inject images manually for Rava
const injectRava = (header, id) => {
  const replacement = `\n          <div className="my-8">\n            <img src={products.find(p => p.id === '${id}')?.imageUrl} alt={products.find(p => p.id === '${id}')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />\n          </div>`;
  rava = rava.replace(header, header + replacement);
};

injectRava('<h2>Bicicleta Mountain Bike Rava Pressure 20 Marchas Aro 29 Suspensão Dianteira</h2>', 'rava-pressure');
injectRava('<h2>Bicicleta Aro 29 Alumínio Rava Up 21v Mtb Urbana Lazer Cor Preto</h2>', 'rava-up');
injectRava('<h3>Rava vs Caloi Moab</h3>', 'caloi-moab');
injectRava('<h3>Rava vs Absolute Nero 4</h3>', 'absolute-nero-4');

// Remove hardcoded duplicate images in Rava
rava = rava.replace(/<div className="my-8">\s*<img src="\/images\/blog\/1\/Bicicleta Mountain Bike Rava Pressure[^>]+>\s*<\/div>/, '');
rava = rava.replace(/<div className="my-8">\s*<img src="\/images\/blog\/1\/Bicicleta Aro 29 Alumínio Rava Up 21v Mtb Urbana Lazer Cor Preto\.webp"[^>]+>\s*<\/div>/, '');

fs.writeFileSync('src/components/ArtigoRavaAro29.tsx', rava, 'utf8');

// 2. Fix ArtigoDroppAro29.tsx (remove duplicate hardcoded images)
let dropp = fs.readFileSync('src/components/ArtigoDroppAro29.tsx', 'utf8');
dropp = dropp.replace(/<div className="my-8">\s*<img src="\/images\/blog\/1\/Bicicleta Dropp Z3 Aro 29\.webp"[^>]+>\s*<\/div>/, '');
dropp = dropp.replace(/<div className="my-8">\s*<img src="\/images\/blog\/1\/Bicicleta KSW XLT 100\.webp"[^>]+>\s*<\/div>/g, '');
fs.writeFileSync('src/components/ArtigoDroppAro29.tsx', dropp, 'utf8');

// 3. Fix ArtigoMelhorPneuBikeAro29.tsx (inject images for all tires)
let pneus = fs.readFileSync('src/components/ArtigoMelhorPneuBikeAro29.tsx', 'utf8');
const injectPneu = (header, id) => {
  if (pneus.includes(header) && !pneus.includes(`products.find(p => p.id === '${id}')`)) {
    const replacement = `\n          <div className="my-8">\n            <img src={products.find(p => p.id === '${id}')?.imageUrl} alt={products.find(p => p.id === '${id}')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />\n          </div>`;
    pneus = pneus.replace(header, header + replacement);
  }
};

injectPneu('<h3>Pneu Michelin Force Access Line 29x2.25</h3>', 'pneu-michelin-force-29');
injectPneu('<h3>Pneu Maxxis Rekon Race 29x2.25 Dobrável Kevlar</h3>', 'pneu-maxxis-rekon-race-29');
injectPneu('<h3>Pneu Pirelli Scorpion Pro 29x2.20</h3>', 'pneu-pirelli-scorpion-29');
injectPneu('<h3>Pneu Chaoyang Victory 29x2.10</h3>', 'pneu-chaoyang-victory-29');

fs.writeFileSync('src/components/ArtigoMelhorPneuBikeAro29.tsx', pneus, 'utf8');

console.log('Fixed everything');
