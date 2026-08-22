import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] bg-[#18181b] border-t border-cyan-900/30 p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-zinc-300">
          Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com a nossa{' '}
          <a href="/politica-de-privacidade" className="text-cyan-400 hover:underline">Política de Privacidade</a>.
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <button onClick={accept} className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold transition-colors text-sm">
            Aceitar e Fechar
          </button>
          <button onClick={() => setShow(false)} className="text-zinc-400 hover:text-white p-2">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
