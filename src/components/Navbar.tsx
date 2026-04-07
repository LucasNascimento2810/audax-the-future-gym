import { useState, useEffect } from "react";
import { Menu, X, Instagram } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Planos", href: "#planos" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Horários", href: "#horarios" },
  { label: "Contato", href: "#contato" },
];

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
        <a href="#inicio" className="flex items-center gap-2">
          <div className="flex items-center">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              <path d="M8 28L16 8L20 18L24 8L32 28" stroke="hsl(30 100% 50%)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-display text-2xl tracking-wider text-foreground ml-1">AUDAX</span>
            <span className="text-muted-foreground text-xs tracking-[0.3em] ml-2 mt-1">GYM</span>
          </div>
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
            href="https://www.instagram.com/audaxgymcascavel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#planos"
            className="bg-gradient-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
          >
            MATRICULE-SE
          </a>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
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
              href="#planos"
              onClick={() => setMenuOpen(false)}
              className="bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg text-center font-semibold tracking-wide mt-2"
            >
              MATRICULE-SE
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
