import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-cosmic opacity-5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <h2 className="font-cursive text-blue-900 text-xl mb-6">
            Next Level Wealth TV
          </h2>
        </div>

        {/* Main Headline */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
            <span className="text-glow">Unlock AI.</span>
            <br />
            <span className="bg-gradient-cosmic bg-clip-text text-transparent animate-gradient">
              Align with Universal
            </span>
            <br />
            <span className="text-prosperity-glow">Principles. Prosper.</span>
          </h1>
        </div>

        {/* Subtext */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-body font-light leading-relaxed">
            We teach you how to combine{" "}
            <span className="text-primary font-semibold">artificial intelligence</span>{" "}
            with{" "}
            <span className="text-accent font-semibold">timeless truths</span>{" "}
            to build{" "}
            <span className="text-prosperity font-semibold">wealth, freedom, and purpose.</span>
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            variant="hero"
            className="text-lg px-8 py-6 h-auto rounded-xl"
            onClick={() => {
              // This will link to MailerLite signup form
              console.log('Navigate to MailerLite signup');
            }}
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Start Your AI Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full mx-auto relative">
            <div className="w-1 h-3 bg-primary rounded-full mx-auto mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;