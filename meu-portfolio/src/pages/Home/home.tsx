import React from 'react';
import Header from '../../components/HeaderNav';

function Home() {
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
              Bem-vindo à{' '}
              <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent animate-glow">
                Home
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            </p>
            
            <div className="flex justify-center pt-8">
              <a 
                href="/" 
                className="group relative bg-gradient-to-r from-pink-500/70 to-pink-600/70 hover:from-pink-500 hover:to-pink-600 text-white font-semibold py-4 px-10 rounded-2xl shadow-2xl hover:shadow-pink-500/20 transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 inline-block text-center border border-pink-500/30"
              >
                <span className="relative z-10">Voltar ao Início</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-pink-600/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Home;
