import { ArrowRight, MessageCircle } from "lucide-react";
import { createWhatsAppLink, siteData } from "@/lib/siteData";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CtaSection = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="py-24 md:py-28 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <div
          className={`relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/15 via-card to-card px-8 py-12 md:px-12 md:py-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="absolute -top-16 right-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 left-8 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative z-10 grid gap-10 xl:grid-cols-[1.1fr_0.9fr] xl:items-end">
            <div>
              <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-sm uppercase tracking-[0.25em] text-primary">
                Conversa rápida
              </span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mt-5 leading-[0.95]">
                QUER CONHECER MELHOR
                <br />
                <span className="text-gradient">A ACADEMIA AUDAX?</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mt-6 max-w-2xl">
                Fale com a equipe pelo WhatsApp para tirar dúvidas e receber mais
                informações sobre os planos.
              </p>
            </div>

            <div className="space-y-5 rounded-[1.75rem] border border-border bg-background/65 backdrop-blur-xl p-6 md:p-8">
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="rounded-full border border-border px-4 py-2">
                  {siteData.addressLine}
                </span>
                <span className="rounded-full border border-border px-4 py-2">
                  {siteData.city}
                </span>
                <span className="rounded-full border border-border px-4 py-2">
                  {siteData.instagramHandle}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={createWhatsAppLink(
                    "Olá! Quero conhecer melhor a Academia Audax e receber mais informações sobre os planos.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground transition-all hover:opacity-90 hover:scale-[1.02]"
                >
                  <MessageCircle size={18} />
                  Falar no WhatsApp
                </a>
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-7 py-4 text-base font-semibold text-foreground transition-all hover:border-primary/40 hover:text-primary"
                >
                  Ver contato
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
