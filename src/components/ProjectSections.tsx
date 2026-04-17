import { motion } from 'motion/react';
import { Section, SectionTitle } from './Section';
import { projects, contactDetails } from '../data';
import { ExternalLink, Mail, Phone, MapPin, Send } from 'lucide-react';

export const Projects = () => (
  <Section id="projects">
    <SectionTitle subtitle="Portfolio" title="Latest works & digital creations." align="center" />
    <div className="grid md:grid-cols-2 gap-8 mt-12">
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group relative overflow-hidden rounded-[3rem] bg-gray-100 aspect-[4/3]"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
            <span className="text-accent font-bold text-sm uppercase tracking-widest mb-2">{project.category}</span>
            <h3 className="text-3xl font-bold text-white mb-6 leading-tight">{project.title}</h3>
            <a 
              href={project.link} 
              className="flex items-center gap-2 text-white font-bold w-fit border-b-2 border-white pb-1 group/btn transition-all hover:text-accent hover:border-accent"
            >
              View Project
              <ExternalLink size={18} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

export const Contact = () => {
  return (
    <Section id="contact" className="bg-brand text-white">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Get in touch</span>
          <h2 className="text-5xl md:text-6xl font-black mb-12 tracking-tight">Let's build something impactful together.</h2>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                <Mail className="text-accent" />
              </div>
              <div>
                <p className="text-white/50 font-bold uppercase text-xs tracking-widest mb-1">Email</p>
                <a href={`mailto:${contactDetails.email}`} className="text-xl font-bold hover:text-accent transition-colors">
                  {contactDetails.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                <Phone className="text-accent" />
              </div>
              <div>
                <p className="text-white/50 font-bold uppercase text-xs tracking-widest mb-1">Phone</p>
                <a href={`tel:${contactDetails.phone}`} className="text-xl font-bold hover:text-accent transition-colors">
                  {contactDetails.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                <MapPin className="text-accent" />
              </div>
              <div>
                <p className="text-white/50 font-bold uppercase text-xs tracking-widest mb-1">Location</p>
                <p className="text-xl font-bold">{contactDetails.location}</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] p-10 md:p-12 text-brand shadow-2xl"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-accent focus:bg-white outline-none transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-accent focus:bg-white outline-none transition-all font-medium"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Message</label>
              <textarea 
                rows={4} 
                placeholder="How can I help you?" 
                className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-accent focus:bg-white outline-none transition-all font-medium resize-none"
              ></textarea>
            </div>
            <button className="w-full py-5 bg-accent text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-accent/90 transition-all shadow-lg active:scale-[0.98]">
              Send Message
              <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  )
};

export const Footer = () => (
    <footer className="py-20 border-t border-gray-100">
        <div className="container mx-auto px-6 text-center">
            <div className="mb-8">
                <span className="text-2xl font-black tracking-tighter text-brand">Philemon Osei Kusi<span className="text-accent underline">.</span></span>
            </div>
            <div className="flex justify-center gap-6 mb-12">
                {contactDetails.socials.map((social) => (
                    <a 
                        key={social.name} 
                        href={social.href}
                        className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-all hover:-translate-y-1"
                    >
                        <social.icon size={20} />
                    </a>
                ))}
            </div>
            <p className="text-gray-400 font-medium italic">
                © {new Date().getFullYear()} Philemon Osei Kusi. Crafted with passion and technology.
            </p>
        </div>
    </footer>
);
