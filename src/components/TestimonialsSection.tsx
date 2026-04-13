import { Quote, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "Daiana Carvalho",
    role: "Avaliação recente",
    content:
      "Academia super organizada, pessoas educadas, aparelhos sempre com a manutenção em dia e super limpa. As meninas da recepção são sempre muito educadas e os instrutores são sempre atenciosos e dispostos a ajudar.",
    rating: 5,
  },
  {
    name: "Thália Priscila",
    role: "Avaliação há 2 anos",
    content: "Ótima academia. Atendimento excelente dos profissionais.",
    rating: 5,
  },
  {
    name: "Bruno Arcari",
    role: "Local Guide",
    content:
      "Excelente academia, equipe e atendimento. Ambiente sempre limpo, aparelhos de ponta, variedade, versatilidade e qualidade no treino.",
    rating: 5,
  },
] as const;

const getInitials = (name: string) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="depoimentos" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="container relative z-10 mx-auto px-6" ref={ref}>
        <div className="mb-16 grid gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-end">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-[0.3em]">
              Prova social
            </span>
            <h2 className="mt-3 font-display text-5xl text-foreground md:text-7xl">
              QUEM TREINA
              <br />
              <span className="text-gradient">PERCEBE A DIFERENÇA</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground xl:mx-0">
              Atendimento, limpeza, organização e qualidade no treino aparecem com força nos
              depoimentos de quem já vive a rotina da Audax.
            </p>
          </div>

          <div
            className={`rounded-[1.75rem] border border-border bg-card/60 p-6 backdrop-blur-xl transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="fill-current text-primary" size={18} />
              ))}
            </div>
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              Relatos reais que reforçam o padrão da experiência Audax.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Sem exagero: os próprios depoimentos destacam o que mais importa na decisão,
              como ambiente limpo, equipe atenciosa e estrutura para treinar bem.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className={`flex h-full flex-col rounded-[2rem] border border-border bg-card/60 p-8 backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 font-semibold tracking-[0.2em] text-primary">
                  {getInitials(testimonial.name)}
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="fill-current text-primary" size={16} />
                  ))}
                </div>
              </div>

              <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary">
                <Quote size={24} />
              </div>

              <p className="mt-6 flex-1 leading-relaxed text-muted-foreground">
                “{testimonial.content}”
              </p>

              <div className="mt-8 border-t border-white/5 pt-6">
                <p className="text-xs uppercase tracking-[0.22em] text-primary">
                  Depoimento em destaque
                </p>
                <p className="mt-3 font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
