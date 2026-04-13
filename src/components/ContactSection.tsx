import {
  ArrowRight,
  Check,
  Clock3,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { createWhatsAppLink, siteData, whatsappDefaultUrl } from "@/lib/siteData";

const visitBenefits = [
  "Conhecer a estrutura de perto",
  "Entender qual plano combina com a sua rotina",
  "Tirar dúvidas diretamente com a equipe",
] as const;

const visitLink = createWhatsAppLink(
  "Olá! Quero agendar uma visita para conhecer a Academia Audax.",
);

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="contato" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-[0.3em]">
            Contato e matrícula
          </span>
          <h2 className="mt-3 font-display text-5xl text-foreground md:text-7xl">
            AGENDE SUA VISITA
            <br />
            <span className="text-gradient">E CONHEÇA A AUDAX DE PERTO</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Se você quer ver a estrutura, entender os planos e falar com a equipe antes de se
            matricular, o WhatsApp é o caminho mais rápido para começar.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <div
            className={`space-y-6 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="rounded-[2rem] border border-border bg-card/70 p-8 backdrop-blur-xl transition-colors hover:border-primary/40">
              <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.26em] text-primary">
                Atendimento rápido
              </span>
              <h3 className="mt-5 font-display text-4xl text-foreground">
                Fale com a equipe e receba orientação para começar
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Tire dúvidas sobre planos, horários, visita e matrícula com um atendimento
                próximo, prático e direto no WhatsApp.
              </p>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappDefaultUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 font-semibold text-primary-foreground transition-all hover:opacity-90"
                >
                  <MessageCircle size={18} />
                  Começar pelo WhatsApp
                </a>
                <a
                  href={siteData.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3.5 font-semibold text-foreground transition-all hover:border-primary/40 hover:text-primary"
                >
                  Ver Instagram
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card/60 p-8 backdrop-blur-lg transition-colors hover:border-primary/40">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="mb-1 text-lg font-semibold text-foreground">Localização</p>
                    <p className="text-muted-foreground">{siteData.addressLine}</p>
                    <p className="text-muted-foreground">{siteData.city}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card/60 p-8 backdrop-blur-lg transition-colors hover:border-primary/40">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Clock3 className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="mb-1 text-lg font-semibold text-foreground">Horários</p>
                    <p className="text-muted-foreground">Segunda a sexta: 6h às 00h</p>
                    <p className="text-muted-foreground">Sábado: 8h às 12h e 13h às 17h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <a
                href={siteData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-border bg-card/60 p-8 backdrop-blur-lg transition-colors hover:border-primary/40"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Instagram className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="mb-1 text-lg font-semibold text-foreground">Instagram</p>
                    <p className="text-muted-foreground transition-colors group-hover:text-primary">
                      {siteData.instagramHandle}
                    </p>
                  </div>
                </div>
              </a>

              <a
                href={whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-border bg-card/60 p-8 backdrop-blur-lg transition-colors hover:border-primary/40"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Phone className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="mb-1 text-lg font-semibold text-foreground">WhatsApp</p>
                    <p className="text-muted-foreground transition-colors group-hover:text-primary">
                      {siteData.whatsappDisplay}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div
            className={`grid gap-6 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/70 p-8 md:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(30_100%_50%_/_0.16),_transparent_40%)]" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />

              <div className="relative">
                <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.26em] text-primary">
                  Visita guiada
                </span>
                <h3 className="mt-5 font-display text-4xl text-foreground md:text-5xl">
                  Veja a estrutura, tire dúvidas e encontre o plano certo
                </h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                  Visitar a Audax é a melhor forma de sentir o ambiente, entender o padrão da
                  academia e conversar com a equipe antes de tomar sua decisão.
                </p>

                <div className="mt-8 space-y-4">
                  {visitBenefits.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[1.5rem] border border-white/10 bg-background/35 p-5 backdrop-blur-sm"
                    >
                      <Check size={18} className="mt-0.5 shrink-0 text-primary" />
                      <p className="text-sm leading-relaxed text-foreground/85">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={visitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 font-semibold text-primary-foreground transition-all hover:opacity-90"
                  >
                    <MessageCircle size={18} />
                    Agendar uma visita
                  </a>

                  <a
                    href="#planos"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3.5 font-semibold text-foreground transition-all hover:border-primary/40 hover:text-primary"
                  >
                    Ver planos
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative h-full min-h-[350px] overflow-hidden rounded-[2rem] border border-border bg-secondary/40">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/40 to-background" />
              <div className="pointer-events-none absolute left-6 top-6 z-20 rounded-full border border-white/10 bg-background/70 px-4 py-2 text-xs uppercase tracking-[0.26em] text-primary backdrop-blur-md">
                Mapa e localização
              </div>
              <iframe
                src={siteData.mapsEmbedUrl}
                width="100%"
                height="100%"
                className="relative z-10"
                style={{ border: 0, filter: "grayscale(1) contrast(1.05) brightness(0.9)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Audax Gym"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
