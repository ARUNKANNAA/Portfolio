import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import SpotlightCard from './SpotlightCard';
import { LuUsers, LuBriefcase, LuAward, LuRocket, LuGraduationCap } from 'react-icons/lu';

const getIcon = (index) => {
  const icons = [LuUsers, LuBriefcase, LuAward, LuRocket, LuGraduationCap];
  const Icon = icons[index % icons.length];
  return <Icon className="w-5 h-5 text-cyan-400" />;
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-block px-3 py-1 rounded-full glass text-xs text-cyan-400 mb-3 uppercase tracking-widest">
            // journey
          </div>
          <h2 className="font-bold text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue/50 via-brand-purple/50 to-transparent md:-translate-x-1/2"></div>

          {EXPERIENCE.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative pl-12 md:pl-0 md:w-1/2 mb-10 ${
                  isLeft ? 'md:pr-12' : 'md:ml-auto md:pl-12'
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-2.5 md:left-auto top-4 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 shadow-[0_0_10px_#45f3ff] -translate-x-1/2 md:translate-x-0 ${
                    isLeft ? 'md:-right-2' : 'md:-left-2'
                  }`}
                ></div>

                <SpotlightCard className="glass neon-border rounded-xl p-5 hover:border-brand-blue/50 transition-colors z-10 bg-black/40 backdrop-blur-md">
                  <div className="flex items-center gap-2 mb-3">
                    {getIcon(index)}
                    <h3 className="font-bold text-lg text-white">
                      {exp.company} — {exp.role}
                    </h3>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex gap-2">
                        <span className="text-brand-purple mt-1 shrink-0">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
