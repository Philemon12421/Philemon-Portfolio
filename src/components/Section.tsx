import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  containerClassName?: string;
}

export const Section = ({ id, className = "", children, containerClassName = "" }: SectionProps) => {
  return (
    <section id={id} className={`py-20 lg:py-32 overflow-hidden ${className}`}>
      <div className={`container mx-auto px-6 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export const SectionTitle = ({ subtitle, title, align = "left" }: { subtitle: string; title: string; align?: "left" | "center" }) => {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center mx-auto" : ""}`}>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-accent font-semibold tracking-wider uppercase text-sm mb-3"
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-4xl md:text-5xl font-bold tracking-tight text-brand ${align === "left" ? "max-w-2xl" : "mx-auto max-w-3xl"}`}
      >
        {title}
      </motion.h2>
    </div>
  );
};
