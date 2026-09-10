import React, { useState } from 'react';
import BunnerDoMeio from './BunnerDoMeio';
import ExitIntentPopup from './ExitIntentPopup';
import { AuthorLucasAlmeida } from './AuthorLucasAlmeida';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const ArtigoBicicletaAro26Ou29QualOMelhor: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [simulacao, setSimulacao] = useState<'asfalto' | 'terra' | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Qual é a principal diferença entre bicicletas com aro 26 e 29 polegadas?",
      answer: [
        "A diferença brutal está na física de como a roda interage com o chão.",
        "O aro 26 deixa a bicicleta mais perto do solo e entrega uma resposta imediata no guidão, sendo muito arisca.",
        "Já o aro 29 coloca mais borracha em contato com o chão, focando em manter o embalo e passar por cima dos obstáculos sem tranco.",
        "Na trilha, isso significa escolher entre uma bike nervosa que exige reflexo rápido para desviar de tudo (26), ou uma máquina mais estável que flui melhor em terrenos esburacados (29).",
        "Entender essa diferença de comportamento é o que garante que você compre a bicicleta certa para o seu estilo."
      ]
    },
    {
      question: "Quais são as vantagens de uma bicicleta com aro 26?",
      answer: [
        "A agilidade é o grande trunfo do aro 26.",
        "Ela arranca muito rápido nos semáforos da cidade e faz curvas fechadas em trilhas de forma muito mais instintiva.",
        "Por ser menor, o conjunto inteiro da bike acaba ficando mais leve, o que é ótimo para quem precisa carregar a bicicleta em escadas ou tem pouco espaço em casa.",
        "Para quem gosta de ter a bicicleta totalmente \"na mão\" e dominar o equipamento com o corpo em espaços curtos, o aro 26 ainda é uma ferramenta excelente, dinâmica e muito confiável."
      ]
    },
    {
      question: "Quais são as vantagens de uma bicicleta com aro 29?",
      answer: [
        "O aro 29 muda o jogo na hora de encarar buracos, pedras e raízes.",
        "Por atacar os obstáculos com um ângulo menor, a bicicleta perde muito menos velocidade na trepidação, o que poupa uma energia absurda do seu corpo em pedais longos.",
        "A área maior do pneu no chão garante uma tração excelente, te grudando nas curvas de terra e evitando derrapagens em subidas íngremes.",
        "Apesar de pedir um pouco mais de força nas pernas para tirar a bike da inércia, a estabilidade e o conforto que o aro 29 entrega quando embala fazem dele o padrão definitivo para quem quer rendimento na terra."
      ]
    },
    {
      question: "Quais fatores devo considerar ao escolher entre aro 26 e 29?",
      answer: [
        "Seja muito prático: olhe para onde você vai pedalar e para o seu corpo.",
        "Se a sua rotina é asfalto apertado, muito trânsito e você quer algo ágil, o 26 brilha.",
        "Se o percurso envolve estradões, buracos e você quer fazer distâncias maiores cansando menos, o 29 é o caminho.",
        "Coloque a sua altura na conta, já que o 29 se ajusta naturalmente melhor a pessoas mais altas.",
        "E, claro, lembre-se do custo das peças de reposição na sua cidade.",
        "O importante é que a geometria converse com o que você realmente faz no dia a dia."
      ]
    }
  ];

  return (
    <>
      <ExitIntentPopup />
      
      {/* Hero Section */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img fetchpriority="high" width="1200" height="800" src="/images/blog/1/bicicleta-aro-26-ou-29-qual-o-melhor.webp" 
            alt="Bicicleta Aro 26 ou 29 Background" 
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Bicicleta Aro 26 ou 29: <br/>
            <span className="text-cyan-400">Qual Melhor para Você</span>
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
          <p>Escolher uma nova companheira para o pedal sempre traz aquela dúvida clássica que eu escuto direto nas trilhas: o tamanho da roda muda mesmo a nossa vida em cima da bike?</p>
          <p>É super normal sentir essa insegurança diante de tantas opções técnicas na loja, principalmente quando o seu conforto e o rendimento que você espera dependem diretamente dessa escolha.</p>
          <p>Depois de anos pedalando em diferentes terrenos, posso te garantir que escolher o aro não é só questão de estética, mas o ponto de partida para a bike se comportar bem no trajeto que você faz.</p>
          <p>Entender na prática as diferenças entre uma bicicleta aro 26 ou 29 é o primeiro passo para você alinhar o que espera da bike com a realidade dos buracos e trilhas que vai encarar.</p>
        </div>

        {/* Simulador de Perfil */}
        <div className="bg-zinc-800/50 p-6 md:p-8 rounded-2xl border border-cyan-900/50 shadow-lg mb-12">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-cyan-500" />
            Você costuma pedalar mais no asfalto ou na terra?
          </h3>
          <p className="text-zinc-300 mb-4">Selecione para ver a dica do mecânico:</p>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('asfalto')} />
              <span className="text-zinc-200">Asfalto (Trânsito e ciclovias)</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('terra')} />
              <span className="text-zinc-200">Terra (Trilhas e estradões)</span>
            </label>
          </div>
          
          {simulacao === 'asfalto' && (
            <div className="mt-4 p-4 bg-cyan-950/30 border border-cyan-900/50 rounded-lg text-cyan-400 text-sm">
              <strong className="block mb-1">Análise:</strong> No trânsito, a agilidade do aro 26 para desviar rápido e arrancar nos semáforos é um diferencial enorme.
            </div>
          )}
          {simulacao === 'terra' && (
            <div className="mt-4 p-4 bg-emerald-950/30 border border-emerald-900/50 rounded-lg text-emerald-400 text-sm">
              <strong className="block mb-1">Análise:</strong> Em terrenos acidentados, o aro 29 engole as imperfeições, proporcionando muito mais conforto e mantendo o embalo.
            </div>
          )}
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <h2>Desvendando os tamanhos: o que realmente muda entre aro 26 e aro 29?</h2>
          <p>Vejo muita confusão sobre o diâmetro das rodas, mas quando a gente entende como elas rolam no chão, a dúvida some na hora da compra.</p>
          <p>O aro 26 é menor, o que deixa a bicicleta muito mais arisca e ágil.</p>
          <p>É o famoso "bate e volta", perfeito para quem precisa de respostas rápidas desviando de carros na cidade.</p>
          <p>Já o aro 29 tem uma área de contato muito maior com o chão.</p>
          <p>Na prática, isso significa que ele "engole" as imperfeições, raízes e buracos com muito menos esforço para os seus braços, além de manter o embalo da velocidade final com mais facilidade.</p>
          <p>Enquanto o 26 te dá agilidade nas manobras, o 29 te entrega uma estabilidade absurda para trajetos longos e chão irregular.</p>

          <h3>Como é medido o tamanho de um aro? Centímetros? Polegadas?</h3>
          <p>Muita gente que está começando no pedal tenta converter as medidas para centímetros para tentar entender melhor, mas o padrão mundial do ciclismo funciona em polegadas.</p>
          <p>Aquele número 26 ou 29 que você vê na lateral do pneu ou na ficha técnica da loja é o diâmetro total da roda, medido de uma ponta à outra, passando bem pelo centro do cubo.</p>
          <p>E, olha, essa medida não está ali só de enfeite.</p>
          <p>Ela é o que manda na compatibilidade do seu quadro, do garfo da suspensão e até da câmara de ar que você vai precisar carregar na bolsa de selim.</p>
          <p>Ignorar isso é pedir para comprar peça que não encaixa, transformando um reparo simples num domingo de manhã em uma dor de cabeça gigantesca.</p>
          <p>Conhecer a medida exata da sua roda garante que qualquer peça nova que você compre realmente funcione na sua bike.</p>

          <h2>Um breve histórico: a evolução do aro 26 pro aro 29</h2>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/evolucao-aro-26-para-29.webp" title="Comparação histórica entre bicicleta aro 26 clássica e aro 29 moderna" alt="Imagem realista de uma bicicleta de montanha clássica aro 26 ao lado de uma moderna aro 29 em uma trilha de floresta, mostrando a evolução do design e tamanho das rodas." className="w-full max-h-[500px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>Quem pedala há mais tempo lembra bem: durante décadas, o aro 26 foi o rei absoluto.</p>
          <p>Ele equipava de tudo, desde a bike de ir à padaria até as máquinas de mountain bike mais parrudas.</p>
          <p>A agilidade e a facilidade de manobra formaram gerações de ciclistas.</p>
          <p>Mas a galera que curtia trilhas mais pesadas começou a sentir a necessidade de mais tração e de um equipamento que passasse por cima de pedras com menos sofrimento.</p>
          <p>O aro 29 não surgiu como uma jogada de marketing de catálogo; ele foi a resposta prática para melhorar a rolagem e a capacidade de passar por obstáculos.</p>
          <p>O mercado de competição abraçou as rodas maiores, mas o aro 26 não morreu.</p>
          <p>Ele ainda é uma sacada inteligentíssima para quem prioriza mobilidade urbana ágil e precisa guardar a bike em espaços apertados, provando que a evolução das peças sempre vai andar lado a lado com a necessidade de cada ciclista.</p>

          <h2>Confronto direto: aro 26 vs. aro 29 em diferentes situações de uso</h2>
          <p>A decisão entre esses dois tamanhos de roda dita exatamente como a sua bicicleta vai reagir quando o asfalto acabar ou quando a subida apertar.</p>
          <p>O impacto dessa medida no seu conforto e na eficiência da pedalada é gigantesco, e a percepção muda drasticamente dependendo de onde você está rodando.</p>
          <p>Entender como cada tamanho se vira na terra, no barro ou na velocidade do asfalto é o que realmente importa antes de você escolher a sua nova parceira de pedal.</p>

          <h3>Em trilhas e terrenos acidentados: a escolha pra aventura e desafio</h3>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/bicicleta-aro-29-em-trilhas-acidentadas.webp" title="Ciclista superando obstáculos com mountain bike aro 29" alt="Ciclista de mountain bike em ação descendo uma trilha muito acidentada, com pedras e raízes, evidenciando como o pneu aro 29 passa facilmente por cima dos obstáculos." className="w-full max-h-[500px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>Quando a gente entra na trilha técnica e o terreno castiga, a geometria do aro 29 mostra por que virou o queridinho.</p>
          <p>O diâmetro maior diminui o ângulo de ataque da roda contra os obstáculos.</p>
          <p>Na prática, a roda não "trava" tanto nas raízes e pedras; ela passa por cima fluindo, o que te poupa muita energia e mantém a bike no embalo.</p>
          <p>Já com o aro 26, você precisa trabalhar muito mais o corpo, puxando o guidão e usando reflexos rápidos para desviar de buracos que o aro 29 simplesmente ignoraria.</p>
          <p>O detalhe é o bolso: as peças para aro 29 (pneus, câmaras, suspensões) costumam ser mais caras.</p>
          <p>Se o orçamento está apertado, manter uma bike aro 26 bem regulada ainda é uma saída super acessível.</p>
          <p>Tudo depende do quanto você quer exigir da bike na trilha e do quanto está disposto a gastar nas manutenções.</p>
        </div>

        <BunnerDoMeio />

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <h3>Bicicleta aro 29: benefícios, desafios e por que dominou o MTB</h3>
          <p>Ver o aro 29 dominar as montanhas não foi acaso, foi engenharia aplicada à terra.</p>
          <p>Ao aumentar a roda, a bike ganha aquele ângulo de ataque suave que eu mencionei, traduzindo-se numa pilotagem que atropela pedras com uma fluidez que o aro 26 nunca vai alcançar.</p>
          <p>Você ganha muito mais tração nas subidas com cascalho solto e uma aderência nas curvas que te deixa muito mais seguro nas descidas técnicas.</p>
          <p>Mas nem tudo é perfeito, e a gente sente isso nas pernas.</p>
          <p>Essa eficiência cobra um preço na inércia.</p>
          <p>Para tirar a bike do lugar ou retomar a velocidade em curvas muito fechadas no meio do mato, você faz mais força do que faria numa roda menor.</p>
          <p>Mas para quem foca em cobrir distâncias maiores e quer performance constante, a estabilidade e o conforto que o aro 29 entrega compensam facilmente esse peso extra na arrancada.</p>

          <h2>Perfil do usuário e uso pretendido</h2>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/bicicleta-asfalto-vs-terra-perfil.webp" title="Perfil de uso: Bicicleta no asfalto versus bicicleta na terra" alt="Montagem fotográfica criativa mostrando a diferença de uso: de um lado uma bicicleta ágil em ambiente urbano asfaltado e do outro uma mountain bike empoeirada numa estrada de terra." className="w-full max-h-[500px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>Sempre gosto de analisar o caso real.</p>
          <p>Vamos pegar o exemplo de quem tem 1,70 m e 61 kg e roda na Baixada Fluminense: você tem um porte físico super versátil que se dá bem com os dois aros.</p>
          <p>Mas, olhando para o terreno cheio de asfalto remendado, buracos e aclives dessa região, a escolha precisa ser estratégica.</p>
          <p>Se você quer evoluir do pedal urbano para rodar 30 km no final de semana, o aro 29 vai te ajudar a absorver as pancadas dos buracos sem acabar com as suas costas.</p>
          <p>É fundamental ter um conjunto que aguente o impacto do asfalto ruim sem perder o embalo.</p>
          <p>Mais do que olhar a sua altura, entender que o conforto numa distância maior vem de uma bicicleta que cansa menos o seu corpo é o segredo para transformar a bike numa extensão de você, dando segurança a cada quilômetro.</p>

          <h2>Decisão final: como escolher entre bicicleta aro 26 e aro 29 pro seu perfil</h2>
          <p>A hora de bater o martelo chegou.</p>
          <p>A dica de ouro que sempre dou é: seja muito sincero sobre o trajeto que você faz.</p>
          <p>Se o seu foco é desviar de carros no trânsito, fazer curvas apertadas e você precisa de uma bike ágil para o dia a dia, o aro 26 entrega um custo-benefício que é imbatível.</p>
          <p>Por outro lado, se a sua pegada é fazer estradões de terra, encarar trilhas, manter velocidades mais altas e focar no esporte, o aro 29 vai te entregar um conforto e uma tração que justificam cada centavo do investimento.</p>
          <p>Escolha a bike que se encaixe na sua frequência de pedal, porque o ajuste certo transforma o sofrimento da subida numa experiência muito mais prazerosa.</p>

          <h2>Quais peças de uma bicicleta variam de acordo com o tamanho do aro?</h2>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/pecas-bicicleta-aro-29-suspensao.webp" title="Peças mecânicas específicas que variam de acordo com o tamanho do aro" alt="Close-up profissional detalhando as peças mecânicas da roda dianteira de uma bicicleta, incluindo o garfo de suspensão, o disco de freio robusto e os cravos do pneu." className="w-full max-h-[500px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>Mudar de aro 26 para 29 não é só tirar uma roda e colocar outra; você muda a engenharia inteira da bicicleta.</p>
          <p>O primeiro afetado é o quadro.</p>
          <p>O triângulo traseiro e a frente precisam ser mais longos para o pneu não raspar no tubo.</p>
          <p>A suspensão (garfo) é outra que muda totalmente.</p>
          <p>Um garfo 26 não aceita roda 29, simplesmente não cabe.</p>
          <p>Até a relação de marchas e os freios sentem o impacto: rodas maiores fazem mais alavanca, o que muitas vezes exige discos de freio maiores para parar a bike com segurança, e marchas com engrenagens diferentes para compensar o peso na arrancada.</p>
          <p>E, claro, pneus e câmaras de ar são exclusivos.</p>
          <p>Tentar improvisar peças de um tamanho em outro só vai acabar estragando seu equipamento e te deixando na mão no meio do pedal.</p>
          <p>Verifique sempre se faz sentido adaptar ou se é mais barato comprar a bike no tamanho certo.</p>

          <h2>Como saber se o Aro é de boa qualidade?</h2>
          <p>A durabilidade do seu aro nas trilhas vai muito além do adesivo da marca.</p>
          <p>O primeiro ponto que olho é o material: aros de alumínio com parede dupla são o padrão ouro para não entortar no primeiro buraco que você não conseguir desviar.</p>
          <p>Observe a emenda do aro, onde o metal se junta; soldas limpas e bem feitas mostram que o fabricante teve cuidado, o que impede a roda de ficar desalinhada facilmente.</p>
          <p>A rigidez lateral também conta muito.</p>
          <p>Uma roda boa não pode "flambar" ou dobrar quando você deita a bike numa curva ou freia bruscamente.</p>
          <p>O aro tem que ser largo o suficiente para o pneu que você usa, garantindo que toda a força que você coloca no pedal se transforme em velocidade, sem desperdício de energia.</p>

          <h2>Montar peça por peça ou comprar pronta?</h2>
          <p>Esse é o dilema que todo ciclista enfrenta quando decide levar o esporte mais a sério: comprar a bike montada na caixa ou caçar peça por peça.</p>
          <p>Cada escolha muda a forma como você lida com a mecânica e com o seu bolso.</p>
          <p>Avaliar isso com calma é o que vai definir se você vai ter uma bike que atende exatamente o que você quer, ou se vai gastar dinheiro trocando peças de uma bike nova no primeiro mês de uso.</p>

          <h3>Vantagens de montar peça por peça</h3>
          <p>Montar a bicicleta do zero é a saída para quem já sabe exatamente o que incomoda nas bikes prontas de loja.</p>
          <p>Em vez de comprar peças de entrada descartáveis num pacote fechado, você dilui seu investimento de forma inteligente focando no que importa: rodas melhores, suspensão de qualidade e câmbio que não desregula.</p>
          <p>Além de criar uma bicicleta com a sua assinatura, conhecer a bike parafuso por parafuso não tem preço.</p>
          <p>Ao comprar suas próprias ferramentas e assumir a montagem, você também aprende a fazer a manutenção preventiva em casa.</p>
          <p>Isso significa que você mesmo saberá diagnosticar e arrumar marchas na trilha, e a economia com a oficina ajuda a pagar os componentes definitivos.</p>
          <p>Encare essa montagem não como um gasto alto imediato, mas como a construção do seu equipamento ideal a longo prazo.</p>
        </div>

        <BunnerDoMeio />

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

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <h2>Conclusão</h2>
          <p>Aquela velha dúvida entre o aro 26 e o 29 some rápido quando a gente entende que a bicicleta é só uma ferramenta para te ajudar a superar o terreno.</p>
          <p>Se você precisa de reflexo e agilidade pura na cidade, ou se o foco é dominar as imperfeições das trilhas e ganhar conforto em longas distâncias, a polegada da roda faz toda a diferença.</p>
          <p>O conhecimento técnico serve para evitar que você gaste energia à toa arrastando a bike errada.</p>
          <p>Avalie o chão que você pisa mais vezes na semana, sinta a diferença da pilotagem e suba na bicicleta que te dê vontade de pedalar cada vez mais longe.</p>
          <p>Nos vemos na trilha!</p>

          <div className="mt-12 p-6 bg-cyan-950/20 border border-cyan-900/50 rounded-2xl shadow-sm not-prose">
            <h3 className="text-xl font-bold text-white mb-2">Decidiu ir de aro 29?</h3>
            <p className="text-zinc-300">
              Se você chegou à conclusão de que uma roda maior é a melhor escolha para o seu perfil, não compre no escuro. Confira nosso guia definitivo com as <a href="/melhores-bicicletas-aro-29" className="text-cyan-400 hover:text-cyan-300 font-bold underline underline-offset-4 decoration-cyan-500/30 hover:decoration-cyan-400 transition-all">Melhores Bicicletas Aro 29 do mercado</a>, onde analisamos o custo-benefício de verdade para o seu bolso.
            </p>
          </div>
        </div>

        {/* SOBRE O AUTOR */}
        <AuthorLucasAlmeida />

      </article>
    </>
  );
};
