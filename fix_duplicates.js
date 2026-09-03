import fs from 'fs';
let text = fs.readFileSync('src/components/MelhorGuidao.tsx', 'utf8');

// Clean up duplicate attributes safely
text = text.replace(/<img loading="lazy" width="800" height="600" src=/g, '<img src=');
text = text.replace(/<img fetchpriority="high" width="1200" height="800"(\s*)src=/g, '<img$1src=');
text = text.replace(/<img fetchpriority="high" width="1200" height="800"(\s*\r?\n\s*)src=/g, '<img$1src=');

fs.writeFileSync('src/components/MelhorGuidao.tsx', text, 'utf8');
console.log('Fixed MelhorGuidao.tsx duplicates');
