import React from 'react';

export const AuthorLucasAlmeida: React.FC = () => {
  return (
    <div className="bg-cyan-950/20 p-8 rounded-2xl border border-cyan-900/50 shadow-sm mt-8 mb-16 flex flex-col md:flex-row items-center md:items-start gap-6">
      <div className="shrink-0 mx-auto md:mx-0">
        <a href="/author/lucas-almeida" className="block cursor-pointer">
          <img 
            loading="lazy" 
            width="160" 
            height="160" 
            src="/images/autores/Lucas Almeida.webp" 
            alt="Lucas Almeida" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-cyan-900/50 hover:border-cyan-500 transition-colors shadow-xl" 
          />
        </a>
      </div>
      <div>
        <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">Sobre o Autor</h2>
        <h3 className="text-2xl font-bold text-white mb-4">
          <a href="/author/lucas-almeida" className="hover:text-cyan-400 transition-colors">
            Lucas Almeida
          </a>
        </h3>
        <p className="text-zinc-300 leading-relaxed text-lg mb-4">
          Lucas é um ciclista de longa data e a maior autoridade do portal quando o assunto é o universo das bicicletas aro 29. Seja engolindo poeira nas trilhas ou destrinchando as últimas novidades do mercado, sua missão é transformar as especificações chatas de catálogo em conselhos práticos para o seu dia a dia.
        </p>
        <p className="text-zinc-300 leading-relaxed text-lg mb-6">
          Suas recomendações não vêm de achismos virtuais, mas da curiosidade obsessiva e da vivência real de quem testa diferentes terrenos, suspensões e componentes na prática. O objetivo do Lucas é descomplicar a manutenção e o funcionamento da bike para garantir que você não invista na peça errada — seja você um novato comprando a primeira aro 29 ou um veterano buscando o upgrade perfeito.
        </p>
        <p className="text-zinc-400 italic text-base border-l-2 border-cyan-700 pl-4">
          Como ele mesmo costuma dizer: “Conhecer a própria bicicleta muda completamente o jogo. Meu papel é traduzir o mundo das peças de forma simples, para que você perca menos tempo quebrando a cabeça e passe mais tempo girando o pedivela.”
        </p>
      </div>
    </div>
  );
};
