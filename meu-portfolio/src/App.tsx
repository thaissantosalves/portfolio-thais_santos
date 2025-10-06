import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import thaissantosImage from './assets/img/thaissantos.png';
import Home from './pages/Home/Home';
import About from './pages/About/about';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/skills';
import Contact from './pages/Contact/contact';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 relative overflow-hidden">
     
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,207,232,0.3),transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(252,231,243,0.4),transparent_50%)]"></div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-[80vh]">
            
            <div className="text-center lg:text-left space-y-8 animate-slide-in-left">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-800 leading-[1.1] tracking-tight">
                    Oi! Me chamo{' '}
                    <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent animate-glow">
                      Thais
                    </span>
                  </h1>
                  
                  <div className="space-y-2">
                    <h2 className="text-2xl sm:text-3xl text-pink-600 font-semibold tracking-wide">
                      Desenvolvedora Frontend
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full mx-auto lg:mx-0"></div>
                  </div>
                </div>
                
                <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                  Transformo ideias em experiências digitais incríveis. 
                  Especializada em criar interfaces modernas e responsivas 
                  que conectam pessoas e negócios através da tecnologia.
                </p>
              </div>

              <div className="flex justify-center lg:justify-start pt-4">
                <Link to="/home" className="group relative bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-semibold py-4 px-10 rounded-2xl shadow-2xl hover:shadow-pink-500/30 transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 inline-block text-center">
                  <span className="relative z-10">Clique aqui</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 pt-8">
                <div className="flex items-center gap-2 text-pink-500">
                  <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Disponível para projetos</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end animate-slide-in-right">
              <div className="relative">

                <div className="absolute inset-0 bg-gradient-to-r from-pink-300/40 to-pink-400/40 rounded-full blur-3xl animate-glow"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-200/30 to-pink-300/30 rounded-full blur-2xl animate-pulse"></div>
                
                <div className="relative z-10 transform hover:scale-105 transition-all duration-700 animate-float">
                  <img 
                    src={thaissantosImage} 
                    alt="Thais Santos - Desenvolvedora Frontend"
                    className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] object-cover rounded-full border-4 border-pink-300/50 shadow-2xl shadow-pink-400/30"
                  />
                  
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full animate-bounce opacity-70 shadow-lg"></div>
                  <div className="absolute -bottom-8 -left-8 w-8 h-8 bg-gradient-to-r from-pink-300 to-pink-400 rounded-full animate-bounce opacity-70 animation-delay-300 shadow-lg"></div>
                  <div className="absolute top-1/2 -left-12 w-6 h-6 bg-gradient-to-r from-pink-200 to-pink-300 rounded-full animate-bounce opacity-70 animation-delay-700 shadow-lg"></div>
                  <div className="absolute top-1/4 -right-12 w-4 h-4 bg-gradient-to-r from-pink-300 to-pink-400 rounded-full animate-bounce opacity-70 animation-delay-1000 shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;