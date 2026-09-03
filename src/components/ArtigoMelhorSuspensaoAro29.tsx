import React, { useState } from 'react';
import { Calendar, Clock, ChevronRight, ChevronDown, ChevronUp, Star, ShoppingCart, Check, X, HelpCircle, Activity, ArrowRight } from 'lucide-react';
import { articles } from '../data/articles';
import { authors } from '../data/authors';
import { products, accessories } from '../data/products';
import AffiliateCard from './AffiliateCard';
import ExitIntentPopup from './ExitIntentPopup';
import BunnerDoMeio from './BunnerDoMeio';

export default function ArtigoMelhorSuspensaoAro29() {
  const article = {
    title: "Melhor suspensão para bike aro 29 (8 Modelos Recomendados)",
    category: "Peças e Upgrades",
    date: "2024-06-15",
    readTime: "8 min de leitura",
    imageUrl: "/images/blog/1/melhor-suspensao-para-bike-aro-29.webp"
  };
  const author = authors.find(a => a.slug === 'rafael-martins');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [simulatorChoice, setSimulatorChoice] = useState<string | null>(null);

  if (!author) return null;

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Qual é a suspensão de melhor custo-benefício para aro 29?",
      answer: "O modelo GTA Alumínio com 100mm de curso domina essa categoria. Ele entrega o essencial para o uso misto urbano e trilhas leves: ombro em alumínio para reduzir o peso, ajuste de pré-carga e a conveniência da trava remota. É a escolha certeira para quem precisa de eficiência diária sem arcar com o custo de sistemas a ar mais complexos."
    },
    {
      question: "Vale a pena investir em suspensão a ar ou a mola é suficiente?",
      answer: "Se o seu pedal é constante e focado em trilhas técnicas, o sistema a ar é um divisor de águas absoluto. Ele permite calibrar a pressão exata conforme o seu peso, resultando em uma leitura de terreno superior e um conjunto significativamente mais leve. Já os garfos a mola são mais rústicos e pesados, oferecendo amortecimento constante com ajuste limitado. Eles são perfeitos e econômicos para o uso urbano ou estradões de fim de semana, onde a precisão milimétrica não é uma exigência."
    },
    {
      question: "Qualquer garfo de suspensão serve na minha bike 29?",
      answer: "Definitivamente, não. A instalação exige compatibilidade técnica em quatro frentes cruciais: a medida da espiga (se é reta de 28,6 mm ou cônica tapered), o padrão do eixo (blocagem comum QR de 9 mm ou passante Boost de 15 mm), o sistema de fixação do freio a disco e o curso recomendado pelo fabricante do seu quadro. Colocar uma suspensão de 130 mm em um quadro desenhado para 90 mm altera gravemente a geometria e a segurança."
    },
    {
      question: "Quais marcas entregam maior durabilidade e confiança?",
      answer: "No mercado de reposição com foco em entrada e intermediários, a Absolute é a líder indiscutível, garantindo peças acessíveis e ampla compatibilidade. Quando o escopo muda para alta performance e trilhas agressivas, a RockShox assume o posto de referência mundial, entregando tecnologias de amortecimento de elite em modelos como a Recon Silver RL (e a versão Judy Silver TK)."
    },
    {
      question: "Quais são os sinais de que o componente precisa de revisão mecânica?",
      answer: "Fique atento à perda de sensibilidade, ruídos metálicos secos durante as pancadas ou anéis de óleo excessivos vazando pelas hastes. Garfos a ar exigem recalibragem regular da câmara e troca do óleo do sistema hidráulico anualmente sob uso intenso. Em suspensões mais simples, o endurecimento do elastômero é o sintoma mais comum de desgaste."
    }
  ];

  const handleSimulator = (choice: string) => {
    setSimulatorChoice(choice);
  };

  return (
    <>
      <ExitIntentPopup />
      
      {/* Hero Section */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden -mx-6 mb-12 rounded-b-3xl md:-mx-0 md:rounded-3xl">
        <div className="absolute inset-0 z-0">
          <img loading="lazy" width="800" height="600" src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Melhor suspensão para bike aro 29 <br/>
            <span className="text-cyan-400">(8 Modelos Recomendados)</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span>Por</span>
              <a href={`/author/${author.slug}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors font-semibold group">
                {author.name}
              </a>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Content */}
      <div className="max-w-none">
        
        <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none mb-12">
          <p>Seus braços formigam no final da trilha e a bicicleta parece pular mais do que deveria na buraqueira?</p>
          <p>Esse é o clássico pedido de socorro do seu sistema de amortecimento.</p>
          <p>Trocar a suspensão não é frescura estética; é a linha divisória entre curtir um pedal técnico ou voltar para casa com as articulações doloridas.</p>
          <p>Vamos entender o que cada sistema entrega de verdade no terreno para você escolher a melhor suspensão para a sua aro 29 sem rasgar dinheiro.</p>
        </div>

        {/* SIMULADOR RÁPIDO */}
        <div className="my-8 p-6 bg-gradient-to-br from-zinc-800 to-zinc-900 text-white rounded-2xl shadow-xl border border-zinc-700">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="text-cyan-400 w-6 h-6 animate-pulse" />
            <h3 className="text-xl font-bold">Simulador Rápido: Qual o seu principal desafio hoje nas trilhas?</h3>
          </div>
          <p className="text-zinc-300 text-sm mb-4">Selecione uma opção para ver a indicação ideal:</p>
          
          <div className="grid sm:grid-cols-2 gap-3">
            <button 
              onClick={() => handleSimulator('conforto')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${simulatorChoice === 'conforto' ? 'bg-cyan-500 text-zinc-950 border-cyan-500' : 'bg-zinc-800 border-zinc-600 hover:border-cyan-500'}`}
            >
              <span>Dores nos braços e trepidação excessiva</span>
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => handleSimulator('performance')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${simulatorChoice === 'performance' ? 'bg-cyan-500 text-zinc-950 border-cyan-500' : 'bg-zinc-800 border-zinc-600 hover:border-cyan-500'}`}
            >
              <span>Falta de controle em descidas rápidas</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {simulatorChoice && (
            <div className="mt-6 p-4 bg-zinc-700/50 border border-zinc-600 rounded-xl animate-fadeIn">
              {simulatorChoice === 'conforto' ? (
                <p className="text-sm leading-relaxed">
                  🎯 <strong>Dica de Especialista:</strong> Para máximo conforto e absorção de trepidação fina, recomendamos fortemente investir em <strong>sistemas a ar</strong>. Eles permitem calibrar a suspensão exatamente para o seu peso, entregando maciez incomparável.
                </p>
              ) : (
                <p className="text-sm leading-relaxed">
                  🎯 <strong>Dica de Especialista:</strong> Para leitura de terreno e estabilidade em curvas, busque <strong>sistemas a mola ou ar mais robustos</strong>, de preferência com hastes maiores (32mm ou mais) e eixo passante (Boost). Eles evitam a torção lateral nas descidas.
                </p>
              )}
            </div>
          )}
        </div>

        {/* VITRINE */}
        <div className="mb-16 max-w-[850px] mx-auto bg-zinc-800/50 p-2.5 rounded-2xl sm:p-5 border border-zinc-700 shadow-sm mt-12">
          <h2 className="text-2xl font-extrabold text-white mb-6 text-center">As 8 Melhores Suspensões para Bicicleta</h2>
          
          <div className="overflow-x-auto rounded-xl border border-zinc-700 bg-zinc-900">
            <table className="w-full border-collapse">
              <thead className="bg-zinc-800 text-zinc-300 text-xs uppercase font-bold border-b border-zinc-700">
                <tr>
                  <th className="p-3 text-center w-[70px] sm:w-[90px]">Foto</th>
                  <th className="p-3 text-left">Modelo</th>
                  <th className="p-3 text-center hidden sm:table-cell">Indicação</th>
                  <th className="p-3 text-center w-[100px] sm:w-[150px]">Ação</th>
                </tr>
              </thead>
              <tbody>
                {[
                  'absolute-prime-sl', 'rockshox-judy-silver', 'gta-aluminio', 'absolute-330-hlo',
                  'absolute-nero-suspensao', 'absolute-mxfk-19', 'bikemaxx-trava-ombro', 'cly-harpia'
                ].map((id) => {
                  const product = products.find(p => p.id === id);
                  if (!product) return null;
                  return (
                    <tr key={product.id} className="border-b border-zinc-700 last:border-b-0 hover:bg-zinc-800/50 transition-colors">
                      <td className="p-2 align-middle text-center">
                        <div className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] border border-slate-100 rounded flex items-center justify-center p-0.5 bg-zinc-100 mx-auto overflow-hidden relative">
                          <div className="absolute top-0 left-0 bg-cyan-500 text-zinc-950 text-[8px] font-bold px-1 py-0.5 rounded-br-sm z-10">
                            TOP
                          </div>
                          {product.imageUrl ? (
                             <img loading="lazy" width="800" height="600" src={product.imageUrl} alt={product.name} className="max-w-full max-h-full block object-contain relative z-0" />
                          ) : (
                             <span className="text-[10px] text-zinc-400 font-bold relative z-0">Garfo</span>
                          )}
                        </div>
                      </td>
                      <td className="p-3 text-sm sm:text-base font-bold text-white align-middle">
                        <a href={product.affiliateUrl} aria-label={`Ver oferta de ${product.name}`} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                          {product.name}
                        </a>
                      </td>
                      <td className="p-3 text-sm text-zinc-400 text-center align-middle hidden sm:table-cell">
                        {product.category}
                      </td>
                      <td className="p-3 align-middle text-center">
                        <a href={product.affiliateUrl} aria-label={`Ver oferta de ${product.name}`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-cyan-500 hover:bg-cyan-400 text-zinc-950 text-[11px] sm:text-sm font-bold py-2 sm:py-2.5 px-3 sm:px-5 rounded transition-colors whitespace-nowrap"
                        >
                          VER PREÇO
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Produto 1 */}
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-8">
          <h3>Melhor suspensão custo benefício - Absolute Prime Sl Aro 29</h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'absolute-prime-sl')?.imageUrl} alt="Suspensão Bike Absolute Prime Sl Aro 29" className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          
          <div className="space-y-4">
            <p>A Absolute Prime SL é o seu passaporte para o mundo dos sistemas a ar sem precisar vender um rim.</p>
            <p>O que isso muda no pedal?</p>
            <p>Você calibra a pressão do amortecedor baseada exatamente no seu peso.</p>
            <p>Isso faz o garfo "ler" a trilha com muita sensibilidade.</p>
            <p>A trava remota no guidão é uma mão na roda para você bloquear o sistema no estradão e não perder força na pedalada.</p>
            <p>Só tenha em mente que o sistema a ar exige revisão no tempo certo para não vazar.</p>
            <p>E você vai precisar de um pouquinho de paciência para ajustar o sag (afundamento inicial) ideal para o seu peso.</p>
          </div>
        </div>
        <div className="mb-10">
          <AffiliateCard product={products.find(p => p.id === 'absolute-prime-sl')!} />
        </div>
        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2"><Check className="w-5 h-5" /> Prós</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Ajuste na medida exata do seu peso corporal.</li>
              <li>Tira muito peso da frente da bicicleta.</li>
              <li>Trava no guidão super prática.</li>
              <li>Excelente custo-benefício para tecnologia a ar.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2"><X className="w-5 h-5" /> Contras</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Exige lubrificação e manutenção rigorosa.</li>
              <li>Sujeira acumulada nos retentores prejudica o ar.</li>
            </ul>
          </div>
        </div>

        {/* Produto 2 */}
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-8">
          <h3>Melhor suspensão para bike Aro 29 - Rockshox Judy Silver Tk</h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'rockshox-judy-silver')?.imageUrl} alt="Garfo Suspensão Aro 29 Rockshox Judy Silver Tk" className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          
          <div className="space-y-4">
            <p>A brincadeira fica muito séria com a RockShox Judy Silver TK.</p>
            <p>Essa é para quem engole raiz e pedra grande e não aceita a frente da bike instável.</p>
            <p>Ela tem o sistema interno TurnKey, que segura as pancadas fortes sem te arremessar para frente.</p>
            <p>Com as pernas (bengalas) robustas e o eixo Boost, ela é incrivelmente firme.</p>
            <p>Quando você entrar rápido numa curva de terra solta, a roda não vai "torcer".</p>
            <p>Mas atenção na mecânica: seu cubo dianteiro precisa ser padrão Boost (15x110mm).</p>
            <p>Se não for, ela não encaixa na sua roda antiga.</p>
            <p>Ela é um pouco mais pesada que os modelos de corrida puro-sangue porque foi feita para durar uma vida inteira.</p>
          </div>
        </div>
        <div className="mb-10">
          <AffiliateCard product={products.find(p => p.id === 'rockshox-judy-silver')!} />
        </div>
        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2"><Check className="w-5 h-5" /> Prós</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Eixo Boost garante rigidez lateral impressionante.</li>
              <li>Sistema interno faz leitura de terreno perfeita.</li>
              <li>Robustez extrema para trilhas agressivas.</li>
              <li>Hastes em aço que aguentam muito castigo.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2"><X className="w-5 h-5" /> Contras</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Só serve se o seu cubo também for Boost.</li>
              <li>É um pouco mais pesada que outras opções premium.</li>
            </ul>
          </div>
        </div>

        {/* Produto 3 */}
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-8">
          <h3>Garfo Suspensão Aro 29 Gta Alumínio</h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'gta-aluminio')?.imageUrl} alt="Garfo Suspensão Aro 29 Gta Alumínio" className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          
          <div className="space-y-4">
            <p>Tá com a grana curta e não aguenta mais os solavancos dos buracos da cidade?</p>
            <p>O garfo GTA é o "arroz com feijão" bem temperado.</p>
            <p>Feito com base em aço e topo em alumínio, ele entrega a resistência que você precisa para misturar asfalto ruim e um estradão de terra leve.</p>
            <p>O grande trunfo é a trava remota.</p>
            <p>Você endurece o garfo para subir uma ladeira sem precisar tirar a mão da manopla.</p>
            <p>Ele também tem um botão de pré-carga para deixar a mola mais firme se você for mais pesado.</p>
            <p>O contrapeso dessa resistência toda é literal: beirando os 2,85 kg, ele não é a escolha para quem conta gramas.</p>
            <p>Mas é excelente para quem quer parar de transferir impactos para os pulsos e ombros no deslocamento diário.</p>
          </div>
        </div>
        <div className="mb-10">
          <AffiliateCard product={products.find(p => p.id === 'gta-aluminio')!} />
        </div>
        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2"><Check className="w-5 h-5" /> Prós</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Trava ágil no guidão.</li>
              <li>Ajuste de mola rápido.</li>
              <li>Baixa manutenção.</li>
              <li>Compatível com freio a disco mecânico/hidráulico.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2"><X className="w-5 h-5" /> Contras</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Bastante pesado.</li>
              <li>Eixo fino de 9mm.</li>
            </ul>
          </div>
        </div>

        {/* Produto 4 */}
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-8">
          <h3>Garfo Suspensão Absolute 330-HLO Aro 29 com Trava no Guidão</h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'absolute-330-hlo')?.imageUrl} alt="Garfo Suspensão Absolute 330-HLO" className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          
          <div className="space-y-4">
            <p>Se você superou a fase iniciante e quer algo mais confiável sem migrar para o ar, a Absolute 330-HLO é a sua parada.</p>
            <p>Ela trabalha com mola e um bloco de elastômero interno.</p>
            <p>O que ela tem de legal?</p>
            <p>As hastes são mais parrudas (30 mm) e o ombro é de alumínio.</p>
            <p>Isso deixa a pilotagem menos "bamba" que os garfos fininhos de entrada.</p>
            <p>A trava no guidão continua sendo o recurso que salva a sua vida na hora de subir uma serra de asfalto.</p>
            <p>Só não peça milagres: o elastômero tem a mania chata de ressecar e ficar mais duro em dias muito frios ou depois de um longo tempo de uso.</p>
            <p>Ela não tem a leitura suave dos sistemas a óleo, mas para bater ponto na trilha do final de semana, vai te entregar muita alegria.</p>
          </div>
        </div>
        <div className="mb-10">
          <AffiliateCard product={products.find(p => p.id === 'absolute-330-hlo')!} />
        </div>
        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2"><Check className="w-5 h-5" /> Prós</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Hastes de 30mm e ombro em alumínio.</li>
              <li>Trava prática no guidão.</li>
              <li>Sistema confiável e simples.</li>
              <li>Ótima opção intermediária.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2"><X className="w-5 h-5" /> Contras</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Elastômero endurece no frio.</li>
              <li>Leitura de terreno inferior.</li>
            </ul>
          </div>
        </div>

        {/* BUNNER DO MEIO */}
        <div className="my-12">
          <BunnerDoMeio />
        </div>

        {/* Produto 5 */}
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-8">
          <h3>Garfo Suspensão Absolute Nero Aro 29 com Trava no Guidão</h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'absolute-nero-suspensao')?.imageUrl} alt="Garfo Suspensão Absolute Nero Aro 29" className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          
          <div className="space-y-4">
            <p>A Absolute Nero é a salvação das mountain bikes de entrada.</p>
            <p>Ela foi feita para quem usa a bike todo santo dia na ciclovia e no domingo bota o pneu na terra.</p>
            <p>A sacada desse modelo são as hastes de 32 mm, que dão uma firmeza excelente para desviar rápido de um buraco.</p>
            <p>Ela trabalha só com mola helicoidal, bem raiz.</p>
            <p>Tem um ajustezinho de carga lá em cima para você não deixar ela macia a ponto de bater no fundo.</p>
            <p>Como é um sistema bem mecânico, ela é fácil e barata de consertar em qualquer oficina.</p>
            <p>O lado negativo é o peso de 2,3 kg e a leitura de terreno que, comparada com as opções a ar, é bem mais rústica.</p>
          </div>
        </div>
        <div className="mb-10">
          <AffiliateCard product={products.find(p => p.id === 'absolute-nero-suspensao')!} />
        </div>
        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2"><Check className="w-5 h-5" /> Prós</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Ótima para uso misto.</li>
              <li>Hastes 32mm firmes.</li>
              <li>Mola durável e fácil conserto.</li>
              <li>Manutenção barata.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2"><X className="w-5 h-5" /> Contras</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Peso elevado (2,3 kg).</li>
              <li>Menos macia que opções a ar.</li>
            </ul>
          </div>
        </div>

        {/* Produto 6 */}
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-8">
          <h3>Garfo Suspensão Absolute MXFK-19 Aro 29 Aheadset Aço</h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'absolute-mxfk-19')?.imageUrl} alt="Garfo Suspensão Absolute MXFK-19" className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          
          <div className="space-y-4">
            <p>Quer aposentar aquele garfo duro original e colocar o primeiro amortecedor na bike?</p>
            <p>A MXFK-19 é um trator.</p>
            <p>Toda construída em aço, ela vai aguentar os desaforos do asfalto quebrado sem abrir o bico.</p>
            <p>O esquema de molas dela tem ajuste no topo, e a trava é hidráulica.</p>
            <p>Vamos alinhar a expectativa: aço é forte, mas pesa.</p>
            <p>Com quase 2,89 kg, a frente da sua bicicleta vai ficar pesada para levantar numa calçada.</p>
            <p>É um equipamento bruto, para iniciantes que prezam por longevidade.</p>
            <p>Feita para quem não liga para o cronômetro na hora de subir o morro.</p>
          </div>
        </div>
        <div className="mb-10">
          <AffiliateCard product={products.find(p => p.id === 'absolute-mxfk-19')!} />
        </div>
        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2"><Check className="w-5 h-5" /> Prós</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Aço super resistente.</li>
              <li>Trava hidráulica útil.</li>
              <li>Ajuste de pré-carga.</li>
              <li>Alta longevidade.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2"><X className="w-5 h-5" /> Contras</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Muito pesada (2,89 kg).</li>
              <li>Inadequada para trilhas técnicas.</li>
            </ul>
          </div>
        </div>

        {/* Produto 7 */}
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-8">
          <h3>Garfo Suspensão Aro 29 Bikemaxx Trava Ombro</h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'bikemaxx-trava-ombro')?.imageUrl} alt="Garfo Suspensão Aro 29 Bikemaxx" className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          
          <div className="space-y-4">
            <p>O garfo Bikemaxx Trava Ombro é o arroz com feijão purinho.</p>
            <p>Ele usa a espiga clássica de 28,6 mm (a famosa espiga "over" reta).</p>
            <p>Então não precisa caçar adaptador para colocar na maioria dos quadros básicos.</p>
            <p>A trava fica direto no ombro do garfo.</p>
            <p>Isso quer dizer que, se você ver a subida chegando, vai precisar soltar uma das mãos e girar a chave antes de começar a fazer força no pedal.</p>
            <p>Aço de ponta a ponta deixa ele pesadão, mas é inegável que você tira as dores dos braços no uso diário.</p>
            <p>Se você só quer sair da rigidez extrema para ir à padaria ou ao trabalho sem sofrer, o investimento vale muito a pena.</p>
          </div>
        </div>
        <div className="mb-10">
          <AffiliateCard product={products.find(p => p.id === 'bikemaxx-trava-ombro')!} />
        </div>
        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2"><Check className="w-5 h-5" /> Prós</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Espiga reta (sem adaptadores).</li>
              <li>Trava no ombro.</li>
              <li>Ótimo custo-benefício.</li>
              <li>Reduz dores nos braços.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2"><X className="w-5 h-5" /> Contras</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Estrutura pesada em aço.</li>
              <li>Trava exige soltar o guidão.</li>
            </ul>
          </div>
        </div>

        {/* Produto 8 */}
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-8">
          <h3>Garfo Suspensão Cly Harpia 29 Com Trava e Ajuste Freio a Disco</h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'cly-harpia')?.imageUrl} alt="Garfo Suspensão Cly Harpia 29" className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          
          <div className="space-y-4">
            <p>A Cly Harpia junta o aço carbono das pernas com o alumínio do ombro para não ficar um tijolo tão pesado.</p>
            <p>Ela fica na casa dos 2,91 kg.</p>
            <p>Ela tem 100 mm de curso, que é o padrão ouro para engolir os buracos da cidade e do parque.</p>
            <p>O detalhe bem legal dela é o ajuste de retorno.</p>
            <p>Você pode pedir para a oficina regular se quer que o garfo volte rápido ou devagar depois da pancada, deixando a bike mais no seu estilo.</p>
            <p>Ela vai usar elastômero por dentro, o que significa que é mais durinha que uma suspensão a ar.</p>
            <p>Mas cumpre o papel para zerar o formigamento nas mãos nos pedais recreativos.</p>
          </div>
        </div>
        <div className="mb-10">
          <AffiliateCard product={products.find(p => p.id === 'cly-harpia')!} />
        </div>
        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2"><Check className="w-5 h-5" /> Prós</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Curso de 100mm ideal.</li>
              <li>Ombro em alumínio.</li>
              <li>Ajuste de retorno prático.</li>
              <li>Evita formigamento nas mãos.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2"><X className="w-5 h-5" /> Contras</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Bem pesada (2,91 kg).</li>
              <li>Menos responsiva.</li>
            </ul>
          </div>
        </div>

        {/* CROSS-SELL */}
        <div className="my-12 bg-zinc-900 rounded-2xl p-6 border border-zinc-700">
          <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <ShoppingCart size={24} /> Acessórios Recomendados para Suspensão
          </h3>
          <p className="text-zinc-300 text-sm mb-6">Para instalar e manter sua nova suspensão nas melhores condições, recomendamos estes acessórios indispensáveis: Bomba de Ar de Alta Pressão, Chave Dinamométrica e Adaptador Tapered.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {accessories.filter(i => ['bomba-suspensao-absolute', 'chave-dinamometrica', 'adaptador-suspensao-tapered'].includes(i.id)).map(p => {
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
                    <img loading="lazy" width="800" height="600" src={p.imageUrl} alt={p.name} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform" />
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

        {/* GUIA DE COMPRAS */}
        <h2 className="text-3xl font-extrabold text-white border-b-4 border-cyan-400 pb-2 mt-16 mb-8">
          Como escolher a melhor suspensão para bicicleta?
        </h2>
        <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none mb-12">
          <p>Não adianta se encantar pela estética de uma suspensão se a espiga não encaixa no seu quadro.</p>
          <p>Trocar o amortecedor é aliar a matemática das suas medidas com o perrengue que você enfrenta no terreno.</p>
          <p>Se errar nos detalhes técnicos, você gasta grana para carregar peso inútil.</p>
          <p>Vamos dissecar as peças para você bater o olho e saber o que funciona.</p>
        </div>

        <h3 className="text-2xl font-bold text-cyan-400 mb-6 mt-12">Mola, elastômero ou ar?</h3>
        <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none mb-8">
          <p>Garfos de mola são o pau para toda obra: você instala, pedala, e eles aguentam o tranco.</p>
          <p>Mas são pesados e pulam demais em buracos sequenciais.</p>
          <p>O elastômero ajuda a dar uma "freiada" na mola, mas resseca com o calor e o tempo de uso.</p>
          <p>Se você quer que a roda pareça colada com supercola no chão, o caminho é o ar.</p>
          <p>Você injeta a pressão exata para os seus quilos na balança.</p>
          <p>O garfo absorve até a pedrinha solta, não afunda de bobeira nas curvas e tira um peso considerável da frente da bike.</p>
          <p>É o nível que separa quem sofre na trilha de quem flutua nela.</p>
        </div>

        {/* Cross-Sell 1: Bomba de Ar */}
        <div className="my-12">
          <div className="mb-8">
            <img loading="lazy" width="800" height="600" src={accessories.find(p => p.id === 'bomba-suspensao-absolute')?.imageUrl} alt="Bomba De Ar P Suspensão Absolute Wild Alumínio" className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <div className="bg-zinc-800/50 p-6 rounded-t-xl border-t border-l border-r border-zinc-700/50">
            <h4 className="text-cyan-400 font-bold mb-2">Aviso Importante para Garfos a Ar</h4>
            <p className="text-zinc-300 text-sm">Garfos a ar precisam OBRIGATORIAMENTE de uma bomba específica de alta pressão (shock pump) para calibrar o Sag. Bombas de pneu comuns não funcionam e podem estragar a válvula!</p>
          </div>
          <AffiliateCard product={accessories.find(p => p.id === 'bomba-suspensao-absolute')!} />
        </div>

        <h3 className="text-2xl font-bold text-cyan-400 mb-6 mt-12">Eixo QR 9 mm ou passante 15 mm (Boost)?</h3>
        <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none mb-8">
          <p>Aquela blocagem fininha de soltar rápido é o eixo QR de 9 mm.</p>
          <p>É prático para tirar a roda para pôr no carro, mas nas curvas rápidas a roda dá uma "torcida" imperceptível que te rouba a estabilidade.</p>
          <p>O Boost (15x110 mm) é um eixo muito mais grosso e passante.</p>
          <p>Ele prende a roda no garfo de um jeito que os dois viram um bloco único.</p>
          <p>Você mira a roda no buraco e ela vai, sem flexionar para os lados.</p>
          <p>A grande sacada aqui é verificar sua roda: se o seu cubo for antigo (9 mm), você vai precisar trocar ele também para usar o garfo Boost.</p>
        </div>

        {/* Respiro 2 */}
        <div className="my-12">
          <img loading="lazy" width="800" height="600" src="/images/blog/1/respiro-suspensao-mtb-2.webp" alt="Eixo da roda dianteira preso ao garfo de suspensão em detalhe técnico" className="w-full rounded-2xl shadow-xl border border-zinc-700" />
        </div>

        <h3 className="text-2xl font-bold text-cyan-400 mb-6 mt-12">Qual material do shoulder: aço ou alumínio?</h3>
        <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none mb-8">
          <p>O ombro (shoulder) é aquela ponte superior do garfo.</p>
          <p>Modelos de aço duram a vida toda, mas adicionam um chumbo na direção que castiga as pernas nas ladeiras longas.</p>
          <p>O alumínio resolve isso cortando um peso absurdo da peça.</p>
          <p>Você pode aliviar quase meio quilo só nessa diferença.</p>
          <p>Frente leve significa uma bike arisca, rápida para desviar de pedras, e braços menos fadigados no fim de semana.</p>
          <p>Vá de alumínio sempre que o bolso permitir.</p>
        </div>

        <h3 className="text-2xl font-bold text-cyan-400 mb-6 mt-12">Quanto curso de suspensão você precisa?</h3>
        <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none mb-8">
          <p>O curso é o tamanho da "viagem" que o garfo faz para baixo.</p>
          <p>Para a cidade e estradão liso, 80 mm a 100 mm sobram.</p>
          <p>Eles resolvem o conforto sem fazer a bike balançar demais na subida.</p>
          <p>Se você pega rock garden (jardim de pedras) e raiz grande, pular para 120 mm ou 130 mm te dá margem para não voar por cima do guidão.</p>
          <p>Mas atenção redobrada: não espete um garfo gigante numa bike feita para 100 mm.</p>
          <p>Você muda o ângulo da caixa de direção, a frente da bike fica empinada parecendo uma moto custom.</p>
          <p>Ela vai "empinar" de verdade nas subidas em vez de tracionar.</p>
        </div>

        <h3 className="text-2xl font-bold text-cyan-400 mb-6 mt-12">Compatibilidade: espiga e padrão de freio</h3>
        <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none mb-8">
          <p>Esse é o ponto onde o pessoal mais joga dinheiro fora.</p>
          <p>A espiga é aquele tubo que entra no quadro da sua bike.</p>
          <p>Ela pode ser reta (a mais comum em bikes de entrada) ou "tapered" (cônica, mais gordinha na base, usada nas bikes modernas).</p>
          <p>Cheque a sua antes de qualquer compra!</p>
          <p>Sobre os freios, 99% dos garfos hoje usam o encaixe Post Mount.</p>
          <p>São aqueles dois furos na frente da perna esquerda do garfo.</p>
          <p>Se seu freio for a disco atual, ele vai parafusar direto ali sem adaptadores.</p>
          <p>Casar a espiga certa e o freio economiza dores de cabeça gigantes na oficina.</p>
        </div>

        {/* Cross-Sell 2: Chave Dinamométrica */}
        <div className="my-12">
          <div className="mb-8">
            <img loading="lazy" width="800" height="600" src={accessories.find(p => p.id === 'chave-dinamometrica')?.imageUrl} alt="Chave Dinamométrica para Bicicleta" className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <div className="bg-zinc-800/50 p-6 rounded-t-xl border-t border-l border-r border-zinc-700/50">
            <h4 className="text-cyan-400 font-bold mb-2">Instalação Segura</h4>
            <p className="text-zinc-300 text-sm">A montagem da espiga e da mesa exige um aperto super preciso (torque) para não trincar o quadro ou a peça, especialmente de alumínio.</p>
          </div>
          <AffiliateCard product={accessories.find(p => p.id === 'chave-dinamometrica')!} />
        </div>

        {/* Cross-Sell 3: Adaptador Tapered */}
        <div className="my-12">
          <div className="mb-8">
            <img loading="lazy" width="800" height="600" src={accessories.find(p => p.id === 'adaptador-suspensao-tapered')?.imageUrl} alt="Adaptador Para Suspensão Normal Em Quadros Tapered" className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <div className="bg-zinc-800/50 p-6 rounded-t-xl border-t border-l border-r border-zinc-700/50">
            <h4 className="text-cyan-400 font-bold mb-2">Comprou espiga reta e tem quadro moderno?</h4>
            <p className="text-zinc-300 text-sm">Esta pequena peça (adaptador) é a salvação para quem comprou um garfo de espiga reta (1-1/8) e precisa instalar num quadro Tapered (cônico).</p>
          </div>
          <AffiliateCard product={accessories.find(p => p.id === 'adaptador-suspensao-tapered')!} />
        </div>

        <h3 className="text-2xl font-bold text-cyan-400 mb-6 mt-12">Trava na coroa, no ombro ou no guidão?</h3>
        <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none mb-8">
          <p>Subir no asfalto com a suspensão macia é ver o seu esforço virar "bobeio".</p>
          <p>A trava bloqueia isso, salvando sua energia.</p>
          <p>Travar na coroa (ombro) exige que você solte a mão da manopla e alcance o garfo enquanto pedala.</p>
          <p>É um risco desnecessário se tiver trânsito ou se for uma trilha técnica.</p>
          <p>Já a trava remota (no guidão) permite que você mude o comportamento da bicicleta no estalar dos dedos.</p>
          <p>Tudo isso sem tirar os olhos do caminho.</p>
          <p>É um detalhe simples que muda o dinamismo da sua pedalada.</p>
        </div>

        <h3 className="text-2xl font-bold text-cyan-400 mb-6 mt-12">Garfo Suspensão vs Rígido: Qual a Melhor Escolha para sua Bike 29?</h3>
        <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none mb-8">
          <p>Vai descer morro e bater raiz?</p>
          <p>Suspensão na cabeça.</p>
          <p>É ela quem vai segurar a onda para você não voltar com os braços latejando.</p>
          <p>A roda dianteira gruda no solo e te dá controle.</p>
          <p>Mas se você faz 100% dos seus pedais em asfalto bom e ciclofaixa querendo voar baixo, o garfo rígido tira dois quilos da bicicleta.</p>
          <p>Ele transfere cada gota do seu suor para a velocidade da roda, sem desperdício.</p>
          <p>Fica uma bala em arrancadas.</p>
          <p>Na dúvida ou se o terreno varia?</p>
          <p>Pegue a suspensão com trava no guidão.</p>
          <p>Você flutua na terra e, com um botão, trava tudo e ganha a eficiência do garfo rígido na cidade.</p>
        </div>



        {/* FAQ */}
        <h2 className="text-3xl font-extrabold text-white border-b-4 border-cyan-400 pb-2 mt-16 mb-8 flex items-center gap-3">
          <HelpCircle className="text-cyan-400" /> Perguntas frequentes
        </h2>
        <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none mb-8">
          <p>Aqui no balcão, a galera sempre emperra nas mesmas dúvidas antes de levar a caixa para casa.</p>
          <p>Casar o que a bike aceita com o que a sua perna pede não precisa ser um quebra-cabeça.</p>
          <p>Bora clarear os pontos principais para você acertar a mão na hora da montagem e entender os cuidados para não precisar voltar na oficina tão cedo.</p>
        </div>
        <div className="space-y-4 mb-16">
          {faqData.map((faq, index) => (
            <div key={index} className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-950/50">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 text-left text-white hover:bg-zinc-800/50 transition-colors"
              >
                <span className="font-semibold pr-4">{faq.question}</span>
                {openFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-cyan-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-zinc-500 shrink-0" />
                )}
              </button>
              {openFaq === index && (
                <div className="p-5 border-t border-zinc-800 text-zinc-300 bg-zinc-900/50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Conclusão */}
        <h2 className="text-3xl font-extrabold text-white border-b-4 border-cyan-400 pb-2 mt-16 mb-8">
          O Próximo Passo para o Seu Pedal
        </h2>
        <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none mb-12">
          <p>Trocar a suspensão da sua aro 29 é, sem tirar nem pôr, o maior e melhor passo para repaginar a sua pilotagem.</p>
          <p>Seja para blindar seus punhos contra o asfalto detonado da cidade, ou para investir em um sistema a ar que faça você devorar ladeiras com precisão milimétrica.</p>
          <p>O foco é alinhar seu bolso ao que o seu quadro permite montar.</p>
          <p>Mapeando a espiga certa e o estilo de trava, você sai da oficina não só com uma peça nova, mas com uma bicicleta que passa a trabalhar a seu favor no terreno.</p>
        </div>



        {/* SOBRE O AUTOR */}
        <div className="bg-cyan-950/20 p-8 rounded-2xl border border-cyan-900/50 shadow-sm mt-8 mb-16 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="shrink-0 mx-auto md:mx-0">
            <img loading="lazy" width="800" height="600" src="/images/autores/Rafael Martins.webp" alt="Rafael Martins" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-cyan-900/50 hover:border-cyan-500 transition-colors shadow-xl" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">Sobre o Autor</h2>
            <h3 className="text-2xl font-bold text-white mb-4">Rafael Martins</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Rafael é um apaixonado por mecânica de bicicletas e ciclista inveterado. No balcão da oficina ou nas trilhas de final de semana, seu objetivo é traduzir o "mecaniquês" técnico e chato para ajudar as pessoas a não rasgarem dinheiro, escolhendo exatamente as peças que precisam. As recomendações aqui são fruto de mãos sujas de graxa, análise minuciosa de fichas oficiais e da vivência real de quem gasta o pneu no asfalto e na terra, defendendo sempre uma mobilidade mais inteligente e saudável.
            </p>
          </div>
        </div>

      </div>
    </article>
    </>
  );
}
