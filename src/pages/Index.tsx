import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    direction: "",
    message: ""
  });

  const directions = [
    {
      title: "Масла для дерева",
      description: "Профессиональные покрытия для защиты и красоты дерева",
      image: "https://cdn.poehali.dev/projects/1f6599fa-9eb2-4748-8670-a02b94c313ec/files/033d841c-b8ec-4697-9e74-3c0cb16bf6ca.jpg",
      link: "/oil"
    },
    {
      title: "Дома из бруса",
      description: "Строим дома под ключ, уютные и долговечные",
      image: "https://cdn.poehali.dev/projects/1f6599fa-9eb2-4748-8670-a02b94c313ec/files/cc997674-d72c-4c5f-b16f-ae73ecffec52.jpg",
      link: "/houses"
    },
    {
      title: "Мебель из дуба",
      description: "Мебель, которая живёт поколениями",
      image: "https://cdn.poehali.dev/projects/1f6599fa-9eb2-4748-8670-a02b94c313ec/files/5c637c1e-1330-45db-a681-c53506e193b1.jpg",
      link: "/furniture"
    },
    {
      title: "Услуги по дереву",
      description: "Герметизация, шлифовка, утепление, покраска",
      image: "https://cdn.poehali.dev/projects/1f6599fa-9eb2-4748-8670-a02b94c313ec/files/5c637c1e-1330-45db-a681-c53506e193b1.jpg",
      link: "/services"
    }
  ];

  const benefits = [
    { icon: "Sprout", text: "Натуральные материалы" },
    { icon: "HardHat", text: "Профессиональные мастера" },
    { icon: "Clock", text: "Работаем точно в срок" },
    { icon: "Home", text: "Полный комплекс услуг" },
    { icon: "Camera", text: "Фото и видеоотчёты" },
    { icon: "Globe", text: "Доставка по всей России" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время."
    });
    setFormData({ name: "", phone: "", direction: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://cdn.poehali.dev/projects/1f6599fa-9eb2-4748-8670-a02b94c313ec/files/5c637c1e-1330-45db-a681-c53506e193b1.jpg')`
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Дерево живёт.<br />Мы помогаем ему жить дольше.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            Масла, дома, мебель и услуги — всё в одном бренде, с душой и мастерством.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6"
              onClick={() => document.getElementById('directions')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Выбрать направление
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Познакомиться с брендом
            </Button>
          </div>
        </div>
      </section>

      <section id="directions" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            Наши направления
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {directions.map((direction, index) => (
              <Card 
                key={index}
                className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] animate-scale-in border-2 border-transparent hover:border-accent"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={direction.image} 
                    alt={direction.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <CardContent className="p-6 -mt-20 relative z-10">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors">
                    {direction.title}
                  </h3>
                  <p className="text-gray-200 mb-4">
                    {direction.description}
                  </p>
                  <Button className="bg-secondary hover:bg-secondary/90">
                    Перейти
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Эксперты по дереву с 20-летним опытом
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-lg bg-muted/20 hover:bg-muted/40 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Icon name={benefit.icon} size={24} className="text-white" />
                </div>
                <p className="text-lg font-medium pt-2">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Хотите консультацию или расчет стоимости?
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Оставьте заявку, и мы свяжемся с вами в ближайшее время
          </p>
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input 
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="text-lg py-6"
                />
              </div>
              <div>
                <Input 
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="text-lg py-6"
                />
              </div>
              <div>
                <select 
                  className="w-full text-lg py-3 px-4 border border-input rounded-md bg-background"
                  value={formData.direction}
                  onChange={(e) => setFormData({...formData, direction: e.target.value})}
                  required
                >
                  <option value="">Выберите направление</option>
                  <option value="oil">Масла</option>
                  <option value="houses">Дома</option>
                  <option value="furniture">Мебель</option>
                  <option value="services">Услуги</option>
                </select>
              </div>
              <div>
                <Textarea 
                  placeholder="Ваш вопрос или комментарий"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="min-h-32 text-lg"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-secondary hover:bg-secondary/90 text-lg py-6"
              >
                Получить консультацию
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Wood Craft</h3>
              <p className="text-primary-foreground/80">
                Эксперты по дереву с 20-летним опытом
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Направления</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="/oil" className="hover:text-accent transition-colors">Масла</a></li>
                <li><a href="/houses" className="hover:text-accent transition-colors">Дома</a></li>
                <li><a href="/furniture" className="hover:text-accent transition-colors">Мебель</a></li>
                <li><a href="/services" className="hover:text-accent transition-colors">Услуги</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
              <div className="space-y-3 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={20} />
                  <span>+7 (XXX) XXX-XX-XX</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={20} />
                  <span>info@woodcraft.ru</span>
                </div>
                <div className="flex gap-4 mt-4">
                  <a href="#" className="hover:text-accent transition-colors">
                    <Icon name="Youtube" size={24} />
                  </a>
                  <a href="#" className="hover:text-accent transition-colors">
                    <Icon name="Instagram" size={24} />
                  </a>
                  <a href="#" className="hover:text-accent transition-colors">
                    <Icon name="Send" size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-6 text-center text-primary-foreground/60">
            <p>&copy; 2024 Wood Craft. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
