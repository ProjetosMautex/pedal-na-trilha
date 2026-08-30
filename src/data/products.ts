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
    description: "Estrutura robusta em alumínio e 18 marchas Microshift para quem busca durabilidade em trilhas intermediárias.",

    imageUrl: "/images/blog/1/Caloi Moab 29.webp",
    affiliateUrl: "https://meli.la/1gs3ipC",
    category: "Peso-Pesado",
    features: ["Quadro em alumínio resistente", "Geometria versátil", "Câmbios Microshift"],
  },
  {
    id: "absolute-nero-4",
    name: "Bicicleta Aro 29 Absolute Nero 4",
    description: "Para quem quer encarar Trilhas Pesadas com transmissão 1x12.",

    imageUrl: "/images/blog/1/Absolute Nero 4.webp",
    affiliateUrl: "https://meli.la/2FkqvES",
    category: "Peso-Pesado",
    features: ["Transmissão 1x12", "Freios hidráulicos", "Suspensão com trava"],
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
    description: "Um tratorzinho urbano para te levar do ponto A ao B sem complicação.",

    imageUrl: "/images/blog/1/Caloi Montana 21V.webp",
    affiliateUrl: "https://meli.la/1CVdc3Y",
    category: "Asfalto/Urbano",
    features: ["Quadro em alumínio", "Pneus largos 2.25", "Freios a disco"],
  },
  {
    id: "collina-21",
    name: "Bicicleta Aro 29 Collina 21 Marchas",
    description: "Ótima para asfalto com manoplas anatômicas em gel e suporte até 120kg.",

    imageUrl: "/images/blog/1/Bicicleta Aro 29 Collina 21 Marchas.webp",
    affiliateUrl: "https://meli.la/33mTAYA",
    category: "Asfalto/Urbano",
    features: ["Manoplas em gel", "Suporta 120kg", "Trocador Grip Shift"],
  },
  {
    id: "colli-athena",
    name: "Colli Athena Montain Bike",
    description: "Quadro de aço carbono super resistente que filtra vibrações do asfalto.",

    imageUrl: "/images/blog/1/Colli Athena Montain Bike.webp",
    affiliateUrl: "https://meli.la/2dVhiq1",
    category: "Asfalto/Urbano",
    features: ["Aço carbono", "Postura ereta", "Rapid Fire"],
  },
  {
    id: "alfameq-pandora",
    name: "Bicicleta Aro 29 Alfameq Pandora Feminina",
    description: "Tubo superior rebaixado e alavancas Ez-Fire para segurança urbana.",

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
    features: ["Ergonomia feminina", "Suspensão 80mm", "Freios a disco"],
  },
  {
    id: "first-smitt-deore",
    name: "Bicicleta First Aro 29 Smitt Gold Shimano Deore",
    description: "A escolha premium da linha, equipada com grupo Shimano Deore de 12 marchas e freios hidráulicos.",
    imageUrl: "/images/blog/1/Bicicleta First Aro 29 Smitt Gold câmbio Shimano Deore.webp",
    affiliateUrl: "https://meli.la/1jiEQZu",
    category: "Peso-Pesado",
    features: ["Shimano Deore 12V", "Freio a Disco Hidráulico", "Cabeamento Interno"],
  },
  {
    id: "first-smitt-gta",
    name: "Bicicleta First Aro 29 Smitt Gold GTA 1x12",
    description: "O custo-benefício inteligente para começar na trilha, com visual limpo e cassete traseiro 50 dentes.",
    imageUrl: "/images/blog/1/Bicicleta First Aro 29 Smitt Gold.webp",
    affiliateUrl: "https://meli.la/1pATT22",
    category: "Peso-Pesado",
    features: ["Transmissão 1x12 GTA", "Freio a Disco Hidráulico", "Quadro em alumínio"],
  },
  {
    id: "rava-pressure",
    name: "Bicicleta Mountain Bike Rava Pressure 20 Marchas",
    description: "Equipada com aros Vzan resistentes e sistema cassete K7 de 20 marchas, entregando confiabilidade em subidas exigentes.",
    imageUrl: "/images/blog/1/Bicicleta Mountain Bike Rava Pressure 20 Marchas Aro 29 Suspensão Dianteira Freio a Disco Hidráulico.webp",
    affiliateUrl: "https://meli.la/1qZo9dg",
    category: "Peso-Pesado",
    features: ["Marchas K7 20V", "Aros Vzan", "Quadro focado em conforto"],
  },
  {
    id: "rava-up",
    name: "Bicicleta Aro 29 Alumínio Rava Up 21v",
    description: "A opção honesta para o uso diário, oferecendo peças resistentes por um preço acessível para o asfalto.",
    imageUrl: "/images/blog/1/Bicicleta Aro 29 Alumínio Rava Up 21v Mtb Urbana Lazer Cor Preto.webp",
    affiliateUrl: "https://meli.la/17EZvWx",
    category: "Asfalto/Urbano",
    features: ["21 Marchas", "Uso Diário", "Custo baixo"],
  },
  {
    id: "dropp-z3",
    name: "Bicicleta Dropp Z3 Aro 29",
    description: "Equilíbrio entre preço acessível e funcionalidade para quem foge do trânsito ou busca trilhas leves no fim de semana.",
    imageUrl: "/images/blog/1/Bicicleta Dropp Z3 Aro 29.webp",
    affiliateUrl: "https://meli.la/32CqC32",
    category: "Iniciantes/Lazer",
    features: ["Quadro Alumínio 6061", "21 Marchas", "Aro Parede Dupla"],
  },
  {
    id: "gts-pro-m5",
    name: "Bicicleta GTS Pro M5 Aro 29",
    description: "Custo-benefício para iniciantes, com quadro de alumínio resistente e opções para uso urbano.",
    imageUrl: "/images/blog/1/bicicleta gts pro m5 aro 29.webp",
    affiliateUrl: "https://meli.la/2n53Vpd",
    category: "Iniciantes/Urbano",
    features: ["Quadro em Alumínio", "Aro 29", "Freio a Disco"],
  },
  {
    id: "gta-start-21v",
    name: "GTA Start aro 29 21v",
    description: "A porta de entrada da marca, ideal para quem quer fugir do trânsito na ciclovia e curtir uma estradinha de terra no domingo com excelente custo-benefício.",
    imageUrl: "/images/blog/1/GTA Start aro 29 21v.webp",
    affiliateUrl: "https://meli.la/1oUnqHo",
    category: "Iniciantes/Lazer",
    features: ["Cabeamento Interno", "21 Marchas", "Quadro em Alumínio"]
  },
  {
    id: "gti-roma",
    name: "Bicicleta Aro 29 Gti Roma",
    description: "A magrela valente para quem está começando, focada em lazer urbano com quadro de alumínio e cabeamento interno.",
    imageUrl: "/images/blog/1/Bicicleta Aro 29 Gti Roma.webp",
    affiliateUrl: "https://meli.la/1kviig7",
    category: "Iniciantes/Urbano",
    features: ["Quadro de Alumínio", "Cabeamento Interno", "Freio a Disco Mecânico"]
  },
  {
    id: "pneu-paco-nomad",
    name: "Pneu Paco Nomad 29x2 com Faixa Bege MTB",
    description: "Visual retrô e ótimo custo-benefício para estradão e passeios.",
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
    name: "Pneu Bike Maxxis Ikon 29x2.20 Dobrável Exo Tubeless",
    description: "Para quem quer velocidade e proteção EXO.",
    imageUrl: "/images/blog/1/Pneu Bike Maxxis Ikon 29x2.20 Dobrável Exo Tubeless.webp",
    affiliateUrl: "https://meli.la/1B6Y2UB",
    category: "Pneu Aro 29",
    features: ["Tubeless Ready", "Proteção EXO", "Rápido"]
  },
  {
    id: "pneu-maxxis-rekon-race",
    name: "Pneu Maxxis Rekon Race 29x2.25 Kevlar Exo Tubeless",
    description: "Foco em Performance e Velocidade. O pneu de Cross Country (XC) para quem busca pódios.",
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
    features: ["Par econômico", "Largura 2.30", "Durabilidade"]
  },
  {
    id: "pneu-kenda-aptor",
    name: "Pneu Mtb Kenda Aptor K1153 29x2.10 Faixa Marrom",
    description: "Estilo gringo com faixa marrom para a cidade e terra leve.",
    imageUrl: "/images/blog/1/Pneu Mtb Kenda Aptor K1153 29x2.10 Faixa Marrom.webp",
    affiliateUrl: "https://meli.la/1tVZtLo",
    category: "Pneu Aro 29",
    features: ["Faixa marrom", "Versátil", "Custo-benefício"]
  },
  {
    id: "pneu-bicicleta-exces",
    name: "PNEU BICICLETA A29X2 EXCES",
    description: "A escolha tática para usar a bike na cidade e no lazer.",
    imageUrl: "/images/blog/1/PNEU BICICLETA A29X2 EXCES.webp",
    affiliateUrl: "https://meli.la/1ubGtzp",
    category: "Pneu Aro 29",
    features: ["Urbano e lazer", "Durável", "Até 50 PSI"]
  },
  {
    id: "kit-shimano-tourney-21v",
    name: "Kit Shimano Tourney 21v Completo",
    description: "O kit Tourney de 21 marchas é o seu melhor amigo para o dia a dia.",
    imageUrl: "/images/blog/1/Kit Shimano Tourney 21v Completo.webp",
    affiliateUrl: "https://meli.la/2Q5piiv",
    category: "Relação",
    features: ["Kit completo com movimento central", "Catraca Megarange para subidas", "Durabilidade Shimano"]
  },
  {
    id: "grupo-absolute-wild-2-1x12v",
    name: "Grupo Absolute Wild 2 Prime Relação 1x12v MTB",
    description: "O Absolute Wild 2 de 12 marchas é o seu passaporte para o mountain bike moderno.",
    imageUrl: "/images/blog/1/Grupo Absolute Wild 2 Prime Relação 1x12v MTB.webp",
    affiliateUrl: "https://meli.la/2JUuwDU",
    category: "Relação",
    features: ["Coroa única", "Cubo tradicional (HG)", "Cassete 11-50 dentes"]
  },
  {
    id: "kit-shimano-alivio-m3100-3x9v",
    name: "Kit Shimano Alivio M3100 3x9v",
    description: "O Alivio de 27 marchas (3x9) te dá um leque de opções gigantesco.",
    imageUrl: "/images/blog/1/Kit Shimano Alivio M3100 3x9v.webp",
    affiliateUrl: "https://meli.la/1aWPDjk",
    category: "Relação",
    features: ["Tecnologia Shadow RD", "Movimento central Octalink", "Alta durabilidade"]
  },
  {
    id: "kit-shimano-deore-m6100-gta",
    name: "Kit Shimano Deore 12v M6100 + Cassete GTA HG",
    description: "A precisão absurda do câmbio Shimano Deore M6100 misturada com um cassete GTA.",
    imageUrl: "/images/blog/1/Kit Shimano Deore 12v M6100 + Cassete GTA HG.webp",
    affiliateUrl: "https://meli.la/2akXzYu",
    category: "Relação",
    features: ["Tecnologia Shadow RD+", "Encaixe em cubo comum", "Trocas rápidas"]
  }
