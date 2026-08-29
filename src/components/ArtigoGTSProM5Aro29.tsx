import React, { useState } from 'react';
import AffiliateCard from './AffiliateCard';
import BunnerDoMeio from './BunnerDoMeio';
import ExitIntentPopup from './ExitIntentPopup';
import { HelpCircle, ArrowRight, Check, X, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { products, accessories } from '../data/products';

export const ArtigoGTSProM5Aro29: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [simulacao, setSimulacao] = useState<'iniciante' | 'intermediario' | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "A Bicicleta GTS PRO M5 Track vem montada?",
      answer: [
        "A resposta curta é: quase toda. Ela chega na caixa com as partes vitais já presas ao quadro.",
        "O seu trabalho vai ser rosquear pedais, colocar selim, prender o guidão e a roda da frente.",
        "Se você é curioso, resolve isso na sala de casa. Mas, reafirmo: um alinhamento fino dos freios e marchas feito por um mecânico profissional antes do seu primeiro giro garante que você não desgaste as peças nos primeiros quilômetros."
      ]
    },
    {
      question: "Qual tamanho de quadro escolher para minha altura?",
      answer: [
        "Escolher o quadro errado é pedir para odiar pedalar.",
        'Se você está entre 1,65 m e 1,80 m, o tamanho 17" é o seu ponto de conforto.',
        'Para os mais baixinhos, a versão 15" deixa a bike mais na mão, garantindo segurança na hora de colocar o pé no chão.',
        'Passou de 1,80 m? Pule logo para os quadros 19" ou 21" para não ficar parecendo um gigante numa bicicletinha. Respeitar essa medida garante que seus braços e coluna fiquem na posição natural.'
      ]
    },
    {
      question: "Os pneus são resistentes a furos?",
      answer: [
        "Eles dão conta do recado em ciclofaixas e asfalto liso.",
        "Mas, como todo pneu de entrada, eles não têm aquela camada super grossa contra furos.",
        "Se você mora num lugar com muito caco de vidro, espinhos ou acostamento sujo, a dica de ouro é: já compre fitas antifuro ou câmaras com selante líquido logo de cara.",
        "É um investimento minúsculo que evita a raiva de ter que empurrar a bike furada voltando para casa."
      ]
    },
    {
      question: "Com que frequência preciso regular os freios?",
      answer: [
        "O freio a disco mecânico funciona puxando um cabo de aço.",
        'Se você pegar muita poeira ou chuva, a pastilha gasta e o cabo "estica".',
        "O ideal é você sentir no toque: se a maçaneta do freio estiver encostando no guidão, é hora de regular.",
        "Num uso normal, pedir pro mecânico dar uma checada a cada 30 dias é o suficiente para garantir que você não perca poder de frenagem em uma emergência."
      ]
    },
    {
      question: "O câmbio Shimano é durável?",
      answer: [
        "Se a versão que você escolheu (ou a sua KSW concorrente) vier com o grupo Shimano, a resposta é sim!",
        "O equipamento Shimano de entrada é um tanque de guerra para uso urbano. Ele só desregula rápido se você enfiar a bike em buracos violentos com frequência.",
        "Trate o câmbio com carinho, mantenha a corrente limpa de terra e com algumas gotinhas de óleo, e as marchas vão deslizar sem te dar sustos por muito tempo."
      ]
    },
    {
      question: "A suspensão dianteira funciona em trilhas?",
      answer: [
        'Ela funciona muito bem como um "amortecedor de trepidação" em estradões de terra batida ou naquele asfalto craquelado.',
        'Agora, se o caminho tiver pedras do tamanho de laranjas ou raízes grandes, ela vai "bater no fundo" e você vai sentir o impacto nos braços.',
        "Entenda que é uma suspensão para conforto recreativo, não para absorver saltos radicais de mountain bike pesado."
      ]
    },
    {
      question: "Qual o peso máximo suportado?",
      answer: [
        "Dependendo da especificação exata do lote, a fabricante fala em limites estruturais seguros entre 120 kg e 130 kg (contando você + suas roupas + mochila).",
        "O quadro tira isso de letra, mas se você rodar próximo desse peso em ruas muito acidentadas, os raios da roda podem começar a quebrar.",
        "Se esse for o seu caso, ande com o pneu calibrado na medida certa e mande conferir a tensão dos raios da roda com frequência para garantir a máxima durabilidade."
      ]
    },
    {
      question: "A bicicleta serve para downhill ou trilhas técnicas?",
      answer: [
        "Nem pensar! Colocar a M5 em descidas de downhill é risco de quebrar a bike e se machucar feio.",
        "Downhill exige peças caríssimas, eixos reforçados e suspensões enormes. A GTS M5 é rainha na cidade e princesa no estradão de terra. Respeite essa vocação.",
        "Se o que você procura é uma máquina para descomplicar a sua ida ao trabalho ou garantir a sua saúde no final de semana, a GTS Pro M5 é uma jogada muito inteligente.",
        "O custo-benefício dela é imbatível. Pode comprar sem medo e começar a girar as pernas!"
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
            src="/images/blog/1/gts_pro_m5_card.webp" 
            alt="Bicicleta GTS Pro M5 Background" 
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Bicicleta gts pro m5 aro 29 é boa Ou <br/>
            <span className="text-cyan-400">Alternativa KSW é melhor?</span>
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-zinc-400">
            <span className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center border border-cyan-500/30 overflow-hidden">
                <img src="/images/autores/Rafael Martins.webp" alt="Rafael" className="w-full h-full object-cover" />
              </div>
              Por Rafael Martins
            </span>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <p>Sabe aquela vontade de começar a pedalar que sempre esbarra no medo de comprar a bike errada?</p>
          <p>É o dilema clássico que escuto todo dia aqui no balcão da oficina.</p>
          <p>Você quer uma bicicleta valente, que aguente a buraqueira da cidade ou aquele estradão de terra no final de semana, mas sem precisar gastar o preço de uma moto usada para isso.</p>
          
          <p>A dúvida que não quer calar é: a bicicleta GTS Pro M5 aro 29 é boa para quem está dando as primeiras pedaladas ou quer abandonar o ônibus no dia a dia?</p>
          <p>Para te dar essa resposta, precisamos ir além da pintura bonita e olhar para a mecânica real da bicicleta.</p>
          <p>Vamos descobrir juntos se as peças dela dão conta do recado ou se vão te deixar na mão.</p>
        </div>

        {/* Simulador de Perfil */}
        <div className="bg-zinc-800/50 p-6 md:p-8 rounded-2xl border border-cyan-900/50 shadow-lg mb-12">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-cyan-500" />
            Qual o seu nível de experiência?
          </h3>
          <p className="text-zinc-300 mb-4">Selecione para ver se a GTS Pro M5 é para você:</p>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('iniciante')} />
              <span className="text-zinc-200">Iniciante / Lazer</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('intermediario')} />
              <span className="text-zinc-200">Intermediário / Trilhas Pesadas</span>
            </label>
          </div>
          {simulacao === 'iniciante' && (
            <div className="mt-4 p-4 bg-emerald-950/30 border border-emerald-900/50 rounded-lg text-emerald-400 text-sm">
              <strong className="block mb-1">Perfeito!</strong> A GTS Pro M5 é ideal para iniciantes que querem conforto no asfalto e estradões sem gastar muito.
            </div>
          )}
          {simulacao === 'intermediario' && (
            <div className="mt-4 p-4 bg-amber-950/30 border border-amber-900/50 rounded-lg text-amber-400 text-sm">
              <strong className="block mb-1">Cuidado!</strong> Se você já faz trilhas técnicas ou quer um uso muito agressivo, a GTS Pro M5 vai limitar seu desempenho.
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
                {['gts-pro-m5', 'ksw-xlt-100'].map((id) => {
                  const product = products.find(p => p.id === id);
                  if (!product) return null;
                  return (
                    <tr key={product.id} className="border-b border-zinc-700 last:border-b-0 hover:bg-zinc-800/50 transition-colors">
                      <td className="p-2 align-middle text-center">
                        <div className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] border border-slate-100 rounded flex items-center justify-center p-0.5 bg-zinc-100 mx-auto overflow-hidden">
                          {product.imageUrl ? (
                             <img src={product.imageUrl} alt={product.name} className="max-w-full max-h-full block object-cover" />
                          ) : (
                             <span className="text-[10px] text-zinc-400 font-bold">Bicicleta</span>
                          )}
                        </div>
                      </td>
                      <td className="p-3 text-sm sm:text-base font-bold text-white align-middle">
                        <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                          {product.name}
                        </a>
                      </td>
                      <td className="p-3 text-sm text-zinc-400 text-center align-middle hidden sm:table-cell">
                        {product.category}
                      </td>
                      <td className="p-3 align-middle text-center">
                        <a 
                          href={product.affiliateUrl}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white text-[11px] sm:text-sm font-bold py-2 sm:py-2.5 px-3 sm:px-5 rounded transition-colors whitespace-nowrap"
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
          <h2>A marca GTS é confiável no mercado de bicicletas?</h2>
          <div className="my-8">
            <img src="/images/blog/1/gts_reliability.webp" alt="Oficina de bicicletas e peças confiáveis" className="w-full rounded-2xl shadow-xl border border-zinc-700 bg-white" />
          </div>
          <p>É normal ter um pé atrás.</p>
          <p>O mercado está cheio de bicicletas de supermercado que parecem naves espaciais, mas desmontam na primeira ladeira.</p>
          <p>A pegada da GTS é diferente. Eles não estão preocupados em fabricar bicicletas para atletas de elite nas Olimpíadas; o foco deles é o seu dia a dia, entregando o melhor custo-benefício possível.</p>
          <p>O maior trunfo da GTS é usar um padrão de peças que qualquer mecânico conhece.</p>
          <p>Isso significa que, se você precisar trocar uma pastilha de freio ou um cabo de marcha, vai encontrar a peça na oficina da sua rua por um preço justo.</p>
          <p>Escolher essa marca é comprar tranquilidade: você leva uma parceira robusta para o trabalho ou para o lazer, sem peças exclusivas que demoram meses para chegar de fora do país.</p>

          <h2>Por que a bicicleta GTS Pro M5 aro 29 chama tanta atenção?</h2>
          <div className="my-8">
            <img src={products.find(p => p.id === 'gts-pro-m5')?.imageUrl} alt={products.find(p => p.id === 'gts-pro-m5')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <p>O que faz essa bike sumir rápido das prateleiras é a receita sem invencionices: ela junta uma posição confortável de pedalar com peças que realmente funcionam.</p>
          <p>Muitas bikes baratinhas testam a paciência do dono porque desregulam a cada esquina. A M5 corta esse mal pela raiz e te entrega estabilidade.</p>
          <p>A grande estrela aqui é o famoso aro 29.</p>
          <p>Rodas maiores "engolem" os buracos e lombadas com muito mais facilidade, poupando a sua energia.</p>
          <p>Além disso, ela aguenta o tranco de ciclistas mais pesados (até uns 130 kg na sua capacidade máxima), sem te obrigar a pagar por tecnologias que você nunca vai usar no asfalto.</p>
          <p>É o básico muito bem feito.</p>
        </div>

        <AffiliateCard product={products.find(p => p.id === 'gts-pro-m5')!} />

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2"><Check className="w-5 h-5" /> Prós</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Roda aro 29 (passa por cima dos buracos com facilidade).</li>
              <li>Quadro de alumínio (não enferruja e é bem leve).</li>
              <li>Estrutura porradeira, aguentando até 130 kg de peso total.</li>
              <li>Manutenção barata e peças fáceis de achar.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2"><X className="w-5 h-5" /> Contras</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Ocupa um bom espaço em casa (não é dobrável).</li>
              <li>Você vai precisar de um mecânico para fazer a regulagem fina antes de usar.</li>
            </ul>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <h2>Principais características da bicicleta GTS Pro M5 aro 29</h2>
          <div className="my-8">
            <img src="/images/blog/1/gts_features.webp" alt="Componentes mecânicos da GTS Pro M5" className="w-full rounded-2xl shadow-xl border border-zinc-700 bg-white" />
          </div>
          <p>A engenharia da GTS Pro M5 foi pensada para facilitar a sua vida.</p>
          <p>Começando pelo esqueleto da magrela: o quadro em alumínio. Ele tira o peso excessivo das suas pernas nas subidas e dá a agilidade necessária para desviar de carros ou pedestres.</p>
          <p>Na frente, a suspensão faz o papel de um filtro, tirando aquela trepidação chata do paralelepípedo que formiga as mãos.</p>
          <p>As marchas foram escalonadas para te ajudar a não sofrer nas ladeiras, enquanto os freios garantem aquela parada segura quando o trânsito fecha de repente.</p>
          <p>É um pacote mecânico honesto, feito para transformar o seu trajeto cansativo num pedal macio e previsível.</p>

          <h2>Análise da Bicicleta GTS PRO M5 Track em uso real</h2>
          <p>Para saber se a bike é boa de verdade, tiramos ela do papel e fomos para a rua.</p>
          <p>Testamos a GTS Pro M5 no caos da ciclovia e em trechos leves de terra.</p>
          <p>O que a gente queria ver? Como as peças reagem depois que a bike esquenta.</p>
          <p>Abaixo eu te conto como cada parte se comportou debaixo do nosso sol e poeira.</p>

          <h3>Desempenho dos câmbios e transmissão</h3>
          <p>O sistema de marchas aqui cumpre o que promete para quem vive entre o asfalto plano e as ladeiras do bairro.</p>
          <p>As trocas são eficientes e evitam aquele tranco assustador que faz a corrente cair em bikes inferiores.</p>
          <p>Não espere a velocidade de um câmbio de competição, mas espere agilidade.</p>
          <p>O segredo para esse conjunto durar anos é ridículo de simples: mantenha a corrente limpa e lubrificada. Isso zera o desperdício de energia da sua perna e deixa a troca de marchas um silêncio só.</p>

          <h3>Leveza do quadro e manobrabilidade</h3>
          <p>Sabe aquela sensação de estar arrastando um trator? Com o quadro de alumínio da M5, você não sente isso.</p>
          <p>O centro de gravidade dela foi muito bem desenhado. Isso significa que a bike "obedece" rápido quando você precisa fazer uma curva fechada ou acelerar no farol verde.</p>
          <p>Essa leveza não tira a rigidez do quadro, deixando o controle da bicicleta super intuitivo.</p>
          <p>É o tipo de ergonomia que te dá total segurança no trânsito.</p>
        </div>

        <BunnerDoMeio />

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          {/* VÍDEO DO YOUTUBE */}
          <div className="my-12 aspect-video rounded-xl overflow-hidden shadow-lg border border-zinc-700 bg-zinc-900">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/dML6uojG-08" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
            </iframe>
          </div>

          <h3>Facilidade de montagem</h3>
          <p>A caixa chegou em casa, e agora? Relaxa.</p>
          <p>A GTS Pro M5 vem pré-montada de fábrica. O mais difícil já está no lugar (marchas, cabos e rodas traseiras).</p>
          <p>Você só vai precisar colocar o guidão, apertar os pedais, colocar o selim e encaixar a roda da frente.</p>
          <p>Se você tiver um kit básico de chaves, faz isso em 30 minutos.</p>
          <p>Mas, conselho de amigo mecânico: se não tiver confiança, leve na oficina da esquina para aquele "aperto final". Garantir que tudo está firme salva a vida útil da sua bike (e os seus dentes).</p>

          <h3>Adaptação do quadro a diferentes alturas</h3>
          <p>Pedalar torto é pedir para ter dor na lombar.</p>
          <p>A GTS acertou em cheio ao fabricar a M5 em vários tamanhos. Se você tem entre 1,65m e 1,80m, pode ir de olhos fechados no tamanho 17" — é o famoso "tamanho universal" que encaixa perfeitamente na maioria dos brasileiros.</p>
          <p>Mas se você é mais alto ou mais baixo, a marca oferece opções que vão do 15" ao 21".</p>
          <p>Comprar a numeração certa evita que você tenha que gastar dinheiro trocando peças para tentar "esticar" ou "encolher" a bicicleta.</p>


          <h2>Desvantagens e problemas da Bicicleta GTS PRO M5 Track</h2>
          <p>O freio a disco mecânico exige apertos e regulagens muito frequentes, perdendo eficiência rápido na chuva.</p>
          <p>Os pneus originais são básicos e não possuem proteção antifuro, o que vai te obrigar a comprar câmaras reservas se o trajeto tiver cacos de vidro.</p>
          <p>Além disso, o movimento central genérico e os pedais de plástico costumam apresentar estalos e quebrar nos primeiros meses de uso diário intenso.</p>

          <h2>Compromissos e limitações da Bicicleta GTS PRO M5 Track</h2>
          <div className="my-8">
            <img src="/images/blog/1/gts_limitations.webp" alt="Limitações da bicicleta em trilhas pesadas" className="w-full rounded-2xl shadow-xl border border-zinc-700 bg-white" />
          </div>
          <p>Essa bicicleta foi desenhada puramente para asfalto e estradões de terra nivelados.</p>
          <p>A suspensão não tem trava nem retorno hidráulico, então ela vai "bater seco" e machucar seu pulso se você pular obstáculos altos.</p>
          <p>Se você colocar ela em trilhas com pedras ou raízes, o câmbio vai desregular instantaneamente e a corrente vai cair sem parar.</p>
          <p>É uma bike de lazer urbano; force ela no mountain bike real e as peças vão literalmente quebrar em pouco tempo.</p>

          {/* Cross-Sell Carrossel */}
        <div className="my-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Acessórios Essenciais para sua Magrela</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {accessories.filter(i => ['capacete-absolute', 'cadeado-ulock', 'bomba-ar-portatil'].includes(i.id)).map((item) => (
              <a 
                key={item.id} 
                href={item.affiliateUrl}
                target="_blank" 
                rel="noopener noreferrer sponsored nofollow"
                className="block bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden hover:border-cyan-500 transition-colors group shadow-lg flex flex-col"
              >
                <div className="aspect-square bg-white flex items-center justify-center p-4">
                  <img src={item.imageUrl} alt={item.name} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-4 text-center flex flex-col items-center">
                  <h4 className="text-zinc-100 font-bold text-sm mb-3">{item.name}</h4>
                  <span className="block bg-cyan-600 group-hover:bg-cyan-500 text-white w-full py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-md">Ver Preço →</span>
                </div>
              </a>
            ))}
          </div>
        </div>

          <h2>Comparação rápida com outras bicicletas aro 29 populares</h2>
          <p>Se você está na dúvida, com certeza já esbarrou em modelos da Caloi, Oggi ou KSW nas suas pesquisas.</p>
          <p>Marcas como Oggi e Caloi entregam muita tecnologia esportiva, mas o preço vai nas alturas. A GTS foca no simples que funciona.</p>
          <p>Enquanto as grandonas às vezes usam padrões de peças que te obrigam a gastar caro na reposição, a GTS usa uma base super amigável, onde qualquer mecânico de bairro resolve seu problema com 50 reais e uma chave Philips.</p>
          
          <h3>GTS Pro M5 vs KSW</h3>
          <div className="my-8">
            <img src={products.find(p => p.id === 'ksw-xlt-100')?.imageUrl} alt={products.find(p => p.id === 'ksw-xlt-100')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <p>Esse é o clássico duelo de custo-benefício. A KSW (especialmente a XLT 100) geralmente traz câmbios Shimano Tourney de entrada, o que dá uma precisão muito boa nas marchas.</p>
          <p>A GTS, por outro lado, foca na força bruta do quadro, aguentando até 130 kg (enquanto a KSW costuma limitar perto dos 100 kg).</p>
          <p>Quer marchas de marca famosa pro dia a dia? A KSW pode te atrair. É um cara mais pesado ou quer um quadro mais parrudão para aguentar buraqueira? Vá de GTS sem medo.</p>
          <p>Ambas são ótimas.</p>
        </div>

        <AffiliateCard product={products.find(p => p.id === 'ksw-xlt-100')!} />

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2"><Check className="w-5 h-5" /> Prós</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>As duas entregam quadros leves de alumínio.</li>
              <li>Ambas aceitam upgrades fáceis (peças universais).</li>
              <li>Manutenção amigável nas duas opções.</li>
              <li>Melhor custo-benefício para quem está começando.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2"><X className="w-5 h-5" /> Contras</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Os freios mecânicos das duas exigem regulagem manual.</li>
              <li>Os pedais de plástico originais vão precisar de troca rápida.</li>
            </ul>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <h2>Opiniões de usuários sobre a Bicicleta GTS PRO M5 Track</h2>
          <p>A verdade nua e crua aparece depois do terceiro mês de uso, quando acaba o cheirinho de pneu novo.</p>
          <p>A galera que roda com a M5 elogia muito a robustez da estrutura nas ruas esburacadas.</p>
          <p>O feedback geral é que, se você fizer o "feijão com arroz" da lubrificação, a bike se torna um tratorzinho confiável para a rotina urbana.</p>

          <h2>Pra quem a bicicleta GTS Pro M5 aro 29 é indicada</h2>
          <p>Se o seu plano é perder alguns quilos, fugir do trânsito na ida pro trabalho, ou simplesmente sentir o vento no rosto no final de semana, essa é a sua magrela.</p>
          <p>Ela foi esculpida para o ciclista urbano e para aventuras leves na terra.</p>
          <p>Se você preza por não ter dor de cabeça com mecânica complicada, ela é um acerto em cheio. Agora, se o seu grupo de pedal vai descer montanhas íngremes ou pular rampas, fuja.</p>
          <p>Ela não aguenta esse tipo de pancada. Para lazer, asfalto e estradões tranquilos, ela é uma das melhores parceiras da atualidade.</p>
        </div>

        

        {/* FAQ */}
        <div className="my-16">
          <h2 className="text-3xl font-extrabold text-white mb-8 border-b border-zinc-800 pb-4">
            Perguntas Frequentes (FAQ)
          </h2>
          <div className="space-y-4 mb-12">
            <p className="text-zinc-300">Juntei aqui as perguntas que mais escuto no balcão de quem está com o dedo no gatilho para comprar a GTS Pro M5. Dá uma lida para tirar as pulgas atrás da orelha e fechar sua compra com total segurança.</p>
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
          
          <div className="my-8">
            <img src="/images/blog/1/gts_conclusion.webp" alt="GTS em um ambiente de uso indicado" className="w-full rounded-2xl shadow-xl border border-zinc-700 bg-white" />
          </div>
        </div>

        {/* SOBRE O AUTOR */}
        <div className="bg-cyan-950/20 p-8 rounded-2xl border border-cyan-900/50 shadow-sm mt-16 mb-16 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="shrink-0 mx-auto md:mx-0">
            <img src="/images/autores/Rafael Martins.webp" alt="Rafael Martins" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-cyan-900/50 hover:border-cyan-500 transition-colors shadow-xl" />
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


