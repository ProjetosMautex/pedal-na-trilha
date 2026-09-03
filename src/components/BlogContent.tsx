import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import { articles } from '../data/articles';

export const BlogContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [inputPage, setInputPage] = useState('');

  const filteredArticles = articles;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);

  // Sync state with URL parameter 'page'
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const page = parseInt(params.get('page') || '1', 10);
      if (!isNaN(page) && page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      } else {
        setCurrentPage(1);
      }
    };

    window.addEventListener('popstate', handlePopState);

    // Initial load sync
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get('page') || '1', 10);
    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [totalPages]);

  const updatePage = (pageNum: number) => {
    setCurrentPage(pageNum);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('page', pageNum.toString());
      window.history.pushState({}, '', url.toString());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    updatePage(Math.max(currentPage - 1, 1));
  };
  
  const nextPage = () => {
    updatePage(Math.min(currentPage + 1, totalPages));
  };

  const handlePageJump = (e: React.FormEvent) => {
    e.preventDefault();
    const pageNum = parseInt(inputPage);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
      updatePage(pageNum);
      setInputPage('');
    }
  };

  return (
    <main className="flex-grow bg-[#09090b]">
      <section className="bg-[#18181b] border-b border-cyan-900/30 py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-zinc-100 mb-4">Nosso Blog</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Análises técnicas, comparativos detalhados e guias para você escolher a bicicleta aro 29 certa.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#09090b]">
        <div className="mb-8">
          <a 
            href="/"
            className="inline-flex items-center text-zinc-300 font-bold hover:text-cyan-400 hover:underline decoration-cyan-500 decoration-2 underline-offset-4 mb-6 transition-all"
          >
            <ChevronLeft className="mr-1 w-4 h-4" /> Voltar para o início
          </a>
          
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-zinc-100 border-l-4 border-cyan-500 pl-4">
              Todos os Artigos
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentArticles.map((item, index) => (
            <article key={index} className="bg-[#18181b] rounded-2xl shadow-lg overflow-hidden hover:shadow-cyan-900/20 transition-all duration-300 border border-cyan-900/30 flex flex-col h-full group hover:border-cyan-500/50">
              <div className="relative h-56 overflow-hidden bg-zinc-800">
                <img loading="lazy" width="800" height="600" src={item.image || 'https://placehold.co/800x533/18181b/22d3ee?text=Bicicleta+Aro+29'} 
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

        {totalPages > 1 && (
          <div className="mt-16 flex flex-col items-center space-y-6">
            <div className="flex justify-center items-center space-x-4">
              <button 
                onClick={prevPage} 
                disabled={currentPage === 1}
                className={`px-6 py-2 rounded-lg font-bold transition-all ${
                  currentPage === 1 
                    ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' 
                    : 'bg-cyan-600 text-white hover:bg-cyan-500 shadow-lg active:scale-95'
                }`}
              >
                Anterior
              </button>
              
              <div className="flex items-center bg-zinc-800/50 px-4 py-2 rounded-lg border border-cyan-900/30">
                <span className="text-zinc-400 font-medium">
                  Página <span className="text-zinc-100 font-bold">{currentPage}</span> de <span className="text-zinc-100 font-bold">{totalPages}</span>
                </span>
              </div>

              <button 
                onClick={nextPage} 
                disabled={currentPage === totalPages}
                className={`px-6 py-2 rounded-lg font-bold transition-all ${
                  currentPage === totalPages 
                    ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' 
                    : 'bg-cyan-600 text-white hover:bg-cyan-500 shadow-lg active:scale-95'
                }`}
              >
                Próxima
              </button>
            </div>

            <form onSubmit={handlePageJump} className="flex items-center space-x-2 bg-[#18181b] p-2 rounded-xl shadow-lg border border-cyan-900/30">
              <label htmlFor="page-jump" className="text-zinc-300 text-xs font-bold uppercase tracking-wider ml-2">Ir para:</label>
              <input 
                id="page-jump"
                type="number" 
                min="1" 
                max={totalPages}
                value={inputPage}
                onChange={(e) => setInputPage(e.target.value)}
                placeholder="Ex: 5"
                className="w-16 bg-zinc-800 text-zinc-100 border-none rounded-lg px-2 py-1 text-center font-bold focus:ring-2 focus:ring-cyan-500 outline-none transition-all placeholder:text-zinc-600 placeholder:font-normal"
              />
              <button 
                type="submit"
                className="bg-cyan-600 text-white px-4 py-1 rounded-lg font-black text-sm uppercase hover:bg-cyan-500 transition-all active:scale-95"
              >
                OK
              </button>
            </form>
          </div>
        )}
      </section>
    </main>
  );
};
