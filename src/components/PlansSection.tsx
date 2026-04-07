import { Check, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const plans = [
  {
    name: "MENSAL",
    price: "189",
    cents: "90",
    period: "/mês",
    features: ["Acesso completo", "Todos os equipamentos", "Vestiário", "Estacionamento"],
    popular: false,
  },
  {
    name: "TRIMESTRAL",
    price: "169",
    cents: "90",
    period: "/mês",
    features: ["Tudo do mensal", "Avaliação física", "Ficha de treino", "Desconto exclusivo"],
    popular: false,
  },
  {
    name: "SEMESTRAL",
    price: "149",
    cents: "90",
    period: "/mês",
    features: ["Tudo do trimestral", "Acompanhamento", "Acesso prioritário", "Eventos exclusivos"],
    popular: true,
  },
  {
    name: "ANUAL",
    price: "129",
    cents: "90",
    period: "/mês",
    features: ["Tudo do semestral", "Melhor custo-benefício", "Personal bônus", "Brinde especial"],
    popular: false,
  },
];

const PlansSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="planos" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">Planos</span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mt-3">
            CONHEÇA NOSSOS<br />
            <span className="text-gradient">PLANOS</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 group ${
                plan.popular
                  ? "bg-card/80 backdrop-blur-xl border-2 border-primary glow-orange"
                  : "bg-card/60 backdrop-blur-lg border border-border hover:border-primary/40"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold tracking-wider flex items-center gap-1">
                  <Star size={12} /> MAIS POPULAR
                </div>
              )}

              <h3 className="font-display text-2xl text-foreground tracking-wider">{plan.name}</h3>

              <div className="mt-6 mb-8">
                <span className="text-muted-foreground text-sm">R$</span>
                <span className="font-display text-6xl text-foreground">{plan.price}</span>
                <span className="text-primary text-xl font-bold">,{plan.cents}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-muted-foreground text-sm">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/554599000171?text=${encodeURIComponent(`Olá! Tenho interesse no plano *${plan.name}* de R$${plan.price},${plan.cents}/mês da Audax Gym. Gostaria de mais informações!`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 rounded-lg font-semibold tracking-wide transition-all ${
                  plan.popular
                    ? "bg-gradient-primary text-primary-foreground hover:opacity-90"
                    : "border border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                ESCOLHER
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
