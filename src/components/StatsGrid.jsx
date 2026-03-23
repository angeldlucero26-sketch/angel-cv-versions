import { motion } from 'framer-motion';

const STATS = [
  { value: "7+", label: "Años Exp.", color: "text-primary" },
  { value: "+40%", label: "SEO Traffic", color: "text-secondary" },
  { value: "4", label: "Marcas Tier-1", color: "text-purple" },
  { value: "2024", label: "Sabre Award", color: "text-accent" },
];

export default function StatsGrid() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-2.5 h-2.5 rounded-full bg-purple" />
        <h2 className="font-bricolage text-sm font-bold tracking-widest uppercase text-ink-muted">
          Highlights
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map((stat, i) => (
          <motion.div 
            key={i}
            className="flex flex-col items-center justify-center p-8 rounded-[1.5rem] bg-card border border-border premium-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className={`font-bricolage text-4xl font-black mb-2 ${stat.color}`}>
              {stat.value}
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-ink-muted">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
