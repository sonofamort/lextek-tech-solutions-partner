
import React, { useEffect, useRef } from 'react';
import { Mail, Calendar } from 'lucide-react';

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);

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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="bg-white py-24">
      <div className="section">
        <div 
          ref={contactRef}
          className="animate-on-scroll max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-lextek-dark mb-6">
              Need help making tech feel less chaotic?
            </h2>
            <p className="text-xl text-lextek-lightText">
              Let's chat about your organization's technology needs.
            </p>
          </div>

          <div className="bg-lextek-secondary rounded-xl p-10 shadow-md border border-gray-100">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a 
                href="mailto:contact@lextek.com" 
                className="flex items-center gap-3 bg-white px-6 py-4 rounded-lg hover:bg-lextek-accent/30 transition-colors border border-gray-200 text-lextek-dark w-full md:w-auto justify-center"
              >
                <Mail size={20} />
                <span className="font-medium">Email Me</span>
              </a>
              
              <a 
                href="https://calendly.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-lextek-primary px-6 py-4 rounded-lg hover:bg-lextek-dark transition-colors text-white w-full md:w-auto justify-center"
              >
                <Calendar size={20} />
                <span className="font-medium">Schedule a Call</span>
              </a>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-lextek-text mb-4">
                <strong>I typically respond within 24 hours.</strong>
              </p>
              <p className="text-lextek-lightText">
                Whether you need ongoing support or help with a one-time project, I'm here to make technology work for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
