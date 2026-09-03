import fs from 'fs';

let content = fs.readFileSync('src/data/products.ts', 'utf8');

const crossSells = `  },
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
`;

content = content.replace(/  \}\r?\n\];[\s\S]*$/, crossSells);

fs.writeFileSync('src/data/products.ts', content, 'utf8');
console.log('Cross-sells appended to products.ts properly');
