import React, { useState } from 'react';
import { Menu, X, Bike, Search, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#09090b]/90 backdrop-blur-md border-b border-cyan-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2 group">
              <Bike className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <span className="font-extrabold text-xl tracking-tight text-gradient">
                Pedal na Trilha
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-zinc-300 hover:text-cyan-400 transition-colors font-medium">Início</a>
            <a href="/sobre-nos" className="text-zinc-300 hover:text-cyan-400 transition-colors font-medium">Sobre Nós</a>
            <a href="/contato" className="text-zinc-300 hover:text-cyan-400 transition-colors font-medium">Contato</a>
            
            {/* Desktop Search */}
            <div className="relative flex items-center ml-4">
              {isSearchOpen ? (
                <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar artigos..."
                    className="bg-zinc-800/50 border border-cyan-900/30 rounded-lg px-3 py-1 text-sm text-zinc-100 focus:outline-none focus:border-cyan-500 w-48 transition-colors"
                    autoFocus
                  />
                  <button type="submit" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button type="button" onClick={() => setIsSearchOpen(false)} className="text-zinc-500 hover:text-zinc-300 ml-1">
                    <X className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <button onClick={() => setIsSearchOpen(true)} className="text-zinc-300 hover:text-cyan-400 transition-colors focus:outline-none" aria-label="Buscar">
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button & Mobile Search Icon */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-zinc-300 hover:text-cyan-400 focus:outline-none" aria-label="Buscar">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-300 hover:text-cyan-400 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden py-3 border-t border-cyan-900/30">
            <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar artigos..."
                className="flex-grow bg-zinc-800/50 border border-cyan-900/30 rounded-lg px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:border-cyan-500"
                autoFocus
              />
              <button type="submit" className="bg-cyan-600 hover:bg-cyan-500 p-2 rounded-lg text-white transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#18181b] border-b border-cyan-900/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-zinc-300 hover:text-cyan-400 hover:bg-zinc-800">Início</a>
            <a href="/sobre-nos" className="block px-3 py-2 rounded-md text-base font-medium text-zinc-300 hover:text-cyan-400 hover:bg-zinc-800">Sobre Nós</a>
            <a href="/contato" className="block px-3 py-2 rounded-md text-base font-medium text-zinc-300 hover:text-cyan-400 hover:bg-zinc-800">Contato</a>
          </div>
        </div>
      )}
    </header>
  );
}
