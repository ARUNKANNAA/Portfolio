import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';
import { LuGraduationCap } from 'react-icons/lu';
import SpotlightCard from './SpotlightCard';

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-block px-3 py-1 rounded-full glass text-xs text-brand-blue mb-3 uppercase tracking-widest">
            // education
          </div>
          <h2 className="font-bold text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
            Education
          </h2>
        </motion.div>

        <div className="grid gap-6">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard className="glass neon-border p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-6 bg-black/40 backdrop-blur-md">
                <div className="w-14 h-14 rounded-xl bg-brand-blue/10 flex items-center justify-center border border-brand-blue/20 shrink-0">
                  <LuGraduationCap className="w-8 h-8 text-brand-blue" />
                </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <h4 className="text-gray-400 font-medium mb-2">{edu.institution}</h4>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold glass border-cyan-500/30 text-cyan-300">
                    {edu.duration}
                  </span>
                  <span>{edu.score}</span>
                </div>
              </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
