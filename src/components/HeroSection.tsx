import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/optimized/hero-bg.jpg";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Audax Gym"
          className={`w-full h-full object-cover transition-transform duration-[2000ms] ${loaded ? "scale-100" : "scale-110"}`}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/8 blur-[100px] animate-float" style={{ animationDelay: "3s" }} />

      {/* Decorative lines */}
      <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block text-primary text-sm tracking-[0.4em] uppercase font-medium mb-6 border border-primary/30 px-4 py-1.5 rounded-full backdrop-blur-sm">
            Cascavel — PR
          </span>
        </div>

        <h1 className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] leading-[0.85] tracking-tight transition-all duration-1000 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <span className="text-foreground">AUDAX</span>
          <br />
          <span className="text-gradient">GYM</span>
        </h1>

        <p className={`text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mt-8 leading-relaxed transition-all duration-1000 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Supere seus limites. Treine com estrutura de alto padrão e acompanhamento profissional.
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center mt-10 transition-all duration-1000 delay-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a href="#planos" className="bg-gradient-primary text-primary-foreground px-10 py-4 rounded-lg font-semibold text-lg tracking-wide hover:opacity-90 transition-all glow-orange hover:scale-105">
            VER PLANOS
          </a>
          <a href="#sobre" className="border border-border text-foreground px-10 py-4 rounded-lg font-semibold text-lg tracking-wide hover:border-primary/50 hover:text-primary transition-all">
            CONHEÇA
          </a>
        </div>
      </div>

      <a href="#sobre" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-float">
        <ChevronDown size={28} />
      </a>
    </section>
  );
};

export default HeroSection;
