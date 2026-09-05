import React, { useState } from 'react';
import { HelpCircle, ChevronRight, CheckCircle2 } from 'lucide-react';

interface Option {
  text: string;
  recommendation: string;
}

interface InteractiveSimulatorProps {
  question: string;
  options: Option[];
}

export default function InteractiveSimulator({ question, options }: InteractiveSimulatorProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  return (
    <div className="bg-cyan-950/20 border border-cyan-900/50 rounded-2xl p-6 md:p-8 shadow-xl my-8">
      <div className="flex items-center gap-3 mb-6">
        <HelpCircle className="w-8 h-8 text-cyan-400 shrink-0" />
        <h3 className="text-xl md:text-2xl font-bold text-white m-0">Simulador Interativo</h3>
      </div>
      
      <p className="text-zinc-300 text-lg mb-6">{question}</p>
      
      <div className="space-y-3">
        {options.map((option, idx) => (
          <div key={idx}>
            <button
              onClick={() => setSelectedOption(selectedOption === idx ? null : idx)}
              className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                selectedOption === idx 
                  ? 'bg-cyan-900/40 border-cyan-500' 
                  : 'bg-zinc-900/50 border-zinc-700/50 hover:border-cyan-500/50'
              }`}
            >
              <span className={`text-sm md:text-base font-medium ${selectedOption === idx ? 'text-cyan-300' : 'text-zinc-300 group-hover:text-zinc-200'}`}>
                {option.text}
              </span>
              {selectedOption === idx ? (
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
              ) : (
                <ChevronRight className="w-5 h-5 text-zinc-500 group-hover:text-cyan-500 shrink-0 transition-transform group-hover:translate-x-1" />
              )}
            </button>
            
            {selectedOption === idx && (
              <div className="mt-3 ml-2 p-4 bg-[#18181b] border-l-4 border-cyan-500 rounded-r-xl">
                <p className="text-zinc-300 text-sm md:text-base m-0 leading-relaxed">
                  <span className="font-bold text-cyan-400 block mb-1">Análise:</span>
                  {option.recommendation}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
