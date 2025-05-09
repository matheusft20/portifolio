import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (!typingRef.current) return;
    
    const phrases = ['Desenvolvedor Web', 'Desenvolvedor Frontend', 'Desenvolvedor Backend', 'Desenvolvedor Full Stack'];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let pauseEnd = 1500;
    
    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        if (typingRef.current) {
          typingRef.current.textContent = currentPhrase.substring(0, currentCharIndex - 1);
          currentCharIndex--;
        }
        typingSpeed = 50;
      } else {
        if (typingRef.current) {
          typingRef.current.textContent = currentPhrase.substring(0, currentCharIndex + 1);
          currentCharIndex++;
        }
        typingSpeed = 100;
      }
      
      if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typingSpeed = 500;
      }
      
      if (!isDeleting && currentCharIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = pauseEnd;
      }
      
      setTimeout(type, typingSpeed);
    };
    
    setTimeout(type, 1000);
  }, []);
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 glitch-effect" title="Matheus França">
            Matheus França
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-8">
            <span>Eu sou um </span>
            <span ref={typingRef} className="text-cyan-400 font-medium"></span>
            <span className="animate-blink">|</span>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
            Transformando ideias em experiências digitais desde 2018.
            Especializado em criar soluções web inovadoras e interativas.
          </p>
          
          <div className="flex gap-4 justify-center">
            <a href="#projects" className="btn-primary">
              Ver Projetos
            </a>
            <a href="#contact" className="px-6 py-3 border-2 border-cyan-600 text-cyan-400 font-bold rounded-lg 
              relative overflow-hidden transition-all duration-300 hover:text-white hover:bg-cyan-600/20
              hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]">
              Contato
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
          <ChevronDown size={32} />
        </a>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80 z-0"></div>
    </section>
  );
};

export default Hero;