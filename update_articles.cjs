const fs = require('fs');
let content = fs.readFileSync('src/data/articles.ts', 'utf8');

const newArticle = `  },
  {
    id: "melhor-suspensao-para-bike-aro-29",
    title: "Melhor suspensão para bike aro 29 (8 Modelos Recomendados)",
    excerpt: "Descubra qual a melhor suspensão para sua aro 29. Compare garfos a ar, mola, RockShox, Absolute e outras opções com excelente custo-benefício.",
    imageUrl: "/images/blog/1/melhor-suspensao-para-bike-aro-29.webp",
    authorId: "rafael-martins",
    date: "2024-06-15",
    readTime: "8 min de leitura",
    category: "Peças e Upgrades",
    slug: "melhor-suspensao-para-bike-aro-29",
    featured: false
  }`;

content = content.replace(/  \}(\s*\];\s*$)/g, newArticle + '\n$1');

fs.writeFileSync('src/data/articles.ts', content, 'utf8');
console.log('articles.ts updated');