,
  {
    id: "absolute-prime-sl",
    name: "Suspensão Bike Absolute Prime Sl Aro 29",
    description: "Suspensão a ar de entrada com excelente custo-benefício.",
    imageUrl: "/images/blog/1/Suspensão Bike Absolute Prime Sl Aro 29.webp",
    affiliateUrl: "https://meli.la/1uJ2Cc4",
    category: "Suspensão"
  },
  {
    id: "rockshox-judy-silver",
    name: "Garfo Suspensão Aro 29 Rockshox Judy Silver Tk",
    description: "Garfo premium de alta durabilidade e leitura de terreno.",
    imageUrl: "/images/blog/1/Garfo Suspensão Aro 29 Rockshox Judy Silver Tk.webp",
    affiliateUrl: "https://meli.la/2F8fKsu",
    category: "Suspensão"
  },
  {
    id: "gta-aluminio",
    name: "Garfo Suspensão Aro 29 Gta Alumínio",
    description: "Excelente para uso urbano com ombro em alumínio.",
    imageUrl: "/images/blog/1/Garfo Suspensão Aro 29 Gta Alumínio.webp",
    affiliateUrl: "https://meli.la/1TzaeQi",
    category: "Suspensão"
  },
  {
    id: "absolute-330-hlo",
    name: "Garfo Suspensão Absolute 330-HLO Aro 29",
    description: "Suspensão a mola confiável com trava no guidão.",
    imageUrl: "/images/blog/1/Garfo Suspensão Absolute 330-HLO Aro 29 com Trava no Guidão.webp",
    affiliateUrl: "https://meli.la/1nZy3mk",
    category: "Suspensão"
  },
  {
    id: "absolute-nero-suspensao",
    name: "Garfo Suspensão Absolute Nero Aro 29",
    description: "Garfo parrudo de 32mm para ciclovia e trilha.",
    imageUrl: "/images/blog/1/Garfo Suspensão Absolute Nero Aro 29 com Trava no Guidão.webp",
    affiliateUrl: "https://meli.la/1u9NkrX",
    category: "Suspensão"
  },
  {
    id: "absolute-mxfk-19",
    name: "Garfo Suspensão Absolute MXFK-19 Aro 29",
    description: "Feita em aço para durabilidade extrema na cidade.",
    imageUrl: "/images/blog/1/Garfo Suspensão Absolute MXFK-19 Aro 29 Aheadset Aço.webp",
    affiliateUrl: "https://meli.la/22fbvuT",
    category: "Suspensão"
  },
  {
    id: "bikemaxx-trava-ombro",
    name: "Garfo Suspensão Aro 29 Bikemaxx",
    description: "Modelo simples com trava no ombro para uso leve.",
    imageUrl: "/images/blog/1/Garfo Suspensão Aro 29 Bikemaxx Trava Ombro.webp",
    affiliateUrl: "https://meli.la/1UYcu66",
    category: "Suspensão"
  },
  {
    id: "cly-harpia",
    name: "Garfo Suspensão Cly Harpia 29",
    description: "Suspensão com ajuste de retorno e curso de 100mm.",
    imageUrl: "/images/blog/1/Garfo Suspensão Cly Harpia 29 Com Trava e Ajuste Freio a Disco.webp",
    affiliateUrl: "https://meli.la/1jQgrc3",
    category: "Suspensão"
  }
];

