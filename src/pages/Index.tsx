import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MissionsSection from "@/components/MissionsSection";
import StatsSection from "@/components/StatsSection";
import TechSection from "@/components/TechSection";
import TimelineSection from "@/components/TimelineSection";
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
        <StatsSection />
        <TechSection />
        <TimelineSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
