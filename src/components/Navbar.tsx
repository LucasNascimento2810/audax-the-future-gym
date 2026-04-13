import { useEffect, useState } from "react";
import { Instagram, Menu, X } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { createWhatsAppLink, siteData } from "@/lib/siteData";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Planos", href: "#planos" },
  { label: "Horários", href: "#horarios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
] as const;

const visitLink = createWhatsAppLink(
  "Olá! Quero agendar uma visita para conhecer a Academia Audax.",
);

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
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-2" aria-label="Ir para o início">
          <BrandLogo
            iconClassName="h-8 w-auto sm:h-9"
            textSizeClassName="text-xl sm:text-2xl"
            subtextSizeClassName="text-[10px] sm:text-xs"
          />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-wide text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              {link.label}
            </a>
          ))}

          <a
            href={siteData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Abrir Instagram da Audax Gym"
          >
            <Instagram size={20} />
          </a>

          <a
            href={visitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-gradient-primary px-6 py-2.5 text-sm font-semibold tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
          >
            AGENDAR VISITA
          </a>
        </div>

        <button
          className="text-foreground lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="animate-slide-up border-t border-border bg-background/98 backdrop-blur-xl lg:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-border/50 py-2 text-lg uppercase tracking-wide text-foreground"
              >
                {link.label}
              </a>
            ))}

            <a
              href={visitLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-gradient-primary px-6 py-3 text-center font-semibold tracking-wide text-primary-foreground"
            >
              AGENDAR VISITA
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
