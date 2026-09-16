import React, { useState } from 'react';
import BunnerDoMeio from './BunnerDoMeio';
import ExitIntentPopup from './ExitIntentPopup';
import { AuthorRafaelMartins } from './AuthorRafaelMartins';
import { HelpCircle } from 'lucide-react';

export const ArtigoComoRebaixarASuspensao: React.FC = () => {
  const [simulacao, setSimulacao] = useState<'sim' | 'nao' | null>(null);

  return (
    <>
      <ExitIntentPopup />
      
      {/* Hero Section */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img fetchpriority="high" width="1200" height="800" src="/images/blog/1/como-rebaixar-a-suspensao-da-bike-aro-29.webp" 
            alt="Como Rebaixar a Suspensão da Bike Aro 29 em 3 Passos Seguros Background" 
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Como Rebaixar a Suspensão da Bike Aro 29 em <br/>
            <span className="text-cyan-400">3 Passos Seguros</span>
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
          <p>Sabe aquela sensação terrível da frente da bicicleta empinando no seu rosto toda vez que você encara uma subida muito técnica?</p>
          <p>Ou quando você tenta fazer uma curva mais agressiva e sente que a tração fugiu do pneu dianteiro, fazendo você perder o controle?</p>
          <p>Isso é um pesadelo comum para quem busca performance, e muitas vezes a culpa é da geometria alta demais da frente da sua bike.</p>
          <p>Quando o conjunto dianteiro está nas alturas, o seu centro de gravidade vai para o espaço e a sua confiança de pilotagem despenca.</p>
          <p>Realizar esse ajuste na altura exige paciência e muito cuidado com as peças internas.</p>
          <p>Dominar como rebaixar a suspensão da bike aro 29 é o pulo do gato para transferir o peso correto para o pneu dianteiro, garantindo que a sua bicicleta grude no chão nos terrenos mais difíceis e entregue a agilidade que você realmente precisa.</p>
        </div>

        {/* Simulador de Perfil */}
        <div className="bg-zinc-800/50 p-6 md:p-8 rounded-2xl border border-cyan-900/50 shadow-lg mb-12">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-cyan-500" />
            Você já tentou fazer manutenção na sua suspensão antes?
          </h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="experiencia" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('sim')} />
              <span className="text-zinc-200">Sim, sempre faço.</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="experiencia" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('nao')} />
              <span className="text-zinc-200">Não, é a primeira vez.</span>
            </label>
          </div>
          
          {simulacao === 'sim' && (
            <div className="mt-4 p-4 bg-emerald-950/30 border border-emerald-900/50 rounded-lg text-emerald-400 text-sm">
              <strong className="block mb-1">Excelente!</strong> Você já conhece os riscos. O segredo aqui será acertar a quantidade exata de espaçadores para não comprometer a leitura de terreno do garfo!
            </div>
          )}
          {simulacao === 'nao' && (
            <div className="mt-4 p-4 bg-cyan-950/30 border border-cyan-900/50 rounded-lg text-cyan-400 text-sm">
              <strong className="block mb-1">Fique tranquilo!</strong> Este guia foi feito passo a passo para que você consiga rebaixar a suspensão com segurança, bastando ter muita atenção à limpeza e à organização.
            </div>
          )}
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <h2>Ferramentas Necessárias</h2>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/ferramentas-necessarias-para-rebaixar-a-suspensao-da-bicicleta-aro-29.webp" alt="Ferramentas necessárias para rebaixar a suspensão da bicicleta aro 29" className="w-full max-h-[500px] object-cover rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>Mexer na suspensão usando chave enferrujada ou alicate de encanador é pedir para rasgar dinheiro e perder a garantia do seu equipamento.</p>
          <p>Antes de colocar a mão na graxa, você precisa organizar a sua bancada como um verdadeiro cirurgião.</p>
          <p>O que você vai precisar?</p>
          <p>Um bom jogo de chaves Allen e chaves de boca, que são fundamentais: as chaves com a medida exata garantem que você não vai espanar os parafusos de alumínio caríssimos da sua suspensão, te deixando na mão.</p>

          <p>Se a sua suspensão for de mola (helicoidal), o uso de um sacador de molas não é opcional, é obrigatório.</p>
          <p>Ele impede que a pressão contida dispare as peças na sua direção quando você abrir a tampa.</p>
          <p>Tenha na mão também um alicate de bico fino para tirar os anéis de trava internos e um óleo lubrificante específico para suspensões (esqueça os óleos de corrente aqui).</p>
          <p>Trabalhar com as ferramentas certas garante que cada ajuste seja cirúrgico, evitando marcas de desgaste prematuro e garantindo que você não estrague a sua magrela antes mesmo do pedal de domingo.</p>

          <BunnerDoMeio />

          <h2>Passo a Passo para Rebaixar o Amortecedor</h2>
          <p>Abrir um garfo de suspensão não é um bicho de sete cabeças, mas a execução técnica exige um método claro para não comprometer a estrutura da sua bike.</p>
          <p>Já vi muita gente tentar fazer isso na pressa e acabar com o componente travado ou batendo seco.</p>
          <p>Esse procedimento é dividido em três fases críticas.</p>
          <p>Elas garantem a sua segurança e preservam a integridade da geometria da sua bicicleta aro 29.</p>
          <p>Vamos colocar a mão na massa de forma inteligente.</p>

          <h3>1. Preparação e Desmontagem</h3>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/passo-a-passo-da-preparacao-e-desmontagem-da-suspensao-aro-29.webp" alt="Passo a passo da preparação e desmontagem da suspensão aro 29" className="w-full max-h-[500px] object-cover rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>O segredo do sucesso, e que muita gente ignora, começa na organização e limpeza.</p>
          <p>Isole a suspensão em um ambiente estéril.</p>
          <p>Olhando de fora, parece excesso de cuidado, mas descobri na prática que qualquer grão de areia que entra ali vai riscar as hastes por dentro e contaminar o óleo de vedação, destruindo o funcionamento em poucos meses.</p>

          <p>Comece tirando a roda dianteira e desmonte a pinça de freio, mantendo-as longe do fluxo de trabalho para não contaminar as pastilhas com óleo.</p>
          <p>Solte os parafusos da mesa com muito cuidado, usando a ferramenta que se ajuste perfeitamente.</p>
          <p>Trate cada parafuso da caixa de direção como um componente vital de sobrevivência nas descidas.</p>
          <p>Essa paciência inicial elimina dores de cabeça gigantescas e te dá o controle absoluto sobre cada etapa antes de abrir o sistema selado para o ajuste interno.</p>

          <h3>2. Ajuste do Amortecedor</h3>
          <p>Com o sistema aberto na bancada, o foco agora é a instalação dos espaçadores internos (os famosos calços).</p>
          <p>É o volume desses calços que vai ditar exatamente quantos centímetros a frente da sua bike irá baixar.</p>
          <p>Posicione os espaçadores sobre a haste principal.</p>
          <p>Os espaçadores bem instalados limitam o curso máximo de retorno do garfo.</p>
          <p>Isso significa que a frente da sua bicicleta ficará mais baixa e o seu corpo ficará numa posição mais agressiva de ataque, melhorando o controle nas subidas íngremes.</p>

          <p>Garanta que o encaixe seja perfeito, sem obstruir o caminho do óleo ou amassar os vedantes.</p>
          <p>Quando terminar a inserção, jogue uma luz e verifique se toda a vedação interna está livre de sujeiras.</p>
          <p>Uma vedação limpa é a garantia de que o seu amortecedor vai ler o terreno com suavidade, em vez de travar precocemente quando você pegar uma sequência de buracos ou raízes.</p>

          <h3>3. Montagem Final</h3>
          <p>Fechar a suspensão exige atenção absoluta à força que você coloca na chave (o torque).</p>
          <p>Recoloque a tampa superior rosqueando os primeiros fios apenas com as mãos.</p>
          <p>Isso evita que você destrua as delicadas sedes de alumínio.</p>
          <p>Use a ferramenta apenas para o aperto final recomendado de fábrica.</p>
          <p>Lubrifique levemente os anéis de vedação externos com graxa específica de suspensão (nunca use graxa comum).</p>
          <p>Isso cria um escudo hermético contra a água e a poeira da trilha.</p>

          <p>Ao prender o garfo de volta no quadro, tenha certeza de que a caixa de direção não ficou com jogo (folgada) ou apertada a ponto de deixar o guidão duro.</p>
          <p>Uma montagem feita de qualquer jeito resulta em instabilidade e ruídos irritantes nas trilhas.</p>
          <p>Finalize conferindo o alinhamento do conjunto com o pneu: a precisão aqui é o que garante que a suspensão aguente o tranco por anos e te dê a confiança de atacar as curvas sem medo de ser feliz.</p>

          <h2>Conclusão</h2>
          <p>Dominar o ajuste da sua suspensão aro 29 vai muito além de deixar a bicicleta com aquele visual rebaixado e invocado; trata-se de um refinamento técnico que muda a forma como você se conecta com a bike.</p>
          <p>Ao otimizar a altura do conjunto dianteiro, você não apenas melhora o seu centro de gravidade para não perder a frente nas subidas mais maldosas, como também ganha uma precisão cirúrgica em trilhas técnicas, onde cada milímetro faz a diferença para o pneu tracionar.</p>

          <p>Encare este procedimento como um investimento direto na vida útil do seu equipamento e na sua segurança.</p>
          <p>Uma manutenção preventiva bem executada evita folgas prematuras e garante que a suspensão funcione como uma seda, mesmo sob esforço extremo.</p>
          <p>Agora que você tem o mapa da mina para realizar essa transformação como um profissional de oficina, vá aproveitar a nova geometria da sua bike e sinta na prática a diferença brutal que esse ajuste traz para a sua pilotagem.</p>

          <h3>Dica Prática</h3>
          <p>Antes de levar a bicicleta para uma descida técnica pesada, priorize sempre a sua segurança: rode no quarteirão em baixa velocidade e force um pouco o freio dianteiro para testar se tudo está firme e sem folgas na direção.</p>
          
          <div className="mt-12 p-6 bg-cyan-950/20 border border-cyan-900/50 rounded-2xl shadow-sm not-prose">
            <h3 className="text-xl font-bold text-white mb-2">Pensando em fazer um upgrade?</h3>
            <p className="text-zinc-300">
              Se a sua suspensão atual já não dá conta do recado ou você quer subir o nível da sua pilotagem, confira a nossa seleção com a <a href="/melhor-suspensao-para-bike-aro-29" className="text-cyan-400 hover:text-cyan-300 font-bold underline underline-offset-4 decoration-cyan-500/30 hover:decoration-cyan-400 transition-all">melhor suspensão para bike aro 29</a> do mercado e encontre a peça ideal para o seu estilo de pedal!
            </p>
          </div>
        </div>

        {/* SOBRE O AUTOR */}
        <AuthorRafaelMartins />

      </article>
    </>
  );
};