export const accessories = [
  {
    id: "capacete-absolute",
    name: "Capacete Absolute",
    description: "Capacete LED",
    imageUrl: "/images/blog/1/Capacete Absolute.webp",
    affiliateUrl: "https://meli.la/2T3tvyp",
    category: "Acessórios",
  },
  {
    id: "cadeado-ulock",
    name: "Cadeado U-Lock Onguard",
    description: "U-Lock",
    imageUrl: "/images/blog/1/Cadeado U-Lock Onguard.webp",
    affiliateUrl: "https://meli.la/2ztn8YJ",
    category: "Acessórios",
  },
  {
    id: "bomba-ar-portatil",
    name: "Bomba de Ar Portátil",
    description: "Bomba de Ar",
    imageUrl: "/images/blog/1/Bomba de ar portátil.webp",
    affiliateUrl: "https://meli.la/2txj466",
    category: "Acessórios",
  },
  {
    id: "camara-ar-pirelli",
    name: "Par Câmara Ar Pirelli Bike Mtb Aro 29",
    description: "Câmara de ar Pirelli para MTB",
    imageUrl: "/images/blog/1/Par Câmara Ar Pirelli Bike Mtb Aro 29.webp",
    affiliateUrl: "https://meli.la/1nWk9Q4",
    category: "Acessórios",
  },
  {
    id: "fita-antifuro-safetire",
    name: "Fita Antifuro Safetire 40mm Branca Aro 29 Pneu 2.0 A 2.4 Mtb",
    description: "Fita antifuro Safetire",
    imageUrl: "/images/blog/1/Fita Antifuro Safetire 40mm Branca Aro 29 Pneu 2.0 A 2.4 Mtb.webp",
    affiliateUrl: "https://meli.la/2zHa4vf",
    category: "Acessórios",
  },
  {
    id: "selante-liquido-tubeless",
    name: "Selante Líquido Pneu Bike Tubeless",
    description: "Selante para pneus tubeless",
    imageUrl: "/images/blog/1/Selante Líquido Pneu Bike Tubeless.webp",
    affiliateUrl: "https://meli.la/1JUyboz",
    category: "Acessórios",
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
    category: "Manutenção",
  },
  {
    id: "chave-dinamometrica",
    name: "Chave Dinamométrica para Bicicleta",
    description: "Chave dinamométrica",
    imageUrl: "/images/blog/1/Chave Dinamométrica para Bicicleta.webp",
    affiliateUrl: "https://meli.la/2tb5bDt",
    category: "Ferramentas",
  },
  {
    id: "kit-limpeza-desengraxante",
    name: "Kit de Limpeza (Desengraxante + Escovas)",
    description: "Kit de limpeza",
    imageUrl: "/images/blog/1/Kit de Limpeza (Desengraxante + Escovas).webp",
    affiliateUrl: "https://meli.la/1FyHmya",
    category: "Manutenção",
  },
  {
    id: "bomba-suspensao-absolute",
    name: "Bomba de Ar para Suspensão Absolute",
    description: "Shock pump obrigatória para calibrar garfos a ar.",
    imageUrl: "/images/blog/1/Bomba De Ar P Suspensão Absolute Wild Alumínio Até 300 Psi.webp",
    affiliateUrl: "https://meli.la/2tRmADK",
    category: "Ferramentas"
  },
  {
    id: "adaptador-suspensao-tapered",
    name: "Adaptador Suspensão Tapered",
    description: "Adapta garfo espiga reta em quadro cônico.",
    imageUrl: "/images/blog/1/Adaptador Para Suspensão Normal Em Quadros Tapered.webp",
    affiliateUrl: "https://meli.la/1wPEPN8",
    category: "Peças"
  }
];
