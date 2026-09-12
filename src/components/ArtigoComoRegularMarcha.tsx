import React, { useState } from 'react';
import BunnerDoMeio from './BunnerDoMeio';
import ExitIntentPopup from './ExitIntentPopup';
import { AuthorRafaelMartins } from './AuthorRafaelMartins';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const ArtigoComoRegularMarcha: React.FC = () => {
  const [simulacao, setSimulacao] = useState<'sim' | 'nao' | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Como usar marcha de bicicleta?",
      answer: [
        "Trocar de marcha é mais sobre timing e audição do que sobre força bruta.",
        "A regra é parecida com dirigir um carro manual: você não espera o motor quase morrer para reduzir a marcha na subida.",
        "Na bike, se você identificou o morro chegando, jogue uma marcha mais leve antes da perna começar a queimar e perder velocidade.",
        "O maior erro que vejo a galera cometer é o famoso \"cruzamento de marcha\" (usar a coroa gigante na frente e a engrenagem gigante atrás ao mesmo tempo).",
        "Isso deixa a corrente esticada na diagonal.",
        "Além de fazer um barulho terrível, você mói os componentes em semanas.",
        "Mantenha a conta lógica e preserve seu equipamento: use a marcha pesada na frente apenas com as marchas pesadas de trás.",
        "Com o tempo, o feeling das trocas fica instintivo."
      ]
    },
    {
      question: "Como saber a quantidade ideal de marchas da bicicleta?",
      answer: [
        "Muitos iniciantes caem no conto de que \"quanto mais marchas a bicicleta tem, melhor ela é\".",
        "Isso é lenda.",
        "A quantidade ideal de velocidades depende 100% de onde você vai enfiar essa bicicleta e do seu preparo físico.",
        "Se você roda muito em asfalto plano e ciclovias, sistemas mais simples de 9 ou 10 marchas totais (com apenas uma coroa na frente) cortam a manutenção pela metade e tiram um peso inútil da bike.",
        "Já se o seu roteiro inclui trilhas pesadas e paredões de terra, você vai precisar de um cassete grande com boa amplitude para salvar o seu joelho.",
        "Para saber o que você tem nas mãos hoje, basta multiplicar o número de coroas da frente pelo número de pinhões de trás.",
        "Alinhe a mecânica com a sua realidade e pare de se preocupar apenas com números grandes na vitrine."
      ]
    }
  ];

  return (
    <>
      <ExitIntentPopup />
      
      {/* Hero Section */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img fetchpriority="high" width="1200" height="800" src="/images/blog/1/como-regular-marcha-de-bicicleta-aro-29.webp" 
            alt="Como Regular Marcha de Bicicleta Aro 29 Background" 
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Como Regular Marcha de Bicicleta Aro 29 <br/>
            <span className="text-cyan-400">Guia Passo a Passo</span>
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-zinc-400">
            <a href="/author/rafael-martins" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <div className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center border border-cyan-500/30 overflow-hidden">
                <img loading="lazy" width="800" height="600" src="/images/autores/Rafael Martins.webp" alt="Rafael Martins" className="w-full h-full object-cover" />
              </div>
              Por Rafael Martins
            </a>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* INTRODUÇÃO */}
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <p>Sabe aquela sensação de tentar trocar a marcha numa subida e só ouvir aquele ruído metálico horrível, seguido de um tranco da corrente escapando?</p>
          <p>O susto de um câmbio desregulado no meio da ladeira não é só irritante, mas perigoso.</p>
          <p>O desempenho e a maciez do seu passeio dependem 100% da precisão das peças de transmissão.</p>
          <p>Quando o sistema perde a sincronia, você faz o dobro de força à toa e a diversão vai pelo ralo.</p>
          <p>Entender como regular marcha de bicicleta aro 29 é o passo definitivo para você parar de "rasgar dinheiro" com visitas constantes à oficina e assumir o controle da sua magrela.</p>
          <p>Vou te mostrar o que aplico diariamente para afinar essas máquinas.</p>
        </div>

        {/* Simulador de Perfil */}
        <div className="bg-zinc-800/50 p-6 md:p-8 rounded-2xl border border-cyan-900/50 shadow-lg mb-12">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-cyan-500" />
            Você mesmo costuma regular as marchas da sua bicicleta?
          </h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('sim')} />
              <span className="text-zinc-200">Sim, eu mesmo ajusto</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('nao')} />
              <span className="text-zinc-200">Não, levo na oficina</span>
            </label>
          </div>
          
          {simulacao === 'sim' && (
            <div className="mt-4 p-4 bg-emerald-950/30 border border-emerald-900/50 rounded-lg text-emerald-400 text-sm">
              <strong className="block mb-1">Análise:</strong> Excelente! Esse guia vai refinar ainda mais a sua técnica, revelando alguns macetes avançados de alinhamento que os mecânicos profissionais usam no dia a dia.
            </div>
          )}
          {simulacao === 'nao' && (
            <div className="mt-4 p-4 bg-cyan-950/30 border border-cyan-900/50 rounded-lg text-cyan-400 text-sm">
              <strong className="block mb-1">Análise:</strong> Não se preocupe. Você está prestes a economizar um bom dinheiro e ganhar autonomia. O passo a passo a seguir foi feito exatamente para quem quer começar do zero sem medo de errar.
            </div>
          )}
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <h2>Como funciona o câmbio de marcha da bicicleta</h2>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/como-funciona-o-cambio-da-bicicleta.webp" title="Como funciona o câmbio da bicicleta" alt="Detalhe do passador de marcha no guidão e o cabo de aço do câmbio" className="w-full max-h-[500px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>Entender o que rola por trás do cabo de aço é o pulo do gato para dominar sua aro 29.</p>
          <p>Pense no sistema como uma balança de alavancas e cabos que empurram a corrente.</p>
          <p>O passador direito é o cérebro do câmbio traseiro, que dita o seu ritmo e a cadência de giro no estradão.</p>
          <p>Já o lado esquerdo manda nas coroas da frente, definindo se você vai subir uma ladeira pesada ou voar numa reta asfaltada.</p>
          <p>Quando você clica no manete, o cabo estica e puxa o corpo do câmbio, jogando a corrente exatemente para a engrenagem certa.</p>
          <p>Dominar a lógica disso é o que transforma aquele tranco assustador em uma troca de marcha que entra igual faca na manteiga.</p>

          <h2>Por que ajustar o câmbio da bicicleta?</h2>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/por-que-ajustar-o-cambio-da-bicicleta.webp" title="Por que ajustar o câmbio da bicicleta" alt="Detalhe de um câmbio de bicicleta desregulado causando desgaste na corrente" className="w-full max-h-[500px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>Pedalar com a marcha chiando é um convite rápido para destruir peças caras.</p>
          <p>Quando o sistema está desregulado, a corrente raspa torta nas engrenagens.</p>
          <p>O que isso muda no seu pedal?</p>
          <p>Significa que você está literalmente lixando os dentes do seu cassete precocemente, diminuindo muito a vida útil de toda a relação da bike.</p>
          <p>Mas o perigo maior é estrutural e mora no limite do câmbio.</p>
          <p>Uma desregulagem severa pode fazer a corrente pular a última engrenagem, enroscar nos raios da roda traseira e travar tudo de uma vez.</p>
          <p>É tombo na certa, com risco de quebrar a gancheira do quadro.</p>
          <p>Se a marcha demora para entrar ou você tem que empurrar o manete com força dobrada, sua bike está pedindo socorro.</p>
          <p>Manter essa regulagem em dia blinda seu equipamento e garante uma pedalada segura e responsiva.</p>

          <BunnerDoMeio />

          <h2>Quais os sinais para regular o câmbio?</h2>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/sinais-para-regular-o-cambio.webp" title="Sinais para regular o câmbio" alt="Corrente de bicicleta pulando marcha no cassete traseiro por falta de regulagem" className="w-full max-h-[500px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>A sua bicicleta "conversa" o tempo todo com você.</p>
          <p>Aquele "tec-tec" constante vindo da roda traseira não é normal, é um aviso.</p>
          <p>Se você nota que a corrente ameaça pular para a próxima marcha sozinha, estala quando você faz força na subida, ou demora mais de um segundo para engatar depois do clique, o sistema perdeu a calibração.</p>
          <p>Outro sinal gritante é a alavanca de marcha que fica "boba" (solta demais) ou dura a ponto de exigir muito do polegar.</p>
          <p>Passei anos ouvindo ciclistas ignorarem esses pequenos sintomas iniciais para, meses depois, terem que <a href="/melhor-relacao-para-bike-29" className="text-cyan-400 hover:underline">trocar toda a relação</a>.</p>
          <p>Identificar esses estalos no comecinho salva o seu bolso e transforma o pedal.</p>

          <h2>Ferramentas e Preparação</h2>
          <p>Antes de sair girando parafusos aleatoriamente, arrume a casa.</p>
          <p>Para fazer um ajuste limpo e preciso, a roda traseira da bike precisa girar solta no ar.</p>
          <p>Um cavalete de oficina é o ideal, mas se você não tiver, apoie a bicicleta de ponta-cabeça (cuidando com os manetes) ou pendure a traseira num gancho.</p>
          <p>Você não precisa de uma oficina inteira.</p>
          <p>Separe: uma chave Phillips fina (para os minúsculos parafusos limitadores H e L), um kit básico de chaves Allen e um alicate de bico para puxar o cabo de aço.</p>
          <p>Compreender o que cada ferramenta faz nos parafusos de limite evita que você espanque as peças.</p>
          <p>Com esse arsenal básico em mãos, você deixa o "achismo" de lado e assume a precisão.</p>

          <h2>Como regular marcha de bicicleta: passo a passo</h2>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/ferramentas-para-regular-marcha-de-bicicleta.webp" title="Ferramentas para regular marcha de bicicleta" alt="Kit de ferramentas básicas para regulagem de câmbio de bicicleta" className="w-full max-h-[500px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>Chegou a hora de sujar a ponta dos dedos de graxa e devolver o silêncio para a sua bike.</p>
          <p>Regular o câmbio é um jogo de paciência.</p>
          <p>O grande erro dos iniciantes é girar os parafusos dando voltas inteiras.</p>
          <p>O segredo é a sutileza: faça ajustes de um quarto de volta por vez.</p>
          <p>Esqueça a pressa.</p>
          <p>Este roteiro foi montado para acabar com o "crec-crec" das suas marchas de uma vez por todas.</p>
          <p>Vamos deixar o sistema cirúrgico.</p>

          <h2>Regulagem da Marcha Traseira</h2>
          <p>O câmbio de trás é o operário padrão da sua bicicleta.</p>
          <p>É ele que transforma toda a força da sua perna em deslocamento real na roda.</p>
          <p>Quando ele falha, sua energia se perde em trancos e saltos.</p>
          <p>Entenda agora como reativar a sincronia dessa peça para não sofrer nas ladeiras.</p>

          <h3>Cambio Traseiro</h3>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/parafusos-h-e-l-cambio.webp" title="Parafusos de limite H e L do câmbio traseiro" alt="Detalhe dos parafusos H e L no corpo do câmbio de bicicleta" className="w-full max-h-[500px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>Esse bloco de metal articulado é quem traduz o clique do guidão em movimento da corrente.</p>
          <p>Olhando de perto, você vai encontrar dois pequenos parafusos com as letras "H" (High - engrenagens pesadas) e "L" (Low - engrenagens leves).</p>
          <p>Descobri que muita gente acha que eles servem para esticar a corrente, mas na verdade eles são as "paredes de segurança" da bike.</p>
          <p>Eles determinam o ponto máximo que o câmbio pode ir para fora ou para dentro, impedindo que a corrente caia do cassete.</p>
          <p>Dominar o limite H e L é a diferença abissal entre uma bike que troca de marcha com um estalo seco e limpo, daquela que joga a corrente no meio dos raios na descida.</p>
          <p>O foco aqui é o alinhamento visual perfeito.</p>

          <h3>1. Posicionar a alavanca no menor pinhão (marcha 8)</h3>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/menor-pinhao-marcha-8.webp" title="Corrente posicionada no menor pinhão do cassete" alt="Corrente de bicicleta perfeitamente assentada na menor engrenagem" className="w-full max-h-[500px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>O ponto de partida absoluto é "zerar" o sistema.</p>
          <p>Gire o pedal com a mão e clique o passador até a corrente descer para o menor pinhão (a marcha mais dura e pesada da sua catraca).</p>
          <p>Isso alivia 100% a tensão e diz ao câmbio qual é o degrau número um.</p>
          <p>Nesta posição, verifique com os dedos se o cabo de aço está esticado ou pendurado, frouxo.</p>
          <p>Se estiver completamente solto, o câmbio perde o "faro" da tração e vai ter um atraso irritante quando você mandar ele subir a marcha.</p>
          <p>Construir esse posicionamento inicial firme é obrigatório; qualquer ajuste que você tentar fazer depois disso será tempo perdido se a corrente não estiver perfeitamente assentada no menor dente primeiro.</p>

          <h3>2. Ajuste do alinhamento do câmbio traseiro</h3>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/alinhamento-do-cambio-traseiro.webp" title="Alinhamento perfeito do câmbio traseiro" alt="Visão traseira do câmbio perfeitamente alinhado com a engrenagem menor do cassete" className="w-full max-h-[500px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>Com a corrente lá embaixo no menor pinhão, agache na parte de trás da roda e olhe diretamente para a roldana do câmbio (aquela engrenagem de plástico guia).</p>
          <p>Ela e o menor pinhão precisam desenhar uma linha vertical imaginária, perfeitamente reta.</p>
          <p>Se a roldana estiver um pouquinho mais para a esquerda, forçando a corrente a querer subir um degrau, pegue a chave Phillips.</p>
          <p>Vá no parafuso "H" e dê um toquinho muito leve para afastar ou aproximar a roldana até ela casar milimetricamente embaixo do pinhão.</p>
          <p>Assim que o alinhamento ficar perfeito, o barulho de atrito some.</p>
          <p>Esse é o momento "zen" do ajuste mecânico que zera o desgaste prematuro da sua relação.</p>

          <h3>3. Fixar o cabo e tensionar</h3>
          <p>Agora que a engrenagem pequena está perfeitamente alinhada, precisamos ancorar o comando.</p>
          <p>Solte levemente o parafuso Allen que trava o cabo de aço no câmbio.</p>
          <p>Pegue o alicate de bico, puxe o cabo para esticar e eliminar toda a folga "morta", mas não precisa puxar com força suficiente para mover o braço do câmbio do lugar.</p>
          <p>Segure o cabo firme e reaperte o parafuso Allen.</p>
          <p>Fazer essa fixação esticadinha garante que, lá no guidão, o mínimo clique no gatilho seja transmitido instantaneamente para o câmbio, matando aquele "vazio" na alavanca que tanto incomoda quando tentamos embalar rápido na reta.</p>

          <h3>4. Ajuste dos parafusos de limite para a marcha máxima</h3>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/parafusos-limitadores-cambio-traseiro.webp" title="Ajuste dos parafusos de limite H e L" alt="Chave ajustando os parafusos limitadores do câmbio traseiro" className="w-full max-h-[500px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>A função do parafuso "H" já regulou o alinhamento, e ele serve exatamente como seu limite de velocidade máxima.</p>
          <p>Gire a roda e teste a passagem de marcha caindo para o menor pinhão.</p>
          <p>Se a corrente despencar com violência e passar do limite, caindo entre o quadro da bike e a catraca, você precisa apertar o parafuso "H" no sentido horário, um pouquinho por vez.</p>
          <p>Esse limite físico que o parafuso cria diz ao câmbio: "daqui você não passa".</p>
          <p>Ajustá-lo te dá a confiança para despejar todas as marchas para baixo em um sprint, com a certeza de que a corrente jamais vai saltar para fora do sistema.</p>

          <BunnerDoMeio />

          <h3>5. Ajuste dos parafusos de limite para a marcha mínima</h3>
          <p>Se o limite máximo te salva de arranhar a pintura, o limite mínimo (parafuso "L") salva sua vida (literalmente).</p>
          <p>Vá subindo as marchas enquanto gira a roda até a corrente chegar na engrenagem gigante perto dos raios.</p>
          <p>Olhe por trás: a roldana do câmbio tem que estar travada alinhada sob essa engrenagem.</p>
          <p>Se o câmbio ameaçar forçar a corrente para os raios da roda, gire o parafuso "L" até criar uma parede física para ele.</p>
          <p>Um erro aqui na subida faz o câmbio entrar na roda girando, quebrando tudo pela frente e travando o pneu.</p>
          <p>Aperte o parafuso com atenção redobrada; esse é o ajuste de segurança mais importante da bike.</p>

          <h3>Tensão do Cabo</h3>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/ajuste-da-tensao-do-cabo-do-cambio-traseiro.webp" title="Ajuste da tensão do cabo do câmbio traseiro" alt="Mão girando o regulador de tensão do cabo da marcha" className="w-full max-h-[500px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>Se os parafusos seguram os limites, a tensão do cabo é a alma da troca suave.</p>
          <p>Se a corrente hesita e estrala muito para conseguir subir para pinhões maiores, o sistema está "frouxo" demais para puxar o peso.</p>
          <p>O inverso também é verdade: se sobe bem, mas demora para descer, está tão tensionado que não deixa a mola do câmbio relaxar.</p>
          <p>É aqui que entra o "regulador de tensão" — aquela pecinha preta com rosca, parecida com um tambor pequeno, onde o conduíte entra no câmbio ou no guidão.</p>
          <p>É um ajuste que se faz nos dedos, sem ferramentas.</p>
          <p>Ao girar para a esquerda (desrosquear), você estica o cabo; girando para a direita (rosquear), você afrouxa.</p>
          <p>Entender isso é revolucionário.</p>

          <h3>6. Ajuste fino da tensão do cabo</h3>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/ajuste-fino-da-tensao-do-cabo-da-bicicleta.webp" title="Ajuste fino da tensão do cabo da bicicleta" alt="Visão próxima do ajuste fino de tensão no cabo do câmbio traseiro" className="w-full max-h-[500px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>Vamos aplicar o ajuste fino do regulador para deixar o câmbio parecendo relógio suíço.</p>
          <p>Suba uma marcha por vez.</p>
          <p>A corrente chorou para subir?</p>
          <p>Desrosqueie o tambor de tensão no sentido anti-horário em pequenos "cliques", um por vez.</p>
          <p>Se durante o teste a corrente tiver pressa exagerada para subir e enroscar para voltar às menores, o cabo gritou de tensão.</p>
          <p>Gire o tamborzinho no sentido horário para relaxar a puxada.</p>
          <p>Vá testando engrenagem por engrenagem.</p>
          <p>Esse pente fino requer que você ouça a bicicleta.</p>
          <p>Quando você encontrar o equilíbrio onde subir e descer faz apenas um "tec" sequinho e rápido, você chegou ao ajuste perfeito.</p>

          <h3>7. Verificação da peça de segurança do câmbio</h3>
          <p>Por último na traseira, não adianta nada regular tensão e limites se o chassi do problema estiver torto.</p>
          <p>Dê uma bela olhada na "gancheira" — aquela peça de metal removível que prende o câmbio ao quadro.</p>
          <p>Ela é desenhada para entortar e quebrar antes de condenar o quadro da sua bike numa queda.</p>
          <p>Se você olhar por trás e ver que o câmbio inteiro está num ângulo "dobrado" apontando para a roda, não mexa em nenhum parafuso de marcha.</p>
          <p>O alinhamento foi perdido.</p>
          <p>Tentar regular marcha com gancheira torta é lutar contra a gravidade.</p>
          <p>Se estiver visivelmente empenada, recomendo fortemente levar à oficina para usar a ferramenta específica de gabarito e realinhar a estrutura.</p>

          <h2>Regulagem da Marcha Dianteira</h2>
          <p>Enquanto o traseiro gerencia o terreno, o câmbio dianteiro toma as pancadas de força bruta na pedalada pesada.</p>
          <p>A maioria só lembra dele quando a corrente cai, mas equilibrar a transmissão da frente garante agilidade quando você mais precisa embalar.</p>
          <p>Vamos alinhar esse cara para o morro não te pegar de surpresa.</p>

          <h3>Câmbio Dianteiro</h3>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/regulagem-do-cambio-dianteiro-da-bicicleta.webp" title="Regulagem do câmbio dianteiro da bicicleta" alt="Alinhamento do cage do câmbio dianteiro com a coroa da bicicleta" className="w-full max-h-[500px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>O câmbio da frente costuma ser o patinho feio da manutenção, sendo deixado de lado.</p>
          <p>A diferença aqui é que ele empurra a corrente sob uma tensão cavalar vinda diretamente do seu pé no pedal.</p>
          <p>Se estiver fora do lugar, é atrito puro corroendo o metal das coroas.</p>
          <p>O segredo aqui é o posicionamento do cage (aquela "gaiola" de metal por onde a corrente flui).</p>
          <p>Ele precisa acompanhar milimetricamente o desenho redondo das engrenagens.</p>
          <p>Um cage mal posicionado faz sua marcha roçar fazendo barulho constante ou pior: arremessa a corrente para fora num sprint agressivo.</p>
          <p>Quando você acerta essa geometria e liberta o espaço de passagem, seu conjunto frontal trabalha sem resistência, blindando suas subidas.</p>

          <h3>1. Posicionar a corrente na coroa maior (maior marcha dianteira)</h3>
          <p>O roteiro do câmbio dianteiro começa pelo lado mais forte.</p>
          <p>Pressione o trocador da mão esquerda e force a corrente até ela subir na maior coroa perto do seu pé.</p>
          <p>Com a marcha mais pesada na frente ativada, você estica o mecanismo no ponto de maior tensão do cabo.</p>
          <p>É aqui que os problemas de alinhamento aparecem.</p>
          <p>Observe se a corrente está fluindo livre dentro do cage metálico.</p>
          <p>Se as paredes do câmbio já estiverem esmagando a corrente antes mesmo de pedalar forte, as trocas sob carga na rua vão ser pesadas para os dedos e ruidosas.</p>
          <p>Fixar esse padrão na marcha mais alta te dá o campo de visão perfeito para alinhar o sistema sem raspar em nada.</p>

          <h3>2. Ajuste da altura e alinhamento do câmbio dianteiro</h3>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/ajuste-de-altura-do-cambio-dianteiro.webp" title="Ajuste de altura do câmbio dianteiro" alt="Detalhe do espaçamento entre o câmbio dianteiro e a coroa maior" className="w-full max-h-[500px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>O erro que mais vejo as pessoas cometerem é fixar o câmbio numa altura absurda.</p>
          <p>A base curva do cage de metal deve passar muito raspando sobre os dentes da coroa maior — estamos falando de apenas 2 a 3 milímetros (a espessura de uma moeda empilhada).</p>
          <p>Alto demais, a corrente escorrega e não sobe; baixo demais, o metal colide de frente com os dentes da engrenagem.</p>
          <p>Além da altura correta, olhe de cima: a lateral do câmbio deve formar uma linha reta 100% paralelamente com a coroa maior.</p>
          <p>Um câmbio torto (apontando a ponta para fora ou para dentro) é a principal causa do atrito chato nas viagens longas.</p>
          <p>Ajuste isso afrouxando a abraçadeira no quadro com muito cuidado.</p>

          <h3>3. Alinhamento lateral do câmbio dianteiro</h3>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/alinhamento-lateral-do-cambio-dianteiro.webp" title="Alinhamento lateral do câmbio dianteiro" alt="Visão superior do alinhamento paralelo do câmbio dianteiro" className="w-full max-h-[500px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>Com a altura perfeita, chegou a hora de cuidar da proximidade lateral para a marcha não fazer chiado.</p>
          <p>Observando por cima do pé de vela, o metal do câmbio precisa abraçar a corrente sem encostar.</p>
          <p>Qualquer inclinação fora do eixo faz o metal lixar o seu equipamento.</p>
          <p>Usamos de novo os famosos parafusos limitadores H (para a coroa maior) e L (para a coroa menor).</p>
          <p>O objetivo do ajuste do limite é deixar que a corrente rode livremente dentro do cage com apenas um fio de cabelo de sobra, sem nunca roçar as laterais de metal nas extremidades.</p>
          <p>Esse balanço protege o quadro da bike e deixa a corrente subir rápido e suave.</p>

          <h3>4. Passagem e fixação do cabo</h3>
          <p>Com a geometria frontal finalizada, reduza a marcha de volta para a coroa menor, liberando o mecanismo.</p>
          <p>Passe o cabo de aço pelo caminho correto até o parafuso de fixação.</p>
          <p>Cuidado para não deixar o cabo "morder" de forma torta na ruela de aperto.</p>
          <p>Puxe com o alicate de bico, deixando-o esticado o suficiente para responder rápido, mas sem forçar o braço do câmbio fora da posição de repouso antes do aperto.</p>
          <p>Trave com a chave Allen.</p>
          <p>Dica de ouro: se a ponta do cabo estiver toda desfiada igual vassoura, o conduíte vai travar o puxão.</p>
          <p>Troque se necessário.</p>
          <p>Um aperto firme aqui traz uma agilidade gigante para o polegar esquerdo.</p>

          <h3>5. Teste das marchas dianteiras</h3>
          <p>Chegou o exame final.</p>
          <p>Com a roda no ar, gire os pedais com bastante velocidade e suba a marcha no manete.</p>
          <p>A corrente precisa engatar a coroa grande de forma enérgica e imediata, e quando você clicar para descer, deve voltar sem enroscos.</p>
          <p>Se ao tentar descer para a marcha leve a corrente despencar demais e cair no quadro da bike (perto do pé), aperte um pouquinho o parafuso "L" para fechar esse espaço.</p>
          <p>Se ela for jogada para fora, na direção do seu tornozelo lá na coroa grande, feche o "H".</p>
          <p>Se tudo subiu e desceu no mais absoluto silêncio, parabéns, você acabou de afinar a sua mecânica como um verdadeiro mestre.</p>



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
                  <h3 className="font-bold text-zinc-100 pr-8 text-base md:text-lg m-0 flex items-center gap-2">
                    <span className="text-sm">🔽</span> {faq.question}
                  </h3>
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
        <AuthorRafaelMartins />

      </article>
    </>
  );
};
