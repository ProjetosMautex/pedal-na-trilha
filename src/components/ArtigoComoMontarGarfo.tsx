import React, { useState } from 'react';
import BunnerDoMeio from './BunnerDoMeio';
import ExitIntentPopup from './ExitIntentPopup';
import { AuthorLucasAlmeida } from './AuthorLucasAlmeida';
import { HelpCircle } from 'lucide-react';

export const ArtigoComoMontarGarfo: React.FC = () => {
  const [simulacao, setSimulacao] = useState<'sim' | 'nao' | null>(null);

  return (
    <>
      <ExitIntentPopup />
      
      {/* Hero Section */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img fetchpriority="high" width="1200" height="800" src="/images/blog/1/como-montar-o-garfo-da-bicicleta-aro-29.webp" 
            alt="Como Montar o Garfo da Bicicleta Aro 29 Passo a Passo Background" 
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Como Montar o Garfo da Bicicleta Aro 29 <br/>
            <span className="text-cyan-400">Passo a Passo</span>
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
          <p>Sabe quando você acorda logo às 07:00 da manhã, pega a bicicleta para se exercitar, e nos primeiros metros de pedal já sente a frente da bike batendo ou estalando?</p>
          <p>Essa sensação de instabilidade costuma ser o primeiro sinal de que a montagem da direção não ficou legal.</p>
          <p>Como ciclista, já passei muito por isso na prática.</p>
          <p>Quando o garfo não está bem ajustado, a sua experiência em cima do selim vai por água abaixo.</p>
          <p>Aprender como montar o garfo da bicicleta aro 29 exige um pouco de paciência e, principalmente, entender como as peças conversam entre si.</p>
          <p>Antes de sair apertando parafusos com força, a gente precisa olhar para a função de cada componente para garantir que a frente da sua bike fique firme e suave ao mesmo tempo.</p>
        </div>

        {/* Simulador de Perfil */}
        <div className="bg-zinc-800/50 p-6 md:p-8 rounded-2xl border border-cyan-900/50 shadow-lg mb-12">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-cyan-500" />
            Você mesmo costuma fazer a manutenção da sua bike?
          </h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="experiencia" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('sim')} />
              <span className="text-zinc-200">Sim, faço tudo em casa.</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="experiencia" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('nao')} />
              <span className="text-zinc-200">Não, prefiro levar no mecânico.</span>
            </label>
          </div>
          
          {simulacao === 'sim' && (
            <div className="mt-4 p-4 bg-emerald-950/30 border border-emerald-900/50 rounded-lg text-emerald-400 text-sm">
              <strong className="block mb-1">Excelente!</strong> Então você já sabe que um bom ajuste começa com as ferramentas certas e muita atenção aos detalhes. Vamos dominar essa montagem!
            </div>
          )}
          {simulacao === 'nao' && (
            <div className="mt-4 p-4 bg-cyan-950/30 border border-cyan-900/50 rounded-lg text-cyan-400 text-sm">
              <strong className="block mb-1">Sem problemas!</strong> Conhecer esse processo vai te ajudar a identificar folgas rapidamente e saber exatamente o que pedir na próxima revisão.
            </div>
          )}
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <h2>Componentes da Caixa de Direção</h2>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/componentes-da-caixa-de-direcao-da-bicicleta-aro-29.webp" alt="Peças de uma caixa de direção de bicicleta desmontadas na bancada" className="w-full max-h-[500px] object-cover rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>Para a sua aro 29 responder rápido nas curvas ou desviar de um buraco em cima da hora, as peças da caixa de direção precisam trabalhar como um relógio.</p>
          <p>O sistema não é só um rolamento solto dentro do quadro; é um conjunto de bacias, anéis de compressão e vedações que evitam a entrada de terra e água.</p>
          <p>Depois de muito tempo pedalando e sujando a mão de graxa, percebi que entender o papel de cada uma dessas peças é o que realmente te ajuda a resolver aqueles problemas de folga crônica.</p>
          <p>Se você negligenciar a ordem ou a limpeza desses componentes, o atrito pode acabar danificando o quadro da sua bike – e o prejuízo para trocar é bem alto.</p>

          <h2>Preparação do Cano do Garfo</h2>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/preparacao-cano-do-garfo-limpeza.webp" alt="Limpeza minuciosa do cano da espiga do garfo da bicicleta com um pano" className="w-full max-h-[500px] object-cover rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>Antes de encaixar qualquer peça, a gente precisa olhar para a espiga do garfo (aquele cano de metal que entra no quadro).</p>
          <p>O estado desse tubo é o que vai ditar se a sua direção vai ficar justa ou se vai começar a bater logo no primeiro passeio.</p>
          <p>Qualquer rebarba, sujeira ou amassado no metal atrapalha o assentamento das peças, gerando folgas que você não consegue tirar de jeito nenhum depois.</p>
          <p>Por isso, gastar uns minutos limpando e conferindo a superfície desse cano é a base para o resto do serviço dar certo, poupando a estrutura de um estresse mecânico que ninguém quer ter na trilha ou no asfalto.</p>

          <BunnerDoMeio />

          <h3>Medição e Corte do Cano</h3>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/medicao-e-corte-do-cano-do-garfo-da-bicicleta.webp" alt="Mecânico cortando a espiga do garfo de bicicleta com uma serra manual" className="w-full max-h-[500px] object-cover rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>Na oficina e no uso diário, a gente aprende que o tamanho exato da espiga é o grande segredo da montagem.</p>
          <p>Antes de passar a serra e cortar o cano definitivamente, monte tudo "de mentirinha": coloque o garfo, os rolamentos, a mesa e os espaçadores.</p>
          <p>O truque prático aqui é que o topo do cano precisa ficar entre 3 a 5 milímetros abaixo da borda de cima da mesa.</p>

          <p>Se sobrou pouca coisa para cima, o melhor é usar um espaçador a mais em vez de cortar.</p>
          <p>Isso salva a geometria da bike se você quiser levantar a altura do guidão no futuro.</p>
          <p>Mas, caso o corte seja mesmo necessário, marque com muita precisão e use uma guia para a serra não entortar.</p>
          <p>Se cortar curto demais, você perde o garfo inteiro, então sempre prefira pecar pelo excesso e ajustar com calma.</p>

          <h3>Posicionamento do Cano</h3>
          <p>Como falei no tópico anterior, esse recuo de 3 mm a 5 mm é a diferença exata entre uma bike que te passa confiança e uma que parece que vai desmontar.</p>
          <p>Quando você coloca a tampa por cima, ela precisa apoiar nas bordas da mesa, para que o parafuso puxe a aranha lá de dentro e esmague o sistema contra o quadro.</p>
          <p>Se o cano do garfo estiver reto com a mesa ou passando dela, a tampa vai encostar direto no metal do cano.</p>
          <p>O resultado prático?</p>
          <p>Você aperta o parafuso até suar, acha que ficou bom, mas os rolamentos continuam soltos lá embaixo.</p>
          <p>Nos primeiros buracos, a folga aparece e o susto é garantido.</p>

          <h2>Instalação da Aranha no Tubo</h2>
          <p>A aranha (ou bucha estrela) é aquela peça cheia de garras que vai cravada dentro do cano do garfo.</p>
          <p>Ela funciona como a âncora que segura toda a compressão do sistema.</p>
          <p>A instalação dela exige um baita capricho, porque se ela entrar torta, todo o seu ajuste fino da direção vai para o espaço.</p>
          <p>Para garantir que ela não suba quando você der o aperto final na tampa, é preciso usar a técnica certa para que a peça fique inserida de forma totalmente estável.</p>

          <h3>Características Importantes da Aranha</h3>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/caracteristicas-importantes-da-aranha.webp" alt="Detalhe macro de uma bucha estrela (aranha) de direção de bicicleta" className="w-full max-h-[500px] object-cover rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>No mercado, sempre prefira comprar e usar as aranhas de camada dupla.</p>
          <p>Pela minha experiência prática, elas são as únicas que garantem que a rosca central fique bem reta em relação ao cano.</p>
          <p>Se a rosca ficar descentralizada, o parafuso da tampa vai entrar enviesado, e você nunca consegue tirar a folga direito, gerando vibrações chatas no guidão.</p>

          <p>O ideal é que essa aranha desça mais ou menos 1 centímetro (ou uns 10 milímetros) para dentro da borda do tubo.</p>
          <p>Esse espaço é a conta certa para o parafuso alcançar a rosca com sobra e conseguir puxar o garfo com segurança.</p>
          <p>Durante as batidas, fique sempre de olho para que ela não incline.</p>

          <h3>Procedimento para Inserção</h3>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/procedimento-de-insercao-da-aranha-no-tubo-do-garfo-da-bicicleta.webp" alt="Mecânico utilizando ferramenta adequada e martelo de borracha para inserir a aranha no garfo" className="w-full max-h-[500px] object-cover rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>Bater a aranha de qualquer jeito e com qualquer ferramenta é pedir para inutilizar a peça.</p>
          <p>O segredo principal é a estabilidade.</p>
          <p>Coloque a parte de baixo do garfo apoiada sobre um toco de madeira no chão para não arranhar as canelas da suspensão.</p>
          <p>Posicione a aranha bem no centro da boca do tubo.</p>

          <p>Utilize uma ferramenta instaladora própria para isso (ou um soquete de chave de boca na medida exata do miolo) para distribuir a força.</p>
          <p>Usando um martelo de borracha ou de nylon, dê pancadas secas, firmes e contínuas.</p>
          <p>Esse cuidado evita que ela entre torta ou estrague as roscas de dentro, mantendo a bucha firme e alinhada no alumínio.</p>

          <h3>Conclusão da Instalação</h3>
          <p>Depois de bater, olhe lá dentro do tubo com uma lanterna e confira: a aranha está retinha?</p>
          <p>Está numa profundidade entre 5 mm e 8 mm (ou até 1 cm) abaixo do topo?</p>
          <p>Se sim, a base está ancorada perfeitamente e vai aguentar os trancos do terreno sem ceder.</p>

          <p>Aproveite esse momento para virar o garfo de cabeça para baixo e dar umas batidinhas leves para cair qualquer limalha de ferro que tenha soltado do cano durante a instalação.</p>
          <p>Com o sistema limpo, a base está pronta para receber a graxa e os rolamentos com toda a precisão e segurança que você precisa.</p>

          <h2>Montagem da Caixa de Direção</h2>
          <p>Chegou a hora de juntar as peças no quadro, e aqui a regra principal é: ambiente limpo e método.</p>
          <p>A suavidade com que o guidão vai virar depende diretamente da saúde desses rolamentos.</p>
          <p>O sucesso aqui não exige força bruta nenhuma, apenas a ordem correta das peças.</p>
          <p>Seguindo esse protocolo passo a passo, você garante que a frente da bicicleta aguente poeira e buracos rodando lisa, do jeito que tem que ser.</p>

          <h3>Aplicação de Graxa</h3>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/aplicacao-de-graxa-rolamentos-direcao.webp" alt="Aplicação manual de graxa nos rolamentos da direção da bicicleta" className="w-full max-h-[500px] object-cover rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>Graxa não é só perfumaria na mecânica da bike, é o segredo para uma direção que não faz barulho.</p>
          <p>Use uma graxa boa, específica para rolamentos e resistente à água.</p>
          <p>Eu costumo passar uma camada bem fina e uniforme nas pistas do quadro e na base da espiga do garfo, bem onde o rolamento vai encostar.</p>

          <p>Mas muita atenção: não exagere!</p>
          <p>Graxa sobrando pelo quadro vira um ímã perfeito para atrair areia e poeira da rua, formando uma "lixa" que destrói o metal rapidinho.</p>
          <p>Depois de colocar as peças, passe um pano limpo para tirar qualquer vestígio de graxa que tenha transbordado para fora.</p>

          <h3>Inserção dos Componentes</h3>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/insercao-correta-dos-rolamentos-e-aneis-na-montagem-do-garfo.webp" alt="Inserindo o garfo no quadro da bicicleta com os rolamentos de direção perfeitamente visíveis" className="w-full max-h-[500px] object-cover rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>O segredo nessa etapa é o encaixe natural das peças.</p>
          <p>Comece colocando o rolamento de baixo na espiga do garfo (com a parte chanfrada ou cônica virada para cima, de encontro ao quadro).</p>
          <p>Suba o garfo devagar por dentro do quadro.</p>
          <p>Segurando ele por baixo com uma mão, coloque por cima o rolamento superior, depois o anel de vedação (aquela capinha contra sujeira) e, por fim, o anel de compressão (uma argola aberta que centraliza tudo).</p>

          <p>Não force nada.</p>
          <p>Se alguma peça estiver enroscando para entrar, tire e coloque de novo mantendo o tubo sempre bem reto.</p>
          <p>Quando tudo desliza e alinha perfeitamente, você acaba de montar a fundação correta para uma pilotagem sem dores de cabeça.</p>

          <h3>Ajuste dos Espaçadores</h3>
          <p>Com as peças acomodadas, vamos empilhar os espaçadores e a mesa.</p>
          <p>Lembra daquela medida essencial lá do começo?</p>
          <p>É aqui que ela entra em ação.</p>
          <p>Arrume os espaçadores de modo que o topo do cano da espiga fique de 3 mm a 5 mm escondido para baixo da borda superior da mesa.</p>

          <p>Se o cano ficou rente à borda ou passando dela, a tampa da direção não vai conseguir tensionar o sistema.</p>
          <p>Tire um espaçador maior e coloque um menorzinho para criar esse "vão".</p>
          <p>É exatamente esse pequeno espaço que permite que a tampa exerça pressão para baixo, eliminando os riscos de folga na primeira ladeira que você descer.</p>

          <h2>Aperto e Ajuste Final da Caixa de Direção</h2>
          <p>É agora que damos o toque final.</p>
          <p>Nosso grande objetivo aqui é achar aquele ponto de equilíbrio mágico: tirar toda a folga das peças, mas sem prender o giro do guidão.</p>
          <p>Chamamos isso de ajuste de pré-carga.</p>
          <p>Fazer esse aperto do jeito certo requer um pouco de sensibilidade e é o que diferencia quem realmente conhece a própria bike de quem vive parando em oficina à toa.</p>

          <h3>Processo de Aperto</h3>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/ajuste-e-aperto-final-da-caixa-de-direcao-da-bicicleta.webp" alt="Mecânico utilizando chave Allen para o ajuste e aperto final da tampa da caixa de direção" className="w-full max-h-[500px] object-cover rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>Primeira regra de ouro: os parafusos laterais da mesa precisam estar totalmente SOLTOS.</p>
          <p>Com a mesa frouxa, coloque a tampa de cima e comece a girar o parafuso central com a chave Allen.</p>
          <p>Vá aplicando a força bem devagar, em pequenos toques.</p>
          <p>O objetivo não é travar o parafuso até sair água.</p>

          <p>A cada voltinha, levante a roda da frente e gire o guidão.</p>
          <p>Ele tem que continuar virando soltinho.</p>
          <p>Sentiu que a direção ficou "pesada" ou arrastando?</p>
          <p>Você apertou demais e está esmagando as esferas.</p>
          <p>Achou o ponto em que o guidão vira livre mas não tem peças soltas?</p>
          <p>Pare!</p>
          <p>Só depois disso é que você vai apertar os parafusos laterais da mesa, alternando a força entre eles para prender tudo de forma igual.</p>

          <h3>Verificação do Ajuste</h3>
          <p>Com os parafusos apertados, hora do teste de fogo que todo ciclista faz: coloque a bike no chão, aperte a manete do freio dianteiro com muita força e empurre a bicicleta para frente e para trás.</p>
          <p>Coloque a mão bem na junção do quadro com o garfo.</p>

          <p>Se você sentir um "tec-tec" ou as peças se movendo, a pré-carga foi pouca.</p>
          <p>Solte os parafusos da mesa novamente e dê mais um toquinho no parafuso da tampa.</p>
          <p>Se não fizer barulho nenhum, levante a roda da frente e deixe o guidão cair para um dos lados sozinho.</p>
          <p>Se ele não cair, a tampa está apertada demais.</p>
          <p>Esse ajuste de sintonia fina exige paciência, mas é fundamental.</p>

          <h2>Considerações Finais</h2>
          <p>Perder o medo de mexer na montagem do garfo da sua aro 29 muda completamente a forma como você enxerga a bicicleta.</p>
          <p>Quando você mesmo ajusta e garante que cada peça da direção está conectada com precisão, a confiança para encarar trilhas, descidas ou o simples asfalto do dia a dia é outra.</p>
          <p>Lembre-se sempre que um sistema bem ajustado evita gastos absurdos com a troca do quadro por conta de atrito incorreto.</p>
          <p>Conhecer a mecânica da sua parceira de duas rodas melhora a sua experiência no pedal de um jeito que nenhum catálogo de peças consegue explicar.</p>

          <h3>Dica Prática</h3>
          <p>Antes de sair de casa para o primeiro giro de teste, pegue uma caneta permanente e faça um pequeno risco unindo a lateral da tampa de direção com a lateral da mesa.</p>
          <p>Esse risquinho funciona como o seu "dedo-duro".</p>
          <p>Se depois de alguns quilômetros a marcação estiver desencontrada, significa que o sistema cedeu e a direção perdeu o aperto.</p>
          <p>É um hábito visual super simples e rápido, mas que te salva de andar com a bike frouxa sem perceber.</p>

        </div>

        {/* SOBRE O AUTOR */}
        <AuthorLucasAlmeida />

      </article>
    </>
  );
};
