import React, { useState } from 'react';
import BunnerDoMeio from './BunnerDoMeio';
import ExitIntentPopup from './ExitIntentPopup';
import { AuthorLucasAlmeida } from './AuthorLucasAlmeida';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const ArtigoQualOTamanhoDoQuadro: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [simulacao, setSimulacao] = useState<'cavalo' | 'tabelas' | 'decidir' | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Comprei o quadro errado. Posso só trocar a mesa do guidão e o canote do selim para resolver?",
      answer: [
        "Vou ser bem direto: não.",
        "Ao forçar a troca dessas peças em um chassi fundamentalmente incompatível, você até mascara a dor nas costas nas primeiras semanas, mas arruína a dirigibilidade.",
        "Você joga o centro de gravidade da bike todo para frente ou para trás, tornando a descida perigosa.",
        "O quadro é o osso da bicicleta; se a fundação está errada, os remendos não vão te salvar."
      ]
    },
    {
      question: "Por que o tamanho do quadro da bike afeta conforto e desempenho?",
      answer: [
        "Pedalar numa bike torta é como correr uma maratona com tênis três números menores.",
        "Fisicamente, o corpo tenta buscar estabilidade e, para isso, sobrecarrega a sua lombar, adormece as mãos nos punhos e esmaga as articulações do joelho.",
        "Você ganha dores que podem virar lesões articulares crônicas.",
        "Do lado do desempenho, a geometria errada anula a força que você faz.",
        "Um quadro desproporcional drena a potência da sua pedalada e deixa as manobras ariscas demais, ameaçando a sua segurança em descidas rápidas.",
        "A medida exata é a diferença entre passear flutuando no terreno e lutar contra o próprio equipamento."
      ]
    },
    {
      question: "Qual a diferença entre os quadros 19″ e 21″?",
      answer: [
        "A mudança radical aqui acontece na altura do tubo do selim e na distância para chegar ao guidão.",
        "O quadro 19\" (G) foi desenhado para ciclistas entre 1,75m e 1,85m.",
        "O 21\" (GG) é um gigante voltado para quem tem acima de 1,85m.",
        "Ignorar isso é pedir para não encostar os pés no chão no sinal vermelho ou pedalar totalmente encolhido."
      ]
    }
  ];

  return (
    <>
      <ExitIntentPopup />
      
      {/* Hero Section */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img fetchpriority="high" width="1200" height="800" src="/images/blog/1/tabela-medidas-quadro-bicicleta-aro-29-pt.webp" 
            alt="Qual o Tamanho do Quadro da Bicicleta Aro 29 Background" 
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Qual o Tamanho do Quadro da Bicicleta Aro 29? <br/>
            <span className="text-cyan-400">Tabela e Guia</span>
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-zinc-400">
            <a href="/author/lucas-almeida" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <div className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center border border-cyan-500/30 overflow-hidden">
                <img loading="lazy" width="800" height="600" src="/images/autores/Lucas Almeida.webp" alt="Lucas Almeida" className="w-full h-full object-cover" />
              </div>
              Por Lucas Almeida
            </a>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* INTRODUÇÃO */}
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <p>Sabe aquela dor nas costas terrível ou a fisgada no joelho depois de pedalar?</p>
          <p>Na maioria das vezes, a culpa não é do seu preparo físico ou da sua idade, mas sim de estar brigando contra uma bicicleta que não tem o seu tamanho.</p>
          <p>Olhando de fora, comprar qualquer aro 29 na vitrine parece resolver, mas pedalar um quadro com a geometria errada é a receita certa para rasgar dinheiro e transformar o passeio em um pesadelo ortopédico.</p>
          <p>Saber qual o tamanho do quadro da bicicleta aro 29 é o seu primeiro passo investigativo para não cair em armadilhas.</p>
          <p>Quando você entende as métricas do seu corpo, a bicicleta deixa de ser um pedaço de metal desconfortável e passa a trabalhar a seu favor.</p>
          <p>Você ganha controle imediato nas manobras rápidas, estabilidade nas curvas de terra e aquela sensação incrível de que a bike foi feita sob medida para você.</p>
        </div>

        {/* Simulador de Perfil */}
        <div className="bg-zinc-800/50 p-6 md:p-8 rounded-2xl border border-cyan-900/50 shadow-lg mb-12">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-cyan-500" />
            Qual a sua maior dificuldade ao escolher o tamanho da bike?
          </h3>
          <p className="text-zinc-300 mb-4">Selecione para ver a dica do mecânico:</p>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('cavalo')} />
              <span className="text-zinc-200">Medir o cavalo corretamente.</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('tabelas')} />
              <span className="text-zinc-200">Entender a tabela do fabricante.</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('decidir')} />
              <span className="text-zinc-200">Decidir entre dois tamanhos diferentes.</span>
            </label>
          </div>
          
          {simulacao === 'cavalo' && (
            <div className="mt-4 p-4 bg-emerald-950/30 border border-emerald-900/50 rounded-lg text-emerald-400 text-sm">
              <strong className="block mb-1">Análise:</strong> Medir o cavalo não tem erro: encoste um livro firme na virilha e meça até o chão descalço. Depois multiplique o valor por 0.22 para MTB!
            </div>
          )}
          {simulacao === 'tabelas' && (
            <div className="mt-4 p-4 bg-cyan-950/30 border border-cyan-900/50 rounded-lg text-cyan-400 text-sm">
              <strong className="block mb-1">Análise:</strong> Cada fabricante tem um molde. Nunca olhe só a letra (M, G). Cruze sempre a sua altura total em centímetros com as especificações de alcance (reach) e altura (stack).
            </div>
          )}
          {simulacao === 'decidir' && (
            <div className="mt-4 p-4 bg-purple-950/30 border border-purple-900/50 rounded-lg text-purple-400 text-sm">
              <strong className="block mb-1">Análise:</strong> A regra de ouro dos mecânicos: na dúvida entre dois tamanhos, vá sempre no menor! É muito mais seguro e ágil alongar um quadro menor do que tentar encolher um gigante.
            </div>
          )}
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/tabela-medidas-quadro-bicicleta-aro-29-pt.webp" alt="Infográfico completo em português com a tabela de medidas de quadro de bicicleta aro 29, explicando de forma visual como calcular o reach (alcance), stack (altura) e a postura ideal do ciclista para um melhor conforto e desempenho nas trilhas." className="w-full max-h-[500px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>

          <h2>Na hora de comprar uma bike observe o quadro de bike e os detalhes</h2>
          <p>Escolher uma bicicleta vai muito além de achar o grafismo da marca bonito ou se impressionar com a grossura dos pneus.</p>
          <p>O verdadeiro segredo, que dita se a bike é boa ou ruim para você, está na engenharia da geometria do quadro.</p>
          <p>Eu vejo muito ciclista encostando a bike novinha na garagem porque ignorou que o tamanho S, M ou L muda drasticamente de um fabricante para outro.</p>

          <h2>Quadros MTB (Mountain Bike)</h2>
          <p>Os quadros de Mountain Bike são verdadeiros tratores projetados para engolir buracos, suportar estradas de terra batida e domar trilhas repletas de raízes e erosões.</p>
          <p>Mas essa robustez se divide em duas categorias clássicas, e escolher errado aqui significa carregar peso morto.</p>
          <p>Basicamente, temos as Hardtails (focadas na explosão de velocidade) e as Full Suspension (focadas em passar por cima de tudo).</p>
          <p>Se você não quer investir em uma estrutura que vai limitar as suas aventuras ou exigir manutenções caríssimas que você não precisa, entender a vocação mecânica desses dois quadros é obrigatório antes de abrir a carteira.</p>

          <h3>Hardtails</h3>
          <p>A famosa Hardtail (rabo duro) elimina o sistema de molas na roda traseira.</p>
          <p>A grande vantagem?</p>
          <p>Ao remover o amortecedor traseiro, a bicicleta fica consideravelmente mais leve e toda a força da sua perna vai direto para a roda sem ser absorvida pelas molas.</p>
          <p>Ela é uma máquina ágil, ideal para acelerar forte em estradões e vencer subidas longas.</p>
          <p>A contrapartida é que a traseira rígida transfere a pancada dos buracos para o seu corpo, exigindo que você use as pernas como amortecedor nas descidas.</p>
          <p>É a escolha certeira para quem busca um equipamento incrivelmente responsivo e quer fugir dos altos custos de manutenção na oficina.</p>

          <h3>Full Suspension</h3>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/full-suspension-mtb-trilha-pedras.webp" alt="Bicicleta Mountain Bike Full Suspension encarando uma trilha cheia de pedras e obstáculos, destacando o amortecedor traseiro em ação." className="w-full max-h-[500px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>Se o seu roteiro inclui descidas técnicas, pedras soltas e valetas profundas, a Full Suspension muda o jogo.</p>
          <p>Esse quadro possui um amortecedor traseiro (shock) inteligente.</p>
          <p>Na prática, isso faz com que a roda traseira copie fielmente o desenho do chão.</p>
          <p>Qual o benefício real?</p>
          <p>Tração contínua.</p>
          <p>Enquanto a Hardtail pula e perde o contato com a terra, a Full Suspension mantém o pneu grudado no solo, garantindo que a bike não escorregue nas subidas agressivas e poupando a sua coluna de impactos violentos.</p>
          <p>É o investimento definitivo para quem preza por segurança e controle absoluto quando o terreno decide ficar brutal.</p>
        </div>

        <BunnerDoMeio />

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <h2>Dicas para você comprar o quadro adequado para você:</h2>
          <p>Para não se arrepender no primeiro mês, tire a emoção da jogada.</p>
          <p>Defina de forma fria onde você vai rodar a maior parte do tempo.</p>
          <p>Uma geometria super agressiva para trilhas vai ser terrível para você ir até o trabalho no asfalto.</p>
          <p>Esqueça o "olhômetro" e cruze suas medidas com as especificações da fábrica.</p>
          <p>Um conselho valioso: reserve parte do orçamento para os ajustes profissionais e exija a garantia do quadro.</p>
          <p>Uma marcha desregulada você arruma em cinco minutos com uma chave Allen, mas um chassi que te deixa torto vai arruinar as suas articulações.</p>

          <h3>Tabela de medidas dos Quadros</h3>
          <p>Tamanho de bicicleta não é padrão universal como tamanho de sapato.</p>
          <p>Eu passei horas medindo quadros na oficina e é chocante como o tamanho "M" de uma marca gringa muitas vezes equivale ao "G" de uma nacional.</p>
          <p>É por isso que cruzar a sua altura com a tabela de polegadas da fabricante é inegociável.</p>
          <p>Esses números são sua bússola investigativa.</p>
          <p>Use a tabela comparativa para cortar imediatamente da sua lista aqueles quadros que, por um erro de projeto em relação à sua altura, vão te causar fisgadas no joelho e dores crônicas na lombar.</p>

          <h3>Tabela de referência para Mountain Bikes</h3>
          <p>Para clarear a sua mente, o mercado padronizou as medidas em polegadas (15", 17", 19", 21") junto com o clássico P, M, G e GG.</p>
          <p>O pulo do gato é nunca olhar só para a letra, mas usar a sua altura total em centímetros como o filtro principal.</p>
          <p>Lembre-se: essas tabelas são apenas a sua linha de partida.</p>
          <p>Uma marca pode fabricar um quadro "M" ligeiramente mais longo, ideal para quem tem o tronco mais comprido, por exemplo.</p>
          <p>Use essa referência para fugir dos absurdos (como alguém de 1,60m tentando pedalar um quadro 21") e focar a busca na faixa que vai te entregar uma ergonomia perfeita.</p>

          <div className="overflow-x-auto my-8 rounded-xl border border-zinc-700 shadow-xl">
            <table className="w-full text-left border-collapse m-0">
              <thead>
                <tr className="bg-zinc-800 text-cyan-400">
                  <th className="p-4 border-b border-zinc-700 font-bold whitespace-nowrap">Altura do Ciclista</th>
                  <th className="p-4 border-b border-l border-zinc-700 font-bold whitespace-nowrap">Quadro (Polegadas)</th>
                  <th className="p-4 border-b border-l border-zinc-700 font-bold whitespace-nowrap">Tamanho Padrão</th>
                </tr>
              </thead>
              <tbody className="text-zinc-300">
                <tr className="bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors">
                  <td className="p-4 border-b border-zinc-700">1,50m a 1,60m</td>
                  <td className="p-4 border-b border-l border-zinc-700">13" a 15"</td>
                  <td className="p-4 border-b border-l border-zinc-700">PP / S</td>
                </tr>
                <tr className="bg-zinc-900 hover:bg-zinc-800/50 transition-colors">
                  <td className="p-4 border-b border-zinc-700">1,60m a 1,70m</td>
                  <td className="p-4 border-b border-l border-zinc-700">15" a 17"</td>
                  <td className="p-4 border-b border-l border-zinc-700">P / M</td>
                </tr>
                <tr className="bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors">
                  <td className="p-4 border-b border-zinc-700">1,70m a 1,80m</td>
                  <td className="p-4 border-b border-l border-zinc-700">17" a 19"</td>
                  <td className="p-4 border-b border-l border-zinc-700">M / G</td>
                </tr>
                <tr className="bg-zinc-900 hover:bg-zinc-800/50 transition-colors">
                  <td className="p-4 border-b border-zinc-700">1,80m a 1,90m</td>
                  <td className="p-4 border-b border-l border-zinc-700">19" a 21"</td>
                  <td className="p-4 border-b border-l border-zinc-700">G / GG</td>
                </tr>
                <tr className="bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors">
                  <td className="p-4">Acima de 1,90m</td>
                  <td className="p-4 border-l border-zinc-700">21" ou maior</td>
                  <td className="p-4 border-l border-zinc-700">GG / XL</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Passo 1: Entenda a relação entre o seu corpo e a geometria da bike</h3>
          <p>Os tubos da bicicleta não são montados ao acaso; eles criam um esqueleto projetado para distribuir o seu peso.</p>
          <p>Sempre observe as medidas de reach (alcance) e stack (altura) na ficha técnica do fabricante.</p>
          <p>Se o quadro te joga muito para frente e para baixo, seu peso massacra as palmas das mãos e trava o pescoço.</p>
          <p>A grande virada de chave no ciclismo acontece quando você para de tentar adaptar o seu corpo à máquina e escolhe a estrutura que respeita a sua anatomia.</p>
          <p>Quando o alinhamento é perfeito, você não gasta energia tentando se equilibrar.</p>
          <p>Toda a sua força vai diretamente para o movimento dos pedais.</p>

          <h3>Passo 2: meça sua altura e a altura do cavalo corretamente</h3>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/como-medir-o-cavalo-bike-pt.webp" alt="Ilustração instrutiva em português mostrando como medir o cavalo para ajuste da bicicleta, utilizando um livro entre as pernas e uma fita métrica até o chão." className="w-full max-h-[500px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>Chega de chutar a própria altura.</p>
          <p>Quer precisão cirúrgica?</p>
          <p>Fique descalço contra a parede, coluna reta e meça a altura exata.</p>
          <p>Agora, o detalhe crucial que vai salvar o seu joelho: a medida do "cavalo" (o comprimento das suas pernas).</p>
          <p>Afaste levemente as pernas.</p>
          <p>Pegue um livro duro e encoste firmemente na virilha, puxando-o levemente para cima para simular a pressão que o selim faz quando você está sentado.</p>
          <p>Meça do topo desse livro até o chão.</p>
          <p>Sem a precisão desse número, você vai entrar na loja apostando no escuro, arriscando comprar uma bicicleta que, estruturalmente, odeia o seu corpo.</p>

          <h3>Passo 3: aplique as fórmulas para calcular o tamanho ideal</h3>
          <p>Com o número do seu "cavalo" em mãos, vamos usar a matemática a favor.</p>
          <p>Para Mountain Bikes, a fórmula mágica é pegar a altura do cavalo em centímetros e multiplicar por 0,22.</p>
          <p>O número que aparecer é o tamanho do seu quadro em polegadas.</p>
          <p>Exemplo rápido: se a medida deu 80 cm, a conta é 80 x 0,22 = 17,6".</p>
          <p>Ou seja, o seu quadro ideal é o 17" ou, no limite, o 18".</p>
          <p>Se fosse uma bicicleta fininha de asfalto (Speed), você multiplicaria por 0,65.</p>
          <p>Use essa fórmula para não deixar nenhum vendedor te empurrar um quadro tamanho 19" encalhado no estoque só porque "tá na promoção".</p>

          <h3>Passo 4: ajuste fino com selim e guidão</h3>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/ajuste-altura-selim-bicicleta.webp" alt="Detalhe da perna de um ciclista pedalando, mostrando o ângulo correto de flexão do joelho quando o pedal está na posição mais baixa, indicando o ajuste ideal da altura do selim." className="w-full max-h-[500px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>Comprar o chassi do tamanho certo é resolver o grosso do problema, mas o conforto verdadeiro mora nos periféricos.</p>
          <p>Um quadro impecável não serve de nada se o banco estiver muito baixo, esmagando a sua cartilagem do joelho a cada pedalada.</p>
          <p>A altura ideal do banco deve deixar sua perna levemente flexionada no ponto mais baixo do giro.</p>
          <p>Avance ou recue o banco nos trilhos e observe a altura do guidão.</p>
          <p>São esses micro-ajustes milimétricos que eliminam aquelas dores crônicas misteriosas no final da trilha, transformando uma simples bicicleta na extensão natural das suas pernas.</p>

          <h2>Dicas finais para acertar na escolha do tamanho do quadro</h2>
          <p>Fez todas as contas e descobriu que o seu tamanho ideal caiu exatamente no meio de dois quadros (por exemplo, entre o 17" e o 19")?</p>
          <p>O que fazer para não rasgar dinheiro?</p>
          <p>A recomendação absoluta na mecânica é: escolha o quadro menor.</p>
          <p>O quadro ligeiramente menor te entrega um controle absurdo.</p>
          <p>Você consegue manobrar mais rápido em trilhas fechadas e domar a bike no trânsito urbano com facilidade.</p>
          <p>Além disso, se a bike ficar curta, é simples alongar a sua postura comprando uma mesa de guidão um pouco mais longa ou recuando o banco.</p>
          <p>Tentar fazer o inverso — "encolher" um quadro gigante que você não alcança — é perigoso e ineficaz.</p>
          <p>Nunca confie só no seu faro; exija ver a tabela da marca e considere pagar um bike fit profissional se as dores insistirem.</p>
          
          <div className="mt-12 p-6 bg-cyan-950/20 border border-cyan-900/50 rounded-2xl shadow-sm not-prose">
            <h3 className="text-xl font-bold text-white mb-2">Agora que você já sabe o seu tamanho ideal...</h3>
            <p className="text-zinc-300">
              Que tal escolher a sua próxima magrela? Preparamos um guia completo com as <a href="/melhores-bicicletas-aro-29" className="text-cyan-400 hover:text-cyan-300 font-bold underline underline-offset-4 decoration-cyan-500/30 hover:decoration-cyan-400 transition-all">Melhores Bicicletas Aro 29</a> do mercado, analisando o verdadeiro custo-benefício de cada modelo para você não rasgar dinheiro.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="my-16">
          <h2 className="text-3xl font-extrabold text-white mb-8 border-b border-zinc-800 pb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-zinc-300 mb-8 text-lg">É perfeitamente normal a cabeça ferver de dúvidas na hora de investir o seu suado dinheiro. Para garantir que você saia com a melhor configuração, vamos derrubar alguns mitos perigosos que escuto todo dia:</p>
          
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
                  <span className="font-bold text-zinc-100 pr-8">🔽 {faq.question}</span>
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
        <AuthorLucasAlmeida />

      </article>
    </>
  );
};
