import { motion } from 'motion/react';
import { Section, SectionTitle } from './Section';
import { skillGroups, about, experiences, education, certifications, qualities, languages } from '../data';
import { CheckCircle2, Bookmark, GraduationCap, Award, Code } from 'lucide-react';

export const About = () => (
  <Section id="about" className="bg-gray-50/60">
    <div className="grid lg:grid-cols-12 gap-16 items-start">
      {/* Left: Title */}
      <div className="lg:col-span-5">
        <SectionTitle
          subtitle="About Me"
          title="Aspiring engineer, creative problem-solver."
          desc={about.content}
        />
      </div>

      {/* Right: Qualities + extra info */}
      <div className="lg:col-span-7">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {qualities.map((q, i) => (
            <motion.div
              key={q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-4 py-4 shadow-sm hover:border-accent/30 hover:shadow-md transition-all duration-200"
            >
              <CheckCircle2 className="text-accent flex-shrink-0" size={18} />
              <span className="font-semibold text-sm text-brand leading-snug">{q}</span>
            </motion.div>
          ))}
        </div>

        {/* Quote / Mission */}
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 pl-6 border-l-4 border-accent"
        >
          <p className="text-gray-500 italic text-lg leading-relaxed font-medium">
            "I believe great technology is invisible — it just works beautifully and solves real problems."
          </p>
          <span className="text-sm font-bold text-brand mt-2 block">— Philemon Osei Kusi</span>
        </motion.blockquote>
      </div>
    </div>
  </Section>
);

export const Skills = () => (
  <Section id="skills">
    <SectionTitle
      subtitle="Expertise"
      title="Skills & tool stack."
      align="center"
      desc="A versatile toolkit spanning development, design, and digital marketing."
    />
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
      {skillGroups.map((group, i) => (
        <motion.div
          key={group.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className={`p-7 rounded-[2rem] border-2 transition-all duration-300 flex flex-col ${group.color}`}
        >
          <div className={`mb-5 p-3 rounded-2xl w-fit ${group.iconBg}`}>
            <group.icon size={22} />
          </div>
          <h3 className="text-base font-bold mb-5 text-brand">{group.title}</h3>
          <ul className="space-y-3">
            {group.items.map(item => (
              <li
                key={item.name}
                className="flex items-center gap-2.5 text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity"
              >
                <item.icon size={14} className="opacity-60 flex-shrink-0" />
                {item.name}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>

    {/* Language proficiency bars */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="mt-14 bg-gray-50 rounded-[2rem] p-8 border border-gray-100"
    >
      <h3 className="text-lg font-bold text-brand mb-8 flex items-center gap-2">
        <Code size={18} className="text-accent" />
        Proficiency Levels
      </h3>
      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
        {languages.map((lang, i) => (
          <div key={lang.name}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm font-bold text-brand">{lang.name}</span>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{lang.level}</span>
            </div>
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${lang.pct}%` }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 + 0.2, duration: 0.7, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </Section>
);

export const Experience = () => (
  <Section id="experience" className="bg-gray-50/60">
    <SectionTitle
      subtitle="Journey"
      title="Experience & education."
      align="center"
    />
    <div className="grid lg:grid-cols-2 gap-16 mt-4">

      {/* Work Experience Timeline */}
      <div>
        <h3 className="text-base font-bold mb-10 flex items-center gap-2.5 text-brand">
          <Bookmark size={16} className="text-accent" />
          Work Experience
        </h3>
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-9 border-l-2 border-gray-200 hover:border-accent transition-colors duration-300"
            >
              <div className="absolute top-1 left-[-9px] w-4 h-4 rounded-full bg-accent border-4 border-white shadow-sm" />
              <span className="text-[11px] font-bold text-accent uppercase tracking-widest">{exp.period}</span>
              <h3 className="text-xl font-black text-brand mt-1 mb-0.5 leading-tight">{exp.role}</h3>
              <p className="text-sm font-semibold text-gray-400 mb-4">{exp.company}</p>
              <ul className="space-y-2">
                {exp.details.map(detail => (
                  <li key={detail} className="text-sm text-gray-500 font-medium flex gap-2 leading-relaxed">
                    <span className="mt-2 block w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education, Certs, Languages */}
      <div className="space-y-12">
        <div>
          <h3 className="text-base font-bold mb-7 flex items-center gap-2.5 text-brand">
            <GraduationCap size={16} className="text-accent" />
            Education
          </h3>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-accent/40 hover:shadow-md transition-all duration-200 group"
              >
                <h4 className="text-base font-bold group-hover:text-accent transition-colors">{edu.degree}</h4>
                <p className="text-sm text-gray-400 font-medium mt-0.5">{edu.institution} · {edu.period}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base font-bold mb-7 flex items-center gap-2.5 text-brand">
            <Award size={16} className="text-accent" />
            Certifications
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {certifications.map((cert, i) => (
              <motion.span
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="px-4 py-2 bg-white rounded-full border border-gray-200 text-xs font-bold text-gray-600 shadow-sm hover:border-accent/40 hover:text-accent transition-all duration-200"
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Section>
);
