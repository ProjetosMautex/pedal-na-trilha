import fs from 'fs';
let text = fs.readFileSync('src/components/MelhorGuidao.tsx', 'utf8');

text = text.replace(/<img width="800" height="600" loading="lazy"> p\.id === '([^']+)'\)\?\.imageUrl\}/g, '<img src={products.find(p => p.id === \'$1\')?.imageUrl} width="800" height="600" loading="lazy"');

text = text.replace(/<img width="800" height="600" loading="lazy">(\s*)<div className="absolute inset-0 bg-gradient-to-b/, '<img src="/images/blog/1/melhor-guidao-para-bike-aro-29.webp" alt="Melhor guidão para bike aro 29 Background" className="w-full h-full object-cover opacity-20 blur-sm" fetchpriority="high" width="1200" height="800" />$1<div className="absolute inset-0 bg-gradient-to-b');

text = text.replace(/<img width="800" height="600" loading="lazy">(\s*)\) : \(/, '<img src={product.imageUrl} alt={meta.shortName} className="max-w-full max-h-full block object-cover" width="400" height="400" loading="lazy" />$1) : (');

text = text.replace(/<img width="800" height="600" loading="lazy">(\s*)<\/div>(\s*)<div className="p-4 text-center/, '<img src={p.imageUrl} alt={p.name} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform" width="400" height="400" loading="lazy" />$1</div>$2<div className="p-4 text-center');

text = text.replace(/<img width="800" height="600" loading="lazy">(\s*)<\/div>(\s*)<h3 className="text-2xl font-bold text-white mb-4">A Importância do Backsweep e Largura na Trilha<\/h3>/, '<img src="/images/blog/1/guidao-reto-vs-curvo.webp" alt="Comparativo Guidão Reto vs Curvo" className="w-full rounded-xl shadow-lg border border-zinc-700" width="800" height="600" loading="lazy" />$1</div>$2<h3 className="text-2xl font-bold text-white mb-4">A Importância do Backsweep e Largura na Trilha</h3>');

text = text.replace(/<img width="800" height="600" loading="lazy">(\s*)<\/div>(\s*)<\/div>(\s*)<h2 className="text-3xl font-extrabold text-white border-b-4 border-cyan-400 pb-2 mt-16 mb-8">(\s*)Perguntas Frequentes \(FAQ\)<\/h2>/, '<img src="/images/blog/1/guidao-backsweep-maos.webp" alt="Backsweep guiando a posição natural das mãos" className="w-full rounded-xl shadow-lg border border-zinc-700" width="800" height="600" loading="lazy" />$1</div>$2</div>$3<h2 className="text-3xl font-extrabold text-white border-b-4 border-cyan-400 pb-2 mt-16 mb-8">$4Perguntas Frequentes (FAQ)</h2>');

text = text.replace(/<img width="800" height="600" loading="lazy">(\s*)<\/div>(\s*)<div>(\s*)<h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">Sobre o Autor<\/h2>/, '<img src="/images/autores/Rafael Martins.webp" alt="Rafael Martins" className="w-24 h-24 rounded-full border-4 border-cyan-400 object-cover" width="96" height="96" loading="lazy" />$1</div>$2<div>$3<h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">Sobre o Autor</h2>');

fs.writeFileSync('src/components/MelhorGuidao.tsx', text);
console.log('Fixed MelhorGuidao.tsx');
