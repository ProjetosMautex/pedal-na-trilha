import React from 'react';
import { articles } from '../data/articles';
import { Zap, Shield, Battery, ArrowRight } from 'lucide-react';

export default function HomeContent() {
  return (
    <div className="bg-[#09090b]">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-zinc-900/50 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white">
            O Universo das <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Bicicletas Aro 29</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Descubra as melhores bicicletas aro 29 do mercado. Análises detalhadas, comparativos, avaliações de marcas e guias completos para ajudar você a fazer a melhor escolha.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/blog" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-cyan-600 hover:bg-cyan-500 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              Acessar o Blog
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#18181b] border-y border-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-100">Modelos Avaliados</h3>
              <p className="text-zinc-400 leading-relaxed">Analisamos as principais bicicletas aro 29 disponíveis no mercado, considerando componentes, quadro, suspensão, transmissão, custo-benefício e perfil de uso.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Battery className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-100">Comparativos Detalhados</h3>
              <p className="text-zinc-400 leading-relaxed">Comparamos bicicletas aro 29 de diferentes marcas para destacar suas diferenças em desempenho, equipamentos, durabilidade e faixa de preço.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-100">Informações Confiáveis</h3>
              <p className="text-zinc-400 leading-relaxed">Reunimos avaliações, especificações técnicas e análises aprofundadas para ajudar você a escolher a bicicleta aro 29 ideal para trilhas, passeios ou uso urbano.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-zinc-100">Últimos Artigos</h2>
            <p className="text-zinc-400 text-lg">Acompanhe nossas análises e guias mais recentes sobre bicicletas aro 29.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(0, 6).map((item, index) => (
              <article key={index} className="bg-[#18181b] rounded-2xl shadow-lg overflow-hidden hover:shadow-cyan-900/20 transition-all duration-300 border border-cyan-900/30 flex flex-col h-full group hover:border-cyan-500/50">
                <div className="relative h-56 overflow-hidden bg-zinc-800">
                  <img 
                    src={item.image || 'https://placehold.co/800x533/18181b/22d3ee?text=Bicicleta+Aro+29'} 
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placehold.co/800x533/18181b/22d3ee?text=Bicicleta+Aro+29';
                    }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-zinc-100 mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                    <a href={item.url}>
                      {item.title}
                    </a>
                  </h3>
                  <p className="text-zinc-400 text-sm mb-4 line-clamp-3 flex-grow">
                    {item.excerpt}
                  </p>
                  <a 
                    href={item.url} 
                    className="inline-flex items-center text-cyan-400 font-bold hover:underline decoration-cyan-400 decoration-2 underline-offset-4 mt-auto transition-all group-hover:translate-x-1"
                  >
                    Ler análise completa <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
