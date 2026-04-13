import { MessageCircle, Plus } from "lucide-react";
import { createWhatsAppLink, faqItems } from "@/lib/siteData";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FaqSection = () => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="faq" className="relative py-24 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container relative z-10 mx-auto px-6" ref={ref}>
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-[0.3em]">
            FAQ
          </span>
          <h2 className="mt-3 font-display text-5xl text-foreground md:text-7xl">
            DÚVIDAS
            <br />
            <span className="text-gradient">MAIS COMUNS</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Respostas rápidas para você entender planos, contato, localização e o que precisa
            saber antes de começar a treinar na Audax.
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
              <p className="px-6 pb-6 leading-relaxed text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>

        <div
          className={`mx-auto mt-10 flex max-w-4xl justify-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "650ms" }}
        >
          <a
            href={createWhatsAppLink(
              "Olá! Ainda tenho dúvidas sobre planos e matrícula na Academia Audax.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3 font-semibold text-foreground transition-all hover:border-primary/40 hover:text-primary"
          >
            <MessageCircle size={18} />
            Ainda ficou com dúvida?
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
