import { motion } from 'motion/react';
import { Section } from './Section';
import { hero } from '../data';
import { ChevronRight } from 'lucide-react';

export const Hero = () => {
  return (
    <Section className="min-h-screen flex items-center pt-32 pb-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-2 bg-accent/5 text-accent rounded-full text-sm font-bold mb-6">
            Available for new opportunities
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-brand leading-[0.9] mb-8">
            {hero.name.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium mb-12 max-w-xl leading-relaxed">
            {hero.tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            {hero.cta.map((button, i) => (
              <motion.a
                key={button.name}
                href={button.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className={`flex items-center gap-2 px-8 py-4 rounded-2xl text-lg font-bold transition-all shadow-sm active:translate-y-1 ${
                  button.primary 
                    ? 'bg-brand text-white hover:bg-brand/90' 
                    : 'bg-transparent border-2 border-brand/20 text-brand hover:border-brand/40 hover:bg-brand/5'
                }`}
              >
                {button.icon && <button.icon size={20} />}
                {button.name}
                {button.primary && <ChevronRight size={20} />}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group flex justify-center lg:justify-end"
        >
          {/* Animated Background Rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 top-0 h-full w-full rounded-[4rem] border-2 border-dashed border-accent/20 scale-110"
          />
          <div className="absolute inset-0 bg-accent/20 rounded-[4rem] blur-3xl group-hover:bg-accent/30 transition-all scale-95" />
          
          <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-[0_32px_64px_-15px_rgba(0,0,0,0.2)] max-w-[500px] bg-gray-50">
            <img 
              src={hero.profileImage} 
              alt={hero.name} 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://picsum.photos/seed/kusi-fallback/600/600";
              }}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Active Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
          
          {/* Accent decoration */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent rounded-full mix-blend-multiply opacity-30 blur-3xl animate-pulse" />
          <div className="absolute -top-10 -right-10 w-56 h-56 bg-purple-400 rounded-full mix-blend-multiply opacity-20 blur-3xl animate-pulse delay-700" />
        </motion.div>
      </div>
    </Section>
  );
};
