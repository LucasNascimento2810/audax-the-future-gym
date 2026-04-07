import { Instagram, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
              <path d="M8 28L16 8L20 18L24 8L32 28" stroke="hsl(30 100% 50%)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-display text-xl tracking-wider text-foreground">AUDAX</span>
            <span className="text-muted-foreground text-xs tracking-[0.3em] ml-1">GYM</span>
          </div>

          <p className="text-muted-foreground text-sm">
            © 2025 Audax Gym. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/554599000171"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={20} />
            </a>
            <a
              href="https://www.instagram.com/audaxgymcascavel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
