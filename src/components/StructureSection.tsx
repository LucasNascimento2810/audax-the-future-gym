import { ArrowUpRight, Dumbbell, HeartPulse, Users, type LucideIcon } from "lucide-react";
import gymRunning from "@/assets/optimized/gym-running.jpg";
import gymSquat from "@/assets/optimized/gym-squat.jpg";
import gymTraining from "@/assets/optimized/gym-training.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type StructureHighlight = {
  title: string;
  description: string;
};

type GalleryItem = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  featured?: boolean;
};

const structureHighlights: StructureHighlight[] = [
  {
    title: "Acompanhamento proximo",
    description: "Espaco para treinar com orientacao, atencao ao movimento e mais confianca.",
  },
  {
    title: "Cardio com ritmo",
    description: "Area pensada para condicionamento e treinos que pedem constancia no dia a dia.",
  },
  {
    title: "Forca para evoluir",
    description: "Equipamentos e ambiente preparados para quem quer treinar com seriedade.",
  },
];

const galleryItems: GalleryItem[] = [
  {
    src: gymTraining,
    alt: "Treino acompanhado na Audax Gym",
    eyebrow: "Acompanhamento",
    title: "Treino com apoio real",
    description: "Uma rotina mais segura e bem conduzida desde o primeiro treino.",
    icon: Users,
    featured: true,
  },
  {
    src: gymRunning,
    alt: "Treino de cardio na Audax Gym",
    eyebrow: "Cardio",
    title: "Energia para manter o ritmo",
    description: "Espaco para acelerar, ganhar folego e sustentar a consistencia.",
    icon: HeartPulse,
  },
  {
    src: gymSquat,
    alt: "Treino de forca na Audax Gym",
    eyebrow: "Forca",
    title: "Estrutura para treinar pesado",
    description: "Ambiente de musculacao pensado para evolucao progressiva.",
    icon: Dumbbell,
  },
];

const StructureSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="estrutura" className="py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid items-start gap-10 xl:grid-cols-[0.92fr_1.08fr]">
          <div
            className={`xl:sticky xl:top-28 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
              Estrutura
            </span>
            <h2 className="mt-3 font-display text-5xl text-foreground md:text-7xl">
              CONHECA MELHOR
              <br />
              <span className="text-gradient">A ESTRUTURA</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Organizei esta secao para mostrar tres momentos diferentes da Audax sem repetir
              a mesma imagem: apoio no treino, ritmo no cardio e foco na musculacao.
            </p>

            <div className="mt-8 rounded-[2rem] border border-border bg-card/60 p-6 backdrop-blur-xl md:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-primary">
                O que voce encontra aqui
              </p>
              <div className="mt-6 space-y-4">
                {structureHighlights.map((item, index) => (
                  <div
                    key={item.title}
                    className={`rounded-[1.5rem] border border-white/5 bg-background/35 p-5 transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                    }`}
                    style={{ transitionDelay: `${180 + index * 120}ms` }}
                  >
                    <p className="text-lg font-semibold text-foreground">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:grid-rows-[minmax(260px,1fr)_minmax(260px,1fr)]">
            {galleryItems.map((item, index) => (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-[2rem] border border-border bg-card/60 transition-all duration-700 hover:-translate-y-2 hover:border-primary/30 ${
                  item.featured ? "min-h-[420px] md:row-span-2 md:min-h-[560px]" : "min-h-[280px]"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${280 + index * 140}ms` }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
                <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/10" />
                <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-background/60 text-primary backdrop-blur-md">
                  <item.icon size={22} />
                </div>
                <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-background/50 text-foreground/80 backdrop-blur-md transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
                    {item.eyebrow}
                  </p>
                  <h3
                    className={`mt-3 font-display leading-none text-foreground ${
                      item.featured ? "text-4xl md:text-5xl" : "text-3xl"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/80">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StructureSection;
