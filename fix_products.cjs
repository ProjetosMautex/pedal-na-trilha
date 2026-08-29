const fs = require('fs');
const path = require('path');

const productsTsPath = path.join(__dirname, 'src', 'data', 'products.ts');
let content = fs.readFileSync(productsTsPath, 'utf8');

const newProducts = `
  {
    id: "absolute-prime-sl",
    name: "Suspensão Bike Absolute Prime Sl Aro 29",
    description: "Suspensão a ar de entrada com excelente custo-benefício.",
    imageUrl: "/images/blog/1/suspensao-absolute-prime-sl-aro-29.webp",
    affiliateUrl: "https://meli.la/2zX7L6q",
    category: "Suspensão"
  },
  {
    id: "rockshox-judy-silver",
    name: "Garfo Suspensão Aro 29 Rockshox Judy Silver Tk",
    description: "Garfo premium de alta durabilidade e leitura de terreno.",
    imageUrl: "/images/blog/1/garfo-suspensao-aro-29-rockshox-judy-silver-tk.webp",
    affiliateUrl: "https://meli.la/2S5kX8Z",
    category: "Suspensão"
  },
  {
    id: "gta-aluminio",
    name: "Garfo Suspensão Aro 29 Gta Alumínio",
    description: "Excelente para uso urbano com ombro em alumínio.",
    imageUrl: "/images/blog/1/garfo-suspensao-aro-29-gta-aluminio.webp",
    affiliateUrl: "https://meli.la/2yT3L7F",
    category: "Suspensão"
  },
  {
    id: "absolute-330-hlo",
    name: "Garfo Suspensão Absolute 330-HLO Aro 29",
    description: "Suspensão a mola confiável com trava no guidão.",
    imageUrl: "/images/blog/1/garfo-suspensao-absolute-330-hlo-aro-29.webp",
    affiliateUrl: "https://meli.la/2R4jY9W",
    category: "Suspensão"
  },
  {
    id: "absolute-nero-suspensao",
    name: "Garfo Suspensão Absolute Nero Aro 29",
    description: "Garfo parrudo de 32mm para ciclovia e trilha.",
    imageUrl: "/images/blog/1/garfo-suspensao-absolute-nero-aro-29.webp",
    affiliateUrl: "https://meli.la/3B6N1oW",
    category: "Suspensão"
  },
  {
    id: "absolute-mxfk-19",
    name: "Garfo Suspensão Absolute MXFK-19 Aro 29",
    description: "Feita em aço para durabilidade extrema na cidade.",
    imageUrl: "/images/blog/1/garfo-suspensao-absolute-mxfk-19-aro-29.webp",
    affiliateUrl: "https://meli.la/2pZ9M4E",
    category: "Suspensão"
  },
  {
    id: "bikemaxx-trava-ombro",
    name: "Garfo Suspensão Aro 29 Bikemaxx",
    description: "Modelo simples com trava no ombro para uso leve.",
    imageUrl: "/images/blog/1/garfo-suspensao-aro-29-bikemaxx-trava-ombro.webp",
    affiliateUrl: "https://meli.la/2qW8N5D",
    category: "Suspensão"
  },
  {
    id: "cly-harpia",
    name: "Garfo Suspensão Cly Harpia 29",
    description: "Suspensão com ajuste de retorno e curso de 100mm.",
    imageUrl: "/images/blog/1/garfo-suspensao-cly-harpia-29.webp",
    affiliateUrl: "https://meli.la/2rV7P6C",
    category: "Suspensão"
  }
`;

const newAccessories = `
  {
    id: "bomba-suspensao-absolute",
    name: "Bomba de Ar para Suspensão Absolute",
    description: "Shock pump obrigatória para calibrar garfos a ar.",
    imageUrl: "/images/blog/1/bomba-ar-suspensao-absolute-wild.webp",
    affiliateUrl: "https://meli.la/3xU2K8V",
    category: "Ferramentas"
  },
  {
    id: "adaptador-suspensao-tapered",
    name: "Adaptador Suspensão Tapered",
    description: "Adapta garfo espiga reta em quadro cônico.",
    imageUrl: "/images/blog/1/adaptador-suspensao-tapered.webp",
    affiliateUrl: "https://meli.la/2vS5L9A",
    category: "Peças"
  }
`;

// Insert new products before the end of the products array
const productsMatch = content.match(/export const products: Product\[\] = \[([\s\S]*?)\];/);
if (productsMatch) {
  const currentProducts = productsMatch[1];
  const updatedProducts = currentProducts + ',' + newProducts;
  content = content.replace(productsMatch[1], updatedProducts);
}

// Insert new accessories before the end of the accessories array
const accessoriesMatch = content.match(/export const accessories: Product\[\] = \[([\s\S]*?)\];/);
if (accessoriesMatch) {
  const currentAccessories = accessoriesMatch[1];
  const updatedAccessories = currentAccessories + ',' + newAccessories;
  content = content.replace(accessoriesMatch[1], updatedAccessories);
}

fs.writeFileSync(productsTsPath, content);
console.log("Updated products.ts");
