import React, { useState } from 'react';
import AffiliateCard from './AffiliateCard';
import BunnerDoMeio from './BunnerDoMeio';
import ExitIntentPopup from './ExitIntentPopup';
import { HelpCircle, ArrowRight, Check, X, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { products, accessories } from '../data/products';

export const ArtigoColliTorontoAro29: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [simulacao, setSimulacao] = useState<'quebra' | 'manutencao' | 'peso' | null>(null);
  
  const product = products.find(p => p.id === 'colli-toronto');

  if (!product) {
    return <div className="text-white p-8">Produto não encontrado.</div>;
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "As bicicletas Colli são confiáveis?",
      answer: [
        "Sim!",
        "Eles pararam de usar peças descartáveis e focaram no custo-benefício trazendo a linha Shimano.",
        "Isso joga a confiabilidade mecânica lá em cima, te deixando muito mais seguro do que com bikes genéricas de supermercado."
      ]
    },
    {
      question: "Onde as bicicletas são fabricadas?",
      answer: [
        "A produção é toda nacional.",
        "O que isso muda na sua vida?",
        "Se um dia você quebrar uma peça do quadro, vai ser incrivelmente rápido e barato encontrar reposição, sem esperar meses por envios da China."
      ]
    },
    {
      question: "Qualquer pessoa pode montar a bicicleta?",
      answer: [
        "A caixa chega pré-montada, mas a resposta nua e crua é: não invente de montar em casa se não tiver ferramentas.",
        "O susto de um freio frouxo ou de um câmbio engolido pela roda traseira sai muito mais caro que pagar um mecânico para o aperto final e lubrificação."
      ]
    },
    {
      question: "A Toronto é indicada para trilhas pesadas?",
      answer: [
        "Não!",
        "Ela é valente no asfalto e na estrada de terra batida.",
        "Colocar ela para saltar raízes ou descer pedreiras é certeza de empenar a roda e estourar a suspensão em semanas."
      ]
    }
  ];

  return (
    <>
      <ExitIntentPopup />
      
      {/* Hero Section */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img fetchpriority="high" width="1200" height="800" src="/images/blog/1/bicicleta-colli-toro-aro-29-e-boa.webp" 
            alt="Bicicleta Colli Toronto Aro 29 Background" 
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Bicicleta Colli Toronto Aro 29 é Boa? <br/>
            <span className="text-cyan-400">Avaliação Honesta!</span>
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-zinc-400">
            <span className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center border border-cyan-500/30 overflow-hidden">
                <img loading="lazy" width="800" height="600" src="/images/autores/Rafael Martins.webp" alt="Rafael Martins" className="w-full h-full object-cover" />
              </div>
              Por Rafael Martins
            </span>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* INTRODUÇÃO */}
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <p>Escolher a primeira mountain bike pode dar um nó na cabeça com tanta opção espalhada pela internet.</p>
          <p>É normal ficar na balança entre não rasgar dinheiro e garantir que a bicicleta aguente o tranco do asfalto esburacado ou daquela trilha de fim de semana.</p>
          <p>O maior medo de quem está começando é investir em peças de baixa qualidade, que vão dar dor de cabeça e te deixar a pé na primeira subida.</p>
          <p>A Bicicleta Colli Toronto Aro 29 aparece muito nas buscas como uma opção barata, mas é preciso ir além da pintura bonita.</p>
          <p>Passei um bom tempo analisando o que ela entrega de verdade na mecânica para saber se ela serve para o seu pedal ou se é melhor pular fora.</p>
        </div>

        {/* Simulador de Perfil */}
        <div className="bg-zinc-800/50 p-6 md:p-8 rounded-2xl border border-cyan-900/50 shadow-lg mb-12">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-cyan-500" />
            Qual o seu maior receio ao comprar sua primeira mountain bike?
          </h3>
          <p className="text-zinc-300 mb-4">Selecione para ver como a Colli Toronto pode ajudar:</p>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('quebra')} />
              <span className="text-zinc-200">Comprar algo frágil que quebra rápido.</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('manutencao')} />
              <span className="text-zinc-200">A manutenção ser muito cara.</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('peso')} />
              <span className="text-zinc-200">Ser pesada demais para subir ladeiras.</span>
            </label>
          </div>
          
          {simulacao === 'quebra' && (
            <div className="mt-4 p-4 bg-emerald-950/30 border border-emerald-900/50 rounded-lg text-emerald-400 text-sm">
              <strong className="block mb-1">Análise:</strong> O quadro de alumínio da Toronto é resistente e as peças Shimano evitam quebras surpresas se usados na cidade.
            </div>
          )}
          {simulacao === 'manutencao' && (
            <div className="mt-4 p-4 bg-cyan-950/30 border border-cyan-900/50 rounded-lg text-cyan-400 text-sm">
              <strong className="block mb-1">Análise:</strong> Os freios a disco mecânicos e câmbios Tourney da Toronto usam peças universais baratas e fáceis de achar em qualquer oficina.
            </div>
          )}
          {simulacao === 'peso' && (
            <div className="mt-4 p-4 bg-purple-950/30 border border-purple-900/50 rounded-lg text-purple-400 text-sm">
              <strong className="block mb-1">Análise:</strong> As 21 marchas Shimano com marchas super leves (vovozinhas) garantem que você não empurre a bike nas subidas.
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
                {['colli-toronto', 'ksw-xlt-100'].map((id) => {
                  const prod = products.find(p => p.id === id);
                  if (!prod) return null;
                  return (
                    <tr key={prod.id} className="border-b border-zinc-700 last:border-b-0 hover:bg-zinc-800/50 transition-colors">
                      <td className="p-2 align-middle text-center">
                        <div className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] border border-slate-100 rounded flex items-center justify-center p-0.5 bg-zinc-100 mx-auto overflow-hidden">
                          {prod.imageUrl ? (
                             <img loading="lazy" width="800" height="600" src={prod.imageUrl} alt={prod.name} className="max-w-full max-h-full block object-cover" />
                          ) : (
                             <span className="text-[10px] text-zinc-400 font-bold">Bicicleta</span>
                          )}
                        </div>
                      </td>
                      <td className="p-3 text-sm sm:text-base font-bold text-white align-middle">
                        <a href={prod.affiliateUrl} aria-label={`Ver oferta de ${prod.name}`} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                          {prod.name}
                        </a>
                      </td>
                      <td className="p-3 text-sm text-zinc-400 text-center align-middle hidden sm:table-cell">
                        {prod.category}
                      </td>
                      <td className="p-3 align-middle text-center">
                        <a href={prod.affiliateUrl} aria-label={`Ver oferta de ${prod.name}`}
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

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <h2>Visão geral da bicicleta Colli Toronto Aro 29</h2>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={product.imageUrl} alt="Bicicleta Colli Toronto Aro 29 de perfil num fundo moderno" className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <p>A Colli Toronto se posiciona como aquela parceira estratégica para quem quer aposentar o transporte público lotado ou começar a suar a camisa nos passeios de domingo.</p>
          <p>Olhando de fora, ela chama atenção pelo design moderno, mas o que importa para nós aqui é se ela resolve a sua rotina sem exigir visitas semanais à oficina.</p>
          <p>Essa bike foi pensada para entregar um equilíbrio muito claro: não custar uma fortuna e, ao mesmo tempo, oferecer uma experiência digna para o uso diário.</p>
          <p>Fui investigar o que tem por trás desse quadro e dos componentes para te mostrar exatamente onde ela brilha e quais cuidados você vai precisar ter no dia a dia.</p>
        </div>

        <AffiliateCard product={product} />

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          {/* Cross-Sell Carrossel Estilo Dropp */}
          <div className="my-16">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Acessórios Essenciais para sua Toronto</h3>
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

          <h2>Especificações técnicas</h2>
          <p>Ler a ficha técnica costuma ser a parte mais chata da compra, mas acredite: é aqui que você descobre se a bike vai passar mais tempo rodando na rua ou encostada esperando conserto.</p>
          <p>A Colli Toronto foca no ciclista iniciante, misturando peças que dão conta do recado sem cobrar o preço absurdo de uma bicicleta de competição.</p>
          <p>Analisar esses detalhes é crucial, pois quando você entende o que cada componente muda de fato no seu pedal – desde a alavanca de marcha até o tipo de freio –, você ganha a segurança necessária para bater o martelo.</p>
          <p>Vamos destrinchar essa mecânica para alinhar o que a fábrica promete com a realidade das ruas.</p>
          
          <h3>Modelo: Toronto</h3>
          <p>A linha Toronto é o verdadeiro "feijão com arroz" bem feito da Colli.</p>
          <p>Ela não tenta fingir que é uma bike de alta performance para saltos e manobras extremas.</p>
          <p>O foco dela é transitar entre o passeio urbano e o cicloturismo leve.</p>
          <p>A marca tirou complexidades mecânicas que um iniciante não iria usar e focou numa geometria que te deixa confortável no banco.</p>
          <p>É a bicicleta ideal para quem não quer a dor de cabeça de caçar peça por peça para montar do zero, o que sempre acaba estourando o orçamento.</p>
          <p>Ela já vem num pacote testado, pronta para te atender assim que sair da primeira regulagem.</p>

          <h3>Materiais do quadro da bicicleta: Alumínio</h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src="/images/blog/1/colli_quadro_aluminio.webp" alt="Detalhe do quadro de alumínio da Bicicleta Colli Toronto" className="w-full rounded-2xl shadow-xl border border-zinc-700" />
          </div>
          <p>A escolha do alumínio como alma dessa bicicleta não é por acaso.</p>
          <p>Se fosse um quadro de aço carbono comum, você iria sofrer dobrado para carregar a bike na escadaria do prédio ou simplesmente para arrancar quando o semáforo abrisse.</p>
          <p>O alumínio entrega o equilíbrio perfeito: é resistente e muito mais leve.</p>
          <p>Na prática, isso significa que você faz menos força nas pernas para sair do lugar.</p>
          <p>Além disso, se você pega chuva no trajeto ou mora em região litorânea, não tem aquele susto de ver o quadro enferrujando.</p>
          <p>É um material que absorve melhor a vibração da rua esburacada, garantindo uma pilotagem mais ágil.</p>

          <h3>Tamanho do quadro: 17"</h3>
          <p>Sabe aquela dor terrível nas costas ou a fisgada no joelho depois de meia hora pedalando?</p>
          <p>Noventa por cento das vezes a culpa é de um quadro do tamanho errado.</p>
          <p>O quadro de 17 polegadas da Colli Toronto é o que chamamos na oficina de tamanho "médio" universal, ideal para quem tem entre 1,65m e 1,78m.</p>
          <p>Essa medida é um divisor de águas na sua experiência, pois oferece uma geometria que favorece tanto a agilidade para desviar dos carros quanto o conforto no fim do dia.</p>
          <p>Ao pedalar num quadro compatível com seu corpo, a ergonomia trabalha a sua favor, deixando sua postura neutra sem exigir um bike fit profissional caro.</p>
        </div>

        <BunnerDoMeio />

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <h3>Quantidade de velocidades: 21 (Shimano Tourney)</h3>
          <p>O sistema de 21 marchas (3 coroas na frente e 7 atrás) é a sua salvação no sobe e desce da cidade.</p>
          <p>Ao utilizar a linha Shimano Tourney, a bike entrega uma marcha super leve.</p>
          <p>O que isso muda no seu pedal?</p>
          <p>Significa que você vai vencer aquela ladeira íngreme voltando do trabalho sem precisar descer e empurrar a bicicleta.</p>
          <p>E quando pegar um retão asfaltado, tem marcha pesada suficiente para embalar e ganhar tempo.</p>
          <p>A precisão japonesa desse sistema evita aquele incômodo "salto" em falso da corrente quando você faz muita força nas pernas, transformando um trajeto exaustivo num passeio fluido.</p>

          <h3>Câmbios dianteiros e traseiros: Shimano</h3>
          <p>Olhando rápido na vitrine, as pecinhas perto da roda parecem todas iguais, mas ter câmbios Shimano na frente e atrás muda o jogo completamente.</p>
          <p>Diferente dos câmbios genéricos baratinhos que desregulam a cada buraco ou trepidação, a Shimano entrega construção focada na durabilidade.</p>
          <p>Você dá o clique na manete e a marcha entra macia, constante e sem atrasos.</p>
          <p>Ter esse componente da marca líder mundial te poupa o estresse tremendo de viver encostando a bicicleta na oficina só para apertar cabinhos.</p>
          <p>É o nível ideal de robustez, garantindo que o seu tempo livre seja aproveitado rodando, e não sujando a mão de graxa.</p>
          
          <h3>Tipo de freios: Disco mecânico</h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src="/images/blog/1/colli_cambio_disco.webp" alt="Detalhe do câmbio Shimano e do freio a disco da Colli Toronto" className="w-full rounded-2xl shadow-xl border border-zinc-700" />
          </div>
          <p>Se chover forte no meio do caminho, o freio tradicional de borracha (V-Brake) vai escorregar no aro e te dar um frio na espinha.</p>
          <p>A Colli Toronto vem armada com freios a disco mecânicos, que garantem que você pare a bicicleta na hora exata, não importa o clima.</p>
          <p>A grande sacada investigativa aqui para o seu bolso é a manutenção: como o disco é acionado por cabos de aço comuns (e não por fluidos complicados como nos freios hidráulicos caríssimos), você não vai gastar fortunas com sangrias complexas.</p>
          <p>Embora exija que você aperte o manete com um pouquinho mais de firmeza, é um sistema incrivelmente rústico, seguro e barato de ajustar.</p>

          <h2>Conforto e desempenho</h2>
          <p>Uma bicicleta só rende bem se você não estiver lutando contra ela a cada quarteirão.</p>
          <p>A engenharia da Colli Toronto te coloca numa postura que alivia a tensão nos ombros e nos punhos, harmonizando o quadro com a resposta das rodas.</p>
          <p>Seja desviando de imperfeições no asfalto irregular, descendo guias ou pegando um trecho leve de terra batida no final de semana, o desempenho se mantém incrivelmente estável.</p>
          <p>Isso poupa a sua energia para o que realmente importa: curtir o vento no rosto e chegar ao seu destino sem estar completamente esgotado.</p>

          <h2>Durabilidade e qualidade de construção</h2>
          <p>O quadro de alumínio já blinda sua bicicleta contra a terrível ferrugem, mas na mecânica não existe milagre se você não tiver zelo.</p>
          <p>Para essa bicicleta durar anos sem apresentar aqueles estalos chatos toda vez que você pedala forte, é preciso cuidar dos componentes ao redor.</p>
          <p>Como é uma bike voltada ao uso urbano, o desgaste das pastilhas de freio e o acúmulo de sujeira na corrente são inevitáveis.</p>
          <p>O segredo que muitos não te contam é simples: trate sua bicicleta com revisões preventivas semestrais.</p>
          <p>Uma limpeza correta e óleo adequado na corrente fazem a Toronto suportar o tranco diário por muito tempo, sem criar folgas na estrutura.</p>

          <h2>Indicações de uso</h2>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src="/images/blog/1/colli_indicacao_uso.webp" alt="Pessoa pedalando confortavelmente uma mountain bike aro 29 em uma ciclovia de asfalto" className="w-full rounded-2xl shadow-xl border border-zinc-700" />
          </div>
          <p>Para quem essa bicicleta realmente serve?</p>
          <p>Definir o perfil ideal do ciclista evita decepções logo no primeiro mês e impede que você compre o produto errado.</p>
          <p>A Colli Toronto tem uma vocação clara, desenhada para percursos específicos.</p>
          <p>Analisei a fundo a resistência das rodas e da suspensão para cravar exatamente onde ela vai te fazer feliz.</p>
          <p>Veja abaixo os vereditos diretos:</p>
          
          <p>⭐ <strong>Melhor Custo-Benefício para Iniciantes</strong></p>
          <p>Se o seu foco é ir para o trabalho via asfalto, passear em ciclovias ou pegar uma estradinha de terra nivelada no fim de semana, ela sobra e dá conta do recado com louvor.</p>
          
          <p>⛰️ <strong>Para quem quer encarar Trilhas Pesadas</strong></p>
          <p>Fuja.</p>
          <p>Se você quer saltar barrancos, descer pirambeiras e fazer trilhas cheias de raízes e pedras soltas, essa bike não é para você.</p>
          <p>A suspensão e as rodas vão abrir o bico rapidamente.</p>

          <h2>Opiniões dos usuários</h2>
          <p>O feedback de quem já bate cartão com essa bicicleta todo dia é uma mina de ouro para entendermos a realidade fora das fotos de estúdio.</p>
          <p>Passei horas garimpando relatos e é incrível como existe um padrão muito claro sobre a experiência de uso.</p>
          <p>Os maiores elogios vão para a leveza e facilidade das marchas, mas há detalhes de montagem que pegam iniciantes de surpresa, alertando sempre para a importância daquela revisão geral assim que ela chega na sua casa para não passar sufoco.</p>
          
          <h3>Colli Toronto vs KSW XLT 100</h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'ksw-xlt-100')?.imageUrl} alt={products.find(p => p.id === 'ksw-xlt-100')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <p>A dúvida entre a Toronto e a KSW XLT 100 é figurinha carimbada na oficina.</p>
          <p>Colocar a Colli Toronto do lado da KSW XLT 100 é uma briga muito boa, já que as duas batem de frente na qualidade e no preço.</p>
          <p>Ambas vêm equipadas com o excelente conjunto Shimano Tourney de 21 marchas, o que garante precisão e durabilidade nas trocas.</p>
          <p>O que vai definir a sua escolha aqui é o estilo e a construção do quadro.</p>
          <p>A KSW foca numa geometria leve e já muito validada no mercado para quem quer uma pegada um pouco mais esportiva na terra.</p>
          <p>Já a Colli Toronto entrega um visual moderno, com a segurança de um conjunto montado direto de fábrica para quem quer agilidade no asfalto.</p>
          <p>Seja qual for a escolha, ambas são excelentes "primeiras bikes" que fogem das peças genéricas descartáveis.</p>
        </div>

        <AffiliateCard product={products.find(p => p.id === 'ksw-xlt-100')!} />

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <h2>Prós e contras: Bicicleta Colli Toronto Aro 29</h2>
          <p>Toda bicicleta de entrada é um cobertor curto: você ganha de um lado, mas tem que abrir mão de outro.</p>
          <p>A Colli Toronto se destaca na multidão, mas esconde detalhes operacionais.</p>
          <p>Coloquei as qualidades e os pontos fracos na balança para você conhecer os fatores que justificam passar o cartão, e também os pequenos apertos que você fará para deixá-la 100% afinada.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 not-prose">
            <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
              <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2"><Check className="w-5 h-5" /> Prós</h4>
              <ul className="space-y-2 text-zinc-300 text-sm">
                <li>Quadro leve em alumínio (não enferruja).</li>
                <li>Câmbios Shimano Tourney (trocas macias e duráveis).</li>
                <li>Freio a disco mecânico (manutenção barata e frenagem imediata na chuva).</li>
              </ul>
            </div>
            <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
              <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2"><X className="w-5 h-5" /> Contras</h4>
              <ul className="space-y-2 text-zinc-300 text-sm">
                <li>A suspensão dianteira é básica e macia demais para grandes buracos.</li>
                <li>O selim original costuma pedir substituição se você for pedalar por horas a fio.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* VITRINE COMPARATIVA NO FINAL */}
        <div className="my-16">
          <h2 className="text-3xl font-extrabold text-white mb-8 border-b border-zinc-800 pb-4">
            Comparativo Direto
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="p-4 border-b border-zinc-800 text-zinc-400 font-semibold">Característica</th>
                  <th className="p-4 border-b border-zinc-800 text-zinc-100 font-bold bg-cyan-950/20">Colli Toronto</th>
                  <th className="p-4 border-b border-zinc-800 text-zinc-400 font-semibold">KSW XLT 100</th>
                </tr>
              </thead>
              <tbody className="text-zinc-300">
                <tr>
                  <td className="p-4 border-b border-zinc-800/50 font-medium">Imagem</td>
                  <td className="p-4 border-b border-zinc-800/50 bg-cyan-950/10">
                    <img loading="lazy" width="800" height="600" src={product.imageUrl} alt={product.name} className="w-24 h-24 object-contain bg-white rounded p-1" />
                  </td>
                  <td className="p-4 border-b border-zinc-800/50">
                    <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'ksw-xlt-100')?.imageUrl} alt="KSW XLT 100" className="w-24 h-24 object-contain bg-white rounded p-1" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-zinc-800/50 font-medium">Câmbio</td>
                  <td className="p-4 border-b border-zinc-800/50 bg-cyan-950/10">Shimano Tourney 21v</td>
                  <td className="p-4 border-b border-zinc-800/50">Shimano Tourney 21v</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-zinc-800/50 font-medium">Quadro</td>
                  <td className="p-4 border-b border-zinc-800/50 bg-cyan-950/10">Alumínio (Visual Moderno)</td>
                  <td className="p-4 border-b border-zinc-800/50">Alumínio (Pegada Esportiva)</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-zinc-800/50 font-medium">Freios</td>
                  <td className="p-4 border-b border-zinc-800/50 bg-cyan-950/10">Disco Mecânico</td>
                  <td className="p-4 border-b border-zinc-800/50">Disco Mecânico</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-zinc-800/50 font-medium">Indicação</td>
                  <td className="p-4 border-b border-zinc-800/50 bg-cyan-950/10">Asfalto e Ciclovia</td>
                  <td className="p-4 border-b border-zinc-800/50">Estradão de Terra</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="my-16">
          <h2 className="text-3xl font-extrabold text-white mb-8 border-b border-zinc-800 pb-4">
            Perguntas Frequentes
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

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <h2>Conclusão</h2>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src="/images/blog/1/colli_conclusao.webp" alt="Bicicleta apoiada em um parque urbano calmo" className="w-full rounded-2xl shadow-xl border border-zinc-700" />
          </div>
          <p>A Colli Toronto provou no balcão que é uma aposta redonda e inteligente para quem quer abandonar o ônibus ou começar o ciclismo sem fazer um rombo nas finanças.</p>
          <p>Você não está levando só uns tubos de alumínio soldados; está garantindo um conjunto mecânico que, amparado por uma revisão inicial na oficina, vai matar na raiz as dores de cabeça clássicas das bikes baratas.</p>
          <p>Diferente de algumas opções de entrada que dependem de montagens variadas de lojistas, a Toronto te entrega a tranquilidade imediata da engenharia Shimano direto da fábrica.</p>
          <p>Se o plano é suar a camisa, cuidar da saúde ou ganhar agilidade no trânsito, a robustez contra ferrugem e as trocas de marcha certeiras fazem dela um equipamento pra lá de honesto.</p>
          <p>Avalie seu tamanho, leve-a no seu mecânico de confiança para aquele aperto no primeiro dia e pronto.</p>
          <p>Você acaba de fazer um negócio estratégico para suas pedaladas.</p>
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
