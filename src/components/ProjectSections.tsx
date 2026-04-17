import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Section, SectionTitle } from './Section';
import { projects, contactDetails } from '../data';
import { Mail, Phone, MapPin, Send, ArrowUpRight, ExternalLink } from 'lucide-react';

/* ─────────────────────────────────────────────
   PROJECT SECTION
───────────────────────────────────────────── */
export const Projects = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  // First project = featured (wide), rest = grid
  const [featured, ...rest] = projects;

  return (
    <Section id="projects" className="bg-gray-50/40">
      <SectionTitle
        subtitle="Portfolio"
        title="Selected works."
        align="left"
        desc="Real projects built and shipped — from idea to live product."
      />

      <div className="space-y-4 mt-2">

        {/* ── FEATURED CARD (wide) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onHoverStart={() => setHovered(-1)}
          onHoverEnd={() => setHovered(null)}
          className="group relative rounded-[2rem] overflow-hidden bg-brand cursor-pointer"
          style={{ minHeight: 420 }}
        >
          {/* GIF fills the card */}
          <img
            src={featured.image}
            alt={featured.title}
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-700 group-hover:scale-105 scale-100 transition-transform"
          />

          {/* Gradient overlay always visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand/95 via-brand/70 to-transparent" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-between h-full p-10 md:p-14" style={{ minHeight: 420 }}>
            <div className="flex items-start justify-between">
              {/* Number label */}
              <span className="text-[80px] font-black leading-none text-white/10 select-none">01</span>

              {/* Tags top-right */}
              <div className="flex gap-2 flex-wrap justify-end">
                {featured.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-[10px] font-bold text-white/70 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
                {featured.category}
              </span>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-3 leading-tight">
                {featured.title}
              </h3>
              <p className="text-white/60 text-base font-medium max-w-md mb-8 leading-relaxed">
                {featured.description}
              </p>
              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-accent text-white rounded-xl font-bold text-sm hover:bg-accent/90 transition-all group/btn active:scale-95"
              >
                View Live Project
                <ArrowUpRight size={16} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── GRID: remaining 3 cards ── */}
        <div className="grid md:grid-cols-3 gap-4">
          {rest.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 + 0.1 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              className="group relative rounded-[2rem] overflow-hidden bg-brand cursor-pointer flex flex-col"
              style={{ minHeight: 320 }}
            >
              {/* GIF */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-55 transition-all duration-700 group-hover:scale-105 scale-100"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/80 to-brand/30" />

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between h-full p-7" style={{ minHeight: 320 }}>
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <span className="text-[52px] font-black leading-none text-white/10 select-none">
                    0{i + 2}
                  </span>
                  <div className="flex flex-col items-end gap-2">
                    {project.inProgress && (
                      <span className="px-2.5 py-1 bg-accent rounded-full text-[9px] font-black text-white uppercase tracking-widest">
                        In Progress
                      </span>
                    )}
                    <div className="flex gap-1.5 flex-wrap justify-end">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 bg-white/10 border border-white/10 rounded-full text-[9px] font-bold text-white/60 uppercase tracking-wide">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom */}
                <div>
                  <span className="text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-black text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-xs font-medium leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Link — slides up on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: hovered === i ? 1 : 0, y: hovered === i ? 0 : 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white font-bold text-xs border-b border-white/30 pb-0.5 hover:text-accent hover:border-accent transition-colors group/btn"
                    >
                      View Live Project
                      <ArrowUpRight size={12} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </motion.div>

                  {/* Static link icon when not hovered */}
                  <motion.div
                    animate={{ opacity: hovered === i ? 0 : 1 }}
                    transition={{ duration: 0.15 }}
                    className="absolute bottom-7 right-7"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                      <ExternalLink size={14} className="text-white/50" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </Section>
  );
};

/* ─────────────────────────────────────────────
   CONTACT SECTION
───────────────────────────────────────────── */
export const Contact = () => (
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
                <p className="text-white/40 font-bold uppercase text-[10px] tracking-widest mb-0.5">{label}</p>
                {href ? (
                  <a href={href} className="text-base font-bold text-white hover:text-accent transition-colors">{value}</a>
                ) : (
                  <p className="text-base font-bold text-white">{value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

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

      {/* Right: Form */}
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
              { label: "Name",  type: "text",  placeholder: "Philemon Ose" },
              { label: "Email", type: "email", placeholder: "philemonkusi292@gmail.com" },
            ].map(({ label, type, placeholder }) => (
              <div key={label} className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400">{label}</label>
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

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
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
