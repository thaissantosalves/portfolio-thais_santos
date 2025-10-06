import React from 'react';
import Header from '../../components/HeaderNav';

function Projects() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,207,232,0.3),transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(252,231,243,0.4),transparent_50%)]"></div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-800 leading-[1.1] tracking-tight">
              Meus{' '}
              <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent animate-glow">
                Projetos
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
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
