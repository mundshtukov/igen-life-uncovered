import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToVideo = () => {
    document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative py-20 lg:py-32 bg-gradient-to-b from-background to-eco-beige overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-eco-soft-green rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-eco-beige rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-eco-soft-green rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Генетические тесты{" "}
            <span className="text-primary">iGen</span> —{" "}
            <span className="bg-gradient-to-r from-eco-soft-green to-primary bg-clip-text text-transparent">
              путь к здоровью, долголетию и красоте
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Откройте секреты вашего организма с помощью персональных ДНК-тестов
          </p>
          
          <Button 
            variant="eco" 
            size="xl" 
            onClick={scrollToVideo}
            className="animate-pulse hover:animate-none"
          >
            Узнать подробнее
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;