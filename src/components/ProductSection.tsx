import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductSlider from "./ProductSlider";
import { Check } from "lucide-react";

interface ProductSectionProps {
  id: string;
  title: string;
  price: string;
  description: string;
  benefits: string[];
  images: string[];
  purchaseLink: string;
  imageLeft?: boolean;
}

const ProductSection = ({
  id,
  title,
  price,
  description,
  benefits,
  images,
  purchaseLink,
  imageLeft = true
}: ProductSectionProps) => {
  return (
    <section id={id} className={`py-16 lg:py-24 ${imageLeft ? 'bg-background' : 'bg-eco-beige'}`}>
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
          imageLeft ? '' : 'lg:grid-cols-2'
        }`}>
          {/* Image Section */}
          <div className={`${imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
            <ProductSlider images={images} productName={title} />
          </div>
          
          {/* Content Section */}
          <div className={`${imageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
            <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 lg:p-10">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {title}
                </h2>
                
                <div className="text-3xl font-bold text-primary mb-6">
                  {price}
                </div>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {description}
                </p>
                
                <div className="space-y-4 mb-10">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-eco-soft-green mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="eco" 
                  size="xl" 
                  className="w-full"
                  onClick={() => window.open(purchaseLink, '_blank')}
                >
                  Купить сейчас
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;