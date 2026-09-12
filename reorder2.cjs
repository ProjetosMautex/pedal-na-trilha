const fs = require('fs');
let content = fs.readFileSync('temp.txt', 'utf8');

// The goal:
// Move 'Remoção das forquetas' (H3) into 'Organização Inicial' (H2), at the end.
// Move 'Instalação do Guidão' (H2) and 'Instalação do selim' (H2) BEFORE 'Montagem do Quadro' (H2)

// 1. Move 'Remoção das forquetas'
let forquetasIndex = content.indexOf('<h3>Remoção das forquetas');
let endOfForquetas = content.indexOf('<h2>Instalação do selim'); // Next H2
let forquetasBlock = content.substring(forquetasIndex, endOfForquetas);

// Remove it from its original place
content = content.replace(forquetasBlock, '');

// Place it before <BunnerDoMeio /> which ends the Organização Inicial section
let bunnerIndex = content.indexOf('<BunnerDoMeio />');
content = content.slice(0, bunnerIndex) + forquetasBlock + '\n' + content.slice(bunnerIndex);


// 2. Move Guidão and Selim BEFORE Montagem do Quadro
let selimIndex = content.indexOf('<h2>Instalação do selim');
let guidaoIndex = content.indexOf('<h2>Instalação do Guidão');
let rodasIndex = content.indexOf('<h2>Montagem das Rodas');

let selimBlock = content.substring(selimIndex, guidaoIndex);
let guidaoBlock = content.substring(guidaoIndex, rodasIndex);

// Remove them from their original place
content = content.replace(selimBlock, '');
content = content.replace(guidaoBlock, '');

// Place them before Montagem do Quadro
let montagemIndex = content.indexOf('<h2>Montagem do Quadro');
content = content.slice(0, montagemIndex) + guidaoBlock + selimBlock + content.slice(montagemIndex);

// 3. Fix the bridge text in Montagem do Quadro
content = content.replace(
  '<p>Abaixo, detalhamos exatamente como preparar essa base estrutural e livrá-la das amarras de transporte sem causar nenhum acidente.</p>',
  '<p>Com o guidão e o selim já instalados, você finalmente tem os dois pontos de apoio perfeitos para inverter a bicicleta com estabilidade total.</p>'
);

// 4. Fix numbers in Regulagem dos Componentes Principais
content = content.replace('<h3>3. Ajuste do freio hidráulico</h3>', '<h3>1. Ajuste do freio hidráulico</h3>');
content = content.replace('<h3>2. Regulagem das manetes', '<h3>2. Regulagem das manetes'); // no change
content = content.replace('<h3>4. Regulagem do câmbio traseiro', '<h3>3. Regulagem do câmbio traseiro');

fs.writeFileSync('src/components/ArtigoComoMontarBicicletaAro29.tsx', content);
console.log('Reorder 2 Done.');
