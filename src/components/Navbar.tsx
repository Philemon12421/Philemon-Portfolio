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
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-black tracking-tighter text-brand"
          >
            Philemon Osei Kusi<span className="text-accent text-3xl leading-none">.</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium text-gray-600 hover:text-brand transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  if (item.href === '#') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }
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
              className="px-5 py-2.5 bg-brand text-white text-sm font-semibold rounded-full hover:bg-brand/90 transition-all flex items-center gap-2"
            >
              <Download size={16} />
              CV
            </motion.a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-brand p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[60]"
          style={{ scaleX }}
        />
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden pt-24 pb-12 px-6 bg-white"
          >
            <nav className="flex flex-col space-y-8 items-center text-center">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-2xl font-bold text-gray-800 hover:text-accent"
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.href === '#') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    }
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/cv.pdf"
                className="px-8 py-4 bg-accent text-white font-bold rounded-xl flex items-center gap-3 text-xl"
                onClick={() => setIsOpen(false)}
              >
                <Download size={24} />
                Download CV
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
