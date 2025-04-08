
import React, { useEffect, useRef } from 'react';
import { Laptop, Shield, Zap, Cloud, Users, HardDrive } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "IT Support & Troubleshooting",
    description: "Fast, friendly solutions for your daily tech issues—whether it's fixing printers or solving software crashes.",
    icon: Laptop,
  },
  {
    id: 2,
    title: "Networking & Security Setup",
    description: "Secure, reliable networks for your organization with protection against modern threats.",
    icon: Shield,
  },
  {
    id: 3,
    title: "System Automation & Optimization",
    description: "Streamline your workflows and make your systems work smarter, not harder.",
    icon: Zap,
  },
  {
    id: 4,
    title: "Cloud & Email Management",
    description: "Seamless cloud solutions and email systems that just work—no more inbox headaches.",
    icon: Cloud,
  },
  {
    id: 5,
    title: "Tech Training for Non-Tech Folks",
    description: "Plain-English training to help your team get comfortable with the tools they use daily.",
    icon: Users,
  },
  {
    id: 6,
    title: "Backup & Data Protection",
    description: "Protect your important files and systems with secure, automated backups tailored to your team's needs.",
    icon: HardDrive,
  },
];

const WhatIDo = () => {
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      serviceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="what-i-do" className="bg-white py-24">
      <div className="section">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-lextek-dark mb-6">
            What I Do
          </h2>
          <p className="text-lg text-lextek-lightText">
            Practical tech solutions tailored for organizations that need reliable IT without the enterprise price tag.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (serviceRefs.current[index] = el)}
              className={`animate-on-scroll stagger-${index % 6 + 1} bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-all hover:translate-y-[-5px] border border-gray-100`}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-lextek-accent/20 text-lextek-primary mb-6">
                <service.icon size={26} />
              </div>
              <h3 className="text-xl font-semibold text-lextek-dark mb-3">
                {service.title}
              </h3>
              <p className="text-lextek-lightText">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-lg text-lextek-text">
            Whether you're a small nonprofit or a startup with big plans, I'll help you run smoother, safer, and smarter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
