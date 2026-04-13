import { Plus } from "lucide-react";
import { faqItems } from "@/lib/siteData";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FaqSection = () => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="faq" className="py-24 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
            FAQ
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mt-3">
            DÚVIDAS
            <br />
            <span className="text-gradient">MAIS COMUNS</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mt-6">
            Respostas diretas para ajudar você a encontrar os planos, o contato e a
            localização da Academia Audax.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl space-y-4">
          {faqItems.map((item, index) => (
            <details
              key={item.question}
              className={`group rounded-3xl border border-border bg-card/60 backdrop-blur-lg transition-all duration-700 hover:border-primary/40 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-foreground">
                <span className="text-lg font-medium">{item.question}</span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-transform duration-300 group-open:rotate-45">
                  <Plus size={18} />
                </span>
              </summary>
              <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
