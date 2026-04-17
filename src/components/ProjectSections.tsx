import { motion } from 'motion/react';
import { Section, SectionTitle } from './Section';
import { projects, contactDetails } from '../data';
import { ExternalLink, Mail, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react';

export const Projects = () => (
  <Section id="projects">
    <SectionTitle
      subtitle="Portfolio"
      title="Latest works & projects."
      align="center"
      desc="A selection of real-world applications built with care and attention to detail."
    />
    <div className="grid md:grid-cols-2 gap-6 mt-4">
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group relative overflow-hidden rounded-[2.5rem] bg-gray-100 aspect-[16/10] cursor-pointer"
        >
          {/* GIF preview — plays automatically, loops forever */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand/95 via-brand/60 to-brand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-8">
            {/* Tags */}
            <div className="flex gap-2 mb-3 flex-wrap">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-white/15 backdrop-blur-sm rounded-lg text-white/80 text-[10px] font-bold uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
              {project.inProgress && (
                <span className="px-2.5 py-1 bg-accent/90 rounded-lg text-white text-[10px] font-black uppercase tracking-wide">
                  In Progress
                </span>
              )}
            </div>

            <span className="text-accent font-bold text-xs uppercase tracking-widest mb-1">
              {project.category}
            </span>
            <h3 className="text-2xl font-black text-white mb-2 leading-tight">
              {project.title}
            </h3>
            <p className="text-white/70 text-sm font-medium mb-5 leading-relaxed">
              {project.description}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white font-bold text-sm w-fit group/btn hover:text-accent transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              View Live Project
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Always-visible title chip (fades on hover) */}
          <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
            <span className="text-xs font-bold text-brand">{project.title}</span>
          </div>

          {/* In-progress badge always visible */}
          {project.inProgress && (
            <div className="absolute top-5 right-5 bg-accent px-3 py-1.5 rounded-full group-hover:opacity-0 transition-opacity pointer-events-none">
              <span className="text-[10px] font-black text-white uppercase tracking-wide">
                In Progress
              </span>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  </Section>
);

export const Contact = () => {
  return (
    <Section id="contact" className="bg-brand text-white">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-[0.2em] mb-6"
          >
            <span className="block w-6 h-px bg-accent" />
            Get in touch
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] mb-6"
          >
            Let's build something{' '}
            <span className="text-accent">impactful</span> together.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 font-medium text-lg mb-12 max-w-md leading-relaxed"
          >
            Open to freelance projects, full-time roles, or creative collaborations. Let's connect.
          </motion.p>

          <div className="space-y-6">
            {[
              { icon: Mail,   label: "Email",    value: contactDetails.email,    href: `mailto:${contactDetails.email}` },
              { icon: Phone,  label: "Phone",    value: contactDetails.phone,    href: `tel:${contactDetails.phone}` },
              { icon: MapPin, label: "Location", value: contactDetails.location, href: null },
            ].map(({ icon: Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="flex items-center gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="text-accent" size={18} />
                </div>
                <div>
                  <p className="text-white/40 font-bold uppercase text-[10px] tracking-widest mb-0.5">
                    {label}
                  </p>
                  {href ? (
                    <a href={href} className="text-base font-bold text-white hover:text-accent transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-base font-bold text-white">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex gap-3 mt-10"
          >
            {contactDetails.socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-accent hover:bg-white/15 hover:border-accent/40 transition-all duration-200"
              >
                <s.icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-10 text-brand shadow-2xl"
        >
          <h3 className="text-xl font-black mb-7">Send a message</h3>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Name",  type: "text",  placeholder: "John Doe" },
                { label: "Email", type: "email", placeholder: "john@example.com" },
              ].map(({ label, type, placeholder }) => (
                <div key={label} className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                    {label}
                  </label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    className="w-full px-4 py-3.5 bg-gray-50 rounded-xl border-2 border-transparent focus:border-accent focus:bg-white outline-none transition-all text-sm font-medium"
                  />
                </div>
              ))}
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Subject</label>
              <input
                type="text"
                placeholder="What's this about?"
                className="w-full px-4 py-3.5 bg-gray-50 rounded-xl border-2 border-transparent focus:border-accent focus:bg-white outline-none transition-all text-sm font-medium"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Message</label>
              <textarea
                rows={4}
                placeholder="How can I help you?"
                className="w-full px-4 py-3.5 bg-gray-50 rounded-xl border-2 border-transparent focus:border-accent focus:bg-white outline-none transition-all text-sm font-medium resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-brand text-white rounded-2xl font-black text-sm flex items-center justify-center gap-2.5 hover:bg-brand/90 transition-all shadow-lg active:scale-[0.98]"
            >
              Send Message
              <Send size={16} />
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

export const Footer = () => (
  <footer className="py-14 border-t border-gray-100">
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-xl font-black tracking-tight text-brand">
          POK<span className="text-accent text-2xl leading-none">.</span>
        </span>
        <div className="flex gap-4">
          {contactDetails.socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/40 transition-all duration-200 hover:-translate-y-0.5"
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-400 font-medium">
          © {new Date().getFullYear()} Philemon Osei Kusi
        </p>
      </div>
    </div>
  </footer>
);
