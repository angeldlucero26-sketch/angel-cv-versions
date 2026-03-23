import { motion } from 'framer-motion';
import { Globe, Linkedin, Instagram, Activity, Youtube } from 'lucide-react'; // Activity for behance placeholder

const LINKS = [
  {
    title: "Sitio Personal",
    url: "https://holacaos.cloud/",
    colSpan: "col-span-1 md:col-span-2",
    bg: "bg-ink",
    text: "text-bg",
    icon: <Globe size={24} className="opacity-80 group-hover:opacity-100 transition-opacity" />
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/angel-david-lucero/",
    colSpan: "col-span-1 md:col-span-1",
    bg: "bg-card",
    text: "text-ink",
    border: "border border-border",
    icon: <Linkedin size={24} className="text-[#0A66C2]" />
  },
  {
    title: "Behance",
    url: "https://www.behance.net/AngelDLucero",
    colSpan: "col-span-1 md:col-span-1",
    bg: "bg-card",
    text: "text-ink",
    border: "border border-border",
    icon: <Activity size={24} className="text-[#1769FF]" />
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/angelodth14/",
    colSpan: "col-span-1 md:col-span-2",
    bg: "bg-gradient-to-tr from-[#fd5949] to-[#d6249f]",
    text: "text-white",
    icon: <Instagram size={24} className="mix-blend-overlay" />
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com/watch?v=_FZT4gLuJTI",
    colSpan: "col-span-1 md:col-span-2",
    bg: "bg-[#FF0000]",
    text: "text-white",
    icon: <Youtube size={24} className="opacity-90 group-hover:opacity-100 transition-opacity" />
  }
];

export default function BentoLinks() {
  return (
    <section id="encontrame" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <div className="w-2.5 h-2.5 rounded-full bg-accent" />
        <h2 className="font-bricolage text-sm font-bold tracking-widest uppercase text-ink-muted">
          Encontrame acá
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] gap-4 md:gap-6">
        {LINKS.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex flex-col justify-between p-6 rounded-3xl premium-shadow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ${link.colSpan} ${link.bg} ${link.border || ''} ${link.text}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="flex justify-between items-start">
              {link.icon}
              <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity -rotate-45 group-hover:rotate-0 duration-300">
                →
              </span>
            </div>
            <div>
              <h3 className="font-bricolage font-bold tracking-wide text-lg">
                {link.title}
              </h3>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
