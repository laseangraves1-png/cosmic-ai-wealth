import { Youtube, Instagram, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com",
      color: "text-red-500 hover:text-red-400"
    },
    {
      name: "Instagram", 
      icon: Instagram,
      url: "https://instagram.com",
      color: "text-pink-500 hover:text-pink-400"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
      color: "text-blue-500 hover:text-blue-400"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com",
      color: "text-blue-600 hover:text-blue-500"
    }
  ];

  return (
    <footer className="relative py-16 px-4 border-t border-border/50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-cosmic opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Logo & Brand */}
          <div className="text-center md:text-left">
            <h2 className="font-cursive text-blue-900 text-xl mb-2 text-center md:text-left">
              Next Level Wealth TV
            </h2>
            <p className="text-muted-foreground text-sm">
              Where AI meets the Universal Mind
            </p>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Connect With Us
            </h4>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    className={`w-12 h-12 rounded-full ${social.color} hover:bg-primary/10 transition-all duration-300 hover:scale-110`}
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="sr-only">{social.name}</span>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Chatbot Placeholder */}
          <div className="text-center md:text-right">
            <div className="inline-block bg-muted/30 border border-dashed border-muted-foreground/30 rounded-xl p-4">
              <h4 className="font-heading font-semibold text-muted-foreground mb-2 text-sm">
                Chatbot Area
              </h4>
              <p className="text-xs text-muted-foreground/80">
                Add your Chatbase or other chatbot widget here
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Next Level Wealth TV. All rights reserved.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm">
                <span className="text-muted-foreground">Powered by </span>
                <span className="bg-gradient-cosmic bg-clip-text text-transparent font-semibold">
                  Universal Intelligence & AI
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;