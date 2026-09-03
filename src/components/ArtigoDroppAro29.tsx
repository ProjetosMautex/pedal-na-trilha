import React, { useState } from 'react';
import AffiliateCard from './AffiliateCard';
import BunnerDoMeio from './BunnerDoMeio';
import ExitIntentPopup from './ExitIntentPopup';
import { HelpCircle, ArrowRight, Check, X, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { products, accessories } from '../data/products';

export const ArtigoDroppAro29: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [simulacao, setSimulacao] = useState<'urbano' | 'trilha' | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Dropp Z3 é boa para trilha?",
      answer: [
        "Vou jogar limpo: ela tira de letra aquele estradão de terra batida e a ciclovia esburacada. Para explorar a natureza no final de semana, a resistência dela dá conta do recado.",
        "Mas não se engane! O quadro não foi feito para saltos, descidas cheias de pedras soltas ou trilhas técnicas extremas.",
        "Se você colocar a suspensão e os câmbios básicos dela sob estresse forte, eles vão estourar rápido. Quer pular barranco? Invista em uma marca especialista nisso para não gastar fortunas com consertos."
      ]
    },
    {
      question: "Para quem a Dropp Z3 é recomendada?",
      answer: [
        "Essa magrela é o passaporte perfeito para quem quer sentir o gostinho do mountain bike sem estourar o limite do cartão. É a bike para ir pro trabalho, rodar no parque ou passear na terra no domingo.",
        "A roda grande do aro 29 é um tratorzinho: passa por cima de buracos dando uma estabilidade gigante para quem era acostumado com bicicletas menores.",
        "Agora, se o seu foco é ralar o joelho na montanha, a Z3 vai ficar devendo, sendo mais negócio investir direto em uma categoria superior."
      ]
    },
    {
      question: "Veredicto final: vale a pena comprar a Dropp Z3 Aro 29?",
      answer: [
        "Sim, a Dropp Z3 é uma jogada muito esperta para você começar a pedalar sem esvaziar a conta bancária. Ela te entrega o alumínio leve e a estabilidade da roda 29, que são características raras de achar nessa faixa de preço.",
        "O segredo para não se decepcionar é alinhar o que você espera dela. É uma bike para o lazer. Trocar o selim depois ou pedir pro mecânico dar um talento nos freios faz parte da brincadeira e do aprendizado.",
        "Resumindo: ela cumpre muito bem o papel de ser sua primeira companheira de asfalto e terra leve."
      ]
    },
    {
      question: "A Dropp Z3 tem quadro de alumínio?",
      answer: [
        "Positivo! Ela usa a liga de alumínio 6061. Isso é o 'arroz com feijão' bem feito das bikes de entrada, deixando o quadro muito mais leve que os de ferro antigos e imune à ferrugem.",
        "A geometria te deixa ágil no trânsito. O material é excelente, mas vale lembrar que a espessura dos tubos foi pensada para o uso moderado, sem pular rampa. É segurança e conforto na medida para asfalto e estradão."
      ]
    },
    {
      question: "Dropp Z3 é boa para iniciantes?",
      answer: [
        "Com certeza. Ela entrega a estabilidade grandona do aro 29 pelo preço que o iniciante quer pagar. Trazendo freio a disco e quadro de alumínio, ela populariza peças que antes eram caras demais.",
        "Como ela te deixa sentar numa posição bem amigável, suas costas agradecem enquanto você aprende a pilotar no trânsito. É a base perfeita para você tomar gosto pelas pedaladas sem gastar uma fortuna logo de cara."
      ]
    },
    {
      question: "A Dropp Z3 vem montada?",
      answer: [
        "Ela chega na sua porta com uns 80% do trabalho feito na fábrica. Você só precisa encaixar guidão, banco, pedais e a roda da frente. Parece fácil, né?",
        "Mas vai por mim: a regulagem fina das marchas e dos freios é o que evita que você caia ou arrebente a corrente.",
        "Leve a caixa numa oficina especializada assim que chegar. O mecânico vai lubrificar tudo, alinhar certinho e te entregar a bike pronta para rodar sem falhas mecânicas."
      ]
    },
    {
      question: "A Dropp Z3 tem freio hidráulico?",
      answer: [
        "A grande maioria das Z3 que você vê pela internet usa freio a disco mecânico (a cabo). Mas existem algumas versões, marcadas com a letra 'H' no anúncio, que já vêm com freio hidráulico (a óleo).",
        "Cara, isso muda da água pro vinho! O manete fica levinho, mais preciso e você não cansa a mão nas frenagens longas.",
        "Antes de clicar em comprar, leia bem a ficha técnica para não se confundir. Se sobrar um trocado no orçamento, pule direto para a versão com freio hidráulico. Você ganha muita tranquilidade nas frenagens da cidade e evita gastar com esse upgrade na oficina depois."
      ]
    }
  ];

  return (
    <>
      <ExitIntentPopup />
      
      {/* Hero Section */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img loading="lazy" width="800" height="600" src="/images/blog/1/dropp_card.webp" 
            alt="Bicicleta Dropp Aro 29 Background" 
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Bicicleta Dropp aro 29 é boa Ou <br/>
            <span className="text-cyan-400">Alternativa KSW é melhor?</span>
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-zinc-400">
            <span className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center border border-cyan-500/30 overflow-hidden">
                <img loading="lazy" width="800" height="600" src="/images/autores/Rafael Martins.webp" alt="Rafael" className="w-full h-full object-cover" />
              </div>
              Por Rafael Martins
            </span>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <p>Escolher a primeira mountain bike dá um nó na cabeça com tanta opção no mercado.</p>
          <p>A dúvida é clássica: qual modelo entrega mais sem esvaziar o bolso, principalmente quando comparamos marcas novas com aquelas mais antigas.</p>
          <p>Afinal, a bicicleta Dropp aro 29 é boa para quem está começando ou quer uma magrela valente para o dia a dia?</p>
          <p>Aqui no balcão da oficina, a gente sabe que olhar a ficha técnica, as peças e o uso real é o único jeito de fazer uma compra segura e não rasgar dinheiro.</p>
        </div>

        {/* Simulador de Perfil */}
        <div className="bg-zinc-800/50 p-6 md:p-8 rounded-2xl border border-cyan-900/50 shadow-lg mb-12">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-cyan-500" />
            Qual será o seu terreno principal?
          </h3>
          <p className="text-zinc-300 mb-4">Selecione para ver a indicação ideal da Dropp:</p>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('urbano')} />
              <span className="text-zinc-200">Asfalto/Urbano</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('trilha')} />
              <span className="text-zinc-200">Trilhas/Terra</span>
            </label>
          </div>
          {simulacao === 'urbano' && (
            <div className="mt-4 p-4 bg-emerald-950/30 border border-emerald-900/50 rounded-lg text-emerald-400 text-sm">
              <strong className="block mb-1">Ótima escolha!</strong> A Dropp Z3 Aro 29 é focada no lazer urbano barato, ideal se você quer uma bicicleta que não machuca a sua conta bancária.
            </div>
          )}
          {simulacao === 'trilha' && (
            <div className="mt-4 p-4 bg-cyan-950/30 border border-cyan-900/50 rounded-lg text-cyan-400 text-sm">
              <strong className="block mb-1">Cuidado com estresse!</strong> A Dropp aguenta terra batida, mas o quadro não foi feito para trilhas extremas com saltos.
            </div>
          )}
        </div>

        {/* VITRINE */}
        <div className="mb-16 max-w-[850px] mx-auto bg-zinc-800/50 p-2.5 rounded-2xl sm:p-5 border border-zinc-700 shadow-sm">
          <h2 className="text-2xl font-extrabold text-white mb-6 text-center">Bicicletas Analisadas Neste Artigo</h2>
          
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
                {['dropp-z3', 'ksw-xlt-100'].map((id) => {
                  const product = products.find(p => p.id === id);
                  if (!product) return null;
                  return (
                    <tr key={product.id} className="border-b border-zinc-700 last:border-b-0 hover:bg-zinc-800/50 transition-colors">
                      <td className="p-2 align-middle text-center">
                        <div className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] border border-slate-100 rounded flex items-center justify-center p-0.5 bg-zinc-100 mx-auto overflow-hidden">
                          {product.imageUrl ? (
                             <img loading="lazy" width="800" height="600" src={product.imageUrl} alt={product.name} className="max-w-full max-h-full block object-cover" />
                          ) : (
                             <span className="text-[10px] text-zinc-400 font-bold">Bicicleta</span>
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

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <h2>Visão geral da Dropp Z3 Aro 29</h2>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'dropp-z3')?.imageUrl} alt={products.find(p => p.id === 'dropp-z3')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          
          <p>A Dropp Z3 Aro 29 chega como aquela parceira de entrada estratégica para o mountain bike.</p>
          <p>A ideia dela é simples: equilibrar preço acessível com um pedal que funcione de verdade.</p>
          <p>Ela foi montada tanto para quem foge do trânsito na cidade quanto para quem quer bater um barro no estradão no fim de semana.</p>
          <p>Bora ver como as peças dessa bike se comportam no mundo real e se ela aguenta o tranco da sua rotina.</p>
        </div>

        <AffiliateCard product={products.find(p => p.id === 'dropp-z3')!} />

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          {/* Cross-Sell Carrossel */}
        <div className="my-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Acessórios Essenciais para sua Dropp</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {accessories.filter(i => ['capacete-absolute', 'cadeado-ulock', 'bomba-ar-portatil'].includes(i.id)).map((item) => (
              <a 
                key={item.id} 
                href={item.affiliateUrl}
                aria-label={`Ver oferta de ${item.name}`}
                target="_blank" 
                rel="noopener noreferrer sponsored nofollow"
                className="block bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden hover:border-cyan-500 transition-colors group shadow-lg flex flex-col"
              >
                <div className="aspect-square bg-white flex items-center justify-center p-4">
                  <img loading="lazy" width="800" height="600" src={item.imageUrl} alt={item.name} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-4 text-center flex flex-col items-center">
                  <h4 className="text-zinc-100 font-bold text-sm mb-3">{item.name}</h4>
                  <span className="block bg-cyan-500 group-hover:bg-cyan-400 text-zinc-950 w-full py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-md">Ver Preço →</span>
                </div>
              </a>
            ))}
          </div>
        </div>

          <h2>Avaliações reais da Dropp Z3: o que os compradores dizem?</h2>
          <p>O que a galera sente na pele rodando com a Dropp Z3 é o nosso melhor termômetro fora do manual de fábrica.</p>
          <p>A satisfação de quem compra costuma bater exatamente com o uso: quem entende que é uma bike para lazer, curte muito.</p>
          <p>Analisando o histórico de quem já sujou os pneus com ela, dá para entender exatamente como a bicicleta se sustenta depois daquele período de "lua de mel" das primeiras pedaladas.</p>


          <h3>Especificações</h3>
          <p>O coração da Dropp Z3 é o quadro de alumínio 6061, que te entrega uma bike leve e que não enferruja.</p>
          <p>Já a transmissão vem com 21 marchas de componentes importados.</p>
          <p>Ela gira bem no plano, mas sendo franco: pede regulagem com mais frequência para o câmbio não ficar estalando nas subidas, diferente de um grupo Shimano Altus, por exemplo.</p>
          <p>Para fechar o pacote, temos aros de parede dupla (mais difíceis de empenar) e freios a disco mecânicos.</p>
          <p>É um conjunto focado em durabilidade para terrenos tranquilos.</p>
          <p>A dica de ouro é: mantenha a corrente e os cabos sempre lubrificados. Isso evita ruídos chatos e garante que a marcha entre macia no asfalto ou na terra.</p>
        </div>

        <BunnerDoMeio />

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <h3>Conforto</h3>
          <p>O conforto aqui foi pensado para o lazer e passeios curtos.</p>
          <p>O guidão é mais altinho, deixando sua postura reta.</p>
          <p>Adeus dor nas costas e no pescoço! O selim anatômico quebra um galho no começo, mas se você passar de uma hora no pedal, a bunda vai reclamar.</p>
          <p>A solução? Uma boa bermuda de ciclismo ou investir num banco de gel.</p>
          <p>E lembre-se: a suspensão é básica. Em ruas esburacadas, o macete é usar o pneu um pouco menos cheio para o ar absorver a pancada e a bike rodar macia.</p>

          <h3>Segurança</h3>
          <p>A segurança da Z3 fica por conta do freio a disco mecânico.</p>
          <p>Ele freia muito melhor que os antigos V-Brake de borracha, especialmente na chuva.</p>
          <p>Mas atenção: freio a cabo laceia com o uso.</p>
          <p>Você vai precisar dar uma esticadinha no cabo de tempos em tempos para não perder a força de frenagem.</p>
          <p>Como não é um freio hidráulico (a óleo), ele é mais "duro" de apertar nas descidas.</p>
          <p>Ah, e não economize: compre logo um kit de luzes dianteiras e traseiras, porque ser visto pelos carros é a sua maior segurança.</p>

          <h3>Peso suportado</h3>
          <p>O quadro foi feito para aguentar até 130 kg.</p>
          <p>Mas calma lá: isso é o peso bruto (você + roupa + mochila + garrafinha).</p>
          <p>O alumínio é forte, mas se você rodar sempre no limite do peso, peças móveis e os raios da roda vão abrir o bico mais cedo.</p>
          <p>Se você está perto dessa marca, seja chato com a calibragem dos pneus e leve a bike para revisões frequentes.</p>
          <p>Respeitar isso é garantir que o equipamento não perca a estabilidade e não te dê sustos nos buracos.</p>

          <h2>Conhecendo a marca Dropp</h2>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src="/images/blog/1/dropp_brand.webp" alt="Quadro Dropp e componentes" className="w-full rounded-2xl shadow-xl border border-zinc-700" />
          </div>
          <p>Nascida em 2015 lá em Arapongas (PR), a Dropp focou suas forças no mercado de entrada para colocar mais brasileiros para pedalar.</p>
          <p>Eles operam montando os próprios quadros — tanto de aço quanto de alumínio — e misturando componentes deles com peças de fora.</p>
          <p>O preço deles na internet chama muita atenção, mas fica o alerta de mecânico: cuidado com o pós-venda.</p>
          <p>Dando uma investigada nos sites de reclamação, vi que o suporte da fábrica pode demorar a responder.</p>
          <p>O que isso muda para você? Significa que a responsabilidade daquela revisão preventiva ou de um ajuste fino vai cair no seu colo ou na mão da sua oficina de confiança do bairro.</p>

          <h2>Afinal, a bicicleta Dropp é boa?</h2>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src="/images/blog/1/dropp_outdoor.webp" alt="Dropp ao ar livre em um estradão de terra" className="w-full rounded-2xl shadow-xl border border-zinc-700" />
          </div>
          <p>Para bater o martelo na Dropp Z3, a gente precisa olhar além da pintura bonita e ver quem são as rivais dela de prateleira.</p>
          <p>O cenário é grande, e entender os detalhes mecânicos que separam essa bike de outras da mesma categoria é o que vai te mostrar se ela aguenta o seu ritmo ou se vai pedir arrego.</p>
        </div>

        {/* Tabela Comparativa Resumo */}
        <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700 shadow-lg mb-12">
          <h3 className="text-xl font-bold text-white mb-6 text-center">O Duelo de Custo-Benefício</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-zinc-300">
              <thead className="text-xs uppercase bg-zinc-900 border-b border-zinc-700">
                <tr>
                  <th className="px-4 py-3">Característica</th>
                  <th className="px-4 py-3 text-cyan-400">Dropp Z3</th>
                  <th className="px-4 py-3 text-amber-400">KSW XLT 100</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-700">
                  <td className="px-4 py-3 font-semibold">Marchas</td>
                  <td className="px-4 py-3">21v Genéricas</td>
                  <td className="px-4 py-3">21v Shimano</td>
                </tr>
                <tr className="border-b border-zinc-700">
                  <td className="px-4 py-3 font-semibold">Freio</td>
                  <td className="px-4 py-3">Disco Mecânico</td>
                  <td className="px-4 py-3">Disco Mecânico</td>
                </tr>
                <tr className="border-b border-zinc-700">
                  <td className="px-4 py-3 font-semibold">Foco Principal</td>
                  <td className="px-4 py-3">Lazer Urbano</td>
                  <td className="px-4 py-3">Uso Urbano e Passeios</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <h3>Dropp vs KSW XLT 100</h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'ksw-xlt-100')?.imageUrl} alt={products.find(p => p.id === 'ksw-xlt-100')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <p>A KSW XLT 100 e a Dropp Z3 batem de frente no mercado de entrada para o uso urbano e passeios.</p>
          <p>O grande diferencial da KSW aqui é que ela já vem equipada com um conjunto Shimano (geralmente Tourney de 21 marchas), o que entrega uma durabilidade e precisão nas trocas de marcha consideravelmente superior às peças genéricas da Dropp.</p>
          <p>Se você quer uma bicicleta que não vai desregular a marcha facilmente e que tem um histórico confiável para as ruas, a KSW leva a melhor e vale a pena investir um pouquinho a mais.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2"><Check className="w-5 h-5" /> Prós (KSW XLT 100)</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Marchas Shimano que desregulam menos.</li>
              <li>Excelente valor de revenda por causa da marca.</li>
              <li>Quadro bastante resistente para calçadas e asfalto esburacado.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2"><X className="w-5 h-5" /> Contras (KSW XLT 100)</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Preço geralmente um pouco mais alto que a Dropp.</li>
              <li>Ainda não é indicada para trilhas de verdade.</li>
            </ul>
          </div>
        </div>

        <AffiliateCard product={products.find(p => p.id === 'ksw-xlt-100')!} />

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <h2>Conclusão</h2>
          <p>Se o seu orçamento está super apertado e o seu objetivo é fugir do sedentarismo rodando pelo bairro ou no parque aos domingos, a Dropp Z3 possui um incrível custo-benefício para iniciantes.</p>
          <p>Ela entrega uma bicicleta grande, imponente e resistente para o asfalto, custando uma fração das grandes marcas.</p>
          <p>Sim, a bicicleta Dropp é boa para o uso urbano e para quem está dando as primeiras pedaladas sem querer gastar muito dinheiro.</p>
        </div>

        

        {/* FAQ */}
        <div className="my-16">
          <h2 className="text-3xl font-extrabold text-white mb-8 border-b border-zinc-800 pb-4">
            Perguntas Frequentes (FAQ)
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/30 hover:bg-zinc-800/50 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={openFaq === index}
                >
                  <span className="font-bold text-zinc-100 pr-8">{faq.question}</span>
                  <div className="shrink-0 text-cyan-500">
                    {openFaq === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 pt-1 border-t border-zinc-800/50">
                    {faq.answer.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-zinc-400 text-sm md:text-base mb-2 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SOBRE O AUTOR */}
        <div className="bg-cyan-950/20 p-8 rounded-2xl border border-cyan-900/50 shadow-sm mt-16 mb-16 flex flex-col md:flex-row items-center md:items-start gap-6">
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

      </article>
    </>
  );
};
