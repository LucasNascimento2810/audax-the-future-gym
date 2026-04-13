import { Clock, MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { createWhatsAppLink } from "@/lib/siteData";

const ScheduleSection = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="horarios" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container relative z-10 mx-auto px-6" ref={ref}>
        <div className="mx-auto max-w-2xl text-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-[0.3em]">
              Horários
            </span>
            <h2 className="mb-6 mt-3 font-display text-5xl text-foreground md:text-7xl">
              HORÁRIOS DE
              <br />
              <span className="text-gradient">FUNCIONAMENTO</span>
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
              A Audax tem horário amplo para facilitar sua rotina. Se quiser confirmar visita,
              matrícula ou tirar dúvidas sobre os planos, fale com a equipe no WhatsApp.
            </p>
          </div>

          <div className="space-y-6">
            <div
              className={`flex flex-col items-start gap-6 rounded-2xl border border-border bg-card/60 p-8 backdrop-blur-lg transition-all duration-700 hover:border-primary/40 sm:flex-row sm:items-center sm:justify-between ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Clock className="text-primary" size={22} />
                </div>
                <div className="text-left">
                  <p className="text-lg font-semibold text-foreground">Segunda à sexta</p>
                  <p className="text-sm text-muted-foreground">Dias úteis</p>
                </div>
              </div>
              <p className="font-display text-3xl text-foreground md:text-4xl">
                6h <span className="text-primary">—</span> 00h
              </p>
            </div>

            <div
              className={`flex flex-col items-start gap-6 rounded-2xl border border-border bg-card/60 p-8 backdrop-blur-lg transition-all duration-700 hover:border-primary/40 sm:flex-row sm:items-center sm:justify-between ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Clock className="text-primary" size={22} />
                </div>
                <div className="text-left">
                  <p className="text-lg font-semibold text-foreground">Sábado</p>
                  <p className="text-sm text-muted-foreground">Fim de semana</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-display text-2xl text-foreground md:text-3xl">
                  8h <span className="text-primary">—</span> 12h
                </p>
                <p className="font-display text-2xl text-foreground md:text-3xl">
                  13h <span className="text-primary">—</span> 17h
                </p>
              </div>
            </div>
          </div>

          <a
            href={createWhatsAppLink(
              "Olá! Gostaria de mais informações sobre a Academia Audax, os horários e os planos.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-10 inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3 font-semibold text-foreground transition-all hover:border-primary/40 hover:text-primary ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "650ms" }}
          >
            <MessageCircle size={18} />
            Consultar horários e matrícula
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
