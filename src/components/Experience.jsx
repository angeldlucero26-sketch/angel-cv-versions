import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    role: "Web Developer & Tech Lead (WordPress)",
    company: "OSUNPA",
    date: "Mar 2017 — Dic 2025",
    bullets: [
      "Automatización de distribución masiva de documentos con n8n para miles de usuarios diarios.",
      "Incremento del tráfico web en 40% mediante SEO técnico en 6 meses.",
      "Migración completa de arquitectura Joomla a WordPress sin downtime.",
      "Gestión de infraestructura: hosting, DNS, servidores y bases de datos."
    ]
  },
  {
    role: "Multimedia Designer",
    company: "icreate",
    date: "Nov 2023 — May 2024",
    bullets: [
      "Ganador Sabre Latin America Award 2024 en la categoría 'Chilenas Monumentales'.",
      "Desarrollo de animaciones y Motion Graphics para clientes globales (Kia Chile, Schneider Electric, Starbucks, Natura).",
      "Modelado, texturizado y optimización de assets 3D en Blender."
    ]
  },
  {
    role: "Motion Graphic Designer",
    company: "Supernova Latam",
    date: "Dic 2020 — Oct 2022",
    bullets: [
      "Postproducción y animación para TV nacional (Ej. ChangoMás).",
      "Piezas de contenido dinámico para Banco Patagonia y Municipio de San Isidro.",
      "Coordinación integral de producción y animación 2D."
    ]
  },
  {
    role: "Graphic Designer & 3D Modeler",
    company: "DEVA",
    date: "Dic 2020 — Jul 2021",
    bullets: [
      "Diseño gráfico corporativo y visualización de producto 3D para sector industrial."
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <div className="w-2.5 h-2.5 rounded-full bg-secondary" />
        <h2 className="font-bricolage text-sm font-bold tracking-widest uppercase text-ink-muted">
          Experiencia Destacada
        </h2>
      </div>

      <div className="space-y-12">
        {EXPERIENCES.map((item, index) => (
          <motion.div 
            key={index}
            className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-[190px] top-6 bottom-[-32px] w-[1px] bg-border group-last:hidden" />
            
            {/* Date column */}
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full bg-ink/5 text-ink-muted text-xs font-bold tracking-wider uppercase border border-border">
                {item.date}
              </span>
            </div>

            {/* Content column */}
            <div className="relative">
              {/* Timeline Dot */}
              <div className="hidden md:block absolute -left-[14px] top-2.5 w-2 h-2 rounded-full bg-border group-hover:bg-primary transition-colors" />
              
              <h3 className="font-bricolage text-2xl font-bold text-ink mb-1 group-hover:text-primary transition-colors">
                {item.role}
              </h3>
              <p className="text-secondary font-semibold text-sm mb-4">
                {item.company}
              </p>
              
              <ul className="space-y-3">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex gap-3 text-ink-light text-[15px] items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink-muted/30 mt-2 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
