import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Background Decor (Minimalist subtle blob) */}
      <div className="absolute top-0 right-0 -mr-[10%] -mt-[10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 -ml-[10%] mb-[10%] w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          className="lg:col-span-7 flex flex-col gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col gap-2">
            <motion.span 
              className="tracking-widest uppercase text-xs font-bold text-ink-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hola, soy
            </motion.span>
            <h1 className="font-bricolage text-6xl md:text-8xl font-black tracking-tight leading-[0.95] text-ink">
              Ángel <br className="hidden md:block"/> 
              <span className="text-accent block mt-2">David Lucero</span>
            </h1>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="px-5 py-2 rounded-full bg-primary text-white text-[11px] font-bold tracking-widest uppercase shadow-lg shadow-primary/25">
              Diseño Multimedia & Automatización
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-ink-light leading-relaxed max-w-2xl mt-2 font-light">
            Elevo ecosistemas digitales combinando estética, motion graphics y estructuras automatizadas inteligentes. Transformo sistemas complejos en experiencias visuales excepcionales.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <a 
              href="https://wa.me/5492974092723" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-ink text-bg font-bold flex items-center justify-center gap-2 hover:bg-primary transition-colors hover:scale-[1.02] active:scale-[0.98] premium-shadow"
            >
              Contactarme <ArrowRight size={18} />
            </a>
            <a 
              href="#encontrame" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-border text-ink font-semibold flex items-center justify-center gap-2 hover:border-ink transition-colors hover:bg-card/50"
            >
              Encontrame acá <ArrowDown size={18} />
            </a>
          </div>
        </motion.div>

        {/* Image / Visual Profile */}
        <motion.div 
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="aspect-[4/5] relative rounded-3xl overflow-hidden premium-shadow group">
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent z-10 lg:hidden pointer-events-none" />
            <img 
              src="https://holacaos.cloud/wp-content/uploads/2026/02/Angel-Lucero.webp" 
              alt="Ángel David Lucero" 
              className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
