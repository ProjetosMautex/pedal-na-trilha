import React, { useState } from 'react';
import AffiliateCard from './AffiliateCard';
import BunnerDoMeio from './BunnerDoMeio';
import ExitIntentPopup from './ExitIntentPopup';
import { HelpCircle, ArrowRight, Check, X, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { products, accessories } from '../data/products';

export const ArtigoKSWAro29: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [simulacao, setSimulacao] = useState<string | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "A bicicleta KSW Aro 29 vem montada?",
      answer: [
        "Geralmente ela é enviada pré-montada na caixa.",
        "É obrigatório levar a um mecânico para aperto de raios, regulagem de freios e indexação das marchas para não perder a garantia."
      ]
    },
    {
      question: "Qual a diferença entre os freios da KSW e da Absolute Nero 4?",
      answer: [
        "A KSW de entrada usa freios a disco mecânicos (acionados por cabo de aço, exigem mais força na mão).",
        "A Absolute e a Caloi Moab usam sistema hidráulico (acionado por óleo, frenagem extremamente leve e precisa)."
      ]
    },
    {
      question: "Quadro da KSW quebra fácil?",
      answer: [
        "Não.",
        "O quadro de alumínio 6061 é robusto e possui excelente durabilidade para o uso urbano e trilhas leves, que é a proposta real da bicicleta."
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
            src="/images/blog/1/principal_ksw.webp" 
            alt="Bicicleta KSW Aro 29 Background" 
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Bicicleta KSW Aro 29 é Boa Ou <br/>
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
          <p>Você já reparou que o mercado está inundado de bicicletas com preços super tentadores, mas no fundo sempre bate aquela pulga atrás da orelha: "Será que essa bike aguenta o tranco ou é dinheiro jogado fora?".</p>
          <p>Eu sou o Rafael Martins e passei as últimas semanas revirando as fichas técnicas e os fóruns de ciclismo para entender de verdade o que a KSW e suas principais concorrentes oferecem.</p>
          <p>Meu objetivo aqui não é te entregar um manual técnico chato e cheio de termos complicados.</p>
          <p>Vou te mostrar, na prática, qual dessas bikes aro 29 vai ser a parceira ideal para o seu fim de semana e qual delas pode te fazer passar raiva na primeira subida.</p>
          <p>Vamos direto ao ponto?</p>
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
              <span className="text-zinc-200">Asfalto, ciclovias e parques (Uso Urbano)</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('trilha')} />
              <span className="text-zinc-200">Estradões de terra e trilhas com lama (Uso Severo)</span>
            </label>
          </div>
          {simulacao === 'urbano' && (
            <div className="mt-4 p-4 bg-emerald-950/30 border border-emerald-900/50 rounded-lg text-emerald-400 text-sm">
              <strong className="block mb-1">Ótima escolha!</strong> A KSW foi desenhada exatamente para o seu perfil. Ela vai entregar o que você precisa economizando muito dinheiro.
            </div>
          )}
          {simulacao === 'trilha' && (
            <div className="mt-4 p-4 bg-amber-950/30 border border-amber-900/50 rounded-lg text-amber-400 text-sm">
              <strong className="block mb-1">Atenção!</strong> Para uso severo, a KSW pode te limitar. Recomendamos fortemente pular direto para as alternativas Caloi ou Absolute mais abaixo.
            </div>
          )}
        </div>

        {/* VITRINE / TABELA COMPARATIVA */}
        <div className="mb-16 max-w-[850px] mx-auto bg-zinc-800/50 p-2.5 rounded-2xl sm:p-5 border border-zinc-700 shadow-sm mt-16">
          <h2 className="text-2xl font-extrabold text-white mb-6 text-center">As Melhores Opções Custo-Benefício</h2>
          
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
                {['ksw-xlt-100', 'caloi-moab', 'absolute-nero-4'].map((id) => {
                  const product = products.find(p => p.id === id);
                  if (!product) return null;
                  
                  const meta = {
                    'ksw-xlt-100': { shortName: "KSW XLT 100", category: "Uso Urbano (Entrada)", score: "8.8 / 10" },
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
          <h2>Tipos de KSW e os modelos mais indicados</h2>
          <p>A KSW ganhou as ruas focando em algo muito claro: acessibilidade.</p>
          <p>Olhando o catálogo deles, percebe-se que a estrutura foi desenhada para o ciclista urbano e para quem está ensaiando as primeiras pedaladas na terra.</p>
          <p>Conhecer as variações disponíveis é o primeiro passo para você não comprar uma bike de asfalto achando que vai descer montanhas com ela.</p>

          <h3>BICICLETA KSW XLT 100 21V SHIMANO (Freio a Disco)</h3>
          <p className="text-emerald-400 font-bold">💸 A mais barata que ainda vale a pena comprar</p>
          
          <p>Para quem busca sair do sedentarismo sem esvaziar a conta bancária, a KSW XLT 100 é o ponto de partida ideal.</p>
          <p>O grande segredo dela está na transmissão Shimano Tourney de 21 velocidades.</p>
          <p>O que isso muda no seu pedal?</p>
          <p>Significa que você terá uma combinação de marchas leve o suficiente para vencer ladeiras urbanas sem precisar descer do selim e empurrar a bike.</p>
          <p>O sistema de trocadores Rapid Fire permite mudar a marcha com um clique rápido no gatilho, mantendo sua atenção totalmente no trânsito.</p>
          <p>O quadro em alumínio deixa a bike leve de manobrar, e os freios a disco mecânicos vão te salvar daquele susto de quando um carro freia do nada na sua frente.</p>
          <p>Mas preste atenção: a economia na compra exige um pequeno compromisso.</p>
          <p>A montagem inicial tem que ser feita por um mecânico profissional!</p>
          <p>Ignorar isso é pedir para conviver com marchas estalando e freios raspando.</p>
        </div>

        <AffiliateCard product={products.find(p => p.id === 'ksw-xlt-100')!} />

        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2"><Check className="w-5 h-5" /> Prós</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Transmissão Shimano original com excelente escalonamento para subidas.</li>
              <li>Quadro em alumínio que facilita o transporte e manuseio (adeus dor nas costas para subir escadas).</li>
              <li>Sistema de trocadores Rapid Fire ágil e intuitivo.</li>
              <li>Freios a disco que aumentam consideravelmente a segurança na frenagem.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2"><X className="w-5 h-5" /> Contras</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Exige revisão profissional rigorosa logo após tirar da caixa.</li>
              <li>Suspensão limitada, ideal apenas para terrenos sem grandes buracos.</li>
            </ul>
          </div>
        </div>

        {/* Detalhe Imagem */}
        <div className="my-12">
          <img src="/images/blog/1/detalhe_shimano_ksw.webp" alt="Detalhe do Câmbio Shimano KSW" className="w-full rounded-2xl shadow-xl border border-zinc-700" />
          <p className="text-center text-sm text-zinc-400 mt-3 italic">O câmbio Shimano Tourney garante a confiabilidade mínima para você não ficar a pé no meio do caminho.</p>
        </div>

        <BunnerDoMeio />

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-12">
          <h2>Avaliação dos Componentes e da Marca KSW</h2>
          <p>A reputação da KSW no mercado de entrada se apoia em uma estratégia de montagem focada em custo.</p>
          <p>Por atuar selecionando componentes de diferentes fornecedores, a qualidade final pode variar.</p>
          <p>Compreender como essa mágica do custo-benefício funciona é essencial para não rasgar dinheiro no futuro.</p>

          <h3>Composição básica da bicicleta</h3>
          <p>O coração dessas montagens reside no equilíbrio entre ser barato e ser funcional.</p>
          <p>Na prática, você encontrará:</p>
          <ul>
            <li><strong>Suspensões de 100mm de curso:</strong> Projetadas para filtrar irregularidades leves. Elas evitam que o seu punho e cotovelo fiquem doloridos após passar por um asfalto remendado ou estradão de terra, mas não servem para saltos.</li>
            <li><strong>Transmissão Shimano Tourney:</strong> Robusta o suficiente para o deslocamento diário e não te deixa na mão, desde que você não esqueça de colocar óleo na corrente regularmente.</li>
          </ul>

          <h3>Opiniões de usuários</h3>
          <p>Vasculhei fóruns e análises, e o veredito de quem roda com a KSW é unânime: ela cumpre a missão muito bem, desde que você saiba onde está pisando.</p>
          <p>Ciclistas que percorrem até 50 km semanais em asfalto ou parques relatam uma experiência super satisfatória sem exigir investimentos exorbitantes.</p>
        </div>

        {/* Imagem de Uso Urbano */}
        <div className="my-12">
          <img src="/images/blog/1/ksw_urbana.webp" alt="Ciclista pedalando no asfalto com uso urbano" className="w-full rounded-2xl shadow-xl border border-zinc-700" />
          <p className="text-center text-sm text-zinc-400 mt-3 italic">Para asfalto, ciclovias e parques, o perfil de uso urbano da KSW oferece muito conforto.</p>
        </div>

        {/* Caixa de Destaque */}
        <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border-l-4 border-cyan-500 p-6 rounded-r-xl shadow-md my-12">
          <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            O Segredo da KSW
          </h4>
          <p className="text-zinc-200 italic m-0">"O consenso entre a comunidade é claro: o quadro de alumínio KSW é a peça de maior valor no conjunto. Muitos usuários compram a bike original e vão fazendo upgrades (como trocar a suspensão) aos poucos. É uma excelente tela em branco."</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <h2>Descrição Técnica da Bicicleta KSW Aro 29</h2>
          <p>Analisar a fundo a KSW Aro 29 é observar como a engenharia tenta equilibrar peso e eficiência cobrando pouco.</p>
          <p>Entender isso separa o que é apenas estética do que realmente vai salvar o seu rolê.</p>

          <h3>Quadro e Suspensão</h3>
          <p>O quadro XLT é estruturado em alumínio 6061.</p>
          <p>Essa liga é o "padrão ouro" do custo-benefício, entregando leveza e garantindo que a bike não vai enferrujar com o seu suor.</p>
          <p>Para as mulheres, o modelo MWZA é um acerto gigante da marca: ele tem a geometria ajustada para não te deixar tão esticada sobre a bike, prevenindo dores na lombar.</p>
          <p>A suspensão de 80mm cumpre o papel básico de amortecimento, mas lembre-se: a trava dela fica no ombro do garfo, o que exige que você pare a bicicleta se quiser travá-la para subir uma ladeira de asfalto sem perder energia.</p>

          <h3>Sistema de Marchas e Câmbios</h3>
          <p>A configuração comum varia de 21 a 24 velocidades.</p>
          <p>O segredo investigativo para evitar frustrações aqui é a indexação.</p>
          <p>A KSW muitas vezes mistura o câmbio traseiro Shimano com catracas genéricas para reduzir custos.</p>
          <p>Se isso não for regulado com precisão por um mecânico, você vai levar o maior susto com a marcha "pulando" quando fizer força no pedal.</p>
          <p>Mantendo ajustado, o desgaste precoce passa longe.</p>

          <h3>Componentes Extras (O que vale e o que não vale)</h3>
          <p>Ao analisar as peças periféricas, costumo separar o que é essencial do que é descartável:</p>
          <ul>
            <li>✅ <strong>O que é bom:</strong> Pedivela em alumínio e movimento central selado. Eles rodam suavemente e barram a entrada de poeira e água do dia a dia.</li>
            <li>⚠️ <strong>Ponto de atenção:</strong> Cubos genéricos. Fique de olho na vedação deles. Um conselho de amigo: nunca lave o meio da roda com mangueira de alta pressão!</li>
            <li>🔄 <strong>Peças de transição:</strong> Selim e pedais de nylon. Eles vêm de fábrica para quebrar um galho, mas saiba que você provavelmente vai querer trocá-los logo por modelos mais ergonômicos e resistentes se for pedalar muito.</li>
          </ul>

          <h3>Críticas e limitações</h3>
          <p>Embora o preço seduza, preciso ser realista com as limitações.</p>
          <p>A geometria é deliciosa para passear, mas se mostra "lenta" em trilhas técnicas cheias de curvas fechadas.</p>
          <p>Além disso, ciclistas que começam a fazer muitos quilômetros percebem que as peças genéricas abrem o bico mais rápido.</p>
          <p>A economia inicial pode virar idas constantes à oficina se você abusar da bike em terrenos que ela não foi feita para encarar.</p>

          <h2>O Veredito de Compra</h2>
          <p>✅ <strong>Quando a KSW pode ser uma boa escolha:</strong></p>
          <p>Optar por uma KSW faz total sentido se o seu foco é ir para o trabalho, transporte cotidiano ou curtir o lazer do fim de semana em parques e terrenos mais planos.</p>
          <p>Ela é imbatível na economia para quem quer começar a se movimentar e deixar uma graninha sobrando para comprar os itens de segurança.</p>

          <p>❌ <strong>Quando pensar em outras opções:</strong></p>
          <p>Se você tomou gosto pelo esporte e seu objetivo agora é encarar trilhas com pedras, lama pesada, subidas muito íngremes ou maratonas.</p>
          <p>Nesses cenários, a falta de precisão dos freios mecânicos e a geometria básica vão te limitar.</p>
          <p>Você precisará de equipamentos superiores.</p>

        {/* Imagem de Trilha/Upgrade */}
        <div className="my-12">
          <img src="/images/blog/1/ksw_trilha.webp" alt="Ciclista pedalando em estradão de terra" className="w-full rounded-2xl shadow-xl border border-zinc-700" />
          <p className="text-center text-sm text-zinc-400 mt-3 italic">Se o seu objetivo é devorar poeira e pegar trilhas, as marcas concorrentes vão te oferecer melhor estrutura e segurança.</p>
        </div>

          <h2>Sugestão de Alternativa: Caloi Moab e Absolute Nero 4</h2>
          <p>Se as limitações de um modelo de entrada já não te atendem, o mercado oferece máquinas com um refinamento que muda o seu pedal da água para o vinho.</p>
        </div>

        {/* Tabela Comparativa de Upgrade */}
        <div className="overflow-x-auto my-12">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-zinc-800 text-zinc-100">
                <th className="p-4 border-b border-zinc-700 rounded-tl-xl font-bold">Modelo</th>
                <th className="p-4 border-b border-zinc-700 font-bold">Tipo de Freio</th>
                <th className="p-4 border-b border-zinc-700 font-bold">Marchas</th>
                <th className="p-4 border-b border-zinc-700 rounded-tr-xl font-bold">Foco de Uso</th>
              </tr>
            </thead>
            <tbody className="bg-zinc-900/50">
              <tr className="border-b border-zinc-700/50 hover:bg-zinc-800/50 transition-colors">
                <td className="p-4 text-white font-semibold">KSW XLT</td>
                <td className="p-4 text-zinc-300">Mecânico (Cabo)</td>
                <td className="p-4 text-zinc-300">21V</td>
                <td className="p-4 text-zinc-300">Urbano / Parques</td>
              </tr>
              <tr className="border-b border-zinc-700/50 hover:bg-zinc-800/50 transition-colors">
                <td className="p-4 text-white font-semibold">Caloi Moab</td>
                <td className="p-4 text-zinc-300 text-cyan-400 font-medium">Hidráulico (Óleo)</td>
                <td className="p-4 text-zinc-300">18V Microshift</td>
                <td className="p-4 text-zinc-300">Trilha Leve / Misto</td>
              </tr>
              <tr className="hover:bg-zinc-800/50 transition-colors">
                <td className="p-4 text-white font-semibold">Absolute Nero 4</td>
                <td className="p-4 text-zinc-300 text-cyan-400 font-medium">Hidráulico (Óleo)</td>
                <td className="p-4 text-zinc-300 text-cyan-400 font-medium">1x12V</td>
                <td className="p-4 text-zinc-300">Performance / Subidas Duras</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <h3>Caloi Bicicleta Moab Aro 29 (18 Vel. Microshift)</h3>
          <p className="text-amber-400 font-bold">⭐ A Confiança da Marca Clássica para Uso Misto</p>
          
          <p>A Caloi Moab redefine o conceito de mountain bike de entrada porque ela prioriza a integridade estrutural real, e não apenas uma pintura bonita.</p>
          <p>O grande diferencial que destaco é a transmissão Microshift de 18 velocidades.</p>
          <p>O que isso muda?</p>
          <p>Diferente dos sistemas de 21 marchas que vivem "cruzando" a corrente, as 18 marchas da Moab entregam as opções exatas que você precisa, acumulando menos sujeira e exigindo muito menos regulagem na oficina.</p>
          <p>Os freios a disco hidráulicos Logan são maravilhosos: a modulação da frenagem é levíssima.</p>
          <p>Você sente o controle total na ponta do dedo indicador, sem fazer força.</p>
          <p>É o equipamento que respeita o seu esforço, ideal para estradões de terra e asfalto com buracos.</p>
        </div>

        <AffiliateCard product={products.find(p => p.id === 'caloi-moab')!} />

        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2"><Check className="w-5 h-5" /> Prós</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Transmissão Microshift de 18v com trocas fluidas e menos visita ao mecânico.</li>
              <li>Freios hidráulicos que não te deixam com dor na mão após uma descida longa.</li>
              <li>Quadro com soldas reforçadas para não trincar em impactos.</li>
              <li>Rede de assistência gigantesca da Caloi.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2"><X className="w-5 h-5" /> Contras</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>O quadro mais robusto eleva o peso, exigindo perna nas ladeiras brutas.</li>
              <li>Pneus originais rodam rápido no asfalto, mas derrapam em lama espessa.</li>
            </ul>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-12">
          <h3>Bicicleta Aro 29 Absolute Nero 4 (1x12 Hidráulico)</h3>
          <p className="text-cyan-400 font-bold">⛰️ Para Engolir Subidas e Trilhas Técnicas</p>
          
          <p>Se você já quer colocar a bike na terra de verdade, a Absolute Nero 4 é um divisor de águas absoluto.</p>
          <p>O pulo do gato investigativo aqui é a transmissão 1x12.</p>
          <p>Ao usar uma única coroa na frente, você elimina o câmbio dianteiro.</p>
          <p>O resultado?</p>
          <p>Você tira quase um quilo de peso da bicicleta, ganha um guidão muito mais limpo e encerra de vez o pesadelo da corrente caindo ao mudar de marcha numa subida!</p>
          <p>A marcha traseira mais leve é gigantesca, funcionando como um guincho que te ajuda a escalar barrancos.</p>
          <p>Os freios hidráulicos complementam a agressividade dela em descidas.</p>
          <p>A única ressalva: atenção redobrada ao tamanho do quadro (geralmente focado em 15"), faça as contas do seu Bike Fit para ter certeza de que o conforto será perfeito.</p>
        </div>

        <AffiliateCard product={products.find(p => p.id === 'absolute-nero-4')!} />

        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2"><Check className="w-5 h-5" /> Prós</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Transmissão 1x12 super moderna que facilita muito as subidas duras.</li>
              <li>Freios hidráulicos que entregam confiança total no controle.</li>
              <li>Cabeamento interno que esconde os fios, deixando a bike linda e protegida da lama.</li>
              <li>Peso total altamente competitivo.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2"><X className="w-5 h-5" /> Contras</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Exige muita atenção à tabela de tamanhos antes de comprar.</li>
              <li>O selim original tem pegada esportiva; se você não usa bermuda de ciclismo acolchoada, pode sentir dor nos primeiros dias.</li>
            </ul>
          </div>
        </div>

        {/* Video Youtube */}
        <div className="bg-zinc-800/30 p-8 rounded-2xl border border-zinc-700/50 text-center my-16 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Vale a pena investir em freio hidráulico?</h2>
          <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">Confira no vídeo abaixo a diferença real de funcionamento entre o freio mecânico (KSW) e o freio hidráulico (Caloi e Absolute) e tire suas próprias conclusões.</p>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto border border-zinc-700">
            <iframe 
              src="https://www.youtube.com/embed/q3rGmM_FRbw" 
              title="Freio a disco hidráulico vs mecânico" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-[300px] md:h-[450px]"
            ></iframe>
          </div>
        </div>
        
        {/* ACESSÓRIOS CROSS-SELL */}
        <div className="my-16 bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Complete seu setup de segurança urbana</h3>
          <p className="text-zinc-300 text-sm mb-6 text-center">Sua segurança no trânsito não tem preço. Complete seu setup com: Capacete com LED, Trava/Cadeado em U (U-Lock) e Bomba de ar portátil.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
        {/* FAQ Section */}
        <h2 className="text-2xl font-bold text-white mb-8 mt-16 flex items-center gap-3">
          <HelpCircle className="text-cyan-500 w-8 h-8" />
          Perguntas frequentes (FAQ)
        </h2>
        <div className="space-y-4 mb-16">
          {faqData.map((faq, index) => (
            <div key={index} className="border border-zinc-700 rounded-xl overflow-hidden bg-zinc-900 shadow-sm hover:shadow-md transition-shadow">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 flex items-center justify-between font-bold text-zinc-100 text-left bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
              >
                {faq.question}
                {openFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-cyan-600 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-cyan-600 shrink-0" />
                )}
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-[1000px] py-4' : 'max-h-0 py-0'}`}
              >
                <div className="space-y-3 prose prose-slate">
                  {faq.answer.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-zinc-400">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CONCLUSÃO */}
        <div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700 shadow-sm mt-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Conclusão</h2>
          <div className="space-y-4 prose prose-lg text-zinc-300">
            <p>A sua decisão no balcão da loja, ou no carrinho de compras online, deve ser guiada por uma regra simples: para onde essa bike vai te levar?</p>
            <p>Se a ideia é fazer do ciclismo um meio de transporte para o dia a dia ou dar aquela volta descompromissada no domingo à tarde, a KSW entrega um valor imbatível para o seu bolso.</p>
            <p>Só não pule a revisão inicial!</p>
            <p>Agora, se o mato e as trilhas cheias de adrenalina estão te chamando, não tente forçar a barra de uma bike urbana.</p>
            <p>Caloi Moab e Absolute Nero 4 entregam os recursos tecnológicos de que você vai precisar para se sentir seguro e focar só na diversão.</p>
            <p>Avalie sua rotina, escolha a sua magrela e bora pedalar!</p>
          </div>
        </div>

        {/* SOBRE O AUTOR */}
        <div className="bg-cyan-950/20 p-8 rounded-2xl border border-cyan-900/50 shadow-sm mt-8 mb-16 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="shrink-0 mx-auto md:mx-0">
            <a href="/author/rafael-martins" className="hover:opacity-80 transition-opacity block">
              <img src="/images/autores/Rafael Martins.webp" alt="Rafael Martins" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-cyan-900/50 hover:border-cyan-500 transition-colors shadow-xl" />
            </a>
          </div>
          <div>
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">Sobre o Autor</h2>
            <a href="/author/rafael-martins" className="hover:text-cyan-400 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">Rafael Martins</h3>
            </a>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Rafael é um apaixonado por mecânica de bicicletas e ciclista inveterado. No balcão da oficina ou nas trilhas de final de semana, seu objetivo é traduzir o "mecaniquês" técnico e chato para ajudar as pessoas a não rasgarem dinheiro, escolhendo exatamente as peças que precisam. As recomendações aqui são fruto de mãos sujas de graxa, análise minuciosa de fichas oficiais e da vivência real de quem gasta o pneu no asfalto e na terra, defendendo sempre uma mobilidade mais inteligente e saudável.
            </p>
          </div>
        </div>
      </article>
    </>
  );
};