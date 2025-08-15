import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Product {
  id: string;
  title: string;
  price: string;
  description: string;
  images: string[];
  purchaseLink: string;
}

interface ProductShowcaseProps {
  products: Product[];
}

const ProductShowcase = ({ products }: ProductShowcaseProps) => {
  return (
    <section id="products" className="py-16 lg:py-24 bg-gradient-to-b from-eco-beige to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Выберите свой <span className="text-primary">iGen</span> тест
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Откройте секреты своей ДНК и получите персональные рекомендации
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="border-0 shadow-xl bg-card/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="mb-6">
                  <img 
                    src={product.images[0]} 
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                  {product.title}
                </h3>
                
                <div className="text-2xl font-bold text-primary mb-4">
                  {product.price}
                </div>
                
                <p className="text-muted-foreground mb-6 flex-grow line-clamp-3">
                  {product.description}
                </p>
                
                <Button 
                  variant="eco" 
                  size="lg" 
                  className="w-full group-hover:scale-105 transition-transform duration-300"
                  onClick={() => window.open(product.purchaseLink, '_blank')}
                >
                  Купить сейчас
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;