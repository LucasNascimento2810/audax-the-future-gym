import { ArrowRight, BadgeCheck, Check, MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { createWhatsAppLink, plans } from "@/lib/siteData";

const planMicrocopy = {
  ANUAL: {
    badge: "Melhor custo-benefício",
    description: "Para quem quer constância no treino com o menor valor mensal.",
  },
  SEMESTRAL: {
    badge: "Equilíbrio ideal",
    description: "Boa escolha para manter o ritmo com ótimo equilíbrio entre prazo e valor.",
  },
  TRIMESTRAL: {
    badge: "Mais flexível",
    description: "Uma alternativa para ganhar ritmo com um compromisso mais curto.",
  },
  MENSAL: {
    badge: "Começo imediato",
    description: "Ideal para quem quer começar agora com mais liberdade de prazo.",
  },
} as const;

const supportLink = createWhatsAppLink(
  "Olá! Quero ajuda para escolher o melhor plano da Academia Audax.",
);

const visitLink = createWhatsAppLink(
  "Olá! Quero agendar uma visita para conhecer a Academia Audax e entender os planos.",
);

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
            <span className="text-primary text-sm font-medium uppercase tracking-[0.3em]">
              Planos
            </span>
            <h2 className="mt-3 font-display text-5xl text-foreground md:text-7xl">
              ESCOLHA O
              <br />
              <span className="text-gradient">PLANO IDEAL PARA A SUA ROTINA</span>
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Compare as opções com clareza, veja a duração, o valor mensal, o desconto e as
              formas de pagamento. Se quiser, a equipe pode te orientar no WhatsApp.
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
              Quer descobrir qual plano combina mais com a sua rotina? Fale com nossa equipe e
              receba uma orientação rápida para começar sem complicação.
            </p>
            <a
              href={supportLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Falar com a equipe
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => {
            const isFeatured = plan.name === "ANUAL";
            const microcopy = planMicrocopy[plan.name];

            return (
              <article
                key={plan.name}
                className={`group relative flex h-full flex-col rounded-[2rem] border p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${
                  isFeatured
                    ? "border-primary/40 bg-[linear-gradient(180deg,rgba(255,140,0,0.14),rgba(24,24,24,0.82))] shadow-[0_24px_60px_rgba(0,0,0,0.28)]"
                    : "border-border bg-card/65 hover:border-primary/30"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${300 + index * 120}ms` }}
              >
                {isFeatured ? (
                  <div className="absolute -top-3 left-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    <BadgeCheck size={14} />
                    Mais vantajoso
                  </div>
                ) : null}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-primary">
                      {plan.durationLabel}
                    </p>
                    <h3 className="mt-4 font-display text-3xl tracking-wider text-foreground">
                      {plan.name}
                    </h3>
                  </div>

                  {isFeatured ? (
                    <div className="rounded-2xl bg-primary/12 p-3 text-primary">
                      <BadgeCheck size={20} />
                    </div>
                  ) : null}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {microcopy.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {plan.discountLabel}
                  </div>
                  <div className="inline-flex rounded-full border border-white/10 bg-background/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/80">
                    {microcopy.badge}
                  </div>
                </div>

                <div className="my-8 rounded-[1.5rem] border border-white/8 bg-background/45 p-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {plan.billingLabel}
                  </p>
                  <div className="mt-4 flex items-end gap-1">
                    <span className="pb-3 text-base text-muted-foreground">R$</span>
                    <span className="font-display text-6xl leading-none text-foreground">
                      {plan.price}
                    </span>
                    <span className="pb-2 text-2xl font-bold text-primary">,{plan.cents}</span>
                    {plan.period ? (
                      <span className="pb-2 text-sm text-muted-foreground">{plan.period}</span>
                    ) : null}
                  </div>
                </div>

                <div className="flex-1 rounded-2xl border border-white/5 bg-background/35 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">
                    Formas de pagamento
                  </p>
                  <ul className="mt-4 space-y-3">
                    {plan.paymentOptions.map((option) => (
                      <li
                        key={option}
                        className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                        <span>{option}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  Chame no WhatsApp para confirmar a forma de pagamento ideal e tirar dúvidas
                  antes de fechar a matrícula.
                </p>

                <a
                  href={createWhatsAppLink(
                    `Olá! Tenho interesse no plano ${plan.name} de R$${plan.price},${plan.cents}${plan.period} da Academia Audax. Gostaria de mais informações sobre as formas de pagamento.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary py-3.5 font-semibold tracking-wide text-primary-foreground transition-all hover:opacity-90"
                >
                  <MessageCircle size={18} />
                  Quero este plano
                </a>

                <a
                  href={visitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border py-3.5 font-semibold tracking-wide text-foreground transition-all hover:border-primary/40 hover:text-primary"
                >
                  Agendar visita
                  <ArrowRight size={18} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
