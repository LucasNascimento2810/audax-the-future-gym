import { useEffect, useState } from "react";
import { Instagram, Menu, X } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { siteData, whatsappDefaultUrl } from "@/lib/siteData";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Planos", href: "#planos" },
  { label: "Horários", href: "#horarios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
] as const;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#inicio" className="flex items-center gap-2" aria-label="Ir para o início">
          <BrandLogo
            iconClassName="h-8 sm:h-9 w-auto"
            textSizeClassName="text-xl sm:text-2xl"
            subtextSizeClassName="text-[10px] sm:text-xs"
          />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}

          <a
            href={siteData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Abrir Instagram da Audax Gym"
          >
            <Instagram size={20} />
          </a>

          <a
            href={whatsappDefaultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
          >
            FALAR NO WHATSAPP
          </a>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border animate-slide-up">
          <div className="container mx-auto py-6 px-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-foreground text-lg tracking-wide uppercase py-2 border-b border-border/50"
              >
                {link.label}
              </a>
            ))}

            <a
              href={whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg text-center font-semibold tracking-wide mt-2"
            >
              FALAR NO WHATSAPP
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
