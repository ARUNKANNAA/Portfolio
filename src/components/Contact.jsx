import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { LuPhone, LuMail, LuMapPin, LuLinkedin, LuGithub, LuYoutube, LuInstagram, LuSend } from 'react-icons/lu';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone') || 'N/A',
      company: formData.get('company') || 'N/A',
      project_type: formData.get('project_type') || 'N/A',
      budget: formData.get('budget') || 'N/A',
      timeline: formData.get('timeline') || 'N/A',
      message: formData.get('message'),
      enquiry_type: activeTab === 'contact' ? 'General Contact' : 'Freelancing Enquiry'
    };

    emailjs.send(
      'service_6ky1fse',
      'template_baz2479',
      data,
      { publicKey: 'EclDDQZiC0aLM2Qgg' }
    )
    .then(() => {
      toast.success('Message sent successfully! I will get back to you soon.');
      formRef.current.reset();
    })
    .catch((error) => {
      console.error(error);
      toast.error('Failed to send message. Please try again later.');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 glass neon-border rounded-2xl p-8 bg-[#020202]/90 backdrop-blur-md relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <h2 className="text-3xl font-bold text-white mb-4">Let's build something.</h2>
            <p className="text-gray-400 mb-10 text-sm leading-relaxed">
              Open to collaborations, hackathons, freelance, and tech content opportunities.
            </p>

            <div className="space-y-8 mb-10">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center border border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors">
                  <LuPhone className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Phone</p>
                  <p className="text-sm font-medium text-gray-200">+91 80725 22040</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/50 transition-colors">
                  <LuMail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <p className="text-sm font-medium text-gray-200">mail2sarunkannaa@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center border border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors">
                  <LuMapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Based in</p>
                  <p className="text-sm font-medium text-gray-200">India</p>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-white/5 mb-8"></div>

            <div>
              <p className="text-sm text-gray-400 mb-4">Find me on</p>
              <div className="flex items-center gap-3">
                <a href="https://www.linkedin.com/in/arunkannaa-s21/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/50 hover:scale-110 transition-all shadow-[0_0_10px_rgba(10,102,194,0.2)]">
                  <LuLinkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/ARUNKANNAA" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/50 hover:scale-110 transition-all shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                  <LuGithub className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@SAcraftworld" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-[#FF0000] hover:bg-[#FF0000]/10 hover:border-[#FF0000]/50 hover:scale-110 transition-all shadow-[0_0_10px_rgba(255,0,0,0.2)]">
                  <LuYoutube className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/arun_hobbies?igsh=MXpheTlzeXd3ZHF3" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-[#E1306C] hover:bg-[#E1306C]/10 hover:border-[#E1306C]/50 hover:scale-110 transition-all shadow-[0_0_10px_rgba(225,48,108,0.2)]">
                  <LuInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            {/* Toggle Switch */}
            <div className="glass neon-border rounded-2xl p-1 flex bg-[#020202]/90">
              <button 
                onClick={() => setActiveTab('contact')}
                className={`flex-1 py-3 px-6 rounded-xl text-sm font-medium transition-all duration-300 ${activeTab === 'contact' ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                Contact
              </button>
              <button 
                onClick={() => setActiveTab('freelance')}
                className={`flex-1 py-3 px-6 rounded-xl text-sm font-medium transition-all duration-300 ${activeTab === 'freelance' ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                Freelancing Enquiry
              </button>
            </div>

            {/* Form Card */}
            <div className="glass neon-border rounded-2xl p-6 md:p-8 bg-[#020202]/90 relative overflow-hidden transition-all duration-500">
              {activeTab === 'freelance' && (
                <div className="mb-6 animate-fade-in">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">Freelancing Enquiry</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Looking for Embedded Systems, IoT, Robotics, Automation, AI, Computer Vision, Raspberry Pi, ESP32, or Prototype Development solutions? Let's work together.
                  </p>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-400">Full Name *</label>
                    <input 
                      required 
                      type="text" 
                      name="name"
                      className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-400">Email Address *</label>
                    <input 
                      required 
                      type="email" 
                      name="email"
                      className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {activeTab === 'freelance' && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-400">WhatsApp Number *</label>
                        <input 
                          required
                          type="tel" 
                          name="phone"
                          className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                          placeholder="Your WhatsApp Number"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-400">Company / Organization (Optional)</label>
                        <input 
                          type="text" 
                          name="company"
                          className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-medium text-gray-400">Project Type *</label>
                      <select 
                        required 
                        name="project_type"
                        className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors [&>option]:bg-[#020202]"
                      >
                        <option value="">Select an option</option>
                        <option value="Embedded Systems">Embedded Systems</option>
                        <option value="IoT Development">IoT Development</option>
                        <option value="Robotics Project">Robotics Project</option>
                        <option value="Automation System">Automation System</option>
                        <option value="Computer Vision">Computer Vision</option>
                        <option value="AI Solution">AI Solution</option>
                        <option value="ESP32 Project">ESP32 Project</option>
                        <option value="Arduino Project">Arduino Project</option>
                        <option value="Raspberry Pi Project">Raspberry Pi Project</option>
                        <option value="Prototype Development">Prototype Development</option>
                        <option value="Workshop / Technical Session">Workshop / Technical Session</option>
                        <option value="Research & Development">Research & Development</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-400">Budget Range *</label>
                        <select 
                          required 
                          name="budget"
                          className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors [&>option]:bg-[#020202]"
                        >
                          <option value="">Select Budget</option>
                          <option value="₹800 to ₹5,000">₹800 to ₹5,000</option>
                          <option value="₹5,000 to ₹10,000">₹5,000 to ₹10,000</option>
                          <option value="₹10,000 to ₹20,000">₹10,000 to ₹20,000</option>
                          <option value="₹20,000 to ₹30,000">₹20,000 to ₹30,000</option>
                          <option value="Above ₹30,000">Above ₹30,000</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-400">Expected Timeline *</label>
                        <select 
                          required 
                          name="timeline"
                          className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors [&>option]:bg-[#020202]"
                        >
                          <option value="">Select Timeline</option>
                          <option value="Less than 1 Week">Less than 1 Week</option>
                          <option value="1–2 Weeks">1–2 Weeks</option>
                          <option value="2–4 Weeks">2–4 Weeks</option>
                          <option value="1–2 Months">1–2 Months</option>
                          <option value="Flexible">Flexible</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-400">
                    {activeTab === 'contact' ? 'Message *' : 'Project Description *'}
                  </label>
                  <textarea 
                    required 
                    name="message"
                    rows="4"
                    className={`w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors resize-none ${activeTab === 'contact' ? 'focus:border-cyan-500' : 'focus:border-purple-500'}`}
                    placeholder={activeTab === 'contact' ? "How can I help you?" : "Tell me about your project..."}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                    loading ? 'bg-gray-600 cursor-not-allowed' : 
                    'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:scale-[1.02] shadow-[0_0_20px_rgba(199,0,255,0.4)]'
                  }`}
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      {activeTab === 'contact' ? 'Send Message' : 'Send Freelancing Enquiry'} <LuSend className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
                
                {activeTab === 'freelance' && (
                  <p className="text-xs text-gray-500 text-center mt-6 px-4">
                    Open for freelance projects, technical consulting, prototype development, workshops, hackathons, and innovative collaborations in Robotics, IoT, Embedded Systems, and AI.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
