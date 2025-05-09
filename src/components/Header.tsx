import React, { useState, useEffect } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#hero" className="flex items-center space-x-2 group">
            <Gamepad2 className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              MF Dev
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 
                transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(0,255,255,0.7)]"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`absolute top-full left-0 w-full bg-gray-800/95 backdrop-blur-md shadow-lg transition-all duration-300 transform origin-top md:hidden
            ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-gray-700/50 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;