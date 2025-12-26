import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MissionsSection from "@/components/MissionsSection";
import TechSection from "@/components/TechSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingShapes from "@/components/FloatingShapes";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden scanline">
      <FloatingShapes />
      <Navigation />
      <main>
        <HeroSection />
        <MissionsSection />
        <TechSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
