import fs from 'fs';

let content = fs.readFileSync('src/components/MelhorGuidao.tsx', 'utf8');

// 1. Cross sell banner update
content = content.replace(
  /accessories\.filter\(i => \['capacete-absolute', 'chave-dinamometrica', 'bomba-ar-portatil'\]\.includes\(i\.id\)\)/,
  "accessories.filter(i => ['torquimetro-estalo', 'manopla-gta-lock', 'mesa-absolute-35mm'].includes(i.id))"
);

// 2. Insert Torquimetro
const torquimetroInsert = `</div>
        
        <div className="my-12 p-6 bg-zinc-900/80 rounded-2xl border border-zinc-700 shadow-xl">
          <h4 className="text-xl font-bold text-cyan-400 mb-4">Recomendação do Mecânico</h4>
          <img loading="lazy" width="800" height="600" src={accessories.find(p => p.id === 'torquimetro-estalo')?.imageUrl} alt="Torquimetro Estalo" className="w-full max-h-[300px] object-contain rounded-xl bg-white p-4 mb-6" />
          <AffiliateCard product={accessories.find(p => p.id === 'torquimetro-estalo')!} />
        </div>`;

content = content.replace(/<\/div>(\s*)<h3 className="text-2xl font-bold text-white mb-4">Por que Investir em Alumínio 6061 para sua Bike\?<\/h3>/, torquimetroInsert + '$1<h3 className="text-2xl font-bold text-white mb-4">Por que Investir em Alumínio 6061 para sua Bike?</h3>');

// 3. Insert Manopla
const manoplaInsert = `<div className="mt-8 mb-8">
            <AffiliateCard product={products.find(p => p.id === 'guidao-rava-flat-730mm')!} />
          </div>
          <div className="my-10 p-6 bg-zinc-900/50 rounded-2xl border border-zinc-700 shadow-xl">
            <h4 className="text-lg font-bold text-white mb-4">Complete o combo para zerar as dores nas mãos:</h4>
            <AffiliateCard product={accessories.find(p => p.id === 'manopla-gta-lock')!} />
          </div>`;

content = content.replace(/<div className="mt-8 mb-8">\s*<AffiliateCard product=\{products\.find\(p => p\.id === 'guidao-rava-flat-730mm'\)!\}\s*\/>\s*<\/div>/, manoplaInsert);

// 4. Insert Mesa in FAQ
const faqInsert = `{faq.answer.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                  {faq.question.includes("mesa") && (
                    <div className="mt-6 bg-zinc-900/50 p-4 rounded-xl border border-zinc-700">
                      <h4 className="text-lg font-bold text-cyan-400 mb-4">Opção de mesa curta (35mm) para guidões agressivos:</h4>
                      <AffiliateCard product={accessories.find(p => p.id === 'mesa-absolute-35mm')!} />
                    </div>
                  )}`;

content = content.replace(/\{faq\.answer\.map\(\(paragraph, i\) => \(\s*<p key=\{i\}>\{paragraph\}<\/p>\s*\)\)\}/, faqInsert);


fs.writeFileSync('src/components/MelhorGuidao.tsx', content, 'utf8');
console.log('Cross-sells applied to MelhorGuidao.tsx!');
