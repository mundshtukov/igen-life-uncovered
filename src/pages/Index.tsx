import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Product data
  const products = [
    {
      id: "life",
      title: "iGen life — генетический тест для лучшего качества жизни",
      price: "19 800 ₽",
      description: "iGen life — ваш персональный гид по здоровью и долголетию. Узнайте, как реагирует ваш организм на кофе, алкоголь, сахар и жиры. Составьте оптимальный рацион и комфортный график тренировок, чтобы чувствовать себя на максимуме каждый день.",
      benefits: [
        "Персональный рацион на основе вашего генотипа",
        "Определение переносимости лактозы и глютена",
        "Расчёт допустимых норм кофеина и алкоголя",
        "Анализ углеводного и жирового обмена",
        "Чёткие рекомендации по физической активности",
        "Оптимальный режим тренировок без перегрузок"
      ],
      images: [
        "/lovable-uploads/47ca20e8-7c0a-4ca8-b189-1618139038a5.png",
        "/lovable-uploads/af901aa8-ec86-42e7-ab1a-11cacd70d7a1.png",
        "/lovable-uploads/5571afaa-01f5-4f82-8f93-e938d3664c71.png"
      ],
      purchaseLink: "https://greenwayglobal.com/shop/brands/igen/05124?gw=bnASdxUgzX",
      imageLeft: true
    },
    {
      id: "health",
      title: "iGen health — здоровье начинается с понимания себя",
      price: "15 900 ₽",
      description: "iGen health — генетический тест, который поможет вам и вашим детям понять, что нужно именно вашему организму для энергии, здоровья и долгой жизни. Получите персональные рекомендации по питанию, тренировкам и образу жизни.",
      benefits: [
        "Персональный рацион с учётом вашего генотипа",
        "Определение особенностей метаболизма",
        "Рекомендации для поддержания энергии без лишнего веса",
        "Индивидуальный план тренировок для укрепления здоровья"
      ],
      images: [
        "/lovable-uploads/f2383859-6b09-4b8e-987c-d5e3614b985d.png",
        "/lovable-uploads/b5533c71-1910-42c6-a219-e4be82de963b.png",
        "/lovable-uploads/585b3ed2-da50-409a-af6b-0ba9d2f95b65.png"
      ],
      purchaseLink: "https://greenwayglobal.com/shop/brands/igen/05123?gw=bnASdxUgzX",
      imageLeft: false
    },
    {
      id: "beauty",
      title: "iGen beauty — раскройте секрет вашей красоты",
      price: "24 900 ₽",
      description: "Каждая кожа уникальна. iGen beauty поможет понять, как замедлить старение, сохранить молодость и ухаживать за собой так, как действительно нужно именно вам. Откройте тайны вашей ДНК и подберите эффективный уход.",
      benefits: [
        "Определение индивидуальных причин старения",
        "Подбор лучших косметических процедур и средств",
        "Персональная программа питания и БАДов",
        "Рекомендации по образу жизни для сохранения красоты"
      ],
      images: [
        "/lovable-uploads/71c15de5-7f78-4405-a1c6-c76d8ce3e6c9.png",
        "/lovable-uploads/7d1d0e70-227d-47f6-9ddb-10326868ed1c.png",
        "/lovable-uploads/3b9ff154-731e-49e2-8d44-ce9998a107a8.png"
      ],
      purchaseLink: "https://greenwayglobal.com/shop/brands/igen/05125?gw=bnASdxUgzX",
      imageLeft: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <VideoSection />
        {products.map((product) => (
          <ProductSection key={product.id} {...product} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Index;