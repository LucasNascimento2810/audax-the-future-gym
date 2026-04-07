import { Clock } from "lucide-react";

const ScheduleSection = () => {
  return (
    <section id="horarios" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">Horários</span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mt-3 mb-12">
            HORÁRIO DE<br />
            <span className="text-gradient">FUNCIONAMENTO</span>
          </h2>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-8 flex items-center justify-between hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="text-primary" size={22} />
                </div>
                <div className="text-left">
                  <p className="text-foreground font-semibold text-lg">Segunda à Sexta</p>
                  <p className="text-muted-foreground text-sm">Dias úteis</p>
                </div>
              </div>
              <p className="font-display text-3xl md:text-4xl text-foreground">
                6h <span className="text-primary">—</span> 00h
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 flex items-center justify-between hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="text-primary" size={22} />
                </div>
                <div className="text-left">
                  <p className="text-foreground font-semibold text-lg">Sábado</p>
                  <p className="text-muted-foreground text-sm">Fim de semana</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-display text-2xl md:text-3xl text-foreground">
                  8h <span className="text-primary">—</span> 12h
                </p>
                <p className="font-display text-2xl md:text-3xl text-foreground">
                  13h <span className="text-primary">—</span> 17h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
