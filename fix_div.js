import fs from 'fs';
let c = fs.readFileSync('src/components/MelhorGuidao.tsx', 'utf8');
c = c.replace('</div>\n        \n        <div className="my-12 p-6', '<div className="my-12 p-6');
fs.writeFileSync('src/components/MelhorGuidao.tsx', c);
