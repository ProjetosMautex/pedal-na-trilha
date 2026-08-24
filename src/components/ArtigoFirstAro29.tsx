import React, { useState } from 'react';
import AffiliateCard from './AffiliateCard';
import BunnerDoMeio from './BunnerDoMeio';
import ExitIntentPopup from './ExitIntentPopup';
import { HelpCircle, ArrowRight, Check, X, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { products, accessories } from '../data/products';

export const ArtigoFirstAro29: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [simulacao, setSimulacao] = useState<'urbano' | 'trilha' | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "A Bicicleta First Aro 29 é indicada para iniciantes?",
      answer: [
        "Sim, de olhos fechados.",
        "Ela foi projetada com uma geometria que não te estica demais e não te deixa com dores no pescoço.",
        "Ela permite que você cometa aqueles errinhos básicos de quem está aprendendo a entrar em buracos ou fazer curvas, mantendo a estabilidade.",
        "É uma bike amigável que pega leve com o seu corpo."
      ]
    },
    {
      question: "Como é a assistência técnica e garantia da marca First?",
      answer: [
        "O maior medo de sair de uma \"Caloi\" é não achar peças. Esqueça isso!",
        "A First usa padrões abertos, o que significa que o movimento central, a caixa de direção e outras peças cabem peças da Shimano, Absolute, GTS, etc.",
        "Qualquer oficina do Brasil sabe arrumar.",
        "Além disso, a garantia de quadro deles contra rachaduras de solda direto com a fábrica funciona de forma muito mais rápida e sem o \"juridiquês\" de marcas gringas."
      ]
    },
    {
      question: "Quais são os principais concorrentes da Bicicleta First Aro 29?",
      answer: [
        "Oggi, Sense, Absolute e KSW.",
        "Essa guerra entre eles é o que faz você ganhar componentes maravilhosos pagando pouco.",
        "Enquanto uma marca famosa americana cobra fortunas por uma bike com freio mecânico a cabo, a First e a Absolute entregam freios a óleo (hidráulicos) e marchas modernas pelo mesmo valor, focando direto no seu custo-benefício."
      ]
    },
    {
      question: "Onde comprar a Bicicleta First Aro 29?",
      answer: [
        "Na internet o preço sempre vai ser matador, mas cuidado com a armadilha do tamanho!",
        "Um quadro 15\" serve para quem tem até 1,60m. O 17\" vai até uns 1,75m.",
        "Se você errar isso, é dinheiro jogado fora e joelho doendo.",
        "Compre online, mas nunca tente montar em casa usando um alicate e uma chave de fenda velha. Leve a caixa numa oficina para fazerem o alinhamento das marchas e a \"sangria\" correta dos freios."
      ]
    },
    {
      question: "Vale a pena investir na Bicicleta First Aro 29?",
      answer: [
        "Se você quer a liberdade de fazer upgrades e não quer pagar pelo \"status\" do adesivo no quadro, vale cada centavo.",
        "Você está pagando por uma base sólida de alumínio e uma mecânica inteligente.",
        "É a tela em branco perfeita para quem está disposto a girar na ciclofaixa na terça-feira e se aventurar no pó no domingo."
      ]
    }
  ];

  return (
    <>
      <ExitIntentPopup />
      
      {/* Hero Section */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/blog/1/first_card.webp" 
            alt="Bicicleta First Aro 29 Background" 
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Bicicleta First Aro 29 é Boa? Ou as <br/>
            <span className="text-cyan-400">Alternativas Caloi e Absolute São Melhores?</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <a href="/author/rafael-martins" className="hover:opacity-80 transition-opacity">
                <img src="/images/autores/Rafael Martins.webp" alt="Rafael Martins" className="w-8 h-8 rounded-full border border-cyan-500" />
              </a>
              <a href="/author/rafael-martins" className="hover:text-cyan-400 transition-colors">Por Rafael Martins</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <p>Você já se pegou olhando para uma bicicleta First aro 29 e pensou: "Será que esse quadro aguenta o tranco ou é melhor colocar meu dinheiro nas marcas mais famosas?"</p>
          <p>Eu sou o Rafael Martins e, depois de montar e desmontar dezenas dessas bikes aqui no balcão da oficina, descobri alguns detalhes que os catálogos não te contam.</p>
          <p>Escolher a companheira ideal para as trilhas de fim de semana ou para bater cartão no deslocamento urbano gera muita insegurança.</p>
          <p>Meu objetivo hoje não é te afogar em nomes de peças difíceis.</p>
          <p>Vou te mostrar, na prática, o que cada componente muda no seu pedal e descobrir se a First é a escolha certa para você, ou se as rivais Caloi e Absolute entregam um conjunto mais honesto.</p>
          <p>Vamos desvendar isso juntos?</p>
        </div>

        {/* Simulador de Perfil */}
        <div className="bg-zinc-800/50 p-6 md:p-8 rounded-2xl border border-cyan-900/50 shadow-lg mb-12">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-cyan-500" />
            Simulador Rápido de Perfil
          </h3>
          <p className="text-zinc-300 mb-4">Onde você vai pedalar 80% do tempo?</p>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('urbano')} />
              <span className="text-zinc-200">Asfalto e Mobilidade Urbana</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('trilha')} />
              <span className="text-zinc-200">Trilhas de Terra e Buracos</span>
            </label>
          </div>
          
          {simulacao === 'urbano' && (
            <div className="mt-4 p-4 bg-emerald-950/30 border border-emerald-900/50 rounded-lg text-emerald-400 text-sm">
              <strong className="block mb-1">Resultado:</strong> A First vai rodar macio no asfalto, mas preste atenção aos pneus. Se forem de cravos altos, considere trocá-os futuramente por pneus "slick" para a bike render muito mais na cidade!
            </div>
          )}
          {simulacao === 'trilha' && (
            <div className="mt-4 p-4 bg-emerald-950/30 border border-emerald-900/50 rounded-lg text-emerald-400 text-sm">
              <strong className="block mb-1">Resultado:</strong> Excelente escolha! O alumínio 6061 da First suporta bem a terra. Sugerimos fortemente as versões listadas abaixo com sistema de câmbios modernos (Deore ou GTA 1x12).
            </div>
          )}
        </div>

        {/* VITRINE / TABELA COMPARATIVA */}
        <div className="mb-16 max-w-[850px] mx-auto bg-zinc-800/50 p-2.5 rounded-2xl sm:p-5 border border-zinc-700 shadow-sm mt-16">
          <h2 className="text-2xl font-extrabold text-white mb-6 text-center">Bicicletas Analisadas Neste Artigo</h2>
          
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
                {['first-smitt-deore', 'first-smitt-gta', 'caloi-moab', 'absolute-nero-4'].map((id) => {
                  const product = products.find(p => p.id === id);
                  if (!product) return null;
                  
                  const meta = {
                    'first-smitt-deore': { shortName: "First Smitt (Deore)", category: "Trilha Avançada", score: "9.6 / 10" },
                    'first-smitt-gta': { shortName: "First Smitt (GTA)", category: "Custo-Benefício MTB", score: "9.3 / 10" },
                    'caloi-moab': { shortName: "Caloi Moab 29", category: "Trilha Leve / Mista", score: "9.2 / 10" },
                    'absolute-nero-4': { shortName: "Absolute Nero 4", category: "Trilhas Pesadas", score: "9.5 / 10" }
                  }[id] as { shortName: string; category: string; score: string; };

                  return (
                    <tr key={product.id} className="border-b border-zinc-700 last:border-b-0 hover:bg-zinc-800/50 transition-colors">
                      <td className="p-2 align-middle text-center">
                        <div className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] border border-slate-100 rounded flex items-center justify-center p-0.5 bg-zinc-100 mx-auto overflow-hidden">
                          {product.imageUrl ? (
                             <img src={product.imageUrl} alt={meta.shortName} className="max-w-full max-h-full block object-cover" />
                          ) : (
                             <span className="text-[10px] text-zinc-400 font-bold">Bicicleta</span>
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
                      </td>
                      <td className="p-2 align-middle text-sm text-zinc-300 hidden md:table-cell">
                        {meta.category}
                      </td>
                      <td className="p-2 align-middle text-center text-sm font-bold text-cyan-400 hidden sm:table-cell">
                        {meta.score}
                      </td>
                      <td className="p-2 align-middle text-center">
                        <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored nofollow" className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-[10px] sm:text-xs py-1.5 sm:py-2 px-2 sm:px-3 rounded transition-colors whitespace-nowrap shadow-md">
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
          <h2>Análise das Melhores Bicicletas First Aro 29 em 2026</h2>
          <p>O mercado mudou muito, e a First se tornou a "queridinha" de quem quer uma bike com customização inteligente.</p>
          <p>O segredo deles? Eles te entregam a possibilidade de alcançar uma configuração de alta performance sem aquele preço absurdo das marcas importadas.</p>
          <p>Mas não podemos olhar apenas para a pintura do quadro.</p>
          <p>A verdadeira mágica está na compatibilidade das peças com o seu estilo de pedalada.</p>
          <p>Vamos desmontar as versões mais buscadas e separar o que é marketing do que realmente funciona na terra.</p>

          <h3 id="first-smitt-deore">Bicicleta First Aro 29 Smitt Gold (Câmbio Shimano Deore)</h3>
          <p className="text-emerald-400 font-bold">⭐ A Escolha Certa para Trilhas Longas</p>
          
          <p>Passei um bom tempo regulando o câmbio dessa versão e o que eu vi me animou bastante.</p>
          <p>Ela vem equipada com o respeitado grupo Shimano Deore de 12 marchas (linha M6100).</p>
          <p>O que isso muda na sua vida?</p>
          <p>Significa que você tem acesso a uma marcha tão leve que até as ladeiras mais cruéis viram um passeio, tudo isso sem aquele "crec-crec" assustador de corrente raspando.</p>
          <p>O freio a disco hidráulico da Absolute te dá o poder de travar a roda em descidas técnicas usando apenas um dedo, poupando suas mãos.</p>
          <p>O selim em gel de fábrica já salva suas costas nos pedais mais longos.</p>
          <p>O único detalhe é a suspensão: a trava dela fica direto no ombro do garfo. No asfalto liso, você vai precisar soltar uma das mãos do guidão para travá-la.</p>
          <p>É uma máquina fantástica, mas que exige que, ao sair da caixa, você pague um bom mecânico para sangrar os freios e afinar esse câmbio como um violão.</p>
        </div>

        <AffiliateCard product={products.find(p => p.id === 'first-smitt-deore')!} />

        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2"><Check className="w-5 h-5" /> Prós</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Transmissão Shimano Deore 12V: sobe ladeiras íngremes sem esforço.</li>
              <li>Freios a disco hidráulicos: segurança total no susto e zero fadiga nas mãos.</li>
              <li>Selim em gel e manoplas anatômicas que garantem o conforto.</li>
              <li>Quadro em alumínio com cabos passando por dentro (visual limpo e menos sujeira nos cabos).</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2"><X className="w-5 h-5" /> Contras</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Trava da suspensão no ombro: menos prático que os botões direto no guidão.</li>
              <li>Pedais de plástico básicos: troque por modelos de metal se for encarar barro pesado.</li>
            </ul>
          </div>
        </div>

        {/* Video Integration */}
        <div className="my-12">
          <h4 className="text-xl font-bold text-white mb-4">Veja o Shimano Deore em Ação:</h4>
          <div className="relative pt-[56.25%] rounded-2xl overflow-hidden shadow-xl border border-zinc-700">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/4wI9pLxE0nk" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <BunnerDoMeio />

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-12">
          <h3 id="first-smitt-gta">Bicicleta First Aro 29 Smitt Gold (Versão Câmbio GTA 1x12)</h3>
          <p className="text-emerald-400 font-bold">💸 O Custo-Benefício para Começar na Trilha</p>
          
          <p>Sabe aquela bike que parece idêntica à de cima, mas custa consideravelmente menos?</p>
          <p>O pulo do gato investigativo está aqui.</p>
          <p>Esta versão utiliza uma transmissão GTA, também de 12 marchas, com um cassete traseiro gigante (50 dentes).</p>
          <p>Na prática, você ganha a mesma facilidade em subidas, eliminando o câmbio dianteiro (adeus quedas de corrente), mas economizando bastante.</p>
          <p>O quadro 6061 mantém a geometria estável que ajuda quem ainda está pegando o jeito da pilotagem.</p>
          <p>Mas vou ser 100% sincero com você: os pneus originais têm cravos muito baixos.</p>
          <p>No asfalto ou na terra batida, ela voa. Mas se você pegar uma trilha de lama úmida, eles vão escorregar.</p>
          <p>Considere esses pneus e os pedais de nylon como as primeiras peças que você fará um upgrade no futuro.</p>
        </div>

        <AffiliateCard product={products.find(p => p.id === 'first-smitt-gta')!} />

        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2"><Check className="w-5 h-5" /> Prós</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Sistema 1x12 com câmbio GTA: visual limpo e marchas leves para escalada.</li>
              <li>Quadro com cabeamento interno robusto para suportar buracos.</li>
              <li>Freios hidráulicos que garantem paradas muito seguras.</li>
              <li>Geometria amigável que não causa dores na lombar de iniciantes.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2"><X className="w-5 h-5" /> Contras</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Pneus com cravos muito baixos, ruins para terrenos com muita lama.</li>
              <li>O câmbio GTA pode exigir pequenos ajustes na oficina com mais frequência que o Shimano.</li>
            </ul>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <h2>Sobre a Marca First: Vale a Confiança?</h2>
          <div className="my-8">
            <img src="/images/blog/1/first_trilha_action.webp" alt="Ciclista de mountain bike em alta velocidade descendo uma trilha na floresta" className="w-full rounded-2xl shadow-xl border border-zinc-700" />
            <p className="text-center text-sm text-zinc-400 mt-3 italic">As bicicletas First entregam geometria atualizada que garante controle e segurança mesmo nas trilhas mais difíceis.</p>
          </div>
          <p>Diferente das marcas globais gigantescas, a First foca no ciclista raiz brasileiro.</p>
          <p>O projeto deles, conhecido como #1ST, não é cobrar ágio por causa de um adesivo importado no quadro. É oferecer uma geometria atual e confiável.</p>
          <p>Ao investigar as soldas e a pintura, percebi que a First construiu o seu nome entregando uma "tela em branco" excelente.</p>
          <p>Você compra a bike hoje e vai evoluindo as peças junto com a sua técnica, sem precisar trocar de quadro no meio do processo.</p>

          <h3>História e Filosofia da Marca</h3>
          <p>Eles nasceram da nossa realidade: as trilhas brasileiras são severas e o orçamento nem sempre é elástico.</p>
          <p>A filosofia da marca não é o mercado de luxo ostentação, mas sim a democratização.</p>
          <p>Eles querem que você tenha segurança para desbravar seus horizontes no fim de semana e robustez para usar a bike como meio de transporte diário, unindo saúde e conexão com o ambiente sem quebrar o seu bolso.</p>

          <div className="my-8">
            <img src="/images/blog/1/first_smitt_gta.webp" alt="Detalhe do cassete GTA 1x12 em uma bicicleta" className="w-full rounded-2xl shadow-xl border border-zinc-700" />
            <p className="text-center text-sm text-zinc-400 mt-3 italic">Com o sistema 1x12, a First limpa o visual da bike e te dá marchas perfeitas para escalada de montanhas.</p>
          </div>

          <h3>Onde a First se Encaixa no Mercado?</h3>
          <p>A First encontrou um espaço inteligente: o intermediário premium.</p>
          <p>Pense assim: o dinheiro que as marcas importadas gastam em marketing televisivo, a First investe para te entregar um chassi melhor desenhado.</p>
          <p>Ela atrai aquele entusiasta que já cansou de bicicletas de supermercado que vivem quebrando, e que agora busca facilidade de achar peças, manutenção barata e componentes que realmente respondam quando o semáforo fecha de repente.</p>

          {/* Caixa de Destaque */}
          <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border-l-4 border-cyan-500 p-6 rounded-r-xl shadow-md my-12">
            <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              O Segredo da Liga de Alumínio 6061
            </h4>
            <p className="text-zinc-200 italic m-0">"Você vai ouvir muito sobre a liga 6061 nas linhas Athymus e Smitt. Traduzindo do jargão técnico para a vida real: esse alumínio tem a dose exata de flexibilidade para "engolir" a trepidação daquela rua de paralelepípedo esburacada, mas continua rígido o suficiente para que a força das suas pernas vá direto para a roda, sem desperdício de energia. É uma engenharia que acompanha a sua evolução."</p>
          </div>

          <h2>Caloi Moab ou Absolute Nero 4: São Alternativas Melhores?</h2>
          <p>A resposta direta é: <strong>depende do que você busca</strong>. Elas não são obrigatoriamente superiores, mas entregam vantagens específicas que a First não tem (como a rede de assistência gigante da Caloi ou o foco agressivo de corrida da Absolute).</p>
          <p>"Rafael, gostei da First, mas o que mais temos no mercado nessa faixa de preço?" É aqui que a briga esquenta.</p>
          <p>Se a First não bateu no seu coração, o mercado se divide basicamente em duas escolas muito fortes para quem está começando.</p>
          <p>De um lado temos a robustez histórica da Caloi Moab e do outro a pegada altamente técnica e agressiva da Absolute Nero 4.</p>

          <h3 id="caloi-moab">Caloi Bicicleta Moab Aro 29 (18 Vel. Microshift)</h3>
          <p>A Moab é como aquele tratorzinho confiável que não te deixa na mão.</p>
          <p>Ela resolveu a vida de muita gente apostando em um conjunto Microshift de 18 marchas.</p>
          <p>Tirar aquele antigo câmbio dianteiro de 3 coroas reduz absurdamente a chance da sua corrente raspar ou cair quando você muda a marcha correndo.</p>
          <p>O freio a disco hidráulico Logan segura a bike com extrema facilidade, e a tradição da marca garante peça de reposição até na padaria.</p>
          <p>O grande "porém" que descobri pesando a bike é que ela chega perto dos 18 kg.</p>
          <p>O que isso muda no seu pedal? Aquele viaduto interminável na volta do trabalho vai exigir muito mais do seu pulmão.</p>
          <p>É a parceira definitiva para durabilidade, mas cobra o preço na balança.</p>
        </div>

        <AffiliateCard product={products.find(p => p.id === 'caloi-moab')!} />

        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2"><Check className="w-5 h-5" /> Prós</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Transmissão 18v descomplica a pilotagem e a manutenção.</li>
              <li>Tradição e facilidade imbatível para achar peças Caloi.</li>
              <li>Quadro com geometria focada em estabilidade no asfalto e na terra.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2"><X className="w-5 h-5" /> Contras</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>O peso da bike cansa muito mais as pernas em subidas.</li>
              <li>Pneus originais deixam a desejar em lama pesada.</li>
            </ul>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <h3 id="absolute-nero-4">Bicicleta Aro 29 Absolute Nero 4 (1x12 Hidráulico)</h3>
          <p>Se a Caloi Moab é o trator, a Absolute Nero 4 é para quem tem pressa de ir rápido na trilha técnica.</p>
          <p>O grande trunfo aqui é o sistema 1x12 com apenas uma coroa na frente.</p>
          <p>Isso limpa o guidão, baixa o peso da bike para excelentes 14,8 kg e te dá uma marcha para subir paredes de terra.</p>
          <p>Com os freios hidráulicos sob medida, ela passa muita confiança na hora que a descida assusta.</p>
          <p>No entanto, fica a dica de oficina: a Nero 4 tem uma alma muito "esportiva".</p>
          <p>A posição que você fica nela é um pouco mais jogada para frente. Se você já tem problemas lombares, fique atento.</p>
          <p>O selim original também é focado em rendimento (leia-se: é duro). Prepare-se para talvez trocá-lo para ganhar mais conforto no bumbum nas primeiras semanas.</p>
        </div>

        <AffiliateCard product={products.find(p => p.id === 'absolute-nero-4')!} />

        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2"><Check className="w-5 h-5" /> Prós</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Sistema 1x12 de marchas: leve, moderno e zero dor de cabeça com quedas de corrente.</li>
              <li>Peso competitivo que te ajuda a economizar energia.</li>
              <li>Freios hidráulicos precisos e de fácil manutenção.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2"><X className="w-5 h-5" /> Contras</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Postura mais agressiva pode cansar quem não faz Bike Fit.</li>
              <li>O selim original não perdoa ciclistas acostumados com muito conforto.</li>
            </ul>
          </div>
        </div>

        {/* Carrossel Cross-Sell */}
        <div className="bg-zinc-800/80 rounded-2xl p-6 sm:p-8 border border-cyan-900/50 my-16 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          
          <h2 className="text-2xl font-bold text-white mb-2 relative z-10 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            Complete seu setup de segurança urbana
          </h2>
          <p className="text-zinc-400 mb-8 relative z-10">Sua segurança no trânsito não tem preço. Complete seu setup com os itens essenciais:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
            {accessories.filter(i => ['capacete-absolute', 'cadeado-ulock', 'bomba-ar-portatil'].includes(i.id)).map((item) => (
              <a 
                key={item.id} 
                href={item.affiliateUrl}
                target="_blank" 
                rel="noopener noreferrer sponsored nofollow"
                className="block bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden hover:border-cyan-500 transition-colors group"
              >
                <div className="aspect-square bg-white flex items-center justify-center p-4">
                  <img src={item.imageUrl} alt={item.name} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-4 text-center flex flex-col items-center justify-between h-[120px]">
                  <h4 className="text-zinc-100 font-bold text-sm">{item.name}</h4>
                  <span className="bg-cyan-600 group-hover:bg-cyan-500 text-white w-full py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-md mt-2">Ver Preço →</span>
                </div>
              </a>
            ))}
          </div>
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

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 border-t border-zinc-800 pt-12">
          <h2>Conclusão</h2>
          <p>Escolher entre a First, Caloi ou Absolute no final do dia é entender para que lado o seu guidão aponta mais.</p>
          <p>Se você quer montar a bike aos poucos e exige uma geometria moderna, a First ganha o jogo.</p>
          <p>Se você prefere deitar na confiança de não ter dor de cabeça com manutenções urbanas, a Moab resolve sua vida.</p>
          <p>Agora, se a sua praia é acelerar e testar seus limites físicos com um equipamento de entrada agressivo, vá de Absolute Nero 4.</p>
          <p>O único erro que você pode cometer é comprar e deixar a bike criando poeira na garagem.</p>
          <p>Ajuste a altura do banco, pague aquela revisão inicial no capricho e transforme cada ladeira numa vitória.</p>
        </div>
      </article>
    </>
  );
};
