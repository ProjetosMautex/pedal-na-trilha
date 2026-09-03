import fs from 'fs';
let text = fs.readFileSync('src/components/MelhorGuidao.tsx', 'utf8');

text = text.replace(/<img loading="lazy" width="800" height="600" src=/g, '<img src=');
text = text.replace(/<img fetchpriority="high" width="1200" height="800"\s*src=/g, '<img src=');
text = text.replace(/<img fetchpriority="high" width="1200" height="800"\s*\r?\nsrc=/g, '<img\nsrc=');

fs.writeFileSync('src/components/MelhorGuidao.tsx', text);
console.log('cleaned up duplicate attributes');
