import gymSquat from "@/assets/gym-squat.jpg";
import gymRunning from "@/assets/gym-running.jpg";
import gymTraining from "@/assets/gym-training.jpg";

const images = [
  { src: gymSquat, alt: "Área de musculação", label: "MUSCULAÇÃO" },
  { src: gymRunning, alt: "Treino funcional", label: "FUNCIONAL" },
  { src: gymTraining, alt: "Personal trainer", label: "PERSONAL" },
];

const StructureSection = () => {
  return (
    <section id="estrutura" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">Estrutura</span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mt-3">
            ESTRUTURA<br />
            <span className="text-gradient">DE ELITE</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={img.label}
              className="group relative rounded-2xl overflow-hidden h-[450px] cursor-pointer"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-10 h-1 bg-primary rounded-full mb-4 transition-all duration-500 group-hover:w-16" />
                <h3 className="font-display text-3xl text-foreground tracking-wider">{img.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StructureSection;
