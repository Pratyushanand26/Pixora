import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "Forever",
      description: "Perfect for trying out Pixora",
      features: [
        "5 AI photo generations per month",
        "Basic style filters",
        "Standard quality output",
        "Community support",
      ],
      buttonText: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "Best for content creators and professionals",
      features: [
        "Unlimited AI photo generations",
        "Premium style library",
        "4K high-quality output",
        "Priority processing",
        "Advanced editing tools",
        "Priority support",
      ],
      buttonText: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Contact us",
      description: "For teams and businesses",
      features: [
        "Everything in Pro",
        "Custom style training",
        "API access",
        "Team collaboration tools",
        "Dedicated account manager",
        "SLA guarantee",
      ],
      buttonText: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Pricing{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Overview
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            This is a demo project showcasing pricing concepts. The plans shown are for demonstration purposes only.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-primary bg-card shadow-glow' 
                  : 'border-border/50 bg-card/50 hover:bg-card/80'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="gradient-primary px-4 py-2 rounded-full flex items-center shadow-glow">
                    <Star className="w-4 h-4 mr-2 text-primary-foreground" />
                    <span className="text-sm font-medium text-primary-foreground">
                      Most Popular
                    </span>
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period !== "Contact us" && (
                    <span className="text-muted-foreground ml-2">/{plan.period}</span>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full mt-8 ${
                    plan.popular 
                      ? 'gradient-primary hover:shadow-hero' 
                      : 'variant-outline hover:bg-primary/5'
                  } transition-smooth`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            This is a personal project demo - pricing is not functional
          </p>
          <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
            <span>✓ Demo purposes only</span>
            <span>✓ Portfolio showcase</span>
            <span>✓ Concept design</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;