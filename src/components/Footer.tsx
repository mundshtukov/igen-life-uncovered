const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold mb-4">
              i<span className="text-eco-soft-green">Gen</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Персональные генетические тесты для здоровья, красоты и долголетия
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Продукты</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>iGen life</li>
              <li>iGen health</li>
              <li>iGen beauty</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="bg-amber-100 text-amber-800 p-4 rounded-lg mb-6">
            <p className="text-sm font-medium">
              ⚠️ Важно! Территория забора генетического материала должна совпадать с территорией доставки товара.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <p>&copy; 2025 iGen. Все права защищены.</p>
            <p>Генетические тесты для персонализированного подхода к здоровью</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;