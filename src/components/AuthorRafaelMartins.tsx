import React from 'react';

export const AuthorRafaelMartins: React.FC = () => {
  return (
    <div className="bg-cyan-950/20 p-8 rounded-2xl border border-cyan-900/50 shadow-sm mt-8 mb-16 flex flex-col md:flex-row items-center md:items-start gap-6">
      <div className="shrink-0 mx-auto md:mx-0">
        <a href="/author/rafael-martins" className="block cursor-pointer">
          <img 
            loading="lazy" 
            width="160" 
            height="160" 
            src="/images/autores/Rafael Martins.webp" 
            alt="Rafael Martins" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-cyan-900/50 hover:border-cyan-500 transition-colors shadow-xl" 
          />
        </a>
      </div>
      <div>
        <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">Sobre o Autor</h2>
        <h3 className="text-2xl font-bold text-white mb-4">
          <a href="/author/rafael-martins" className="hover:text-cyan-400 transition-colors">
            Rafael Martins
          </a>
        </h3>
        <p className="text-zinc-300 leading-relaxed text-lg">
          Rafael é um apaixonado por mecânica de bicicletas e ciclista inveterado. No balcão da oficina ou nas trilhas de final de semana, seu objetivo é traduzir o "mecaniquês" técnico e chato para ajudar as pessoas a não rasgarem dinheiro, escolhendo exatamente as peças que precisam. As recomendações aqui são fruto de mãos sujas de graxa, análise minuciosa de fichas oficiais e da vivência real de quem gasta o pneu no asfalto e na terra, defendendo sempre uma mobilidade mais inteligente e saudável.
        </p>
      </div>
    </div>
  );
};
