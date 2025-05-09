
import React, { useEffect, useRef } from 'react';

const tools = [
  {
    id: 1,
    name: "Microsoft 365",
    icon: "/assets/microsoft-office-2019.png",
  },
  {
    id: 2,
    name: "Google Workspace",
    icon: "/assets/google-logo.png",
  },
  {
    id: 3,
    name: "Ubiquiti (Unifi)",
    icon: "/assets/icons8-ubiquiti-96.png",
  },
  {
    id: 4,
    name: "Synology",
    icon: "/assets/nas.png",
  },
  {
    id: 5,
    name: "Action1",
    icon: "/assets/Action1-96px.png",
  },
  {
    id: 6,
    name: "Docker",
    icon: "/assets/docker.png",
  },
  {
    id: 7,
    name: "VS Code",
    icon: "/assets/visual-studio-code-96.png",
  },
  {
    id: 8,
    name: "Proxmox",
    icon: "/assets/proxmox-96.png",
  },
];


const ToolsIUse = () => {
  const toolsRef = useRef<HTMLDivElement>(null);

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

    if (toolsRef.current) {
      observer.observe(toolsRef.current);
    }

    return () => {
      if (toolsRef.current) {
        observer.unobserve(toolsRef.current);
      }
    };
  }, []);

  return (
    <section id="tools" className="bg-gray-50 py-24">
      <div className="section">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-lextek-dark mb-6">
            Tools I Use
          </h2>
          <p className="text-lg text-lextek-lightText">
            I work with industry-standard platforms and tools to deliver reliable, secure, and efficient solutions.
          </p>
        </div>

        <div 
          ref={toolsRef}
          className="animate-on-scroll grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {tools.map((tool) => (
            <div 
              key={tool.id} 
              className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <img 
                src={tool.icon} 
                alt={tool.name} 
                className="w-12 h-12 mb-3" 
                loading="lazy"
              />
              <p className="text-center text-lextek-text font-medium">{tool.name}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-lg text-lextek-text">
            These are just some of the tools I work with daily. I'm always expanding my toolkit to better serve your needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ToolsIUse;
