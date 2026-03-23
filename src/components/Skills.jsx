import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const SKILL_GROUPS = [
  {
    title: "Diseño & Motion",
    color: "bg-primary",
    skills: ["Motion Graphics & Animation", "Multimedia Design", "After Effects", "Figma", "Blender", "Adobe Suite"]
  },
  {
    title: "IA & Automatización",
    color: "bg-secondary",
    skills: ["Automatización con n8n", "Prompt Engineering & IA"]
  },
  {
    title: "Desarrollo & Web",
    color: "bg-accent",
    skills: ["SEO Técnico", "WordPress / Joomla", "UX/UI Design", "Python & JavaScript"]
  },
  {
    title: "Estrategia",
    color: "bg-purple",
    skills: ["IT Management", "Consultoría Operativa"]
  }
];

export default function SkillsSection() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <div className="w-2.5 h-2.5 rounded-full bg-primary" />
        <h2 className="font-bricolage text-sm font-bold tracking-widest uppercase text-ink-muted">
          Ecosistema Tecnológico
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {SKILL_GROUPS.map((group, idx) => (
          <motion.div 
            key={idx}
            className="flex flex-col gap-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="flex items-center gap-3">
              <span className={cn("w-2 h-2 rounded-full", group.color)} />
              <h3 className="font-bricolage text-xl font-bold text-ink">
                {group.title}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-card border border-border text-ink-light shadow-sm premium-shadow hover:scale-105 hover:border-ink transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
