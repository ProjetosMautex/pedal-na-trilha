import React, { useState } from 'react';
import BunnerDoMeio from './BunnerDoMeio';
import ExitIntentPopup from './ExitIntentPopup';
import { AuthorLucasAlmeida } from './AuthorLucasAlmeida';
import { HelpCircle } from 'lucide-react';

export const ArtigoComoPassarMarcha: React.FC = () => {
  const [simulacao, setSimulacao] = useState<'sim' | 'nao' | null>(null);

  return (
    <>
      <ExitIntentPopup />
      
      {/* Hero Section */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img fetchpriority="high" width="1200" height="800" src="/images/blog/1/como-passar-marcha-de-bicicleta-aro-29.webp" 
            alt="Como Passar Marcha de Bicicleta Aro 29 Background" 
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Como Passar Marcha de Bicicleta Aro 29 <br/>
            <span className="text-cyan-400">Guia Prático</span>
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
          <p>Sentir as pernas queimarem logo na primeira subida do trajeto ou pedalar rápido demais sem sair do lugar no asfalto reto são frustrações clássicas de quem está começando a desbravar o mundo do ciclismo.</p>
          <p>Mas, pela minha experiência prática, a maioria das vezes o problema não é a sua falta de preparo físico, e sim a falta de intimidade com os componentes da sua bicicleta.</p>
          <p>Saber exatamente como passar marcha de bicicleta aro 29 é o que divide um passeio exaustivo de um pedal leve e prazeroso.</p>
          <p>Quando você domina a mecânica das marchas, você para de lutar contra a bike e passa a usar a energia do seu corpo de forma inteligente.</p>
          <p>O primeiro passo para dominar a sua aro 29 é entender de forma simples o que acontece lá nas engrenagens quando você aperta um botão no guidão.</p>
        </div>

        {/* Simulador de Perfil */}
        <div className="bg-zinc-800/50 p-6 md:p-8 rounded-2xl border border-cyan-900/50 shadow-lg mb-12">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-cyan-500" />
            Você tem dificuldade em saber a hora certa de trocar de marcha?
          </h3>
          <p className="text-zinc-300 mb-4">Selecione para ver a dica do mecânico:</p>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('sim')} />
              <span className="text-zinc-200">Sim, sempre perco o ritmo.</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('nao')} />
              <span className="text-zinc-200">Não, já domino bem.</span>
            </label>
          </div>
          
          {simulacao === 'sim' && (
            <div className="mt-4 p-4 bg-emerald-950/30 border border-emerald-900/50 rounded-lg text-emerald-400 text-sm">
              <strong className="block mb-1">Análise:</strong> Perder o ritmo é comum e indica falta de antecipação! Comece a observar a inclinação do terreno metros antes e ajuste o câmbio traseiro suavemente antes da subida chegar.
            </div>
          )}
          {simulacao === 'nao' && (
            <div className="mt-4 p-4 bg-cyan-950/30 border border-cyan-900/50 rounded-lg text-cyan-400 text-sm">
              <strong className="block mb-1">Análise:</strong> Excelente! Isso significa que você já possui a sensibilidade tátil e a memória muscular da sua bicicleta. Continue aprimorando seu foco no alinhamento da corrente para aumentar a vida útil da sua relação.
            </div>
          )}
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <h2>Como funciona a troca de marchas da bicicleta?</h2>
          <p>Entender o coração da sua transmissão é o que vai te transformar de um iniciante que sofre nas ladeiras para um ciclista que flui pelo terreno.</p>
          <p>Em uma aro 29 tradicional, o seu sistema de marchas é comandado por dois polos: o câmbio dianteiro, que fica ali perto dos seus pés e é controlado pela mão esquerda, e o câmbio traseiro, lá na roda de trás, operado pela mão direita.</p>
          <p>Gosto de explicar isso para o pessoal no Pedal na Trilha usando a regra do peso e do ajuste.</p>
          <p>O lado esquerdo (coroas dianteiras) serve para mudanças brutas: ele define se a bicicleta vai ficar extremamente leve para escalar uma parede ou pesada para ganhar velocidade no asfalto.</p>
          <p>Já o lado direito (cassete traseiro) serve para fazer o "ajuste fino" dessa escolha.</p>
          <p>Compreender essa divisão de tarefas é o primeiro segredo para parar de esgotar suas pernas à toa.</p>

          <h2>Conhecendo seu Sistema</h2>
          <p>Antes de colocar a bicicleta na terra ou encarar o trânsito, tire cinco minutos para olhar para o guidão, o que chamamos de "cockpit".</p>
          <p>É ali que ficam os seus trocadores.</p>
          <p>Hoje em dia, na grande maioria das aro 29, você vai encontrar os sistemas Rapidfire (aqueles gatilhos que você empurra com o polegar e puxa com o indicador) ou os de giro (Grip Shift, que parecem um acelerador de moto).</p>
          <p>O objetivo dessa pausa é criar familiaridade tátil.</p>
          <p>Você precisa saber onde o seu dedo deve ir sem precisar baixar a cabeça enquanto pedala.</p>
          <p>Identifique qual alavanca deixa o pedal mais pesado e qual deixa mais leve.</p>
          <p>Quando essa ação vira memória muscular, a troca de marchas acontece de forma natural, sem você ter que pensar muito, mantendo os olhos onde importa: no caminho à sua frente.</p>

          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/trocadores-guidao.webp" alt="Visão detalhada do guidão de uma mountain bike focando nos trocadores de marcha próximos aos manetes de freio, ilustrando o cockpit que o ciclista precisa dominar." className="w-full max-h-[500px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>

          <h2>Tipos de Alavancas de Câmbio</h2>
          <p>Não existe um padrão único de trocador, e cada modelo afeta a ergonomia do seu pedal de um jeito.</p>
          <p>Ter a alavanca certa faz toda a diferença na velocidade de reação quando surge um buraco ou uma subida surpresa.</p>
          <p>A escolha do melhor sistema geralmente vem com o tempo de selim, mas entender o que você tem nas mãos agora é fundamental para tirar o melhor proveito da sua transmissão.</p>

          <h2>Básico</h2>
          <p>Se você está nas suas primeiras pedaladas, a regra de ouro é a antecipação.</p>
          <p>Não cometa o erro de esperar a bicicleta quase parar no meio da ladeira para tentar trocar a marcha.</p>
          <p>O ciclismo básico funciona na base do ritmo constante.</p>
          <p>Se você vê que uma subida está chegando, deixe a marcha mais leve antes de começar a subir.</p>
          <p>O foco inicial deve ser manter suas pernas girando num ritmo confortável, sem fazer força excessiva.</p>
          <p>Usar as marchas a seu favor de forma antecipada transforma o que seria um sofrimento em uma pedalada contínua, economizando o fôlego para você ir muito mais longe.</p>

          <h2>Controle dos Câmbios</h2>
          <p>Comandar os câmbios com maestria é quase como dirigir um carro manual: exige coordenação, mas logo vira automático.</p>
          <p>Como vimos, a mão esquerda escolhe o "terreno" (leve, médio ou pesado) e a mão direita encontra o ritmo exato dentro desse terreno.</p>
          <p>Para que isso funcione sem trancos, você precisa internalizar essa separação.</p>
          <p>Muitas vezes, o ciclista tenta resolver um peso excessivo na perna trocando o câmbio dianteiro de uma vez, o que pode fazer a corrente cair.</p>
          <p>A chave para o controle absoluto é usar o câmbio traseiro o tempo todo para se adaptar aos micro-relevos da rua, e deixar o dianteiro apenas para mudanças drásticas no trajeto.</p>

          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/controle-cambios-maos.webp" alt="Detalhe das mãos de um ciclista operando os trocadores de marcha de uma bicicleta aro 29, demonstrando a interação com os controles no guidão." className="w-full max-h-[500px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
        </div>

        <BunnerDoMeio />

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <h2>Para trocar o câmbio traseiro, utilize as alavancas da direita</h2>
          <p>A sua mão direita vai ser a mais acionada durante todo o seu trajeto.</p>
          <p>As alavancas ali controlam a corrente nas engrenagens de trás.</p>
          <p>Ao subir a corrente para os discos maiores, o pedal fica mais leve.</p>
          <p>Ao descer a corrente para os discos menores, o pedal fica mais pesado, ideal para embalar.</p>
          <p>O segredo do uso da mão direita é a frequência.</p>
          <p>Você deve brincar com esses gatilhos o tempo todo.</p>
          <p>Pegou um ventinho contra? Dê um clique leve.</p>
          <p>O asfalto inclinou para baixo? Dê um clique pesado.</p>
          <p>Essa é a ferramenta que garante que as suas pernas não percebam as mudanças sutis do terreno, mantendo o seu ritmo perfeitamente constante.</p>

          <h2>Uso do Câmbio Traseiro</h2>
          <p>Na prática, o câmbio traseiro é o maestro do seu conforto.</p>
          <p>Sempre oriento a olhar para as engrenagens traseiras (o cassete) como uma escada.</p>
          <p>Você deve subir ou descer um degrau de cada vez conforme sente a necessidade de aliviar ou impor força.</p>
          <p>O domínio dessa peça traseira é o que garante que você termine um pedal de 30 quilômetros sem sentir as articulações dos joelhos gritando.</p>

          <h2>Para trocar o câmbio dianteiro, utilize as alavancas da esquerda</h2>
          <p>Diferente da precisão cirúrgica da roda traseira, a mão esquerda controla a força bruta.</p>
          <p>O câmbio dianteiro movimenta a corrente nas coroas próximas ao pedal.</p>
          <p>Ao jogar para a coroa menor, você tem a força de tração máxima para subidas cruéis.</p>
          <p>Na coroa maior, você tem a marcha de velocidade máxima para retas e descidas.</p>
          <p>Operar a mão esquerda exige mais cuidado.</p>
          <p>Como a diferença de tamanho entre as coroas da frente é grande, a corrente precisa de um tempo maior para "escalar" os dentes.</p>
          <p>Por isso, a troca aqui tem que ser decidida e planejada.</p>
          <p>Jamais faça essa troca no momento de maior desespero da subida, ou corre o sério risco de travar a relação, como disse antes.</p>

          <h2>Utilização das Coroas dianteiras</h2>
          <p>Saber escolher em qual coroa dianteira você vai rodar dita o tom do seu passeio.</p>
          <p>É a base de toda a sua marcha.</p>
          <p>Se você errar essa escolha fundamental, nenhum ajuste na roda traseira vai salvar a sua perna do desgaste.</p>
          <p>Vamos ver na prática como dividir o uso dessas engrenagens de força.</p>

          <h3>Dicas para usar as coroas</h3>
          <p>Se a sua aro 29 tem 3 coroas na frente, pense nelas assim: a pequena é o seu botão de emergência.</p>
          <p>Use-a apenas quando a ladeira for realmente assustadora, para poupar suas pernas.</p>
          <p>A média é o seu "feijão com arroz", onde a corrente deve ficar na maior parte do tempo em terrenos mistos urbanos ou estradões de terra.</p>
          <p>Já a coroa grande é exclusiva para descidas longas ou asfalto plano onde você quer imprimir velocidade.</p>
          <p>Entender essa divisão evita que você use marchas extremas de forma errada.</p>

          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/coroas-dianteiras-corrente.webp" alt="Visão aproximada das coroas dianteiras e da corrente de uma bicicleta, com foco no mecanismo de tração perto dos pedais." className="w-full max-h-[500px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>

          <h2>Intermediário</h2>
          <p>Para o ciclista que já passou da fase iniciante, o desafio não é mais lembrar qual dedo aperta qual botão, mas sim ler a topografia.</p>
          <p>No nível intermediário, o seu olhar não está na roda da frente, mas sim a 20 metros de distância.</p>
          <p>Você começa a perceber que a textura do chão (se é areia fofa, asfalto ou cascalho) também exige marchas diferentes.</p>
          <p>O objetivo do ciclista intermediário é refinar a troca: fazer a corrente pular de engrenagem sem que faça aquele barulho feio de ferro raspando.</p>
          <p>É a fase de ganhar fluidez e proteger as peças contra o desgaste.</p>

          <h2>Como trocar a marcha da bicicleta?</h2>
          <p>Esqueça os visores numéricos no guidão (1, 2, 3...).</p>
          <p>O verdadeiro indicador de que você precisa passar a marcha é o seu próprio corpo.</p>
          <p>Para trocar corretamente, você precisa sentir a resistência no pedal.</p>
          <p>Se está leve demais e você está "pedalando no vazio" (o famoso giro falso), suba a marcha para pesar.</p>
          <p>Se você está fazendo careta e a bicicleta não anda, desça a marcha para aliviar.</p>
          <p>Desenvolver essa percepção sensorial é libertador.</p>
          <p>Quando você confia nas pernas e na audição para saber se a bike está trabalhando no ritmo certo, você se torna um ciclista muito mais conectado com a sua aro 29.</p>

          <h2>O câmbio só funciona enquanto você pedala</h2>
          <p>Pode parecer óbvio, mas esse é o erro que mais vejo os iniciantes cometerem no dia a dia.</p>
          <p>Você parou no semáforo com uma marcha super pesada e tenta trocar os gatilhos parado.</p>
          <p>O câmbio não vai funcionar.</p>
          <p>Pior: ao fazer isso, você estica os cabos de aço e desregula o sistema todo.</p>
          <p>A corrente precisa do movimento das engrenagens para conseguir subir ou descer os degraus.</p>
          <p>Só aperte o trocador se estiver pedalando para frente.</p>
          <p>Se precisou parar bruscamente, infelizmente terá que fazer força para arrancar ou levantar a roda traseira para dar um giro no pedal e ajeitar a marcha antes de subir na bike.</p>

          <h2>Alivie a força nas trocas de marcha</h2>
          <p>Quer fazer a sua transmissão durar anos em vez de meses?</p>
          <p>Aplique o "giro solto".</p>
          <p>Quando você for acionar o trocador, alivie a força das pernas por uma fração de segundo.</p>
          <p>Você não para de pedalar, apenas tira o peso do pé.</p>
          <p>Imagine que você está apenas acompanhando o movimento do pedal sem empurrá-lo.</p>
          <p>Quando você troca a marcha fazendo força bruta, a corrente sofre um tranco violento que desgasta os dentes do cassete e pode arrebentar um elo.</p>
          <p>Um clique suave e sem carga é o grande segredo da manutenção preventiva.</p>
        </div>

        <BunnerDoMeio />

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <h2>Combinações de Marchas e Evitando o Cruzamento da Corrente</h2>
          <p>Nem toda marcha que a sua bicicleta tem disponível deve ser usada.</p>
          <p>O mau uso das combinações pode "cruzar" a corrente, deixando-a torcida e trabalhando na diagonal.</p>
          <p>Isso não só rouba a sua energia, como destrói a vida útil de toda a sua relação mecânica em tempo recorde.</p>

          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/cassete-alinhamento.webp" alt="Detalhe do cassete traseiro da bicicleta focado no alinhamento da corrente sobre as engrenagens, essencial para evitar desgastes." className="w-full max-h-[500px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>

          <h3>Regras para evitar cruzamento da corrente</h3>
          <p>A regra de ouro é simples: mantenha a corrente o mais reta possível.</p>
          <p>Se você estiver na coroa maior lá na frente, só deve usar os pinhões menores lá atrás.</p>
          <p>Se estiver na coroa menor da frente, use apenas os pinhões maiores de trás.</p>
          <p>Cruzar extremos (coroa grande na frente com pinhão grande atrás, por exemplo) faz a corrente trabalhar de lado, raspando no câmbio e gerando estalos.</p>
          <p>O sistema foi feito para trabalhar alinhado.</p>
          <p>Quando você respeita essa linha reta, a bicicleta rende muito mais e fica completamente silenciosa.</p>

          <h3>Combinando marchas dos dois lados</h3>
          <p>A melhor zona de conforto para quem está se acostumando com a bicicleta é manter a corrente na coroa do meio (se tiver três) e usar livremente as marchas do meio no cassete traseiro.</p>
          <p>Essa combinação intermediária garante que a corrente esteja sempre alinhada e te dá margem para corrigir erros rapidamente, tanto se o terreno subir repentinamente quanto se você pegar um trecho favorável para acelerar.</p>

          <h2>Menos coroas, mais pinhões</h2>
          <p>Se você reparar nas aro 29 mais modernas, vai notar uma mudança incrível no mercado: o abandono do câmbio dianteiro.</p>
          <p>O sistema de coroa única (single chainring) virou o grande queridinho.</p>
          <p>Nessa configuração, você só tem uma engrenagem na frente e um cassete gigante (de 10 a 12 marchas) lá atrás.</p>
          <p>A vantagem prática disso é monumental: você elimina a mão esquerda da equação, a corrente não cai mais com facilidade e a bike fica mais leve.</p>
          <p>É a simplicidade máxima.</p>
          <p>Você apenas sobe ou desce o peso com o polegar direito, focando 100% na trilha e na sua diversão.</p>

          <div className="mt-8 mb-12 p-6 bg-cyan-950/20 border border-cyan-900/50 rounded-2xl shadow-sm not-prose">
            <h3 className="text-xl font-bold text-white mb-2">Quer fazer um upgrade na sua transmissão?</h3>
            <p className="text-zinc-300">
              Se você está pensando em adotar o sistema de coroa única ou apenas quer peças mais precisas, confira o nosso guia com a <a href="/melhor-relacao-para-bike-29" className="text-cyan-400 hover:text-cyan-300 font-bold underline underline-offset-4 decoration-cyan-500/30 hover:decoration-cyan-400 transition-all">Melhor Relação para Bike aro 29</a>, onde o mecânico analisa os modelos que realmente valem o seu dinheiro.
            </p>
          </div>

          <h2>Avançado</h2>
          <p>Chegar ao nível avançado na troca de marchas significa usar o sistema para não perder tração em terrenos agressivos.</p>
          <p>Em uma trilha técnica com lama ou pedras soltas, errar a marcha significa derrapar a roda traseira e ter que colocar o pé no chão.</p>
          <p>O ciclista avançado entende exatamente a hora de transferir o torque suavemente, garantindo que o pneu continue grudado no chão mesmo nas piores condições.</p>

          <h2>Estratégia para Troca de Marchas</h2>
          <p>A estratégia real no pedal é conhecer o seu trajeto e o seu condicionamento.</p>
          <p>Não adianta nada chegar no pé do morro com a marcha pesada, perder o embalo e tentar trocar tudo no susto.</p>
          <p>A melhor estratégia é a antevisão mecânica: posicionar a corrente onde ela precisa estar antes que o terreno cobre a conta do seu pulmão.</p>

          <h2>O giro ideal</h2>
          <p>Existe um mito de que pedalar pesado é sinônimo de pedalar forte.</p>
          <p>Na verdade, ciclistas experientes sabem que o segredo é o "giro".</p>
          <p>A cadência ideal (a velocidade que suas pernas giram) fica entre 70 e 90 rotações por minuto.</p>
          <p>Se você empurra uma marcha muito pesada, suas pernas formam ácido lático muito rápido e você "queima" o músculo.</p>
          <p>Se você escolhe marchas mais leves e mantém a perna girando rápido e solta, você transfere o esforço para o sistema cardiovascular.</p>
          <p>É muito mais fácil recuperar o fôlego do que recuperar uma coxa travada de cãibra.</p>
          <p>Mantenha o giro ágil!</p>

          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/ciclista-mantendo-giro.webp" alt="Ciclista subindo um trecho de terra e demonstrando excelente técnica de giro e cadência." className="w-full max-h-[500px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>

          <h2>Não troque muitas marchas de uma vez</h2>
          <p>Bateu o desespero na subida?</p>
          <p>Jamais martele o trocador cinco vezes de uma vez só.</p>
          <p>Câmbios não foram feitos para engolir saltos extremos de engrenagem em uma fração de segundo (a menos que sejam modelos caríssimos de competição).</p>
          <p>Faça toques graduais.</p>
          <p>Clique, deixe a corrente subir um degrau, clique de novo.</p>
          <p>Quando você força muitas marchas ao mesmo tempo sob pressão, a chance da corrente travar nos raios da roda traseira, entortando a gancheira e encerrando o seu pedal na hora, é altíssima.</p>

          <h2>Troca dupla</h2>
          <p>Existe o momento em que a troca dupla é necessária, como virar uma esquina e dar de cara com uma parede de asfalto.</p>
          <p>Se o seu trocador permitir, você pode pressionar a alavanca de forma mais profunda para pular duas marchas.</p>
          <p>Mas lembre-se da regra de ouro: faça isso com o pé levíssimo no pedal.</p>
          <p>O alívio de força nessa hora precisa ser dobrado para que o salto da corrente não mastigue as engrenagens.</p>

          <h2>Como guiar uma bicicleta com marchas sem números</h2>
          <p>Se a sua aro 29 veio com trocadores modernos e minimalistas, sem aquele visor vermelho marcando os números das marchas, não entre em pânico.</p>
          <p>A ausência de números te força a ser um ciclista melhor, pois você passa a guiar pela sensação.</p>
          <p>O foco vai totalmente para os dedos e para a tensão nas pernas.</p>
          <p>Polegar empurra e pesa; indicador puxa e alivia (ou vice-versa, dependendo da marca do seu câmbio).</p>
          <p>Em menos de uma semana pedalando assim, você vai criar a memória muscular necessária e perceberá que olhar para o número da marcha no guidão era apenas uma distração desnecessária.</p>

          <h2>Dicas e truques para trocar corretamente as marchas da bicicleta</h2>
          <p>A melhor dica prática que posso dar é: escute a sua bicicleta.</p>
          <p>O barulho que a corrente faz ao pular de um dente para o outro diz tudo sobre a sua técnica.</p>
          <p>Um "clique-tec" rápido e suave significa que você acertou o tempo e aliviou a força corretamente.</p>
          <p>Um "craaaack" metálico e barulhento significa que você trocou atrasado e debaixo de muita força.</p>
          <p>Ouça o maquinário.</p>

          <h2>Resumo dos Controles</h2>
          <p>Recapitulando de forma bem prática para você não esquecer mais:</p>
          <p>Mão direita ajusta os detalhes.</p>
          <p>Mão esquerda dita o peso bruto.</p>
          <p>Sempre alivie a força do pé no exato momento do clique.</p>
          <p>Nunca cruze a corrente nos extremos.</p>
          <p>Mantenha as pernas girando leve e rápido, em vez de pesadas e lentas.</p>

          <h3>Dica Prática</h3>
          <p>Antes de sair para fazer um trajeto novo ou mais longo, tire a bicicleta da garagem e dê duas voltas no quarteirão de casa.</p>
          <p>Passe por todas as marchas, da mais pesada à mais leve.</p>
          <p>Escute se não há ruídos no câmbio traseiro e sinta se a corrente raspa na frente.</p>
          <p>Um parafuso levemente desregulado se arruma em dois minutos em casa, mas pode transformar uma trilha de 30 km em um pesadelo de corrente caindo o tempo todo.</p>

          <h2>Conclusão</h2>
          <p>Como sempre digo nas nossas conversas de pedal: o equipamento cuida de você na trilha se você cuidar dele na garagem.</p>
          <p>Testar os componentes não é preciosidade, é garantir a sua segurança e a sua diversão.</p>
          <p>Conhecer a fundo como as marchas da sua aro 29 respondem ao seu toque muda completamente a sua relação com a bicicleta.</p>
          <p>Ajuste os comandos, sinta o ritmo, aplique essas dicas práticas e veja como o seu próximo pedal será incrivelmente mais fluido e prazeroso!</p>

        </div>

        {/* SOBRE O AUTOR */}
        <AuthorLucasAlmeida />

      </article>
    </>
  );
};
