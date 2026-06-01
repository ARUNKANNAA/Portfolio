import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../constants';

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-block px-3 py-1 rounded-full glass text-xs text-cyan-400 mb-3 uppercase tracking-widest">
            // wins
          </div>
          <h2 className="font-bold text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
            Achievements
          </h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-gray-400 -mt-8 mb-14"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple font-bold text-xl">31+</span> wins across national hackathons, project expos, paper presentations & innovation challenges.
        </motion.p>

        <div className="space-y-14">
          
          {/* First Place */}
          {ACHIEVEMENTS.firstPlace && ACHIEVEMENTS.firstPlace.length > 0 && (
            <div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="text-4xl drop-shadow-[0_0_15px_rgba(253,224,71,0.8)] filter">🥇</span>
                <h3 className="font-bold text-2xl text-yellow-300">First Place / First Prize</h3>
                <span className="text-xs text-gray-400 glass px-2 py-1 rounded-full">{ACHIEVEMENTS.firstPlace.length}</span>
                <div className="flex-1 h-px bg-gradient-to-r from-yellow-500/20 to-orange-500/20"></div>
              </motion.div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {ACHIEVEMENTS.firstPlace.map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="glass rounded-xl p-4 relative overflow-hidden border border-yellow-500/30 group"
                  >
                    <div className="absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="relative">
                      <div className="flex items-start gap-2 mb-2">
                        <span className="text-2xl leading-none mt-0.5 drop-shadow-[0_0_10px_rgba(253,224,71,0.8)] filter">🥇</span>
                        <h4 className="font-semibold text-sm leading-snug text-white">{item.title}</h4>
                      </div>
                      <p className="text-xs text-gray-400 pl-7">{item.institution}</p>
                      <p className="text-[11px] pl-7 mt-1 text-yellow-300 font-mono">{item.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Second Place */}
          {ACHIEVEMENTS.secondPlace && ACHIEVEMENTS.secondPlace.length > 0 && (
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="text-4xl drop-shadow-[0_0_15px_rgba(209,213,219,0.8)] filter">🥈</span>
                <h3 className="font-bold text-2xl text-gray-300">Second Place / Second Prize</h3>
                <span className="text-xs text-gray-400 glass px-2 py-1 rounded-full">{ACHIEVEMENTS.secondPlace.length}</span>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-400/20 to-transparent"></div>
              </motion.div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {ACHIEVEMENTS.secondPlace.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="glass rounded-xl p-4 relative overflow-hidden border border-slate-400/30 group"
                  >
                    <div className="absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-br from-slate-400/20 to-cyan-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="relative">
                      <div className="flex items-start gap-2 mb-2">
                        <span className="text-2xl leading-none mt-0.5 drop-shadow-[0_0_10px_rgba(209,213,219,0.8)] filter">🥈</span>
                        <h4 className="font-semibold text-sm leading-snug text-white">{item.title}</h4>
                      </div>
                      <p className="text-xs text-gray-400 pl-7">{item.institution}</p>
                      <p className="text-[11px] pl-7 mt-1 text-slate-200 font-mono">{item.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Third Place */}
          {ACHIEVEMENTS.thirdPlace && ACHIEVEMENTS.thirdPlace.length > 0 && (
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="text-4xl drop-shadow-[0_0_15px_rgba(251,146,60,0.8)] filter">🥉</span>
                <h3 className="font-bold text-2xl text-orange-400">Third Place / Third Prize</h3>
                <span className="text-xs text-gray-400 glass px-2 py-1 rounded-full">{ACHIEVEMENTS.thirdPlace.length}</span>
                <div className="flex-1 h-px bg-gradient-to-r from-orange-500/20 to-transparent"></div>
              </motion.div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {ACHIEVEMENTS.thirdPlace.map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="glass rounded-xl p-4 relative overflow-hidden border border-orange-500/30 group"
                  >
                    <div className="absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="relative">
                      <div className="flex items-start gap-2 mb-2">
                        <span className="text-2xl leading-none mt-0.5 drop-shadow-[0_0_10px_rgba(251,146,60,0.8)] filter">🥉</span>
                        <h4 className="font-semibold text-sm leading-snug text-white">{item.title}</h4>
                      </div>
                      <p className="text-xs text-gray-400 pl-7">{item.institution}</p>
                      <p className="text-[11px] pl-7 mt-1 text-orange-300 font-mono">{item.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Special Awards */}
          {ACHIEVEMENTS.special && ACHIEVEMENTS.special.length > 0 && (
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="text-4xl drop-shadow-[0_0_15px_rgba(69,243,255,0.8)] filter">🏆</span>
                <h3 className="font-bold text-2xl text-brand-blue">Special Awards & Appreciations</h3>
                <span className="text-xs text-gray-400 glass px-2 py-1 rounded-full">{ACHIEVEMENTS.special.length}</span>
                <div className="flex-1 h-px bg-gradient-to-r from-brand-blue/20 to-transparent"></div>
              </motion.div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {ACHIEVEMENTS.special.map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="glass rounded-xl p-4 relative overflow-hidden border border-purple-500/30 group"
                  >
                    <div className="absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="relative">
                      <div className="flex items-start gap-2 mb-2">
                        <span className="text-2xl leading-none mt-0.5 drop-shadow-[0_0_10px_rgba(69,243,255,0.8)] filter">🏆</span>
                        <h4 className="font-semibold text-sm leading-snug text-white">{item.title}</h4>
                      </div>
                      <p className="text-xs text-gray-400 pl-7">{item.institution}</p>
                      <p className="text-[11px] pl-7 mt-1 text-purple-300 font-mono">{item.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
