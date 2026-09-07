import sharp from 'sharp';

const bgSrc = 'C:\\Users\\Murilo vieira\\.gemini\\antigravity\\brain\\990eb553-7453-4342-8caf-0c0e8e0ef7f9\\bike_infographic_bg_1788646594385.jpg';
const dest = 'C:\\Users\\Murilo vieira\\Documents\\projetos\\pedal na trilha\\public\\images\\blog\\1\\tabela-tamanho-quadro-bike-aro-29.jpg';

const svgOverlay = `
<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
    </linearGradient>
    <filter id="drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.8"/>
    </filter>
  </defs>

  <!-- Dark translucent overlay for readability -->
  <rect x="0" y="0" width="800" height="800" fill="#000000" opacity="0.4" />

  <!-- Main Card -->
  <rect x="50" y="80" width="700" height="640" fill="#0f172a" opacity="0.9" rx="20" ry="20" stroke="#06b6d4" stroke-width="3" filter="url(#drop-shadow)" />

  <!-- Header -->
  <rect x="50" y="80" width="700" height="120" fill="url(#grad1)" rx="20" ry="20" />
  <rect x="50" y="150" width="700" height="50" fill="url(#grad1)" /> <!-- Square bottom of header -->
  
  <text x="400" y="130" fill="#ffffff" font-size="34" font-family="sans-serif" font-weight="900" text-anchor="middle" letter-spacing="1">TAMANHO DO QUADRO ARO 29</text>
  <text x="400" y="170" fill="#e0f2fe" font-size="20" font-family="sans-serif" font-weight="bold" text-anchor="middle" letter-spacing="2">ENCONTRE O AJUSTE PERFEITO PARA SUA ALTURA</text>

  <!-- Table Headers -->
  <rect x="80" y="230" width="640" height="60" fill="#1e293b" rx="10" ry="10" stroke="#334155" stroke-width="2" />
  <text x="240" y="268" fill="#38bdf8" font-size="22" font-family="sans-serif" font-weight="bold" text-anchor="middle">ALTURA DO CICLISTA</text>
  <text x="560" y="268" fill="#38bdf8" font-size="22" font-family="sans-serif" font-weight="bold" text-anchor="middle">TAMANHO (QUADRO)</text>
  
  <line x1="400" y1="230" x2="400" y2="600" stroke="#334155" stroke-width="2" stroke-dasharray="6,6" />

  <!-- Row 1 -->
  <text x="240" y="340" fill="#ffffff" font-size="26" font-family="sans-serif" font-weight="bold" text-anchor="middle">1,55m a 1,65m</text>
  <text x="560" y="340" fill="#a5f3fc" font-size="32" font-family="sans-serif" font-weight="900" text-anchor="middle">15" (S)</text>
  <line x1="80" y1="370" x2="720" y2="370" stroke="#1e293b" stroke-width="2" />

  <!-- Row 2 -->
  <text x="240" y="420" fill="#ffffff" font-size="26" font-family="sans-serif" font-weight="bold" text-anchor="middle">1,66m a 1,76m</text>
  <text x="560" y="420" fill="#a5f3fc" font-size="32" font-family="sans-serif" font-weight="900" text-anchor="middle">17" (M)</text>
  <line x1="80" y1="450" x2="720" y2="450" stroke="#1e293b" stroke-width="2" />

  <!-- Row 3 -->
  <text x="240" y="500" fill="#ffffff" font-size="26" font-family="sans-serif" font-weight="bold" text-anchor="middle">1,77m a 1,86m</text>
  <text x="560" y="500" fill="#a5f3fc" font-size="32" font-family="sans-serif" font-weight="900" text-anchor="middle">19" (L)</text>
  <line x1="80" y1="530" x2="720" y2="530" stroke="#1e293b" stroke-width="2" />

  <!-- Row 4 -->
  <text x="240" y="580" fill="#ffffff" font-size="26" font-family="sans-serif" font-weight="bold" text-anchor="middle">1,87m a 1,98m</text>
  <text x="560" y="580" fill="#a5f3fc" font-size="32" font-family="sans-serif" font-weight="900" text-anchor="middle">21" (XL)</text>

  <!-- Footer CTA -->
  <rect x="80" y="630" width="640" height="70" fill="#0ea5e9" rx="35" ry="35" opacity="0.2" />
  <rect x="80" y="630" width="640" height="70" fill="none" stroke="#0ea5e9" stroke-width="2" rx="35" ry="35" />
  <text x="400" y="673" fill="#ffffff" font-size="20" font-family="sans-serif" font-weight="bold" text-anchor="middle">SIMULE SEU BIKE FIT LOGO ABAIXO! ⬇️</text>
</svg>
`;

async function buildImage() {
  try {
    const resizedBg = await sharp(bgSrc)
      .resize(800, 800, { fit: 'cover' })
      .toBuffer();

    await sharp(resizedBg)
      .composite([{ input: Buffer.from(svgOverlay), blend: 'over' }])
      .jpeg({ quality: 90 })
      .toFile(dest);
      
    console.log('Composite image generated successfully');
  } catch (error) {
    console.error('Error generating image:', error);
  }
}

buildImage();
