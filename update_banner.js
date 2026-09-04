import fs from 'fs';

let text = fs.readFileSync('src/components/MelhorGuidao.tsx', 'utf8');

const bannerRegex = /\{\/\* CROSS-SELL BANNER \*\/\}[\s\S]*?<\/div>\r?\n          <\/div>/;
const newBanner = `{/* CROSS-SELL BANNER */}
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
                      <h4 className="text-zinc-100 font-bold text-sm mb-3">{p.name}</h4>
                      <span className="block bg-cyan-500 group-hover:bg-cyan-400 text-zinc-950 w-full py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-md">Ver Preço ➔</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>`;

text = text.replace(bannerRegex, newBanner);
fs.writeFileSync('src/components/MelhorGuidao.tsx', text, 'utf8');
