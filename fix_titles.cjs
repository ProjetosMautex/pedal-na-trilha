const fs = require('fs');
const path = require('path');

const replacements = [
  ['Bicicleta KSW Aro 29 é Boa Ou Alternativas Caloi e Absolute São Melhores?', 'Bicicleta KSW Aro 29 é Boa? Descubra o Segredo dos Mecânicos!'],
  ['Bicicleta First Aro 29 é Boa? Ou as Alternativas Caloi e Absolute São Melhores?', 'Bicicleta First Aro 29 é Boa? Vale a pena comprar?'],
  ['Bicicleta Rava aro 29 é boa? Ou Alternativas Caloi e Absolute são melhores?', 'Bicicleta Rava Aro 29 é Boa? Veja a Análise Completa!'],
  ['Bicicleta Dropp aro 29 é boa Ou Alternativa KSW é melhor?', 'Bicicleta Dropp Aro 29 é Boa? O Que Não Te Contam na Loja!'],
  ['Bicicleta Dropp aro 29 é boa Ou <br/>\n            <span className="text-cyan-400">Alternativa KSW é melhor?</span>', 'Bicicleta Dropp Aro 29 é Boa? <br/>\n            <span className="text-cyan-400">O Que Não Te Contam na Loja!</span>'],
  ['Bicicleta gts pro m5 aro 29 é boa Ou Alternativa KSW é melhor?', 'Bicicleta GTS Pro M5 Aro 29 é Boa? Vale o Seu Dinheiro?'],
  ['Bicicleta gts pro m5 aro 29 é boa Ou <br/>\n            <span className="text-cyan-400">Alternativa KSW é melhor?</span>', 'Bicicleta GTS Pro M5 Aro 29 é Boa? <br/>\n            <span className="text-cyan-400">Vale o Seu Dinheiro?</span>'],
  ['Bicicleta GTA aro 29 é boa Ou Alternativa KSW é melhor?', 'Bicicleta GTA Aro 29 é Boa? Veredicto Após Avaliação!'],
  ['Bicicleta GTA aro 29 é boa Ou <br/>\n            <span className="text-cyan-400">Alternativa KSW é melhor?</span>', 'Bicicleta GTA Aro 29 é Boa? <br/>\n            <span className="text-cyan-400">Veredicto Após Avaliação!</span>'],
  ['Bicicleta GTI ROMA Aro 29 é boa Ou Alternativa KSW é melhor?', 'Bicicleta GTI Roma Aro 29 é Boa? Cuidado Antes de Comprar!'],
  ['Bicicleta GTI ROMA Aro 29 é boa Ou <br/>\n            <span className="text-cyan-400">Alternativa KSW é melhor?</span>', 'Bicicleta GTI Roma Aro 29 é Boa? <br/>\n            <span className="text-cyan-400">Cuidado Antes de Comprar!</span>'],
  ['Bicicleta Colli Toronto Aro 29 é boa? Ou Alternativa KSW é melhor?', 'Bicicleta Colli Toronto Aro 29 é Boa? Avaliação Honesta!'],
  ['Bicicleta Colli Toronto Aro 29 é boa? Ou <br/>\n            <span className="text-cyan-400">Alternativa KSW é melhor?</span>', 'Bicicleta Colli Toronto Aro 29 é Boa? <br/>\n            <span className="text-cyan-400">Avaliação Honesta!</span>']
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.astro')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      // Normalize line endings to help match
      content = content.replace(/\r\n/g, '\n');
      
      let changed = false;
      for (const [oldStr, newStr] of replacements) {
        if (content.includes(oldStr)) {
          content = content.replace(oldStr, newStr);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

processDir('src/pages');
processDir('src/components');
