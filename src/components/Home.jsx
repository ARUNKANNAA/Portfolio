import { motion as fMotion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Link } from 'react-scroll';
import { LuCpu, LuCircuitBoard, LuBot, LuWifi, LuCodeXml, LuCamera, LuZap, LuArrowRight, LuSparkles, LuDownload } from 'react-icons/lu';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12">
      {/* Floating Background Icons */}
      <fMotion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:flex absolute glass rounded-2xl p-4 flex-col items-center gap-1 z-10" 
        style={{ left: '8%', top: '20%' }}
      >
        <LuCpu className="w-6 h-6 text-brand-blue" />
        <span className="text-xs text-gray-400">ESP32</span>
      </fMotion.div>

      <fMotion.div 
        animate={{ y: [0, -15, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="hidden md:flex absolute glass rounded-2xl p-4 flex-col items-center gap-1 z-10" 
        style={{ left: '85%', top: '15%' }}
      >
        <LuCircuitBoard className="w-6 h-6 text-brand-blue" />
        <span className="text-xs text-gray-400">Arduino</span>
      </fMotion.div>

      <fMotion.div 
        animate={{ y: [0, -25, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden md:flex absolute glass rounded-2xl p-4 flex-col items-center gap-1 z-10" 
        style={{ left: '12%', top: '70%' }}
      >
        <LuBot className="w-6 h-6 text-brand-blue" />
        <span className="text-xs text-gray-400">Robotics</span>
      </fMotion.div>

      <fMotion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="hidden md:flex absolute glass rounded-2xl p-4 flex-col items-center gap-1 z-10" 
        style={{ left: '82%', top: '65%' }}
      >
        <LuWifi className="w-6 h-6 text-brand-blue" />
        <span className="text-xs text-gray-400">IoT</span>
      </fMotion.div>

      <fMotion.div 
        animate={{ y: [0, -15, 0] }} 
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="hidden md:flex absolute glass rounded-2xl p-4 flex-col items-center gap-1 z-10" 
        style={{ left: '6%', top: '45%' }}
      >
        <LuCodeXml className="w-6 h-6 text-brand-blue" />
        <span className="text-xs text-gray-400">Python</span>
      </fMotion.div>

      <fMotion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        className="hidden md:flex absolute glass rounded-2xl p-4 flex-col items-center gap-1 z-10" 
        style={{ left: '88%', top: '40%' }}
      >
        <LuCamera className="w-6 h-6 text-brand-blue" />
        <span className="text-xs text-gray-400">CV</span>
      </fMotion.div>

      <fMotion.div 
        animate={{ y: [0, -25, 0] }} 
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="hidden md:flex absolute glass rounded-2xl p-4 flex-col items-center gap-1 z-10" 
        style={{ left: '50%', top: '8%' }}
      >
        <LuZap className="w-6 h-6 text-brand-blue" />
        <span className="text-xs text-gray-400">AI</span>
      </fMotion.div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <fMotion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-xs text-gray-400">Available for collaborations</span>
        </fMotion.div>

        <fMotion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-bold text-5xl sm:text-7xl md:text-8xl leading-[1.05] tracking-tight mb-6"
        >
          <span className="text-brand-blue drop-shadow-[0_0_15px_rgba(69,243,255,0.4)] filter">
            {PERSONAL_INFO.name}
          </span>
        </fMotion.h1>

        <fMotion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl mb-6 min-h-[2em]"
        >
          <span className="font-semibold">Robotics & Automation Engineer</span>
          <span className="text-brand-blue cursor-blink ml-1">|</span>
        </fMotion.div>

        <fMotion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10"
        >
          {PERSONAL_INFO.shortIntro}
        </fMotion.p>

        <fMotion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link 
            to="projects" 
            smooth={true} 
            duration={500} 
            className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-8 bg-gradient-to-r from-brand-blue to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium cursor-pointer transition-colors shadow-[0_0_15px_rgba(69,243,255,0.4)] group"
          >
            View Projects 
            <LuArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-8 glass border-brand-purple/40 hover:border-brand-purple hover:bg-brand-purple/10 text-white font-medium cursor-pointer transition-colors"
          >
            Contact Me 
            <LuSparkles className="ml-1 text-brand-purple" />
          </Link>

          <a 
            href="/Arunkannaa_S_Resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-8 glass border-brand-blue/40 hover:border-brand-blue hover:bg-brand-blue/10 text-white font-medium cursor-pointer transition-colors group"
          >
            Download Resume 
            <LuDownload className="ml-1 group-hover:translate-y-0.5 transition-transform text-brand-blue" />
          </a>
        </fMotion.div>
      </div>
    </section>
  );
};

export default Home;
