import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, ArrowLeft, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Germani Jeans',
      description: 'Plataforma de vendas online para marca de roupas, integrada com sistema de gestão de estoque na nuvem. Desenvolvido com WordPress e WooCommerce.',
      image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['E-commerce', 'WordPress', 'WooCommerce', 'PHP'],
      link: '#'
    },
    {
      id: 2,
      title: 'Bot para WhatsApp',
      description: 'Automação de atendimento para WhatsApp com integração de catálogos de produtos e emissão automática de pedidos.',
      image: 'https://images.pexels.com/photos/4132538/pexels-photo-4132538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Node.js', 'API WhatsApp', 'Automação', 'JavaScript'],
      github: '#'
    },
    {
      id: 3,
      title: 'Landing Page para Webinar',
      description: 'Página de captura de leads para webinar com integração de pagamentos e acesso à área de membros.',
      image: 'https://images.pexels.com/photos/6951645/pexels-photo-6951645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      link: '#'
    },
    {
      id: 4,
      title: 'Sistema de Gestão',
      description: 'Sistema interno para gestão de estoque, vendas e clientes, com relatórios e indicadores de desempenho.',
      image: 'https://images.pexels.com/photos/7054528/pexels-photo-7054528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'Node.js', 'MySQL', 'Tailwind CSS'],
      github: '#'
    },
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
  }, []);
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-24 bg-gray-900/50 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">Meus Projetos</h2>
        
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16 reveal">
          Explore alguns dos meus projetos mais recentes e significativos. Cada um deles
          representa desafios únicos e soluções personalizadas para diferentes necessidades.
        </p>
        
        {/* Featured Project Carousel */}
        <div className="relative mb-20 reveal">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out h-[500px]"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="min-w-full relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute bottom-0 left-0 z-20 p-8 w-full md:max-w-2xl">
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold">{project.title}</h3>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="px-3 py-1 bg-cyan-600/30 text-cyan-300 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <p className="text-gray-300">{project.description}</p>
                      
                     
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -mt-8 z-30">
            <button
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-900/80 text-white
              border border-gray-700 hover:bg-cyan-600/80 transition-colors duration-300"
            >
              <ArrowLeft size={20} />
            </button>
            
            <button
              onClick={nextSlide}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-900/80 text-white
              border border-gray-700 hover:bg-cyan-600/80 transition-colors duration-300"
            >
              <ArrowRight size={20} />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-cyan-400 w-6' : 'bg-gray-600'
                }`}
              ></button>
            ))}
          </div>
        </div>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(0,255,255,0.2)]
              transition-all duration-300 hover:-translate-y-2 reveal group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-cyan-600/30 text-cyan-300 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;