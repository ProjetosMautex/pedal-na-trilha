const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Murilo vieira\\.gemini\\antigravity\\brain\\77410a92-e719-4003-b918-a37dbce3956e';
const destDir = 'public/images/blog/1';

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

files.forEach(f => {
  if (f.startsWith('melhor_suspensao_bike_aro_29_') ||
      f.startsWith('respiro_1_suspensao_') ||
      f.startsWith('respiro_2_eixo_suspensao_') ||
      f.startsWith('suspensao_absolute_prime_sl_aro_29_') ||
      f.startsWith('garfo_suspensao_aro_29_rockshox_judy_silver_tk_') ||
      f.startsWith('garfo_suspensao_aro_29_gta_aluminio_') ||
      f.startsWith('garfo_suspensao_absolute_330_hlo_aro_29_') ||
      f.startsWith('garfo_suspensao_absolute_nero_aro_29_') ||
      f.startsWith('garfo_suspensao_absolute_mxfk_19_aro_29_') ||
      f.startsWith('garfo_suspensao_aro_29_bikemaxx_trava_ombro_') ||
      f.startsWith('garfo_suspensao_cly_harpia_29_') ||
      f.startsWith('bomba_ar_suspensao_absolute_wild_') ||
      f.startsWith('adaptador_suspensao_tapered_')) {
        
    // Extract base name without timestamp
    const baseNameMatch = f.match(/^(.*?)_\d+\.(jpg|png)$/);
    if (baseNameMatch) {
      let finalName = baseNameMatch[1];
      // Rename files to match exactly what is expected in products.ts (or very close)
      if (finalName === 'melhor_suspensao_bike_aro_29') finalName = 'melhor-suspensao-para-bike-aro-29';
      if (finalName === 'suspensao_absolute_prime_sl_aro_29') finalName = 'Suspensão Bike Absolute Prime Sl Aro 29';
      if (finalName === 'garfo_suspensao_aro_29_rockshox_judy_silver_tk') finalName = 'Garfo Suspensão Aro 29 Rockshox Judy Silver Tk';
      if (finalName === 'garfo_suspensao_aro_29_gta_aluminio') finalName = 'Garfo Suspensão Aro 29 Gta Alumínio';
      if (finalName === 'garfo_suspensao_absolute_330_hlo_aro_29') finalName = 'Garfo Suspensão Absolute 330-HLO Aro 29 com Trava no Guidão';
      if (finalName === 'garfo_suspensao_absolute_nero_aro_29') finalName = 'Garfo Suspensão Absolute Nero Aro 29 com Trava no Guidão';
      if (finalName === 'garfo_suspensao_absolute_mxfk_19_aro_29') finalName = 'Garfo Suspensão Absolute MXFK-19 Aro 29 Aheadset Aço';
      if (finalName === 'garfo_suspensao_aro_29_bikemaxx_trava_ombro') finalName = 'Garfo Suspensão Aro 29 Bikemaxx Trava Ombro';
      if (finalName === 'garfo_suspensao_cly_harpia_29') finalName = 'Garfo Suspensão Cly Harpia 29 Com Trava e Ajuste Freio a Disco';
      if (finalName === 'bomba_ar_suspensao_absolute_wild') finalName = 'Bomba De Ar P Suspensão Absolute Wild Alumínio Até 300 Psi';
      if (finalName === 'adaptador_suspensao_tapered') finalName = 'Adaptador Para Suspensão Normal Em Quadros Tapered';
      if (finalName === 'respiro_1_suspensao') finalName = 'respiro-suspensao-mtb-1';
      if (finalName === 'respiro_2_eixo_suspensao') finalName = 'respiro-suspensao-mtb-2';
      
      const destPath = path.join(destDir, finalName + '.jpg'); // keeping extension same as original but renamed
      console.log(`Copying ${f} to ${destPath}`);
      fs.copyFileSync(path.join(srcDir, f), destPath);
    }
  }
});
