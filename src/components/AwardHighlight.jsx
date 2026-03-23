import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

export default function AwardHighlight() {
  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <motion.div 
        className="relative overflow-hidden rounded-[2rem] p-10 md:p-14 bg-accent/10 border border-accent/20 flex flex-col items-center text-center premium-shadow group"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/30 transition-colors duration-700" />
        
        <div className="bg-accent/20 p-4 rounded-full mb-6">
          <Trophy size={32} className="text-accent" />
        </div>
        
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
          Reconocimiento Internacional
        </span>
        
        <h2 className="font-bricolage text-3xl md:text-5xl font-black text-ink leading-tight mb-4">
          Sabre Latin America Award 2024
        </h2>
        
        <p className="text-lg text-ink-muted">
          Galardonado por la campaña visual de <strong className="text-ink font-semibold">Chilenas Monumentales</strong> en icreate.
        </p>
      </motion.div>
    </section>
  );
}
