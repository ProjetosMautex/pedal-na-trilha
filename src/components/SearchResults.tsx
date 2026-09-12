import React, { useEffect, useState } from 'react';
import { articles } from '../data/articles';
import type { Article } from '../data/articles';

export default function SearchResults() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Article[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q') || '';
    setQuery(q);
    
    if (q) {
      const lowerQ = q.toLowerCase();
      setResults(articles.filter(article => {
        const titleMatch = article.title?.toLowerCase().includes(lowerQ) ?? false;
        const excerptMatch = article.excerpt?.toLowerCase().includes(lowerQ) ?? false;
        return titleMatch || excerptMatch;
      }));
    } else {
      setResults(articles);
    }
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="animate-pulse flex flex-col items-center justify-center space-y-4">
          <div className="h-8 bg-zinc-800 rounded w-1/3"></div>
          <div className="h-4 bg-zinc-800 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-zinc-100">
        Resultados da busca por: <span className="text-cyan-400">"{query}"</span>
      </h1>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((article, index) => (
            <a key={index} href={article.url} className="block bg-[#18181b] rounded-2xl overflow-hidden border border-cyan-900/30 hover:border-cyan-500/50 transition-all group shadow-lg hover:shadow-cyan-900/20 flex flex-col h-full">
              {article.image && (
                <div className="relative h-48 overflow-hidden bg-zinc-800">
                  <img loading="lazy" width="800" height="600" src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-cyan-400 transition-colors">{article.title}</h3>
                {article.excerpt && <p className="text-zinc-400 text-sm mb-6 flex-grow">{article.excerpt}</p>}
                <div className="mt-auto pt-4 border-t border-zinc-700/50 flex items-center justify-end text-sm">
                  <span className="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">Ler mais &rarr;</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="bg-[#18181b] p-8 rounded-xl border border-cyan-900/30 text-center">
          <p className="text-zinc-300 text-lg mb-4">Nenhum resultado encontrado para a sua busca.</p>
          <a href="/" className="inline-block bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold py-3 px-6 rounded-lg transition-colors">
            Voltar para Home
          </a>
        </div>
      )}
    </div>
  );
}
