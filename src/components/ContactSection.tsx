import {
  ArrowRight,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import AcademyFacadeImage from "./AcademyFacadeImage";
import { createWhatsAppLink, siteData, whatsappDefaultUrl } from "@/lib/siteData";

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
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
            Contato
          </span>
          <h2 className="mt-3 font-display text-5xl text-foreground md:text-7xl">
            FALE COM A
            <br />
            <span className="text-gradient">ACADEMIA AUDAX</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            WhatsApp, Instagram, localização e mapa organizados em um só lugar para
            deixar o contato mais claro e confiável.
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
                Conversão via WhatsApp
              </span>
              <h3 className="mt-5 font-display text-4xl text-foreground">
                Quer receber mais informações?
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Use o WhatsApp para tirar dúvidas sobre os planos e entender o próximo
                passo com mais praticidade.
              </p>
              <a
                href={createWhatsAppLink(
                  "Olá! Quero receber mais informações sobre a Academia Audax e os planos disponíveis.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </a>
            </div>

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

          <div
            className={`grid gap-6 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-border md:min-h-[380px]">
              <AcademyFacadeImage
                alt="Imagem da Academia Audax"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="rounded-[1.5rem] border border-white/10 bg-background/70 p-5 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.28em] text-primary">
                    Academia Audax
                  </p>
                  <p className="mt-3 font-display text-xl text-foreground">
                    {siteData.addressLine}
                  </p>
                  <a
                    href={whatsappDefaultUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    Chamar no WhatsApp
                    <ArrowRight size={16} />
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
