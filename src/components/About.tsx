import React, { useEffect, useRef } from 'react';
import { Code, Server, Globe, Cpu } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="about" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">Sobre Mim</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="relative">
              <div className="w-full h-80 md:h-96 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg opacity-20 
                absolute -top-2 -left-2 blur-md"></div>
              <div className="w-full h-80 md:h-96 bg-[url('https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] 
                bg-cover bg-center rounded-lg border-2 border-cyan-600/50 relative z-10
                shadow-[0_0_25px_rgba(0,255,255,0.3)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-5 -right-5 h-24 w-24 bg-cyan-600 rounded-full flex items-center 
                justify-center text-3xl font-bold shadow-[0_0_15px_rgba(0,255,255,0.5)] z-20">
                7+
                <span className="text-xs absolute top-14">anos</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 reveal">
            <p className="text-lg text-gray-300 leading-relaxed">
              Olá! Sou <span className="text-cyan-400 font-semibold">Matheus França</span>, 
              desenvolvedor de sites desde 2018, especializado na criação de experiências digitais 
              completas e personalizadas.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Ao longo da minha jornada, tenho trabalhado com diversos tipos de projetos, incluindo 
              Landing Pages, E-commerce, Thank You Pages, Webinar Landing Pages e muito mais. 
              Meu objetivo é sempre criar soluções digitais que não apenas atendam às necessidades 
              dos clientes, mas também proporcionem uma experiência excepcional aos usuários.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-lg bg-cyan-600/20 flex items-center justify-center text-cyan-400
                  shadow-[0_0_10px_rgba(0,255,255,0.3)]">
                  <Code size={24} />
                </div>
                <span>Desenvolvimento Web</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-lg bg-cyan-600/20 flex items-center justify-center text-cyan-400
                  shadow-[0_0_10px_rgba(0,255,255,0.3)]">
                  <Server size={24} />
                </div>
                <span>Backend</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-lg bg-cyan-600/20 flex items-center justify-center text-cyan-400
                  shadow-[0_0_10px_rgba(0,255,255,0.3)]">
                  <Globe size={24} />
                </div>
                <span>E-commerce</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-lg bg-cyan-600/20 flex items-center justify-center text-cyan-400
                  shadow-[0_0_10px_rgba(0,255,255,0.3)]">
                  <Cpu size={24} />
                </div>
                <span>Inteligência Artificial</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;