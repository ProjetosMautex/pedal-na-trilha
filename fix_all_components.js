import fs from 'fs';
import path from 'path';

const dir = 'src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let text = fs.readFileSync(filePath, 'utf8');
  
  // Only decode if it actually has the mojibake.
  // Ǹ (0x01F8) is often the result of double encoding 'é' (0xE9).
  // ǜ (0x01DC) is often 'ã' (0xE3).
  // We can just convert the string to a latin1 buffer and decode as utf8.
  if (text.includes('Ǹ') || text.includes('ǜ') || text.includes('') || text.includes('ǭ') || text.includes('Ǧ')) {
    const buffer = Buffer.from(text, 'latin1');
    const fixed = buffer.toString('utf8');
    fs.writeFileSync(filePath, fixed, 'utf8');
  }
}
console.log("Fixed all components!");
