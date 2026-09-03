export interface Product {
  id: string;
  name: string;
  description: string;

  imageUrl: string;
  affiliateUrl: string;
  category: string;
  features?: string[];
}

export const products: Product[] = [
  {
    id: "caloi-moab",
    name: "Caloi Bicicleta Moab Aro 29",
    description: "Estrutura robusta em alumÃ­nio e 18 marchas Microshift para quem busca durabilidade em trilhas intermediÃ¡rias.",

    imageUrl: "/images/blog/1/Caloi Moab 29.webp",
    affiliateUrl: "https://meli.la/1gs3ipC",
    category: "Peso-Pesado",
    features: ["Quadro em alumÃ­nio resistente", "Geometria versÃ¡til", "CÃ¢mbios Microshift"],
  },
  {
    id: "absolute-nero-4",
    name: "Bicicleta Aro 29 Absolute Nero 4",
    description: "Para quem quer encarar Trilhas Pesadas com transmissÃ£o 1x12.",

    imageUrl: "/images/blog/1/Absolute Nero 4.webp",
    affiliateUrl: "https://meli.la/2FkqvES",
    category: "Peso-Pesado",
    features: ["TransmissÃ£o 1x12", "Freios hidrÃ¡ulicos", "SuspensÃ£o com trava"],
  },
  {
    id: "ksw-xlt-100",
    name: "BICICLETA KSW XLT 100 21V SHIMANO",
    description: "A mais barata que ainda vale a pena comprar com conjunto Shimano Tourney.",

    imageUrl: "/images/blog/1/KSW XLT 100.webp",
    affiliateUrl: "https://meli.la/1JnoNhU",
    category: "Peso-Pesado",
    features: ["Shimano 21V", "Quadro leve 6061", "Trocadores Rapid Fire"],
  },
  {
    id: "caloi-montana",
    name: "Caloi Montana 21V",
    description: "Um tratorzinho urbano para te levar do ponto A ao B sem complicaÃ§Ã£o.",

    imageUrl: "/images/blog/1/Caloi Montana 21V.webp",
    affiliateUrl: "https://meli.la/1CVdc3Y",
    category: "Asfalto/Urbano",
    features: ["Quadro em alumÃ­nio", "Pneus largos 2.25", "Freios a disco"],
  },
  {
    id: "collina-21",
    name: "Bicicleta Aro 29 Collina 21 Marchas",
    description: "Ã“tima para asfalto com manoplas anatÃ´micas em gel e suporte atÃ© 120kg.",

    imageUrl: "/images/blog/1/Bicicleta Aro 29 Collina 21 Marchas.webp",
    affiliateUrl: "https://meli.la/33mTAYA",
    category: "Asfalto/Urbano",
    features: ["Manoplas em gel", "Suporta 120kg", "Trocador Grip Shift"],
  },
  {
    id: "colli-athena",
    name: "Colli Athena Montain Bike",
    description: "Quadro de aÃ§o carbono super resistente que filtra vibraÃ§Ãµes do asfalto.",

    imageUrl: "/images/blog/1/Colli Athena Montain Bike.webp",
    affiliateUrl: "https://meli.la/2dVhiq1",
    category: "Asfalto/Urbano",
    features: ["AÃ§o carbono", "Postura ereta", "Rapid Fire"],
  },
  {
    id: "alfameq-pandora",
    name: "Bicicleta Aro 29 Alfameq Pandora Feminina",
    description: "Tubo superior rebaixado e alavancas Ez-Fire para seguranÃ§a urbana.",

    imageUrl: "/images/blog/1/Bicicleta Aro 29 Alfameq Pandora Feminina.webp",
    affiliateUrl: "https://meli.la/1BBSVVM",
    category: "Feminina",
    features: ["Quadro rebaixado", "Ez-Fire", "Suporta 130kg"],
  },
  {
    id: "absolute-hera",
    name: "Bicicleta Feminina Aro 29 Absolute Hera",
    description: "A escolha para quem quer rodar na cidade e arriscar a primeira trilha leve.",

    imageUrl: "/images/blog/1/Bicicleta Feminina Aro 29 Absolute Hera.webp",
    affiliateUrl: "https://meli.la/17Zh4Xf",
    category: "Feminina",
    features: ["Ergonomia feminina", "SuspensÃ£o 80mm", "Freios a disco"],
  },
  {
    id: "first-smitt-deore",
    name: "Bicicleta First Aro 29 Smitt Gold Shimano Deore",
    description: "A escolha premium da linha, equipada com grupo Shimano Deore de 12 marchas e freios hidrÃ¡ulicos.",
    imageUrl: "/images/blog/1/Bicicleta First Aro 29 Smitt Gold cÃ¢mbio Shimano Deore.webp",
    affiliateUrl: "https://meli.la/1jiEQZu",
    category: "Peso-Pesado",
    features: ["Shimano Deore 12V", "Freio a Disco HidrÃ¡ulico", "Cabeamento Interno"],
  },
  {
    id: "first-smitt-gta",
    name: "Bicicleta First Aro 29 Smitt Gold GTA 1x12",
    description: "O custo-benefÃ­cio inteligente para comeÃ§ar na trilha, com visual limpo e cassete traseiro 50 dentes.",
    imageUrl: "/images/blog/1/Bicicleta First Aro 29 Smitt Gold.webp",
    affiliateUrl: "https://meli.la/1pATT22",
    category: "Peso-Pesado",
    features: ["TransmissÃ£o 1x12 GTA", "Freio a Disco HidrÃ¡ulico", "Quadro em alumÃ­nio"],
  },
  {
    id: "rava-pressure",
    name: "Bicicleta Mountain Bike Rava Pressure 20 Marchas",
    description: "Equipada com aros Vzan resistentes e sistema cassete K7 de 20 marchas, entregando confiabilidade em subidas exigentes.",
    imageUrl: "/images/blog/1/Bicicleta Mountain Bike Rava Pressure 20 Marchas Aro 29 SuspensÃ£o Dianteira Freio a Disco HidrÃ¡ulico.webp",
    affiliateUrl: "https://meli.la/1qZo9dg",
    category: "Peso-Pesado",
    features: ["Marchas K7 20V", "Aros Vzan", "Quadro focado em conforto"],
  },
  {
    id: "rava-up",
    name: "Bicicleta Aro 29 AlumÃ­nio Rava Up 21v",
    description: "A opÃ§Ã£o honesta para o uso diÃ¡rio, oferecendo peÃ§as resistentes por um preÃ§o acessÃ­vel para o asfalto.",
    imageUrl: "/images/blog/1/Bicicleta Aro 29 AlumÃ­nio Rava Up 21v Mtb Urbana Lazer Cor Preto.webp",
    affiliateUrl: "https://meli.la/17EZvWx",
    category: "Asfalto/Urbano",
    features: ["21 Marchas", "Uso DiÃ¡rio", "Custo baixo"],
  },
  {
    id: "dropp-z3",
    name: "Bicicleta Dropp Z3 Aro 29",
    description: "EquilÃ­brio entre preÃ§o acessÃ­vel e funcionalidade para quem foge do trÃ¢nsito ou busca trilhas leves no fim de semana.",
    imageUrl: "/images/blog/1/Bicicleta Dropp Z3 Aro 29.webp",
    affiliateUrl: "https://meli.la/32CqC32",
    category: "Iniciantes/Lazer",
    features: ["Quadro AlumÃ­nio 6061", "21 Marchas", "Aro Parede Dupla"],
  },
  {
    id: "gts-pro-m5",
    name: "Bicicleta GTS Pro M5 Aro 29",
    description: "Custo-benefÃ­cio para iniciantes, com quadro de alumÃ­nio resistente e opÃ§Ãµes para uso urbano.",
    imageUrl: "/images/blog/1/bicicleta gts pro m5 aro 29.webp",
    affiliateUrl: "https://meli.la/2n53Vpd",
    category: "Iniciantes/Urbano",
    features: ["Quadro em AlumÃ­nio", "Aro 29", "Freio a Disco"],
  },
  {
    id: "gta-start-21v",
    name: "GTA Start aro 29 21v",
    description: "A porta de entrada da marca, ideal para quem quer fugir do trÃ¢nsito na ciclovia e curtir uma estradinha de terra no domingo com excelente custo-benefÃ­cio.",
    imageUrl: "/images/blog/1/GTA Start aro 29 21v.webp",
    affiliateUrl: "https://meli.la/1oUnqHo",
    category: "Iniciantes/Lazer",
    features: ["Cabeamento Interno", "21 Marchas", "Quadro em AlumÃ­nio"]
  },
  {
    id: "gti-roma",
    name: "Bicicleta Aro 29 Gti Roma",
    description: "A magrela valente para quem estÃ¡ comeÃ§ando, focada em lazer urbano com quadro de alumÃ­nio e cabeamento interno.",
    imageUrl: "/images/blog/1/Bicicleta Aro 29 Gti Roma.webp",
    affiliateUrl: "https://meli.la/1kviig7",
    category: "Iniciantes/Urbano",
    features: ["Quadro de AlumÃ­nio", "Cabeamento Interno", "Freio a Disco MecÃ¢nico"]
  },
  {
    id: "pneu-paco-nomad",
    name: "Pneu Paco Nomad 29x2 com Faixa Bege MTB",
    description: "Visual retrÃ´ e Ã³timo custo-benefÃ­cio para estradÃ£o e passeios.",
    imageUrl: "/images/blog/1/Pneu Paco Nomad 29x2 com Faixa Bege MTB.webp",
    affiliateUrl: "https://meli.la/1hBMNsy",
    category: "Pneu Aro 29",
    features: ["Faixa bege", "Arame e nylon", "Para asfalto e terra leve"]
  },
  {
    id: "pneu-pirelli-scorpion",
    name: "Pneu Pirelli Scorpion Pro Kevlar 29x2",
    description: "Tecnologia Dual Compound e APS anti-furo para trilhas.",
    imageUrl: "/images/blog/1/Pneu Pirelli Scorpion Pro Kevlar 29x2.webp",
    affiliateUrl: "https://meli.la/23GuKSQ",
    category: "Pneu Aro 29",
    features: ["Kevlar", "Fita APS Anti-furo", "Dual Compound"]
  },
  {
    id: "pneu-maxxis-ikon",
    name: "Pneu Bike Maxxis Ikon 29x2.20 DobrÃ¡vel Exo Tubeless",
    description: "Para quem quer velocidade e proteÃ§Ã£o EXO.",
    imageUrl: "/images/blog/1/Pneu Bike Maxxis Ikon 29x2.20 DobrÃ¡vel Exo Tubeless.webp",
    affiliateUrl: "https://meli.la/1B6Y2UB",
    category: "Pneu Aro 29",
    features: ["Tubeless Ready", "ProteÃ§Ã£o EXO", "RÃ¡pido"]
  },
  {
    id: "pneu-maxxis-rekon-race",
    name: "Pneu Maxxis Rekon Race 29x2.25 Kevlar Exo Tubeless",
    description: "Foco em Performance e Velocidade. O pneu de Cross Country (XC) para quem busca pÃ³dios.",
    imageUrl: "/images/blog/1/pneu aro 29 maxxis rekon race 29x2.25 kevlar exo tubeless.webp",
    affiliateUrl: "https://link.amazon/B0aU2fiAC",
    category: "Pneu Aro 29",
    features: ["Semi-Slick XC", "EXO Protection", "Tubeless Ready"]
  },
  {
    id: "par-pneus-levorin",
    name: "Par Pneus Bike Mtb Levorin Eruption Aro 29 X 2.30 Banda Leve",
    description: "Renove a bike toda gastando menos com este par resistente.",
    imageUrl: "/images/blog/1/Par Pneus Bike Mtb Levorin Eruption Aro 29 X 2.30 Banda Leve.webp",
    affiliateUrl: "https://meli.la/32fUaqf",
    category: "Pneu Aro 29",
    features: ["Par econÃ´mico", "Largura 2.30", "Durabilidade"]
  },
  {
    id: "pneu-kenda-aptor",
    name: "Pneu Mtb Kenda Aptor K1153 29x2.10 Faixa Marrom",
    description: "Estilo gringo com faixa marrom para a cidade e terra leve.",
    imageUrl: "/images/blog/1/Pneu Mtb Kenda Aptor K1153 29x2.10 Faixa Marrom.webp",
    affiliateUrl: "https://meli.la/1tVZtLo",
    category: "Pneu Aro 29",
    features: ["Faixa marrom", "VersÃ¡til", "Custo-benefÃ­cio"]
  },
  {
    id: "pneu-bicicleta-exces",
    name: "PNEU BICICLETA A29X2 EXCES",
    description: "A escolha tÃ¡tica para usar a bike na cidade e no lazer.",
    imageUrl: "/images/blog/1/PNEU BICICLETA A29X2 EXCES.webp",
    affiliateUrl: "https://meli.la/1ubGtzp",
    category: "Pneu Aro 29",
    features: ["Urbano e lazer", "DurÃ¡vel", "AtÃ© 50 PSI"]
  },
  {
    id: "kit-shimano-tourney-21v",
    name: "Kit Shimano Tourney 21v Completo",
    description: "O kit Tourney de 21 marchas Ã© o seu melhor amigo para o dia a dia.",
    imageUrl: "/images/blog/1/Kit Shimano Tourney 21v Completo.webp",
    affiliateUrl: "https://meli.la/2Q5piiv",
    category: "RelaÃ§Ã£o",
    features: ["Kit completo com movimento central", "Catraca Megarange para subidas", "Durabilidade Shimano"]
  },
  {
    id: "grupo-absolute-wild-2-1x12v",
    name: "Grupo Absolute Wild 2 Prime RelaÃ§Ã£o 1x12v MTB",
    description: "O Absolute Wild 2 de 12 marchas Ã© o seu passaporte para o mountain bike moderno.",
    imageUrl: "/images/blog/1/Grupo Absolute Wild 2 Prime RelaÃ§Ã£o 1x12v MTB.webp",
    affiliateUrl: "https://meli.la/2JUuwDU",
    category: "RelaÃ§Ã£o",
    features: ["Coroa Ãºnica", "Cubo tradicional (HG)", "Cassete 11-50 dentes"]
  },
  {
    id: "kit-shimano-alivio-m3100-3x9v",
    name: "Kit Shimano Alivio M3100 3x9v",
    description: "O Alivio de 27 marchas (3x9) te dÃ¡ um leque de opÃ§Ãµes gigantesco.",
    imageUrl: "/images/blog/1/Kit Shimano Alivio M3100 3x9v.webp",
    affiliateUrl: "https://meli.la/1aWPDjk",
    category: "RelaÃ§Ã£o",
    features: ["Tecnologia Shadow RD", "Movimento central Octalink", "Alta durabilidade"]
  },
  {
    id: "kit-shimano-deore-m6100-gta",
    name: "Kit Shimano Deore 12v M6100 + Cassete GTA HG",
    description: "A precisÃ£o absurda do cÃ¢mbio Shimano Deore M6100 misturada com um cassete GTA.",
    imageUrl: "/images/blog/1/Kit Shimano Deore 12v M6100 + Cassete GTA HG.webp",
    affiliateUrl: "https://meli.la/2akXzYu",
    category: "RelaÃ§Ã£o",
    features: ["Tecnologia Shadow RD+", "Encaixe em cubo comum", "Trocas rÃ¡pidas"]
  }
,
  {
    id: "absolute-prime-sl",
    name: "SuspensÃ£o Bike Absolute Prime Sl Aro 29",
    description: "SuspensÃ£o a ar de entrada com excelente custo-benefÃ­cio.",
    imageUrl: "/images/blog/1/SuspensÃ£o Bike Absolute Prime Sl Aro 29.webp",
    affiliateUrl: "https://meli.la/1uJ2Cc4",
    category: "SuspensÃ£o"
  },
  {
    id: "rockshox-judy-silver",
    name: "Garfo SuspensÃ£o Aro 29 Rockshox Judy Silver Tk",
    description: "Garfo premium de alta durabilidade e leitura de terreno.",
    imageUrl: "/images/blog/1/Garfo SuspensÃ£o Aro 29 Rockshox Judy Silver Tk.webp",
    affiliateUrl: "https://meli.la/2F8fKsu",
    category: "SuspensÃ£o"
  },
  {
    id: "gta-aluminio",
    name: "Garfo SuspensÃ£o Aro 29 Gta AlumÃ­nio",
    description: "Excelente para uso urbano com ombro em alumÃ­nio.",
    imageUrl: "/images/blog/1/Garfo SuspensÃ£o Aro 29 Gta AlumÃ­nio.webp",
    affiliateUrl: "https://meli.la/1TzaeQi",
    category: "SuspensÃ£o"
  },
  {
    id: "absolute-330-hlo",
    name: "Garfo SuspensÃ£o Absolute 330-HLO Aro 29",
    description: "SuspensÃ£o a mola confiÃ¡vel com trava no guidÃ£o.",
    imageUrl: "/images/blog/1/Garfo SuspensÃ£o Absolute 330-HLO Aro 29 com Trava no GuidÃ£o.webp",
    affiliateUrl: "https://meli.la/1nZy3mk",
    category: "SuspensÃ£o"
  },
  {
    id: "absolute-nero-suspensao",
    name: "Garfo SuspensÃ£o Absolute Nero Aro 29",
    description: "Garfo parrudo de 32mm para ciclovia e trilha.",
    imageUrl: "/images/blog/1/Garfo SuspensÃ£o Absolute Nero Aro 29 com Trava no GuidÃ£o.webp",
    affiliateUrl: "https://meli.la/1u9NkrX",
    category: "SuspensÃ£o"
  },
  {
    id: "absolute-mxfk-19",
    name: "Garfo SuspensÃ£o Absolute MXFK-19 Aro 29",
    description: "Feita em aÃ§o para durabilidade extrema na cidade.",
    imageUrl: "/images/blog/1/Garfo SuspensÃ£o Absolute MXFK-19 Aro 29 Aheadset AÃ§o.webp",
    affiliateUrl: "https://meli.la/22fbvuT",
    category: "SuspensÃ£o"
  },
  {
    id: "bikemaxx-trava-ombro",
    name: "Garfo SuspensÃ£o Aro 29 Bikemaxx",
    description: "Modelo simples com trava no ombro para uso leve.",
    imageUrl: "/images/blog/1/Garfo SuspensÃ£o Aro 29 Bikemaxx Trava Ombro.webp",
    affiliateUrl: "https://meli.la/1UYcu66",
    category: "SuspensÃ£o"
  },
  {
    id: "cly-harpia",
    name: "Garfo SuspensÃ£o Cly Harpia 29",
    description: "SuspensÃ£o com ajuste de retorno e curso de 100mm.",
    imageUrl: "/images/blog/1/Garfo SuspensÃ£o Cly Harpia 29 Com Trava e Ajuste Freio a Disco.webp",
    affiliateUrl: "https://meli.la/1jQgrc3",
    category: "SuspensÃ£o"
  },
  {
    id: "guidao-lunje-780mm",
    name: "GuidÃ£o MTB AlumÃ­nio Curvo XC 780mm (Preto)",
    description: "GuidÃ£o curvo de 780mm que levanta o tronco e tira a pressÃ£o dos punhos, ideal para maior controle em trilhas agressivas.",
    imageUrl: "/images/blog/1/GuidÃ£o MTB AlumÃ­nio Curvo XC 780mm (Preto).webp",
    affiliateUrl: "https://meli.la/2TSXABG",
    category: "GuidÃ£o"
  },
  {
    id: "guidao-shiver-flat-760mm",
    name: "GuidÃ£o Shiver MTB Flat Reto 760mm AlumÃ­nio",
    description: "GuidÃ£o reto super leve de 760mm focado em performance pura, jogando o peso para frente em subidas Ã­ngremes.",
    imageUrl: "/images/blog/1/GuidÃ£o Shiver MTB Flat Reto 760mm AlumÃ­nio.webp",
    affiliateUrl: "https://meli.la/2EBh7fe",
    category: "GuidÃ£o"
  },
  {
    id: "guidao-absolute-hb-002-80mm",
    name: "GuidÃ£o HB-002 Alto 80mm MTB 720mm",
    description: "GuidÃ£o com 80mm de elevaÃ§Ã£o para mÃ¡ximo conforto, permitindo pedalar de costas retas no dia a dia.",
    imageUrl: "/images/blog/1/GuidÃ£o HB-002 Alto 80mm MTB 720mm.webp",
    affiliateUrl: "https://meli.la/1C53h8R",
    category: "GuidÃ£o"
  },
  {
    id: "guidao-absolute-semi-curvo-20mm",
    name: "GuidÃ£o Absolute MTB Semi Curvo 20mm 720mm",
    description: "O modelo faz tudo com 20mm de elevaÃ§Ã£o. Geometria versÃ¡til ideal para asfalto e estradÃ£o de terra.",
    imageUrl: "/images/blog/1/GuidÃ£o Absolute MTB Semi Curvo 20mm 720mm.webp",
    affiliateUrl: "https://meli.la/2bDZFvY",
    category: "GuidÃ£o"
  },
  {
    id: "guidao-absolute-nero-80mm",
    name: "GuidÃ£o Alto Absolute Nero 80mm Curvo",
    description: "Para uso urbano com 80mm de elevaÃ§Ã£o. Zera as dores de postura deitando a bike no conforto.",
    imageUrl: "/images/blog/1/GuidÃ£o Alto Absolute Nero 80mm Curvo.webp",
    affiliateUrl: "https://meli.la/2pcARUS",
    category: "GuidÃ£o"
  },
  {
    id: "guidao-rava-flat-730mm",
    name: "GuidÃ£o Rava MTB Trilha Reto 730mm Backsweep 9Â°",
    description: "Reto mas ergonÃ´mico. Com 9Â° de backsweep para manter a performance de giro aliviando as articulaÃ§Ãµes.",
    imageUrl: "/images/blog/1/GuidÃ£o Rava MTB Trilha Reto 730mm Backsweep 9Â°.webp",
    affiliateUrl: "https://meli.la/1ZCmx2P",
    category: "GuidÃ£o"
  },
  {
    id: "guidao-absolute-nero-60mm",
    name: "GuidÃ£o Absolute Nero Curvo Rise 60mm",
    description: "Levanta as mÃ£os sem prejudicar muito a pilotagem em descidas, salvando quadros com geometria baixa.",
    imageUrl: "/images/blog/1/GuidÃ£o Absolute Nero Curvo Rise 60mm.webp",
    affiliateUrl: "https://meli.la/1y4Kfx3",
    category: "GuidÃ£o"
  },
  {
    id: "guidao-rava-rise-20mm",
    name: "GuidÃ£o Rava Alto Curvo Rise Bar 20mm",
    description: "A aula de ergonomia: combina backsweep e upsweep (9Â°) para naturalidade total das mÃ£os.",
    imageUrl: "/images/blog/1/GuidÃ£o Rava Alto Curvo Rise Bar 20mm.webp",
    affiliateUrl: "https://meli.la/1iN5QfL",
    category: "GuidÃ£o"
  },
  {
    id: "guidao-absolute-nero-40mm",
    name: "GuidÃ£o Absolute Nero Rise 40mm AlumÃ­nio",
    description: "Deixa a bike muito mais arisca e brincalhona, encurtando o alcance com 40mm de elevaÃ§Ã£o.",
    imageUrl: "/images/blog/1/GuidÃ£o Absolute Nero Rise 40mm AlumÃ­nio.webp",
    affiliateUrl: "https://meli.la/2hnFimT",
    category: "GuidÃ£o"
  },
  {
    id: "guidao-mons-bike-flat-720mm",
    name: "GuidÃ£o Bike AlumÃ­nio Reto 720mm 31.8mm Ahead Mtb Backsweep 9Â° Leve Resistente Ciclismo Mountain Bike Aro 29",
    description: "GuidÃ£o super leve (290g) e agressivo, com foco em girar rÃ¡pido protegendo o pulso com 9Â° de backsweep.",
    imageUrl: "/images/blog/1/GuidÃ£o Bike AlumÃ­nio Reto 720mm 31.8mm Ahead Mtb Backsweep 9Â° Leve Resistente Ciclismo Mountain Bike Aro 29.webp",
    affiliateUrl: "https://meli.la/1RkNJ5D",
    category: "GuidÃ£o"
  },
  {
    id: "torquimetro-estalo",
    name: "Torquímetro Estalo P Soquete 14",
    description: "Ferramenta essencial para instalar peças de bicicleta com precisão, evitando danos ao material.",
    imageUrl: "/images/blog/1/Torquimetro Estalo P Soquete 14.webp",
    affiliateUrl: "https://meli.la/2nX1Sz7",
    category: "Ferramentas"
  },
  {
    id: "manopla-gta-lock",
    name: "Manopla Bike MTB 130mm GTA Com Trava Lock On Anatômica",
    description: "Manopla anatômica com trava lock-on para evitar rotação, oferecendo muito mais conforto nas trilhas.",
    imageUrl: "/images/blog/1/Manopla Bike MTB 130mm GTA Com Trava Lock On Anatômica.webp",
    affiliateUrl: "https://meli.la/2B6qyHQ",
    category: "Acessórios"
  },
  {
    id: "mesa-absolute-35mm",
    name: "Mesa Avanço Bike Mtb Bmx Absolute 31.8mm X 35mm Em Alumínio",
    description: "Mesa curta perfeita para usar com guidões mais longos e curvos, melhorando o controle na descida.",
    imageUrl: "/images/blog/1/Mesa Avanço Bike Mtb Bmx Absolute 31.8mm X 35mm Em Alumínio.webp",
    affiliateUrl: "https://meli.la/1WtnaWm",
    category: "Peças"
  }
];

