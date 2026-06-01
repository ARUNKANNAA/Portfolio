import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { LuTrophy, LuBot, LuCpu, LuYoutube } from 'react-icons/lu';

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-block px-3 py-1 rounded-full glass text-xs text-brand-blue mb-3 uppercase tracking-widest">
            // who
          </div>
          <h2 className="font-bold text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 relative"
          >
            <div className="relative neon-border rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(69,243,255,0.2)] bg-black/40 flex items-center justify-center">
              <img src="/assets/arun-profile-BI2R_JD0.jpg" alt="Arunkannaa S" className="w-full h-auto block" />
            </div>
            {/* Dashed rotating border element matching Lovable */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-dashed border-brand-blue/40 animate-[spin_10s_linear_infinite]"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 space-y-4 text-gray-300 leading-relaxed text-[15px]"
          >
            {PERSONAL_INFO.about.split('\n\n').map((paragraph, idx) => {
              let highlightedText = paragraph
                .replace(/Robotics & Automation/g, '<span class="text-white font-semibold">Robotics & Automation</span>')
                .replace(/Embedded Systems, IoT, Robotics, AI, and Computer Vision/g, '<span class="text-brand-blue">Embedded Systems, IoT, Robotics, AI, and Computer Vision</span>')
                .replace(/ESP32, Arduino, Raspberry Pi/g, '<span class="text-brand-purple">ESP32, Arduino, Raspberry Pi</span>')
                .replace(/GUVI Campus Ambassador/g, '<span class="text-brand-blue">GUVI Campus Ambassador</span>')
                .replace(/YouTube and Instagram/g, '<span class="text-brand-purple">YouTube and Instagram</span>');

              return (
                <p key={idx} dangerouslySetInnerHTML={{ __html: highlightedText }} />
              );
            })}
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass neon-border rounded-2xl p-6 text-center group cursor-default"
          >
            <LuTrophy className="w-8 h-8 mx-auto mb-3 text-brand-blue group-hover:text-brand-purple transition-colors" />
            <div className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">31+</div>
            <div className="text-sm text-gray-400 mt-1">Hackathon & Expo Wins</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass neon-border rounded-2xl p-6 text-center group cursor-default"
          >
            <LuBot className="w-8 h-8 mx-auto mb-3 text-brand-blue group-hover:text-brand-purple transition-colors" />
            <div className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Robotics</div>
            <div className="text-sm text-gray-400 mt-1">& IoT Developer</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass neon-border rounded-2xl p-6 text-center group cursor-default"
          >
            <LuCpu className="w-8 h-8 mx-auto mb-3 text-brand-blue group-hover:text-brand-purple transition-colors" />
            <div className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Embedded</div>
            <div className="text-sm text-gray-400 mt-1">Systems Enthusiast</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass neon-border rounded-2xl p-6 text-center group cursor-default"
          >
            <LuYoutube className="w-8 h-8 mx-auto mb-3 text-brand-blue group-hover:text-brand-purple transition-colors" />
            <div className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Tech</div>
            <div className="text-sm text-gray-400 mt-1">Content Creator</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
