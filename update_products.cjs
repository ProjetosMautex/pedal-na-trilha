const fs = require('fs');
let content = fs.readFileSync('src/data/products.ts', 'utf8');

const newProducts = `    },
    {
      id: "absolute-prime-sl",
      name: "Suspensão Bike Absolute Prime Sl Aro 29",
      description: "Garfo a ar com excelente custo-benefício e trava no guidão.",
      imageUrl: "/images/blog/1/Suspensão Bike Absolute Prime Sl Aro 29.webp",
      affiliateUrl: "https://meli.la/1uJ2Cc4",
      category: "Suspensão A Ar",
      features: ["Ajuste a Ar", "Trava Guidão", "Leveza"]
    },
    {
      id: "rockshox-judy-silver",
      name: "Garfo Suspensão Aro 29 Rockshox Judy Silver Tk",
      description: "Robustez e precisão para trilhas técnicas com eixo Boost.",
      imageUrl: "/images/blog/1/Garfo Suspensão Aro 29 Rockshox Judy Silver Tk.webp",
      affiliateUrl: "https://meli.la/2F8fKsu",
      category: "Alta Performance",
      features: ["Eixo Boost", "Sistema TurnKey", "Extrema Rigidez"]
    },
    {
      id: "gta-aluminio",
      name: "Garfo Suspensão Aro 29 Gta Alumínio",
      description: "Custo-benefício imbatível com estrutura híbrida de aço e alumínio.",
      imageUrl: "/images/blog/1/Garfo Suspensão Aro 29 Gta Alumínio.webp",
      affiliateUrl: "https://meli.la/1TzaeQi",
      category: "Mola e Elastômero",
      features: ["Trava Remota", "Ajuste Pré-Carga", "Uso Misto"]
    },
    {
      id: "absolute-330-hlo",
      name: "Garfo Suspensão Absolute 330-HLO Aro 29 com Trava no Guidão",
      description: "Hastes mais grossas e ombro em alumínio para mais estabilidade.",
      imageUrl: "/images/blog/1/Garfo Suspensão Absolute 330-HLO Aro 29 com Trava no Guidão.webp",
      affiliateUrl: "https://meli.la/1nZy3mk",
      category: "Mola e Elastômero",
      features: ["Hastes 30mm", "Ombro em Alumínio", "Trava Guidão"]
    },
    {
      id: "absolute-nero-suspensao",
      name: "Garfo Suspensão Absolute Nero Aro 29 com Trava no Guidão",
      description: "Resistência para o dia a dia e trilhas de fim de semana.",
      imageUrl: "/images/blog/1/Garfo Suspensão Absolute Nero Aro 29 com Trava no Guidão.webp",
      affiliateUrl: "https://meli.la/1u9NkrX",
      category: "Mola e Elastômero",
      features: ["Hastes 32mm", "Fácil Manutenção", "Trava Guidão"]
    },
    {
      id: "absolute-mxfk-19",
      name: "Garfo Suspensão Absolute MXFK-19 Aro 29 Aheadset Aço",
      description: "Suspensão mecânica brutal em aço, feita para resistir.",
      imageUrl: "/images/blog/1/Garfo Suspensão Absolute MXFK-19 Aro 29 Aheadset Aço.webp",
      affiliateUrl: "https://meli.la/22fbvuT",
      category: "Mola e Elastômero",
      features: ["Trava Hidráulica", "Estrutura em Aço", "Ajuste de Mola"]
    },
    {
      id: "bikemaxx-trava-ombro",
      name: "Garfo Suspensão Aro 29 Bikemaxx Trava Ombro",
      description: "Acesso fácil com espiga reta para transformar bikes urbanas.",
      imageUrl: "/images/blog/1/Garfo Suspensão Aro 29 Bikemaxx Trava Ombro.webp",
      affiliateUrl: "https://meli.la/1UYcu66",
      category: "Mola e Elastômero",
      features: ["Espiga Reta", "Trava no Ombro", "Muito Resistente"]
    },
    {
      id: "cly-harpia",
      name: "Garfo Suspensão Cly Harpia 29 Com Trava e Ajuste Freio a Disco",
      description: "Ajuste de retorno que garante suavidade sob medida.",
      imageUrl: "/images/blog/1/Garfo Suspensão Cly Harpia 29 Com Trava e Ajuste Freio a Disco.webp",
      affiliateUrl: "https://meli.la/1jQgrc3",
      category: "Mola e Elastômero",
      features: ["Ajuste de Retorno", "Ombro em Alumínio", "Curso de 100mm"]`;

const newAccessories = `    },
    {
      id: "bomba-suspensao-absolute",
      name: "Bomba De Ar P Suspensão Absolute Wild Alumínio Até 300 Psi",
      description: "Shock pump indispensável para calibrar o sag em garfos a ar.",
      imageUrl: "/images/blog/1/Bomba De Ar P Suspensão Absolute Wild Alumínio Até 300 Psi.webp",
      affiliateUrl: "https://meli.la/2tRmADK",
      category: "Ferramentas"
    },
    {
      id: "adaptador-suspensao-tapered",
      name: "Adaptador Para Suspensão Normal Em Quadros Tapered",
      description: "Salvação para instalar suspensões de espiga reta em quadros modernos cômicos.",
      imageUrl: "/images/blog/1/Adaptador Para Suspensão Normal Em Quadros Tapered.webp",
      affiliateUrl: "https://meli.la/1wPEPN8",
      category: "Acessórios"`;

content = content.replace(/    \}(\s*\];\s*export const accessories =)/g, newProducts + '\n$1');
content = content.replace(/    \}(\s*\];\s*$)/g, newAccessories + '\n$1');

fs.writeFileSync('src/data/products.ts', content, 'utf8');
console.log('products.ts updated');
