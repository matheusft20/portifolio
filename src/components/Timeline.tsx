import React, { useEffect } from 'react';
import { Calendar, Link } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

const Timeline: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      year: '2018',
      title: 'Início da Jornada',
      description: 'Primeiros passos como desenvolvedor web, criando landing pages e sites simples com HTML, CSS e JavaScript básico.',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      year: '2020',
      title: 'E-commerce Germani Jeans',
      description: 'Desenvolvimento de e-commerce para a marca Germani Jeans usando WordPress e WooCommerce, integrado com sistema de gestão de estoque.',
      image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      year: '2022',
      title: 'Expansão para Aplicações Completas',
      description: 'Evolução para desenvolvimento full-stack com React, Node.js e MongoDB, criando aplicações web mais complexas e bots para WhatsApp.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      year: '2025',
      title: 'Agentes com Inteligência Artificial',
      description: 'Projeto em desenvolvimento de sistema de atendimento com IA utilizando a OpenAI API, incorporando recursos avançados de processamento de linguagem natural.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    }
  ];

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
    
    // Add JavaScript to animate the timeline line
    const timelineLine = document.querySelector('.timeline-line');
    if (timelineLine) {
      setTimeout(() => {
        timelineLine.classList.add('animate-timeline');
      }, 500);
    }
  }, []);

  return (
    <section id="timeline" className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">Minha Jornada</h2>
        
        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-gray-700 transform -translate-x-1/2 timeline-line
            before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-0 before:bg-cyan-400
            before:shadow-[0_0_10px_rgba(0,255,255,0.5)] before:animate-timeline-progress"></div>
          
          {timelineItems.map((item, index) => (
            <div 
              key={item.year} 
              className={`flex flex-col md:flex-row md:items-center md:justify-between mb-12 md:mb-24 relative
                ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-cyan-500 rounded-full transform -translate-x-1/2
                shadow-[0_0_15px_rgba(0,255,255,0.7)] z-10"></div>
              
              {/* Year */}
              <div className={`flex items-center space-x-2 ml-10 md:ml-0
                ${index % 2 === 1 ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12'} mb-4 md:mb-0 md:w-1/2`}>
                <Calendar className={`text-cyan-400 md:hidden`} size={20} />
                <div className="md:inline-flex md:items-center md:space-x-2">
                  <span 
                    className={`text-4xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-cyan-400 to-blue-500 reveal`}
                  >
                    {item.year}
                  </span>
                  <Calendar className={`text-cyan-400 hidden md:inline-block`} size={20} />
                </div>
              </div>
              
              {/* Content */}
              <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 1 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(0,255,255,0.2)]
                  transition-all duration-300 reveal group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-4">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <p className="text-gray-300">{item.description}</p>
                    
                    {item.link && (
                      <a 
                        href={item.link} 
                        className="inline-flex items-center space-x-2 text-cyan-400 mt-4 group-hover:text-cyan-300
                        transition-colors duration-300"
                      >
                        
                      
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;