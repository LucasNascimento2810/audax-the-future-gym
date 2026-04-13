import { Building2, Dumbbell, MessageCircleMore, WalletCards } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reasons = [
  {
    icon: Building2,
    title: "Estrutura moderna",
    description:
      "Espaço amplo, bem iluminado e com equipamentos de última geração para você treinar com conforto e segurança.",
  },
  {
    icon: Dumbbell,
    title: "Ambiente pensado para treino",
    description:
      "Cada detalhe foi planejado para oferecer a melhor experiência de treino, do layout ao ar-condicionado.",
  },
  {
    icon: WalletCards,
    title: "Planos para diferentes objetivos",
    description:
      "Opções mensal, trimestral, semestral e anual para você escolher o que melhor se encaixa na sua rotina e no seu bolso.",
  },
  {
    icon: MessageCircleMore,
    title: "Atendimento rápido pelo WhatsApp",
    description:
      "Tire suas dúvidas, conheça os planos e matricule-se de forma prática direto pelo WhatsApp.",
  },
] as const;

const WhyAudaxSection = () => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="por-que-audax" className="py-24 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/25 to-background" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
            Por que conhecer a Audax?
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mt-3">
            MAIS CLAREZA PARA
            <br />
            <span className="text-gradient">CONHECER A ACADEMIA</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mt-6">
            Tudo o que você precisa para alcançar seus resultados está aqui:
            estrutura completa, equipe qualificada e planos acessíveis.
          </p>
        </div>

        <div className="grid gap-6 mt-14 sm:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className={`rounded-3xl border border-border bg-card/65 backdrop-blur-xl p-7 transition-all duration-700 hover:-translate-y-2 hover:border-primary/40 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 120}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <reason.icon size={24} />
              </div>
              <h3 className="text-foreground text-2xl font-display tracking-wide">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mt-4">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAudaxSection;
