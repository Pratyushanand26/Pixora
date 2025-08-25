import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wand2, Palette, Share2, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Wand2,
      title: "AI Photo Generation",
      description: "Transform your photos with advanced AI algorithms that understand context, lighting, and artistic style to create stunning visuals.",
    },
    {
      icon: Palette,
      title: "Personalized Styles",
      description: "Choose from hundreds of artistic styles or create your own. Our AI learns your preferences to deliver personalized results.",
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Share your creations instantly to social media, export in multiple formats, or collaborate with teams seamlessly.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate professional-quality images in seconds. Our optimized AI infrastructure ensures fast processing without compromising quality.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Powerful Features for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Creative Minds
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unlock your creative potential with our comprehensive suite of AI-powered tools designed for professionals and enthusiasts alike.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-glow group"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;