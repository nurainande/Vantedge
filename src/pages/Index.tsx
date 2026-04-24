import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import FeaturesSection from "@/components/FeaturesSection";
import ExperienceSection from "@/components/ExperienceSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import ReasonsSection from "@/components/ReasonsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import StillQuestionsSection from "@/components/StillQuestionsSection";
import GetStartedSection from "@/components/GetStartedSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <ExperienceSection />
      <WhoWeAreSection />
      <ReasonsSection />
      <TestimonialsSection />
      <FaqSection />
      <StillQuestionsSection />
      <GetStartedSection />
      <Footer />
    </div>
  );
};

export default Index;
