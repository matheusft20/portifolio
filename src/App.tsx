import React from 'react';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import { ParticlesBackground } from './components/ParticlesBackground';

function App() {
  useEffect(() => {
    document.title = "Matheus França | Desenvolvedor";
    
    // Smooth scroll para os links de navegação
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-hidden relative">
      <ParticlesBackground />
      <Cursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;