export const accessories = [
  {
    id: "capacete-absolute",
    name: "Capacete Absolute",
    description: "Capacete LED",
    imageUrl: "/images/blog/1/Capacete Absolute.webp",
    affiliateUrl: "https://meli.la/2T3tvyp",
    category: "AcessÃ³rios",
  },
  {
    id: "cadeado-ulock",
    name: "Cadeado U-Lock Onguard",
    description: "U-Lock",
    imageUrl: "/images/blog/1/Cadeado U-Lock Onguard.webp",
    affiliateUrl: "https://meli.la/2ztn8YJ",
    category: "AcessÃ³rios",
  },
  {
    id: "bomba-ar-portatil",
    name: "Bomba de Ar PortÃ¡til",
    description: "Bomba de Ar",
    imageUrl: "/images/blog/1/Bomba de ar portÃ¡til.webp",
    affiliateUrl: "https://meli.la/2txj466",
    category: "AcessÃ³rios",
  },
  {
    id: "camara-ar-pirelli",
    name: "Par CÃ¢mara Ar Pirelli Bike Mtb Aro 29",
    description: "CÃ¢mara de ar Pirelli para MTB",
    imageUrl: "/images/blog/1/Par CÃ¢mara Ar Pirelli Bike Mtb Aro 29.webp",
    affiliateUrl: "https://meli.la/1nWk9Q4",
    category: "AcessÃ³rios",
  },
  {
    id: "fita-antifuro-safetire",
    name: "Fita Antifuro Safetire 40mm Branca Aro 29 Pneu 2.0 A 2.4 Mtb",
    description: "Fita antifuro Safetire",
    imageUrl: "/images/blog/1/Fita Antifuro Safetire 40mm Branca Aro 29 Pneu 2.0 A 2.4 Mtb.webp",
    affiliateUrl: "https://meli.la/2zHa4vf",
    category: "AcessÃ³rios",
  },
  {
    id: "selante-liquido-tubeless",
    name: "Selante LÃ­quido Pneu Bike Tubeless",
    description: "Selante para pneus tubeless",
    imageUrl: "/images/blog/1/Selante LÃ­quido Pneu Bike Tubeless.webp",
    affiliateUrl: "https://meli.la/1JUyboz",
    category: "AcessÃ³rios",
  },
  {
    id: "ferramenta-medidora-corrente",
    name: "Ferramenta Medidora de Desgaste de Corrente",
    description: "Medidor de desgaste de corrente",
    imageUrl: "/images/blog/1/Ferramenta Medidora de Desgaste de Corrente.webp",
    affiliateUrl: "https://meli.la/14D6B1s",
    category: "Ferramentas",
  },
  {
    id: "lubrificante-corrente-cera",
    name: "Lubrificantes de Corrente (Base de Cera)",
    description: "Lubrificante a base de cera",
    imageUrl: "/images/blog/1/Lubrificantes de Corrente (Base de Cera).webp",
    affiliateUrl: "https://meli.la/2LtBt7G",
    category: "ManutenÃ§Ã£o",
  },
  {
    id: "chave-dinamometrica",
    name: "Chave DinamomÃ©trica para Bicicleta",
    description: "Chave dinamomÃ©trica",
    imageUrl: "/images/blog/1/Chave DinamomÃ©trica para Bicicleta.webp",
    affiliateUrl: "https://meli.la/2tb5bDt",
    category: "Ferramentas",
  },
  {
    id: "kit-limpeza-desengraxante",
    name: "Kit de Limpeza (Desengraxante + Escovas)",
    description: "Kit de limpeza",
    imageUrl: "/images/blog/1/Kit de Limpeza (Desengraxante + Escovas).webp",
    affiliateUrl: "https://meli.la/1FyHmya",
    category: "ManutenÃ§Ã£o",
  },
  {
    id: "bomba-suspensao-absolute",
    name: "Bomba de Ar para SuspensÃ£o Absolute",
    description: "Shock pump obrigatÃ³ria para calibrar garfos a ar.",
    imageUrl: "/images/blog/1/Bomba De Ar P SuspensÃ£o Absolute Wild AlumÃ­nio AtÃ© 300 Psi.webp",
    affiliateUrl: "https://meli.la/2tRmADK",
    category: "Ferramentas"
  },
  {
    id: "adaptador-suspensao-tapered",
    name: "Adaptador SuspensÃ£o Tapered",
    description: "Adapta garfo espiga reta em quadro cÃ´nico.",
    imageUrl: "/images/blog/1/Adaptador Para SuspensÃ£o Normal Em Quadros Tapered.webp",
    affiliateUrl: "https://meli.la/1wPEPN8",
    category: "PeÃ§as"
  },
  {
    id: "torquimetro-estalo",
    name: "Torquímetro Estalo P Soquete 14",
    description: "Ferramenta essencial para instalar peças de bicicleta com precisão, evitando danos ao material.",
    imageUrl: "/images/blog/1/Torquimetro Estalo P Soquete 14.webp",
    affiliateUrl: "https://meli.la/2nX1Sz7",
    category: "Ferramentas"
  },
  {
    id: "manopla-gta-lock",
    name: "Manopla Bike MTB 130mm GTA Com Trava Lock On Anatômica",
    description: "Manopla anatômica com trava lock-on para evitar rotação, oferecendo muito mais conforto nas trilhas.",
    imageUrl: "/images/blog/1/Manopla Bike MTB 130mm GTA Com Trava Lock On Anatômica.webp",
    affiliateUrl: "https://meli.la/2B6qyHQ",
    category: "Acessórios"
  },
  {
    id: "mesa-absolute-35mm",
    name: "Mesa Avanço Bike Mtb Bmx Absolute 31.8mm X 35mm Em Alumínio",
    description: "Mesa curta perfeita para usar com guidões mais longos e curvos, melhorando o controle na descida.",
    imageUrl: "/images/blog/1/Mesa Avanço Bike Mtb Bmx Absolute 31.8mm X 35mm Em Alumínio.webp",
    affiliateUrl: "https://meli.la/1WtnaWm",
    category: "Peças"
  }
];

