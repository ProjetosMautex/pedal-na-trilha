import React, { useState } from 'react';
import BunnerDoMeio from './BunnerDoMeio';
import ExitIntentPopup from './ExitIntentPopup';
import { AuthorLucasAlmeida } from './AuthorLucasAlmeida';
import { HelpCircle } from 'lucide-react';

export const ArtigoComoDestravarAmortecedor: React.FC = () => {
  const [simulacao, setSimulacao] = useState<'travou' | 'rigido' | null>(null);

  return (
    <>
      <ExitIntentPopup />
      
      {/* Hero Section */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img fetchpriority="high" width="1200" height="800" src="/images/blog/1/como-destravar-amortecedor-de-bicicleta-aro-29.webp" 
            alt="Como Destravar Amortecedor de Bicicleta Aro 29 em Casa Background" 
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Como Destravar Amortecedor de Bicicleta Aro 29 <br/>
            <span className="text-cyan-400">em Casa</span>
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
          <p>Sentir a suspensão rígida e batendo seco durante uma pedalada pode transformar um trajeto que deveria ser prazeroso em uma experiência extremamente desconfortável e desgastante para os seus braços.</p>
          <p>Na prática, o que deveria absorver os impactos das pedras e buracos torna-se um componente inerte, afetando diretamente a sua performance, o seu conforto e o controle da sua bicicleta aro 29 em terrenos irregulares.</p>
          <p>Frequentemente, essa perda de funcionalidade não acontece do dia para a noite; ela surge silenciosamente, escondida atrás de pequenos sinais que passam despercebidos no dia a dia, até que o sistema trave completamente.</p>
          <p>Entender como destravar o amortecedor da sua bicicleta em casa é um conhecimento prático fundamental para manter a eficiência da sua condução e evitar que problemas simples de resolver se tornem danos permanentes que vão pesar no seu bolso.</p>
          <p>A base para retomar o funcionamento macio e adequado começa pelo reconhecimento da causa raiz desse bloqueio no garfo.</p>
        </div>

        {/* Simulador de Perfil */}
        <div className="bg-zinc-800/50 p-6 md:p-8 rounded-2xl border border-cyan-900/50 shadow-lg mb-12">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-cyan-500" />
            Qual a situação atual do seu amortecedor?
          </h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="situacao" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('travou')} />
              <span className="text-zinc-200">Travou completamente, não desce nada.</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="situacao" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('rigido')} />
              <span className="text-zinc-200">Está muito rígido e batendo seco.</span>
            </label>
          </div>
          
          {simulacao === 'travou' && (
            <div className="mt-4 p-4 bg-red-950/30 border border-red-900/50 rounded-lg text-red-400 text-sm">
              <strong className="block mb-1">Atenção!</strong> Se travou completamente, pode haver oxidação avançada nas hastes ou calço hidráulico. Prepare suas ferramentas para uma desmontagem cautelosa, e nunca force o componente sem abri-lo antes.
            </div>
          )}
          {simulacao === 'rigido' && (
            <div className="mt-4 p-4 bg-cyan-950/30 border border-cyan-900/50 rounded-lg text-cyan-400 text-sm">
              <strong className="block mb-1">Ainda tem salvação!</strong> Esse é o clássico sinal de falta de lubrificação e acúmulo de poeira nos retentores. Uma boa limpeza e a graxa correta vão trazer a maciez de volta.
            </div>
          )}
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <h2>Travamento por Falta de Lubrificação</h2>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/suspensao-bicicleta-aro-29-sujeira-falta-lubrificacao.webp" alt="Suspensão de bicicleta aro 29 travada com sinais visíveis de sujeira excessiva e falta de lubrificação nas hastes" className="w-full max-h-[500px] object-cover rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>Depois de muitos quilômetros rodando, a falta de lubrificação desponta como o principal motivo pelo qual os sistemas de amortecimento perdem sua funcionalidade e tornam-se rígidos.</p>
          <p>A degradação da graxa ou do óleo interno, somada ao acúmulo de contaminantes externos como poeira, lama e água da chuva, cria uma barreira abrasiva invisível que impede o curso natural das hastes.</p>
          <p>Compreender a natureza do seu equipamento e como ele interage com o ambiente das suas trilhas e estradões é o passo fundamental para diagnosticar se a rigidez que você está sentindo é um problema totalmente reversível com uma manutenção básica, ou se é um reflexo das características construtivas de uma suspensão que já chegou ao seu limite.</p>

          <h3>Conhecendo a Suspensão</h3>
          <p>Antes de empunhar qualquer chave ou martelo, é preciso identificar o "DNA" do seu componente, pois cada garfo reage de um jeito.</p>
          <p>A grande maioria das suspensões básicas e de entrada que equipam as bicicletas aro 29 utiliza hastes de aço mais simples e travas plásticas na parte superior, o que facilita bastante o acesso aos parafusos internos com ferramentas comuns.</p>
          <p>No entanto, se você usa modelos intermediários ou voltados para performance, eles já incorporam coroas de alumínio e vedações muito mais complexas (como retentores de mola e cartuchos selados) que exigem chaves específicas, como as entalhadas e soquetes sob medida.</p>
          <p>Tentar forçar a abertura sem conhecer a arquitetura do seu garfo é o caminho mais curto para espanar roscas de alumínio ou rasgar vedações sensíveis.</p>
          <p>Avalie com calma se o seu equipamento permite intervenções caseiras simples ou se ele demanda ferramentas de precisão.</p>
          <p>O diagnóstico correto e honesto evita que uma manutenção de fim de semana na sua garagem se transforme em uma despesa pesada e inesperada na oficina.</p>

          <BunnerDoMeio />

          <h2>Como Destravar a Suspensão</h2>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/ferramentas-manutencao-suspensao-destravamento.webp" alt="Kit completo de ferramentas adequadas para manutenção de suspensão e destravamento, incluindo chaves allen, martelo de borracha e lubrificantes" className="w-full max-h-[500px] object-cover rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>No desespero de um garfo duro, é muito comum que ciclistas busquem soluções mágicas e rápidas na tentativa de recuperar o movimento da suspensão, mas já te adianto que nem todo método é recomendado.</p>
          <p>O uso de agentes químicos superficiais, como borrifar desengripantes (o famoso WD-40) direto nas hastes, muitas vezes esconde riscos operacionais graves.</p>
          <p>Esses sprays podem ressecar as borrachas de vedação, atrair ainda mais poeira para dentro do sistema e, no pior dos casos, escorrer e contaminar as pastilhas do seu freio a disco.</p>
          <p>Para realizar um destravamento seguro, definitivo e duradouro, é preciso discernir entre esses paliativos temporários que estragam a bike a longo prazo e os procedimentos mecânicos que de fato asseguram a integridade do seu equipamento.</p>

          <h2>Desmontagem e Lubrificação Correta</h2>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/processo-abertura-lubrificacao-interna-hastes-suspensao.webp" alt="Processo detalhado de abertura e lubrificação interna das hastes da suspensão de uma bicicleta aro 29" className="w-full max-h-[500px] object-cover rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>Quando a rigidez se torna um obstáculo recorrente em todo pedal, a única forma de restabelecer o desempenho e a maciez original é através de uma intervenção direta na arquitetura interna do garfo.</p>
          <p>Esse processo exige método, limpeza e atenção aos detalhes, indo muito além de passar um pano por fora.</p>
          <p>Ao abrir o conjunto das canelas (a parte inferior da suspensão), torna-se possível avaliar o estado real das hastes e buchas, permitindo aplicar os cuidados e lubrificantes corretos para reverter o atrito severo e devolver aquela fluidez esperada para os seus próximos trajetos na terra.</p>

          <h3>Passo a Passo da Desmontagem</h3>
          <p>Inicie soltando os parafusos inferiores que ficam embaixo da canela da suspensão usando uma chave Allen adequada.</p>
          <p>Se a sua suspensão usar óleo, tenha um recipiente pronto para garantir que o fluido antigo drene completamente.</p>
          <p>Caso o garfo esteja travado totalmente encolhido, a tensão da mola interna estará alta; nesse caso, solte os parafusos apenas até a metade e utilize um martelo de borracha (nunca de metal) para liberar as hastes dos encaixes internos com batidas precisas e leves, evitando deformar a rosca.</p>
          <p>Assim que o conjunto se separar e você puxar a canela para baixo, inspecione a presença de resíduos metálicos, água ou lama acumulada.</p>
          <p>A limpeza rigorosa das hastes e do interior das canelas com um pano limpo que não solte fiapos é indispensável.</p>
          <p>Se você notar ranhuras profundas e desgaste no banho de cromo do metal, saiba que a vedação do sistema já pode estar comprometida, exigindo atenção dobrada na aplicação da graxa (use sempre graxa livre de lítio, como as de teflon ou silicone) durante a remontagem para assegurar que a suspensão volte a trabalhar com o mínimo de suavidade.</p>

          <h3>Avaliando os Componentes Internos</h3>
          <p>Ao abrir o conjunto e limpar as peças, observe a qualidade do material com o qual você está lidando.</p>
          <p>Em modelos de entrada aro 29, é extremamente comum encontrar buchas de plástico rígido no lugar de anéis de teflon, além da ausência de retentores com mola, que são os verdadeiros responsáveis por impedir a entrada de sujeira.</p>
          <p>Frequentemente, esses garfos mais simples já saem de fábrica trabalhando quase secos, sublubrificados, o que acelera o travamento precoce em poucas semanas de uso.</p>
          <p>Identificar essas fragilidades de construção ajuda a alinhar suas expectativas e a definir se a manutenção trará uma longevidade real para a peça ou se será apenas um alívio temporário para o sistema rodar mais alguns finais de semana.</p>

          <h2>Montagem e Considerações Finais</h2>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/suspensao-remontada-pronta-limpa-uso-bicicleta.webp" alt="Suspensão aro 29 completamente limpa, lubrificada e remontada, pronta para o uso nas trilhas" className="w-full max-h-[500px] object-cover rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>Finalizar a manutenção exige tanto rigor e paciência quanto a etapa de desmontagem.</p>
          <p>O objetivo aqui é garantir que todos os elementos internos estejam bem lubrificados, protegidos e operando em harmonia antes de você ir para a trilha.</p>
          <p>Uma montagem técnica cuidadosa não apenas consolida o reparo que você acabou de realizar, mas também serve como base para você sentir o funcionamento da bicicleta e avaliar a viabilidade de longo prazo do seu componente.</p>
          <p>A partir do momento em que você apertar o último parafuso e bombear a suspensão com o peso do corpo, será possível definir se os cuidados aplicados atendem às exigências do seu pedal diário ou se a arquitetura básica do seu equipamento atual impõe limitações físicas que já pedem um upgrade para o seu estilo de ciclismo.</p>

          <h3>Dica Prática</h3>
          <p>Se o travamento for um problema recorrente, exigir manutenção constante e o custo financeiro e de tempo inviabilizar o uso, migrar para um garfo rígido de alumínio ou carbono é a escolha inteligente: você ganha muita leveza na dianteira, elimina gastos futuros com graxas e mecânicos, e garante pedaladas incrivelmente ágeis e impecáveis, principalmente no asfalto e estradões.</p>

          <div className="mt-12 p-6 bg-cyan-950/20 border border-cyan-900/50 rounded-2xl shadow-sm not-prose">
            <h3 className="text-xl font-bold text-white mb-2">Pensando em fazer um upgrade?</h3>
            <p className="text-zinc-300">
              Se o seu garfo já passou do ponto de manutenção ou você quer subir o nível do seu equipamento, não deixe de conferir o nosso guia com a <a href="/melhor-suspensao-para-bike-aro-29" className="text-cyan-400 hover:text-cyan-300 font-bold underline underline-offset-4 decoration-cyan-500/30 hover:decoration-cyan-400 transition-all">melhor suspensão para bike aro 29</a> do mercado atual.
            </p>
          </div>
        </div>

        {/* SOBRE O AUTOR */}
        <AuthorLucasAlmeida />

      </article>
    </>
  );
};
