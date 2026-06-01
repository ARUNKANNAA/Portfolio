import { useState, useEffect, useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Education from './components/Education';
import Content from './components/Content';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-brand-blue/30">
      <div ref={cursorRef} className="cursor-glow hidden md:block"></div>
      
      {/* Loading Screen */}
      {loading && (
        <div className="fixed inset-0 z-[100] bg-[#020202] flex items-center justify-center transition-opacity duration-500">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-brand-blue/20 border-t-brand-blue border-r-brand-purple animate-spin"></div>
            <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple tracking-widest animate-pulse">
              INITIALIZING
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="fixed inset-0 grid-bg opacity-30 z-0 pointer-events-none"></div>
        <ParticleBackground />
        <Navbar />
        
        <main className="relative z-10">
          <Home />
          <About />
          <Projects />
          <Achievements />
          <Experience />
          <Education />
          <Content />
          <Contact />
        </main>
        
        <Footer />
        
        <ToastContainer
          position="bottom-right"
          theme="dark"
          toastClassName="!bg-[#020202] !text-white !border !border-white/10"
        />
      </div>
    </div>
  );
}

export default App;
