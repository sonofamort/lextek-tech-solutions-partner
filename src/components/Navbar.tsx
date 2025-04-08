
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <span className="text-lextek-primary font-bold text-2xl">LexTek</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#what-i-do" className="text-lextek-text hover:text-lextek-primary transition-colors">
            Services
          </a>
          <a href="#why-lextek" className="text-lextek-text hover:text-lextek-primary transition-colors">
            About
          </a>
          <a href="#tools" className="text-lextek-text hover:text-lextek-primary transition-colors">
            Tools
          </a>
          <a 
            href="#contact"
            className="px-5 py-2.5 bg-lextek-primary text-white rounded-md hover:bg-lextek-dark transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-lextek-text"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md animate-fade-in">
          <div className="px-6 py-5 space-y-4 flex flex-col">
            <a 
              href="#what-i-do" 
              className="py-2 text-lextek-text hover:text-lextek-primary transition-colors"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a 
              href="#why-lextek" 
              className="py-2 text-lextek-text hover:text-lextek-primary transition-colors"
              onClick={toggleMenu}
            >
              About
            </a>
            <a 
              href="#tools" 
              className="py-2 text-lextek-text hover:text-lextek-primary transition-colors"
              onClick={toggleMenu}
            >
              Tools
            </a>
            <a 
              href="#contact" 
              className="py-2 px-4 bg-lextek-primary text-white text-center rounded-md hover:bg-lextek-dark transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
