import React from 'react';
import Header from '../../components/HeaderNav';

function Projects() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,20,147,0.08),transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,105,180,0.06),transparent_50%)]"></div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Meus{' '}
              <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent animate-glow">
                Projetos
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              Explore os projetos que desenvolvi e as tecnologias que utilizo para criar experiências incríveis.
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Projects;
