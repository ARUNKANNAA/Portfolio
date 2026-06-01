import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { PROJECTS } from '../constants';
import { LuExternalLink, LuZap, LuCamera, LuSparkles, LuBot, LuCircuitBoard, LuWifi, LuX, LuCheck } from 'react-icons/lu';
import SpotlightCard from './SpotlightCard';

// Helper to assign specific icons, gradients, and original images to a project ID
const getProjectVisuals = (id) => {
  switch (id) {
    case 1:
      return { gradient: 'from-cyan-500/30 to-blue-600/30', Icon: LuZap, image: './assets/proj-remind-BqU5D3rs.jpg' };
    case 2:
      return { gradient: 'from-purple-500/30 to-pink-500/30', Icon: LuCamera, image: './assets/proj-aid4all-R-wteSGg.jpg' };
    case 3:
      return { gradient: 'from-emerald-500/30 to-cyan-500/30', Icon: LuSparkles, image: './assets/proj-nitroasis-BpOcN_iH.jpg' };
    case 4:
      return { gradient: 'from-pink-500/30 to-purple-600/30', Icon: LuBot, image: './assets/proj-twinkle-CBqGlOp6.jpg' };
    case 5:
      return { gradient: 'from-blue-500/30 to-indigo-600/30', Icon: LuCamera, image: './assets/proj-cam-Bh8gvj2r.jpg' };
    case 6:
      return { gradient: 'from-orange-500/30 to-red-500/30', Icon: LuZap, image: null };
    case 7:
      return { gradient: 'from-teal-500/30 to-blue-500/30', Icon: LuWifi, image: './assets/proj-car-6qhgRtZu.jpg' };
    case 8:
      return { gradient: 'from-yellow-500/30 to-orange-500/30', Icon: LuCircuitBoard, image: './assets/proj-solar-BExGnqLX.jpg' };
    case 9:
      return { gradient: 'from-red-500/30 to-pink-500/30', Icon: LuZap, image: './assets/speaker.jpg' };
    case 10:
      return { gradient: 'from-blue-500/30 to-cyan-500/30', Icon: LuCircuitBoard, image: './assets/fishtank.jpg' };
    default:
      return { gradient: 'from-cyan-500/30 to-purple-500/30', Icon: LuBot, image: null };
  }
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedProject]);

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-block px-3 py-1 rounded-full glass text-xs text-brand-blue mb-3 uppercase tracking-widest">
            // work
          </div>
          <h2 className="font-bold text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => {
            const { gradient, Icon, image } = getProjectVisuals(project.id);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
                onClick={() => setSelectedProject(project)}
              >
                <SpotlightCard className="group relative glass neon-border rounded-2xl overflow-hidden cursor-pointer flex flex-col h-full bg-black/40 backdrop-blur-md">
                  {/* Image Placeholder or Actual Image */}
                  <div className={`h-44 bg-gradient-to-br ${gradient} relative overflow-hidden flex items-center justify-center shrink-0`}>
                    
                    {image ? (
                      <img 
                        src={image} 
                        alt={project.title} 
                        loading="lazy" 
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" 
                      />
                    ) : (
                      <Icon className="w-20 h-20 text-white/80 relative z-10 drop-shadow-[0_0_20px_rgba(69,243,255,0.6)] group-hover:scale-110 transition-transform duration-500" />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#020202]/90 via-[#020202]/30 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-0 grid-bg opacity-30 z-0 pointer-events-none"></div>
                    
                    {/* Top Right Mini Icon */}
                    <Icon className="absolute top-3 right-3 w-6 h-6 text-brand-blue/90 drop-shadow-[0_0_8px_rgba(69,243,255,0.8)] z-20" />
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-brand-blue transition-colors text-white line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                      {project.hardware?.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-1 rounded-md bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
                          {tech}
                        </span>
                      ))}
                      {project.technologies?.slice(0, 2).map((tech, idx) => (
                        <span key={`tech-${idx}`} className="text-[10px] px-2 py-1 rounded-md bg-brand-purple/10 text-brand-purple border border-brand-purple/20">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-xs text-brand-purple font-medium mt-2">
                      View details <LuExternalLink className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass neon-border rounded-2xl shadow-2xl bg-[#020202]/95 flex flex-col custom-scrollbar"
              >
                {/* Modal Header Image Area */}
                <div className={`relative w-full flex-shrink-0 rounded-t-2xl overflow-hidden bg-gradient-to-br ${getProjectVisuals(selectedProject.id).gradient} flex items-center justify-center p-6 min-h-[250px] md:min-h-[300px]`}>
                  {getProjectVisuals(selectedProject.id).image ? (
                    <img 
                      src={getProjectVisuals(selectedProject.id).image} 
                      alt={selectedProject.title} 
                      className="relative z-10 w-full max-h-[400px] object-contain rounded-lg shadow-2xl drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
                    />
                  ) : (
                    <div className="relative z-10 w-full h-48 flex items-center justify-center">
                      <LuCircuitBoard className="w-24 h-24 text-white/40 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full glass border border-white/20 text-white hover:bg-brand-purple hover:scale-110 transition-all z-20 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                  >
                    <LuX className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Content Area */}
                <div className="p-6 md:p-8 bg-[#020202]/95 backdrop-blur-xl border-t border-white/10 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-pink-500"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-300 mb-4 drop-shadow-[0_0_10px_rgba(69,243,255,0.3)]">
                    {selectedProject.title}
                  </h2>
                  
                  <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {selectedProject.features && selectedProject.features.length > 0 && (
                    <div className="glass neon-border p-5 rounded-xl bg-white/5 mb-6">
                      <h3 className="text-[16px] font-bold text-brand-purple mb-4 flex items-center gap-2">
                        <LuSparkles className="w-4 h-4 text-brand-blue" /> Key Features
                      </h3>
                      <ul className="space-y-3">
                        {selectedProject.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-200 flex items-start gap-2">
                            <span className="text-brand-blue text-xs mt-1 shrink-0 drop-shadow-[0_0_5px_rgba(69,243,255,0.8)]">▸</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedProject.hardware && selectedProject.hardware.length > 0 && (
                    <div className="glass neon-border p-5 rounded-xl bg-white/5 mb-6">
                      <h3 className="text-[16px] font-bold text-cyan-400 mb-4 flex items-center gap-2">
                        <LuCircuitBoard className="w-4 h-4 text-cyan-300" /> Hardware Used
                      </h3>
                      <div className="flex flex-col gap-2">
                        {selectedProject.hardware.map((item, idx) => (
                          <div key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                            <span className="text-cyan-400 text-xs mt-1 shrink-0">▸</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                    <div className="glass neon-border p-5 rounded-xl bg-white/5">
                      <h3 className="text-[16px] font-bold text-pink-400 mb-4 flex items-center gap-2">
                        <LuBot className="w-4 h-4 text-pink-300" /> Technology Stack
                      </h3>
                      <div className="flex flex-col gap-2">
                        {selectedProject.technologies.map((item, idx) => (
                          <div key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                            <span className="text-pink-400 text-xs mt-1 shrink-0">▸</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default Projects;
