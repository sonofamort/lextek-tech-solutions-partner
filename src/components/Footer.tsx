
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-lextek-dark text-white py-12">
      <div className="section">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <a href="#" className="text-2xl font-bold">LexTek</a>
              <p className="text-lextek-accent mt-2">Your trusted technology partner</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div>
                <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#what-i-do" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                  <li><a href="#why-lextek" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                  <li><a href="#tools" className="text-gray-300 hover:text-white transition-colors">Tools</a></li>
                  <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Contact</h3>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="mailto:contact@lextek.com" 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      contact@lextek.com
                    </a>
                  </li>
                  <li>
                    <a 
                      href="tel:+1234567890" 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      (123) 456-7890
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© {currentYear} LexTek. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Helping small organizations make big impacts with technology.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
