import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8 shadow-glow">
          <Sparkles className="w-4 h-4 mr-2 text-primary" />
          <span className="text-sm text-muted-foreground">
            AI-Powered Photo Generation
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Bring Your Photos to Life{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            with AI
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform your ordinary photos into stunning, personalized masterpieces using cutting-edge AI technology. 
          Create professional-quality images in seconds.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-6 border-primary/20 hover:bg-primary/5 transition-smooth"
          >
            View Examples
          </Button>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">Trusted by 50,000+ creators</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold">TechCrunch</div>
            <div className="text-2xl font-bold">Forbes</div>
            <div className="text-2xl font-bold">Wired</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;