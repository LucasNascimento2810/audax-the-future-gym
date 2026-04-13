import { Clock3, MapPin, MessageCircle } from "lucide-react";
import heroBg from "@/assets/optimized/hero-bg.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { createWhatsAppLink, siteData } from "@/lib/siteData";

const highlights = [
  {
    icon: MapPin,
    title: "Endereço",
    description: `${siteData.addressLine} - ${siteData.city}`,
  },
  {
    icon: Clock3,
    title: "Horários",
    description: "Segunda a sexta das 6h às 00h e sábado das 8h às 12h e 13h às 17h.",
  },
  {
    icon: MessageCircle,
    title: "Atendimento",
    description: `Equipe disponível pelo WhatsApp ${siteData.whatsappDisplay}.`,
  },
] as const;

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr]">
          <div
            className={`order-2 transition-all duration-1000 delay-200 lg:order-1 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-[0.3em]">
              Sobre a academia
            </span>
            <h2 className="mb-6 mt-3 font-display text-5xl text-foreground md:text-6xl">
              TREINO COM ESTRUTURA,
              <br />
              <span className="text-gradient">CLAREZA E CONSTÂNCIA</span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              A Audax Gym foi pensada para quem quer treinar com mais conforto, organização
              e foco. Em Cascavel, a academia reúne ambiente moderno, boa experiência no dia
              a dia e atendimento próximo para facilitar sua rotina.
            </p>
            <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
              Aqui, você encontra a estrutura certa para começar bem, manter constância e
              evoluir com mais segurança, sem abrir mão de planos flexíveis e suporte da equipe.
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
                Ver a estrutura
              </a>
              <a
                href={createWhatsAppLink(
                  "Olá! Quero conhecer melhor a Academia Audax e falar com a equipe sobre os planos.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                <MessageCircle size={18} />
                Falar com a equipe
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
              src={heroBg}
              alt="Interior da Audax Gym"
              className="relative h-[360px] w-full rounded-[2rem] object-cover shadow-2xl md:h-[520px]"
            />
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-primary/20 bg-card/80 p-6 shadow-xl backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.28em] text-primary">Ambiente Audax</p>
              <p className="mt-3 font-display text-3xl text-foreground">
                Seu próximo treino começa com a escolha certa
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Venha conhecer a estrutura pessoalmente e descubra por que a Audax é a escolha
                de quem quer treinar com mais padrão, conforto e constância.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
