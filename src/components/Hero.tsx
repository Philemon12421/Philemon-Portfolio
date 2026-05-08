import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react';
import { Section } from './Section';
import { hero } from '../data';
import { ChevronRight, ArrowDown } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   TECH ICONS
───────────────────────────────────────────────────────────── */
const TECH_ICONS = [
  { name: 'React',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',           color: '#61DAFB' },
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6' },
  { name: 'JavaScript',src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
  { name: 'Python',     src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',         color: '#3776AB' },
  { name: 'Linux',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',           color: '#FCC624' },
  { name: 'Java',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',             color: '#007396' },
  { name: 'Git',        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',               color: '#F05032' },
  { name: 'HTML5',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',           color: '#E34F26' },
  { name: 'CSS3',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',             color: '#1572B6' },
  { name: 'Node.js',   src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',         color: '#339933' },
  { name: 'Figma',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',           color: '#F24E1E' },
  { name: 'VS Code',    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',         color: '#007ACC' },
  { name: 'MongoDB',    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',       color: '#47A248' },
  { name: 'Firebase',   src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',        color: '#FFCA28' },
];

/* fixed positions — left/right columns only so center text is always clear */
const ICON_SLOTS = [
  { x: '2%',  y: '8%',  size: 44, floatDur: 6.2, floatDelay: 0,    rotateDur: 18 },
  { x: '10%', y: '58%', size: 38, floatDur: 7.1, floatDelay: 1.1,  rotateDur: 22 },
  { x: '3%',  y: '82%', size: 40, floatDur: 5.8, floatDelay: 0.5,  rotateDur: 15 },
  { x: '18%', y: '35%', size: 34, floatDur: 8.0, floatDelay: 2.0,  rotateDur: 25 },
  { x: '14%', y: '90%', size: 36, floatDur: 6.5, floatDelay: 0.8,  rotateDur: 20 },
  { x: '22%', y: '72%', size: 32, floatDur: 7.4, floatDelay: 1.6,  rotateDur: 28 },
  { x: '76%', y: '6%',  size: 42, floatDur: 5.5, floatDelay: 0.3,  rotateDur: 16 },
  { x: '88%', y: '28%', size: 40, floatDur: 6.9, floatDelay: 1.4,  rotateDur: 21 },
  { x: '82%', y: '60%', size: 36, floatDur: 7.6, floatDelay: 0.7,  rotateDur: 19 },
  { x: '91%', y: '78%', size: 34, floatDur: 5.9, floatDelay: 2.2,  rotateDur: 24 },
  { x: '72%', y: '88%', size: 38, floatDur: 6.3, floatDelay: 1.0,  rotateDur: 17 },
  { x: '78%', y: '44%', size: 32, floatDur: 7.8, floatDelay: 1.8,  rotateDur: 26 },
  { x: '68%', y: '70%', size: 36, floatDur: 6.6, floatDelay: 0.4,  rotateDur: 23 },
  { x: '92%', y: '50%', size: 30, floatDur: 8.2, floatDelay: 2.5,  rotateDur: 30 },
];

/* ─────────────────────────────────────────────────────────────
   FLOATING CODE SNIPPETS
───────────────────────────────────────────────────────────── */
const CODE_SNIPPETS = [
  { text: 'const build = () => 🚀',     x: '5%',  y: '22%', dur: 9,  delay: 0   },
  { text: 'git commit -m "shipped ✓"',  x: '6%',  y: '46%', dur: 11, delay: 1.5 },
  { text: '<Component />',              x: '4%',  y: '70%', dur: 8,  delay: 0.8 },
  { text: 'npm run build',              x: '70%', y: '15%', dur: 10, delay: 2   },
  { text: 'export default App',         x: '68%', y: '82%', dur: 9,  delay: 0.3 },
  { text: 'useState<T>()',              x: '73%', y: '52%', dur: 12, delay: 1.2 },
  { text: '{ ...spread }',             x: '20%', y: '16%', dur: 7,  delay: 3   },
  { text: 'async / await ✨',           x: '16%', y: '94%', dur: 10, delay: 0.6 },
  { text: 'import React from "react"',  x: '75%', y: '36%', dur: 8,  delay: 1.8 },
  { text: 'tailwind.config.js',         x: '8%',  y: '36%', dur: 11, delay: 2.4 },
];

/* ─────────────────────────────────────────────────────────────
   PARTICLE CANVAS
───────────────────────────────────────────────────────────── */
const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);

    type P = { x: number; y: number; vx: number; vy: number; r: number; alpha: number; pulse: number };
    const pts: P[] = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.4,
      alpha: Math.random() * 0.4 + 0.08,
      pulse: Math.random() * Math.PI * 2,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.pulse += 0.018;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        const a = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,210,160,${a})`;
        ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99,210,160,${0.10 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.55 }} />;
};

/* ─────────────────────────────────────────────────────────────
   GRID BACKGROUND
───────────────────────────────────────────────────────────── */
const GridBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.04 }}>
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#1a1a2e" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)"/>
    </svg>
  </div>
);

/* ─────────────────────────────────────────────────────────────
   GLOW ORBS
───────────────────────────────────────────────────────────── */
const GlowOrbs = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <motion.div
      className="absolute rounded-full"
      style={{ width: 520, height: 520, top: -180, left: -160, background: 'radial-gradient(circle, rgba(99,210,160,0.10) 0%, transparent 70%)' }}
      animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute rounded-full"
      style={{ width: 400, height: 400, bottom: -100, right: -100, background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)' }}
      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
    />
    <motion.div
      className="absolute rounded-full"
      style={{ width: 280, height: 280, top: '40%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(99,210,160,0.05) 0%, transparent 70%)' }}
      animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
    />
  </div>
);

/* ─────────────────────────────────────────────────────────────
   ROTATING RINGS
───────────────────────────────────────────────────────────── */
const RotatingRings = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
    {[280, 420, 560].map((size, i) => (
      <motion.div
        key={size}
        className="absolute rounded-full border border-dashed"
        style={{
          width: size, height: size,
          borderColor: i === 0 ? 'rgba(99,210,160,0.10)' : i === 1 ? 'rgba(139,92,246,0.06)' : 'rgba(99,210,160,0.04)',
        }}
        animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
        transition={{ duration: 20 + i * 10, repeat: Infinity, ease: 'linear' }}
      />
    ))}
  </div>
);

/* ─────────────────────────────────────────────────────────────
   MOUSE SPOTLIGHT
───────────────────────────────────────────────────────────── */
const MouseSpotlight = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 480, height: 480,
          x: springX, y: springY,
          translateX: '-50%', translateY: '-50%',
          background: 'radial-gradient(circle, rgba(99,210,160,0.055) 0%, transparent 65%)',
        }}
      />
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   FLOATING ICON
───────────────────────────────────────────────────────────── */
const FloatingIcon = ({
  src, name, color, x, y, size, floatDur, floatDelay, rotateDur, entryDelay,
}: {
  src: string; name: string; color: string;
  x: string; y: string; size: number;
  floatDur: number; floatDelay: number; rotateDur: number; entryDelay: number;
}) => {
  const [tip, setTip] = useState(false);

  return (
    <motion.div
      className="absolute pointer-events-auto select-none"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0, rotate: -20 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: entryDelay, type: 'spring', stiffness: 180, damping: 16 }}
    >
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: floatDur, repeat: Infinity, ease: 'easeInOut', delay: floatDelay }}
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: rotateDur, repeat: Infinity, ease: 'linear' }}
        >
          <motion.div
            whileHover={{ scale: 1.45, rotate: 0 }}
            onHoverStart={() => setTip(true)}
            onHoverEnd={() => setTip(false)}
            transition={{ type: 'spring', stiffness: 280, damping: 14 }}
            className="relative cursor-pointer"
          >
            {/* pulsing glow halo */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: `radial-gradient(circle, ${color}44 0%, transparent 72%)`,
                filter: 'blur(10px)',
                transform: 'scale(1.7)',
              }}
              animate={{ opacity: [0.35, 0.85, 0.35], scale: [1.5, 1.8, 1.5] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: floatDelay }}
            />

            {/* glass card */}
            <div
              className="relative flex items-center justify-center rounded-2xl backdrop-blur-md"
              style={{
                width: size + 20, height: size + 20,
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.16)',
                boxShadow: `0 4px 20px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.14), 0 0 0 1px ${color}18`,
              }}
            >
              <img src={src} alt={name} width={size} height={size} className="drop-shadow-md" />
            </div>

            {/* tooltip */}
            <AnimatePresence>
              {tip && (
                <motion.div
                  initial={{ opacity: 0, y: 5, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.8 }}
                  transition={{ duration: 0.14 }}
                  className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full text-[9px] font-black whitespace-nowrap shadow-lg"
                  style={{ background: color, color: color === '#F7DF1E' || color === '#FCC624' ? '#111' : '#fff', letterSpacing: '0.06em' }}
                >
                  {name}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────────────────────
   FLOATING CODE SNIPPET
───────────────────────────────────────────────────────────── */
const FloatingCode = ({ text, x, y, dur, delay }: { text: string; x: string; y: string; dur: number; delay: number }) => (
  <motion.div
    className="absolute pointer-events-none select-none"
    style={{ left: x, top: y }}
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 0.6, 0.6, 0] }}
    transition={{ duration: dur, delay, repeat: Infinity, times: [0, 0.12, 0.88, 1], ease: 'easeInOut' }}
  >
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: dur * 0.75, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <div
        className="px-3 py-1.5 rounded-xl font-mono text-[10px] font-bold whitespace-nowrap backdrop-blur-sm"
        style={{
          background: 'rgba(8,8,18,0.52)',
          border: '1px solid rgba(99,210,160,0.16)',
          color: 'rgba(99,210,160,0.80)',
          boxShadow: '0 2px 14px rgba(0,0,0,0.12)',
        }}
      >
        <span style={{ color: 'rgba(167,139,250,0.75)' }}>❯ </span>{text}
      </div>
    </motion.div>
  </motion.div>
);

/* ─────────────────────────────────────────────────────────────
   BLINKING CURSOR
───────────────────────────────────────────────────────────── */
const Cursor = () => (
  <motion.span
    animate={{ opacity: [1, 0, 1] }}
    transition={{ duration: 1, repeat: Infinity, ease: 'steps(1)' }}
    className="inline-block w-[3px] h-[0.85em] bg-accent align-middle ml-1 rounded-sm"
  />
);

/* ─────────────────────────────────────────────────────────────
   HERO EXPORT
───────────────────────────────────────────────────────────── */
export const Hero = () => {
  const scrollToProjects = () =>
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Section className="min-h-screen flex items-center pt-28 pb-16 relative overflow-hidden">

      {/* ── atmospheric layers ── */}
      <GlowOrbs />
      <GridBackground />
      <RotatingRings />
      <ParticleCanvas />
      <MouseSpotlight />

      {/* ── floating code ── */}
      {CODE_SNIPPETS.map((s) => (
        <FloatingCode key={s.text} {...s} />
      ))}

      {/* ── floating icons ── */}
      {TECH_ICONS.map((icon, i) => (
        <FloatingIcon
          key={icon.name}
          {...icon}
          {...ICON_SLOTS[i]}
          entryDelay={1.2 + i * 0.07}
        />
      ))}

      {/* ── main content ── */}
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full relative z-20">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-black tracking-wide mb-8"
            style={{
              background: 'rgba(99,210,160,0.08)',
              border: '1px solid rgba(99,210,160,0.25)',
              color: '#63D2A0',
            }}
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-accent"
              animate={{ scale: [1, 1.6, 1], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            {hero.badge}
          </motion.div>

          {/* name */}
          <h1 className="font-black tracking-tight text-brand leading-[0.9] mb-6">
            {hero.name.split(' ').map((word, i) => (
              <motion.span
                key={i}
                className="block"
                initial={{ opacity: 0, y: 52, skewX: -5 }}
                animate={{ opacity: 1, y: 0, skewX: 0 }}
                transition={{ delay: 0.35 + i * 0.12, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
              >
                {i === 0 ? word : (
                  <>
                    {word}{' '}
                    {i === hero.name.split(' ').length - 1 && (
                      <motion.span className="text-accent relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.72 }}>
                        Kusi
                        <motion.span
                          className="absolute bottom-0 left-0 h-[3px] bg-accent rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ delay: 1.1, duration: 0.5, ease: 'easeOut' }}
                        />
                      </motion.span>
                    )}
                  </>
                )}
              </motion.span>
            ))}
          </h1>

          {/* title + cursor */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex items-center gap-3 mb-6 flex-wrap"
          >
            <span className="text-base font-black text-gray-400 tracking-widest uppercase">{hero.title}</span>
            <motion.span className="text-accent font-black" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }}>/</motion.span>
            <span className="text-base font-black text-gray-400 tracking-widest uppercase">{hero.subtitle}</span>
            <Cursor />
          </motion.div>

          {/* tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="text-lg md:text-xl text-gray-500 font-medium mb-10 max-w-lg leading-relaxed"
          >
            {hero.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            {hero.cta.map((button) => (
              <motion.a
                key={button.name}
                href={button.href}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => {
                  if (button.href.startsWith('#')) {
                    e.preventDefault();
                    document.querySelector(button.href)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-black transition-all duration-200 ${
                  button.primary
                    ? 'bg-brand text-white shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30'
                    : 'bg-transparent border-2 border-gray-200 text-brand hover:border-brand/30 hover:bg-gray-50'
                }`}
              >
                {button.icon && <button.icon size={16} />}
                {button.name}
                {button.primary && (
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
                    <ChevronRight size={16} />
                  </motion.span>
                )}
              </motion.a>
            ))}
          </motion.div>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="flex gap-10"
          >
            {hero.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05 + i * 0.1, type: 'spring', stiffness: 180 }}
              >
                <motion.p
                  className="text-3xl font-black text-brand"
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.9 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-0.5">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT: profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.82, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* spinning rings */}
          {[1.08, 1.18].map((scale, i) => (
            <motion.div
              key={scale}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 20 + i * 8, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-[3.5rem] border border-dashed pointer-events-none"
              style={{
                borderColor: i === 0 ? 'rgba(99,210,160,0.20)' : 'rgba(139,92,246,0.12)',
                transform: `scale(${scale})`,
              }}
            />
          ))}

          {/* glow behind card */}
          <motion.div
            className="absolute inset-4 rounded-[3rem] blur-3xl pointer-events-none"
            style={{ background: 'rgba(99,210,160,0.12)' }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* image card */}
          <motion.div
            className="relative rounded-[3rem] overflow-hidden border-[6px] border-white shadow-[0_32px_80px_-12px_rgba(0,0,0,0.22)] max-w-[440px] w-full bg-gray-100 group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <img
              src={hero.profileImage}
              alt={hero.name}
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/philemon/600/700'; }}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* available badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, type: 'spring' }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/92 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg flex items-center gap-3 whitespace-nowrap border border-white"
            >
              <motion.span
                className="w-2.5 h-2.5 bg-emerald-400 rounded-full"
                animate={{ scale: [1, 1.6, 1], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
              <span className="text-sm font-black text-brand">Available for hire</span>
            </motion.div>
          </motion.div>

          {/* blobs */}
          <div className="absolute -bottom-10 -left-10 w-52 h-52 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(99,210,160,0.18)' }} />
          <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(139,92,246,0.14)' }} />
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.button
        onClick={scrollToProjects}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-300 hover:text-accent transition-colors z-20"
        aria-label="Scroll down"
      >
        <span className="text-[9px] font-black tracking-[0.3em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </Section>
  );
};
