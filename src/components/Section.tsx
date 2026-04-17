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
    <section id={id} className={`py-24 lg:py-36 overflow-hidden ${className}`}>
      <div className={`container mx-auto px-6 max-w-6xl ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export const SectionTitle = ({
  subtitle,
  title,
  align = "left",
  desc,
}: {
  subtitle: string;
  title: string;
  align?: "left" | "center";
  desc?: string;
}) => {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center mx-auto" : ""}`}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4"
      >
        <span className="block w-6 h-px bg-accent" />
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-4xl md:text-[3.25rem] font-black tracking-tight text-brand leading-[1.05] ${
          align === "left" ? "max-w-2xl" : "mx-auto max-w-3xl"
        }`}
      >
        {title}
      </motion.h2>
      {desc && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`mt-5 text-lg text-gray-500 font-medium leading-relaxed ${
            align === "center" ? "mx-auto max-w-2xl" : "max-w-xl"
          }`}
        >
          {desc}
        </motion.p>
      )}
    </div>
  );
};
