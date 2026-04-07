import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PlansSection from "@/components/PlansSection";
import StructureSection from "@/components/StructureSection";
import ScheduleSection from "@/components/ScheduleSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StructureSection />
      <PlansSection />
      <ScheduleSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
