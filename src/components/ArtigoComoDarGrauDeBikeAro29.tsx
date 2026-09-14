import React, { useState } from 'react';
import BunnerDoMeio from './BunnerDoMeio';
import ExitIntentPopup from './ExitIntentPopup';
import { AuthorLucasAlmeida } from './AuthorLucasAlmeida';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const ArtigoComoDarGrauDeBikeAro29: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [simulacao, setSimulacao] = useState<'sim' | 'nao' | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Qual é a melhor bike para aprender a dar grau?",
      answer: [
        "Geometria conta muito aqui.",
        "Quadros com a rabeira mais curta (a distância entre o eixo traseiro e o movimento central) são mais fáceis de empinar, porque o seu peso fica naturalmente mais perto da roda de trás.",
        "Bikes de Dirt Jump ou quadros de MTB mais 'fechados' facilitam o movimento.",
        "No entanto, o melhor equipamento é aquele que você já tem e conhece.",
        "Independentemente de ser uma aro 29 de entrada ou uma mais avançada, o que importa é a relação de marchas estar regulada, o freio traseiro respondendo bem e você estar familiarizado com o comportamento da bike.",
        "O foco deve ser adaptar a técnica ao seu equipamento, não gastar fortunas buscando a bicicleta mágica."
      ]
    },
    {
      question: "É preciso ter experiência para aprender a dar grau?",
      answer: [
        "Não precisa ser nenhum atleta de alta performance ou ter anos de trilha nas costas.",
        "O grau é democrático.",
        "O que você precisa é ter intimidade com os controles básicos da sua bicicleta: saber trocar marchas no tempo certo, modular os freios sem travar a roda e conseguir pedalar em linha reta com segurança.",
        "Se você já faz o básico bem feito, já tem a fundação necessária.",
        "A evolução a partir daí é pura consciência corporal e técnica.",
        "Tenha paciência para absorver os fundamentos no seu ritmo, sem pressa.",
        "O segredo é a repetição consciente."
      ]
    },
    {
      question: "Como posso melhorar meu equilíbrio ao dar grau?",
      answer: [
        "Equilíbrio se treina.",
        "Para a bicicleta parar de jogar de um lado para o outro enquanto a roda está no ar, comece a usar seus joelhos como pêndulos.",
        "Se a bike cair para a direita, abra o joelho esquerdo para compensar o peso.",
        "Outro exercício excelente para fazer em casa ou na praça é o Track Stand (ficar parado em cima da bike sem colocar o pé no chão).",
        "Isso força o seu cérebro a fazer microajustes de equilíbrio usando apenas a pressão nos pedais e o guidão.",
        "Quando você domina a bike parada, equilibrá-la em movimento no grau fica muito mais intuitivo.",
        "Lembre-se: olho no horizonte, mente focada."
      ]
    },
    {
      question: "Quais são os riscos de dar grau na bike?",
      answer: [
        "Colocar a bike em uma roda só tem seus perigos.",
        "O mais óbvio é cair de costas (o famoso 'dar as costas para o chão'), que pode machucar feio a coluna ou a cabeça se você estiver sem equipamento.",
        "Na parte mecânica, errar a mão na aterrissagem ou bater a rabeira no chão pode quebrar a gancheira, entortar o câmbio traseiro ou até trincar o quadro.",
        "E, claro, treinar na rua te expõe ao trânsito.",
        "Evite manobras no meio de carros e foque sempre em dominar o dedo no freio traseiro.",
        "A imprudência é o que transforma o lazer em um risco que poderia ser facilmente evitado."
      ]
    }
  ];

  return (
    <>
      <ExitIntentPopup />
      
      {/* Hero Section */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img fetchpriority="high" width="1200" height="800" src="/images/blog/1/como-dar-grau-de-bike-aro-29.webp" 
            alt="Como Dar Grau de Bike Aro 29 Passo a Passo Completo" 
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Como Dar Grau de Bike Aro 29 <br/>
            <span className="text-cyan-400">Passo a Passo Completo</span>
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
          <p>Dominar o equilíbrio sobre a roda traseira é o sonho de muita gente que pedala e quer ter um controle maior sobre a bicicleta.</p>
          <p>Na prática do dia a dia, aprender a dar grau em uma aro 29 exige muito mais técnica e paciência do que força bruta nos braços.</p>
          <p>O maior desafio que vejo nas trilhas e nas ruas não é levantar a roda, mas sim encontrar a sintonia fina entre o seu corpo e as peças da bicicleta.</p>
          <p>Antes de tentar arrancar o pneu da frente do chão, você precisa entender como a mecânica da sua bike reage ao seu peso.</p>
        </div>

        {/* Simulador de Perfil */}
        <div className="bg-zinc-800/50 p-6 md:p-8 rounded-2xl border border-cyan-900/50 shadow-lg mb-12">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-cyan-500" />
            Você já tentou dar grau antes?
          </h3>
          <p className="text-zinc-300 mb-4">Selecione para ver a dica do especialista:</p>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('sim')} />
              <span className="text-zinc-200">Sim, mas não consegui e acabei desistindo.</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('nao')} />
              <span className="text-zinc-200">Não, é minha primeira vez e tenho receio.</span>
            </label>
          </div>
          
          {simulacao === 'sim' && (
            <div className="mt-4 p-4 bg-emerald-950/30 border border-emerald-900/50 rounded-lg text-emerald-400 text-sm">
              <strong className="block mb-1">Análise:</strong> É comum! O erro na maioria das vezes está em usar muita força nos braços e esquecer da alavanca do pedal. Siga o passo a passo abaixo focando no 'golpe de pedal' e verá a diferença.
            </div>
          )}
          {simulacao === 'nao' && (
            <div className="mt-4 p-4 bg-cyan-950/30 border border-cyan-900/50 rounded-lg text-cyan-400 text-sm">
              <strong className="block mb-1">Análise:</strong> Ter receio é ótimo, significa que você será cuidadoso! O segredo inicial é dominar o freio traseiro. Ele é o seu botão de segurança. Aprenda a confiar nele antes de tentar manobras mais altas.
            </div>
          )}
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <h2>O que significa "dar grau" na bike?</h2>
          <p>Dar grau nada mais é do que encontrar o ponto cego da gravidade, equilibrando a bicicleta apenas na roda traseira enquanto você mantém o controle total da direção e da velocidade.</p>
          <p>Quem pedala há mais tempo sabe que isso não é só exibicionismo; é uma prova de que você domina o centro de equilíbrio do seu equipamento.</p>
          <p>Quando você acerta o movimento, a sensação é de que a bicicleta flutua e vira uma extensão das suas pernas.</p>
          <p>Nesse ponto mágico, você para de fazer força nos braços e nas costas.</p>
          <p>A manobra se mantém apenas com o giro suave dos pedais e toques precisos no freio, permitindo que você ande quarteirões inteiros com fluidez e o mínimo de esforço.</p>

          <h2>É difícil aprender a dar grau na bike?</h2>
          <p>A curva de aprendizado é muito mais rápida do que parece, desde que você treine do jeito certo.</p>
          <p>A maior barreira que trava os iniciantes não é a falta de preparo físico, mas o instinto natural de ter medo de cair para trás.</p>
          <p>Toda vez que a roda sai do chão, o cérebro manda você pisar no freio ou colocar o pé no chão.</p>
          <p>Quando você entende na prática que o freio traseiro é a sua corda de segurança, esse medo some.</p>
          <p>O processo deixa de ser um desafio assustador e vira pura memória muscular.</p>
          <p>Com dedicação constante e um método seguro, qualquer ciclista consegue perder o receio inicial e dominar completamente o equilíbrio da bicicleta.</p>

          <h2>Passo a passo</h2>
          <p>Colocar a roda pro alto exige uma coreografia exata entre você e as peças da bike.</p>
          <p>Não tente arrancar o guidão no soco; é uma sequência de movimentos conectados que faz a frente subir leve.</p>
          <p>Abaixo, detalhei o processo real que funciona nas ruas para você transformar a teoria em reflexo puro.</p>

          <h3>Escolha o local e prepare o equipamento de proteção</h3>
          <p>Vá para um terreno plano, com asfalto liso e, principalmente, longe de carros.</p>
          <p>Estacionamentos vazios ou praças tranquilas são os melhores laboratórios para você focar apenas na sua técnica, sem se preocupar em desviar do trânsito.</p>
          <p>A segurança é a regra número um para quem quer testar os limites do equilíbrio.</p>
          <p>Use capacete sempre, e recomendo muito joelheiras e cotoveleiras no começo.</p>
          <p>Cair para trás faz parte do processo de quem está aprendendo a achar o ponto de equilíbrio.</p>
          <p>Quando você está protegido, o medo de se machucar desaparece, e seu corpo relaxa o suficiente para executar os movimentos com a leveza que a manobra exige.</p>

          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/ciclista-protecao-grau.webp" alt="Ciclista de lado usando equipamento de proteção como capacete e joelheiras pronto para dar grau em um espaço aberto." className="w-full max-h-[500px] object-cover rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>

          <h3>Configure a bike: selim, marcha e freios</h3>
          <p>Antes de montar na bike, precisamos ajustar a mecânica a seu favor.</p>
          <p>Uma bicicleta mal configurada vai lutar contra você o tempo todo.</p>
          <p>Faça estes três ajustes básicos:</p>
          <p>Selim: Abaixe o banco alguns centímetros.</p>
          <p>Isso joga o seu centro de gravidade para baixo e te dá liberdade para movimentar o quadril sem bater no selim.</p>
          <p>Marcha: Escolha uma marcha intermediária (nem muito leve, nem muito pesada).</p>
          <p>Se estiver leve demais, você vai pedalar em falso e perder o equilíbrio.</p>
          <p>Se estiver pesada, vai faltar explosão na perna.</p>
          <p>Freio Traseiro: Teste a tensão do manete.</p>
          <p>Ele precisa estar sensível ao toque, pois será o seu único recurso para não virar para trás.</p>

          <BunnerDoMeio />

          <h3>Posicione o pedal dominante em torno das 2 horas</h3>
          <p>A posição do seu pé é o gatilho que vai fazer a bike decolar.</p>
          <p>Coloque o seu pé mais forte (o dominante) no pedal da frente e deixe o pedivela levemente inclinado para cima, como se o ponteiro de um relógio marcasse 2 horas.</p>
          <p>Esse ângulo não é frescura; é mecânica pura.</p>
          <p>Nessa posição, você tem a alavanca perfeita para transformar a força da sua coxa em uma explosão que empurra a roda traseira contra o chão.</p>
          <p>Começar o movimento exatamente nesse ponto garante que você não precise fazer força inútil com os braços, pois a tração da corrente fará o trabalho pesado de levantar a frente da bicicleta.</p>
          
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/pedal-2-horas-grau.webp" alt="Detalhe do pé do ciclista no pedal marcando 2 horas, preparado para impulsionar a bicicleta." className="w-full max-h-[500px] object-cover rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>

          <h3>Carregue o corpo levemente para frente</h3>
          <p>Antes de jogar o peso para trás, você precisa comprimir o seu corpo sobre o guidão.</p>
          <p>Dobre um pouco os cotovelos e aproxime o peito da frente da bike.</p>
          <p>Pense nisso como uma mola sendo espremida.</p>
          <p>Se você tentar puxar a bike estando com o corpo reto e relaxado, a roda da frente vai continuar colada no chão e você só vai gastar energia.</p>
          <p>Dominar essa transferência de peso é o segredo de quem levanta a frente da bike sem parecer que está fazendo força.</p>
          <p>É esse embalo inicial que define se a manobra vai fluir ou se você vai "brigar" com a bicicleta.</p>

          <h3>Execute o movimento: corpo para trás + golpe de pedal + puxão</h3>
          <p>Chegou a hora de juntar tudo.</p>
          <p>No exato segundo em que você pisar forte no pedal dominante (aquele das 2 horas), jogue o tronco inteiro para trás, como se fosse sentar em cima do pneu traseiro, e puxe o guidão junto.</p>
          <p>O segredo está na sincronia.</p>
          <p>O impulso da perna, o peso do corpo indo para trás e o puxão nos braços precisam acontecer na mesma fração de segundo.</p>
          <p>Se o tempo estiver correto (o que chamamos de timing), a roda dianteira vai subir leve e rápida.</p>
          <p>Mantenha os braços esticados e firmes, deixando a própria geometria do quadro te levar para o ponto de equilíbrio.</p>
          
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/puxando-guidao-grau.webp" alt="Momento exato em que o ciclista puxa o guidão da bicicleta e a roda da frente levanta." className="w-full max-h-[500px] object-cover rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>

          <h3>Continue pedalando para manter a roda no ar</h3>
          <p>Depois que a roda subiu, o jogo muda: agora o controle é feito pelas pernas, não pelos braços.</p>
          <p>Esqueça aquela mania de ficar puxando o guidão contra o peito.</p>
          <p>Mantenha os braços estendidos e relaxados.</p>
          <p>O segredo para não deixar a roda cair é manter o giro (a cadência) constante nos pedais.</p>
          <p>Olhe para a frente, para o horizonte, e nunca para o pneu dianteiro.</p>
          <p>Jogue os ombros um pouquinho para trás da linha do quadril para fazer contrapeso.</p>
          <p>Com uma pedalada ritmada e o corpo posicionado, a bike se sustenta sozinha e você não perde a estabilidade.</p>

          <h3>Use o freio traseiro para controlar a altura</h3>
          <p>O freio traseiro é o seu melhor amigo e o seu seguro de vida no grau.</p>
          <p>Pense nele como um acelerador ao contrário.</p>
          <p>Sentiu que a bike passou do ponto e você vai cair de costas?</p>
          <p>Um toque leve e rápido no manete direito é suficiente para a frente descer um pouco.</p>
          <p>Nunca dê um "alicatão" apertando o freio com tudo.</p>
          <p>Se a roda traseira travar no ar, a frente da bike vai despencar com violência, o que pode te jogar por cima do guidão ou estourar a suspensão.</p>
          <p>Treine bastante a sensibilidade desse dedo no freio; dominar esse toque suave é o que separa quem sabe dar grau de quem só dá sorte.</p>
          
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/freio-traseiro-grau.webp" alt="Mão do ciclista controlando e acionando o freio traseiro durante o grau." className="w-full max-h-[500px] object-cover rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>

          <h3>Desça a roda com controle e encerre a manobra</h3>
          <p>Voltar para o chão do jeito certo salva os componentes da sua bicicleta.</p>
          <p>Quando quiser acabar o grau, vá parando de pedalar aos poucos.</p>
          <p>A própria gravidade vai se encarregar de baixar a frente da bike suavemente.</p>
          <p>Se a bicicleta começar a tombar para um dos lados antes de descer, abra o joelho do lado oposto para equilibrar o peso, ou vire o guidão para tentar corrigir a rota.</p>
          <p>O mais importante: nunca toque no freio dianteiro enquanto a roda estiver no ar.</p>
          <p>O pouso deve ser macio para preservar a caixa de direção e os retentores da sua suspensão.</p>

          <h2>Dicas de quem entende</h2>
          <p>A experiência prática nos mostra que pequenos ajustes mudam completamente o seu treino.</p>
          <p>Em vez de ficar tentando a mesma coisa até cansar, aplique estas táticas para encurtar o seu aprendizado:</p>
          <p>Esvazie um pouco o pneu traseiro: Uma calibragem ligeiramente mais baixa aumenta a área de contato com o chão e deixa a bike mais "mansa" no equilíbrio lateral.</p>
          <p>Treine em subidas muito leves: A inclinação natural do asfalto ajuda a levantar a frente com menos esforço e te dá mais tempo para acionar o freio.</p>
          <p>Grave você mesmo: Coloque o celular encostado em algo e grave suas tentativas.</p>
          <p>É a melhor forma de ver se você realmente está jogando o corpo para trás ou só dobrando o cotovelo.</p>

          <h2>Erros comuns a evitar</h2>
          <p>Muitas vezes, a sua técnica não evolui porque você está preso em vícios mecânicos.</p>
          <p>Veja o que costuma travar o progresso de quem está começando e corrija isso no próximo pedal:</p>
          <p>Puxar com as costas curvadas: Isso isola a força apenas nos braços.</p>
          <p>O tronco inteiro deve ir para trás reto.</p>
          <p>Parar de pedalar no ar: Assim que a roda sobe, muita gente congela as pernas.</p>
          <p>Sem a tração da corrente girando, a bike cai na mesma hora.</p>
          <p>Olhar para o pneu da frente: O corpo acompanha a cabeça.</p>
          <p>Se você olha para baixo, seu peso vai para frente e o grau acaba.</p>
        </div>

        <BunnerDoMeio />

        {/* FAQ */}
        <div className="my-16">
          <h2 className="text-3xl font-extrabold text-white mb-8 border-b border-zinc-800 pb-4">
            Perguntas frequentes
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

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <h2>Conclusão</h2>
          <p>Dominar o grau com uma aro 29 muda completamente a forma como você enxerga a sua bicicleta.</p>
          <p>Você deixa de ser um passageiro e passa a entender exatamente como o centro de gravidade e as peças trabalham a seu favor.</p>
          <p>A jornada exige resiliência para lidar com as tentativas frustradas do começo, mas quando você junta o ajuste do banco, o puxão certo e o controle fino do freio traseiro, o medo some e dá lugar à técnica.</p>
          <p>Não é sobre força nos braços, é sobre timing e cadência.</p>
          <p>Coloque os equipamentos de segurança, vá para um lugar isolado e teste esses passos na prática.</p>
          <p>Logo menos, o ponto de equilíbrio vai se tornar algo natural no seu pedal.</p>
        </div>

        {/* SOBRE O AUTOR */}
        <AuthorLucasAlmeida />

      </article>
    </>
  );
};
