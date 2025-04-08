
import React, { useEffect, useRef } from 'react';

const WhyLexTek = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="why-lextek" className="bg-lextek-primary text-white py-24">
      <div className="section">
        <div 
          ref={sectionRef}
          className="animate-on-scroll max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Why LexTek?
          </h2>
          
          <div className="bg-lextek-dark/20 p-8 md:p-12 rounded-xl backdrop-blur-sm relative">
            <p className="text-xl leading-relaxed mb-6">
              "I started LexTek because I've seen firsthand how underserved small organizations are when it comes to technology. You don't need a 500-page report—you need things to work and a partner you trust."
            </p>
            
            <p className="text-lg leading-relaxed">
              My approach is straightforward: I listen first, recommend only what you need, and explain everything in plain language. Whether it's fixing an immediate problem or planning long-term solutions, I'm focused on making technology work for you—not the other way around.
            </p>
            
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-lextek-accent text-lextek-dark px-6 py-2 rounded-full font-medium">
              My Philosophy
            </div>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row gap-8 justify-center">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm flex-1 max-w-md">
              <h3 className="text-xl font-semibold mb-4">For Nonprofits</h3>
              <p className="text-lextek-accent">
                I understand budget constraints and help you maximize impact with the right tech investments. Your mission deserves tools that work.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm flex-1 max-w-md">
              <h3 className="text-xl font-semibold mb-4">For Small Businesses</h3>
              <p className="text-lextek-accent">
                Technology should grow with you, not hold you back. I provide scalable solutions that adapt as your business evolves.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute hidden md:block -left-24 w-64 h-64 bg-lextek-light opacity-10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default WhyLexTek;
