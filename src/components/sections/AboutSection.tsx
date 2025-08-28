import { Brain, Bot, DollarSign, Zap } from "lucide-react";

const AboutSection = () => {
  const pillars = [
    {
      icon: Brain,
      title: "Universal Mind",
      emoji: "🌌",
      description: "Tap into the infinite intelligence that governs all creation. Understanding universal principles is the foundation of true prosperity.",
      color: "accent"
    },
    {
      icon: Bot,
      title: "Artificial Intelligence",
      emoji: "🤖",
      description: "Harness cutting-edge AI tools and technologies to amplify your capabilities and create unprecedented opportunities.",
      color: "primary"
    },
    {
      icon: DollarSign,
      title: "Prosperity Systems",
      emoji: "💼",
      description: "Build sustainable wealth systems that align with both technological advancement and universal laws of abundance.",
      color: "prosperity"
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="bg-gradient-cosmic bg-clip-text text-transparent">
              The Three Pillars
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            True wealth emerges when these three forces align in perfect harmony.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.title}
                className="card-cosmic p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon & Emoji */}
                <div className="mb-6 relative">
                  <div className={`w-20 h-20 mx-auto rounded-full bg-${pillar.color}/10 flex items-center justify-center mb-4 group-hover:shadow-glow-${pillar.color === 'prosperity' ? 'accent' : pillar.color} transition-all duration-300`}>
                    <Icon className={`w-10 h-10 text-${pillar.color}`} />
                  </div>
                  <div className="text-4xl">{pillar.emoji}</div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Connection Visual */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-8 mb-8">
            <Zap className="w-8 h-8 text-prosperity animate-pulse" />
            <div className="text-2xl font-heading font-semibold text-prosperity">
              =
            </div>
            <Zap className="w-8 h-8 text-prosperity animate-pulse" />
          </div>
          
          <div className="max-w-4xl mx-auto card-cosmic p-8 rounded-2xl">
            <h3 className="text-3xl font-heading font-bold mb-4">
              <span className="text-prosperity-glow">True Wealth Creation</span>
            </h3>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              When you combine the timeless wisdom of universal principles with the revolutionary power of artificial intelligence, 
              you create prosperity systems that are both sustainable and exponentially scalable. This is where magic happens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;