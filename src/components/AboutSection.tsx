import { Dumbbell, Users, Clock, Trophy } from "lucide-react";
import gymTraining from "@/assets/gym-training.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { icon: Dumbbell, value: 500, suffix: "+", label: "Equipamentos" },
  { icon: Users, value: 1000, suffix: "+", label: "Alunos" },
  { icon: Clock, value: 18, suffix: "h", label: "Por dia" },
  { icon: Trophy, value: 5, suffix: "+", label: "Anos" },
];

const StatItem = ({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) => {
  const count = useCountUp(stat.value, isVisible, 2000);
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-3">
        <stat.icon size={22} />
      </div>
      <p className="font-display text-3xl text-foreground">{count}{stat.suffix}</p>
      <p className="text-muted-foreground text-xs tracking-wider uppercase">{stat.label}</p>
    </div>
  );
};

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="sobre" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-2xl" />
            <img
              src={gymTraining}
              alt="Treino na Audax Gym"
              className="relative rounded-2xl w-full object-contain shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-card/80 backdrop-blur-xl border border-primary/20 rounded-xl p-6 shadow-xl">
              <p className="font-display text-4xl text-primary">+1000</p>
              <p className="text-muted-foreground text-sm">alunos ativos</p>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">Sobre nós</span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mt-3 mb-6">
              MAIS QUE UMA<br />
              <span className="text-gradient">ACADEMIA</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A Audax Gym é referência em Cascavel quando o assunto é treino de alta performance. 
              Com equipamentos de última geração, profissionais qualificados e um ambiente que inspira 
              superação, oferecemos tudo que você precisa para alcançar seus objetivos.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Nossa estrutura foi projetada para proporcionar a melhor experiência de treino, 
              seja você iniciante ou atleta avançado.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <StatItem key={stat.label} stat={stat} isVisible={isVisible} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
