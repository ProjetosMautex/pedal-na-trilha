const fs = require('fs');

const files = [
  'src/components/ArtigoDroppAro29.tsx',
  'src/components/ArtigoFirstAro29.tsx',
  'src/components/ArtigoGTAAro29.tsx',
  'src/components/ArtigoGTSProM5Aro29.tsx',
  'src/components/ArtigoKSWAro29.tsx',
  'src/components/ArtigoRavaAro29.tsx',
  'src/components/MelhorRelacaoParaBike29.tsx',
  'src/components/MelhoresBicicletas.tsx'
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');

  // The block we injected starts with `<div className="flex flex-col gap-4">` or `<div className="flex flex-col gap-4 pb-4">`
  // and maps over accessories.filter
  
  // We'll just replace the inner contents of the mapping block.
  // Actually, let's use a regex that matches the flex container and its contents.
  
  // Find the container start
  const regex = /<div className="flex flex-col gap-4(?: pb-4)?">\s*\{accessories\.filter[\s\S]*?<\/a>\s*\)\)\}\s*<\/div>/g;
  
  const replacementGrid = `<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {accessories.filter(i => ['capacete-absolute', 'cadeado-ulock', 'bomba-ar-portatil', 'kit-limpeza-desengraxante', 'lubrificante-corrente-cera', 'ferramenta-medidora-corrente'].includes(i.id)).map((item) => (
              <a 
                key={item.id} 
                href={item.affiliateUrl}
                target="_blank" 
                rel="noopener noreferrer sponsored nofollow"
                className="block bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden hover:border-cyan-500 transition-colors group shadow-lg"
              >
                <div className="aspect-square bg-white flex items-center justify-center p-4">
                  <img src={item.imageUrl} alt={item.name} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-4 text-center flex flex-col items-center justify-between h-[120px]">
                  <h4 className="text-zinc-100 font-bold text-sm line-clamp-2 mb-2">{item.name}</h4>
                  <span className="bg-cyan-600 group-hover:bg-cyan-500 text-white w-full py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-md mt-auto">Ver Preço →</span>
                </div>
              </a>
            ))}
          </div>`;

  // Wait, MelhorRelacao uses specific items. We need to preserve the filter condition.
  // So let's capture the filter condition!
  const blockRegex = /<div className="flex flex-col gap-4(?: pb-4)?">\s*(\{accessories\.filter\([^)]*\)\.map\([^)]*\)\s*=>\s*(?:\{\s*return\s*)?\(\s*)<a[\s\S]*?<\/a>\s*\);?(?:\s*\})\)\}\s*<\/div>/g;

  content = content.replace(blockRegex, (match, prefix) => {
    return `<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${prefix}
              <a 
                key={item.id || p.id} 
                href={item.affiliateUrl || p.affiliateUrl}
                target="_blank" 
                rel="noopener noreferrer sponsored nofollow"
                className="block bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden hover:border-cyan-500 transition-colors group shadow-lg"
              >
                <div className="aspect-square bg-white flex items-center justify-center p-4">
                  <img src={item.imageUrl || p.imageUrl} alt={item.name || p.name} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-4 text-center flex flex-col items-center justify-between h-[120px]">
                  <h4 className="text-zinc-100 font-bold text-sm line-clamp-2 mb-2">{item.name || p.name}</h4>
                  <span className="bg-cyan-600 group-hover:bg-cyan-500 text-white w-full py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-md mt-auto">Ver Preço →</span>
                </div>
              </a>
            ${match.includes('return') ? ');\n            })}' : ')\n            )}'}
          </div>`;
  });

  fs.writeFileSync(file, content, 'utf8');
  console.log('Fixed', file);
}
