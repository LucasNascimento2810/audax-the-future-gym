import { Instagram, Phone } from "lucide-react";
import BrandLogo from "./BrandLogo";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <BrandLogo iconClassName="h-7 w-auto" textSizeClassName="text-xl" subtextSizeClassName="text-[10px]" />

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
