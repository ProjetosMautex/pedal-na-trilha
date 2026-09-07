import React, { useState } from 'react';
import BunnerDoMeio from './BunnerDoMeio';
import ExitIntentPopup from './ExitIntentPopup';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const ArtigoGtSprintMx7Aro29: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [simulacao, setSimulacao] = useState<'cambio' | 'conforto' | 'durabilidade' | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Qual a real diferença entre os modelos MX1 e MX7?",
      answer: [
        "O grande segredo está nas suas mãos.",
        "A MX1 vem com 21 marchas usando trocador giratório (que exige mais força e frequentemente desregula).",
        "A MX7 sobe de nível com 24 marchas no sistema Rapid Fire de alavancas.",
        "O clique é seco, ágil e te salva quando a ladeira aparece de repente e você precisa de marcha leve urgente."
      ]
    },
    {
      question: "A GT Sprint suporta trilhas de nível técnico?",
      answer: [
        "Não rasgue seu dinheiro tentando.",
        "O quadro de alumínio é valente, mas a suspensão de 80mm e o câmbio foram fabricados para o asfalto e estradões de terra batida.",
        "Socar a bike em raízes e buracos pesados vai empenar suas rodas."
      ]
    },
    {
      question: "Qual o limite de peso suportado?",
      answer: [
        "A fabricante limita em 130 kg (somando você e o que estiver levando).",
        "Mas aqui vai a dica investigativa: se você pesa mais de 100 kg, fique muito amigo da oficina para conferir o alinhamento e a tensão dos raios das rodas com frequência.",
        "Isso impede que as rodas entortem com o tempo."
      ]
    },
    {
      question: "A montagem exige mão de obra profissional?",
      answer: [
        "Sem sombra de dúvida.",
        "Encaixar roda é fácil, mas alinhar pastilha de disco e deixar o câmbio afinado para não roer sua corrente exige chave e ouvidos de mecânico.",
        "Pague a montagem e durma em paz, sabendo que a bike está 100% segura para você acelerar."
      ]
    },
    {
      question: "Como garantir maior longevidade ao conjunto?",
      answer: [
        "Não existe milagre, existe limpeza.",
        "Componentes de entrada odeiam areia misturada com graxa velha.",
        "Mantendo a corrente e o câmbio limpos e bem lubrificados depois de pegar poeira, você empurra a necessidade de trocar essas peças para muito longe."
      ]
    }
  ];

  return (
    <>
      <ExitIntentPopup />
      
      {/* Hero Section */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img fetchpriority="high" width="1200" height="800" src="/images/blog/1/bicicleta-29-gt-sprint-mx7-e-boa.webp" 
            alt="Bicicleta GT Sprint MX7 Aro 29 Background" 
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            bicicleta gt sprint mx7 aro 29 é boa? <br/>
            <span className="text-cyan-400">Vale o Seu Dinheiro?</span>
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
          <p>Escolher a companheira ideal para as trilhas de fim de semana ou para fugir do trânsito caótico pode dar um nó na cabeça.</p>
          <p>Com tanta bicicleta brilhando na vitrine, é muito comum bater aquela dúvida na hora de equilibrar o desempenho que você quer com o dinheiro que você pode investir.</p>
          <p>A gente sempre procura aquele equipamento guerreiro, que seja ágil e não custe o preço de uma moto.</p>
          <p>Avaliar se a bicicleta GT Sprint MX7 aro 29 é boa exige ir muito além daquela pintura bonita do quadro.</p>
          <p>Passei horas analisando os detalhes mecânicos dessa montagem e descobri padrões nas peças que mostram exatamente se ela vale o seu suor ou se vai te deixar na mão no meio da rua.</p>
        </div>

        {/* Simulador de Perfil */}
        <div className="bg-zinc-800/50 p-6 md:p-8 rounded-2xl border border-cyan-900/50 shadow-lg mb-12">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-cyan-500" />
            O que é mais importante para você em uma bicicleta nova?
          </h3>
          <p className="text-zinc-300 mb-4">Selecione para ver se a GT Sprint MX7 atende às suas necessidades:</p>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('cambio')} />
              <span className="text-zinc-200">Facilidade para subir ladeiras sem fazer muita força.</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('conforto')} />
              <span className="text-zinc-200">Não sentir dor nas costas e ter uma pilotagem confortável.</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('durabilidade')} />
              <span className="text-zinc-200">Durabilidade do material contra chuva e ferrugem.</span>
            </label>
          </div>
          
          {simulacao === 'cambio' && (
            <div className="mt-4 p-4 bg-emerald-950/30 border border-emerald-900/50 rounded-lg text-emerald-400 text-sm">
              <strong className="block mb-1">Análise:</strong> Com 24 marchas e sistema Rapid Fire, a MX7 te entrega cliques precisos e muita leveza para vencer as subidas do bairro.
            </div>
          )}
          {simulacao === 'conforto' && (
            <div className="mt-4 p-4 bg-cyan-950/30 border border-cyan-900/50 rounded-lg text-cyan-400 text-sm">
              <strong className="block mb-1">Análise:</strong> A geometria clássica aliada à suspensão dianteira absorve a trepidação e joga você para uma postura que alivia os ombros.
            </div>
          )}
          {simulacao === 'durabilidade' && (
            <div className="mt-4 p-4 bg-purple-950/30 border border-purple-900/50 rounded-lg text-purple-400 text-sm">
              <strong className="block mb-1">Análise:</strong> O quadro em alumínio 6061 não enferruja, garantindo longa vida útil mesmo se você rodar em áreas mais úmidas.
            </div>
          )}
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src="/images/blog/1/bicicleta-29-gt-sprint-mx7-e-boa.webp" alt="Bicicleta GT Sprint MX7 num cenário urbano moderno" className="w-full max-h-[400px] object-cover rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>

          <h2>GT Sprint MX7 Aro 29</h2>
          <p>Se você colocar a MX7 lado a lado com as irmãs mais baratas, olhando de fora elas parecem quase iguais.</p>
          <p>Mas descobri um detalhe no guidão que muda tudo: a transição para as 24 marchas com o sistema de alavancas Rapid Fire.</p>
          <p>Diferente daquele trocador giratório simples (que costuma ser duro e impreciso), o Rapid Fire funciona com cliques.</p>
          <p>O que isso muda no seu pedal?</p>
          <p>Significa que quando você der de cara com uma subida surpresa, um clique rápido no polegar alivia a marcha na hora, sem aquele susto da corrente enroscando ou estalando.</p>
          <p>Embora o quadro de alumínio 6061 mantenha a geometria clássica da marca, essa engrenagem extra de marchas te entrega um fôlego valioso, poupando as suas pernas na ladeira do bairro ou no estradão de terra.</p>

          <h2>Pontos fortes da GT Sprint</h2>
          <p>O maior trunfo da GT Sprint é entregar um pacote de peças bem honesto pelo preço que cobra.</p>
          <p>O esqueleto dela, construído em alumínio 6061, é o grande destaque investigativo.</p>
          <p>Na prática, você leva uma bicicleta incrivelmente mais leve do que as antigas armações de aço.</p>
          <p>Você vai sentir esse alívio brutal na hora de arrancar no semáforo ou se precisar levantá-la para subir uma escada.</p>
          <p>Além disso, ela vem equipada com freios a disco, o que garante frenagens reais e seguras mesmo sob chuva.</p>
          <p>A suspensão dianteira entra no pacote quebrando um bom galho ao absorver as batidas do asfalto irregular.</p>
          <p>Tudo isso envelopado numa pintura muito bem acabada, entregando a você o visual e a funcionalidade de uma bike de categoria superior.</p>

          <h2>Pontos fracos que você precisa saber antes de comprar</h2>
          <p>Como nem tudo é magia no segmento de entrada, fui fuçar a fundo e achei pontos cegos que você precisa saber agora para evitar dor de cabeça amanhã.</p>
          <p>O primeiro alerta vermelho vai para os pedais de nylon originais: eles até servem no início, mas se você pisa forte ou pega muita terra, eles podem ceder.</p>
          <p>Recomendo já separar uns trocados para colocar um par de alumínio depois.</p>
          <p>Outro detalhe é a transmissão mais básica.</p>
          <p>Por ser focada em preço, o câmbio pode sofrer daquele velho problema de desregular rapidamente nas primeiras semanas.</p>
          <p>Exige um pouco de paciência até o cabo de aço ceder ao ponto ideal.</p>
          <p>E não se engane: a suspensão alivia a pancada do buraco na rua, mas definitivamente não vai tolerar trilhas cheias de pedras soltas e buracos fundos.</p>
        </div>

        <BunnerDoMeio />

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <h2>Segurança</h2>
          <div className="my-8">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/gt_sprint_freio_disco.webp" alt="Detalhe do freio a disco mecânico da GT Sprint MX7" className="w-full max-h-[400px] object-cover rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>Quando o assunto é não se acidentar, a GT Sprint MX7 fez o dever de casa utilizando freios a disco mecânicos com discos de 160mm.</p>
          <p>Diferente daqueles antigos freios V-Brake que usam borracha e perdem toda a eficiência quando a roda molha, o sistema a disco é outro patamar.</p>
          <p>O que isso muda para você?</p>
          <p>Se um carro fechar você de surpresa debaixo de garoa, a bicicleta vai estancar no lugar com muito mais aderência e estabilidade.</p>
          <p>Como é um sistema mecânico (usa cabos de aço e não óleo hidráulico), a sua manutenção vai ser simples e barata em qualquer oficina de bairro.</p>
          <p>É o componente exato que transmite aquela confiança necessária para você dominar o guidão sem medo.</p>

          <h2>Conforto</h2>
          <div className="my-8">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/gt_sprint_conforto.webp" alt="Ciclista rodando confortavelmente com a GT Sprint MX7" className="w-full max-h-[400px] object-cover rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>Ninguém merece voltar de um passeio incrível com dor nas costas ou com o pulso latejando.</p>
          <p>O conforto em percursos mais demorados depende de como a geometria da bicicleta te "abraça".</p>
          <p>O quadro da GT Sprint, trabalhando junto com a suspensão da frente, atua como um grande filtro, impedindo que a trepidação do asfalto destruído castigue as suas articulações.</p>
          <p>O selim (banco) original vem com uma espuma razoável que oferece o suporte certo para você rodar bastante sem sofrer nas primeiras horas.</p>
          <p>A altura do guidão também te joga para uma postura mais leve, tirando o peso dos seus ombros.</p>
          <p>Dica de parceiro: não tenha preguiça de ajustar a altura exata do banco e a inclinação para o seu corpo; é essa sintonia fina que transforma o esforço de pedalar em puro prazer.</p>

          <h2>Montagem: o que esperar quando a caixa chegar</h2>
          <div className="my-8">
            <img loading="lazy" width="800" height="533" src="/images/blog/1/gt_sprint_montagem.webp" alt="Mecânico profissional ajustando as marchas da bicicleta na oficina" className="w-full max-h-[400px] object-cover rounded-2xl shadow-xl border border-zinc-700 bg-white p-1" />
          </div>
          <p>Bate aquela ansiedade maravilhosa quando a transportadora entrega a caixa enorme em casa.</p>
          <p>A bicicleta já vem pré-montada, mas itens críticos como a roda da frente, guidão e pedais estão soltos.</p>
          <p>Posso te dar o melhor conselho de todos?</p>
          <p>Não tente bancar o mecânico na sala de casa se não tiver as ferramentas certas.</p>
          <p>Peças complexas como o câmbio e a pinça de freio nunca saem da fábrica com precisão.</p>
          <p>Se você apenas apertar os parafusos de qualquer jeito, vai sofrer com correntes raspando, estalos horríveis ao pedalar e freio "gritando" no seu ouvido.</p>
          <p>Levar a caixa direto para o seu mecânico de confiança para a regulagem inaugural é o que garante a sua segurança e faz as peças originais durarem o dobro do tempo.</p>

          <h2>GT Sprint: para quem serve e para quem não serve</h2>
          <p>Colocando tudo na mesa, a GT Sprint tem um perfil muito claro.</p>
          <p>Para você não apostar no cavalo errado, decifrei exatamente onde ela brilha e onde ela falha:</p>
          <p>⭐ <strong>Melhor Custo-Benefício para Rotina e Lazer:</strong> A escolha perfeita se o seu foco é ir trabalhar sem gastar combustível, pedalar nas ciclovias ou curtir um estradão de terra nivelado no fim de semana.</p>
          <p>Ela sobra para esse uso.</p>
          <p>⛰️ <strong>Para quem quer encarar Trilhas Pesadas:</strong> Esqueça.</p>
          <p>Se o seu sonho é descer pirambeira, pular pedras e socar a bike em trilhas agressivas, você vai destruir os componentes dela muito rápido.</p>
          <p>Nesses casos, invista numa categoria mais alta.</p>

          <h2>Vale a pena? O veredicto final</h2>
          <p>Bater o martelo na compra da GT Sprint MX7 exige apenas que você seja 100% sincero sobre os caminhos que vai percorrer.</p>
          <p>Se o seu mapa envolve fugir do trânsito urbano e aproveitar parques nos finais de semana, ela entrega um custo-benefício que beira o imbatível, principalmente pela facilidade das 24 marchas na subida.</p>
          <p>Porém, exigir dela o desempenho de uma máquina profissional de trilha é o caminho mais rápido para a frustração.</p>
          <p>Encare essa magrela como uma aliada estratégica de entrada: ela é extremamente honesta, ágil e durável para o dia a dia urbano, contanto que você se comprometa a levá-la à oficina para aquela regulagem fina inicial.</p>
          <p>Você estará pagando um preço justo por muita mobilidade.</p>
        </div>

        {/* FAQ */}
        <div className="my-16">
          <h2 className="text-3xl font-extrabold text-white mb-8 border-b border-zinc-800 pb-4">
            Perguntas frequentes
          </h2>
          <p className="text-zinc-300 mb-8 text-lg">A gente sabe que comprar a primeira bicicleta mexe com o bolso, e é por isso que a cabeça lota de dúvidas antes de clicar em "comprar". Reuni aqui as perguntas que a galera mais me faz no balcão sobre a MX7 para te deixar tranquilo:</p>
          
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
          <p>A GT Sprint MX7 confirma na prática que é uma aposta muito lúcida para quem precisa dominar o asfalto ou as estradas rurais sem precisar fazer um empréstimo para bancar a bicicleta.</p>
          <p>Ela joga a seu favor te entregando um quadro de alumínio leve que não enferruja e freios que respondem na hora, desde que você não sabote a própria segurança pulando a regulagem na oficina.</p>
          <p>Ter clareza de que ela não é um tanque de guerra para pular barrancos é o que vai fazer vocês terem uma longa amizade.</p>
          <p>Se o seu plano é começar no pedal com dignidade, fugir do caos motorizado e ganhar saúde, a MX7 cumpre a missão com louvor.</p>
        </div>

        {/* SOBRE O AUTOR */}
        <div className="bg-cyan-950/20 p-8 rounded-2xl border border-cyan-900/50 shadow-sm mt-16 mb-16 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="shrink-0 mx-auto md:mx-0">
            <img loading="lazy" width="800" height="600" src="/images/autores/Rafael Martins.webp" alt="Rafael Martins" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-cyan-900/50 hover:border-cyan-500 transition-colors shadow-xl" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">Sobre o Autor</h2>
            <h3 className="text-2xl font-bold text-white mb-4">
              <a href="/author/rafael-martins" className="hover:text-cyan-400 transition-colors">Rafael Martins</a>
            </h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Rafael é um apaixonado por mecânica de bicicletas e ciclista inveterado. No balcão da oficina ou nas trilhas de final de semana, seu objetivo é traduzir o "mecaniquês" técnico e chato para ajudar as pessoas a não rasgarem dinheiro, escolhendo exatamente as peças que precisam. As recomendações aqui são fruto de mãos sujas de graxa, análise minuciosa de fichas oficiais e da vivência real de quem gasta o pneu no asfalto e na terra, defendendo sempre uma mobilidade mais inteligente e saudável.
            </p>
          </div>
        </div>

      </article>
    </>
  );
};
