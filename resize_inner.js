import sharp from 'sharp';
import path from 'path';

const files = [
  {
    src: 'C:\\Users\\Murilo vieira\\.gemini\\antigravity\\brain\\990eb553-7453-4342-8caf-0c0e8e0ef7f9\\gt_sprint_freio_disco_1788638405477.jpg',
    dest: 'C:\\Users\\Murilo vieira\\Documents\\projetos\\pedal na trilha\\public\\images\\blog\\1\\gt_sprint_freio_disco.jpg'
  },
  {
    src: 'C:\\Users\\Murilo vieira\\.gemini\\antigravity\\brain\\990eb553-7453-4342-8caf-0c0e8e0ef7f9\\gt_sprint_conforto_1788638419630.jpg',
    dest: 'C:\\Users\\Murilo vieira\\Documents\\projetos\\pedal na trilha\\public\\images\\blog\\1\\gt_sprint_conforto.jpg'
  },
  {
    src: 'C:\\Users\\Murilo vieira\\.gemini\\antigravity\\brain\\990eb553-7453-4342-8caf-0c0e8e0ef7f9\\gt_sprint_montagem_1788638433081.jpg',
    dest: 'C:\\Users\\Murilo vieira\\Documents\\projetos\\pedal na trilha\\public\\images\\blog\\1\\gt_sprint_montagem.jpg'
  }
];

Promise.all(files.map(f => 
  sharp(f.src)
    .resize(800, 533)
    .toFile(f.dest)
))
.then(() => console.log('Images resized successfully'))
.catch(err => console.error('Error resizing images:', err));
