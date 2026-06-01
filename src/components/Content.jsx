import { motion } from 'framer-motion';
import { LuYoutube, LuInstagram, LuArrowRight } from 'react-icons/lu';
import { PERSONAL_INFO } from '../constants';

const Content = () => {
  return (
    <section id="content" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-block px-3 py-1 rounded-full glass text-xs text-cyan-400 mb-3 uppercase tracking-widest">
            // create
          </div>
          <h2 className="font-bold text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
            Content Creator
          </h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Sharing tech tutorials, DIY electronics, robotics projects, engineering builds, and creative tech content with a growing community.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.a
            href={PERSONAL_INFO.socials.youtube}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group glass neon-border rounded-2xl p-8 relative overflow-hidden block"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-500/20 rounded-full blur-3xl group-hover:bg-red-500/30 transition-colors"></div>
            <LuYoutube className="w-12 h-12 text-red-500 mb-4 drop-shadow-[0_0_20px_rgba(239,68,68,0.6)]" />
            <h3 className="font-bold text-2xl mb-2 text-white">YouTube</h3>
            <p className="text-gray-400 mb-4">@SAcraftworld — robotics projects, electronics tutorials and engineering builds.</p>
            <div className="inline-flex items-center text-red-400 font-medium">
              Visit Channel <LuArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>

          <motion.a
            href={PERSONAL_INFO.socials.instagram}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group glass neon-border rounded-2xl p-8 relative overflow-hidden block"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full blur-3xl group-hover:bg-pink-500/30 transition-colors"></div>
            <LuInstagram className="w-12 h-12 text-pink-500 mb-4 drop-shadow-[0_0_20px_rgba(236,72,153,0.6)]" />
            <h3 className="font-bold text-2xl mb-2 text-white">Instagram</h3>
            <p className="text-gray-400 mb-4">@arun_hobbies — creative tech, DIY builds, and behind-the-scenes engineering.</p>
            <div className="inline-flex items-center text-pink-400 font-medium">
              Follow <LuArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Content;
