import { Button } from "@/components/ui/button";
import { Play, Youtube, Calendar, Clock, ArrowRight } from "lucide-react";

const VideoSection = () => {
  // Mock video data - replace with actual YouTube videos
  const featuredVideos = [
    {
      id: 1,
      title: "AI Wealth Creation: 5 Strategies That Actually Work",
      description: "Learn the exact AI strategies that generated over $100K in passive income.",
      thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=225&fit=crop&auto=format",
      duration: "15:42",
      views: "125K"
    },
    {
      id: 2,
      title: "Universal Laws of Abundance: Ancient Wisdom Meets Modern AI",
      description: "Discover how to align cosmic principles with AI for exponential growth.",
      thumbnail: "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?w=400&h=225&fit=crop&auto=format",
      duration: "22:15",
      views: "89K"
    },
    {
      id: 3,
      title: "Building Your First AI-Powered Income Stream",
      description: "Step-by-step guide to creating automated wealth systems with AI.",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=225&fit=crop&auto=format",
      duration: "18:30",
      views: "203K"
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Youtube className="w-4 h-4" />
            CONTENT HUB
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="text-foreground">Weekly</span>{" "}
            <span className="bg-gradient-cosmic bg-clip-text text-transparent">AI & Wealth</span>{" "}
            <span className="text-foreground">Wisdom</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            Master the art of AI-powered wealth creation with our exclusive video teachings.
          </p>
        </div>

        {/* Featured Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredVideos.map((video, index) => (
            <div 
              key={video.id}
              className="card-cosmic rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm font-semibold">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {video.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Play className="w-4 h-4" />
                    <span>{video.views} views</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{video.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Schedule */}
        <div className="bg-gradient-to-r from-muted/50 to-muted/20 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
              Weekly AI & Wealth Wisdom
            </h3>
            <p className="text-muted-foreground">
              New content every week to accelerate your journey to prosperity
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-1">Mondays</h4>
              <p className="text-sm text-muted-foreground">AI Tool Deep Dives</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Play className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-1">Wednesdays</h4>
              <p className="text-sm text-muted-foreground">Universal Principles</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-prosperity/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Youtube className="w-6 h-6 text-prosperity" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-1">Fridays</h4>
              <p className="text-sm text-muted-foreground">Success Stories & Results</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="cosmic" 
            size="lg"
            className="text-lg px-8 py-6 h-auto rounded-xl"
            onClick={() => window.open('https://youtube.com', '_blank')}
          >
            <Youtube className="w-5 h-5 mr-2" />
            Visit Our YouTube Channel
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;