import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulação de envio
    setTimeout(() => {
      // Em um projeto real, aqui seria a integração com um serviço de formulários ou backend
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset após 3 segundos
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">Entre em Contato</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 reveal">
            <p className="text-lg text-gray-300 leading-relaxed">
              Interessado em trabalhar juntos? Tem algum projeto em mente ou simplesmente
              quer bater um papo sobre desenvolvimento web? Entre em contato!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-600/20 flex items-center justify-center text-cyan-400
                  shadow-[0_0_10px_rgba(0,255,255,0.3)]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Email</h4>
                  <a href="matheusdiexweb@gmail.com" className="text-lg hover:text-cyan-400 transition-colors duration-300">
                    matheusdiexweb@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-600/20 flex items-center justify-center text-cyan-400
                  shadow-[0_0_10px_rgba(0,255,255,0.3)]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Telefone</h4>
                  <a href="tel:+5562996806651" className="text-lg hover:text-cyan-400 transition-colors duration-300">
                    +55 (62) 996806651
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-600/20 flex items-center justify-center text-cyan-400
                  shadow-[0_0_10px_rgba(0,255,255,0.3)]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Localização</h4>
                  <p className="text-lg">Goiânia, Brasil</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <div className="inline-block relative">
                <span className="px-6 py-3 rounded-lg bg-gray-800 inline-block relative z-10">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">
                    Resposta em até 24 horas
                  </span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg blur-md opacity-30"></div>
              </div>
            </div>
          </div>
          
          <div className="relative reveal">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur-md opacity-20"></div>
            <form 
              onSubmit={handleSubmit} 
              className="bg-gray-800 p-8 rounded-lg shadow-xl relative z-10 border border-gray-700"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 
                  focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="Seu nome"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 
                  focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 
                  focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="Assunto da mensagem"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 
                  focus:border-transparent transition-all duration-300 outline-none resize-none"
                  placeholder="Sua mensagem aqui..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className={`w-full py-3 px-6 rounded-lg flex items-center justify-center space-x-2 font-semibold
                transition-all duration-300 ${
                  formStatus === 'submitting' 
                    ? 'bg-gray-600 cursor-not-allowed'
                    : formStatus === 'success'
                      ? 'bg-green-600 hover:bg-green-500'
                      : formStatus === 'error'
                        ? 'bg-red-600 hover:bg-red-500'
                        : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500'
                }`}
              >
                {formStatus === 'submitting' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Enviando...</span>
                  </>
                ) : formStatus === 'success' ? (
                  <span>Mensagem Enviada!</span>
                ) : formStatus === 'error' ? (
                  <span>Erro ao Enviar. Tente Novamente.</span>
                ) : (
                  <>
                    <span>Enviar Mensagem</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;