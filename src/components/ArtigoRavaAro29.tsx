import React, { useState } from 'react';
import AffiliateCard from './AffiliateCard';
import BunnerDoMeio from './BunnerDoMeio';
import ExitIntentPopup from './ExitIntentPopup';
import { HelpCircle, ArrowRight, Check, X, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { products, accessories } from '../data/products';

export const ArtigoRavaAro29: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [simulacao, setSimulacao] = useState<'urbano' | 'trilha' | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "A Rava aro 29 suporta trilhas pesadas?",
      answer: [
        "Sendo direto com você: depende do modelo escolhido.",
        "A Bicicleta Rava Up 21v é uma mountain bike de entrada fabulosa para estradões de terra, asfalto urbano e passeios rurais. Mas se o seu plano é pegar trechos intensos de pedras, os componentes dela vão ceder rápido.",
        "Por outro lado, a Rava Pressure 20v já entrega uma suspensão e marchas preparadas para encarar trilhas com mais segurança e estabilidade.",
        "De toda forma, lembre-se: nenhuma das duas é indicada para saltos agressivos (Enduro/Downhill). Respeite o limite do equipamento e ele durará anos."
      ]
    },
    {
      question: "É fácil achar peças de reposição para a Rava?",
      answer: [
        "Sim! Essa é a maior vantagem investigativa dessa bike.",
        "Ela utiliza os mesmos padrões de cubos e transmissões do mercado mundial.",
        "Você pode comprar catracas, movimentos centrais ou correntes em qualquer oficina mecânica do Brasil, mantendo o seu custo de manutenção sempre nivelado por baixo."
      ]
    },
    {
      question: "Consigo instalar freio hidráulico nela depois?",
      answer: [
        "Com toda a certeza.",
        "Como a Rava foi desenhada com manetes de freio totalmente separados das alavancas de marcha, o upgrade é simples e inteligente.",
        "Você retira o sistema a cabo mecânico antigo e instala o moderno conjunto hidráulico, ganhando poder absoluto de frenagem sem precisar trocar o restante da bike."
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
            src="/images/blog/1/rava_card.webp" 
            alt="Bicicleta Rava Aro 29 Background" 
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Bicicleta Rava aro 29 é boa? Ou <br/>
            <span className="text-cyan-400">Alternativas Caloi e Absolute são melhores?</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <a href="/author/rafael-martins" className="hover:opacity-80 transition-opacity">
                <img src="/images/autores/Rafael Martins.webp" alt="Rafael Martins" className="w-8 h-8 rounded-full border border-cyan-500" />
              </a>
              <a href="/author/rafael-martins" className="hover:text-cyan-400 transition-colors">Por Rafael Martins</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <p>Entrar em uma loja de bicicletas hoje em dia e dar de cara com dezenas de modelos aro 29 pode ser uma experiência frustrante.</p>
          <p>A montanha de opções faz muita gente questionar se está pagando por qualidade real ou apenas por um adesivo bonito no quadro.</p>
          <p>Aqui quem fala é o Rafael Martins, mecânico de formação e apaixonado por destrinchar o que as marcas tentam esconder nos manuais de fábrica.</p>
          <p>Nos últimos dias, coloquei a Rava sob a nossa lupa técnica aqui na oficina para entender onde ela realmente brilha e onde pode te deixar na mão.</p>
        </div>

        {/* Simulador de Perfil */}
        <div className="bg-zinc-800/50 p-6 md:p-8 rounded-2xl border border-cyan-900/50 shadow-lg mb-12">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-cyan-500" />
            Qual será o seu terreno principal?
          </h3>
          <p className="text-zinc-300 mb-4">Selecione para ver a indicação ideal da Rava:</p>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('urbano')} />
              <span className="text-zinc-200">Asfalto/Urbano</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('trilha')} />
              <span className="text-zinc-200">Trilhas/Terra</span>
            </label>
          </div>
          {simulacao === 'urbano' && (
            <div className="mt-4 p-4 bg-emerald-950/30 border border-emerald-900/50 rounded-lg text-emerald-400 text-sm">
              <strong className="block mb-1">Ótima escolha!</strong> A Rava Up 21v foi feita para o seu dia a dia. Você terá peças duráveis e economizará dinheiro mantendo o foco no asfalto.
            </div>
          )}
          {simulacao === 'trilha' && (
            <div className="mt-4 p-4 bg-cyan-950/30 border border-cyan-900/50 rounded-lg text-cyan-400 text-sm">
              <strong className="block mb-1">Aventura na medida!</strong> A Rava Pressure 20 marchas com sistema K7 é o que você precisa. Ela não vai te deixar na mão em ladeiras esburacadas.
            </div>
          )}
        </div>

        {/* VITRINE */}
        <div className="mb-16 max-w-[850px] mx-auto bg-zinc-800/50 p-2.5 rounded-2xl sm:p-5 border border-zinc-700 shadow-sm">
          <h2 className="text-2xl font-extrabold text-white mb-6 text-center">Bicicletas Analisadas Neste Artigo</h2>
          
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
                {['rava-pressure', 'rava-up', 'caloi-moab', 'absolute-nero-4'].map((id) => {
                  const product = products.find(p => p.id === id);
                  if (!product) return null;
                  return (
                    <tr key={product.id} className="border-b border-zinc-700 last:border-b-0 hover:bg-zinc-800/50 transition-colors">
                      <td className="p-2 align-middle text-center">
                        <div className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] border border-slate-100 rounded flex items-center justify-center p-0.5 bg-zinc-100 mx-auto overflow-hidden">
                          {product.imageUrl ? (
                             <img src={product.imageUrl} alt={product.name} className="max-w-full max-h-full block object-cover" />
                          ) : (
                             <span className="text-[10px] text-zinc-400 font-bold">Bicicleta</span>
                          )}
                        </div>
                      </td>
                      <td className="p-3 text-sm sm:text-base font-bold text-white align-middle">
                        <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                          {product.name}
                        </a>
                      </td>
                      <td className="p-3 text-sm text-zinc-400 text-center align-middle hidden sm:table-cell">
                        {product.category}
                      </td>
                      <td className="p-3 align-middle text-center">
                        <a 
                          href={product.affiliateUrl}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white text-[11px] sm:text-sm font-bold py-2 sm:py-2.5 px-3 sm:px-5 rounded transition-colors whitespace-nowrap"
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
          <h2>Bicicleta Mountain Bike Rava Pressure 20 Marchas Aro 29 Suspensão Dianteira</h2>
          <div className="my-8">
            <img src="/images/blog/1/Bicicleta Mountain Bike Rava Pressure 20 Marchas Aro 29 Suspensão Dianteira Freio a Disco Hidráulico.webp" alt="Bicicleta Rava Pressure" className="w-full rounded-2xl shadow-xl border border-zinc-700 bg-white" />
          </div>
          
          <p>A Rava Pressure promete ser aquela parceira robusta para quem quer entrar no mundo do mountain bike com o pé direito.</p>
          <p>O foco desse projeto é equilibrar a eficiência da mecânica com a durabilidade que você precisa para o uso recreativo, sem viver dentro da oficina.</p>
          <p>Vamos entender como essa estrutura se comporta debaixo de estresse.</p>

          <h3>Quadro e Suspensão</h3>
          <p>O coração dessa bike é o quadro em alumínio com uma geometria focada 100% no seu conforto.</p>
          <p>O que isso muda no seu pedal?</p>
          <p>Você fica com uma postura menos agressiva, evitando aquela dor nas costas terrível depois de percursos prolongados, além de ganhar muita leveza nas subidas.</p>
          
          <div className="my-8">
            <img src="/images/blog/1/rava_suspension.webp" alt="Suspensão dianteira de uma bicicleta" className="w-full rounded-2xl shadow-xl border border-zinc-700" />
          </div>

          <p>A suspensão dianteira atua como um filtro excelente, poupando as suas articulações daquelas pancadas secas em ruas esburacadas e garantindo a confiança essencial para quem está começando.</p>

          <h3>Rodas e Cubos</h3>
          <p>Descobri um detalhe investigativo nas rodas da Rava que muda tudo na durabilidade do seu investimento.</p>
          <p>Eles usam aros Vzan com raios de inox, o que elimina a oxidação precoce e suporta muito bem o estresse de curvas mais fechadas.</p>
          <p>Além disso, os cubos em alumínio usam rolamentos blindados, garantindo que a roda gire muito mais fluida, o que exige bem menos esforço das suas pernas para manter a velocidade alta no estradão.</p>
          
          <div className="my-8">
            <img src="/images/blog/1/rava_wheels.webp" alt="Raios de cubo e roda de uma bicicleta aro 29" className="w-full rounded-2xl shadow-xl border border-zinc-700" />
          </div>
        </div>

        <BunnerDoMeio />

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <h3>Sistema de Transmissão e Pedivela</h3>
          <p>A eficiência de uma bike de entrada mora nas marchas.</p>
          <p>A Rava aposta no padrão cassete (K7) de 20 marchas, entregando um escalonamento muito mais inteligente que os sistemas antigos de rosca.</p>
          <p>Na prática, isso evita que você trave no meio da ladeira ou passe pelo susto do câmbio estralando.</p>
          <p>O pedivela em alumínio com eixo quadrado é garantia de transferência de força bruta para a roda, sendo uma peça super robusta e muito barata de manter em qualquer oficina de bairro.</p>
          
          <div className="my-8">
            <img src="/images/blog/1/rava_cassette.webp" alt="Sistema de marchas cassete (K7) moderno" className="w-full rounded-2xl shadow-xl border border-zinc-700" />
          </div>

          <h3>Pneus e Acessórios</h3>
          <p>Os pneus cravados originais são o seu seguro de vida contra escorregões em terrenos com terra solta, sem deixar a bicicleta pesada demais quando você entrar no asfalto.</p>
          <p>O kit de alumínio (mesa, guidão e canote) não enferruja com o suor e ajuda a equilibrar o peso estrutural.</p>
          <p>Minha dica de especialista para você: se for fazer pedais longos, invista na troca por um selim de gel para evitar assaduras e desconfortos logo nos primeiros quilômetros.</p>

          <h3>Freios</h3>
          <p>Para evitar que você perca o controle na descida de terra, a Rava caprichou na segurança modular.</p>
          <p>Os freios a disco mecânicos de fábrica têm uma potência excelente para o tráfego urbano.</p>
          <p>Mas a verdadeira inteligência do projeto está nas manetes separadas dos passadores de marcha: isso permite que, no futuro, você faça um upgrade para os macios freios hidráulicos sem precisar jogar fora o seu kit de marchas atual.</p>

        </div>

        <AffiliateCard product={products.find(p => p.id === 'rava-pressure')!} />

        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2"><Check className="w-5 h-5" /> Prós</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Padrão de cubo cassete (K7) que evita quebras e facilita subidas.</li>
              <li>Quadro em alumínio com geometria ergonômica para poupar a lombar.</li>
              <li>Raios em inox e aros Vzan resistentes contra empenamentos.</li>
              <li>Manetes de freio independentes, o que barateia upgrades futuros.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2"><X className="w-5 h-5" /> Contras</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>O freio a disco mecânico exige um pouco mais de força nos dedos que o hidráulico.</li>
              <li>A suspensão não possui trava no guidão para render mais no asfalto liso.</li>
            </ul>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <h2>Bicicleta Aro 29 Alumínio Rava Up 21v Mtb Urbana Lazer Cor Preto</h2>
          <div className="my-8">
            <img src="/images/blog/1/Bicicleta Aro 29 Alumínio Rava Up 21v Mtb Urbana Lazer Cor Preto.webp" alt="Bicicleta Rava Up 21v" className="w-full rounded-2xl shadow-xl border border-zinc-700 bg-white" />
          </div>

          <p><strong>🏙️ A Opção Honesta para o Uso Diário</strong></p>
          <p>Se o seu foco é largar o transporte público e usar a bike para trabalhar ou passear no parque, a Rava Up 21v foi desenvolvida para aguentar esse tranco.</p>
          <p>Ela combina materiais muito resistentes com peças de reposição extremamente acessíveis, entregando praticidade e durabilidade para você economizar tempo e dinheiro na sua mobilidade urbana diária.</p>

        </div>

        <AffiliateCard product={products.find(p => p.id === 'rava-up')!} />

        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2"><Check className="w-5 h-5" /> Prós</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Excelente durabilidade estrutural para o asfalto castigado da cidade.</li>
              <li>Peças de reposição extremamente baratas e universais.</li>
              <li>Posição de pilotagem amigável para quem está saindo do sedentarismo.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2"><X className="w-5 h-5" /> Contras</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Relação de 21 marchas básica, que sofre um pouco em ladeiras de terra severas.</li>
              <li>Exige revisão pós-montagem para garantir o silêncio dos câmbios.</li>
            </ul>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <h2>O que faz a Rava aro 29 se destacar no mercado?</h2>
          <p>O grande diferencial da Rava no segmento de entrada não são invenções mirabolantes, mas sim o uso de padrões de mercado consolidados.</p>
          <p>Enquanto outras marcas tentam te empurrar peças exclusivas caríssimas, a Rava garante que você encontre peças de reposição em qualquer oficina de esquina.</p>
          <p>É a previsibilidade técnica que mantém a sua bike rodando o ano inteiro sem esgotar a sua conta bancária.</p>

          <h2>Opiniões de Usuários</h2>
          <p>No balcão da oficina, o consenso de quem pedala a Rava é claro: ela cumpre o que promete.</p>
          <p>A turma costuma rasgar elogios para a robustez do quadro, que aguenta calçadas e buracos mantendo a integridade.</p>
          <p>O custo-benefício sempre rouba a cena nas avaliações.</p>
          <p>O único alerta frequente é a necessidade de fazer um ajuste fino nas marchas logo após a compra, então já inclua uma revisão inicial na sua oficina de confiança para rodar 100% liso.</p>

          <h2>Rava vs Caloi vs Absolute: Qual a melhor?</h2>
          <p>Definir qual máquina merece o seu dinheiro exige olhar para o seu propósito.</p>
          <p>Vamos comparar os nichos de cada fabricante para você bater o martelo com segurança.</p>
        </div>

        {/* Tabela Comparativa Resumo */}
        <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700 shadow-lg mb-12">
          <h3 className="text-xl font-bold text-white mb-6 text-center">O Duelo de Gigantes do Custo-Benefício</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-zinc-300">
              <thead className="text-xs uppercase bg-zinc-900 border-b border-zinc-700">
                <tr>
                  <th className="px-4 py-3">Característica</th>
                  <th className="px-4 py-3 text-cyan-400">Rava Pressure</th>
                  <th className="px-4 py-3 text-amber-400">Caloi Moab</th>
                  <th className="px-4 py-3 text-emerald-400">Absolute Nero 4</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-700">
                  <td className="px-4 py-3 font-semibold">Peso Aproximado</td>
                  <td className="px-4 py-3">~15.5 kg</td>
                  <td className="px-4 py-3">~18.0 kg</td>
                  <td className="px-4 py-3">~14.8 kg</td>
                </tr>
                <tr className="border-b border-zinc-700">
                  <td className="px-4 py-3 font-semibold">Marchas</td>
                  <td className="px-4 py-3">20v K7</td>
                  <td className="px-4 py-3">18v Microshift</td>
                  <td className="px-4 py-3">12v (1x12)</td>
                </tr>
                <tr className="border-b border-zinc-700">
                  <td className="px-4 py-3 font-semibold">Foco Principal</td>
                  <td className="px-4 py-3">Iniciantes / Conforto</td>
                  <td className="px-4 py-3">Durabilidade / Trator</td>
                  <td className="px-4 py-3">Performance Esportiva</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <h3>Rava vs Caloi Moab</h3>
          <p>A Caloi Moab é aquele trator com tradição centenária e uma rede de assistência impecável.</p>
          <p>Ela brilha com seu câmbio Microshift de 18 velocidades, que reduz a manutenção frontal.</p>
          <p>Porém, toda essa robustez do alumínio Caloi faz a bike bater quase 18 quilos.</p>
          <p>Nas subidas íngremes, esse peso cobra a conta nas suas pernas.</p>
          <p>Se você quer durabilidade histórica, a Moab é perfeita.</p>
          <p>Se você prioriza agilidade, leveza e facilidade de manutenção de bairro, a Rava leva a melhor.</p>
        </div>

        <AffiliateCard product={products.find(p => p.id === 'caloi-moab')!} />

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <h3>Rava vs Absolute Nero 4</h3>
          <p>A Absolute Nero 4 tem uma alma agressiva.</p>
          <p>Ela foca em quem quer entrar forte na trilha, usando a coroa única (1x12) que elimina o câmbio dianteiro e acaba com as quedas de corrente em buracos.</p>
          <p>É uma bike esportiva e rápida.</p>
          <p>O preço disso?</p>
          <p>A manutenção de um kit 12 marchas é mais cara, e a geometria da Nero 4 exige que a sua postura seja mais alongada, exigindo atenção dobrada ao Bike Fit.</p>
          <p>A Rava perde na velocidade técnica, mas dá uma surra no conforto diário e na economia em longo prazo.</p>
        </div>

        <AffiliateCard product={products.find(p => p.id === 'absolute-nero-4')!} />

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-16">
          <h2>Conclusão</h2>
          <p>Escolher a sua parceira de pedal não precisa ser um labirinto cheio de termos técnicos indecifráveis.</p>
          <p>A Rava aro 29 provou, na prática, que atua como uma facilitadora da vida do ciclista iniciante.</p>
          <p>Enquanto outros modelos focam no peso do adesivo importado ou em esportividade agressiva, a Rava garante uma engenharia de manutenção simples, estrutura confortável e um preço que respeita o seu bolso.</p>
          <p>Ajuste o tamanho do quadro, faça aquela revisão inicial caprichada e transforme o seu trajeto urbano na melhor hora do seu dia.</p>
        </div>

        {/* Cross-Sell Carrossel */}
        <div className="my-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Acessórios Essenciais para sua Rava</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {accessories.filter(i => ['capacete-absolute', 'cadeado-ulock', 'bomba-ar-portatil'].includes(i.id)).map((item) => (
              <a 
                key={item.id} 
                href={item.affiliateUrl}
                target="_blank" 
                rel="noopener noreferrer sponsored nofollow"
                className="block bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden hover:border-cyan-500 transition-colors group"
              >
                <div className="aspect-square bg-white flex items-center justify-center p-4">
                  <img src={item.imageUrl} alt={item.name} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-4 text-center flex flex-col items-center justify-between h-[120px]">
                  <h4 className="text-zinc-100 font-bold text-sm">{item.name}</h4>
                  <span className="bg-cyan-600 group-hover:bg-cyan-500 text-white w-full py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-md mt-2">Ver Preço →</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-zinc-900 rounded-2xl border border-zinc-800 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <HelpCircle className="text-cyan-500" />
            Perguntas Frequentes (FAQ)
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-950/50">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left text-white hover:bg-zinc-800/50 transition-colors"
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="p-5 pt-0 text-zinc-300 border-t border-zinc-800 bg-zinc-900/50">
                    {faq.answer.map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-2 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SOBRE O AUTOR */}
        <div className="bg-cyan-950/20 p-8 rounded-2xl border border-cyan-900/50 shadow-sm mt-16 mb-16 flex flex-col md:flex-row items-center md:items-start gap-6">
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

      </article>
    </>
  );
};
