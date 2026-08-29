import React, { useState } from 'react';
import AffiliateCard from './AffiliateCard';
import BunnerDoMeio from './BunnerDoMeio';
import ExitIntentPopup from './ExitIntentPopup';
import { products, accessories } from '../data/products';
import { HelpCircle, ArrowRight, Check, X, Sparkles, ShoppingCart, ChevronDown, ChevronUp } from 'lucide-react';

export const MelhoresBicicletas: React.FC = () => {
  const [quizResult, setQuizResult] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const productMetadata: Record<string, { category: string; score: string; shortName: string }> = {
    "caloi-moab": { shortName: "Caloi Moab 29", category: "Trilha Leve / Mista", score: "9.2 / 10" },
    "absolute-nero-4": { shortName: "Absolute Nero 4", category: "Trilhas Pesadas", score: "9.5 / 10" },
    "ksw-xlt-100": { shortName: "KSW XLT 100", category: "Uso Misto (Entrada)", score: "8.8 / 10" },
    "caloi-montana": { shortName: "Caloi Montana", category: "Asfalto / Urbano", score: "8.5 / 10" },
    "collina-21": { shortName: "Collina 21V", category: "Asfalto / Urbano", score: "8.7 / 10" },
    "colli-athena": { shortName: "Colli Athena", category: "Asfalto / Urbano", score: "8.9 / 10" },
    "alfameq-pandora": { shortName: "Alfameq Pandora", category: "Feminina", score: "9.0 / 10" },
    "absolute-hera": { shortName: "Absolute Hera", category: "Feminina", score: "9.3 / 10" }
  };

  const faqData = [
    {
      question: "Qual a melhor marca de bicicleta hoje em dia?",
      answer: [
        "No cenário atual, não existe uma única \"melhor\" marca absoluta, pois o mercado se fragmentou entre gigantes tradicionais e fabricantes focados em montagem estratégica de custo-benefício.",
        "Marcas consagradas, como Caloi e Trek, garantem robustez e uma rede de assistência técnica ampla, ideal para quem prioriza garantia e valor de revenda.",
        "Já nomes como Absolute e KSW dominam o segmento de entrada ao oferecer componentes de marcas líderes, como Shimano, em quadros acessíveis.",
        "O segredo não está na etiqueta colada ao alumínio, mas na qualidade dos periféricos integrados e na disponibilidade de peças de reposição na sua região.",
        "Priorize empresas com suporte sólido no Brasil, assegurando que, caso algum ajuste mecânico seja necessário, você encontre profissionais habilitados com facilidade."
      ]
    },
    {
      question: "Por que aro 29 é melhor que aro 26?",
      answer: [
        "A transição do aro 26 para o 29 revolucionou o ciclismo ao oferecer um ângulo de ataque superior contra obstáculos, como raízes e pedras.",
        "Enquanto a roda menor sofre ao travar em buracos, a 29 mantém a inércia, permitindo que você supere irregularidades com menos esforço e maior fluidez.",
        "Essa maior superfície de contato com o solo resulta em uma aderência superior, conferindo estabilidade extra em curvas e descidas técnicas.",
        "Embora a aceleração inicial exija um pouco mais de energia, a eficiência em manter a velocidade compensa largamente esse detalhe.",
        "Para ciclistas de maior estatura, a geometria do aro 29 oferece um encaixe biomecânico mais natural, reduzindo o cansaço e aumentando drasticamente o conforto."
      ]
    },
    {
      question: "Qual a bicicleta mais resistente?",
      answer: [
        "A resistência de uma bicicleta não depende de um único fator, mas da união entre a liga metálica do quadro e a qualidade das soldas.",
        "Estruturas em alumínio 6061 com reforços em pontos de estresse, como a caixa de direção e o movimento central, costumam ser as mais resilientes para o uso intenso.",
        "No entanto, a durabilidade real é ditada pela manutenção: componentes de alta performance sofrem menos desgaste quando protegidos por conduítes de vedação interna e lubrificação correta.",
        "Se o seu objetivo é uma máquina que suporte o peso elevado ou trilhas agressivas, verifique a espessura das paredes do quadro e a garantia oferecida pelo fabricante contra trincas, garantindo que o investimento suporte os desafios impostos pelo terreno."
      ]
    },
    {
      question: "Bicicletas aro 29 são indicadas para quem está começando?",
      answer: [
        "Com certeza!",
        "Muita gente acha que a roda maior assusta, mas na verdade ela é a sua maior aliada.",
        "O aro 29 \"passa por cima\" de buracos e pedras com muito mais facilidade do que os aros menores.",
        "Isso significa que a bicicleta perdoa mais os seus erros de iniciante, entregando uma estabilidade extra que te dá muita confiança nos primeiros passeios, seja na trilha leve ou no parque da cidade."
      ]
    },
    {
      question: "Qual o melhor material de quadro para não rasgar dinheiro?",
      answer: [
        "Para a categoria de melhor custo-benefício, o rei indiscutível é o Alumínio (especialmente as ligas 6061).",
        "Ele não enferruja com o seu suor ou com a chuva, é leve o suficiente para não te castigar nas subidas e custa muito menos que as opções avançadas.",
        "Quadros de aço são \"tanques de guerra\", super resistentes, mas o peso extra faz você sofrer em ladeiras.",
        "Já a fibra de carbono voa baixo na performance, mas foge completamente do orçamento de entrada."
      ]
    },
    {
      question: "Freio a disco é frescura ou realmente indispensável?",
      answer: [
        "Não é obrigatório para a bike andar, mas para a sua segurança, é um caminho sem volta.",
        "Diferente dos antigos freios V-Brake de borracha, o freio a disco não perde a força de frenagem se o aro entortar de leve ou se você passar por uma poça de lama.",
        "Os discos mecânicos (a cabo) são excelentes e fáceis de manter, enquanto os hidráulicos (a óleo) entregam um controle cirúrgico.",
        "Vale cada centavo investido."
      ]
    },
    {
      question: "Suspensão só na frente (Hardtail) ou Full Suspension (Dupla)?",
      answer: [
        "Para 90% dos ciclistas que buscam custo-benefício, a suspensão apenas na frente (Hardtail) já dá conta do recado lindamente.",
        "Ela é mais barata, deixa a bike mais leve e exige pouca manutenção na oficina.",
        "As bicicletas Full Suspension (com aquele amortecedor extra atrás) são macias em terrenos extremos, mas modelos baratos dessa categoria costumam ser excessivamente pesados e acabam \"roubando\" a força da sua pedalada no asfalto."
      ]
    }
  ];

  return (
    <>
      <ExitIntentPopup />
      
      {/* Hero Section */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/blog/1/principal.webp" 
            alt="Bicicleta Aro 29 Background" 
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Qual a Melhor Bicicleta Aro 29? <br/>
            <span className="text-cyan-400">Top 8 Custo-Benefício (2026)</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span>Por</span>
              <a href="/author/rafael-martins" className="flex items-center gap-2 hover:text-cyan-400 transition-colors font-semibold group">
                Rafael Martins
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="space-y-6 prose prose-lg max-w-none text-zinc-300 mb-12">
          <p>Você já reparou que duas bicicletas aro 29 podem ter preços completamente diferentes, mesmo parecendo idênticas à primeira vista?</p>
          <p>Eu sou o Rafael Martins e passei as últimas duas semanas desmontando as fichas técnicas das principais marcas do mercado.</p>
          <p>Meu objetivo aqui não é te encher de nomes de peças difíceis.</p>
          <p>Vou te mostrar, na prática, qual dessas bikes aro 29 vai aguentar o seu tranco no final de semana e qual delas vai te fazer passar raiva na primeira subida.</p>
          <p>Vamos direto ao ponto!</p>
        </div>

        {/* SIMULADOR RÁPIDO */}
        <div className="my-8 p-6 bg-gradient-to-br from-zinc-800 to-zinc-900 text-white rounded-2xl shadow-xl border border-zinc-700">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="text-cyan-400 w-6 h-6 animate-pulse" />
            <h3 className="text-xl font-bold">Simulador Rápido: Onde você vai pedalar na maior parte do tempo?</h3>
          </div>
          <p className="text-zinc-300 text-sm mb-4">Selecione uma opção para ver a indicação ideal:</p>
          
          <div className="grid sm:grid-cols-2 gap-3">
            <button 
              onClick={() => setQuizResult('asfalto')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${quizResult === 'asfalto' ? 'bg-cyan-500 text-zinc-950 border-cyan-500' : 'bg-zinc-800 border-zinc-600 hover:border-cyan-500'}`}
            >
              <span>Asfalto e Ciclovia</span>
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => setQuizResult('trilha')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${quizResult === 'trilha' ? 'bg-cyan-500 text-zinc-950 border-cyan-500' : 'bg-zinc-800 border-zinc-600 hover:border-cyan-500'}`}
            >
              <span>Trilhas de Terra e Lama</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {quizResult && (
            <div className="mt-6 p-4 bg-zinc-700/50 border border-zinc-600 rounded-xl animate-fadeIn">
              {quizResult === 'trilha' ? (
                <p className="text-sm leading-relaxed">
                  🎯 <strong>Recomendação:</strong> Você precisa de um modelo da categoria <strong>Peso-Pesado (Trilha Leve e Mista)</strong>, como a <a href="#absolute-nero-4" className="text-cyan-400 underline font-bold">Absolute Nero 4</a>. Elas oferecem freios hidráulicos e suspensões robustas essenciais para terra e lama.
                </p>
              ) : (
                <p className="text-sm leading-relaxed">
                  🎯 <strong>Recomendação:</strong> Os modelos da categoria <strong>Opções para Asfalto</strong>, como a <a href="#caloi-montana" className="text-cyan-400 underline font-bold">Caloi Montana</a>, são perfeitos. Eles entregam geometria confortável e peças mais leves, feitas para rodar solto na cidade.
                </p>
              )}
            </div>
          )}
        </div>

        {/* VITRINE / TABELA COMPARATIVA */}
        <div className="mb-16 max-w-[850px] mx-auto bg-zinc-800/50 p-2.5 rounded-2xl sm:p-5 border border-zinc-700 shadow-sm mt-16">
          <h2 className="text-2xl font-extrabold text-white mb-6 text-center">As Melhores Bicicletas Aro 29 Custo-Benefício</h2>
          
          <div className="overflow-x-auto rounded-xl border border-zinc-700 bg-zinc-900">
            <table className="w-full border-collapse">
              <thead className="bg-zinc-800 text-zinc-300 text-xs uppercase font-bold border-b border-zinc-700">
                <tr>
                  <th className="p-3 text-center w-[70px] sm:w-[90px]">Foto</th>
                  <th className="p-3 text-left">Modelo</th>
                  <th className="p-3 text-left hidden md:table-cell">Indicação</th>
                  <th className="p-3 text-center hidden sm:table-cell">Nota</th>
                  <th className="p-3 text-center w-[100px] sm:w-[150px]">Ação</th>
                </tr>
              </thead>
              <tbody>
                {['caloi-moab', 'absolute-nero-4', 'ksw-xlt-100', 'caloi-montana', 'collina-21', 'colli-athena', 'alfameq-pandora', 'absolute-hera'].map((id) => {
                  const product = products.find(p => p.id === id);
                  if (!product) return null;
                  const meta = productMetadata[product.id] || { shortName: product.name, category: product.category, score: "-" };
                  return (
                    <tr key={product.id} className="border-b border-zinc-700 last:border-b-0 hover:bg-zinc-800/50 transition-colors">
                      <td className="p-2 align-middle text-center">
                        <div className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] border border-slate-100 rounded flex items-center justify-center p-0.5 bg-zinc-100 mx-auto overflow-hidden">
                          {product.imageUrl ? (
                             <img src={product.imageUrl} alt={meta.shortName} className="max-w-full max-h-full block object-cover" />
                          ) : (
                             <span className="text-[10px] text-zinc-400 font-bold">Bicicleta</span>
                          )}
                        </div>
                      </td>
                      <td className="p-2 align-middle">
                        <div className="text-sm sm:text-base font-bold text-zinc-100 leading-tight">
                          {meta.shortName}
                        </div>
                        <div className="text-[11px] text-zinc-400 mt-1 md:hidden">
                          {meta.category}
                        </div>
                        <div className="text-[11px] font-bold text-yellow-700 mt-0.5 sm:hidden">
                          Nota: {meta.score}
                        </div>
                      </td>
                      <td className="p-2 align-middle text-zinc-400 text-xs sm:text-sm hidden md:table-cell">
                        {meta.category}
                      </td>
                      <td className="p-2 align-middle text-center hidden sm:table-cell">
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                          {meta.score}
                        </span>
                      </td>
                      <td className="p-2 align-middle text-center">
                        <a 
                          href={product.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="bg-cyan-500 text-zinc-950 font-bold no-underline text-xs py-2 px-3 rounded whitespace-nowrap inline-block hover:opacity-90 transition-all sm:py-2.5 sm:px-5"
                        >
                          Ver Preço
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* SEÇÕES DE PRODUTOS */}
        <h2 className="text-3xl font-extrabold text-white border-b-4 border-cyan-400 pb-2 mt-16 flex items-center gap-2">
          🏆 As "Peso-Pesado" do Custo-Benefício (Trilha Leve e Mista)
        </h2>

        {/* 1. Caloi Moab */}
        <section id="caloi-moab" className="scroll-mt-24 pt-8">
          <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            Caloi Bicicleta Moab Aro 29 (18 Vel. Microshift)
          </h3>
          <div className="my-8">
            <img src={products.find(p => p.id === 'caloi-moab')?.imageUrl} alt={products.find(p => p.id === 'caloi-moab')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none">
            <p>Olhando de fora, a Caloi Moab parece apenas mais uma bike urbana, mas descobri um detalhe no alumínio do quadro que muda tudo: ela foi estruturada para durar.</p>
            <p>Sabe aquele medo da bike "desmanchar" ao descer um meio-fio ou pegar uma estrada de terra mais acidentada?</p>
            <p>A geometria e a solda dela evitam isso.</p>
            <p>O câmbio Microshift de 18 marchas entrega exatamente a variação que você precisa para lidar com o sobe e desce da cidade, sem aqueles estalos de marcha desregulada.</p>
            <p>O que isso muda no seu pedal?</p>
            <p>Você tem a segurança de uma marca tradicional para transitar do asfalto para a trilha de forma muito confiável.</p>
            <p>O único ponto de atenção é que o quadro robusto adiciona um pouco de peso.</p>
            <p>Você vai suar um pouco mais em ladeiras muito íngremes.</p>
            <p>Mas, com a montagem inicial feita por um bom mecânico para alinhar os freios perfeitamente, é uma bicicleta para durar anos sem dor de cabeça.</p>
          </div>

          <div className="mt-8 mb-8">
            <AffiliateCard product={products.find(p => p.id === 'caloi-moab')!} />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8 mb-12">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
              <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                <li>Quadro em alumínio resistente e feito para durar.</li>
                <li>Geometria versátil: confortável na cidade e estável na trilha leve.</li>
                <li>Câmbios Microshift entregam trocas limpas e precisas.</li>
                <li>Excelente reputação e garantia de fábrica da Caloi.</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
              <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                <li>Peso um pouco mais elevado, exigindo mais pernas em ladeiras.</li>
                <li>Exige montagem profissional para evitar barulhos nos freios.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 2. Absolute Nero 4 */}
        <section id="absolute-nero-4" className="scroll-mt-24 pt-8 border-t border-gray-100">
          <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            Bicicleta Aro 29 Absolute Nero 4 (1x12 Hidráulico)
          </h3>
          <div className="my-8">
            <img src={products.find(p => p.id === 'absolute-nero-4')?.imageUrl} alt={products.find(p => p.id === 'absolute-nero-4')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <p className="text-sm font-bold text-cyan-600 uppercase tracking-widest mb-6">⛰️ Para quem quer encarar Trilhas Pesadas</p>
          <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none">
            <p>Se você quer sair do passeio no parque e começar a encarar trilhas de verdade, passei horas dissecando o kit da Absolute Nero 4 e o veredito é um só: a transmissão 1x12 muda a sua vida.</p>
            <p>Ao usar apenas uma coroa na frente, você elimina o câmbio dianteiro.</p>
            <p>O que isso significa?</p>
            <p>Menos peso, visual mais limpo no guidão e o fim daquele susto da corrente caindo no meio da subida.</p>
            <p>O cassete traseiro gigante garante a marcha super leve que faz você subir ladeiras sem precisar empurrar a bike.</p>
            <p>Outro detalhe investigativo crucial são os freios a disco hidráulicos.</p>
            <p>Se você nunca usou, a diferença é brutal.</p>
            <p>Você passa a controlar a frenagem com um único dedo, sem terminar a descida com as mãos dormentes de tanto apertar o manete.</p>
            <p>A suspensão de 100mm vem com trava: você trava no asfalto para não perder velocidade e destrava na terra para não castigar os braços.</p>
          </div>

          <div className="mt-8 mb-8">
            <AffiliateCard product={products.find(p => p.id === 'absolute-nero-4')!} />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8 mb-12">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
              <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                <li>Transmissão 1x12 simplifica as trocas e oferece marcha super leve.</li>
                <li>Freios hidráulicos param a bike imediatamente e sem esforço.</li>
                <li>Cabeamento interno protege os cabos contra lama e sujeira.</li>
                <li>Suspensão com trava evita desperdício de energia no asfalto.</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
              <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                <li>Selim original é focado em performance, pode exigir troca por um mais confortável.</li>
                <li>Relação de marchas exige manutenção preventiva rigorosa.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. KSW XLT 100 */}
        <section id="ksw-xlt-100" className="scroll-mt-24 pt-8 border-t border-gray-100">
          <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            BICICLETA KSW XLT 100 21V SHIMANO (Freio a Disco)
          </h3>
          <div className="my-8">
            <img src={products.find(p => p.id === 'ksw-xlt-100')?.imageUrl} alt={products.find(p => p.id === 'ksw-xlt-100')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <p className="text-sm font-bold text-cyan-600 uppercase tracking-widest mb-6">💸 A mais barata que ainda vale a pena comprar</p>
          <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none">
            <p>Sempre recebo a pergunta: "Rafael, dá para começar a pedalar sem gastar uma fortuna?".</p>
            <p>A KSW XLT 100 é a prova de que sim.</p>
            <p>O coração dessa bike é o conjunto Shimano Tourney de 21 velocidades.</p>
            <p>Na prática, você ganha uma enorme variedade de marchas para encontrar o seu ritmo ideal, evitando aquela exaustão de tentar girar um pedal pesado demais numa ladeira.</p>
            <p>A suspensão de 100mm faz um trabalho honesto filtrando os buracos das ruas e estradas de chão batido, enquanto os trocadores Rapid Fire (de gatilho) permitem mudar de marcha rapidamente no trânsito.</p>
            <p>O segredo para não "rasgar dinheiro" com essa bike é simples: não economize na montagem.</p>
            <p>Leve numa oficina de confiança, pois os ajustes finos no freio a disco mecânico e nos câmbios são fundamentais para que a experiência não vire um festival de ruídos irritantes.</p>
          </div>

          <div className="mt-8 mb-8">
            <AffiliateCard product={products.find(p => p.id === 'ksw-xlt-100')!} />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8 mb-12">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
              <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                <li>Transmissão Shimano original com excelente amplitude para subidas.</li>
                <li>Quadro leve em alumínio 6061 facilita o manuseio.</li>
                <li>Trocadores Rapid Fire garantem trocas rápidas e seguras.</li>
                <li>Freios a disco mecânicos muito eficientes.</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
              <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                <li>Revisão mecânica inicial em oficina é inegociável.</li>
                <li>Suspensão atende bem o uso recreativo, mas sofre em trilhas técnicas.</li>
              </ul>
            </div>
          </div>
          
          <div className="my-12">
            <img src="/images/blog/1/bike_trilha.webp" alt="Bike na trilha" className="w-full rounded-xl shadow-lg border border-zinc-700" />
          </div>

          {/* VÍDEO DO YOUTUBE */}
          <div className="my-12 p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-cyan-400">
              <Sparkles size={20} className="animate-spin" /> Freio a disco hidráulico vs mecânico. Qual foi o melhor no nosso teste de frenagem? Pedaleria
            </h3>
            <p className="text-sm text-slate-300 mb-6">Veja na prática a diferença entre os freios no teste feito pelo canal Pedaleria.</p>
            <div className="flex justify-center">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/q3rGmM_FRbw" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="max-w-full rounded-lg shadow-lg border border-slate-700"
              ></iframe>
            </div>
          </div>
        </section>

        {/* BUNNER DO MEIO */}
        <BunnerDoMeio />

        <h2 className="text-3xl font-extrabold text-white border-b-4 border-cyan-400 pb-2 mt-16 flex items-center gap-2">
          🏙️ Opções para Asfalto e Uso Urbano
        </h2>

        {/* 4. Caloi Montana */}
        <section id="caloi-montana" className="scroll-mt-24 pt-8">
          <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            Caloi Montana 21V
          </h3>
          <div className="my-8">
            <img src={products.find(p => p.id === 'caloi-montana')?.imageUrl} alt={products.find(p => p.id === 'caloi-montana')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none">
            <p>A Caloi Montana é como um "tratorzinho urbano".</p>
            <p>Analisando o projeto dela, fica nítido que o foco é te levar do ponto A ao ponto B sem complicação.</p>
            <p>Os pneus 2.25 são ligeiramente mais largos que a média; isso significa que você vai rodar um pouquinho mais devagar, mas em compensação, buracos, tampas de bueiro e asfalto recapeado serão absorvidos como se fossem um tapete.</p>
            <p>Ela vem equipada com 21 marchas para você vencer o relevo da cidade sem chegar ao trabalho exausto.</p>
            <p>Os freios a disco garantem a segurança vital para quando um carro freia de repente na sua frente.</p>
            <p>É a solução pragmática para quem foge do sedentarismo e quer praticidade.</p>
            <p>Lembre-se apenas de fazer o reaperto geral após os primeiros dias de uso, já que peças novas tendem a "assentar".</p>
          </div>

          <div className="mt-8 mb-8">
            <AffiliateCard product={products.find(p => p.id === 'caloi-montana')!} />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8 mb-12">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
              <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                <li>Quadro leve em alumínio à prova de ferrugem.</li>
                <li>Pneus largos oferecem conforto superior em asfalto ruim.</li>
                <li>Freios a disco respondem bem em dias de chuva.</li>
                <li>Confiabilidade de uma marca clássica no mercado.</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
              <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                <li>O foco é durabilidade, não agilidade e altas velocidades.</li>
                <li>Garantia de fábrica limitada a 90 dias.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Collina 21V */}
        <section id="collina-21" className="scroll-mt-24 pt-8 border-t border-gray-100">
          <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            Bicicleta Aro 29 Collina 21 Marchas
          </h3>
          <div className="my-8">
            <img src={products.find(p => p.id === 'collina-21')?.imageUrl} alt={products.find(p => p.id === 'collina-21')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none">
            <p>Se você morre de medo de terminar o primeiro passeio com as costas e as mãos doloridas, a Collina olhou para esse problema.</p>
            <p>O grande diferencial dela logo de cara são as manoplas anatômicas em gel.</p>
            <p>Pode parecer bobagem, mas isso tira toda a pressão dos seus punhos no asfalto.</p>
            <p>O sistema de marchas usa o trocador Grip Shift, aquele que você gira como se fosse o acelerador de uma moto.</p>
            <p>É um sistema que puristas da mecânica costumam torcer o nariz, mas para quem está começando agora, é o jeito mais intuitivo de trocar de marcha.</p>
            <p>Suportando até 120 kg, é um quadro super honesto que entrega estabilidade e te convida a pedalar todos os dias sem sofrimento.</p>
          </div>

          <div className="mt-8 mb-8">
            <AffiliateCard product={products.find(p => p.id === 'collina-21')!} />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8 mb-12">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
              <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                <li>Manoplas em gel eliminam a dormência nas mãos.</li>
                <li>Estrutura aguenta ciclistas de até 120 kg tranquilamente.</li>
                <li>Pneus 2.10 entregam excelente rolagem na ciclofaixa.</li>
                <li>Preço incrivelmente competitivo para iniciar.</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
              <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                <li>O trocador Grip Shift exige costume se você já usava o sistema de gatilho.</li>
                <li>Necessita de ajuste fino nas marchas feito por mecânico.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. Colli Athena */}
        <section id="colli-athena" className="scroll-mt-24 pt-8 border-t border-gray-100">
          <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            Colli Athena Montain Bike
          </h3>
          <div className="my-8">
            <img src={products.find(p => p.id === 'colli-athena')?.imageUrl} alt={products.find(p => p.id === 'colli-athena')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none">
            <p>Olhando a ficha técnica da Athena, encontrei o detalhe que explica o motivo dela ser tão resistente: o quadro é de aço carbono.</p>
            <p>O que isso muda no seu pedal?</p>
            <p>O aço filtra a vibração do solo muito melhor que o alumínio.</p>
            <p>Em conjunto com a geometria mais ereta, você vai pedalar com as costas retas, dizendo adeus à temida dor na lombar.</p>
            <p>O preço dessa durabilidade extrema é a balança.</p>
            <p>Ela é pesada.</p>
            <p>Se você tem ladeiras cruéis no seu trajeto, vai precisar usar bastante o conjunto de 21 marchas operado pelos trocadores Rapid Fire.</p>
            <p>Mas se o trajeto é majoritariamente plano e você quer uma bicicleta indestrutível para o dia a dia, é um verdadeiro tanque de guerra urbano.</p>
          </div>

          <div className="mt-8 mb-8">
            <AffiliateCard product={products.find(p => p.id === 'colli-athena')!} />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8 mb-12">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
              <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                <li>Postura de pilotagem muito mais amigável para a coluna.</li>
                <li>Trocadores Rapid Fire rápidos e precisos.</li>
                <li>Quadro de aço extremamente resiliente contra impactos.</li>
                <li>Freio a disco confere total autoridade nas paradas.</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
              <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                <li>O aço carbono torna a bike pesada para subidas constantes.</li>
                <li>Requer cuidado redobrado se você mora em áreas com muita maresia.</li>
              </ul>
            </div>
          </div>
          
          <div className="my-12">
            <img src="/images/blog/1/bike_urbana.webp" alt="Bicicleta Urbana" className="w-full rounded-xl shadow-lg border border-zinc-700" />
          </div>
        </section>

        {/* CROSS-SELL */}
        <div className="my-12 bg-zinc-900 rounded-2xl p-6 border border-zinc-700">
          <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <ShoppingCart size={24} /> Complete seu setup de segurança urbana
          </h3>
          <p className="text-zinc-300 text-sm mb-6">Sua segurança no trânsito não tem preço. Complete seu setup com: Capacete com LED, Trava/Cadeado em U (U-Lock) e Bomba de ar portátil.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {accessories.filter(i => ['capacete-absolute', 'cadeado-ulock', 'bomba-ar-portatil'].includes(i.id)).map(p => {
              return (
                <a 
                  key={p.id}
                  href={p.affiliateUrl} 
                  target="_blank" 
                  rel="noopener noreferrer sponsored nofollow" 
                  className="block bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden hover:border-cyan-500 transition-colors group shadow-lg flex flex-col h-full"
                >
                  <div className="aspect-square bg-white flex items-center justify-center p-4">
                    <img src={p.imageUrl} alt={p.name} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-4 text-center flex flex-col items-center flex-grow justify-between">
                    <h4 className="text-zinc-100 font-bold text-sm mb-3">{p.name}</h4>
                    <span className="block bg-cyan-600 group-hover:bg-cyan-500 text-white w-full py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-md">Ver Preço →</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <h2 className="text-3xl font-extrabold text-white border-b-4 border-cyan-400 pb-2 mt-16 flex items-center gap-2">
          👩‍🦰 Geometria Feminina (Conforto e Ergonomia)
        </h2>

        {/* 7. Alfameq Pandora */}
        <section id="alfameq-pandora" className="scroll-mt-24 pt-8">
          <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            Bicicleta Aro 29 Alfameq Pandora Feminina
          </h3>
          <div className="my-8">
            <img src={products.find(p => p.id === 'alfameq-pandora')?.imageUrl} alt={products.find(p => p.id === 'alfameq-pandora')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none">
            <p>Muitas ciclistas me falam sobre a dificuldade e insegurança de parar no semáforo com quadros masculinos muito altos.</p>
            <p>A Alfameq Pandora mata esse problema na raiz com o tubo superior rebaixado.</p>
            <p>Não é só charme: é facilidade na hora de montar e desmontar da bike no caos urbano, sem precisar fazer acrobacias.</p>
            <p>As 21 velocidades são controladas pelas alavancas Ez-Fire.</p>
            <p>Em bom português: os botões de marcha estão embutidos no manete do freio.</p>
            <p>Você troca a marcha e freia sem precisar soltar a manopla, mantendo o controle total da bicicleta o tempo todo.</p>
            <p>Pesa quase 16 kg, o que cobra o preço na subida, mas compensa entregando uma robustez que absorve calçadas irregulares e paralelepípedos com facilidade.</p>
          </div>

          <div className="mt-8 mb-8">
            <AffiliateCard product={products.find(p => p.id === 'alfameq-pandora')!} />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8 mb-12">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
              <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                <li>Quadro rebaixado facilita subir e descer da bike rapidamente.</li>
                <li>Sistema Ez-Fire não deixa você perder o foco na condução.</li>
                <li>Aros de parede dupla resistem bravamente aos buracos.</li>
                <li>Suporta cargas de até 130 kg.</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
              <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                <li>Peso total alto dificulta em ladeiras muito íngremes.</li>
                <li>Pedais básicos originais podem precisar de upgrade em pouco tempo.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 8. Absolute Hera */}
        <section id="absolute-hera" className="scroll-mt-24 pt-8 border-t border-gray-100">
          <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            Bicicleta Feminina Aro 29 Absolute Hera
          </h3>
          <div className="my-8">
            <img src={products.find(p => p.id === 'absolute-hera')?.imageUrl} alt={products.find(p => p.id === 'absolute-hera')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none">
            <p>A Hera é a escolha de quem quer não apenas rodar na cidade, mas arriscar a primeira trilha leve de final de semana.</p>
            <p>O quadro em alumínio desenhado para a ergonomia feminina evita que você fique excessivamente "esticada" para alcançar o guidão, poupando os seus ombros e pescoço.</p>
            <p>A suspensão de 80mm faz o trabalho sujo de suavizar o terreno esburacado, enquanto os freios a disco de 160mm seguram a bike com precisão, independente de você estar no sol ou na chuva.</p>
            <p>O segredo para extrair o máximo do custo-benefício dessa Absolute é, logo no primeiro dia, levar para um mecânico dar aquele "trato" na tensão dos cabos e apertos.</p>
          </div>

          <div className="mt-8 mb-8">
            <AffiliateCard product={products.find(p => p.id === 'absolute-hera')!} />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8 mb-12">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
              <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                <li>Geometria dedicada ao conforto anatômico da mulher.</li>
                <li>Quadro em alumínio que deixa a bike muito mais ágil.</li>
                <li>Trocas de marchas intuitivas e rápidas.</li>
                <li>Excelente pacote de custo-benefício para lazer e transporte.</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
              <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                <li>Depende completamente de uma montagem profissional para performar bem.</li>
                <li>Garantia de fábrica de 3 meses.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* COMO ESCOLHER */}
        <h2 className="text-3xl font-extrabold text-white border-b-4 border-cyan-400 pb-2 mt-16 mb-8">
          Como escolher a melhor bicicleta aro 29 custo-benefício
        </h2>
        <div className="space-y-6 prose prose-lg max-w-none text-zinc-300 mb-8">
          <p>Antes de finalizar sua compra, é fundamental compreender que a ficha técnica é o reflexo direto de como a bicicleta vai reagir debaixo de você.</p>
          <p>Muito ciclista gasta horas escolhendo a cor do quadro e esquece de olhar os atributos que definem se o pedal vai ser um prazer ou um castigo mecânico.</p>
          <p>Entenda como cada parte interage com o seu trajeto e faça uma escolha cirúrgica.</p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Quadro (O tamanho importa!)</h3>
            <div className="space-y-4 prose prose-lg text-zinc-300">
              <p>O quadro é a espinha dorsal do seu investimento.</p>
              <p>O alumínio 6061 domina o custo-benefício porque é leve e não enferruja com chuva ou suor.</p>
              <p>Quadros mais curtos te dão uma bike mais "arisca" e fácil de manobrar.</p>
              <p>Quadros mais longos te deixam deitado, ganhando velocidade.</p>
              <p>Mas atenção ao erro que mais vejo na oficina: errar o tamanho da bicicleta.</p>
            </div>
            
            <div className="my-8 p-6 bg-cyan-50 border-l-4 border-cyan-500 rounded-r-xl">
              <h4 className="font-bold text-cyan-800 text-lg mb-2">💡 Dica de Especialista sobre Bike Fit</h4>
              <p className="text-cyan-900">Não compre pelo visual antes de checar o tamanho do quadro! Um quadro 15" atende pessoas de 1,50m a 1,60m. Quadros 17" vão de 1,60m a 1,75m, e 19" para quem tem 1,75m a 1,85m. Usar o quadro errado causa dores crônicas na lombar e joelhos.</p>
            </div>
            
            <img src="/images/blog/1/bike_fit.webp" alt="Medidas da Bicicleta" className="w-full rounded-xl shadow-lg border border-zinc-700 mt-6" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Suspensão</h3>
            <div className="space-y-4 prose prose-lg text-zinc-300">
              <p>A suspensão não serve só para deixar a bike bonita; ela é o filtro que protege os seus ombros das pancadas secas dos buracos.</p>
              <p>Garfos de 80mm a 100mm dão conta do recado em ambientes urbanos e trilhas moderadas.</p>
              <p>O pulo do gato?</p>
              <p>Procure suspensões com trava.</p>
              <p>No asfalto liso ou nas subidas, você trava a suspensão.</p>
              <p>Isso evita que a força do seu pedal seja desperdiçada balançando a bike para cima e para baixo.</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Pneus</h3>
            <div className="space-y-4 prose prose-lg text-zinc-300">
              <p>Eles são o único contato seu com o chão.</p>
              <p>Vai rodar 90% do tempo no asfalto? Fuja de pneus extremamente cravudos; eles criam atrito, fazem muito barulho e vão sugar a sua energia.</p>
              <p>Procure modelos de rolagem rápida.</p>
              <p>Agora, se a lama e a terra solta forem sua rotina, os cravos agressivos são seus melhores amigos para não perder a frente da bike em curvas.</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Transmissão (Marchas)</h3>
            <div className="space-y-4 prose prose-lg text-zinc-300">
              <p>Esqueça a regra velha de que "quanto mais marchas, melhor".</p>
              <p>O que importa é a inteligência da relação.</p>
              <p>Relações de coroa única na frente (como o 1x12 da Absolute Nero 4) eliminaram a necessidade de mudar a marcha no câmbio dianteiro, o que reduz peso e manutenção.</p>
              <p>Para uso na cidade, o clássico 21 marchas Shimano continua sendo o rei da durabilidade barata e fácil reposição de peças.</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Freios (Disco Mecânico vs Hidráulico)</h3>
            <div className="space-y-4 prose prose-lg text-zinc-300">
              <p>Os antigos freios V-Brake de borrachinha estão morrendo por um motivo: segurança.</p>
              <p>O freio a disco mecânico (via cabo de aço) entrega paradas bruscas com ótimo preço, mas exige mais força na mão.</p>
              <p>Se o orçamento permitir, vá direto para o freio a disco Hidráulico (via conduíte de óleo).</p>
              <p>É precisão absoluta com a ponta de apenas um dedo, mantendo seu braço relaxado a descida inteira.</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Peso</h3>
            <div className="space-y-4 prose prose-lg text-zinc-300">
              <p>Na bicicleta, quem carrega o motor é você.</p>
              <p>Cada quilo a mais cobra seu preço em cada ladeira.</p>
              <p>O alumínio garante essa leveza, mas quadros de aço carbono, embora mais pesados, são resilientes contra grandes impactos.</p>
              <p>Avalie se no seu dia a dia você precisará carregar a bike em escadas, ou se as subidas são predominantes; nesses casos, o alumínio é obrigatório para você não odiar o seu trajeto.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-3xl font-extrabold text-white border-b-4 border-cyan-400 pb-2 mt-16 mb-8">
          Perguntas frequentes (FAQ)
        </h2>
        <div className="space-y-4 mb-16">
          {faqData.map((faq, index) => (
            <div key={index} className="border border-zinc-700 rounded-xl overflow-hidden bg-zinc-900 shadow-sm hover:shadow-md transition-shadow">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 flex items-center justify-between font-bold text-zinc-100 text-left bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
              >
                {faq.question}
                {openFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-cyan-600 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-cyan-600 shrink-0" />
                )}
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-[1000px] py-4' : 'max-h-0 py-0'}`}
              >
                <div className="space-y-3 prose prose-slate">
                  {faq.answer.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-zinc-400">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CONCLUSÃO */}
        <div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700 shadow-sm mt-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Conclusão</h2>
          <div className="space-y-4 prose prose-lg text-zinc-300">
            <p>Para a grande maioria das pessoas, a Caloi Moab (ou a Montana, se o seu foco for 100% cidade) é aquela aposta sem erro: marca de confiança, quadro de alumínio resistente e peças que qualquer mecânico no bairro conserta de olhos fechados. Se o seu orçamento está mais apertado e a vontade de pedalar é grande, a KSW XLT 100 te entrega a suspensão e as marchas precisas da Shimano para você encarar qualquer terreno irregular sem dor de cabeça.</p>
            <p>Já para quem quer pular as fases e ir direto para um pedal com pegada mais esportiva, a Absolute Nero 4 é o seu bilhete de ouro. A transmissão 1x12 e os freios hidráulicos oferecem um nível de confiança em descidas técnicas que nenhuma outra na mesma faixa de preço consegue entregar.</p>
            <p>No final das contas, a melhor bicicleta é aquela que respeita o seu "Bike Fit" e te tira do sofá. Olhe a ficha técnica, alinhe as peças com os buracos ou asfalto da sua rua e pedale sem medo. Qualquer uma dessas opções vai entregar o valor do seu investimento. E lembre-se, a bike é só o começo — vale a pena conferir nossos guias de acessórios para fechar o pacote de segurança perfeito.</p>
          </div>
        </div>

        {/* SOBRE O AUTOR */}
        <div className="bg-cyan-950/20 p-8 rounded-2xl border border-cyan-900/50 shadow-sm mt-8 mb-16 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="shrink-0 mx-auto md:mx-0">
            <img src="/images/autores/Rafael Martins.webp" alt="Rafael Martins" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-cyan-900/50 hover:border-cyan-500 transition-colors shadow-xl" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">Sobre o Autor</h2>
            <h3 className="text-2xl font-bold text-white mb-4">Rafael Martins</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Rafael é um apaixonado por mecânica de bicicletas e ciclista inveterado. No balcão da oficina ou nas trilhas de final de semana, seu objetivo é traduzir o "mecaniquês" técnico e chato para ajudar as pessoas a não rasgarem dinheiro, escolhendo exatamente as peças que precisam. As recomendações aqui são fruto de mãos sujas de graxa, análise minuciosa de fichas oficiais e da vivência real de quem gasta o pneu no asfalto e na terra, defendendo sempre uma mobilidade mais inteligente e saudável.
            </p>
          </div>
        </div>

      </div>
    </>
  );
};

