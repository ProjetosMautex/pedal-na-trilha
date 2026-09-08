import React, { useState } from 'react';
import BunnerDoMeio from './BunnerDoMeio';
import ExitIntentPopup from './ExitIntentPopup';
import { AuthorLucasAlmeida } from './AuthorLucasAlmeida';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const ArtigoBicicletaAro29EParaQualIdade: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [simulacao, setSimulacao] = useState<'sim' | 'nao' | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Qual a idade máxima ou mínima para o aro 29?",
      answer: [
        "Não existe limite, porque a aro 29 respeita o que o seu corpo aguenta, não a sua idade.",
        "A idade mínima é quando o jovem bate 1,55m e tem força para segurar a bike, o que costuma rolar após os 12 anos.",
        "E idade máxima?",
        "Também não tem!",
        "Pelo contrário: ciclistas mais experientes e com mais idade se dão superbem com a aro 29 porque a estabilidade da roda grande exige muito menos esforço nas articulações.",
        "Se você consegue subir no quadro e ficar com a postura confortável, a aro 29 vai ser uma super companheira, não importa o ano que consta no seu RG."
      ]
    },
    {
      question: "Posso adaptar uma aro 29 para uma pessoa mais baixa?",
      answer: [
        "Até dá para fazer umas gambiarras, como colocar uma mesa de guidão bem curtinha ou usar um canote diferente, mas na imensa maioria das vezes, isso é um erro técnico.",
        "O quadro grande dita o limite do que você alcança; forçar alguém menor ali em cima estraga a geometria da bicicleta.",
        "A bike fica arisca, o centro de gravidade fica comprometido e o pedal vira uma luta contra as peças.",
        "Se a bicicleta não abraça o seu corpo naturalmente logo de cara, não invente moda com adaptações caras.",
        "Escolha um quadro feito para você e preserve o seu conforto desde o primeiro giro no pedal."
      ]
    }
  ];

  return (
    <>
      <ExitIntentPopup />
      
      {/* Hero Section */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img fetchpriority="high" width="1200" height="800" src="/images/blog/1/bicicleta-aro-29-e-para-qual-idade.webp" 
            alt="Bicicleta Aro 29 é para qual idade Background" 
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Bicicleta Aro 29 é para qual idade? <br/>
            <span className="text-cyan-400">Descubra o tamanho ideal</span>
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
          <p>Muitos ciclistas iniciantes acabam ficando perdidos com a quantidade de opções que existem hoje na vitrine.</p>
          <p>É muito comum achar que a escolha da bicicleta, assim como a numeração de roupas, deve seguir uma etiqueta de faixa etária.</p>
          <p>Só que focar apenas nos anos de vida na hora de comprar uma magrela é um erro que custa caro: compromete o seu conforto, a sua segurança e, principalmente, a sua vontade de continuar pedalando.</p>
          <p>Na prática, entender que uma bicicleta aro 29 exige um olhar mais focado no seu tamanho real do que no seu RG é o segredo para garantir um pedal fluido e seguro, não importa se você está começando hoje ou se já tem quilometragem rodada nas trilhas.</p>
        </div>

        {/* Simulador de Perfil */}
        <div className="bg-zinc-800/50 p-6 md:p-8 rounded-2xl border border-cyan-900/50 shadow-lg mb-12">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-cyan-500" />
            Você já sabe qual o tamanho ideal de quadro para a sua altura?
          </h3>
          <p className="text-zinc-300 mb-4">Responda para ver a dica do mecânico:</p>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="simulacao" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('sim')} />
              <span className="text-zinc-200">Sim, já tenho o número em mente.</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="simulacao" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('nao')} />
              <span className="text-zinc-200">Não, estou completamente perdido.</span>
            </label>
          </div>
          
          {simulacao === 'sim' && (
            <div className="mt-4 p-4 bg-emerald-950/30 border border-emerald-900/50 rounded-lg text-emerald-400 text-sm">
              <strong className="block mb-1">Análise:</strong> Perfeito! Ter o número exato evita que os vendedores tentem te empurrar bicicletas no tamanho errado. Vamos conferir no texto se a sua escolha bate com as boas práticas.
            </div>
          )}
          {simulacao === 'nao' && (
            <div className="mt-4 p-4 bg-cyan-950/30 border border-cyan-900/50 rounded-lg text-cyan-400 text-sm">
              <strong className="block mb-1">Análise:</strong> Não se preocupe! Ao final dessa leitura, você saberá exatamente as medidas que você precisa procurar e qual tamanho vai garantir um pedal sem dor.
            </div>
          )}
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <h2>A verdade sobre o tamanho da bicicleta: a conta começa no chão, não no calendário</h2>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/como-medir-altura-bike.webp" alt="Mecânico ou ciclista com fita métrica medindo o quadro da bicicleta aro 29, demonstrando a importância das medidas." className="w-full max-h-[500px] object-cover rounded-2xl shadow-xl border border-zinc-700 p-1" />
          </div>
          <p>Vejo muita gente nas lojas escolhendo bike por tabela de idade, mas essa estratégia ignora o que realmente importa na hora do pedal.</p>
          <p>Quando você tenta espremer ou esticar o seu corpo para caber numa bicicleta, em vez de fazer o equipamento se ajustar a você, as dores nas costas, as fisgadas no joelho e o risco de lesões aparecem rapidinho.</p>
          <p>O parâmetro real para saber se uma bike serve para você está na fita métrica: é a proporção do seu corpo e o alcance dos seus braços.</p>
          <p>Entender esse encaixe prático é o primeiro passo para não cometer o erro clássico que faz tanta gente encostar a bike nova na garagem logo no primeiro mês.</p>

          <h3>A partir de quantos anos é recomendado usar aro 29?</h3>
          <p>Não existe uma lei cravada em pedra, mas, na minha experiência prática no pedal, a aro 29 começa a fazer sentido ali pelos 12 ou 13 anos.</p>
          <p>Por quê?</p>
          <p>Porque é nessa fase que a maioria da garotada atinge a faixa de 1,55m a 1,60m de altura, que é o mínimo necessário para dominar a bike sem passar sufoco.</p>
          <p>Antes disso, a bicicleta fica desproporcional.</p>
          <p>A criança sofre para alcançar as manetes de freio e perde o controle do guidão nas curvas fechadas.</p>
          <p>Não use a idade como um passe mágico de compra.</p>
          <p>O que você precisa observar é se o jovem tem tamanho e braço para manter a bicicleta sob controle.</p>
          <p>Priorizar a estatura evita acidentes e garante que mudar para a roda grande seja uma evolução divertida, e não um castigo.</p>

          <BunnerDoMeio />

          <h3>Por que a altura importa mais que a idade cronológica?</h3>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/postura-correta-bike-aro-29.webp" alt="Ciclista pedalando em uma bicicleta aro 29 com postura perfeita, ilustrando a distribuição correta do centro de gravidade." className="w-full max-h-[500px] object-cover rounded-2xl shadow-xl border border-zinc-700 p-1" />
          </div>
          <p>A resposta está na física e no jeito que a bicicleta se comporta no mundo real.</p>
          <p>Quando você escolhe a bike pela sua altura, você garante que o seu centro de gravidade fique bem posicionado no meio do quadro, o que é fundamental para você não perder o equilíbrio.</p>
          <p>Se uma pessoa de 1,60m pega um quadro gigante, ela fica com os braços esticados demais e o peso no lugar errado; frear ou fazer uma curva vira um perigo.</p>
          <p>A idade é só um número, mas a sua altura é o que define se o seu dedo alcança o freio na hora de uma emergência e se o seu pé apoia no pedal com firmeza.</p>
          <p>Ajustar a bike às suas medidas transforma aquela sensação de que você vai cair a qualquer momento em uma pilotagem ágil e sob controle.</p>
          <p>Nunca brigue com a fita métrica.</p>

          <h2>Tabela de Altura x Quadro para Bicicletas Aro 29</h2>
          <p>Escolher o tamanho do quadro é o que separa um pedal inesquecível de uma sessão de tortura.</p>
          <p>A regra de ouro no mundo das aro 29 é achar aquele quadro que te dê agilidade nas curvas e controle nas retas.</p>
          <p>Uma bike grande demais te deixa esticado, enquanto uma muito pequena te espreme e detona seus joelhos.</p>
          <p>Para te ajudar a ir direto ao ponto, separei as medidas de quadro mais comuns e como elas conversam com a sua altura, para você bater o olho e saber exatamente qual chassi vai casar melhor com você.</p>

          <h3>Quadros tamanho 15 e 15.5 (Para estaturas menores e pré-adolescentes)</h3>
          <p>Essa numeração é a porta de entrada perfeita para quem mede entre 1,55m e 1,65m.</p>
          <p>Como o quadro é menor e mais compacto, ele facilita muito o controle do guidão e dá aquela confiança essencial de conseguir encostar os dois pés no chão no semáforo.</p>
          <p>Isso é muito importante para a garotada mais nova que está se acostumando com o peso maior das rodas 29.</p>
          <p>Com esse design mais baixo, suas mãos alcançam os freios de forma natural, sem que você precise deitar sobre a bike.</p>
          <p>Escolhendo o tamanho 15, você prioriza uma postura correta, deixando a pilotagem leve e garantindo que o tamanho da bicicleta não atrapalhe a sua diversão no dia a dia.</p>

          <h3>Quadros tamanho 17 (O padrão mais comum)</h3>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/quadro-17-bicicleta-aro-29.webp" alt="Bicicleta tamanho 17 aro 29 posicionada na trilha, sendo o padrão mais recomendado e versátil para a maioria das estaturas médias." className="w-full max-h-[500px] object-cover rounded-2xl shadow-xl border border-zinc-700 p-1" />
          </div>
          <p>O tamanho 17 é o famoso "curinga" das oficinas, sendo a escolha ideal para quem tem entre 1,65m e 1,75m.</p>
          <p>O legal desse quadro é que ele entrega um equilíbrio perfeito: é ágil para desviar de buracos numa trilha leve e super confortável para você rodar horas na cidade.</p>
          <p>Como é o tamanho que mais vende no mercado, você sempre vai achar muitas opções de peças e terá enorme facilidade se quiser vender a bike depois.</p>
          <p>Com o quadro 17, o seu peso fica bem distribuído no centro da bicicleta, o que cansa muito menos o corpo em percursos mais longos.</p>
          <p>É o ponto exato onde a performance se encontra com o conforto no dia a dia.</p>

          <h3>Quadros tamanho 19 e 21 (Para ciclistas altos)</h3>
          <p>Se você passa de 1,75m, nem tente se espremer num quadro menor; os tamanhos 19 e 21 são obrigatórios.</p>
          <p>Quando uma pessoa alta pedala uma bike pequena, ela fica toda encolhida, o que fatalmente vai render dores na lombar e fazer com que metade da força das pernas seja desperdiçada.</p>
          <p>Esses quadros maiores têm o tubo superior mais comprido, deixando você esticar o corpo na medida certa.</p>
          <p>Quando você monta numa bike feita para a sua envergadura, a bicicleta fica firme em descidas e muito mais na sua mão nas curvas.</p>
          <p>Comprar o quadro do seu tamanho acaba com a sensação horrível de estar pedalando uma bicicletinha infantil.</p>

          <h2>Criança de 10 a 12 anos pode andar em bicicleta Aro 29?</h2>
          <div className="my-8 flex justify-center">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/crianca-bicicleta-aro-29.webp" alt="Criança de aproximadamente 12 anos de idade posando confiante ao lado da sua mountain bike aro 29." className="w-full max-h-[500px] object-cover rounded-2xl shadow-xl border border-zinc-700 p-1" />
          </div>
          <p>Até pode, mas a atenção aqui tem que ser redobrada.</p>
          <p>Como já vimos, colocar a garotada numa aro 29 não tem nada a ver com o calendário, mas sim com a altura deles.</p>
          <p>Se a criança já bateu 1,55m e tem um bom domínio de pilotagem, a aro 29 ajuda demais a passar por obstáculos no chão com facilidade.</p>
          <p>O perigo que vejo na prática é o adulto comprar uma bike enorme com a desculpa de que "a criança vai crescer e não perde a bike rápido".</p>
          <p>Uma bicicleta grande demais tira o controle das mãos da criança, deixa o freio longe dos dedos e é um convite para tombos sérios.</p>
          <p>Teste antes: se ela não alcançar o guidão e o chão com folga, espere mais um pouco.</p>

          <h2>Por que adolescentes e adultos preferem o Aro 29?</h2>
          <p>A febre da aro 29 não é só papo de vendedor; é uma vantagem prática gigantesca que conquistou tanto a galera que compete quanto quem só quer ir pro trabalho com tranquilidade.</p>
          <p>Essa roda maior muda completamente o jeito que a bicicleta reage no asfalto e na terra.</p>
          <p>Entender como a aro 29 funciona na prática te ajuda a ver como ela pode deixar o seu pedal muito mais rápido e menos exaustivo na sua rotina.</p>

          <h3>Maior estabilidade e conforto em terrenos irregulares</h3>
          <p>Na prática, o grande trunfo das rodas grandes aparece quando o chão fica ruim.</p>
          <p>Como a roda 29 é bem maior, ela tem uma área de contato gigante com o solo e não afunda nos buracos.</p>
          <p>Sabe aquela raiz na trilha ou aquele remendo no asfalto que faz a roda pequena travar?</p>
          <p>A aro 29 passa por cima rolando macio.</p>
          <p>A bicicleta engole as imperfeições sem transferir toda a pancada para os seus braços.</p>
          <p>Isso te dá uma estabilidade muito maior, segurando a tração e evitando que você perca o controle.</p>
          <p>Menos pancada seca significa menos cansaço, deixando você mais confiante para encarar qualquer estradão.</p>

          <h3>Rendimento superior em pedaladas longas</h3>
          <p>Sabe quando você embala na reta e parece que a bike vai sozinha?</p>
          <p>Esse é o efeito da inércia da roda 29.</p>
          <p>Quando você ganha velocidade, as rodas grandes embalam e ajudam a manter o ritmo com muito menos esforço nas suas pernas.</p>
          <p>Em um trajeto longo, seja numa cicloviagem ou rodando pela cidade, isso faz uma diferença absurda.</p>
          <p>Enquanto numa roda menor você precisa dar giros constantes para cobrir a mesma distância, a 29 te faz render mais gastando menos energia.</p>
          <p>Para quem quer encarar distâncias maiores, ela entrega um pedal gostoso e fluído que poupa muito a sua musculatura.</p>

          <BunnerDoMeio />

          <h2>Como escolher a bicicleta Aro 29 certa para você</h2>
          <p>Para acertar em cheio na sua próxima magrela, deixe o achismo de lado e foque no encaixe.</p>
          <p>O processo de escolha exige olhar para o seu próprio tamanho e entender como você fica sobre a bicicleta, bem antes de olhar os adesivos do quadro.</p>
          <p>Quando você respeita a sua altura e o tipo de pedal que vai fazer, você garante um investimento certeiro.</p>
          <p>Avalie o tamanho do quadro na tabela, teste a distância dos manetes de freio e garanta que a bicicleta seja uma aliada da sua saúde, e não um gerador de dores.</p>
        </div>

        {/* FAQ */}
        <div className="my-16">
          <h2 className="text-3xl font-extrabold text-white mb-8 border-b border-zinc-800 pb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-zinc-300 mb-8 text-lg">Para não deixar nenhuma ponta solta, juntei aqui as dúvidas que mais respondo de quem está querendo entrar no mundo das aro 29. Entender essas questões práticas vai alinhar a sua expectativa com a realidade da oficina, garantindo que você leve para casa algo que realmente funcione sob os seus pés.</p>
          
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
