import { motion } from 'motion/react';
import { Section, SectionTitle } from './Section';
import { skillGroups, about, experiences, education, certifications, qualities, languages } from '../data';
import { CheckCircle2, Bookmark } from 'lucide-react';

export const About = () => (
  <Section id="about" className="bg-gray-50/50">
    <div className="grid lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-5">
        <SectionTitle subtitle="About Me" title="Aspiring Computer Science undergraduate & Digital Creative." />
      </div>
      <div className="lg:col-span-7">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl text-gray-500 leading-relaxed font-medium"
        >
          {about.content}
        </motion.p>
        <div className="grid grid-cols-2 gap-8 mt-12">
          {qualities.map((q, i) => (
            <motion.div
              key={q}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3"
            >
              <CheckCircle2 className="text-accent" size={20} />
              <span className="font-bold text-lg">{q}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export const Skills = () => (
  <Section id="skills">
    <SectionTitle subtitle="Excellence" title="My specialized skills & toolstack." align="center" />
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-12">
      {skillGroups.map((group, i) => (
        <motion.div
          key={group.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className={`p-8 rounded-[2.5rem] border-2 transition-all flex flex-col items-center text-center ${group.color}`}
        >
          <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm">
            <group.icon size={28} />
          </div>
          <h3 className="text-xl font-bold mb-6 text-brand">{group.title}</h3>
          <ul className="space-y-4 w-full">
            {group.items.map(item => (
              <li key={item.name} className="flex items-center justify-center gap-3 font-semibold opacity-90 group">
                <item.icon size={18} className="opacity-70 group-hover:scale-110 transition-transform" />
                {item.name}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </Section>
);

export const Experience = () => (
  <Section id="experience" className="bg-gray-50/50">
    <SectionTitle subtitle="Journey" title="Professional experience & path." align="center" />
    <div className="grid lg:grid-cols-2 gap-16 mt-16">
      <div>
        <h3 className="text-2xl font-bold mb-12 flex items-center gap-3">
          <Bookmark className="text-accent" />
          Work Experience
        </h3>
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8 border-l-2 border-gray-200"
            >
              <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-accent border-4 border-white shadow-sm" />
              <span className="text-sm font-bold text-accent uppercase tracking-wider">{exp.period}</span>
              <h3 className="text-2xl font-bold text-brand mt-1">{exp.role}</h3>
              <p className="text-gray-500 font-bold mb-4">{exp.company}</p>
              <ul className="space-y-2">
                {exp.details.map(detail => (
                  <li key={detail} className="text-gray-600 font-medium flex gap-2">
                    <span className="block w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Bookmark className="text-accent" />
            Education
          </h3>
          <div className="space-y-6">
            {education.map(edu => (
              <div key={edu.degree} className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm transition-hover hover:border-accent group">
                <h4 className="text-xl font-bold group-hover:text-accent transition-colors">{edu.degree}</h4>
                <p className="text-gray-500 font-medium">{edu.institution} • {edu.period}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Bookmark className="text-accent" />
            Certifications
          </h3>
          <div className="flex flex-wrap gap-3">
            {certifications.map(cert => (
              <span key={cert} className="px-5 py-2.5 bg-white rounded-full border border-gray-100 text-sm font-bold text-gray-700 shadow-sm">
                {cert}
              </span>
            ))}
          </div>
        </div>

        <div>
           <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Bookmark className="text-accent" />
            Languages
          </h3>
          <div className="grid grid-cols-3 gap-6">
            {languages.map(lang => (
              <div key={lang.name}>
                <p className="font-bold text-brand">{lang.name}</p>
                <p className="text-sm text-gray-500">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Section>
);
