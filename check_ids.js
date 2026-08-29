const { products, accessories } = require('./src/data/products.ts'); // wait, can't require TS easily.
const fs = require('fs');

const content = fs.readFileSync('./src/data/products.ts', 'utf8');

const requiredProducts = [
  'absolute-prime-sl', 'rockshox-judy-silver', 'gta-aluminio', 'absolute-330-hlo',
  'absolute-nero-suspensao', 'absolute-mxfk-19', 'bikemaxx-trava-ombro', 'cly-harpia'
];

const requiredAccessories = [
  'bomba-suspensao-absolute', 'chave-dinamometrica', 'adaptador-suspensao-tapered'
];

console.log("Missing Products:");
requiredProducts.forEach(p => {
  if (!content.includes(`id: "${p}"`) && !content.includes(`id: '${p}'`)) {
    console.log(p);
  }
});

console.log("Missing Accessories:");
requiredAccessories.forEach(p => {
  if (!content.includes(`id: "${p}"`) && !content.includes(`id: '${p}'`)) {
    console.log(p);
  }
});
