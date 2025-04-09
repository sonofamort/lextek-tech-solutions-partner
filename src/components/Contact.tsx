
import React, { useEffect, useRef } from 'react';
import { Mail } from 'lucide-react';

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
            <div className="flex justify-center">
              <a 
                href="mailto:connect@lextek.net" 
                className="flex items-center gap-3 bg-lextek-primary px-8 py-5 rounded-lg hover:bg-lextek-dark transition-colors text-white text-xl font-medium w-auto justify-center"
              >
                <Mail size={24} />
                <span>Email Me</span>
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
