import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-[#09090b] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-100 mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-zinc-400">
            Tem alguma dúvida sobre bicicletas aro 29, encontrou alguma informação que precisa ser atualizada ou gostaria de sugerir uma marca ou modelo para analisarmos?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-zinc-100 mb-6">
              Fale com a Nossa Equipe
            </h2>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Se você encontrou algum erro em um artigo, possui informações adicionais sobre determinada bicicleta ou gostaria de sugerir um assunto relacionado ao universo das bicicletas aro 29, entre em contato conosco.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-900/30 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100">Telefone / WhatsApp</h3>
                  <p className="text-zinc-400 mt-1">87 98140-0403</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-900/30 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100">E-mail</h3>
                  <a href="mailto:contato@pedalnatrilha.com" className="text-cyan-400 hover:text-cyan-300 mt-1 block">
                    contato@pedalnatrilha.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-900/30 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100">Informações do Projeto</h3>
                  <ul className="text-zinc-400 mt-1 space-y-1">
                    <li><strong className="text-zinc-300">Responsável:</strong> Murilo Vieira</li>
                    <li><strong className="text-zinc-300">Empresa/Projeto:</strong> Pedal na Trilha</li>
                    <li><strong className="text-zinc-300">Endereço:</strong> Sítio Pedrinhas, 50 – Zona Rural<br/>Venturosa, PE – CEP 55270-000</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-[#18181b] p-6 rounded-xl border border-cyan-900/30">
              <h3 className="text-xl font-bold text-zinc-100 mb-4">Sugestões, Correções e Atualizações</h3>
              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                O mercado de bicicletas está sempre mudando. Novos modelos são lançados, componentes podem ser atualizados e fabricantes podem modificar especificações de seus produtos. Por isso, a participação dos leitores é importante para manter o conteúdo do <strong>Pedal na Trilha</strong> cada vez mais preciso.
              </p>
              <h4 className="font-semibold text-zinc-200 mb-2">Antes de enviar sua mensagem</h4>
              <ul className="list-disc pl-5 text-zinc-400 text-sm space-y-2">
                <li>O artigo ou página ao qual sua mensagem se refere;</li>
                <li>O nome da bicicleta, marca ou modelo mencionado;</li>
                <li>Qual informação você acredita que precisa ser corrigida ou complementada;</li>
                <li>Links ou fontes que possam ajudar na verificação, quando disponíveis.</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#18181b] p-8 rounded-2xl border border-cyan-900/30">
            <h2 className="text-2xl font-bold text-zinc-100 mb-6">Envie uma Mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full bg-[#09090b] border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full bg-[#09090b] border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Digite o assunto da mensagem"
                  className="w-full bg-[#09090b] border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Como podemos ajudar?"
                  rows={6}
                  className="w-full bg-[#09090b] border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-colors"
              >
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
