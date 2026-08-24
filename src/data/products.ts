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
    affiliateUrl: "https://meli.la/2fMfHbA",
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
    id: "pneu-levorin-eruption",
    name: "Pneu Levorin Eruption 29x2 Banda Leve MTB",
    description: "Custo-benefício incrível com tração bruta.",
    imageUrl: "/images/blog/1/Pneu Levorin Eruption 29x2 Banda Leve MTB.webp",
    affiliateUrl: "https://meli.la/1C8m4Rf",
    category: "Pneu Aro 29",
    features: ["Arame de aço", "Cravos profundos", "Para asfalto e terra"]
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
  }
];

