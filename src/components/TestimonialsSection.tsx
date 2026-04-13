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

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="depoimentos" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="container relative z-10 mx-auto px-6" ref={ref}>
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
            Depoimentos
          </span>
          <h2 className="mt-3 font-display text-5xl text-foreground md:text-7xl">
            O QUE ESTÃO
            <br />
            <span className="text-gradient">DIZENDO SOBRE A AUDAX</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Veja o que nossos alunos falam sobre a experiência de treinar na
            Academia Audax.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`rounded-2xl border border-border bg-card/60 p-8 backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <Quote className="mb-4 text-primary" size={32} />
              <p className="mb-6 leading-relaxed text-muted-foreground">
                "{testimonial.content}"
              </p>
              <div className="mb-4 flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="fill-current text-primary" size={16} />
                ))}
              </div>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
