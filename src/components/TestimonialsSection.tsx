import { Star, Quote } from "lucide-react";
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
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">Depoimentos</span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mt-3">
            O QUE NOSSOS<br />
            <span className="text-gradient">CLIENTES DIZEM</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className={`bg-card/60 backdrop-blur-lg border border-border rounded-2xl p-8 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <Quote className="text-primary mb-4" size={32} />
              <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="text-primary fill-current" size={16} />
                ))}
              </div>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;