import { motion } from 'framer-motion';

export default function EducationSection() {
  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-2.5 h-2.5 rounded-full bg-secondary" />
        <h2 className="font-bricolage text-sm font-bold tracking-widest uppercase text-ink-muted">
          Formación Académica
        </h2>
      </div>

      <motion.div 
        className="flex flex-col gap-2 p-8 rounded-2xl bg-card border border-border premium-shadow"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs font-bold tracking-widest uppercase text-ink-muted mb-1">
          2012 — 2015
        </span>
        <h3 className="font-bricolage text-xl font-bold text-ink">
          Técnico Superior en Diseño Gráfico y Comunicación Visual
        </h3>
        <p className="text-ink-light font-medium mt-1">
          Escuela Da Vinci
        </p>
      </motion.div>
    </section>
  );
}
