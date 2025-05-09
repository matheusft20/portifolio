import React from 'react';
import { Gamepad2, Github, Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#hero" className="flex items-center space-x-2 group mb-4">
              <Gamepad2 className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                MF Dev
              </span>
            </a>
            
            <p className="text-gray-400 leading-relaxed">
              Desenvolvedor web desde 2018, criando experiências digitais únicas e interativas
              para negócios de todos os tamanhos.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-100">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Início</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Sobre</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Habilidades</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Projetos</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-100">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Desenvolvimento Web</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">E-commerce</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Landing Pages</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Sistemas Web</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Automação</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-100">Contato</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <strong className="text-gray-300">Email:</strong> matheusdiexweb@gmail.com
              </li>
              <li className="text-gray-400">
                <strong className="text-gray-300">Telefone:</strong> +55 (62) 99680-6651
              </li>
              <li className="text-gray-400">
                <strong className="text-gray-300">Localização:</strong> Goiânia, Brasil
              </li>
            </ul>
            

          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Matheus França. Todos os direitos reservados.
          </p>
          
          <a 
            href="#hero"
            className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400
            hover:bg-cyan-600/30 hover:text-cyan-400 transition-all duration-300"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;