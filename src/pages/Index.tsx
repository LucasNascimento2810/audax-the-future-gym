import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyAudaxSection from "@/components/WhyAudaxSection";
import AboutSection from "@/components/AboutSection";
import StructureSection from "@/components/StructureSection";
import PlansSection from "@/components/PlansSection";
import CtaSection from "@/components/CtaSection";
import ScheduleSection from "@/components/ScheduleSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhyAudaxSection />
      <AboutSection />
      <StructureSection />
      <PlansSection />
      <CtaSection />
      <ScheduleSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
