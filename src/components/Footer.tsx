import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
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
    </footer>
  );
};

export default Footer;
