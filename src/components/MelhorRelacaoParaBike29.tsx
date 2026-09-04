import React, { useState } from 'react';
import AffiliateCard from './AffiliateCard';
import ExitIntentPopup from './ExitIntentPopup';
import { products, accessories } from '../data/products';
import { HelpCircle, ArrowRight, Check, X, ShoppingCart } from 'lucide-react';

export const MelhorRelacaoParaBike29: React.FC = () => {
  const [quizResult, setQuizResult] = useState<string | null>(null);

  const productMetadata: Record<string, { category: string; score: string; shortName: string }> = {
    "kit-shimano-tourney-21v": { shortName: "Shimano Tourney 21v", category: "Uso Urbano", score: "8.5 / 10" },
    "grupo-absolute-wild-2-1x12v": { shortName: "Absolute Wild 2 1x12v", category: "Trilha Leve / Mista", score: "9.0 / 10" },
    "kit-shimano-alivio-m3100-3x9v": { shortName: "Shimano Alivio 3x9", category: "Uso Misto", score: "9.3 / 10" },
    "kit-shimano-deore-m6100-gta": { shortName: "Shimano Deore M6100 GTA", category: "Alta Performance", score: "9.5 / 10" },
  };

  return (
    <>
      <ExitIntentPopup />
      
      {/* Hero Section */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img fetchpriority="high" width="1200" height="800" src="/images/blog/1/melhor-relacao-para-bike-29.webp" 
            alt="Melhor Relação para Bike aro 29" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Melhor Relação para Bike aro 29 <br/>
            <span className="text-cyan-400">(4 Modelos Recomendados)</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span>Por</span>
              <a href="/author/rafael-martins" className="flex items-center gap-2 hover:text-cyan-400 transition-colors font-semibold group">
                <img loading="lazy" width="800" height="600" src="/images/autores/Rafael Martins.webp" alt="Rafael Martins" className="w-8 h-8 rounded-full border-2 border-transparent group-hover:border-cyan-400 transition-colors" />
                Rafael Martins
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="space-y-6 prose prose-lg max-w-none text-zinc-300 mb-12">
          <p>Sabe aquela sensação frustrante de que a marcha não entra na hora que você mais precisa?</p>
          <p>Ou quando a subida é tão pesada que parece que você está empurrando um caminhão?</p>
          <p>Isso tira o prazer de qualquer ciclista.</p>
          <p>Encontrar a melhor relação para bike 29 é justamente resolver esse problema.</p>
          <p>Quando você entende como o tamanho das coroas (na frente) e dos cassetes (atrás) muda o seu pedal, tudo fica mais fácil.</p>
          <p>O ajuste certo é o que transforma todo o seu suor em um movimento fluido, te dando tração na trilha e velocidade no asfalto.</p>
        </div>

        {/* SIMULADOR RÁPIDO */}
        <div className="my-8 p-6 bg-gradient-to-br from-zinc-800 to-zinc-900 text-white rounded-2xl shadow-xl border border-zinc-700">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="text-cyan-400 w-6 h-6 animate-pulse" />
            <h3 className="text-xl font-bold">Qual é o seu maior desafio nas trilhas?</h3>
          </div>
          <p className="text-zinc-300 text-sm mb-4">Selecione uma opção para ver a indicação ideal:</p>
          
          <div className="grid sm:grid-cols-2 gap-3">
            <button 
              onClick={() => setQuizResult('subida')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${quizResult === 'subida' ? 'bg-cyan-500 text-zinc-950 border-cyan-500' : 'bg-zinc-800 border-zinc-600 hover:border-cyan-500'}`}
            >
              <span>Subidas muito pesadas</span>
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => setQuizResult('plano')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${quizResult === 'plano' ? 'bg-cyan-500 text-zinc-950 border-cyan-500' : 'bg-zinc-800 border-zinc-600 hover:border-cyan-500'}`}
            >
              <span>Faltam marchas no estradão plano</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {quizResult && (
            <div className="mt-6 p-4 bg-zinc-700/50 border border-zinc-600 rounded-xl animate-fadeIn">
              {quizResult === 'subida' ? (
                <p className="text-sm leading-relaxed">
                  🎯 <strong>Recomendação:</strong> Você precisa de um kit com cassete traseiro maior, como o <a href="#absolute-wild-2" className="text-cyan-400 underline font-bold">Absolute Wild 2 (11-50)</a> ou o <a href="#deore-m6100" className="text-cyan-400 underline font-bold">Deore M6100 (11-52)</a>. Isso te dará a marcha "salva-vidas" para girar leve nas ladeiras.
                </p>
              ) : (
                <p className="text-sm leading-relaxed">
                  🎯 <strong>Recomendação:</strong> Um sistema de marchas versátil como o <a href="#alivio-m3100" className="text-cyan-400 underline font-bold">Shimano Alivio 3x9</a> é perfeito para você. As coroas maiores na frente vão te dar velocidade final no asfalto sem ficar girando em falso.
                </p>
              )}
            </div>
          )}
        </div>

        {/* VITRINE / TABELA COMPARATIVA */}
        <div className="mb-16 max-w-[850px] mx-auto bg-zinc-800/50 p-2.5 rounded-2xl sm:p-5 border border-zinc-700 shadow-sm mt-16">
          <h2 className="text-2xl font-extrabold text-white mb-6 text-center">Melhores Relações</h2>
          
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
                {['kit-shimano-tourney-21v', 'grupo-absolute-wild-2-1x12v', 'kit-shimano-alivio-m3100-3x9v', 'kit-shimano-deore-m6100-gta'].map((id) => {
                  const product = products.find(p => p.id === id);
                  if (!product) return null;
                  const meta = productMetadata[product.id] || { shortName: product.name, category: product.category, score: "-" };
                  return (
                    <tr key={product.id} className="border-b border-zinc-700 last:border-b-0 hover:bg-zinc-800/50 transition-colors">
                      <td className="p-2 align-middle text-center">
                        <div className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] border border-slate-100 rounded flex items-center justify-center p-0.5 bg-zinc-100 mx-auto overflow-hidden">
                          {product.imageUrl ? (
                             <img loading="lazy" width="800" height="600" src={product.imageUrl} alt={meta.shortName} className="max-w-full max-h-full block object-cover" />
                          ) : (
                             <span className="text-[10px] text-zinc-400 font-bold">Produto</span>
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

        <section id="shimano-tourney" className="scroll-mt-24 pt-8">
          <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            Kit Shimano Tourney 21v Completo
          </h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'kit-shimano-tourney-21v')?.imageUrl} alt={products.find(p => p.id === 'kit-shimano-tourney-21v')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none">
            <p>Se a sua ideia é ressuscitar aquela bike de passeio ou ir para o trabalho sem gastar uma fortuna, o kit Tourney de 21 marchas é o seu melhor amigo.</p>
            <p>Ele acaba com aquela raiva de marcha pulando do nada, entregando a confiabilidade da Shimano num precinho camarada.</p>
            <p>O pulo do gato desse kit é a catraca Megarange (aquela engrenagem grandona de 34 dentes).</p>
            <p>O que isso muda no seu pedal?</p>
            <p>Ela te dá uma marcha de "socorro" super leve para você subir ladeiras sem precisar descer da bike.</p>
            <p>Só um aviso de amigo: esse sistema usa cubo de rosca e é um pouco mais pesado (quase 2,5 kg).</p>
            <p>Ou seja, é perfeito para o asfalto e parque, mas não invente de colocar em trilhas pesadas, senão ele vai abrir o bico.</p>
          </div>

          <div className="mt-8 mb-8">
            <AffiliateCard product={products.find(p => p.id === 'kit-shimano-tourney-21v')!} />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8 mb-12">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
              <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                <li>Kit completão, já vem com movimento central.</li>
                <li>A catraca Megarange é um salva-vidas nas subidas.</li>
                <li>Peças de reposição custam a preço de banana.</li>
                <li>Durabilidade Shimano para o uso urbano.</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
              <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                <li>Usa sistema de rosca antigo (não aceita os cubos cassete modernos).</li>
                <li>O peso extra não é legal para quem quer fazer trilha de verdade.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="absolute-wild-2" className="scroll-mt-24 pt-8 border-t border-zinc-800">
          <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            Grupo Absolute Wild 2 Prime Relação 1x12v MTB
          </h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'grupo-absolute-wild-2-1x12v')?.imageUrl} alt={products.find(p => p.id === 'grupo-absolute-wild-2-1x12v')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none">
            <p>Sente que a bike está ultrapassada?</p>
            <p>O Absolute Wild 2 de 12 marchas é o seu passaporte para o mountain bike moderno.</p>
            <p>Ele joga o câmbio dianteiro no lixo.</p>
            <p>Isso simplifica a sua vida: menos peças para quebrar, menos cabos para regular e a corrente para de cair, graças à coroa única de 34 dentes.</p>
            <p>A grande sacada aqui é que ele encaixa no cubo tradicional (padrão HG).</p>
            <p>Traduzindo: você moderniza a bike inteira sem precisar comprar rodas novas!</p>
            <p>É o custo-benefício perfeito para atualizar a máquina.</p>
            <p>O único ponto de atenção é que o câmbio traseiro não tem a "trava de mola" (clutch).</p>
            <p>Então, se você pegar uma descida com muita pedra, a corrente vai bater no quadro.</p>
            <p>Mas para estradões de terra e lazer, é uma escolha inteligente e barata.</p>
          </div>

          <div className="mt-8 mb-8">
            <AffiliateCard product={products.find(p => p.id === 'grupo-absolute-wild-2-1x12v')!} />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8 mb-12">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
              <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                <li>Só um trocador no guidão: pilotagem muito mais simples.</li>
                <li>Usa o cubo padrão que você já tem (economia na roda).</li>
                <li>Cassete gigante (11-50 dentes): sobe qualquer parede.</li>
                <li>Já vem com corrente KMC de alta durabilidade.</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
              <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                <li>Como não tem trava de mola, a corrente bate no quadro em descidas acidentadas.</li>
                <li>O passador não tem aquele visor numérico para ver a marcha.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="alivio-m3100" className="scroll-mt-24 pt-8 border-t border-zinc-800">
          <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            Kit Shimano Alivio M3100 3x9v
          </h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'kit-shimano-alivio-m3100-3x9v')?.imageUrl} alt={products.find(p => p.id === 'kit-shimano-alivio-m3100-3x9v')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none">
            <p>Você é do tipo que usa a bike para viajar, roda no asfalto a semana toda e pega estrada de terra no domingo?</p>
            <p>Então o Alivio de 27 marchas (3x9) foi feito para você.</p>
            <p>Esse sistema te dá um leque de opções gigantesco.</p>
            <p>Você nunca vai ficar "girando em falso" no plano e sempre terá fôlego nas subidas longas.</p>
            <p>O destaque desse câmbio é a tecnologia Shadow RD.</p>
            <p>Sabe o que é isso?</p>
            <p>O câmbio fica mais escondido debaixo do quadro, evitando bater em pedras e galhos.</p>
            <p>Além disso, o pedivela usa o eixo estriado (Octalink), o que deixa a sua pedalada muito mais firme, sem torcer a peça.</p>
            <p>Dá um pouquinho mais de trabalho regular o câmbio da frente?</p>
            <p>Dá.</p>
            <p>Mas a versatilidade que você ganha compensa cada minuto do ajuste.</p>
          </div>

          <div className="mt-8 mb-8">
            <AffiliateCard product={products.find(p => p.id === 'kit-shimano-alivio-m3100-3x9v')!} />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8 mb-12">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
              <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                <li>Marcha que não acaba mais, encara de asfalto a serra de terra.</li>
                <li>Câmbio escondidinho (Shadow RD) que não bate em pedra.</li>
                <li>Movimento central Octalink deixa a pedalada firme e transfere bem a força.</li>
                <li>Um verdadeiro tanque de guerra em durabilidade.</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
              <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                <li>Câmbio dianteiro pede mais idas à oficina para regulagem fina.</li>
                <li>Três coroas na frente acumulam mais barro na trilha.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="deore-m6100" className="scroll-mt-24 pt-8 border-t border-zinc-800">
          <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
            Kit Shimano Deore 12v M6100 + Cassete GTA HG
          </h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'kit-shimano-deore-m6100-gta')?.imageUrl} alt={products.find(p => p.id === 'kit-shimano-deore-m6100-gta')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none">
            <p>Quer o funcionamento de uma bike de competição sem ter que trocar as suas rodas?</p>
            <p>Presta atenção nessa montagem.</p>
            <p>A gente pega a precisão absurda do câmbio Shimano Deore M6100 e mistura com um cassete da marca GTA (11-52 dentes), feito sob medida para encaixar no seu cubo tradicional.</p>
            <p>Aqui a brincadeira fica séria.</p>
            <p>Você leva a tecnologia Shadow RD+ (aquela chavinha cinza no câmbio).</p>
            <p>Você liga a chave, a mola trava e a corrente fica esticada.</p>
            <p>Acabou a barulheira da corrente batendo no quadro nas descidas!</p>
            <p>O trocador também permite descer três marchas de uma vez só com um empurrão do dedão.</p>
            <p>A única "perda" é que esse cassete começa com 11 dentes (e não 10, como os tops de linha), o que te tira um pouquinho de velocidade final no asfalto reto.</p>
            <p>Um preço mínimo a se pagar por um sistema profissional e econômico.</p>
          </div>

          <div className="mt-8 mb-8">
            <AffiliateCard product={products.find(p => p.id === 'kit-shimano-deore-m6100-gta')!} />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8 mb-12">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
              <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                <li>Trava do câmbio (Shadow RD+) deixa a bike completamente silenciosa na trilha.</li>
                <li>Encaixa no seu cubo comum, salvando a sua roda atual.</li>
                <li>Marcha super leve de 52 dentes: você vai subir barrancos sorrindo.</li>
                <li>Trocas super rápidas e secas.</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
              <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                <li>Você perde um chorinho de velocidade máxima no plano.</li>
                <li>O cassete paralelo não tem a mesma proteção contra barro que um cassete 100% Shimano.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CROSS-SELL BANNER (3 produtos) */}
        <div className="my-12 bg-zinc-900 rounded-2xl p-6 border border-zinc-700 shadow-xl">
          <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <ShoppingCart size={24} /> Seu kit básico de manutenção para estender a vida da relação
          </h3>
          <p className="text-zinc-300 text-sm mb-6">Manter a relação limpa e lubrificada é o que salva seu bolso. Aproveite para conferir as ferramentas certas que vão prolongar a vida útil das suas peças:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {accessories.filter(i => ['kit-limpeza-desengraxante', 'lubrificante-corrente-cera', 'ferramenta-medidora-corrente'].includes(i.id)).map(p => {
              return (
                <a 
                  key={p.id}
                  href={p.affiliateUrl} 
                  aria-label={`Ver oferta de ${p.name}`} 
                  target="_blank" 
                  rel="noopener noreferrer sponsored nofollow" 
                  className="block bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden hover:border-cyan-500 transition-colors group shadow-lg flex flex-col"
                >
                  <div className="aspect-square bg-white flex items-center justify-center p-4">
                    <img loading="lazy" width="800" height="600" src={p.imageUrl} alt={p.name} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-4 text-center flex flex-col items-center">
                    <h4 className="text-zinc-100 font-bold text-sm mb-3">{p.name}</h4>
                    <span className="block bg-cyan-500 group-hover:bg-cyan-400 text-zinc-950 w-full py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-md">Ver Preço →</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <h2 className="text-3xl font-extrabold text-white border-b-4 border-cyan-400 pb-2 mt-16 mb-8">
          Como escolher a melhor relação para bike aro 29?
        </h2>
        <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none mb-12">
          <p>Não vá pelo que a moda diz; vá pelo que as suas pernas aguentam.</p>
          <p>O segredo é casar o seu ritmo natural de giro com o sobe e desce do seu trajeto.</p>
          <p>Se você só pega morro, precisa de um "câmbio curto" (catraca enorme atrás e coroa pequena na frente).</p>
          <p>Isso deixa o pedal leve e poupa seu joelho.</p>
          <p>Agora, se você pedala em estradão plano querendo velocidade, coroa maior na frente é o canal para não ficar girando a perna igual a um ventilador sem sair do lugar.</p>
          <p>Um erro clássico é esquecer de não cruzar a corrente (usar a marcha mais pesada na frente e a mais leve atrás ao mesmo tempo).</p>
          <p>Isso torce o sistema todo e come as engrenagens caríssimas rapidinho.</p>
          <p>A montagem perfeita é aquela onde você mantém o ritmo da respiração sem precisar dar "sprints" desesperados.</p>
          <p>Avalie seu fôlego real antes de passar o cartão, senão você compra um kit pesado e joga dinheiro fora.</p>
        </div>

        <h2 className="text-3xl font-extrabold text-white border-b-4 border-cyan-400 pb-2 mt-16 mb-8">
          Calculando a relação da bike
        </h2>
        
        

        <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none mb-12">
          <p>Quer entender de mecânica de verdade?</p>
          <p>Então aprenda sobre "desenvolvimento métrico".</p>
          <p>É a matemática básica que te diz quantos metros a sua bike anda cada vez que você dá uma volta completa no pedal.</p>
          <p>A conta é a seguinte: divida o número de dentes da coroa da frente pelos dentes do pinhão de trás, e multiplique pelo tamanho da sua roda.</p>
          <p>Deu um número baixo?</p>
          <p>A marcha está levinha, perfeita para encarar montanha sem estourar o pulmão.</p>
          <p>Deu um número alto?</p>
          <p>É marcha de asfalto, para dar velocidade final.</p>
          <p>Mas ó, não leve só a matemática em conta.</p>
          <p>Terreno com muita areia ou pneu muito murcho roubam sua força.</p>
          <p>Use essa conta para ter uma base, mas quem dita as regras é a poeira da trilha.</p>
        </div>

        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
          Vantagens e desvantagem da montagem
        </h3>
        <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none mb-12">
          <p>Montar uma bike "Frankenstein" (misturando marcas de cassete, corrente e câmbio) é tentador para salvar uma grana.</p>
          <p>A vantagem é que você escolhe o tamanho exato da engrenagem que quer e o conserto fica mais barato.</p>
          <p>Mas cuidado: os engenheiros que desenharam o grupo fechado testaram milímetramente o encaixe da corrente nos dentes.</p>
          <p>Quando você mistura marcas diferentes, a rampa de subida da marcha pode não bater.</p>
          <p>O resultado?</p>
          <p>Marcha imprecisa, estalos e desgaste rápido.</p>
          <p>Antes de inventar moda, pergunte ao mecânico se as peças conversam bem entre si.</p>
        </div>

        <h2 className="text-3xl font-extrabold text-white border-b-4 border-cyan-400 pb-2 mt-16 mb-8">
          Manutenção e troca da relação
        </h2>
        
        <div className="my-10 text-center">
          <img loading="lazy" width="800" height="600" src="/images/blog/1/manutencao-corrente.webp" alt="Manutenção e troca de corrente" className="w-full rounded-xl shadow-lg border border-zinc-700" />
        </div>

        <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none mb-12">
          <p>Não adianta comprar o melhor kit do mundo se você não cuida.</p>
          <p>O tempo de vida da sua transmissão depende 100% da limpeza.</p>
          <p>Sabe aquela mistura de óleo sujo com areia e terra?</p>
          <p>Ela vira uma lixa!</p>
          <p>A cada pedalada, ela vai desgastando o metal do seu cassete sem você perceber.</p>
          <p>A dica de ouro da oficina: compre uma ferramentazinha chamada "medidor de corrente".</p>
          <p>A cada 500 ou 800 km, meça a corrente.</p>
          <p>Trocar a corrente na hora certa (antes de ela esticar demais) salva o seu cassete e as suas coroas.</p>
          <p>Se você deixar a corrente alargar demais, ela começa a "comer" os dentes das peças.</p>
          <p>Aí, meu amigo, quando a marcha começar a pular, você vai ter que trocar tudo de uma vez, e o prejuízo é grande.</p>
          <p>Limpeza e lubrificação garantem aquela troca de marcha macia igual quando saiu da loja.</p>
        </div>

          <div className="mb-16">
            <AffiliateCard product={accessories.find(p => p.id === 'ferramenta-medidora-corrente')!} />
          </div>

        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
          Armazenagem da bike fora de temporada: Como preparar e o que fazer para não dar dor de cabeça
        </h3>
        <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none mb-12">
          <p>Vai deixar a magrela encostada por uns meses?</p>
          <p>Não jogue ela no canto de qualquer jeito.</p>
          <p>Sujeira guardada atrai ferrugem.</p>
          <p>Dê uma lavada pesada na corrente e nos câmbios, e passe um lubrificante seco.</p>
          <p>A dica secreta: deixe a marcha na coroa menor e no pinhão menor.</p>
          <p>Isso tira toda a tensão das molas dos câmbios, evitando que elas fiquem "cansadas".</p>
          <p>Evite lugar úmido, porque a umidade contamina a graxa dos rolamentos.</p>
          <p>Trate a garagem como uma revisão preventiva, para não ter surpresas na hora de voltar a pedalar.</p>
        </div>

        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
          Quando o guidão, mesa ou canote merecem revisão imediata
        </h3>
        <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none mb-12">
          <p>Todo mundo só olha para o câmbio e esquece do cockpit (onde você segura a bike).</p>
          <p>Escutou um barulho de metal rangendo vindo da mesa?</p>
          <p>O guidão deu um estalo quando você fez força na subida?</p>
          <p>O canote do selim não para de fazer "nhec-nhec"?</p>
          <p>Pare a bike!</p>
          <p>Isso é sinal claro de fadiga de material ou parafuso solto.</p>
          <p>Se a mesa quebrar numa descida, o tombo é feio.</p>
          <p>Desmonte, limpe, veja se não tem trinca no alumínio e use pasta de montagem no canote.</p>
          <p>Não brinque com a sua segurança.</p>
        </div>

        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
          Como revisar parafusos e pontos críticos da bike sem danificar peças
        </h3>
        <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none mb-12">
          <p>Tem muito ciclista com mão pesada que acha que parafuso bom é parafuso apertado até sair água.</p>
          <p>Errado!</p>
          <p>Peças de alumínio e carbono modernas têm limite de aperto (torque).</p>
          <p>Use uma chave dinamométrica, que é uma ferramenta que "estala" quando atinge o aperto certo.</p>
          <p>Procure aquele número escrito na peça (ex: "Max Torque 5Nm").</p>
          <p>Esmagar uma espiga de suspensão de carbono ou espanar uma rosca no quadro dá um prejuízo violento.</p>
          <p>Um aperto feito com carinho, cruzando os parafusos na ordem certa, é o que garante que a bike não desmonte no meio do mato.</p>
        </div>

        {/* CROSS-SELL ISOLADO CONTEXTUAL: Chave Dinamométrica */}
        <div className="mb-12">
          <AffiliateCard product={accessories.find(p => p.id === 'chave-dinamometrica')!} />
        </div>

        <h2 className="text-3xl font-extrabold text-white border-b-4 border-cyan-400 pb-2 mt-16 mb-8">
          Conclusão
        </h2>
        <div className="space-y-4 prose prose-lg text-zinc-300 max-w-none mb-12">
          <p>Escolher a relação certa para a sua aro 29 não é só um detalhe técnico, é o que define se você vai voltar para casa sorrindo ou empurrando a bike de cara amarrada.</p>
          <p>Seja para dar um fôlego novo na sua urbana com o clássico Shimano Tourney, ou buscar a precisão de um Deore 12v na trilha de final de semana, a resposta está na sua perna e no seu terreno.</p>
          <p>Agora que você entendeu como os dentes, coroas e câmbios jogam juntos, é só alinhar com seu orçamento, fazer a manutenção certinha e curtir o vento no rosto com total confiança na máquina.</p>
        </div>

        {/* SOBRE O AUTOR */}
        <div className="bg-cyan-950/20 p-8 rounded-2xl border border-cyan-900/50 shadow-sm mt-8 mb-16 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="shrink-0 mx-auto md:mx-0">
            <img loading="lazy" width="800" height="600" src="/images/autores/Rafael Martins.webp" alt="Rafael Martins" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-cyan-900/50 hover:border-cyan-500 transition-colors shadow-xl" />
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
