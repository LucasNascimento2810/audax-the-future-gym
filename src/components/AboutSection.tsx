import { Clock3, Instagram, MapPin, MessageCircle } from "lucide-react";
import gymTraining from "@/assets/optimized/gym-training.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { createWhatsAppLink, siteData } from "@/lib/siteData";

const highlights = [
  {
    icon: MapPin,
    title: "Endereço",
    description: `${siteData.addressLine} • ${siteData.city}`,
  },
  {
    icon: Clock3,
    title: "Horários",
    description: "Segunda a sexta das 6h às 00h e sábado das 8h às 12h e 13h às 17h.",
  },
  {
    icon: Instagram,
    title: "Instagram",
    description: siteData.instagramHandle,
  },
] as const;

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="sobre" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr]">
          <div
            className={`order-2 transition-all duration-1000 delay-200 lg:order-1 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
              Sobre a academia
            </span>
            <h2 className="mt-3 mb-6 font-display text-5xl text-foreground md:text-6xl">
              UMA VISÃO MAIS CLARA
              <br />
              <span className="text-gradient">DA AUDAX</span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              A Academia Audax está em Cascavel - PR, na Rua Fortaleza, 2850. Nesta
              página, você encontra uma apresentação mais direta da academia, com
              estrutura, planos, horários e contato organizados de forma simples.
            </p>
            <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
              Se quiser seguir para o próximo passo, o WhatsApp é o caminho mais
              rápido para tirar dúvidas e receber mais informações sobre os planos.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-card/55 p-5 backdrop-blur-lg transition-colors hover:border-primary/30"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon size={20} />
                  </div>
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#estrutura"
                className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-base font-semibold text-foreground transition-all hover:border-primary/40 hover:text-primary"
              >
                Ver estrutura
              </a>
              <a
                href={createWhatsAppLink(
                  "Olá! Quero conhecer melhor a Academia Audax e tirar dúvidas sobre os planos.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <div
            className={`relative order-1 transition-all duration-1000 lg:order-2 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />
            <img
              src={gymTraining}
              alt="Treino na Audax Gym"
              className="relative h-[360px] w-full rounded-[2rem] object-cover shadow-2xl md:h-[520px]"
            />
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-primary/20 bg-card/80 p-6 shadow-xl backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.28em] text-primary">
                Próximo passo
              </p>
              <p className="mt-3 font-display text-3xl text-foreground">
                Planos, horários e contato em um só lugar
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                A navegação foi organizada para facilitar a leitura e levar você ao
                WhatsApp com mais rapidez.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
