import React from 'react';
import { Bike, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#09090b] border-t border-cyan-900/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2 group mb-4">
              <Bike className="w-6 h-6 text-cyan-500" />
              <span className="font-bold text-lg text-zinc-100">Pedal na Trilha</span>
            </a>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Sua referência em análises, comparativos e guias sobre bicicletas aro 29. Conteúdo especializado para ajudar ciclistas iniciantes e experientes a encontrarem a bicicleta ideal.
            </p>
          </div>

          <div>
            <h3 className="text-zinc-100 font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="/termos-de-uso" className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Termos de Uso</a></li>
              <li><a href="/politica-de-privacidade" className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Política de Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-zinc-100 font-semibold mb-4">Informações de Contato</h3>
            <ul className="space-y-3">
              <li className="flex flex-col gap-1 text-zinc-400 text-sm">
                <span className="font-semibold text-zinc-300">Responsável:</span>
                <span>Murilo Vieira</span>
              </li>
              <li className="flex flex-col gap-1 text-zinc-400 text-sm">
                <span className="font-semibold text-zinc-300">Projeto:</span>
                <span>Pedal na Trilha</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-400 text-sm mt-2">
                <Mail className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>contato@pedalnatrilha.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 text-center">
          <p className="text-zinc-500 text-sm">
            © 2026 Pedal na Trilha. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
