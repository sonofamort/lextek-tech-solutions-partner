
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-32 pb-16 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-lextek-secondary to-white -z-10"></div>
      <div className="section">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lextek-dark leading-tight mb-6 animate-fade-in">
            Tech Support that Feels Like a Team Member, Not a Vendor.
          </h1>
          <p className="text-xl md:text-2xl text-lextek-lightText mb-10 animate-fade-in-up">
            LexTek helps small nonprofits and local businesses make smarter IT decisions—with less jargon, more impact.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-lextek-primary text-white rounded-md hover:bg-lextek-dark transition-all shadow-lg hover:shadow-xl animate-fade-in-up"
          >
            📅 Book a Free Consult
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hidden md:block absolute -bottom-24 -right-24 w-96 h-96 bg-lextek-accent opacity-20 rounded-full blur-3xl"></div>
      <div className="hidden md:block absolute top-40 -right-10 w-64 h-64 bg-lextek-light opacity-10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
