import React, { useState } from 'react';
import AffiliateCard from './AffiliateCard';
import BunnerDoMeio from './BunnerDoMeio';
import ExitIntentPopup from './ExitIntentPopup';
import { HelpCircle, Check, X } from 'lucide-react';
import { products, accessories } from '../data/products';

export const ArtigoGtiRomaAro29: React.FC = () => {
  const [simulacao, setSimulacao] = useState<'urbano' | 'trilha' | null>(null);

  return (
    <>
      <ExitIntentPopup />
      
      {/* Hero Section */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img fetchpriority="high" width="1200" height="800" src="/images/blog/1/bike-gti-roma-aro-29-e-boa.webp" 
            alt="Bicicleta GTI Roma Aro 29 Background" 
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Bicicleta GTI ROMA Aro 29 é boa Ou <br/>
            <span className="text-cyan-400">Alternativa KSW é melhor?</span>
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-zinc-400">
            <span className="flex items-center gap-2">
              <a href="/author/rafael-martins" className="hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center border border-cyan-500/30 overflow-hidden inline-block align-middle mr-2">
                  <img loading="lazy" width="800" height="600" src="/images/autores/Rafael Martins.webp" alt="Rafael" className="w-full h-full object-cover" />
                </div>
                Por Rafael Martins
              </a>
            </span>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <p>E aí, beleza?</p>
          <p>Escolher a primeira bike para fugir do trânsito na cidade ou arriscar um estradão de terra no fim de semana sempre dá aquele frio na barriga.</p>
          <p>Você vê a GTI ROMA Aro 29 com um preço legal, mas logo esbarra em opções consagradas como a KSW e a dúvida bate: qual delas vai aguentar o tranco sem te deixar na mão?</p>
          <p>Chega mais no balcão da oficina.</p>
          <p>Vamos deixar o "tecniquês" de lado e desmontar essa bicicleta peça por peça, para você saber exatamente onde está colocando o seu dinheiro.</p>
        </div>

        {/* Simulador de Perfil */}
        <div className="bg-zinc-800/50 p-6 md:p-8 rounded-2xl border border-cyan-900/50 shadow-lg mb-12">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-cyan-500" />
            Qual será o seu trajeto principal?
          </h3>
          <p className="text-zinc-300 mb-4">Selecione para ver a recomendação ideal:</p>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('urbano')} />
              <span className="text-zinc-200">Cidade e Asfalto</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('trilha')} />
              <span className="text-zinc-200">Trilhas e Estradão de Terra</span>
            </label>
          </div>
          {simulacao === 'urbano' && (
            <div className="mt-4 p-4 bg-emerald-950/30 border border-emerald-900/50 rounded-lg text-emerald-400 text-sm">
              <strong className="block mb-1">Ótima escolha!</strong> A GTI Roma é fantástica para o asfalto, com cabeamento interno e foco total no conforto urbano.
            </div>
          )}
          {simulacao === 'trilha' && (
            <div className="mt-4 p-4 bg-cyan-950/30 border border-cyan-900/50 rounded-lg text-cyan-400 text-sm">
              <strong className="block mb-1">Vale considerar outra opção!</strong> Para estradão de terra, a KSW XLT 100 pode oferecer uma geometria mais agressiva e vantajosa.
            </div>
          )}
        </div>

        {/* VITRINE */}
        <h2>Modelos Avaliados</h2>
        <div className="mb-16 max-w-[850px] mx-auto bg-zinc-800/50 p-2.5 rounded-2xl sm:p-5 border border-zinc-700 shadow-sm mt-8">
          <div className="overflow-x-auto rounded-xl border border-zinc-700 bg-zinc-900">
            <table className="w-full border-collapse">
              <thead className="bg-zinc-800 text-zinc-300 text-xs uppercase font-bold border-b border-zinc-700">
                <tr>
                  <th className="p-3 text-center w-[70px] sm:w-[90px]">Foto</th>
                  <th className="p-3 text-left">Modelo</th>
                  <th className="p-3 text-center hidden sm:table-cell">Indicação</th>
                  <th className="p-3 text-center w-[100px] sm:w-[150px]">Ação</th>
                </tr>
              </thead>
              <tbody>
                {['gti-roma', 'ksw-xlt-100'].map((id) => {
                  const product = products.find(p => p.id === id);
                  if (!product) return null;
                  return (
                    <tr key={product.id} className="border-b border-zinc-700 last:border-b-0 hover:bg-zinc-800/50 transition-colors">
                      <td className="p-2 align-middle text-center">
                        <div className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] border border-slate-100 rounded flex items-center justify-center p-0.5 bg-zinc-100 mx-auto overflow-hidden">
                          {product.imageUrl ? (
                             <img loading="lazy" width="800" height="600" src={product.imageUrl} alt={product.name} className="max-w-full max-h-full block object-cover" />
                          ) : (
                             <span className="text-[10px] text-zinc-400 font-bold">Bicicleta</span>
                          )}
                        </div>
                      </td>
                      <td className="p-3 text-sm sm:text-base font-bold text-white align-middle">
                        <a href={product.affiliateUrl} aria-label={`Ver oferta de ${product.name}`} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                          {product.name}
                        </a>
                      </td>
                      <td className="p-3 text-sm text-zinc-400 text-center align-middle hidden sm:table-cell">
                        {product.category}
                      </td>
                      <td className="p-3 align-middle text-center">
                        <a href={product.affiliateUrl} aria-label={`Ver oferta de ${product.name}`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-cyan-500 hover:bg-cyan-400 text-zinc-950 text-[11px] sm:text-sm font-bold py-2 sm:py-2.5 px-3 sm:px-5 rounded transition-colors whitespace-nowrap"
                        >
                          VER PREÇO
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <h3>Bicicleta Aro 29 Gti Roma</h3>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src="/images/blog/1/Bicicleta Aro 29 Gti Roma.webp" alt="Bicicleta Aro 29 Gti Roma" className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>

          <h2>Visão geral da GTI ROMA Aro 29</h2>
          <p>A GTI Roma Aro 29 entra em cena como aquela magrela valente para quem está começando.</p>
          <p>A ideia dela é simples: te tirar do transporte público e te colocar para pedalar com segurança, mas sem arregalar os olhos na hora de pagar a fatura.</p>
          <p>Ela foi montada para o uso recreativo e urbano.</p>
          <p>Mas será que ela aguenta os buracos do seu bairro na prática?</p>
          <p>Bora analisar a mecânica dela.</p>

          <h2>Design e Estrutura</h2>
          <p>Olhando de fora, a geometria da GTI Roma tenta te dar o melhor dos dois mundos.</p>
          <p>O desenho dela não te deixa esticado demais (o que acaba com a sua lombar) e nem em pé demais.</p>
          <p>Isso garante que a bike seja ágil para desviar de carros no asfalto e firme o suficiente para uma estradinha de terra.</p>
          <p>Mas o segredo da durabilidade mora nos detalhes do chassi.</p>

          <div className="my-8">
            <img loading="lazy" width="800" height="600" src="/images/blog/1/quadro-cabeamento-interno.webp" alt="Detalhe do cabeamento interno do quadro de alumínio" className="w-full rounded-2xl shadow-xl border border-zinc-700" />
          </div>

          <h2>Quadro</h2>
          <p>O quadro de alumínio é o coração dessa bicicleta.</p>
          <p>Diferente daquelas bikes pesadonas de ferro antigas, o alumínio aqui te dá segurança sem que você precise de pernas de fisiculturista para subir uma ladeira.</p>
          <p>E notei um detalhe muito bacana que você precisa saber: o cabeamento é interno.</p>
          <p>O que isso muda no seu pedal?</p>
          <p>Os cabos de marcha e freio passam por dentro do quadro, longe da lama, da chuva e da poeira.</p>
          <p>Na prática, isso significa que você vai visitar a oficina bem menos vezes para ajustar marchas desreguladas e freios duros.</p>
          <p>As cores são modernas, mas confie em mim: é a solda firme desse alumínio que vai segurar a onda nos buracos.</p>

          <h2>Amortecedor</h2>
          <p>Aqui temos uma suspensão dianteira MOD de 80 mm feita de aço.</p>
          <p>Traduzindo para o dia a dia: ela serve para absorver a vibração daquele paralelepípedo chato ou do asfalto remendado, poupando os seus pulsos de dores.</p>
          <p>Mas vamos jogar limpo: se você quer pular calçada ou enfiar a bike numa trilha cheia de pedras, essa suspensão vai dar "fim de curso" e bater seco.</p>
          <p>Ela foi feita para o lazer urbano.</p>
          <p>A grande sacada é que o quadro aceita upgrades.</p>
          <p>Se amanhã você tomar gosto por trilhas pesadas, basta colocar uma suspensão de 100 mm com ombro de alumínio e a sua bike vira outra máquina.</p>
        </div>

        <AffiliateCard product={products.find(p => p.id === 'gti-roma')!} />

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2"><Check className="w-5 h-5" /> Prós (GTI Roma)</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Quadro em alumínio leve e resistente com cabeamento interno.</li>
              <li>Excelente custo-benefício para iniciantes e uso urbano.</li>
              <li>Postura confortável que poupa a lombar.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2"><X className="w-5 h-5" /> Contras (GTI Roma)</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Suspensão básica que pode bater seco em buracos maiores.</li>
              <li>Freios mecânicos exigem ajustes com o tempo.</li>
            </ul>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src="/images/blog/1/freio-disco-mecanico.webp" alt="Freio a disco mecânico sob chuva" className="w-full rounded-2xl shadow-xl border border-zinc-700" />
          </div>

          <h2>Sistema de Freios</h2>
          <p>Freio não é luxo, é a sua vida no trânsito.</p>
          <p>A GTI Roma aposta em um sistema focado em quem roda pela cidade, onde a manutenção precisa ser prática.</p>
          <p>Mais do que parar a roda, o freio a disco mecânico que equipa esses modelos de entrada cumpre bem o papel na chuva, evitando que a pastilha escorregue como nos velhos freios de borracha (V-Brake).</p>
          <p>Só não esqueça: o cabo de aço "estica" com o tempo.</p>
          <p>Você vai precisar dar uma apertadinha de vez em quando para não perder a força na descida.</p>

          <h2>Tamanho do Quadro</h2>
          <p>Não adianta comprar a bike mais cara do mundo se o quadro for do tamanho errado.</p>
          <p>Pedalar uma bike maior ou menor que você é pedir para ter dor no joelho e rasgar dinheiro.</p>
          <p>A GTI Roma tem uma grade de tamanhos padrão (15, 17, 19...).</p>
          <p>O macete aqui é não chutar: cruze a sua altura exata com o tamanho do quadro recomendado pela fábrica.</p>
          <p>Acertar nessa medida é o que garante que você terá controle total da bike numa emergência e não vai descer dela parecendo que tomou uma surra.</p>

          <h2>Kit de Transmissão</h2>
          <p>O câmbio e as marchas da GTI Roma foram escolhidos para não te dar dor de cabeça no trajeto do trabalho ou do parque.</p>
          <p>É um sistema pensado para giros leves.</p>
          <p>Você não vai ter a precisão de um equipamento profissional de corrida, mas vai ter engrenagens que, se bem lubrificadas, não vão ficar "pulando" ou estalando quando você fizer força para subir a ladeira do seu bairro.</p>
          <p>O segredo da marcha barata funcionar bem é manter a corrente sempre limpa e com óleo adequado.</p>

          <h2>Componentes Adicionais</h2>
          <p>Além do quadro e da marcha, onde você encosta na bike faz toda a diferença.</p>
          <p>O cockpit (guidão, mesa) e o conjunto de rodas definem o seu conforto direto.</p>
          <p>Os componentes periféricos da GTI Roma são básicos, mas encaram bem a rotina urbana.</p>
          <p>Lembre-se que pneus gastam e o selim (banco) é algo muito pessoal.</p>
          <p>Se começar a incomodar, trocar por um selim vazado ou de gel é um ajuste rápido que transforma o seu conforto.</p>
        </div>

        <BunnerDoMeio />

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <h2>GTI ROMA vs KSW XLT 100</h2>
          <div className="my-8">
            <img loading="lazy" width="800" height="600" src={products.find(p => p.id === 'ksw-xlt-100')?.imageUrl} alt={products.find(p => p.id === 'ksw-xlt-100')?.name} className="w-full max-h-[400px] object-contain rounded-2xl shadow-xl border border-zinc-700 bg-white p-4" />
          </div>
          <p>Aqui o bicho pega no balcão da loja.</p>
          <p>Colocar a GTI Roma do lado da KSW XLT 100 é briga boa, já que as duas batem de frente no preço.</p>
          <p>O que muda de verdade?</p>
          <p>A GTI bate de frente apostando pesado no cabeamento interno (que mantém a estética limpa e protege os cabos) e numa postura excelente para o asfalto.</p>
          <p>Ambas são ótimas "primeiras bikes".</p>
          <p>A escolha certeira depende do seu roteiro: se vai rodar mais no asfalto e quer baixa manutenção de cabos, a GTI é jogo duro.</p>
          <p>Se quer uma pegada um pouquinho mais esportiva para a terra, a KSW ganha pontos.</p>
        </div>

        <AffiliateCard product={products.find(p => p.id === 'ksw-xlt-100')!} />
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2"><Check className="w-5 h-5" /> Prós (KSW XLT 100)</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Geometria mais esportiva e agressiva, boa para estradões.</li>
              <li>Excelente custo-benefício e alto valor de revenda.</li>
              <li>Vem equipada com componentes Shimano Tourney, garantindo marchas precisas.</li>
              <li>Quadro em alumínio leve que facilita retomadas e subidas na cidade.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2"><X className="w-5 h-5" /> Contras (KSW XLT 100)</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Pode ser ligeiramente mais cara dependendo dos componentes.</li>
              <li>Não foca tanto em conforto puro para asfalto como a GTI.</li>
            </ul>
          </div>
        </div>

        {/* Cross-Sell Carrossel */}
        <div className="my-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Acessórios Essenciais para sua Bike</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {accessories.filter(i => ['capacete-absolute', 'cadeado-ulock', 'bomba-ar-portatil'].includes(i.id)).map((item) => (
              <a 
                key={item.id} 
                href={item.affiliateUrl}
                aria-label={`Ver oferta de ${item.name}`}
                target="_blank" 
                rel="noopener noreferrer sponsored nofollow"
                className="block bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden hover:border-cyan-500 transition-colors group shadow-lg flex flex-col"
              >
                <div className="aspect-square bg-white flex items-center justify-center p-4">
                  <img loading="lazy" width="800" height="600" src={item.imageUrl} alt={item.name} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-4 text-center flex flex-col items-center">
                  <h4 className="text-zinc-100 font-bold text-sm mb-3">{item.name}</h4>
                  <span className="block bg-cyan-500 group-hover:bg-cyan-400 text-zinc-950 w-full py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-md">Ver Preço →</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <h2>Considerações Finais e Preço</h2>
          <p>Vamos falar de bolso.</p>
          <p>Custando na faixa de R$ 900,00 a R$ 1.200,00, a GTI Roma é uma passagem barata para a liberdade.</p>
          <p>Pelo preço, você leva um chassi de alumínio resistente que prioriza não te deixar a pé no meio da rua.</p>
          <p>Ela é um pouquinho mais pesada nas subidas se comparada a uma bike de 5 mil reais?</p>
          <p>Claro que é.</p>
          <p>O peso inicial vai exigir um pouco mais das suas pernas.</p>
          <p>Mas a estabilidade e o baixo custo das peças de reposição compensam o esforço.</p>
          <p>Se o seu foco é custo-benefício real e ter uma base confiável para futuros upgrades, a GTI Roma entrega o que promete.</p>

          

          <h2>Dica Prática: A Regra de Ouro do Mecânico</h2>
          <p>Comprou pela internet?</p>
          <p>Ela vai chegar na caixa, pré-montada.</p>
          <p>Não tente dar uma de mecânico em casa se não tiver as ferramentas certas.</p>
          <p>Leve em uma oficina especializada para um "ajuste fino".</p>
          <p>A lubrificação dos cubos da roda, o reaperto dos raios e a regulagem milimétrica do câmbio traseiro são coisas simples que poucas pessoas fazem, mas que evitam que peças se quebrem no primeiro mês.</p>
          <p>Pague por essa montagem profissional e faça uma revisão básica com 100 km rodados.</p>
          <p>Isso garante sua segurança, elimina barulhos chatos e bota a sua GTI Roma pronta para dominar a cidade hoje mesmo!</p>
        </div>

        {/* SOBRE O AUTOR */}
        <div className="bg-cyan-950/20 p-8 rounded-2xl border border-cyan-900/50 shadow-sm mt-16 mb-16 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="shrink-0 mx-auto md:mx-0">
            <a href="/author/rafael-martins">
              <img loading="lazy" width="800" height="600" src="/images/autores/Rafael Martins.webp" alt="Rafael Martins" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-cyan-900/50 hover:border-cyan-500 transition-colors shadow-xl cursor-pointer" />
            </a>
          </div>
          <div>
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">Sobre o Autor</h2>
            <a href="/author/rafael-martins" className="hover:text-cyan-400 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">Rafael Martins</h3>
            </a>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Rafael é um apaixonado por mecânica de bicicletas e ciclista inveterado. No balcão da oficina ou nas trilhas de final de semana, seu objetivo é traduzir o "mecaniquês" técnico e chato para ajudar as pessoas a não rasgarem dinheiro, escolhendo exatamente as peças que precisam. As recomendações aqui são fruto de mãos sujas de graxa, análise minuciosa de fichas oficiais e da vivência real de quem gasta o pneu no asfalto e na terra, defendendo sempre uma mobilidade mais inteligente e saudável.
            </p>
          </div>
        </div>

      </article>
    </>
  );
};
