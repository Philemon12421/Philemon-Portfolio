import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Menu, X, Download } from 'lucide-react';
import { navigation } from '../data';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-[60]"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-lg py-4 border-b border-gray-100/80 shadow-[0_1px_20px_rgba(0,0,0,0.06)]'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={(e) => { e.preventDefault(); scrollTo('#'); }}
            className="text-lg font-black tracking-tight text-brand"
          >
            POK<span className="text-accent text-2xl leading-none">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="px-4 py-2 text-sm font-semibold text-gray-500 hover:text-brand rounded-xl hover:bg-gray-50 transition-all duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href);
                }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="/cv.pdf"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="ml-3 px-5 py-2.5 bg-brand text-white text-sm font-bold rounded-xl hover:bg-brand/90 transition-all flex items-center gap-2 shadow-sm hover:shadow-md active:scale-[0.97]"
            >
              <Download size={14} />
              Resume
            </motion.a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-brand p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden pt-20 pb-10 px-6 bg-white/98 backdrop-blur-md"
          >
            <nav className="flex flex-col items-center gap-2 mt-8">
              {navigation.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="w-full text-center py-4 text-xl font-bold text-gray-700 hover:text-accent transition-colors border-b border-gray-100 last:border-0"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.href);
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="/cv.pdf"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-6 w-full py-4 bg-brand text-white font-bold rounded-2xl flex items-center justify-center gap-3 text-lg"
                onClick={() => setIsOpen(false)}
              >
                <Download size={20} />
                Download Resume
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
