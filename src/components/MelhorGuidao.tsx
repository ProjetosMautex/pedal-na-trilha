import React, { useState } from 'react';
import AffiliateCard from './AffiliateCard';
import BunnerDoMeio from './BunnerDoMeio';
import ExitIntentPopup from './ExitIntentPopup';
import { products, accessories } from '../data/products';
import { HelpCircle, ArrowRight, Check, X, ShoppingCart, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export const MelhorGuidao: React.FC = () => {
  const [quizResult, setQuizResult] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const productMetadata: Record<string, { category: string; score: string; shortName: string }> = {
    "guidao-lunje-780mm": { shortName: "Curvo XC 780mm", category: "Trilha / Enduro", score: "9.2 / 10" },
    "guidao-shiver-flat-760mm": { shortName: "Shiver Flat 760mm", category: "XC / Performance", score: "9.0 / 10" },
    "guidao-absolute-hb-002-80mm": { shortName: "HB-002 Alto 80mm", category: "Conforto / Urbano", score: "9.5 / 10" },
    "guidao-absolute-semi-curvo-20mm": { shortName: "Semi Curvo 20mm", category: "Uso Misto", score: "9.3 / 10" },
    "guidao-absolute-nero-80mm": { shortName: "Nero Alto 80mm", category: "Conforto Máximo", score: "9.6 / 10" },
    "guidao-rava-flat-730mm": { shortName: "Rava Trilha Reto", category: "Trilha Leve", score: "9.1 / 10" },
    "guidao-absolute-nero-60mm": { shortName: "Nero Curvo 60mm", category: "Postura Ergonômica", score: "9.4 / 10" },
    "guidao-rava-rise-20mm": { shortName: "Rava Rise Bar 20mm", category: "Trilha / Misto", score: "9.2 / 10" },
    "guidao-absolute-nero-40mm": { shortName: "Nero Rise 40mm", category: "Versatilidade", score: "9.0 / 10" },
    "guidao-mons-bike-flat-720mm": { shortName: "Alumínio Reto 720mm", category: "XC / Competição", score: "8.9 / 10" }
  };

  const faqData = [
    {
      question: "O guidão de 780mm pode ser cortado?",
      answer: [
        "Claro que pode, e em muitos casos, você deve!",
        "Um guidão enorme no meio do mato fechado vira um ímã de cipó e tronco.",
        "O macete de oficina para não errar a mão é: cerre apenas 1 centímetro de cada lado.",
        "Use uma lixa fininha para tirar a rebarba afiada e vá fazer um teste.",
        "É um caminho sem volta, então é melhor ir tirando de pouco em pouco até achar a distância perfeita para os seus ombros não ficarem abertos demais."
      ]
    },
    {
      question: "Como saber se o guidão serve na minha mesa?",
      answer: [
        "A pegadinha está no centro exato do guidão, naquela parte mais gordinha que encaixa na bicicleta.",
        "O padrão que tomou conta do mercado hoje é o 31.8mm.",
        "Para não devolver o produto no dia seguinte, pegue uma régua, fita métrica ou paquímetro e tire a prova no meio do seu equipamento atual.",
        "E olha: pelo amor da sua segurança, nunca coloque chapinhas de lata ou borrachas para adaptar um guidão mais fino numa mesa grossa.",
        "Na primeira descida esburacada, o guidão vai girar para a frente e o acidente será gravíssimo.",
        "Se as medidas não baterem perfeitamente, troque a peça correspondente."
      ]
    },
    {
      question: "Guidão muito largo prejudica a pilotagem?",
      answer: [
        "Prejudica e muito!",
        "A galera acha que quanto maior, melhor, mas se ultrapassar a envergadura do seu corpo, a bike vira um ônibus.",
        "Você vai ter que exagerar no movimento do corpo só para desviar de uma pedra, cansando os braços nos primeiros quilômetros.",
        "Além de correr o risco de ficar entalado em corredores mais fechados, um guidão exagerado destrói o seu posicionamento nas curvas em S.",
        "Ele precisa vestir no seu braço igual roupa sob medida."
      ]
    },
    {
      question: "Qual a diferença entre guidão curvo e reto?",
      answer: [
        "O desenho muda radicalmente de que lado do equipamento você manda.",
        "O formato reto (flat) te obriga a pedalar debruçado, cortando o vento e mantendo o pneu da frente cravado no chão em subidas cruéis.",
        "Já o guidão curvo (riser) joga sua postura lá pra cima e pra trás, zerando a dor na cervical.",
        "Ele te abraça e perdoa muito mais os pequenos vacilos em descidas assustadoras.",
        "Resumindo: foco em velocidade e subida?",
        "Vá no reto.",
        "Foco em estabilidade e alívio das dores?",
        "Vai no curvo."
      ]
    },
    {
      question: "Devo trocar o guidão se sofrer uma queda?",
      answer: [
        "Com segurança não dá para jogar na loteria, meu amigo.",
        "Depois de uma queda muito feia, aquele tubo de alumínio pode apresentar pequenas microfissuras que você nem enxerga.",
        "E sabe quando ele vai decidir arrebentar de vez?",
        "Exatamente na hora que você puxar todo o peso para fazer um salto.",
        "Trocar o componente custa infinitamente menos que uma ida ao dentista.",
        "O segredo de curtir o pedal é você confiar cegamente de que sua magrela aguenta o tranco.",
        "Viu que a peça sofreu impacto forte, deformou ou amassou?",
        "Não tenha pena.",
        "Troque, atualize seu cockpit e recupere a paz de espírito para descer a trilha voando sem preocupação na cabeça."
      ]
    }
  ];

  return (
    <>
      <ExitIntentPopup />
      
      {/* Hero Section */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img fetchpriority="high" width="1200" height="800" src="/images/blog/1/melhor-guidao-para-bike-aro-29.webp" alt="Melhor guid�o para bike aro 29 Background" className="w-full h-full object-cover opacity-20 blur-sm" fetchpriority="high" width="1200" height="800" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Melhor guidão para bike aro 29 <br/>
            <span className="text-cyan-400">(10 Modelos Recomendados)</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span>Por</span>
              <a href="/author/rafael-martins" className="flex items-center gap-2 hover:text-cyan-400 transition-colors font-semibold group">
                Rafael Martins
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="space-y-6 prose prose-lg max-w-none text-zinc-300 mb-12">
          <p>Sabe aquela sensação de que a bike está te jogando pra frente na descida técnica ou aquela dormência chata nas mãos depois de um pedal longo?</p>
          <p>Isso é sinal clássico de que o seu guidão (seu principal ponto de contato com a bike) está brigando com o seu corpo.</p>
          <p>Pilotar bem depende muito mais de ergonomia do que de força bruta.</p>
          <p>Ajustar o melhor guidão para bike aro 29 é o pulo do gato para transformar um pedal sofrido em pura diversão.</p>
          <p>Bora encostar no balcão e analisar detalhadamente as opções do mercado para você deixar a sua magrela na mão.</p>
        </div>

        {/* SIMULADOR RÁPIDO */}
        <div className="my-8 p-6 bg-gradient-to-br from-zinc-800 to-zinc-900 text-white rounded-2xl shadow-xl border border-zinc-700">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="text-cyan-400 w-6 h-6 animate-pulse" />
            <h2 className="text-xl font-bold">Simulador Rápido: Qual o seu principal incômodo ao pedalar?</h2>
          </div>
          <p className="text-zinc-300 text-sm mb-4">Selecione uma opção para ver a indicação ideal:</p>
          
          <div className="grid sm:grid-cols-2 gap-3">
            <button 
              onClick={() => setQuizResult('dor')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${quizResult === 'dor' ? 'bg-cyan-500 text-zinc-950 border-cyan-500' : 'bg-zinc-800 border-zinc-600 hover:border-cyan-500'}`}
            >
              <span>Dor nas costas e pescoço</span>
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => setQuizResult('dormencia')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${quizResult === 'dormencia' ? 'bg-cyan-500 text-zinc-950 border-cyan-500' : 'bg-zinc-800 border-zinc-600 hover:border-cyan-500'}`}
            >
              <span>Dormência nas mãos e falta de controle</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {quizResult && (
            <div className="mt-6 p-4 bg-zinc-700/50 border border-zinc-600 rounded-xl animate-fadeIn">
              {quizResult === 'dor' ? (
                <p className="text-sm leading-relaxed">
                  🎯 <strong>Recomendação:</strong> Você precisa de um guidão alto (riser). Modelos com elevação entre 40mm a 80mm jogam a sua postura para cima e para trás, aliviando quase 100% da pressão na sua coluna e pescoço.
                </p>
              ) : (
                <p className="text-sm leading-relaxed">
                  🎯 <strong>Recomendação:</strong> Foque no backsweep (inclinação para trás) e na largura! Um guidão com 9° de backsweep alinha seus pulsos de forma natural, eliminando a dormência.
                </p>
              )}
            </div>
          )}
        </div>

        {/* VITRINE / TABELA COMPARATIVA */}
        <div className="mb-16 max-w-[850px] mx-auto bg-zinc-800/50 p-2.5 rounded-2xl sm:p-5 border border-zinc-700 shadow-sm mt-16">
          <h2 className="text-2xl font-extrabold text-white mb-6 text-center">Análise: Os 10 Melhores Guidões para Bike Aro 29</h2>
          
          <div className="overflow-x-auto rounded-xl border border-zinc-700 bg-zinc-900">
            <table className="w-full border-collapse">
              <thead className="bg-zinc-800 text-zinc-300 text-xs uppercase font-bold border-b border-zinc-700">
                <tr>
                  <th className="p-3 text-center w-[70px] sm:w-[90px]">Foto</th>
                  <th className="p-3 text-left">Modelo</th>
                  <th className="p-3 text-left hidden md:table-cell">Indicação</th>
                  <th className="p-3 text-center hidden sm:table-cell">Nota</th>
                  <th className="p-3 text-center w-[100px] sm:w-[150px]">Ação</th>
                </tr>
              </thead>
              <tbody>
                {['guidao-lunje-780mm', 'guidao-shiver-flat-760mm', 'guidao-absolute-hb-002-80mm', 'guidao-absolute-semi-curvo-20mm', 'guidao-absolute-nero-80mm', 'guidao-rava-flat-730mm', 'guidao-absolute-nero-60mm', 'guidao-rava-rise-20mm', 'guidao-absolute-nero-40mm', 'guidao-mons-bike-flat-720mm'].map((id) => {
                  const product = products.find(p => p.id === id);
                  if (!product) return null;
                  const meta = productMetadata[product.id] || { shortName: product.name, category: product.category, score: "-" };
                  return (
                    <tr key={product.id} className="border-b border-zinc-700 last:border-b-0 hover:bg-zinc-800/50 transition-colors">
                      <td className="p-2 align-middle text-center">
                        <div className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] border border-slate-100 rounded flex items-center justify-center p-0.5 bg-zinc-100 mx-auto overflow-hidden">
                          {product.imageUrl ? (
                             <img loading="lazy" width="800" height="600" src={product.imageUrl} alt={meta.shortName} className="max-w-full max-h-full block object-cover" width="400" height="400" loading="lazy" />
                          ) : (
                             <span className="text-[10px] text-zinc-400 font-bold">Guidão</span>
                          )}
                        </div>
                      </td>
                      <td className="p-2 align-middle">
                        <div className="text-sm sm:text-base font-bold text-zinc-100 leading-tight">
                          {meta.shortName}
                        </div>
                        <div className="text-[11px] text-zinc-400 mt-1 md:hidden">
                          {meta.category}
                        </div>
                        <div className="text-[11px] font-bold text-yellow-400 mt-0.5 sm:hidden">
                          Nota: {meta.score}
                        </div>
                      </td>
                      <td className="p-2 align-middle text-zinc-400 text-xs sm:text-sm hidden md:table-cell">
                        {meta.category}
                      </td>
                      <td className="p-2 align-middle text-center hidden sm:table-cell">
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                          {meta.score}
                        </span>
                      </td>
                      <td className="p-2 align-middle text-center">
                        <a href={product.affiliateUrl} aria-label={`Ver oferta de ${product.name}`}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="bg-cyan-500 text-zinc-950 font-bold no-underline text-xs py-2 px-3 rounded whitespace-nowrap inline-block hover:opacity-90 transition-all sm:py-2.5 sm:px-5"
                        >
                          Ver Preço
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* PRODUTOS */}
        {/* 1. Guidão MTB Alumínio Curvo XC 780mm (Preto) */}
        <section id="guidao-lunje-780mm" className="scroll-mt-24 pt-8 border-t border-gray-100">
          <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            Guidão MTB Alumínio Curvo XC 780mm (Preto)
          </h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'guidao-lunje-780mm')?.imageUrl} width="800" height="600" loading="lazy" alt={products.find(p => p.id === 'guidao-lunje-780mm')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none">
            <p>Quer domar buracos e raízes com muito mais alavanca?</p>
            <p>O Lunje de 780mm muda a cara da sua 29.</p>
            <p>Ele tem o formato curvo que levanta o seu tronco, tirando a pressão dos punhos.</p>
            <p>O que isso muda na prática?</p>
            <p>Menos cansaço nas descidas e muito mais facilidade para puxar a frente da bike para desviar de obstáculos.</p>
            <p>Feito em alumínio, ele entrega resistência sem pesar uma tonelada, sendo o queridinho da galera do wheeling (o famoso "grau") e dos trilheiros de fim de semana.</p>
            <p>Mas fica o aviso de mecânico: 780mm de largura transmite muita segurança, mas em trilhas fechadas com árvores próximas, você pode acabar raspando as mãos.</p>
            <p>É um upgrade barato, robusto e ideal para quem quer um controle muito mais agressivo da dianteira.</p>
          </div>
          <div className="mt-8 mb-8">
            <AffiliateCard product={products.find(p => p.id === 'guidao-lunje-780mm')!} />
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-8 mb-12">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
              <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                <li>Muita estabilidade em alta velocidade.</li>
                <li>Melhora rápida na postura e conforto.</li>
                <li>Custo-benefício excelente.</li>
                <li>Encaixa em qualquer mesa padrão 31.8mm.</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
              <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                <li>Pode ser largo demais para trilhas estreitas.</li>
                <li>Um pouquinho mais pesado que as peças de competição.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 2. Guidão Shiver MTB Flat Reto 760mm Alumínio */}
        <section id="guidao-shiver-flat-760mm" className="scroll-mt-24 pt-8 border-t border-gray-100">
          <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            Guidão Shiver MTB Flat Reto 760mm Alumínio
          </h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'guidao-shiver-flat-760mm')?.imageUrl} width="800" height="600" loading="lazy" alt={products.find(p => p.id === 'guidao-shiver-flat-760mm')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none">
            <p>Aqui o papo é para quem gosta de acelerar no Cross-Country ou quer devorar subidas íngremes.</p>
            <p>O Shiver Flat de 760mm é totalmente reto.</p>
            <p>Ele joga o seu peso lá para frente e é extremamente rígido.</p>
            <p>Isso significa que toda a força da sua perna vai para o chão, e a roda dianteira não vai empinar quando a subida virar uma parede.</p>
            <p>Como não tem elevação, ele mantém seu centro de gravidade baixo.</p>
            <p>É performance e agilidade pura.</p>
            <p>Só não espere milagres ergonômicos: por ser mais baixo, ele exige mais do seu preparo físico e flexibilidade.</p>
            <p>Se você costuma sentir dores lombares, esse guidão mais agressivo pode sobrecarregar os seus punhos nos percursos mais longos.</p>
          </div>
          <div className="mt-8 mb-8">
            <AffiliateCard product={products.find(p => p.id === 'guidao-shiver-flat-760mm')!} />
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-8 mb-12">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
              <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                <li>Rigidez total para arrancar rápido.</li>
                <li>Posição aerodinâmica que corta o vento.</li>
                <li>Super leve (apenas 292g).</li>
                <li>Pintura fosca que não arranha fácil.</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
              <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                <li>Pode judiar das costas em pedais muito longos.</li>
                <li>Exige preparo físico para manter a postura de ataque.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Guidão HB-002 Alto 80mm MTB 720mm */}
        <section id="guidao-absolute-hb-002-80mm" className="scroll-mt-24 pt-8 border-t border-gray-100">
          <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            Guidão HB-002 Alto 80mm MTB 720mm
          </h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'guidao-absolute-hb-002-80mm')?.imageUrl} width="800" height="600" loading="lazy" alt={products.find(p => p.id === 'guidao-absolute-hb-002-80mm')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none">
            <p>Chegou do pedal com o pescoço travado?</p>
            <p>O Absolute HB-002 é o remédio para isso.</p>
            <p>Com absurdos 80mm de elevação, ele tira aquele peso que estava esmagando os seus braços e te deixa sentado bem retinho.</p>
            <p>Os 720mm de largura são perfeitos para você passar nos corredores do trânsito sem esbarrar nos retrovisores ou para dominar o equilíbrio empinando a bike.</p>
            <p>O lado ruim dessa frente tão alta?</p>
            <p>Em subidas de trilhas muito inclinadas, a frente da bike vai ficar boba, e você vai perder um pouco de velocidade nas curvas.</p>
            <p>É um investimento certeiro e robusto de alumínio para quem só quer curtir a cidade ou o parque sem chegar em casa moído.</p>
          </div>
          <div className="mt-8 mb-8">
            <AffiliateCard product={products.find(p => p.id === 'guidao-absolute-hb-002-80mm')!} />
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-8 mb-12">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
              <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                <li>Zera as dores no pescoço e costas.</li>
                <li>Ideal para o uso urbano diário.</li>
                <li>Facilita muito nas manobras.</li>
                <li>Alumínio forte e seguro.</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
              <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                <li>Péssimo para subir ladeiras muito íngremes na terra.</li>
                <li>A direção fica mais arisca em altas velocidades.</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* BUNNER DO MEIO */}
        <BunnerDoMeio />

        {/* 4. Guidão Absolute MTB Semi Curvo 20mm 720mm */}
        <section id="guidao-absolute-semi-curvo-20mm" className="scroll-mt-24 pt-8 border-t border-gray-100">
          <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            Guidão Absolute MTB Semi Curvo 20mm 720mm
          </h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'guidao-absolute-semi-curvo-20mm')?.imageUrl} width="800" height="600" loading="lazy" alt={products.find(p => p.id === 'guidao-absolute-semi-curvo-20mm')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none">
            <p>Esse aqui é o famoso faz tudo.</p>
            <p>O Absolute semi-curvo te dá 20mm de elevação, o meio-termo ideal.</p>
            <p>Ele relaxa seus ombros, mas não deixa a frente da bicicleta alta demais a ponto de prejudicar o seu ataque nas subidas.</p>
            <p>Com só 370g, é a peça perfeita para você jogar no lixo aquele guidão pesado de aço que veio de fábrica e deixar a bike muito mais arisca.</p>
            <p>Um detalhe importante: se você for um ciclista bem alto, esses 720mm de largura podem te deixar com os braços fechados demais.</p>
            <p>Tirando isso, ele é o verdadeiro curinga.</p>
            <p>Te dá segurança para rasgar um estradão de terra no domingo e agilidade para o asfalto na segunda-feira.</p>
          </div>
          <div className="mt-8 mb-8">
            <AffiliateCard product={products.find(p => p.id === 'guidao-absolute-semi-curvo-20mm')!} />
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-8 mb-12">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
              <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                <li>Geometria muito versátil (serve pra tudo).</li>
                <li>Leve e muito mais rígido que o aço.</li>
                <li>Não enrosca em trilhas fechadas.</li>
                <li>Compatível com as mesas padrão 31.8mm.</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
              <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                <li>Ciclistas de maior estatura podem achar estreito.</li>
                <li>Não é a peça mais leve do mercado.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Guidão Alto Absolute Nero 80mm Curvo */}
        <section id="guidao-absolute-nero-80mm" className="scroll-mt-24 pt-8 border-t border-gray-100">
          <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            Guidão Alto Absolute Nero 80mm Curvo
          </h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'guidao-absolute-nero-80mm')?.imageUrl} width="800" height="600" loading="lazy" alt={products.find(p => p.id === 'guidao-absolute-nero-80mm')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none">
            <p>Dor nas costas ao pedalar não é normal, amigo.</p>
            <p>O Absolute Nero com 80mm de altura foi feito cirurgicamente para acabar com o alongamento excessivo do seu tronco.</p>
            <p>Ele te deixa pedalar de peito aberto, eliminando a tensão dos ombros.</p>
            <p>Como é de alumínio, ele aguenta o passeio sem adicionar um chumbo desnecessário na dianteira.</p>
            <p>Vamos ser francos, no entanto: erguer tanto o guidão muda o centro de gravidade da magrela.</p>
            <p>Se você colocar essa peça para descer uma trilha cheia de buracos a mil por hora, vai sentir instabilidade.</p>
            <p>Ele é a peça-chave para quem prioriza zero dor e 100% de conforto nos deslocamentos do dia a dia.</p>
          </div>
          <div className="mt-8 mb-8">
            <AffiliateCard product={products.find(p => p.id === 'guidao-absolute-nero-80mm')!} />
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-8 mb-12">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
              <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                <li>Corrige sua postura na mesma hora.</li>
                <li>Alivia a tensão nos braços e pescoço.</li>
                <li>Muito resistente, mas bem levinho.</li>
                <li>Fica muito estiloso na bike.</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
              <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                <li>A frente flutua em subidas pesadas.</li>
                <li>Tira a agilidade nas curvas rápidas de trilha.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. Guidão Rava MTB Trilha Reto 730mm Backsweep 9° */}
        <section id="guidao-rava-flat-730mm" className="scroll-mt-24 pt-8 border-t border-gray-100">
          <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            Guidão Rava MTB Trilha Reto 730mm Backsweep 9°
          </h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'guidao-rava-flat-730mm')?.imageUrl} width="800" height="600" loading="lazy" alt={products.find(p => p.id === 'guidao-rava-flat-730mm')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none">
            <p>Sente formigamento nas mãos?</p>
            <p>O Rava de 730mm mata isso de primeira.</p>
            <p>Embora ele seja um modelo reto (para manter o foco na velocidade), o pulo do gato está nos 9 graus de backsweep.</p>
            <p>Isso quer dizer que as pontas dele são voltadas levemente para trás, imitando o descanso natural das suas mãos.</p>
            <p>Essa angulação tira a pressão das articulações sem precisar levantar a frente da bike.</p>
            <p>É aquele alumínio leve, firme nas descidas e eficiente.</p>
            <p>O único aviso é: se você tem hérnia de disco ou já prefere pedalar com as costas retas, esse modelo flat vai te manter esticado.</p>
            <p>Mas para quem quer performance rápida com punhos saudáveis, ele é imbatível.</p>
          </div>
          <div className="mt-8 mb-8">
            <AffiliateCard product={products.find(p => p.id === 'guidao-rava-flat-730mm')!} />
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-8 mb-12">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
              <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                <li>Seus punhos vão te agradecer.</li>
                <li>Não torce na hora de fazer força.</li>
                <li>730mm é a medida perfeita para quase todo mundo.</li>
                <li>Resistência garantida no alumínio.</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
              <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                <li>Exige que você fique mais debruçado na bike.</li>
                <li>Não corrige altura da frente.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 7. Guidão Absolute Nero Curvo Rise 60mm */}
        <section id="guidao-absolute-nero-60mm" className="scroll-mt-24 pt-8 border-t border-gray-100">
          <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            Guidão Absolute Nero Curvo Rise 60mm
          </h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'guidao-absolute-nero-60mm')?.imageUrl} width="800" height="600" loading="lazy" alt={products.find(p => p.id === 'guidao-absolute-nero-60mm')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none">
            <p>Sabe quando você senta na bike e parece que o guidão sumiu lá embaixo?</p>
            <p>O Absolute Nero de 60mm de elevação salva os ciclistas que sofrem com quadros de geometria muito agressiva.</p>
            <p>Ele levanta as suas mãos, zera a sobrecarga nos tríceps e traz uma pilotagem neutra para você aguentar horas no selim sem sofrer.</p>
            <p>Feito em alumínio, ele traz umas marcações ótimas no meio para você não instalar torto.</p>
            <p>Só lembre que, ao subir o guidão, a roda dianteira fica mais leve.</p>
            <p>Em subidas dignas de mountain bike extremo, você vai ter que deitar o queixo sobre o guidão para não empinar.</p>
            <p>É um ajuste barato e excelente para curtir a natureza em paz.</p>
          </div>
          <div className="mt-8 mb-8">
            <AffiliateCard product={products.find(p => p.id === 'guidao-absolute-nero-60mm')!} />
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-8 mb-12">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
              <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                <li>Salva suas costas rapidamente.</li>
                <li>Aumenta muito o controle visual da frente.</li>
                <li>É super fácil de alinhar na montagem.</li>
                <li>Material que não te deixa na mão.</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
              <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                <li>Pneu da frente perde tração em ladeiras íngremes.</li>
                <li>Não é focado em rendimento esportivo.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 8. Guidão Rava Alto Curvo Rise Bar 20mm */}
        <section id="guidao-rava-rise-20mm" className="scroll-mt-24 pt-8 border-t border-gray-100">
          <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            Guidão Rava Alto Curvo Rise Bar 20mm
          </h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'guidao-rava-rise-20mm')?.imageUrl} width="800" height="600" loading="lazy" alt={products.find(p => p.id === 'guidao-rava-rise-20mm')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none">
            <p>Quer dominar as raízes e pedras sem destruir os pulsos?</p>
            <p>O Rava Rise Bar de 730mm é uma verdadeira aula de ergonomia.</p>
            <p>A mágica dele é juntar 9° virados para trás (backsweep) com 9° voltados para cima (upsweep).</p>
            <p>Na prática, sua mão abraça o guidão de um jeito tão natural que amortece grande parte das pancadas da descida.</p>
            <p>Com só 20mm de elevação e 319g, ele é leve, firme nas subidas e muito superior aos componentes básicos que vêm de fábrica.</p>
            <p>O competidor puro-sangue pode achar ele um pouco estreito, mas para 90% dos ciclistas que curtem uma trilha no final de semana, essa geometria dá um banho de conforto e controle.</p>
          </div>
          <div className="mt-8 mb-8">
            <AffiliateCard product={products.find(p => p.id === 'guidao-rava-rise-20mm')!} />
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-8 mb-12">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
              <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                <li>Posição perfeita para os punhos.</li>
                <li>Leveza que se nota na balança.</li>
                <li>Muito controle nos buracos.</li>
                <li>Acabamento que resiste bem a arranhões.</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
              <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                <li>Pode ser estreito para quem tem os ombros muito largos.</li>
                <li>A altura dupla dele é bem discreta.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 9. Guidão Absolute Nero Rise 40mm Alumínio */}
        <section id="guidao-absolute-nero-40mm" className="scroll-mt-24 pt-8 border-t border-gray-100">
          <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            Guidão Absolute Nero Rise 40mm Alumínio
          </h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'guidao-absolute-nero-40mm')?.imageUrl} width="800" height="600" loading="lazy" alt={products.find(p => p.id === 'guidao-absolute-nero-40mm')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none">
            <p>Se você sente que sua aro 29 é meio preguiçosa para virar, o Absolute com 40mm de elevação muda o jogo.</p>
            <p>Seus 720mm não agarram nos galhos da trilha e dão alavanca de sobra para descer barrancos.</p>
            <p>O legal desses 40mm é que eles parecem encurtar a bike, deixando seu tronco um pouco mais reto e os ombros descansados.</p>
            <p>Ele é aquele alumínio que aceita desaforo, pesando míseros 320g.</p>
            <p>É a escolha de quem quer deixar a bike brincalhona para pular obstáculos.</p>
            <p>O único pênalti é nas subidas bem extremas: essa elevação toda tira um pouquinho do peso do pneu da frente, mas nada que estrague o pedal.</p>
          </div>
          <div className="mt-8 mb-8">
            <AffiliateCard product={products.find(p => p.id === 'guidao-absolute-nero-40mm')!} />
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-8 mb-12">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
              <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                <li>A bicicleta fica muito mais arisca e fácil de guiar.</li>
                <li>Acaba com as dores por má postura.</li>
                <li>Muito leve pro bolso e pra bike.</li>
                <li>Pintura fosca de boa qualidade.</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
              <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                <li>Pode empinar um pouco a frente nos morros.</li>
                <li>Largura travada em 720mm não serve para gigantes.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 10. Guidão Bike Alumínio Reto 720mm 31.8mm Ahead Mtb Backsweep 9° Leve Resistente Ciclismo Mountain Bike Aro 29 */}
        <section id="guidao-mons-bike-flat-720mm" className="scroll-mt-24 pt-8 border-t border-gray-100">
          <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            Guidão Bike Alumínio Reto 720mm 31.8mm Ahead Mtb Backsweep 9° Leve Resistente Ciclismo Mountain Bike Aro 29
          </h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'guidao-mons-bike-flat-720mm')?.imageUrl} width="800" height="600" loading="lazy" alt={products.find(p => p.id === 'guidao-mons-bike-flat-720mm')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none">
            <p>O guidão flat Mons Bike 720mm é para você que quer velocidade sem sofrimento.</p>
            <p>Pesando só 290g, instalar ele é como tirar um saco de areia da frente da bicicleta, melhorando muito as suas subidas.</p>
            <p>O detalhe de ouro são os 9° virados para trás (backsweep).</p>
            <p>Eles protegem suas articulações daquela inflamação chata em viagens longas.</p>
            <p>Como é totalmente reto, ele te obriga a manter aquela postura esticada e agressiva para cortar o vento e ganhar rendimento.</p>
            <p>Tenha consciência: não há altura aqui para aliviar suas costas.</p>
            <p>Ele é focado em giro forte, precisão e resultado na terra.</p>
          </div>
          <div className="mt-8 mb-8">
            <AffiliateCard product={products.find(p => p.id === 'guidao-mons-bike-flat-720mm')!} />
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-8 mb-12">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
              <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                <li>Um dos mais leves da categoria (290g).</li>
                <li>Ângulo que protege seus pulsos.</li>
                <li>Muita rigidez para você não perder força.</li>
                <li>Encaixe perfeito para mesas modernas (31.8mm).</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
              <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                <li>Postura que força um pouco a lombar.</li>
                <li>Zero correção para quem é baixinho.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CROSS-SELL BANNER */}
        <div className="my-12 bg-zinc-900 rounded-2xl p-6 border border-zinc-700">
          <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <ShoppingCart size={24} /> Complete seu setup
          </h3>
          <p className="text-zinc-300 text-sm mb-6">Mudar o guidão pede um ajuste perfeito. Complete o cockpit da sua magrela:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {accessories.filter(i => ['capacete-absolute', 'chave-dinamometrica', 'bomba-ar-portatil'].includes(i.id)).map(p => {
              return (
                <a 
                  key={p.id}
                  href={p.affiliateUrl} 
                  aria-label={`Ver oferta de ${p.name}`} 
                  target="_blank" 
                  rel="noopener noreferrer sponsored nofollow" 
                  className="block bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden hover:border-cyan-500 transition-colors group shadow-lg flex flex-col h-full"
                >
                  <div className="aspect-square bg-white flex items-center justify-center p-4">
                    <img loading="lazy" width="800" height="600" src={p.imageUrl} alt={p.name} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform" width="400" height="400" loading="lazy" />
                  </div>
                  <div className="p-4 text-center flex flex-col items-center flex-grow justify-between">
                    <h4 className="text-zinc-100 font-bold text-sm mb-3">{p.name}</h4>
                    <span className="block bg-cyan-500 group-hover:bg-cyan-400 text-zinc-950 w-full py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-md">Ver Preço →</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* COMO ESCOLHER - GUIDAO */}
        <h2 className="text-3xl font-extrabold text-white border-b-4 border-cyan-400 pb-2 mt-16 mb-8">
          Como Escolher a Geometria Ideal para MTB 29?
        </h2>
        <div className="space-y-6 prose prose-lg max-w-none text-zinc-300 mb-8">
          <p>Para domar as rodas grandonas de uma aro 29, você precisa sacar um pouco da física da bike.</p>
          <p>Como a roda tem muita inércia, se você usar um guidão muito curtinho, a direção vai ficar dura.</p>
          <p>É por isso que recomendamos larguras acima de 700mm, te dando a alavanca certa para jogar a bike nas curvas fechadas sem fazer força de caminhoneiro.</p>
          <p>O segredo está em misturar a altura (rise) com a entortadinha pra trás (backsweep).</p>
          <p>Vai subir morro até desmaiar? Um guidão reto trava seu peso na frente e a roda não empina.</p>
          <p>Quer descer rasgando ou rodar sem dor no pescoço? O curvo traz seu peito para cima.</p>
          <p>Ah, e cheque sempre se o centro dele é de 31.8mm para não precisar comprar uma mesa nova.</p>
          <p>Escolher certo aqui não é frescura, é economizar energia de verdade na trilha.</p>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">Guidão Reto vs Curvo: Qual Garante Mais Controle?</h3>
        <div className="space-y-4 prose prose-lg text-zinc-300 mb-8">
          <p>Isso não é só uma escolha visual, amigo; é decidir de que lado da gravidade você quer ficar.</p>
          <p>O guidão reto (flat) é o dono das ladeiras.</p>
          <p>Ele joga o seu queixo lá para perto do pneu dianteiro.</p>
          <p>Ao abaixar o seu centro de peso, a frente da bike gruda no chão em subidas bizarras e a tração dianteira fica incrível.</p>
          <p>Por outro lado, o guidão curvo (riser) é o seu anjo da guarda nas descidas.</p>
          <p>Ao elevar suas mãos, ele joga o peso do seu corpo para trás.</p>
          <p>Isso zera aquele frio na barriga de capotar por cima do guidão quando você desce um barranco.</p>
          <p>Para 99% de nós que pedalamos por diversão, o guidão curvo perdoa muito mais os pequenos erros na terra.</p>
        </div>
        
        <div className="my-12">
          <img loading="lazy" width="800" height="600" src="/images/blog/1/guidao-reto-vs-curvo.webp" alt="Comparativo Guid�o Reto vs Curvo" className="w-full rounded-xl shadow-lg border border-zinc-700" width="800" height="600" loading="lazy" />
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">Alumínio vs Titânio: Qual o Melhor Material?</h3>
        <div className="space-y-4 prose prose-lg text-zinc-300 mb-8">
          <p>Esse papo vai além de gramas na balança; trata-se de como o material sente os buracos.</p>
          <p>O alumínio é o padrão que deu certo: não torce, transmite toda a força da sua perna para o chão e tem um preço super honesto para você rodar no asfalto ou na competição.</p>
          <p>É rígido na medida certa.</p>
          <p>O titânio, por outro lado, é produto de luxo.</p>
          <p>A mágica dele é a flexibilidade.</p>
          <p>Sabe aquelas pequenas vibrações de terra batida que formigam a sua mão inteira?</p>
          <p>O titânio absorve isso antes de chegar no seu braço.</p>
          <p>Se você passa dias no selim e quer poupar o corpo, ele é espetacular.</p>
          <p>O problema é que o preço dele também vai formigar a sua conta bancária.</p>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">A Importância do Backsweep e Largura na Trilha</h3>
        <div className="space-y-4 prose prose-lg text-zinc-300 mb-8">
          <p>Muitos ciclistas focam só na altura e esquecem o backsweep (a inclinação do guidão para trás).</p>
          <p>Isso é o que salva a sua vida articular!</p>
          <p>Nenhum pulso humano trabalha totalmente reto.</p>
          <p>Se o guidão não tiver essa leve curva (geralmente uns 9 graus), seu antebraço vai inflamar.</p>
          <p>É aquela angulação marota que encaixa a mão como uma luva.</p>
          <p>E quanto à largura: aro 29 não aceita guidão de motoca.</p>
          <p>Se for menor que 720mm, a bike fica nervosa e arisca.</p>
          <p>A regra de ouro da oficina é: compre mais largo do que você acha que precisa.</p>
          <p>Se raspar na árvore, você corta as pontinhas depois.</p>
          <p>Melhor ajeitar na serra do que chorar por um guidão estreito demais na ladeira.</p>
        </div>

        <div className="my-12">
          <img loading="lazy" width="800" height="600" src="/images/blog/1/guidao-backsweep-maos.webp" alt="Backsweep guiando a posi��o natural das m�os" className="w-full rounded-xl shadow-lg border border-zinc-700" width="800" height="600" loading="lazy" />
        </div>

        <h2 className="text-3xl font-extrabold text-white border-b-4 border-cyan-400 pb-2 mt-16 mb-8">
          Dicas de Instalação e Ajuste de Mesa
        </h2>
        
        {/* VÍDEO DO YOUTUBE */}
        <div className="my-12 p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-xl">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-cyan-400">
            <Sparkles size={20} className="animate-spin" /> Como instalar e alinhar guidão de bicicleta MTB
          </h3>
          <p className="text-sm text-slate-300 mb-6">Aprenda com este tutorial prático a melhor forma de ajustar o cockpit da sua magrela.</p>
          <div className="flex justify-center">
            <iframe loading="lazy" 
              width="560" 
              height="315" 
              src="https://www.youtube-nocookie.com/embed/8bA_vNlO75Q" 
              title="Como instalar guidão" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="max-w-full rounded-lg shadow-lg border border-slate-700"
            ></iframe>
          </div>
        </div>

        <div className="space-y-4 prose prose-lg text-zinc-300 mb-8">
          <p>A instalação do guidão é o momento que separa um pedal seguro de um desastre no meio do mato.</p>
          <p>Comece limpando o óleo da mesa com um pano e álcool.</p>
          <p>Graxa ali exige que você aperte além do limite para fixar.</p>
          <p>Depois, use sempre uma ferramenta de torque (torquímetro).</p>
          <p>Se você for no olhômetro e esmagar o alumínio, pode abrir trincas perigosas no material!</p>
          <p>Use as marquinhas no centro para alinhar o ângulo ideal para o seu punho e, antes de rodar, vire o guidão tudo para os dois lados para ter certeza de que nenhum cabo de freio ficou esgarçado.</p>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">Por que Investir em Alumínio 6061 para sua Bike?</h3>
        <div className="space-y-4 prose prose-lg text-zinc-300 mb-8">
          <p>O alumínio 6061 virou a escolha número um das marcas top de linha simplesmente porque entrega tudo o que a gente precisa sem custar o olho da cara.</p>
          <p>Ele não tem a flexibilidade indesejada das ligas de metal ruins, o que garante que a força do seu corpo não se perca pelo caminho.</p>
          <p>Aço pesado vira uma âncora nas subidas; carbono exige cuidados de laboratório na hora de apertar os parafusos.</p>
          <p>O 6061, não.</p>
          <p>Se você sofrer um impacto monstruoso num salto, ele tende a amassar e te avisar, em vez de rachar no meio do nada de surpresa (como faz o carbono).</p>
          <p>É a garantia de que o equipamento vai segurar a bronca para você focar apenas em descer a trilha rápido.</p>
        </div>

        {/* FAQ */}
        <h2 className="text-3xl font-extrabold text-white border-b-4 border-cyan-400 pb-2 mt-16 mb-8">
          Perguntas Frequentes (FAQ)
        </h2>
        <div className="space-y-4 prose prose-lg text-zinc-300 mb-8">
          <p>A oficina é o lugar onde a gente mata aqueles mitos do mountain bike que, se você der ouvidos, vão arruinar seu domingo.</p>
          <p>Tem quem ache que não pode serrar o guidão.</p>
          <p>Pode sim! Se estiver longo demais a ponto de você bater nos galhos da trilha, passe a serra.</p>
          <p>Mas faça cortando 10 milímetros de cada lado por vez, sem pressa, para não estragar a alavanca da sua 29.</p>
          <p>E não faça gambiarras na mesa! O meio do seu guidão novo precisa ser igualzinho ao da sua mesa (hoje, 90% usam a medida 31.8mm).</p>
          <p>Por último: tomou um rola nas pedras? Olhe sua bike.</p>
          <p>O metal esconde microfissuras muito perigosas.</p>
          <p>Não deixe o barato sair caro, inspecione sempre após um susto.</p>
        </div>

        <div className="space-y-4 mb-16">
          {faqData.map((faq, index) => (
            <div key={index} className="border border-zinc-700 rounded-xl overflow-hidden bg-zinc-800/50">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-4 sm:p-6 flex justify-between items-center focus:outline-none hover:bg-zinc-800 transition-colors"
              >
                <h3 className="font-bold text-white text-lg">{faq.question}</h3>
                {openFaq === index ? (
                  <ChevronUp className="text-cyan-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-zinc-500 flex-shrink-0" />
                )}
              </button>
              {openFaq === index && (
                <div className="p-4 sm:p-6 pt-0 text-zinc-300 prose prose-invert">
                  {faq.answer.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-extrabold text-white border-b-4 border-cyan-400 pb-2 mt-16 mb-8">
          Conclusão
        </h2>
        <div className="space-y-4 prose prose-lg text-zinc-300 mb-12">
          <p>Mudar o guidão não é apenas sobre estética; é colocar a saúde do seu corpo em primeiro lugar.</p>
          <p>Não aceite dor nas costas, ombros ou mãos formigando como se fossem o preço a pagar por pedalar.</p>
          <p>Com um investimento relativamente pequeno, você ajusta a frente da magrela para trabalhar com você, e não contra você.</p>
          <p>Escolha o seu preferido na nossa lista e vá curtir as trilhas com zero sofrimento!</p>
        </div>

        {/* AUTHOR BIO */}
        <div className="mt-16 bg-zinc-800/50 p-6 sm:p-8 rounded-2xl border border-zinc-700 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <img loading="lazy" width="800" height="600" src="/images/autores/Rafael Martins.webp" alt="Rafael Martins" className="w-24 h-24 rounded-full border-4 border-cyan-400 object-cover" width="96" height="96" loading="lazy" />
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Sobre o Autor: Rafael Martins</h3>
            <p className="text-zinc-300 text-sm leading-relaxed mb-4">
              Mecânico de bicicletas e ciclista apaixonado com mais de 10 anos de experiência em montagem, manutenção e testes de componentes. Especialista em ajudar ciclistas a encontrarem a configuração ideal para conforto e performance.
            </p>
            <a href="/author/rafael-martins" className="text-cyan-400 hover:text-cyan-300 font-bold text-sm inline-flex items-center gap-1">
              Ver mais artigos de Rafael <ArrowRight size={16} />
            </a>
          </div>
        </div>

      </div>
    </>
  );
};
