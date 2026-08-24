import React, { useState } from 'react';
import AffiliateCard from './AffiliateCard';
import BunnerDoMeio from './BunnerDoMeio';
import ExitIntentPopup from './ExitIntentPopup';
import { HelpCircle, Check, X, ChevronDown, ChevronUp } from 'lucide-react';
import { products, accessories } from '../data/products';

export const ArtigoGTAAro29: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [simulacao, setSimulacao] = useState<string | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "A GTA Start 21v é boa para iniciantes?",
      answer: [
        "Sim.",
        "Ela entrega um pacote super valente para quem entende que o lazer de final de semana não exige peças de competição.",
        "Ela funciona muito bem, desde que você tenha um pouquinho de paciência para regular os cabos ocasionalmente."
      ]
    },
    {
      question: "Como funciona a garantia da GTA?",
      answer: [
        "O quadro te cobre por um ano, mas manetes e câmbios têm prazos bem menores.",
        "Não economize na montagem inicial; é ela quem dita a vida útil das suas peças."
      ]
    },
    {
      question: "Posso fazer trilhas pesadas com ela?",
      answer: [
        "Quer ir para as trilhas de verdade? Pule direto para modelos superiores, como a GTA Insane ou Climb.",
        "Esses modelos trazem freio hidráulico (a óleo) que param a bike só encostando um dedo, além de transmissões que aguentam lama."
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
            src="/images/blog/1/GTA Start aro 29 21v e boa.webp" 
            alt="Bicicleta GTA Aro 29 Background" 
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Bicicleta GTA aro 29 é boa Ou <br/>
            <span className="text-cyan-400">Alternativa KSW é melhor?</span>
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
        
        {/* Intro */}
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <p>Quem nunca abriu dezenas de abas no navegador tentando escolher a primeira bike e acabou mais confuso do que antes?</p>
          <p>A gente olha para as telas e as configurações parecem idênticas, brigando centavo por centavo.</p>
          <p>Aí bate aquela dúvida clássica aqui no balcão da oficina: afinal, a Bicicleta GTA aro 29 é boa para rodar no meu dia a dia, ou é mais negócio pular para uma KSW?</p>
          <p>Muita gente acaba passando o cartão de crédito só porque achou a cor do quadro bonita.</p>
          <p>Mas o que vai ditar se você vai pedalar sorrindo ou empurrando a bike na subida é a harmonia escondida nas peças.</p>
          <p>Bora destrinchar quem é essa marca no mercado e como esse conjunto se comporta na rua para você tomar uma decisão certeira.</p>
        </div>

        {/* Simulador Rápido de Perfil */}
        <div className="bg-zinc-800/50 p-6 md:p-8 rounded-2xl border border-cyan-900/50 shadow-lg mb-12">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-cyan-500" />
            Qual será o seu uso principal?
          </h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('urbano')} />
              <span className="text-zinc-200">Mobilidade Urbana e Passeio em Família</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer hover:border-cyan-500 transition-colors">
              <input type="radio" name="perfil" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-zinc-800 border-zinc-600" onChange={() => setSimulacao('trilha')} />
              <span className="text-zinc-200">Trilhas Pesadas e Ladeiras de Terra</span>
            </label>
          </div>
          {simulacao === 'urbano' && (
            <div className="mt-4 p-4 bg-emerald-950/30 border border-emerald-900/50 rounded-lg text-emerald-400 text-sm">
              <strong className="block mb-1">Perfeito!</strong> A GTA Start é um golaço e tem um excelente custo-benefício para rodar na cidade ou estradões leves.
            </div>
          )}
          {simulacao === 'trilha' && (
            <div className="mt-4 p-4 bg-amber-950/30 border border-amber-900/50 rounded-lg text-amber-400 text-sm">
              <strong className="block mb-1">Atenção!</strong> A GTA Start vai sofrer desgaste violento e vai precisar ir frequentemente na oficina se você tentar trilhas severas.
            </div>
          )}
        </div>

        {/* VITRINE */}
        <div className="mb-16 max-w-[850px] mx-auto bg-zinc-800/50 p-2.5 rounded-2xl sm:p-5 border border-zinc-700 shadow-sm mt-16">
          <h2 className="text-2xl font-extrabold text-white mb-6 text-center">As Melhores Opções do Artigo</h2>
          
          <div className="overflow-x-auto rounded-xl border border-zinc-700 bg-zinc-900">
            <table className="w-full border-collapse">
              <thead className="bg-zinc-800 text-zinc-300 text-xs uppercase font-bold border-b border-zinc-700">
                <tr>
                  <th className="p-3 text-center w-[70px] sm:w-[90px]">Foto</th>
                  <th className="p-3 text-left">Modelo</th>
                  <th className="p-3 text-center w-[100px] sm:w-[150px]">Ação</th>
                </tr>
              </thead>
              <tbody>
                {['gta-start-21v', 'ksw-xlt-100'].map((id) => {
                  const product = products.find(p => p.id === id);
                  if (!product) return null;

                  return (
                    <tr key={product.id} className="border-b border-zinc-700 last:border-b-0 hover:bg-zinc-800/50 transition-colors">
                      <td className="p-2 align-middle text-center">
                        <div className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] border border-slate-100 rounded flex items-center justify-center p-0.5 bg-zinc-100 mx-auto overflow-hidden">
                           <img src={product.imageUrl} alt={product.name} className="max-w-full max-h-full block object-cover" />
                        </div>
                      </td>
                      <td className="p-2 align-middle">
                        <div className="text-sm sm:text-base font-bold text-zinc-100 leading-tight">
                          {product.name}
                        </div>
                        <div className="text-[11px] text-zinc-400 mt-1">
                          {product.category}
                        </div>
                      </td>
                      <td className="p-2 align-middle text-center">
                        <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored nofollow" className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-[10px] sm:text-xs py-1.5 sm:py-2 px-2 sm:px-3 rounded transition-colors whitespace-nowrap shadow-md">
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

        {/* Section */}
        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <h2>O que é a GTA e quem fabrica</h2>
          <p>Sabe aquele papo de "marca de internet" que evapora se der problema?</p>
          <p>A GTA foge um pouco dessa regra.</p>
          <p>Ela é um braço forte da GTSM1, uma verdadeira gigante do nosso mercado que respira bicicleta desde 1994, lá em Itu (SP).</p>
          <p>Diferente daquelas marcas que só trazem a caixa fechada do outro lado do mundo, eles têm uma fábrica própria aqui (a Ytu Bike) batendo os quadros em alumínio e montando milhares de unidades por mês.</p>
          
          <img src="/images/blog/1/gta_factory.webp" alt="Fábrica da bicicleta" className="w-full rounded-2xl shadow-xl border border-zinc-700 my-8" />
          
          <p>O que isso muda na sua vida?</p>
          <p>Segurança.</p>
          <p>Saber que existe uma fábrica nacional por trás da pintura significa que, se você precisar acionar uma garantia ou encontrar uma peça de reposição, o suporte está muito mais perto da sua casa, evitando que sua magrela fique semanas encostada pegando poeira.</p>

          <h2>GTA Start aro 29 21v: a porta de entrada da marca</h2>
          <p>A GTA Start 21v é aquele feijão com arroz bem temperado para quem quer começar a girar sem esvaziar a conta bancária.</p>
          <p>Ela foi pensada para aquele uso curinga: fugir do trânsito na ciclovia de manhã e curtir uma estradinha de terra no domingo.</p>
          <p>O câmbio de 21 marchas te dá aquele fôlego extra para não fritar as pernas nas subidas do bairro, enquanto o alumínio deixa a bike ágil para desviar de buracos.</p>
          <p>É o básico que funciona.</p>
          <p>Mas dou logo o toque de mecânico: por ser uma bike de entrada, as peças vão pedir um carinho e ajustes na oficina de vez em quando para não te deixarem na mão com marchas estalando.</p>
        </div>

        <AffiliateCard product={products.find(p => p.id === 'gta-start-21v')!} />

        {/* Prós e Contras */}
        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2"><Check className="w-5 h-5" /> Prós</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Ótimo custo-benefício para dar as primeiras pedaladas.</li>
              <li>Quadro em alumínio que não pesa na hora de subir escadas.</li>
              <li>Trocadores de marcha no dedo, bem práticos.</li>
              <li>Encara o asfalto e a terra batida de boa.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2"><X className="w-5 h-5" /> Contras</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Peças simples perdem a regulagem com o tempo.</li>
              <li>Não tente montar na sala de casa; a montagem na oficina é obrigatória.</li>
            </ul>
          </div>
        </div>

        <BunnerDoMeio />

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12 mt-12">
          <h2>Características Principais da GTA Start</h2>
          <p>O projeto da Start não inventa moda, mas entrega o que precisa.</p>
          <p>Eles buscaram casar um chassi confortável com peças que aguentam a rotina de quem só quer respirar um ar puro sem dor de cabeça.</p>
          <p>Analisando de perto, vamos ver o que essas peças mudam de verdade na hora que o pneu toca no chão.</p>

          <h3>Quadro</h3>
          <p>O esqueleto dessa magrela é moldado em alumínio 6061.</p>
          <p>Em bom português: é um quadro firme para você não sentir a bike "torcer" quando faz força no pedal, mas leve o suficiente para ser ágil.</p>
          <p>Eles até usam uma técnica que reforça os tubos nos lugares onde a bike mais toma pancada.</p>
          <p>Mas o que chama a atenção mesmo pelo preço dela é o cabeamento interno.</p>
          <p>Os cabos de marcha e freio passam escondidos por dentro do quadro.</p>
          <p>Isso tira aquele emaranhado de fios do guidão, deixando a bike com cara de modelo premium, além de proteger os cabos de aço da chuva e da lama.</p>
          <p>É marcha regulada por muito mais tempo.</p>

          <h3>Direção e Canote</h3>
          <p>Para você não sentir a frente da bike "bamba" nos buracos, a caixa de direção dela é semi-integrada (Mega Over).</p>
          <p>Isso mata as folgas indesejadas e te dá o controle firme que todo iniciante precisa para não tomar susto nas manobras.</p>
          <p>O canote (o tubo do banco) é em alumínio com 27,2 mm.</p>
          <p>Sabe o que isso importa?</p>
          <p>Importa que você consegue subir e descer o banco milimetricamente.</p>
          <p>Acertar a altura exata do selim é o maior segredo para você voltar de um pedal longo sem aquela dor lombar maldita.</p>

          <h3>Cockpit</h3>
          <p>O cockpit (guidão e mesa) foi montado para o seu conforto, não para correr maratona.</p>
          <p>O guidão de alumínio com 680 mm te dá uma pegada larga, excelente para equilibrar a bike em baixa velocidade.</p>
          <p>Já a mesa (peça que segura o guidão) tem 90 mm e é inclinadinha para cima.</p>
          <p>Na prática, isso levanta o seu tronco.</p>
          <p>Em vez de pedalar curvado sentindo o pescoço queimar, você fica com as costas mais retas e aliviadas.</p>
          <p>É o controle ideal para manter o foco na diversão e esquecer as dores.</p>

          <h3>Rodas e Pneus</h3>
          <p>Essas rodas foram feitas para o tranco da cidade.</p>
          <p>Os aros são de parede dupla e usam cubos com 36 furos.</p>
          <p>Ou seja, é um aro reforçado que não vai amassar ou ficar parecendo um "oito" no primeiro buraco que você não conseguir desviar.</p>
          <p>Alguns modelos já vêm com blocagem rápida, aquela alavanca que te deixa tirar a roda com as mãos caso o pneu fure, sem precisar de chaves.</p>
          <p>Os pneus 2.10 têm cravos mais baixinhos.</p>
          <p>Isso quer dizer que a bike rola solta e rápida no asfalto liso, mas ainda morda a terra batida para você não sair derrapando no estradão.</p>
          <p>É um pneu inteligente e prático.</p>

          <h2>Sistema de Transmissão e Relação de Marchas</h2>
          <p>Aqui o motor da bike é um sistema 3x7 (21 marchas).</p>
          <p>São câmbios importados que dão conta do recado: te oferecem desde uma marcha pesada para embalar na descida até uma "vovozinha" leve para você subir o morro conversando.</p>
          <p>Os trocadores "efire" são muito bons porque ficam ali junto do freio; você troca de marcha num clique do dedo sem soltar a mão do guidão.</p>
          <p>O pedivela ainda tem uma capinha de proteção lateral.</p>
          <p>Acredite, isso evita que a corrente descarrile no buraco e ainda salva a barra da sua calça de ficar preta de graxa.</p>
          <p>Como todo kit barato, ele funciona bem, mas exige que você seja amigo do mecânico para manter tudo afinado.</p>
        </div>

        {/* Video Youtube */}
        <div className="bg-zinc-800/30 p-8 rounded-2xl border border-zinc-700/50 text-center my-16 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Review da GTA Start 21v</h2>
          <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">Quer ver a magrela em detalhes? Confira no vídeo abaixo.</p>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto border border-zinc-700">
            <iframe 
              src="https://www.youtube.com/embed/JmCS5hT_IOg" 
              title="Review da GTA Start 21v" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-[300px] md:h-[450px]"
            ></iframe>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <h2>Suspensão</h2>
          <p>A suspensão da Start tem 80 mm de curso.</p>
          <p>Ela serve basicamente para uma coisa: salvar os seus pulsos e braços da trepidação chata do asfalto ruim.</p>
          <p>Ela não foi feita para você pular calçadas altas ou entrar em trilhas cheias de raízes.</p>
          <p>Se você forçar a barra nesses terrenos, a mola vai bater no fundo seco.</p>
          <p>Mas, para um uso de boa na cidade e em estradas de terra, ela amortece as vibrações para que o seu passeio não vire um liquidificador.</p>

          <h2>Prós das bicicletas GTA</h2>
          <p>Colocar uma GTA na garagem traz sacadas muito boas.</p>
          <p>A principal delas é o capricho do quadro em alumínio com os cabos todos embutidos; é raro ver isso em bicicletas de entrada.</p>
          <p>A variedade de modelos deles também é gigante.</p>
          <p>Você pode começar com essa Start básica e, no ano que vem, pegar uma com suspensão com trava e freios hidráulicos continuando na mesma marca.</p>
          <p>Como o suporte é todo brasileiro, comprar peças e resolver problemas te livra daquela dor de cabeça sem fim de importar peças desconhecidas.</p>

          <h2>Contras que você precisa saber antes de comprar</h2>
          <p>Aqui eu prefiro jogar a real para não ter surpresa depois.</p>
          <p>O calcanhar de Aquiles dessa categoria, e a GTA entra nessa conta, é a variação das peças de acordo com o lote.</p>
          <p>Como eles usam marcas de entrada em vez de gigantes consolidadas, o câmbio ou o freio podem vir de marcas diferentes dependendo de quando você compra.</p>
          <p>Outra questão é que não dá para tirar da caixa e sair rodando.</p>
          <p>É muito comum o disco de freio vir dando uma leve "pegadinha", exigindo que o mecânico perca um tempo ali para alinhar as coisas.</p>
          <p>Esteja avisado: essa bike pede revisões de aperto muito mais frequentes do que modelos caros.</p>

          <h2>Para quem a GTA é uma boa compra — e para quem não é</h2>
          <p>Se você está saindo do sedentarismo agora, quer um meio de transporte para o serviço ou quer fazer aqueles pedais da família no domingo, a GTA é um golaço.</p>
          <p>O custo-benefício para esse uso mais suave é imbatível.</p>
          <p>Agora, se você tem sangue nos olhos, planeja descer ladeiras esburacadas de propósito ou quer ralar a bike em trilha técnica, fuja.</p>
          <p>O desgaste das peças básicas será tão violento que o barato vai sair caríssimo lá na oficina.</p>
          <p>Use a bike na medida do que o seu roteiro pede.</p>

          <h2>Comparação rápida com outras bicicletas aro 29 populares</h2>
          <p>Quando o assunto é bike barata, a maior briga que a gente vê por aí é entre a GTA e a KSW.</p>
          <p>As duas brigam na mesma faixa de preço e prometem basicamente a mesma alegria.</p>
          <p>Mas existem uns segredinhos ali nos componentes que mudam totalmente o tipo de dor de cabeça (ou falta dela) que você vai ter.</p>
          <p>Bora botar elas na mesa.</p>
        </div>

        {/* TABELA O DUELO */}
        <div className="overflow-x-auto my-12">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-zinc-800 text-zinc-100">
                <th className="p-4 border-b border-zinc-700 rounded-tl-xl font-bold">Característica</th>
                <th className="p-4 border-b border-zinc-700 font-bold">GTA Start 21v</th>
                <th className="p-4 border-b border-zinc-700 rounded-tr-xl font-bold">KSW XLT 100</th>
              </tr>
            </thead>
            <tbody className="bg-zinc-900/50">
              <tr className="border-b border-zinc-700/50 hover:bg-zinc-800/50 transition-colors">
                <td className="p-4 text-white font-semibold">Visual</td>
                <td className="p-4 text-cyan-400 font-medium">Cabos embutidos, muito limpo</td>
                <td className="p-4 text-zinc-300">Cabos externos</td>
              </tr>
              <tr className="border-b border-zinc-700/50 hover:bg-zinc-800/50 transition-colors">
                <td className="p-4 text-white font-semibold">Câmbio</td>
                <td className="p-4 text-zinc-300">Genérico (varia por lote)</td>
                <td className="p-4 text-emerald-400 font-medium">Shimano Tourney (maior precisão)</td>
              </tr>
              <tr className="hover:bg-zinc-800/50 transition-colors">
                <td className="p-4 text-white font-semibold">Foco</td>
                <td className="p-4 text-zinc-300">Acabamento e Custo</td>
                <td className="p-4 text-zinc-300">Confiabilidade Mecânica</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">
          <h3>GTA vs KSW</h3>
          <p>Quando coloco a KSW XLT 100 do lado da GTA, a diferença de estratégia aparece nas peças.</p>
          <p>A GTA foca pesado no acabamento e no quadro de cabos embutidos.</p>
          <p>Já a KSW costuma abrir mão desse visual interno, mas compensa usando câmbios originais da Shimano (linha Tourney).</p>
          <p>O que isso significa na rua?</p>
          <p>As peças Shimano desregulam muito menos e são de uma confiabilidade absurda para achar reposição.</p>
          <p>As duas são de alumínio e usam freio a disco mecânico, mas no fim, a escolha fica entre o design mais limpo da GTA ou a tranquilidade mecânica dos câmbios que a KSW costuma entregar.</p>
        </div>
        
        <AffiliateCard product={products.find(p => p.id === 'ksw-xlt-100')!} />

        {/* PRÓS/CONTRAS KSW */}
        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-emerald-950/20 border border-emerald-900/50 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2"><Check className="w-5 h-5" /> Prós KSW</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Muitas vezes já vem com a transmissão da Shimano.</li>
              <li>Geometria super focada no conforto.</li>
              <li>Mecânica muito manjada, qualquer oficina mexe.</li>
              <li>Custo-benefício altíssimo.</li>
            </ul>
          </div>
          <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2"><X className="w-5 h-5" /> Contras KSW</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>Vem pelada (geralmente nem pezinho de descanso traz).</li>
              <li>Se você não levar no mecânico na montagem, vai estragar as marchas.</li>
            </ul>
          </div>
        </div>

        {/* ACESSÓRIOS CROSS-SELL */}
        <div className="my-16 bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Itens Indispensáveis para sua Nova Bike</h3>
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
        <h2 className="text-2xl font-bold text-white mb-8 mt-16 flex items-center gap-3">
          <HelpCircle className="text-cyan-500 w-8 h-8" />
          Perguntas frequentes
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
            <p>Na briga entre GTA e KSW, não existe "a melhor", existe a que encaixa no seu perfil.</p>
            <p>Quer uma estrutura com base brasileira fortíssima, cabos escondidinhos e muita beleza pra bater perna em ciclovias e estradão?</p>
            <p>A GTA faz esse serviço com muita dignidade.</p>
            <p>O grande truque de mestre para quem compra bike de entrada é esquecer o tutorial do YouTube e levar a caixa direto na oficina.</p>
            <p>O aperto correto salva a sua segurança e o seu bolso.</p>
            <p>Se o seu foco é lazer barato e imediato, a Start é tiro certo.</p>
            <p>Mas lembre-se: a bicicleta perfeita não é a mais cara, é aquela que te dá vontade de pedalar todo dia.</p>
          </div>
        </div>

        {/* SOBRE O AUTOR */}
        <div className="bg-cyan-950/20 p-8 rounded-2xl border border-cyan-900/50 shadow-sm mt-8 mb-16 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="shrink-0 mx-auto md:mx-0">
            <a href="/author/rafael-martins" className="hover:opacity-80 transition-opacity block">
              <img src="/images/autores/Rafael Martins.webp" alt="Rafael Martins" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-cyan-900/50 hover:border-cyan-500 transition-colors shadow-xl" />
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
