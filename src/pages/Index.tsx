import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import EbookSection from "@/components/sections/EbookSection";
import VideoSection from "@/components/sections/VideoSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <EbookSection />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default Index;
