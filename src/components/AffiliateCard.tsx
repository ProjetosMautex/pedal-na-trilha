import React from 'react';
import type { Product } from '../data/products';
import { ShoppingCart, Star } from 'lucide-react';

interface AffiliateCardProps {
  product: Product;
}

export default function AffiliateCard({ product }: AffiliateCardProps) {
  return (
    <div className="bg-[#18181b] rounded-2xl overflow-hidden border border-cyan-900/30 hover:border-cyan-500/50 transition-all group shadow-lg hover:shadow-cyan-900/20 flex flex-col h-full">
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-3">
          <div className="flex gap-1 text-yellow-400">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
          </div>
          <div className="bg-cyan-500 text-zinc-950 text-xs font-bold px-2 py-1 rounded-md">
            {product.category}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-zinc-100 mb-2 leading-tight">{product.name}</h3>
        <p className="text-zinc-400 text-sm mb-4 line-clamp-3">{product.description}</p>
        
        {product.features && product.features.length > 0 && (
          <ul className="text-sm text-zinc-300 mb-6 space-y-1 flex-grow">
            {product.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                {feat}
              </li>
            ))}
          </ul>
        )}
        
        <div className="mt-auto pt-4 border-t border-zinc-700/50 flex flex-col">
          <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored nofollow" className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition-colors text-zinc-950 font-bold uppercase tracking-wide shadow-lg" aria-label={`Ver oferta de ${product.name}`}>
            <ShoppingCart className="w-5 h-5" />
            CLIQUE AQUI PARA VER O PREÇO
          </a>
        </div>
      </div>
    </div>
  );
}
