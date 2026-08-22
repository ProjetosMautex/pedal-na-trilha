export interface Author {
  name: string;
  slug: string;
  role: string;
  imageUrl: string;
  paragraphs: string[];
  quote: string;
}

export const authors: Author[] = [
  {
    name: "Rafael Martins",
    slug: "rafael-martins",
    role: "Pesquisador de Marcas e Modelos",
    imageUrl: "/images/autores/Rafael Martins.webp",
    paragraphs: [
      "Rafael Martins é ciclista e pesquisador de marcas e modelos de bicicletas. No Pedal na Trilha, é responsável por pesquisar fabricantes, comparar bicicletas aro 29 e reunir informações que possam ajudar o leitor a conhecer melhor cada modelo antes de fazer sua escolha.",
      "Seu interesse por bicicletas vai além da produção de conteúdo. No tempo livre, Rafael gosta de pesquisar novos modelos, acompanhar lançamentos e descobrir as diferenças entre bicicletas que, à primeira vista, podem parecer muito semelhantes. Também aproveita seus momentos de lazer para sair de bicicleta e conhecer novos caminhos, mantendo contato com aquilo que pesquisa diariamente.",
      "Essa experiência como ciclista e pesquisador influencia diretamente seu trabalho. Ao analisar uma bicicleta, Rafael procura entender não apenas suas especificações, mas também sua proposta, seus componentes e o tipo de utilização para o qual ela pode fazer mais sentido.",
      "No portal, seu objetivo é transformar horas de pesquisa em informações organizadas e fáceis de compreender, ajudando o leitor a comparar marcas e modelos de bicicletas aro 29 com mais segurança."
    ],
    quote: "“Gosto de pesquisar bicicletas tanto quanto gosto de pedalar. Quando encontro um modelo novo, minha curiosidade é entender o que existe por trás daquela bicicleta e quais características realmente fazem diferença para quem vai utilizá-la.” — Rafael Martins"
  },
  {
    name: "Lucas Almeida",
    slug: "lucas-almeida",
    role: "Especialista em Bicicletas Aro 29 e Conteúdo Prático",
    imageUrl: "/images/autores/Lucas Almeida.webp",
    paragraphs: [
      "Lucas Almeida é ciclista experiente e especialista em bicicletas aro 29. No Pedal na Trilha, é responsável pelos conteúdos relacionados ao uso, funcionamento, componentes, cuidados e manutenção das bicicletas.",
      "Sua relação com o ciclismo é construída principalmente pela experiência prática. Depois de anos pedalando, conhecendo diferentes tipos de terreno e convivendo com as situações comuns do dia a dia de um ciclista, Lucas desenvolveu um interesse especial por entender como cada componente influencia o comportamento da bicicleta.",
      "Além de pedalar, gosta de conhecer diferentes configurações, acompanhar novidades do mercado e entender as diferenças entre componentes, transmissões, suspensões, freios, pneus e outros equipamentos. Essa experiência permite que seus conteúdos partam de dúvidas reais que surgem para quem utiliza uma bicicleta, e não apenas de especificações encontradas em catálogos.",
      "No portal, Lucas procura transformar esse conhecimento em explicações simples e práticas. Seu objetivo é ajudar tanto quem está comprando sua primeira aro 29 quanto quem já pedala há algum tempo e quer entender melhor sua bicicleta, melhorar sua experiência ou aprender a cuidar dos seus componentes."
    ],
    quote: "“Depois de muito tempo pedalando, percebi que conhecer a bicicleta muda completamente a experiência. Meu objetivo é compartilhar esse conhecimento de forma simples, para que mais pessoas entendam sua bike e aproveitem melhor cada pedal.” — Lucas Almeida"
  }
];
