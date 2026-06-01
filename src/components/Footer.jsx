import { PERSONAL_INFO } from '../constants';
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-10 mt-10 border-t border-white/10 bg-black/40 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-brand-blue drop-shadow-[0_0_8px_rgba(69,243,255,0.5)] tracking-wider mb-6">
          ARUNKANNAA
        </h2>
        
        <div className="flex gap-6 mb-8">
          <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full text-[#0A66C2] hover:bg-[#0A66C2]/20 hover:scale-110 transition-all duration-300 shadow-[0_0_10px_rgba(10,102,194,0.1)]">
            <FaLinkedin size={20} />
          </a>
          <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            <FaGithub size={20} />
          </a>
          <a href={PERSONAL_INFO.socials.youtube} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full text-[#FF0000] hover:bg-[#FF0000]/20 hover:scale-110 transition-all duration-300 shadow-[0_0_10px_rgba(255,0,0,0.1)]">
            <FaYoutube size={20} />
          </a>
          <a href={PERSONAL_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full text-[#E1306C] hover:bg-[#E1306C]/20 hover:scale-110 transition-all duration-300 shadow-[0_0_10px_rgba(225,48,108,0.1)]">
            <FaInstagram size={20} />
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 glass rounded-full hover:bg-brand-blue/20 hover:text-brand-blue hover:-translate-y-1 transition-all duration-300">
            <FaEnvelope size={20} />
          </a>
          <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="p-3 glass rounded-full hover:bg-brand-blue/20 hover:text-brand-blue hover:-translate-y-1 transition-all duration-300">
            <FaPhone size={20} />
          </a>
        </div>
        
        <p className="text-gray-500 text-sm">
          &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
