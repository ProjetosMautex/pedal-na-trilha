import fs from 'fs';

let text = fs.readFileSync('src/components/MelhorGuidao.tsx', 'utf8');

// 1. Remove Torquimetro
text = text.replace(/        <div className="my-12 p-6 bg-zinc-900\/80 rounded-2xl border border-zinc-700 shadow-xl">\r?\n          <h4 className="text-xl font-bold text-cyan-400 mb-4">Recomendação do Mecânico<\/h4>\r?\n          <img loading="lazy" width="800" height="600" src=\{accessories\.find\(p => p\.id === 'torquimetro-estalo'\)\?\.imageUrl\} alt="Torquimetro Estalo" className="w-full max-h-\[300px\] object-contain rounded-xl bg-white p-4 mb-6" \/>\r?\n          <AffiliateCard product=\{accessories\.find\(p => p\.id === 'torquimetro-estalo'\)!\}\s*\/>\r?\n        <\/div>\r?\n\r?\n/, '');

// 2. Remove Manopla
text = text.replace(/          <div className="my-10 p-6 bg-zinc-900\/50 rounded-2xl border border-zinc-700 shadow-xl">\r?\n            <h4 className="text-lg font-bold text-white mb-4">Complete o combo para zerar as dores nas mãos:<\/h4>\r?\n            <AffiliateCard product=\{accessories\.find\(p => p\.id === 'manopla-gta-lock'\)!\}\s*\/>\r?\n          <\/div>\r?\n/, '');

// 3. Remove Mesa
text = text.replace(/                  \{faq\.question\.includes\("mesa"\) && \(\r?\n                    <div className="mt-6 bg-zinc-900\/50 p-4 rounded-xl border border-zinc-700">\r?\n                      <h4 className="text-lg font-bold text-cyan-400 mb-4">Opção de mesa curta \(35mm\) para guidões agressivos:<\/h4>\r?\n                      <AffiliateCard product=\{accessories\.find\(p => p\.id === 'mesa-absolute-35mm'\)!\}\s*\/>\r?\n                    <\/div>\r?\n                  \)\}\r?\n/, '');

// 4. Replace Banner
const bannerRegex = /\{\/\* CROSS-SELL BANNER \*\/\}[\s\S]*?<\/div>\r?\n          <\/div>\r?\n/;
const newBanner = `{/* CROSS-SELL */}
          <div className="my-12 bg-zinc-900 rounded-2xl p-6 border border-zinc-700">
            <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              <ShoppingCart size={24} /> Complete seu setup de segurança urbana
            </h3>
            <p className="text-zinc-300 text-sm mb-6">Sua segurança no trânsito não tem preço. Complete seu setup com: Capacete com LED, Trava/Cadeado em U (U-Lock) e Bomba de ar portátil.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {accessories.filter(i => ['capacete-absolute', 'cadeado-ulock', 'bomba-ar-portatil'].includes(i.id)).map(p => {
                return (
                  <a 
                    key={p.id}
                    href={p.affiliateUrl} 
                    aria-label={\`Ver oferta de \${p.name}\`} 
                    target="_blank" 
                    rel="noopener noreferrer sponsored nofollow" 
                    className="block bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden hover:border-cyan-500 transition-colors group shadow-lg flex flex-col h-full"
                  >
                    <div className="aspect-square bg-white flex items-center justify-center p-4">
                      <img src={p.imageUrl} alt={p.name} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform" width="400" height="400" loading="lazy" />
                    </div>
                    <div className="p-4 text-center flex flex-col items-center flex-grow justify-between">
                      <div>
                        <span className="text-xs text-cyan-400 font-bold tracking-wider uppercase mb-1 block">{p.category}</span>
                        <h4 className="text-white font-medium text-sm mb-2 line-clamp-2">{p.name}</h4>
                        <p className="text-zinc-400 text-xs line-clamp-2 mb-4">{p.description}</p>
                      </div>
                      <span className="inline-block bg-cyan-600 text-white text-xs font-bold px-4 py-2 rounded hover:bg-cyan-500 transition-colors w-full mt-auto">
                        VER PREÇO
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
`;
text = text.replace(bannerRegex, newBanner);
fs.writeFileSync('src/components/MelhorGuidao.tsx', text, 'utf8');

console.log("MelhorGuidao.tsx updated!");
