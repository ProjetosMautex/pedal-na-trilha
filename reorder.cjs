const fs = require('fs');
let content = fs.readFileSync('src/components/ArtigoComoMontarBicicletaAro29.tsx', 'utf8');

let forquetasStart = content.indexOf('<h3>Remoção das forquetas');
let selimStart = content.indexOf('<h2>Instalação do selim');
let forquetasBlock = content.substring(forquetasStart, selimStart);

let cuidadosStart = content.indexOf('<h3>Cuidados iniciais');
let divEnd = content.indexOf('</div>', cuidadosStart);

content = content.replace(forquetasBlock, '');
content = content.slice(0, divEnd) + forquetasBlock + content.slice(divEnd);

selimStart = content.indexOf('<h2>Instalação do selim');
let guidaoStart = content.indexOf('<h2>Instalação do Guidão');
let selimBlock = content.substring(selimStart, guidaoStart);

guidaoStart = content.indexOf('<h2>Instalação do Guidão');
let rodasStart = content.indexOf('<h2>Montagem das Rodas');
let guidaoBlock = content.substring(guidaoStart, rodasStart);

content = content.replace(selimBlock, '');
content = content.replace(guidaoBlock, '');

let montagemStart = content.indexOf('<h2>Montagem do Quadro');
content = content.slice(0, montagemStart) + guidaoBlock + selimBlock + content.slice(montagemStart);

content = content.replace(
  '<p>Abaixo, detalhamos exatamente como preparar essa base estrutural e livrá-la das amarras de transporte sem causar nenhum acidente.</p>',
  '<p>Com o guidão e o selim instalados, você já tem os dois pontos de apoio perfeitos para inverter a bicicleta com segurança.</p>'
);

content = content.replace('<h3>3. Ajuste do freio hidráulico</h3>', '<h3>1. Ajuste do freio hidráulico</h3>');
content = content.replace('<h3>4. Regulagem do câmbio traseiro', '<h3>3. Regulagem do câmbio traseiro');

fs.writeFileSync('src/components/ArtigoComoMontarBicicletaAro29.tsx', content);
console.log('Done.');
