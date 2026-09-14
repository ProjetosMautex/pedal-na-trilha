import React, { useState } from 'react';
import BunnerDoMeio from './BunnerDoMeio';
import ExitIntentPopup from './ExitIntentPopup';
import { AuthorLucasAlmeida } from './AuthorLucasAlmeida';
import { HelpCircle } from 'lucide-react';

export const ArtigoComoColocarCorrente: React.FC = () => {
  const [simulacao, setSimulacao] = useState<'sim' | 'nao' | null>(null);

  return (
    <>
      <ExitIntentPopup />
      
      {/* Hero Section */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img fetchpriority="high" width="1200" height="800" src="/images/blog/1/como-colocar-corrente-em-bike-aro-29.webp" 
            alt="Como Colocar Corrente em Bike Aro 29 Background" 
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Como Colocar Corrente em Bike Aro 29 <br/>
            <span className="text-cyan-400">(Passo a Passo Fácil)</span>
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
          <p>Saber como colocar corrente em bike aro 29 é daquelas habilidades que separam quem fica a pé na trilha de quem resolve o problema e continua o pedal.</p>
          <p>Todo mundo que roda de verdade já passou por isso: você está no meio de uma subida, faz força e, de repente, a corrente salta ou quebra.</p>
          <p>Ficar dependendo de mecânico para uma troca básica tira a sua liberdade.</p>
          <p>Lidar com a transmissão da bike pode parecer complicado de primeira, mas entendendo a lógica de como as peças trabalham juntas, o bicho de sete cabeças some.</p>
          <p>Dominar essa manutenção simples te dá muito mais confiança para ir mais longe com sua aro 29, garantindo que nenhum imprevisto bobo acabe com o seu fim de semana.</p>
        </div>

        {/* Simulador de Perfil */}
        <div className="bg-zinc-800/50 p-6 md:p-8 rounded-2xl border border-cyan-900/50 shadow-lg mb-12">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-cyan-500" />
            Você já precisou trocar a corrente da sua bike por conta própria?
          </h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('sim')} />
              <span className="text-zinc-200">Sim, já fiz isso</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('nao')} />
              <span className="text-zinc-200">Não, sempre levo na oficina</span>
            </label>
          </div>
          
          {simulacao === 'sim' && (
            <div className="mt-4 p-4 bg-emerald-950/30 border border-emerald-900/50 rounded-lg text-emerald-400 text-sm">
              <strong className="block mb-1">Dica do mecânico:</strong> Ótimo! Como você já tem experiência, fique atento aos detalhes de passagem pelas roldanas para evitar desgastes prematuros.
            </div>
          )}
          {simulacao === 'nao' && (
            <div className="mt-4 p-4 bg-cyan-950/30 border border-cyan-900/50 rounded-lg text-cyan-400 text-sm">
              <strong className="block mb-1">Dica do mecânico:</strong> Não se preocupe! Com as ferramentas certas e o passo a passo abaixo, você vai perceber que é um processo muito mais simples do que parece.
            </div>
          )}
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <h2>Ferramentas e Materiais Necessários</h2>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/ferramentas-trocar-corrente.webp" alt="Ferramentas para trocar corrente de bicicleta, incluindo alicate de power link, chave de corrente, pano e lubrificante." className="w-full max-h-[500px] object-cover rounded-2xl shadow-xl border border-zinc-700 p-1" />
          </div>
          <p>Para fazer esse serviço direito e não estragar peças caras da sua relação, você não precisa de uma oficina completa, mas as ferramentas certas são inegociáveis.</p>
          <p>O astro principal aqui é o alicate de elo rápido (ou alicate de power link), que abre e fecha a trava da corrente sem esforço.</p>
          <p>Se a sua corrente ainda usa aquele pino tradicional de emenda, você vai precisar obrigatoriamente de uma chave de corrente (extrator de pino) para não entortar as chapas do elo.</p>
          <p>Minha dica de ouro de quem já sujou muita mão de graxa: tenha um pano limpo por perto e, se possível, luvas.</p>
          <p>Esqueça a ideia de improvisar com martelo ou alicate de bico na beira da estrada.</p>
          <p>Bater na corrente danifica a estrutura do metal e é certeza de que ela vai arrebentar de novo quando você fizer força numa ladeira.</p>

          <h2>Passo a Passo para Colocar a Corrente da Bicicleta</h2>
          <p>Colocar a corrente nova exige um pouco de paciência para o sistema fluir lisinho, sem aqueles ruídos chatos de metal raspando.</p>
          <p>Antes de sujar as mãos, facilite a sua vida: coloque a aro 29 em um suporte de manutenção ou, se estiver no meio do mato, vire a bike de cabeça para baixo apoiada no selim e guidão.</p>
          <p>Esse processo é basicamente um caminho lógico que a corrente precisa fazer.</p>
          <p>O maior erro de quem tenta fazer isso com pressa é passar a peça pelo lugar errado no câmbio ou esquecer o lado certo da corrente, o que transforma a sua pedalada num pesadelo de marchas travando.</p>
          <p>Siga as etapas abaixo com calma.</p>
          <p>Uma instalação bem feita é o que garante que a sua bike entregue toda a maciez e precisão de fábrica.</p>

          <h3>1. Entendendo a Corrente e o Sentido de Rotação</h3>
          <p>Muita gente apanha da bike porque não sabe de um detalhe muito importante na oficina: grande parte das correntes modernas tem lado e sentido certo para rodar.</p>
          <p>Pegue a corrente nova e olhe para as laterais dela.</p>
          <p>Na maioria das marcas, como a Shimano, você vai ver que um lado tem as letras gravadas, e o outro é totalmente liso.</p>
          <p>Esse lado com as letras deve obrigatoriamente ficar virado para fora, olhando para você.</p>
          <p>Se você montar invertido, a corrente não vai conseguir "escalar" os dentes direito.</p>
          <p>O sistema perde a fluidez, a marcha fica "pensando" para entrar e o desgaste acelera muito.</p>
          <p>Montar no sentido certo garante aquele clique preciso e silencioso no guidão.</p>
          
          <BunnerDoMeio />

          <h3>2. Como Medir o Tamanho Correto da Corrente para Aro 29</h3>
          <p>Uma corrente muito frouxa vai chicotear no quadro e cair o tempo todo no asfalto esburacado; uma corrente muito curta vai arrancar seu câmbio traseiro na primeira ladeira.</p>
          <p>Para achar a medida perfeita, faça o seguinte: passe a corrente na maior engrenagem lá atrás e na maior na frente, mas sem passar por dentro do câmbio traseiro.</p>
          <p>Fechou o círculo esticado? Adicione mais dois elos (um par) a essa medida.</p>
          <p>Atenção redobrada se a sua aro 29 for full suspension (com amortecedor no quadro): você precisa esvaziar o amortecedor para comprimir a balança ao máximo antes de medir, senão a corrente vai estourar quando você pular um obstáculo.</p>
          <p>Depois de medir, use a chave de corrente para cortar o que sobrou.</p>

          <h3>3. Passagem da Corrente pelo Câmbio Dianteiro (Se houver)</h3>
          <p>Se a sua bicicleta ainda usa marchas na frente, essa etapa pede muita atenção para a corrente não ficar raspando no cage (a guia de metal do câmbio).</p>
          <p>Você precisa passar a ponta da corrente exatamente pelo vão interno dessa guia antes de puxá-la para trás.</p>
          <p>O erro clássico de quem faz isso pela primeira vez é deixar a corrente passando por fora ou por cima de uma chapinha de travamento que alguns câmbios têm no meio.</p>
          <p>O resultado é um barulho insuportável de metal com metal.</p>
          <p>Se ao girar o pedivela com a mão você sentir a corrente enroscando, pare e ajuste.</p>
          <p>Ela precisa rodar totalmente livre por dentro da guia.</p>

          <h3>4. Posicionamento da Corrente no Câmbio Traseiro (Roldanas)</h3>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/passar-corrente-cambio-traseiro.webp" alt="Corrente corretamente passada pelas roldanas do câmbio traseiro de uma mountain bike." className="w-full max-h-[500px] object-cover rounded-2xl shadow-xl border border-zinc-700 p-1" />
          </div>
          <p>Aqui chegamos no ponto onde a maioria dos iniciantes erra.</p>
          <p>Você vai passar a corrente pelas roldanas (aquelas rodinhas pretas) do câmbio traseiro.</p>
          <p>O segredo é o caminho: a corrente entra pela frente da rodinha de cima, desce e passa por trás da rodinha de baixo.</p>
          <p>Mas muito cuidado: entre essas duas rodinhas, no braço do câmbio, existe uma pequena aba metálica divisória.</p>
          <p>Você não pode deixar a corrente passar por cima dela!</p>
          <p>Se fizer isso, a corrente vai ficar serrando a peça durante o pedal, fazendo um ruído horrível e travando o giro.</p>
          <p>Certifique-se de que a corrente passa livre pelo vão e encaixa perfeitamente nos dentes das roldanas.</p>

          <h3>5. Ajuste e Fixação da Corrente (Usando Power Link ou Pino)</h3>
          <p>Com a corrente passada no lugar certo, é hora de fechar a transmissão.</p>
          <p>Hoje em dia, usamos muito o power link (elo rápido).</p>
          <p>É super prático: você junta as pontas da corrente com as metades do link na parte de cima da relação, segura o freio traseiro e pisa no pedal com vontade.</p>
          <p>Você vai ouvir um estalo seco avisando que travou.</p>
          <p>Se a sua usar pino de emenda, empurre o pino novo com a chave de corrente até ele ficar alinhado.</p>
          <p>O perigo aqui é deixar o elo esmagado, criando um "elo duro" que vai pular toda vez que passar pelo câmbio.</p>
          <p>Se a emenda ficar rígida, dê uma torcida leve na corrente para os lados com a mão para soltar a articulação.</p>

          <h3>6. Acabamento Final e Lubrificação</h3>
          <p>A corrente está fechada e girando? Ótimo, mas calma antes de ir pro asfalto.</p>
          <p>Corrente nova vem com uma graxa de fábrica muito grudenta, que atrai terra igual ímã.</p>
          <p>O ideal é dar uma limpada superficial e aplicar o seu lubrificante de costume (seco ou úmido).</p>
          <p>A regra de ouro é aplicar gota a gota, bem no meio dos roletes de cada elo, enquanto gira o pedal para trás.</p>
          <p>Nada de encharcar a corrente achando que mais óleo é melhor!</p>
          <p>Deixe agir um pouco e, com o pano limpo, seque totalmente o excesso da parte de fora.</p>
          <p>Corrente melada por fora só serve para grudar sujeira, virar uma lixa e destruir as engrenagens em poucos meses.</p>

          <h2>Verificação da Instalação e Teste de Marchas</h2>
          <p>Antes de colocar o capacete, garanta que o serviço ficou 100%.</p>
          <p>Com a bike ainda apoiada no suporte, gire o pedivela suavemente com a mão e vá trocando as marchas.</p>
          <p>Suba até a engrenagem mais leve e desça até a mais pesada.</p>
          <p>Observe se a corrente está pulando algum dente ou fazendo barulhos estranhos.</p>
          <p>Se o sistema hesitar para trocar de marcha, pode ser necessário um micro ajuste de tensão no cabo do câmbio.</p>
          <p>Preste atenção para ver se a emenda passa lisa pelas roldanas.</p>
          <p>Quando tudo rodar macio e sem engasgos sob baixa carga, é o sinal verde de que a transmissão da sua aro 29 está perfeita e segura para a trilha.</p>

          <h2>Dicas Práticas para Aumentar a Vida Útil da Relação</h2>
          <p>Na prática, manter a relação da bike em dia é a melhor forma de não rasgar dinheiro.</p>
          <p>Uma corrente gasta (elastecida) começa a comer o formato dos dentes do seu cassete e das coroas.</p>
          <p>Quando você for notar, vai precisar trocar a relação inteira, o que pesa muito no bolso.</p>
          <p>Se você está pensando em fazer um upgrade completo, não deixe de conferir nosso guia sobre a <a href="/melhor-relacao-para-bike-29" className="text-cyan-400 hover:text-cyan-300 font-bold underline underline-offset-4 decoration-cyan-500/30 hover:decoration-cyan-400 transition-all">melhor relação para bike aro 29</a>.</p>
          <p>O grande segredo é ter uma chavinha medidora de desgaste e conferir a folga da corrente mensalmente.</p>
          <p>Lavar a relação frequentemente também é vital; pedalar com areia triturando o sistema destrói a bike.</p>
          <p>Cuidar preventivamente desses componentes transforma a sua experiência de pedal.</p>
          <p>Com a corrente bem instalada e lubrificada, sua bicicleta responde na hora, entregando máxima performance quilômetro após quilômetro.</p>
        </div>

        {/* SOBRE O AUTOR */}
        <AuthorLucasAlmeida />

      </article>
    </>
  );
};
