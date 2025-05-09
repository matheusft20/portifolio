import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const skills: Skill[] = [
    { name: 'HTML', level: 95, icon: '🌐', color: 'from-orange-500 to-red-500' },
    { name: 'CSS', level: 90, icon: '🎨', color: 'from-blue-500 to-indigo-500' },
    { name: 'JavaScript', level: 85, icon: '📜', color: 'from-yellow-400 to-yellow-600' },
    { name: 'React.js', level: 80, icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
    { name: 'Next.js', level: 75, icon: '⏭️', color: 'from-gray-600 to-gray-800' },
    { name: 'PHP', level: 70, icon: '🐘', color: 'from-indigo-500 to-purple-600' },
    { name: 'Node.js', level: 78, icon: '🟢', color: 'from-green-500 to-green-700' },
    { name: 'Python', level: 65, icon: '🐍', color: 'from-blue-600 to-green-600' },
    { name: 'MySQL', level: 75, icon: '🗄️', color: 'from-blue-400 to-blue-600' },
    { name: 'Tailwind', level: 90, icon: '🌊', color: 'from-cyan-400 to-blue-500' },
    { name: 'Bootstrap', level: 85, icon: '🅱️', color: 'from-purple-500 to-purple-700' },
    { name: 'WordPress', level: 80, icon: '📰', color: 'from-blue-500 to-indigo-600' },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            if (entry.target.classList.contains('skill-progress')) {
              const index = skillRefs.current.indexOf(entry.target as HTMLDivElement);
              if (index !== -1) {
                setTimeout(() => {
                  const progressBar = entry.target.querySelector('.progress-bar');
                  if (progressBar) {
                    progressBar.classList.add('animate-progress');
                    const levelElement = progressBar.querySelector('.level');
                    if (levelElement) {
                      const level = skills[index].level;
                      let currentLevel = 0;
                      const interval = setInterval(() => {
                        if (currentLevel < level) {
                          currentLevel++;
                          levelElement.textContent = `${currentLevel}%`;
                        } else {
                          clearInterval(interval);
                        }
                      }, 20);
                    }
                  }
                }, 300 * index);
              }
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
    
    const skillElements = document.querySelectorAll('.skill-progress');
    skillElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      skillElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-gray-900/50 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">Minhas Habilidades</h2>
        
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16 reveal">
          Com mais de 7 anos de experiência no desenvolvimento web, adquiri proficiência em 
          diversas tecnologias front-end e back-end. Cada habilidade representa um nível de 
          experiência que aplico em meus projetos.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              ref={el => skillRefs.current[index] = el}
              className="skill-progress bg-gray-800 rounded-lg p-6 border-l-4 border-cyan-600
              shadow-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all duration-300
              hover:-translate-y-1 opacity-0 transform translate-y-8"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="text-xl font-bold text-cyan-400">
                  <span className="level">0%</span>
                </div>
              </div>
              
              <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className={`progress-bar h-full rounded-full bg-gradient-to-r ${skill.color} w-0`}
                  style={{ width: '0%',
                    transition: 'width 1s ease-in-out', 
                    transitionDelay: `${index * 0.1}s` }}
                  data-level={skill.level}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center reveal">
          <p className="text-gray-400 mb-4">Estou sempre aprendendo e evoluindo com as novas tecnologias</p>
          <div className="inline-block relative">
            <span className="px-6 py-3 rounded-lg bg-gray-800 inline-block relative z-10">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">
                Próximo nível: IA e desenvolvimento de agentes inteligentes
              </span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg blur-md opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;