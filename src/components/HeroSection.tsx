import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Clock3,
  Dumbbell,
  MapPin,
  MessageCircle,
  WalletCards,
} from "lucide-react";
import heroBg from "@/assets/optimized/hero-bg.jpg";
import { createWhatsAppLink, siteData } from "@/lib/siteData";

const highlights = [
  {
    icon: MapPin,
    text: `${siteData.addressLine} - ${siteData.city}`,
  },
  {
    icon: WalletCards,
    text: "Planos mensal, trimestral, semestral e anual",
  },
  {
    icon: MessageCircle,
    text: "Atendimento facilitado pelo WhatsApp",
  },
] as const;

const panelHighlights = [
  {
    icon: Dumbbell,
    title: "Estrutura pronta para treino serio",
    description: "Musculacao, cardio e ambiente pensado para manter constancia.",
  },
  {
    icon: Clock3,
    title: "Horario amplo",
    description: "Segunda a sexta das 6h as 00h e sabado em dois periodos.",
  },
  {
    icon: WalletCards,
    title: "Planos flexiveis",
    description: "Escolha entre opcoes mensal, trimestral, semestral e anual.",
  },
] as const;

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28 md:pb-20 md:pt-32"
    >
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Audax Gym"
          className={`h-full w-full object-cover transition-transform ${
            loaded ? "scale-100" : "scale-110"
          }`}
          style={{ transitionDuration: "2000ms" }}
        />
        <div className="absolute inset-0 bg-background/74" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-float rounded-full bg-primary/5 blur-[120px]" />
      <div
        className="absolute bottom-1/4 right-1/4 h-64 w-64 animate-float rounded-full bg-primary/8 blur-[100px]"
        style={{ animationDelay: "3s" }}
      />
      <div className="absolute left-[20%] top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      <div className="absolute right-[20%] top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="text-center lg:text-left">
            <div
              className={`transition-all duration-1000 delay-200 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="inline-flex items-center rounded-full border border-primary/30 px-4 py-1.5 text-sm font-medium uppercase tracking-[0.34em] text-primary backdrop-blur-sm">
                Academia em Cascavel - PR
              </span>
            </div>

            <h1
              className={`mt-6 font-display text-5xl leading-[0.88] tracking-tight text-foreground transition-all duration-1000 delay-500 sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              AUDAX
              <br />
              <span className="text-gradient">GYM</span>
            </h1>

            <p
              className={`mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground transition-all duration-1000 delay-700 md:text-xl lg:mx-0 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Conheca a Academia Audax, veja a estrutura, entenda os planos e avance com
              treinos de alta performance em um ambiente pensado para constancia.
            </p>

            <div
              className={`mx-auto mt-8 grid max-w-2xl gap-3 transition-all duration-1000 lg:mx-0 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "850ms" }}
            >
              {highlights.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-background/45 px-4 py-3 text-left backdrop-blur-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon size={19} />
                  </div>
                  <p className="text-sm text-foreground sm:text-base">{item.text}</p>
                </div>
              ))}
            </div>

            <div
              className={`mt-10 flex flex-col justify-center gap-4 transition-all duration-1000 delay-1000 sm:flex-row lg:justify-start ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href={createWhatsAppLink(
                  "Ola! Gostaria de receber mais informacoes sobre a Academia Audax e os planos disponiveis.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-8 py-4 text-lg font-semibold tracking-wide text-primary-foreground transition-all hover:scale-[1.02] hover:opacity-90 glow-orange"
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </a>
              <a
                href="#planos"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-8 py-4 text-lg font-semibold tracking-wide text-foreground transition-all hover:border-primary/50 hover:text-primary"
              >
                Ver planos
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "1150ms" }}
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/25 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background/55 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(30_100%_50%_/_0.18),_transparent_40%)]" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />

              <div className="relative">
                <div className="inline-flex rounded-full border border-white/10 bg-background/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary backdrop-blur-md">
                  Academia Audax
                </div>

                <h2 className="mt-6 font-display text-4xl leading-[0.92] text-foreground sm:text-5xl">
                  A estrutura certa
                  <br />
                  para manter o ritmo
                </h2>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Em vez de repetir mais uma foto aqui, este bloco resume o que importa:
                  horario amplo, planos flexiveis e um ambiente preparado para treino serio.
                </p>

                <div className="mt-8 grid gap-4">
                  {panelHighlights.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.5rem] border border-white/8 bg-background/35 p-5 backdrop-blur-sm"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <item.icon size={22} />
                        </div>
                        <div>
                          <p className="text-lg font-semibold text-foreground">{item.title}</p>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/8 bg-background/35 p-5 backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-[0.26em] text-primary">Endereco</p>
                    <p className="mt-3 font-display text-2xl text-foreground">
                      {siteData.addressLine}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{siteData.city}</p>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/8 bg-background/35 p-5 backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-[0.26em] text-primary">
                      Atendimento rapido
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Tire duvidas sobre planos e receba orientacao pelo WhatsApp.
                    </p>
                    <a
                      href={createWhatsAppLink(
                        "Ola! Quero conhecer melhor a Academia Audax e saber mais sobre os planos.",
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                    >
                      Chamar no WhatsApp
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-muted-foreground"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
};

export default HeroSection;
