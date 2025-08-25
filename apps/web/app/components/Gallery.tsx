import { Button } from "@/components/ui/button";
import Image from "next/image";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      image: gallery1,
      title: "Professional Headshot",
      category: "Business",
    },
    {
      image: gallery2,
      title: "Travel Photography",
      category: "Lifestyle",
    },
    {
      image: gallery3,
      title: "Artistic Portrait",
      category: "Creative",
    },
    {
      image: gallery4,
      title: "Fashion Photography",
      category: "Commercial",
    },
    {
      image: gallery5,
      title: "Nature Landscape",
      category: "Landscape",
    },
    {
      image: gallery6,
      title: "Digital Art",
      category: "Futuristic",
    },
  ];

  return (
    <section id="gallery" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            See the{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Magic in Action
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our gallery of AI-generated photos showcasing the incredible transformations possible with Pixora.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:shadow-glow transition-all duration-500 hover:scale-105"
            >
              <div className="aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-sm text-primary font-medium mb-2">
                  {item.category}
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button className="px-8 py-4 rounded-xl font-semibold">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;