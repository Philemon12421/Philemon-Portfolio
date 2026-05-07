import { motion } from 'motion/react';
import { Section } from './Section';
import { hero } from '../data';
import { ChevronRight, ArrowDown } from 'lucide-react';

// ── Floating tech icons data ─────────────────────────────────────────────────
const techIcons = [
  { name: 'React',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',          x: '8%',  y: '18%', size: 44, duration: 6,   delay: 0    },
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', x: '88%', y: '12%', size: 38, duration: 7,   delay: 0.5  },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', x: '82%', y: '72%', size: 40, duration: 5.5, delay: 1    },
  { name: 'Python',     src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',         x: '5%',  y: '65%', size: 42, duration: 8,   delay: 1.5  },
  { name: 'Linux',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',           x: '15%', y: '82%', size: 36, duration: 6.5, delay: 0.8  },
  { name: 'Java',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',             x: '92%', y: '45%', size: 40, duration: 7.5, delay: 2    },
  { name: 'Git',        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',               x: '3%',  y: '40%', size: 34, duration: 5,   delay: 1.2  },
  { name: 'HTML5',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',           x: '78%', y: '28%', size: 36, duration: 6,   delay: 0.3  },
  { name: 'CSS3',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',             x: '20%', y: '10%', size: 34, duration: 7,   delay: 1.8  },
  { name: 'Node.js',    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',         x: '70%', y: '85%', size: 38, duration: 6.8, delay: 2.3  },
  { name: 'Figma',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',           x: '40%', y: '5%',  size: 32, duration: 5.5, delay: 0.6  },
  { name: 'VS Code',    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',         x: '55%', y: '92%', size: 36, duration: 7,   delay: 1.4  },
];

// ── Floating icon component ──────────────────────────────────────────────────
const FloatingIcon = ({
  src, name, x, y, size, duration, delay,
}: {
  src: string; name: string; x: string; y: string;
  size: number; duration: number; delay: number;
}) => (
  <motion.div
    className="absolute pointer-events-none select-none"
    style={{ left: x, top: y }}
    initial={{ opacity: 0, scale: 0.4 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: delay + 1.2, duration: 0.6, ease: 'easeOut' }}
  >
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      <motion.div
        whileHover={{ scale: 1.35, rotate: 8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        className="relative group cursor-pointer pointer-events-auto"
      >
        {/* Glow ring */}
        <div
          className="absolute inset-0 rounded-2xl bg-white/20 blur-sm scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ width: size + 8, height: size + 8, top: -4, left: -4 }}
        />
        {/* Glass card */}
        <div
          className="flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-black/10 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-300"
          style={{ width: size + 16, height: size + 16, padding: 8 }}
        >
          <img src={src} alt={name} width={size} height={size} className="drop-shadow-sm" />
        </div>
        {/* Tooltip */}
        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-white/90 backdrop-blur-sm rounded-full text-[9px] font-black text-gray-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm border border-white/50">
          {name}
        </div>
      </motion.div>
    </motion.div>
  </motion.div>
);

// ── Hero ─────────────────────────────────────────────────────────────────────
export const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section className="min-h-screen flex items-center pt-28 pb-16 relative">

      {/* ── Floating tech icons (behind everything) ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {techIcons.map((icon) => (
          <FloatingIcon key={icon.name} {...icon} />
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">

        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/8 border border-accent/20 text-accent rounded-full text-xs font-bold tracking-wide mb-8"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            {hero.badge}
          </motion.div>

          {/* Name */}
          <h1 className="font-black tracking-tight text-brand leading-[0.92] mb-6">
            {hero.name.split(' ').map((word, i) => (
              <motion.span
                key={i}
                className="block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
              >
                {i === 0 ? word : (
                  <>
                    {word}{' '}
                    {i === hero.name.split(' ').length - 1 && (
                      <span className="text-accent">Kusi</span>
                    )}
                  </>
                )}
              </motion.span>
            ))}
          </h1>

          {/* Title line */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="text-lg font-bold text-gray-400 tracking-widest uppercase mb-6"
          >
            {hero.title} <span className="text-accent">/</span> {hero.subtitle}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="text-lg md:text-xl text-gray-500 font-medium mb-10 max-w-lg leading-relaxed"
          >
            {hero.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            {hero.cta.map((button) => (
              <a
                key={button.name}
                href={button.href}
                onClick={(e) => {
                  if (button.href.startsWith('#')) {
                    e.preventDefault();
                    document.querySelector(button.href)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold transition-all duration-200 active:scale-[0.97] ${
                  button.primary
                    ? 'bg-brand text-white hover:bg-brand/90 shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/25'
                    : 'bg-transparent border-2 border-gray-200 text-brand hover:border-brand/30 hover:bg-gray-50'
                }`}
              >
                {button.icon && <button.icon size={16} />}
                {button.name}
                {button.primary && <ChevronRight size={16} />}
              </a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex gap-10"
          >
            {hero.stats.map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-black text-brand">{stat.value}</p>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Decorative ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-[3.5rem] border border-dashed border-accent/25 scale-[1.08] pointer-events-none"
          />

          {/* Soft glow */}
          <div className="absolute inset-4 bg-accent/10 rounded-[3rem] blur-3xl pointer-events-none" />

          {/* Image card */}
          <div className="relative rounded-[3rem] overflow-hidden border-[6px] border-white shadow-[0_24px_60px_-12px_rgba(0,0,0,0.18)] max-w-[440px] w-full bg-gray-100 group">
            <img
              src={hero.profileImage}
              alt={hero.name}
              onError={(e) => {
                const t = e.target as HTMLImageElement;
                t.src = "https://picsum.photos/seed/philemon/600/700";
              }}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Floating name badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg flex items-center gap-3 whitespace-nowrap border border-white"
            >
              <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm font-bold text-brand">Available for hire</span>
            </motion.div>
          </div>

          {/* Decorative blobs */}
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-violet-300/20 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button
        onClick={scrollToProjects}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-300 hover:text-accent transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </Section>
  );
};
