import React, { useState } from 'react';

export default function BunnerDoMeio() {
  return null; // COMPONENTE INATIVADO TEMPORARIAMENTE
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail) return;
    setStatus('submitting');
    try {
      // Simulação de chamada à API de inscrição
      await new Promise(resolve => setTimeout(resolve, 1000));
      sessionStorage.setItem('emailSubmitted', 'true');
      setStatus('success');
    } catch {
      setStatus('idle');
      alert('Erro de conexão. Tente novamente.');
    }
  };

  // Se for sucesso, mostra apenas o card de agradecimento
  if (status === 'success') {
    return (
      <div className="w-full bg-cyan-950/30 rounded-xl border border-cyan-800 my-12 p-6 animate-in fade-in duration-500">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center shadow-sm">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-cyan-100 mb-2">Quase lá! Seu guia está a caminho. 🚀</h2>
            <p className="text-cyan-400">Verifique sua caixa de entrada em instantes.</p>
            <div className="mt-4 p-3 bg-red-950/30 border border-red-900 rounded-lg max-w-xl mx-auto text-left">
              <p className="text-red-400 font-bold text-sm tracking-wide leading-relaxed text-center">
                ⚠️ IMPORTANTE: Se o e-mail não chegar em 1 minuto, ele pode ter caído por engano no SPAM ou em PROMOÇÕES.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Se não for sucesso, mostra o banner com o formulário
  return (
    <div className="my-16">
      <h2 className="text-3xl md:text-5xl font-black text-white mb-6 text-center tracking-tight leading-tight">
        <span role="img" aria-label="bicicleta">🚵‍♂️</span> Próximo Nível
      </h2>
      
      <div className="w-full bg-zinc-900 rounded-xl border border-dotted border-zinc-700 p-6 md:p-8 text-zinc-300 shadow-xl relative overflow-hidden">
        {/* Efeito de brilho de fundo */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-cyan-600/10 blur-3xl pointer-events-none"></div>

        <div className="flex flex-col items-center text-center gap-4 relative z-10">
          
        {/* Topo: Texto Curto */}
          <div className="w-full">
            <p className="text-base md:text-lg text-zinc-400 font-medium max-w-2xl mx-auto mb-2 leading-relaxed whitespace-pre-line">
              <span className="text-cyan-400 font-bold">Dica de Especialista:</span>{"\n"}
              Você sabia que muitas bicicletas aro 29 "básicas" têm a mesma durabilidade de um brinquedo?{"\n"}
              <span className="text-white font-bold">Guia Grátis:</span> Aprenda a escolher componentes que não quebram na primeira trilha, gastando pouco.
            </p>
          </div>

        {/* Baixo: Formulário */}
        <div className="w-full max-w-md mt-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu melhor e-mail aqui..."
                className="w-full px-4 py-3 bg-zinc-950 text-white border border-zinc-700 placeholder-zinc-500 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 text-base shadow-inner"
                required
              />
              
              <button
                type="submit"
                disabled={status === 'submitting' || !isValidEmail}
                className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-black py-4 px-4 rounded text-base uppercase tracking-wide transition-colors disabled:opacity-50 shadow-lg shadow-cyan-900/50"
              >
                {status === 'submitting' ? 'Aguarde...' : 'QUERO ACESSAR O GUIA'}
              </button>
            </form>
        </div>
      </div>
    </div>
    </div>
  );
}
