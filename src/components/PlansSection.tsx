import { ArrowRight, MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { createWhatsAppLink, plans } from "@/lib/siteData";

const PlansSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="planos" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="container relative z-10 mx-auto px-6" ref={ref}>
        <div className="mb-16 grid gap-8 xl:grid-cols-[1fr_0.8fr] xl:items-end">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
              Planos
            </span>
            <h2 className="mt-3 font-display text-5xl text-foreground md:text-7xl">
              VEJA OS
              <br />
              <span className="text-gradient">PLANOS DISPONÍVEIS</span>
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Compare as opções com mais clareza e use o WhatsApp para receber mais
              informações sobre o plano que fizer mais sentido para você.
            </p>
          </div>

          <div
            className={`rounded-[1.75rem] border border-border bg-card/60 p-6 backdrop-blur-xl transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-sm uppercase tracking-[0.26em] text-primary">
              Atendimento direto
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Escolheu seu plano? Fale com nossa equipe pelo WhatsApp e
              comece a treinar o quanto antes!
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`group rounded-[2rem] border border-border bg-card/65 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.26em] text-primary">
                  {plan.durationLabel}
                </div>
                <div className="inline-flex rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary/90">
                  {plan.discountLabel}
                </div>
              </div>

              <h3 className="mt-6 font-display text-3xl tracking-wider text-foreground">
                {plan.name}
              </h3>

              <div className="my-8">
                <span className="text-sm text-muted-foreground">R$ </span>
                <span className="font-display text-6xl text-foreground">{plan.price}</span>
                <span className="text-xl font-bold text-primary">,{plan.cents}</span>
                {plan.period ? (
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                ) : null}
                <p className="mt-3 text-sm uppercase tracking-[0.24em] text-muted-foreground">
                  {plan.billingLabel}
                </p>
              </div>

              <div className="mb-8 space-y-4">
                <div className="rounded-2xl border border-white/5 bg-background/45 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">
                    Formas de pagamento
                  </p>
                  <ul className="mt-4 space-y-2">
                    {plan.paymentOptions.map((option) => (
                      <li
                        key={option}
                        className="text-sm leading-relaxed text-muted-foreground"
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Use o WhatsApp para receber mais informações sobre este plano e
                  confirmar a modalidade de pagamento desejada.
                </p>
              </div>

              <a
                href={createWhatsAppLink(
                  `Olá! Tenho interesse no plano ${plan.name} de R$${plan.price},${plan.cents}${plan.period} da Academia Audax. Gostaria de mais informações sobre as formas de pagamento.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary py-3.5 font-semibold tracking-wide text-primary-foreground transition-all hover:opacity-90"
              >
                <MessageCircle size={18} />
                Quero saber mais
              </a>

              <a
                href="#contato"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border py-3.5 font-semibold tracking-wide text-foreground transition-all hover:border-primary/40 hover:text-primary"
              >
                Ver contato
                <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
