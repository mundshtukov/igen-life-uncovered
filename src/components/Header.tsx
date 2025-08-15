import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">
              i<span className="text-eco-soft-green">Gen</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection('life')}
              className="text-foreground hover:text-primary transition-colors"
            >
              iGen life
            </button>
            <button 
              onClick={() => scrollToSection('health')}
              className="text-foreground hover:text-primary transition-colors"
            >
              iGen health
            </button>
            <button 
              onClick={() => scrollToSection('beauty')}
              className="text-foreground hover:text-primary transition-colors"
            >
              iGen beauty
            </button>
          </nav>

          <Button variant="eco" size="lg">
            Купить
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;