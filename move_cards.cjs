const fs = require('fs');
const path = 'src/components/ArtigoMelhorPneuBikeAro29.tsx';
let content = fs.readFileSync(path, 'utf8');

// Match <AffiliateCard /> followed by <div className="prose ...">...</div>
const regex = /(\s*<AffiliateCard product=\{products\.find\(p => p\.id === '.*?'\)!\} \/>)\s*(<div className="prose prose-invert prose-lg max-w-none prose-cyan mb-12">[\s\S]*?<\/div>)/g;

let matches = content.match(regex);
if (matches) {
    console.log('Found ' + matches.length + ' matches.');
    content = content.replace(regex, (match, card, text) => {
        return '\n        ' + text.trim() + '\n        ' + card.trim();
    });
    fs.writeFileSync(path, content);
    console.log('Done replacing.');
} else {
    console.log('No matches found.');
}
