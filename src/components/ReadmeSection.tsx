import { motion } from 'motion/react';
import { Terminal, FileCode, Coffee, Globe, Cpu, Zap, Code2, Layers } from 'lucide-react';

const stats = [
  { label: 'role',     value: 'Software Engineer & Creator', icon: <Code2 size={13} /> },
  { label: 'status',   value: 'Open to opportunities',       icon: <Coffee size={13} /> },
  { label: 'location', value: 'Kumasi, Ghana 🇬🇭',            icon: <Globe size={13} /> },
  { label: 'focus',    value: 'Web · Mobile · Design',       icon: <Layers size={13} /> },
];

const directives = [
  { icon: '🎨', label: 'clean_minimalism',   desc: 'Less noise, more signal'        },
  { icon: '⚡', label: 'performance_driven', desc: 'Fast by default, always'        },
  { icon: '🧠', label: 'human_centric_ui',   desc: 'Built for real people'          },
  { icon: '🛠️', label: 'scalable_logic',     desc: 'Code that grows with you'       },
  { icon: '🌍', label: 'impact_focused',     desc: 'Technology that solves problems'},
];

const Cursor = () => (
  <motion.span
    animate={{ opacity: [1, 0, 1] }}
    transition={{ duration: 1.1, repeat: Infinity, ease: 'steps(1)' }}
    className="inline-block w-[2px] h-[1.1em] bg-emerald-400 align-middle ml-0.5 rounded-sm"
  />
);

const TypewriterLine = ({ text, delay = 0 }: { text: string; delay?: number }) => (
  <motion.span
    initial={{ width: 0 }}
    whileInView={{ width: '100%' }}
    viewport={{ once: true }}
    transition={{ delay, duration: text.length * 0.035, ease: 'linear' }}
    className="inline-block overflow-hidden whitespace-nowrap"
  >
    {text}
  </motion.span>
);

export default function ReadmeSection() {
  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="block w-8 h-px bg-accent" />
          <span className="text-xs font-black text-accent uppercase tracking-[0.25em]">README.md</span>
        </motion.div>

        {/* Terminal card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/20 border border-zinc-800/60"
          style={{ background: '#0d0d0d' }}
        >

          {/* ── Window chrome ── */}
          <div
            className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/80"
            style={{ background: '#161616' }}
          >
            <div className="flex gap-2 items-center">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-400/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-2 text-zinc-600 font-mono text-xs">
              <FileCode size={13} />
              <span>~/philemon/README.md</span>
            </div>
            <div className="font-mono text-[10px] text-zinc-700 tracking-widest">philemon@portfolio</div>
          </div>

          {/* ── Terminal prompt bar ── */}
          <div className="px-6 py-3 border-b border-zinc-800/40 font-mono text-xs flex items-center gap-3" style={{ background: '#111' }}>
            <span className="text-emerald-400 font-bold">❯</span>
            <span className="text-zinc-500">cat</span>
            <span className="text-amber-300/80">README.md</span>
            <Cursor />
          </div>

          {/* ── Main content ── */}
          <div className="p-6 sm:p-8 md:p-12 font-mono">

            {/* H1 heading */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-10"
            >
              <p className="text-zinc-600 text-sm mb-2"># greeting</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                Hi, I'm{' '}
                <span className="text-emerald-400">Philemon</span>{' '}
                <span className="text-amber-300">Kusi</span>
                <span className="ml-2"><Cursor /></span>
              </h2>
              <p className="text-zinc-500 text-sm mt-3 leading-relaxed max-w-xl">
                {'>'} A multi-disciplinary{' '}
                <span className="text-emerald-300">software engineer</span> and{' '}
                <span className="text-amber-300">digital creator</span>{' '}
                studying Computer Science at KNUST. I build bridges between user empathy and technical feasibility.
              </p>
            </motion.div>

            {/* Two-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

              {/* Left: system_stats */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <Cpu size={14} className="text-emerald-400" />
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">system_stats</span>
                </div>

                <div className="space-y-1">
                  {stats.map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.08 }}
                      className="flex items-center justify-between py-2.5 border-b border-zinc-800/60 group"
                    >
                      <span className="flex items-center gap-2 text-zinc-600 text-xs group-hover:text-zinc-400 transition-colors">
                        <span className="text-zinc-700">{s.icon}</span>
                        {s.label}
                      </span>
                      <span className="text-zinc-300 text-xs font-medium group-hover:text-white transition-colors">
                        {s.value}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Build badges */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.75 }}
                  className="mt-6 flex flex-wrap gap-2"
                >
                  <span className="px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest border border-emerald-500/30 text-emerald-400 bg-emerald-500/5">
                    ✓ build: passing
                  </span>
                  <span className="px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest border border-amber-400/30 text-amber-300 bg-amber-500/5">
                    ✓ 0 vulnerabilities
                  </span>
                  <span className="px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest border border-blue-400/30 text-blue-300 bg-blue-500/5">
                    ✓ MIT license
                  </span>
                </motion.div>
              </motion.div>

              {/* Right: core_directives */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="rounded-2xl border border-zinc-800/60 p-6"
                style={{ background: '#111' }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <Terminal size={14} className="text-amber-300" />
                  <span className="text-amber-300 text-xs font-bold uppercase tracking-widest">core_directives</span>
                </div>

                <ul className="space-y-4">
                  {directives.map((item, i) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.08 }}
                      whileHover={{ x: 8 }}
                      className="flex items-center gap-3 group cursor-default"
                    >
                      <span className="text-base flex-shrink-0">{item.icon}</span>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-bold text-zinc-300 group-hover:text-emerald-400 transition-colors duration-200 block">
                          {item.label}
                        </span>
                        <span className="text-[10px] text-zinc-600 group-hover:text-zinc-500 transition-colors">
                          // {item.desc}
                        </span>
                      </div>
                      <Zap
                        size={10}
                        className="text-zinc-700 group-hover:text-emerald-400 transition-colors flex-shrink-0"
                      />
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Bottom terminal output line */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="mt-10 pt-6 border-t border-zinc-800/40 flex items-center gap-3 font-mono text-xs"
            >
              <span className="text-emerald-400 font-bold">❯</span>
              <span className="text-zinc-600">
                <TypewriterLine text="npm run build -- --mode production" delay={1} />
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
              className="mt-2 font-mono text-xs text-zinc-700 pl-5"
            >
              ✓ <span className="text-emerald-600">compiled successfully</span> in{' '}
              <span className="text-amber-600">1.42s</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
