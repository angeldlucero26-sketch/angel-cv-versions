import { motion } from 'framer-motion';

export default function ProfileSection() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div 
        className="bg-card premium-shadow rounded-3xl p-10 md:p-14 border border-border flex flex-col gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-4">
          <div className="w-2.5 h-2.5 rounded-full bg-primary" />
          <h2 className="font-bricolage text-sm font-bold tracking-widest uppercase text-ink-muted">
            Perfil Profesional
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl text-ink leading-relaxed font-light">
          Soy un diseñador multimedia híbrido, fusionando <span className="font-semibold text-ink">estrategia técnica</span> con <span className="font-semibold text-ink">destreza creativa</span>. Durante más de 7 años he creado contenido visual de alto impacto para marcas Tier‑1, ganando recientemente el <span className="font-semibold text-accent">Sabre Latin America Award 2024</span>. 
          <br /><br />
          Mi diferencial radica en el <span className="text-secondary font-medium">pensamiento sistémico</span>: no solo diseño piezas excepcionales, sino que orquesto flujos automatizados con n8n e Inteligencia Artificial para llevar la operativa de mis clientes al siguiente nivel de eficiencia y conversión.
        </p>
      </motion.div>
    </section>
  );
}
