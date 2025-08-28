import { Button } from "@/components/ui/button";
import { Download, Star, Zap, TrendingUp, Sparkles } from "lucide-react";

const EbookSection = () => {
  return (
    <section className="py-24 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-prosperity opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Ebook Visual */}
          <div className="relative">
            <div className="relative perspective-1000">
              {/* Ebook Cover Mockup */}
              <div className="card-cosmic p-8 rounded-2xl transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700 hover:shadow-glow-prosperity">
                <div className="bg-gradient-prosperity p-8 rounded-xl text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-2xl font-display font-bold text-prosperity-foreground mb-2">
                    TOP 5 AI TOOLS
                  </h3>
                  <p className="text-prosperity-foreground/80 font-heading font-semibold">
                    TO BUILD WEALTH
                  </p>
                  <div className="text-xl font-bold text-prosperity-foreground mt-4">
                    2025 EDITION
                  </div>
                  
                  {/* Features */}
                  <div className="mt-6 space-y-2 text-sm text-prosperity-foreground/90">
                    <div className="flex items-center justify-center gap-2">
                      <Star className="w-4 h-4" />
                      <span>AI-Powered Strategies</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Zap className="w-4 h-4" />
                      <span>Instant Implementation</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      <span>Proven Results</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-prosperity/20 rounded-full flex items-center justify-center animate-float">
                <Sparkles className="w-6 h-6 text-prosperity" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Zap className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-prosperity/10 text-prosperity px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Download className="w-4 h-4" />
                FREE RESOURCE
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                <span className="text-prosperity-glow">Top 5 AI Tools</span>
                <br />
                <span className="text-foreground">to Build Wealth in</span>
                <br />
                <span className="bg-gradient-cosmic bg-clip-text text-transparent">2025</span>
              </h2>
              
              <p className="text-xl text-muted-foreground font-body leading-relaxed">
                Discover the exact AI tools and strategies that are creating millionaires right now. 
                This exclusive guide reveals the cutting-edge technologies you need to master for 
                exponential wealth creation in the AI era.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Star className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">AI Wealth Strategies</h4>
                  <p className="text-muted-foreground">Step-by-step implementation guides for each tool</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">Instant Access</h4>
                  <p className="text-muted-foreground">Start implementing these tools within minutes</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-prosperity/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-4 h-4 text-prosperity" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">Proven Results</h4>
                  <p className="text-muted-foreground">Case studies and real-world success stories included</p>
                </div>
              </div>
            </div>

            {/* MailerLite Form Placeholder */}
            <div className="bg-muted/50 border-2 border-dashed border-muted-foreground/30 rounded-xl p-8 text-center">
              <h3 className="text-xl font-heading font-semibold text-muted-foreground mb-2">
                MailerLite Signup Form
              </h3>
              <p className="text-muted-foreground/80 mb-4">
                Embed your MailerLite form code here
              </p>
              
              {/* Temporary CTA Button */}
              <Button variant="prosperity" size="lg" className="text-lg px-8 py-6 h-auto rounded-xl">
                <Download className="w-5 h-5 mr-2" />
                Get Your Free Ebook Now
                <Sparkles className="w-5 h-5 ml-2" />
              </Button>
              
              <p className="text-xs text-muted-foreground mt-4">
                * Replace this section with your actual MailerLite embed code
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EbookSection;