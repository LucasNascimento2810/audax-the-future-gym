import gymRunning from "@/assets/optimized/gym-running.jpg";
import gymSquat from "@/assets/optimized/gym-squat.jpg";
import gymTraining from "@/assets/optimized/gym-training.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import AcademyFacadeImage from "./AcademyFacadeImage";

type GalleryItem =
  | {
      alt: string;
      label: string;
      useFacade: true;
      featured?: boolean;
    }
  | {
      alt: string;
      label: string;
      src: string;
      useFacade?: false;
      featured?: boolean;
    };

const images: GalleryItem[] = [
  {
    alt: "Imagem da Academia Audax",
    label: "ACADEMIA AUDAX",
    useFacade: true,
    featured: true,
  },
  {
    src: gymSquat,
    alt: "Ambiente de treino na Audax",
    label: "AMBIENTE DE TREINO",
  },
  {
    src: gymRunning,
    alt: "Espaço interno da Audax",
    label: "ESPAÇO INTERNO",
  },
  {
    src: gymTraining,
    alt: "Estrutura da Audax",
    label: "ESTRUTURA AUDAX",
  },
] as const;

const StructureSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="estrutura" className="py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
            Estrutura
          </span>
          <h2 className="mt-3 font-display text-5xl text-foreground md:text-7xl">
            CONHEÇA MELHOR
            <br />
            <span className="text-gradient">A ESTRUTURA</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Um conjunto de imagens para apresentar melhor a academia, reforçar a
            estrutura e deixar a navegação mais convincente.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:auto-rows-[220px]">
          {images.map((img, index) => (
            <div
              key={img.label}
              className={`group relative cursor-pointer overflow-hidden rounded-[2rem] border border-border bg-card/60 transition-all duration-700 hover:-translate-y-2 hover:border-primary/30 ${
                "featured" in img && img.featured
                  ? "h-[360px] sm:h-[460px] lg:col-span-2 lg:row-span-2 lg:h-full"
                  : "h-[260px] sm:h-[300px] lg:h-full"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              {img.useFacade ? (
                <AcademyFacadeImage
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : "src" in img ? (
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : null}

              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/10" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="mb-4 h-1 w-10 rounded-full bg-primary transition-all duration-500 group-hover:w-16" />
                <h3
                  className={`font-display tracking-wider text-foreground ${
                    "featured" in img && img.featured ? "text-4xl md:text-5xl" : "text-3xl"
                  }`}
                >
                  {img.label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StructureSection;
