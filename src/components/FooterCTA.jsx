import { MessageCircle } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer className="mt-20 border-t border-border bg-card">
      <div className="max-w-4xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <h2 className="font-bricolage text-3xl md:text-5xl font-black text-ink mb-6">
          ¿Listo para automatizar <br className="hidden md:block"/> y elevar tu proyecto?
        </h2>
        <p className="text-ink-muted mb-10 max-w-lg mx-auto">
          Contactame ahora mismo. Mi disponibilidad es abierta para freelance y consultoría técnica-creativa.
        </p>
        
        <a 
          href="https://wa.me/5492974092723" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group px-8 py-5 rounded-2xl bg-primary text-white font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary-hover transition-all hover:scale-[1.03] active:scale-[0.97] premium-shadow"
        >
          <MessageCircle size={22} className="group-hover:animate-bounce" />
          Hablemos por WhatsApp
        </a>
      </div>
      
      <div className="border-t border-border/50 py-8 text-center text-sm text-ink-muted">
        <p>© {new Date().getFullYear()} Ángel David Lucero. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
