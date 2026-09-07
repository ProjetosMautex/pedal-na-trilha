import React, { useState } from 'react';

export const BikeFitSimulator: React.FC = () => {
  const [altura, setAltura] = useState<string>('');
  const [resultado, setResultado] = useState<{ quadro: string, descricao: string } | null>(null);

  const calcularQuadro = (e: React.FormEvent) => {
    e.preventDefault();
    const altRaw = parseFloat(altura.replace(',', '.'));
    let alt = altRaw;
    
    // Se a altura for maior que 3, assumimos que foi digitada em centímetros (ex: 175)
    if (alt > 3.0) {
      alt = alt / 100;
    }
    
    if (isNaN(alt) || alt < 1.0 || alt > 2.2) {
      setResultado({ quadro: 'Altura Inválida', descricao: 'Por favor, insira uma altura válida (ex: 1.75 ou 175)' });
      return;
    }

    if (alt >= 1.55 && alt <= 1.65) {
      setResultado({ quadro: '15" (S)', descricao: 'Ideal para sua altura. Quadros menores (Tamanho S) oferecem mais agilidade.' });
    } else if (alt > 1.65 && alt <= 1.76) {
      setResultado({ quadro: '17" (M)', descricao: 'Ideal para sua altura. Quadros médios (Tamanho M) equilibram conforto e controle.' });
    } else if (alt > 1.76 && alt <= 1.86) {
      setResultado({ quadro: '19" (L)', descricao: 'Ideal para sua altura. Quadros grandes (Tamanho L) garantem estabilidade para pernas compridas.' });
    } else if (alt > 1.86 && alt <= 1.98) {
      setResultado({ quadro: '21" (XL)', descricao: 'Ideal para sua altura. Quadros extra grandes (Tamanho XL) oferecem a ergonomia necessária para pessoas mais altas.' });
    } else if (alt < 1.55) {
      setResultado({ quadro: '13" ou 14" (XS)', descricao: 'Para sua altura, quadros menores que 15" ou aros menores (como 27.5" ou 26") podem ser mais adequados.' });
    } else {
      setResultado({ quadro: '23" (XXL) ou Sob Medida', descricao: 'Sua altura exige quadros muito grandes, geralmente difíceis de encontrar em modelos de entrada. Recomendamos um Bike Fit profissional presencial.' });
    }
  };

  return (
    <div className="bg-zinc-800/50 p-6 md:p-8 rounded-2xl border border-cyan-900/50 shadow-lg my-8">
      <h3 className="text-2xl font-bold text-white mb-4 text-center">Simulador de Bike Fit Rápido</h3>
      <p className="text-zinc-300 text-center mb-6">Descubra o tamanho exato do quadro da sua bicicleta aro 29 baseado na sua altura.</p>
      
      <form onSubmit={calcularQuadro} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <div className="relative w-full max-w-xs">
          <input 
            type="text" 
            inputMode="decimal"
            placeholder="Sua altura (ex: 1.75)" 
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
            required
          />
          <span className="absolute right-4 top-3 text-zinc-500 font-bold">m</span>
        </div>
        <button 
          type="submit" 
          className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Calcular Quadro
        </button>
      </form>

      {resultado && (
        <div className="mt-8 p-6 bg-zinc-900 border-l-4 border-cyan-500 rounded-r-xl">
          <h4 className="text-zinc-400 text-sm uppercase font-bold tracking-wider mb-1">Tamanho Recomendado</h4>
          <div className="text-4xl font-extrabold text-cyan-400 mb-2">{resultado.quadro}</div>
          <p className="text-zinc-300">{resultado.descricao}</p>
        </div>
      )}
    </div>
  );
};
