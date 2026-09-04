import React, { useState } from "react";
import AffiliateCard from "./AffiliateCard";
import BunnerDoMeio from "./BunnerDoMeio";
import ExitIntentPopup from "./ExitIntentPopup";
import { HelpCircle, Check, X, ChevronDown, ChevronUp } from "lucide-react";
import { products, accessories } from "../data/products";

export const ArtigoMelhorPneuBikeAro29: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [simulacao, setSimulacao] = useState<string | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const productMetadata: Record<
    string,
    { shortName: string; category: string; score: string }
  > = {
    "pneu-paco-nomad": {
      shortName: "Paco Nomad Faixa Bege",
      category: "Passeio / Urbano",
      score: "8.5",
    },
    "pneu-pirelli-scorpion": {
      shortName: "Pirelli Scorpion Pro",
      category: "Trilha Técnica",
      score: "9.2",
    },
    "pneu-maxxis-ikon": {
      shortName: "Maxxis Ikon Exo",
      category: "Cross Country (XC)",
      score: "9.6",
    },
    "par-pneus-levorin": {
      shortName: "Par Levorin Eruption",
      category: "Custo-Benefício / Misto",
      score: "9.0",
    },
    "pneu-maxxis-rekon-race": {
      shortName: "Maxxis Rekon Race",
      category: "Performance (XC)",
      score: "9.7",
    },
    "pneu-kenda-aptor": {
      shortName: "Kenda Aptor Faixa Marrom",
      category: "Estilo / Urbano",
      score: "8.7",
    },
    "pneu-bicicleta-exces": {
      shortName: "Levorin Excess (Par)",
      category: "Asfalto / Dia a dia",
      score: "8.4",
    },
  };

  const faqData = [
    {
      question: "Slick, misto ou cravo agressivo?",
      answer: [
        "O Slick (lisinho) é um míssil no asfalto, não gasta sua energia, mas vira sabão na terra.",
        'O Cravo Agressivo é o seu "tratorzinho" para descida, lama e pedras; mas no asfalto, o pneu sofre.',
        "O Misto (semi-slick) tenta abraçar o mundo: é liso no meio e tem dentes nas bordas.",
        "Funciona bem para quem sai de casa pelo asfalto para pegar uma terra batida, mas numa trilha muito técnica, ele vai ficar devendo.",
      ],
    },
    {
      question: "Kevlar (aramida) ou arame de aço?",
      answer: [
        "O arame de aço vai na borda do pneu para segurar ele no aro.",
        "É forte, robusto e barato.",
        "O problema?",
        "É pesado e não dobra.",
        "Já o Kevlar (a aramida) é um material caríssimo e super resistente que substitui esse arame.",
        "O pneu de Kevlar dobra igual toalha e tira um peso morto absurdo das rodas — que é onde as suas pernas mais sentem alívio nas subidas.",
      ],
    },
    {
      question: "Tubeless ou câmara convencional?",
      answer: [
        "A velha câmara de ar todo mundo conhece: furou, troca ou remenda.",
        "O tubeless elimina a câmara; você usa válvulas e um líquido selante lá dentro.",
        "A magia do tubeless é que, se um espinho de laranjeira furar a borracha, o líquido tampa o buraco na mesma hora, com você pedalando.",
        "Além disso, a bike fica mais leve.",
        "O lado ruim?",
        "Dá trabalho montar e você precisa repor o selante a cada alguns meses.",
      ],
    },
    {
      question: "Posso usar pneus tubeless em qualquer aro 29?",
      answer: [
        "Não, não invente gambiarra!",
        "O seu aro da bicicleta precisa ser Tubeless Ready.",
        'Ele tem um ressalto interno que "trava" o pneu ali.',
        "Se você tentar adaptar um aro simples de entrada, na primeira curva fechada o pneu pode desencaixar de uma vez, cuspindo líquido para todo lado e te mandando para o chão.",
        "Segurança em primeiro lugar: verifique o modelo da sua roda.",
      ],
    },
    {
      question:
        "Como determinar o tamanho correto do pneu para minha bicicleta?",
      answer: [
        "Aro 29 é o tamanho da roda, mas a largura (2.10, 2.25, 2.35...) é o que pega.",
        "Olhe a lateral do seu pneu atual.",
        "Quer colocar um mais largo?",
        "Calma!",
        "Verifique o espaço (o clearance) que sobra no quadro da sua bike, lá perto do pedivela.",
        'Se você comprar um pneu "balão" muito grosso e passar numa poça de barro, o quadro vai travar sua roda e pode até quebrar.',
      ],
    },
    {
      question:
        "Existem pneus de bicicleta para asfalto específicos para condições climáticas, como chuva ou seco?",
      answer: [
        "Sim, total diferença!",
        "No sol, aquele pneu praticamente liso vai te fazer voar baixo na ciclovia.",
        "Mas caiu uma chuva?",
        "Aquele mesmo pneu não tem por onde a água escoar, e a frente da bike vai escorregar no espelho d'água na primeira freada brusca.",
        "Se você pedala faça chuva ou faça sol, pegue modelos com pequenos sulcos na borracha (os canais de escoamento).",
        "Eles salvam a sua pele no molhado sem pesar demais no seco.",
      ],
    },
    {
      question: "Qual a durabilidade média de um pneu para aro 29?",
      answer: [
        "Depende da sua perna e de onde você pisa.",
        "A galera de passeio troca na faixa de 2.000 a 4.000 km.",
        "Mas pensa comigo: se você comprar um pneu molinho e cheio de cravos de trilha pesada, e for rodar todo dia no asfalto quente da cidade, ele vai lixar pela metade do tempo.",
        "Olhou pro pneu e os cravos do meio estão arredondados e gastos?",
        "A borracha ressecou e rachou?",
        "Tá na hora de trocar antes que você tome um tombo de graça.",
      ],
    },
    {
      question:
        "Posso misturar pneus com diferentes tecnologias no mesmo eixo?",
      answer: [
        "Na mesma bicicleta, não só pode como às vezes até deve!",
        "A frente é onde está a sua direção; ali você precisa de confiança.",
        "Coloque um pneu mais largo, de borracha macia e cravos maiores na frente.",
        "Atrás fica a tração; coloque um modelo mais estreito e focado em rolar rápido para poupar a perna.",
        "Só não vai errar a mão na diferença de tamanho, senão a bike perde a estabilidade nas frenagens!",
      ],
    },
  ];

  return (
    <>
      <ExitIntentPopup />

      {/* Hero Section */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img fetchpriority="high" width="1200" height="800" src="/images/blog/1/melhor pneu para bike aro 29.webp"
            alt="Melhor Pneu para Bike Aro 29"
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Melhor Pneu para Bike Aro 29 <br />
            <span className="text-cyan-400">(7 Modelos Recomendados)</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <a
                href="/author/rafael-martins"
                className="hover:opacity-80 transition-opacity"
              >
                <img loading="lazy" width="800" height="600" src="/images/autores/Rafael Martins.webp"
                  alt="Rafael Martins"
                  className="w-8 h-8 rounded-full border border-cyan-500"
                />
              </a>
              <a
                href="/author/rafael-martins"
                className="hover:text-cyan-400 transition-colors"
              >
                Por Rafael Martins
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <p>
            Sabe aquele momento em que você entra um pouco mais rápido numa
            curva de terra e sente a roda da frente "escorregando" para fora?
          </p>
          <p>Pois é, o coração vem na boca!</p>
          <p>
            Todo dia encosta alguém aqui na oficina reclamando que a bike não
            rende ou que fura câmara toda semana.
          </p>
          <p>
            O que muita gente não percebe é que o pneu é o único contato da sua
            magrela com o chão.
          </p>
          <p>
            Encontrar o melhor pneu para bike aro 29 não é só um detalhe
            estético; é comprar segurança para não cair e agilidade para não
            chegar em casa com as pernas fritando.
          </p>
          <p>
            Analisar o desenho da borracha e o que tem por dentro da carcaça é o
            pulo do gato para que a sua próxima pedalada seja puro prazer, e não
            um teste de sobrevivência.
          </p>
        </div>

        {/* Simulador Rápido de Perfil */}
        <div className="bg-zinc-800/50 p-6 md:p-8 rounded-2xl border border-cyan-900/50 shadow-lg mb-12">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-cyan-500" />
            Qual será o seu terreno principal?
          </h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input
                type="radio"
                name="perfil"
                className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600"
                onChange={() => setSimulacao("asfalto")}
              />
              <span className="text-zinc-200">
                Asfalto / Ciclovias / Terra Batida
              </span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input
                type="radio"
                name="perfil"
                className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600"
                onChange={() => setSimulacao("trilha")}
              />
              <span className="text-zinc-200">
                Trilhas Técnicas / Lama / Pedras Soltas
              </span>
            </label>
          </div>
          {simulacao === "asfalto" && (
            <div className="mt-4 p-4 bg-emerald-950/30 border border-emerald-900/50 rounded-lg text-emerald-400 text-sm">
              <strong className="block mb-1">Foco na Rolagem!</strong> Você vai
              se dar muito bem com pneus semi-slick ou de cravos baixos, com boa
              pressão (PSI mais alto) e proteção anti-furo.
            </div>
          )}
          {simulacao === "trilha" && (
            <div className="mt-4 p-4 bg-amber-950/30 border border-amber-900/50 rounded-lg text-amber-400 text-sm">
              <strong className="block mb-1">Aderência e Resistência!</strong>{" "}
              Você precisa de pneus com cravos laterais agressivos, proteção na
              parede lateral (Kevlar) e preferencialmente sistema Tubeless (sem
              câmara).
            </div>
          )}
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <h2>Os 7 Melhores Pneus de Bicicleta aro 29</h2>
        </div>

        {/* VITRINE */}
        <div className="mb-16 max-w-[850px] mx-auto bg-zinc-800/50 p-2.5 rounded-2xl sm:p-5 border border-zinc-700 shadow-sm mt-8">
          <h2 className="text-2xl font-extrabold text-white mb-6 text-center">
            Recomendações da Oficina
          </h2>

          <div className="overflow-x-auto rounded-xl border border-zinc-700 bg-zinc-900">
            <table className="w-full border-collapse">
              <thead className="bg-zinc-800 text-zinc-300 text-xs uppercase font-bold border-b border-zinc-700">
                <tr>
                  <th className="p-3 text-center w-[70px] sm:w-[90px]">Foto</th>
                  <th className="p-3 text-left">Modelo</th>
                  <th className="p-3 text-left hidden md:table-cell">
                    Indicação
                  </th>
                  <th className="p-3 text-center hidden sm:table-cell">Nota</th>
                  <th className="p-3 text-center w-[100px] sm:w-[150px]">
                    Ação
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  "pneu-paco-nomad",
                  "pneu-pirelli-scorpion",
                  "pneu-maxxis-ikon",
                  "par-pneus-levorin",
                  "pneu-maxxis-rekon-race",
                  "pneu-kenda-aptor",
                  "pneu-bicicleta-exces",
                ].map((id) => {
                  const product = products.find((p) => p.id === id);
                  if (!product) return null;
                  const meta = productMetadata[product.id] || {
                    shortName: product.name,
                    category: product.category,
                    score: "-",
                  };

                  return (
                    <tr
                      key={product.id}
                      className="border-b border-zinc-700 last:border-b-0 hover:bg-zinc-800/50 transition-colors"
                    >
                      <td className="p-2 align-middle text-center">
                        <div className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] border border-slate-100 rounded flex items-center justify-center p-0.5 bg-zinc-100 mx-auto overflow-hidden">
                          <img loading="lazy" width="800" height="600" src={product.imageUrl}
                            alt={meta.shortName}
                            className="max-w-full max-h-full block object-cover"
                          />
                        </div>
                      </td>
                      <td className="p-2 align-middle">
                        <div className="text-sm sm:text-base font-bold text-zinc-100 leading-tight">
                          {meta.shortName}
                        </div>
                        <div className="text-[11px] text-zinc-400 mt-1 md:hidden">
                          {meta.category}
                        </div>
                        <div className="text-[11px] font-bold text-yellow-400 mt-0.5 sm:hidden">
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
                        <a href={product.affiliateUrl} aria-label={`Ver oferta de ${product.name}`}
                          target="_blank"
                          rel="noopener noreferrer sponsored nofollow"
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

        {/* Produto 1 */}
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-8">
          <h3>Pneu Paco Nomad 29x2 com Faixa Bege MTB</h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'pneu-paco-nomad')?.imageUrl} alt={products.find(p => p.id === 'pneu-paco-nomad')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
        </div>
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <p>
            Se você quer dar aquele visual retrô de respeito para a sua magrela
            sem esvaziar o bolso, o Paco Nomad faixa bege é o cara.
          </p>
          <p>
            Esse kit é o nosso famoso "feijão com arroz bem temperado": já vem
            com duas câmaras de ar e resolve a vida de quem gosta de bater perna
            no parque ou num estradão de terra leve no final de semana.
          </p>
          <p>Por dentro, ele usa arame de aço e nylon.</p>
          <p>O que isso significa na prática?</p>
          <p>
            Ele é um "tratorzinho" para aguentar o tranco diário, mas cobra seu
            preço na balança: pesando 950g e com trama de 22 TPI, ele é um pneu
            bem durão.
          </p>
          <p>Definitivamente não é para você ir tirar racha na subida.</p>
          <p>
            É a escolha de quem quer gastar pouco, ter uma bike estilosa e rodar
            com segurança na paz do passeio.
          </p>
        </div>
        <AffiliateCard
          product={products.find((p) => p.id === "pneu-paco-nomad")!}
        />

        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
              <Check className="w-5 h-5" /> Prós
            </h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Estilo vintage com a faixa bege que muda a cara da bike.</li>
              <li>Não precisa esquentar a cabeça: já vem com as câmaras.</li>
              <li>Agarra bem em estradão de terra batida.</li>
              <li>Reposição muito barata.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2">
              <X className="w-5 h-5" /> Contras
            </h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>
                O peso extra (950g) deixa a bike mais lenta nas arrancadas.
              </li>
              <li>
                A borracha durona (22 TPI) transfere mais a vibração do chão
                para os seus braços.
              </li>
            </ul>
          </div>
        </div>

        {/* Produto 2 */}
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-8">
          <h3>Pneu Pirelli Scorpion Pro Kevlar 29x2</h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'pneu-pirelli-scorpion')?.imageUrl} alt={products.find(p => p.id === 'pneu-pirelli-scorpion')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
        </div>
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <p>Agora a conversa ficou séria.</p>
          <p>
            Se você já encara trilhas técnicas e quer melhorar seu tempo, o
            Pirelli Scorpion tem um truque na manga chamado Dual Compound.
          </p>
          <p>
            Funciona assim: a borracha do meio é dura (para a bike rolar rápida
            na reta e não gastar energia), e a borracha das bordas é macia como
            chiclete (para cravar as "unhas" no chão nas curvas inclinadas).
          </p>
          <p>
            Por ser de Kevlar (sem aquele arame pesado na borda), ele cai para
            uns 660g.
          </p>
          <p>Você sente a bike decolando na subida!</p>
          <p>
            E para você não ficar parado no mato remendando câmara, ele vem com
            a fita APS anti-furo de fábrica.
          </p>
          <p>
            O único balde de água fria é que ele não aceita o sistema sem câmara
            (tubeless) e o preço é bem mais salgado.
          </p>
        </div>
        <AffiliateCard
          product={products.find((p) => p.id === "pneu-pirelli-scorpion")!}
        />

        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
              <Check className="w-5 h-5" /> Prós
            </h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>
                Borracha inteligente (Dual Compound) que rola rápido e curva
                bem.
              </li>
              <li>O Kevlar deixa ele levinho e fácil de montar com a mão.</li>
              <li>Fita anti-furo interna que salva o seu fim de semana.</li>
              <li>Trama de 60 TPI, absorvendo melhor os buracos da trilha.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2">
              <X className="w-5 h-5" /> Contras
            </h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Preço salgado se você for usar só na ciclovia.</li>
              <li>Não serve para quem quer usar líquido selante (Tubeless).</li>
            </ul>
          </div>
        </div>

        {/* Produto 3 */}
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-8">
          <h3>Pneu Bike Maxxis Ikon 29x2.20 Dobrável Exo Tubeless</h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'pneu-maxxis-ikon')?.imageUrl} alt={products.find(p => p.id === 'pneu-maxxis-ikon')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
        </div>
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <p>Sabe aquele pneu de corrida?</p>
          <p>É o Maxxis Ikon 29x2.20.</p>
          <p>
            É a indicação certeira aqui da oficina para quem quer velocidade.
          </p>
          <p>
            Ele tem Kevlar, borracha dupla e é Tubeless Ready (você arranca a
            câmara e roda só no líquido selante, deixando a roda super leve).
          </p>
          <p>
            Além disso, a tecnologia EXO é um reforço nas paredes laterais que
            impede que pedras cortem seu pneu no meio do caminho.
          </p>
          <p>Onde ele sofre?</p>
          <p>
            Se você pegar aquele barro pesado de chuva; como os cravos dele são
            mais baixos para ganhar velocidade, ele não limpa a lama direito.
          </p>
          <p>É a Ferrari do Cross Country (XC).</p>
        </div>
        <AffiliateCard
          product={products.find((p) => p.id === "pneu-maxxis-ikon")!}
        />

        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
              <Check className="w-5 h-5" /> Prós
            </h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Pronto para usar sem câmara (Tubeless Ready).</li>
              <li>Parede lateral blindada contra cortes de pedra (EXO).</li>
              <li>Rola absurdamente rápido no estradão seco.</li>
              <li>Levinho graças à borda de Kevlar.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2">
              <X className="w-5 h-5" /> Contras
            </h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Escorrega mais se o barro for pesado.</li>
              <li>O investimento inicial vai pesar no cartão.</li>
            </ul>
          </div>
        </div>

        <BunnerDoMeio />

        {/* Produto 4 */}
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-8 mt-12">
          <h3>Par Pneus Bike Mtb Levorin Eruption Aro 29 X 2.30 Banda Leve</h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'par-pneus-levorin')?.imageUrl} alt={products.find(p => p.id === 'par-pneus-levorin')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
        </div>
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <p>
            Se você quer uma solução completa, comprar o par de uma vez é a
            jogada de mestre da economia.
          </p>
          <p>
            Com esse kit, você renova a bicicleta inteira gastando menos do que
            pagaria em um único pneu de marcas gringas.
          </p>
          <p>
            Eles garantem aquela tração bruta tanto na roda de trás (para subir)
            quanto na da frente (para não escorregar nas curvas de terra).
          </p>
          <p>
            O formato 29x2.30 deixa a bike bem "parruda", absorvendo muito mais
            os solavancos da rua ou do estradão.
          </p>
          <p>
            É a solução perfeita para quem quer deixar a magrela pronta para o
            fim de semana sem precisar parcelar em 12 vezes.
          </p>
        </div>
        <AffiliateCard
          product={products.find((p) => p.id === "par-pneus-levorin")!}
        />

        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
              <Check className="w-5 h-5" /> Prós
            </h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>
                Custo-benefício imbatível (o par custa menos que um pneu
                importado).
              </li>
              <li>Visual robusto com a largura 2.30.</li>
              <li>
                Troca os dois pneus de uma vez, garantindo estabilidade por
                igual.
              </li>
              <li>Excelente durabilidade para rodar muito tempo.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2">
              <X className="w-5 h-5" /> Contras
            </h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Somando os dois, você coloca quase 2kg a mais na bike.</li>
              <li>
                Cravos altos "amarram" um pouco a bicicleta no asfalto liso.
              </li>
            </ul>
          </div>
        </div>

        {/* Produto 5 */}
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-8">
          <h3>Pneu Maxxis Rekon Race 29x2.25 Kevlar Exo Tubeless</h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'pneu-maxxis-rekon-race')?.imageUrl} alt={products.find(p => p.id === 'pneu-maxxis-rekon-race')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
        </div>
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <p>
            Este modelo é um dos pneus de Cross Country (XC) mais conceituados
            do mercado, desenvolvido em parceria com campeões mundiais.
          </p>
          <p>
            Sua estrutura semi-slick possui cravos centrais mais baixos e
            compactos.
          </p>
          <p>O que isso significa?</p>
          <p>
            Ele reduz drasticamente a resistência ao rolamento em terrenos de
            terra batida ou cascalho, entregando muita velocidade.
          </p>
          <p>
            Além de veloz, ele é extremamente seguro: a tecnologia EXO
            Protection adiciona uma camada extra resistente a cortes nas
            laterais do pneu.
          </p>
          <p>
            Sendo Tubeless Ready, você pode usar selante e rodar com pressões
            menores, garantindo aderência monstra sem medo de furos.
          </p>
          <p>
            É o pneu definitivo para quem foca em performance e velocidade pura.
          </p>
        </div>
        <AffiliateCard
          product={products.find((p) => p.id === "pneu-maxxis-rekon-race")!}
        />

        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
              <Check className="w-5 h-5" /> Prós
            </h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>
                Rolagem incrivelmente rápida em terra batida (semi-slick).
              </li>
              <li>Proteção lateral EXO contra rasgos de pedras.</li>
              <li>
                Pode ser usado sem câmara (Tubeless Ready) para maior aderência.
              </li>
              <li>Desenvolvido para competições de altíssimo nível.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2">
              <X className="w-5 h-5" /> Contras
            </h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Preço premium justificado pela tecnologia embarcada.</li>
              <li>
                Cravos centrais baixos sofrem um pouco em lama muito profunda.
              </li>
            </ul>
          </div>
        </div>

        {/* Produto 6 */}
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-8">
          <h3>Pneu Mtb Kenda Aptor K1153 29x2.10 Faixa Marrom</h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'pneu-kenda-aptor')?.imageUrl} alt={products.find(p => p.id === 'pneu-kenda-aptor')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
        </div>
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <p>
            Procurando aquele visual de "bike gringa" com faixa marrom sem
            torrar as economias?
          </p>
          <p>O Kenda Aptor é a escolha certa.</p>
          <p>
            Essa cor na lateral virou febre, e ele entrega esse estilo com uma
            estrutura bem honesta.
          </p>
          <p>
            É o perfil de quem roda tranquilo: asfalto da cidade durante a
            semana e um estradão leve no domingo.
          </p>
          <p>
            Por ter o talão de arame, ele é mais pesado e não tem aquela
            "molejo" nas pedras que um pneu de Kevlar tem.
          </p>
          <p>O que isso muda no seu pedal?</p>
          <p>
            Se a trilha for muito acidentada, a frente da bike vai pular mais.
          </p>
          <p>
            Mas para bater cartão no passeio cotidiano, ele tem uma aderência
            legal em dias úmidos e uma durabilidade que compensa a compra.
          </p>
        </div>
        <AffiliateCard
          product={products.find((p) => p.id === "pneu-kenda-aptor")!}
        />

        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
              <Check className="w-5 h-5" /> Prós
            </h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Faixa marrom linda que destaca sua roda.</li>
              <li>Segura bem a onda quando o chão está úmido.</li>
              <li>Cabe em qualquer orçamento.</li>
              <li>Difícil de furar com os detritos comuns da cidade.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2">
              <X className="w-5 h-5" /> Contras
            </h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Mais pesado que os irmãos com borda de Kevlar.</li>
              <li>
                Falta aderência se você for forçar nas curvas de uma trilha
                pesada.
              </li>
            </ul>
          </div>
        </div>

        {/* Produto 7 */}
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-8">
          <h3>PNEU BICICLETA A29X2 EXCES</h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'pneu-bicicleta-exces')?.imageUrl} alt={products.find(p => p.id === 'pneu-bicicleta-exces')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
        </div>
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <p>
            O Levorin Excess 29x2.0 é a escolha tática de quem usa a bike como
            meio de transporte e veículo de lazer.
          </p>
          <p>
            Como já é vendido o par, você encosta na oficina, troca tudo de uma
            vez e sai de cabeça fresca.
          </p>
          <p>
            O desenho dele é muito esperto: os cravos são certinhos para não
            travar muito no asfalto, mas entregam tração quando você pega a
            estrada de terra.
          </p>
          <p>
            Ele aguenta até 50 libras de pressão, então você pode encher bem pra
            bike render no asfalto.
          </p>
          <p>
            Pesando 900g, a ideia dele não é ser de corrida, e sim ser aquele
            parceiro que não fura fácil e não acaba rápido.
          </p>
          <p>
            Só não invente de entrar "chutado" em curva com lama, porque ele não
            tem aqueles cravos enormes na lateral para te segurar.
          </p>
        </div>
        <AffiliateCard
          product={products.find((p) => p.id === "pneu-bicicleta-exces")!}
        />

        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
              <Check className="w-5 h-5" /> Prós
            </h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Já vem o par: prático e econômico.</li>
              <li>Rende bem no asfalto e na terra.</li>
              <li>Borracha e carcaça feitas para durar muito.</li>
              <li>Fácil de achar em qualquer oficina.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2">
              <X className="w-5 h-5" /> Contras
            </h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Os 900g de cada pneu exigem perna na subida.</li>
              <li>Vai escorregar se você tentar andar rápido na lama.</li>
            </ul>
          </div>
        </div>

        {/* ACESSÓRIOS CROSS-SELL */}
        <div className="my-16 bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Itens Essenciais para Seus Pneus Novos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {accessories
              .filter((i) =>
                [
                  "camara-ar-pirelli",
                  "fita-antifuro-safetire",
                  "selante-liquido-tubeless",
                ].includes(i.id),
              )
              .map((item) => (
                <a
                  key={item.id}
                  href={item.affiliateUrl}
                  aria-label={`Ver oferta de ${item.name}`}
                  target="_blank"
                  rel="noopener noreferrer sponsored nofollow"
                  className="block bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden hover:border-cyan-500 transition-colors group"
                >
                  <div className="aspect-square bg-white flex items-center justify-center p-4">
                    <img loading="lazy" width="800" height="600" src={item.imageUrl}
                      alt={item.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4 text-center flex flex-col items-center justify-between h-[120px]">
                    <h4 className="text-zinc-100 font-bold text-sm">
                      {item.name}
                    </h4>
                    <span className="bg-cyan-500 group-hover:bg-cyan-400 text-zinc-950 w-full py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-md mt-2">
                      Ver Preço →
                    </span>
                  </div>
                </a>
              ))}
          </div>
        </div>

        {/* DICAS DE COMO ESCOLHER */}
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <h2>Como escolher o pneu certo para a sua bicicleta?</h2>
          <p>Pneu não é só estética.</p>
          <p>
            Analisando as peças todos os dias, posso te garantir: o pneu errado
            transforma um passeio divertido numa provação.
          </p>
          <p>É como ir correr uma maratona usando bota de peão!</p>
          <p>
            Para você não gastar dinheiro duas vezes, acompanhe os detalhes que
            eu avalio antes de recomendar um upgrade aqui na loja.
          </p>

          <h3>Tipo de Uso</h3>
          <p>Qual é a realidade do seu pedal?</p>
          <p>Não minta para o seu mecânico!</p>
          <p>
            Forçar um pneu "nervoso" de lama no seu percurso diário pro trabalho
            é pedir para chegar cansado e suado.
          </p>
          <p>
            Se você roda em estradão ou ciclovia, busque os pneus que têm a
            faixa do meio quase contínua; a bike embala que é uma beleza.
          </p>
          <p>
            Mas se todo fim de semana você enfia a bike na lama e nas raízes,
            tracionar é questão de sobrevivência.
          </p>
          <p>Respeite o seu terreno.</p>

          <h3>Tipo de pneu</h3>
          <img loading="lazy" width="800" height="600" src="/images/blog/1/pneu_slick_vs_cravo_ptbr.webp"
            alt="Comparação entre Pneu Slick e Pneu Cravo"
            className="w-full rounded-2xl shadow-xl border border-zinc-700 my-8"
          />
          <p>Basicamente você escolhe entre cravo ou "slick" (liso).</p>
          <p>
            Usar pneu cheio de cravos só para andar no asfalto é rasgar
            dinheiro: a borracha agarra no chão e você faz o dobro de força para
            a bicicleta andar.
          </p>
          <p>
            Já os pneus slicks ou semi-lisos fazem a bike deslizar no concreto;
            a energia do seu pedal vira velocidade pura.
          </p>
          <p>
            Agora, se o seu negócio é chão de terra, o cravo é a sua âncora; sem
            ele, a derrapagem é certa.
          </p>
          <p>Seja realista com o piso que você pisa na maior parte do tempo.</p>

          <h3>Largura do pneu</h3>
          <img loading="lazy" width="800" height="600" src="/images/blog/1/largura_e_clearance_1787509323239.webp"
            alt="Demonstração do clearance entre o quadro da bike e a largura do pneu"
            className="w-full rounded-2xl shadow-xl border border-zinc-700 my-8"
          />
          <p>
            Sabe por que vemos desde pneus fininhos (1.9) até uns bem largões
            (2.3)?
          </p>
          <p>O fino embala muito mais rápido no plano.</p>
          <p>
            O largo é feito para rodar com menos ar, passando por cima de pedras
            e raízes como um trator, te dando um conforto absurdo.
          </p>
          <p>
            O perigo mora aqui: usar um pneu fino numa trilha cheia de pedras e
            com a pressão baixa vai te dar a famosa "mordida de cobra" — a
            pancada prensa a câmara contra o aro e rasga tudo.
          </p>
          <p>
            Portanto, asfalto pede pneu estreito; trilha de verdade exige volume
            para absorver a pancada.
          </p>

          <h3>Resistência e Durabilidade</h3>
          <p>
            A vida do seu pneu depende dos fios internos e do tipo de borracha.
          </p>
          <p>A mágica da maciez está na sigla TPI (fios por polegada).</p>
          <p>
            Fios mais grossos (TPI baixo) fazem um pneu mais barato, duro e
            quase blindado para a cidade.
          </p>
          <p>
            Fios fininhos (TPI alto) deixam o pneu maleável, grudando nos
            obstáculos da trilha, mas gastam mais rápido.
          </p>
          <p>
            O erro que eu mais vejo é a galera comprando um pneu macio de
            competição e usando para ir trabalhar no asfalto escaldante; o pneu
            derrete em três meses!
          </p>

          <h3>Aderência</h3>
          <img loading="lazy" width="800" height="600" src="/images/blog/1/cravos_laterais_1787509338144.webp"
            alt="Cravos laterais do pneu mordendo a terra na curva"
            className="w-full rounded-2xl shadow-xl border border-zinc-700 my-8"
          />
          <p>Aderência é confiança.</p>
          <p>
            Na hora que você inclina a bike na curva, são os cravos laterais e a
            maciez da borracha que impedem a frente de ir embora.
          </p>
          <p>
            Borracha mais "chiclete" gruda nas pedras úmidas maravilhosamente
            bem, mas gasta rápido.
          </p>
          <p>
            Pneus focados apenas em rodar solto na reta sacrificam esses cravos
            laterais.
          </p>
          <p>
            Dê uma olhada no desenho: se tem muito cravo na beirada, ele quer te
            segurar nas curvas ariscas da montanha.
          </p>

          <h3>Pressão Recomendada</h3>
          <p>Pneu bom com calibragem errada fica ruim!</p>
          <p>
            Colocar ar até o pneu virar pedra faz a bike quicar em qualquer
            desnível, perdendo contato com o chão e a aderência na frenagem.
          </p>
          <p>
            Andar com ele murcho demais vai rasgar as paredes laterais dele ou
            amassar seu aro.
          </p>
          <p>
            O pulo do gato é ler a lateral do pneu (lá diz a faixa de PSI) e
            ajustar de acordo com o seu peso.
          </p>
          <p>Vai pra trilha?</p>
          <p>Tira um pouco de ar pro pneu "abraçar" as pedras.</p>
          <p>Voltou pro asfalto?</p>
          <p>Enche de novo para a bike correr solta.</p>

          <h3>Estilo de pilotagem</h3>
          <p>A maneira como você pilota muda o jogo.</p>
          <p>
            Se você é agressivo, entra chutado nas curvas e adora uma descida
            técnica, você depende muito da estabilidade dos cravos laterais de
            um pneu parrudo.
          </p>
          <p>
            Se o seu foco é pedalar por horas a fio de forma constante num
            estradão, você precisa de um pneu de rolagem rápida, focado em
            economizar a energia das suas pernas.
          </p>
          <p>
            Escolha uma borracha que faça sentido para o seu jeito de girar.
          </p>
        </div>

        {/* FAQ Section */}
        <h2 className="text-2xl font-bold text-white mb-8 mt-16 flex items-center gap-3">
          <HelpCircle className="text-cyan-500 w-8 h-8" />
          Perguntas frequentes (FAQ)
        </h2>
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-8">
          <p>Com tantas siglas em inglês, eu sei que a cabeça dá um nó.</p>
          <p>
            Mas calma, como eu sempre digo pra galera encostada aqui no balcão,
            a gente desmistifica isso rapidinho para você comprar com sabedoria.
          </p>
        </div>
        <div className="space-y-4 mb-16">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-zinc-700 rounded-xl overflow-hidden bg-zinc-900 shadow-sm hover:shadow-md transition-shadow"
            >
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
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? "max-h-[1000px] py-4" : "max-h-0 py-0"}`}
              >
                <div className="space-y-3 prose prose-slate">
                  {faq.answer.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-zinc-400">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <h2>Dicas para Aumentar a Vida Útil do Pneu</h2>
          <p>Borracha não é infinita, mas você pode esticar a vida dela.</p>
          <p>Primeiro truque de oficina: a roda de trás gasta mais rápido.</p>
          <p>Faça o famoso rodízio invertendo eles de lugar com o tempo.</p>
          <p>Segundo: pare com a mania de derrapar arrastando o pneu!</p>
          <p>Isso "lixa" um lado só do pneu e deforma a rodagem.</p>
          <p>Terceiro: lavou a bike?</p>
          <p>Tire os caquinhos de vidro fincados entre os cravos.</p>
          <p>
            E pelo amor de Deus, não guarde a bicicleta tomando sol e chuva
            direto no quintal, senão o composto resseca antes da hora.
          </p>
        </div>

        {/* CONCLUSÃO */}
        <div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700 shadow-sm mt-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Conclusão</h2>
          <div className="space-y-4 prose prose-lg text-zinc-300">
            <p>
              Encontrar o pneu certo não é achar a "borracha mágica", é ser
              honesto com o tipo de pedal que você faz.
            </p>
            <p>
              Se o seu negócio é baixar o tempo nas trilhas cabulosas, quebre o
              porquinho e coloque um conjunto Kevlar Tubeless Ready: a bike vira
              outra, o peso desaparece e a aderência dobra.
            </p>
            <p>
              Agora, se a sua pegada é ir pro trabalho e dar um pulo no estradão
              fim de semana, um bom pneu de arame não esvazia sua conta e te
              leva pro abraço.
            </p>
            <p>
              Cheque o desgaste, ajuste a libragem antes de sair de casa e pare
              de sofrer arrastando um pneu de trator no asfalto liso.
            </p>
            <p>
              Faça as pazes com as tecnologias e deixe o conjunto trabalhar a
              seu favor!
            </p>
          </div>
        </div>

        {/* SOBRE O AUTOR */}
        <div className="bg-cyan-950/20 p-8 rounded-2xl border border-cyan-900/50 shadow-sm mt-8 mb-16 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="shrink-0 mx-auto md:mx-0">
            <a
              href="/author/rafael-martins"
              className="hover:opacity-80 transition-opacity block"
            >
              <img loading="lazy" width="800" height="600" src="/images/autores/Rafael Martins.webp"
                alt="Rafael Martins"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-cyan-900/50 hover:border-cyan-500 transition-colors shadow-xl"
              />
            </a>
          </div>
          <div>
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">
              Sobre o Autor
            </h2>
            <a
              href="/author/rafael-martins"
              className="hover:text-cyan-400 transition-colors"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Rafael Martins
              </h3>
            </a>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Rafael é um apaixonado por mecânica de bicicletas e ciclista
              inveterado. No balcão da oficina ou nas trilhas de final de
              semana, seu objetivo é traduzir o "mecaniquês" técnico e chato
              para ajudar as pessoas a não rasgarem dinheiro, escolhendo
              exatamente as peças que precisam. As recomendações aqui são fruto
              de mãos sujas de graxa, análise minuciosa de fichas oficiais e da
              vivência real de quem gasta o pneu no asfalto e na terra,
              defendendo sempre uma mobilidade mais inteligente e saudável.
            </p>
          </div>
        </div>
      </article>
    </>
  );
};
