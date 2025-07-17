import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const dinosaurs = [
    {
      id: 1,
      name: "Тираннозавр Рекс",
      price: "15,000₽",
      image: "/img/90983b4e-1704-405c-8090-d46b4a6290a6.jpg",
      description: "Легендарный хищник мелового периода. Высота 35 см",
      badge: "Хит продаж"
    },
    {
      id: 2,
      name: "Трицератопс",
      price: "12,000₽",
      image: "/img/25f3b1a6-03fc-4895-879e-a46022986a4c.jpg",
      description: "Травоядный гигант с тремя рогами. Высота 28 см",
      badge: "Новинка"
    },
    {
      id: 3,
      name: "Стегозавр",
      price: "13,500₽",
      image: "/img/4475cdcf-f61f-403f-98af-de14b27e1727.jpg",
      description: "Броненосный динозавр с шипами. Высота 30 см",
      badge: "Коллекционная"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Crown" className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">DinoStore 3D</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#catalog" className="text-gray-600 hover:text-primary transition-colors">Каталог</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О нас</a>
              <a href="#blog" className="text-gray-600 hover:text-primary transition-colors">Блог</a>
              <a href="#delivery" className="text-gray-600 hover:text-primary transition-colors">Доставка</a>
              <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary text-white hover:bg-primary/90">
              <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
              Корзина
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Коллекция 3D Динозавров
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Премиальные 3D модели динозавров для истинных коллекционеров. 
            Высочайшее качество печати и детализация.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-orange-50">
              <Icon name="Eye" className="h-5 w-5 mr-2" />
              Смотреть каталог
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Play" className="h-5 w-5 mr-2" />
              Как это работает
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Printer" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Высокое качество</h3>
              <p className="text-gray-600 text-sm">Профессиональная 3D печать с точностью до 0.1мм</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Быстрая доставка</h3>
              <p className="text-gray-600 text-sm">Отправка в течение 1-3 дней по всей России</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Гарантия качества</h3>
              <p className="text-gray-600 text-sm">30 дней гарантии на все изделия</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Для коллекционеров</h3>
              <p className="text-gray-600 text-sm">Эксклюзивные модели для истинных ценителей</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Каталог динозавров</h2>
            <p className="text-xl text-gray-600">Топовые модели нашей коллекции</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dinosaurs.map((dino) => (
              <Card key={dino.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={dino.image} 
                    alt={dino.name}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary">{dino.badge}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{dino.name}</CardTitle>
                  <CardDescription>{dino.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{dino.price}</span>
                    <Button className="bg-primary hover:bg-primary/90">
                      <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">О нашем магазине</h2>
            <p className="text-xl text-gray-600 mb-6">
              DinoStore 3D — это специализированный магазин для коллекционеров 3D моделей динозавров. 
              Мы создаем высококачественные модели, которые поражают своей детализацией и точностью.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Каждая модель печатается на профессиональных 3D принтерах с использованием качественных материалов. 
              Размеры наших динозавров впечатляют — от 25 до 40 см в высоту.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Моделей динозавров</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-gray-600">Года опыта</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Блог о динозаврах</h2>
            <p className="text-xl text-gray-600">Интересные факты и истории</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Секреты печати динозавров</CardTitle>
                <CardDescription>Как мы создаем идеальные модели</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Узнайте о технологиях и секретах создания наших моделей...
                </p>
                <Button variant="outline" className="w-full">
                  Читать далее
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>История тираннозавра</CardTitle>
                <CardDescription>Все о самом известном хищнике</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Интересные факты о короле динозавров...
                </p>
                <Button variant="outline" className="w-full">
                  Читать далее
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Уход за коллекцией</CardTitle>
                <CardDescription>Советы коллекционерам</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Как правильно хранить и ухаживать за моделями...
                </p>
                <Button variant="outline" className="w-full">
                  Читать далее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section id="delivery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Доставка и оплата</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Способы доставки</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Truck" className="h-5 w-5 text-primary mr-3" />
                    <span>Курьерская доставка по Москве - 500₽</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Package" className="h-5 w-5 text-primary mr-3" />
                    <span>Почта России - от 300₽</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Zap" className="h-5 w-5 text-primary mr-3" />
                    <span>СДЭК - от 250₽</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="MapPin" className="h-5 w-5 text-primary mr-3" />
                    <span>Самовывоз - бесплатно</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Способы оплаты</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="CreditCard" className="h-5 w-5 text-primary mr-3" />
                    <span>Банковские карты</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Wallet" className="h-5 w-5 text-primary mr-3" />
                    <span>Электронные кошельки</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Banknote" className="h-5 w-5 text-primary mr-3" />
                    <span>Наличные при получении</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Building" className="h-5 w-5 text-primary mr-3" />
                    <span>Банковский перевод</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Контакты</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Icon name="Phone" className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Телефон</h3>
                <p className="text-gray-600">+7 (495) 123-45-67</p>
              </div>
              <div>
                <Icon name="Mail" className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">info@dinostore3d.ru</p>
              </div>
              <div>
                <Icon name="MapPin" className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Адрес</h3>
                <p className="text-gray-600">Москва, ул. Динозавров, 42</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Crown" className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">DinoStore 3D</h3>
              </div>
              <p className="text-gray-400">
                Премиальные 3D модели динозавров для коллекционеров
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Хищники</a></li>
                <li><a href="#" className="hover:text-white">Травоядные</a></li>
                <li><a href="#" className="hover:text-white">Летающие</a></li>
                <li><a href="#" className="hover:text-white">Морские</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white">О нас</a></li>
                <li><a href="#delivery" className="hover:text-white">Доставка</a></li>
                <li><a href="#" className="hover:text-white">Гарантия</a></li>
                <li><a href="#contacts" className="hover:text-white">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex space-x-4">
                <Icon name="Instagram" className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Facebook" className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Twitter" className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Youtube" className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DinoStore 3D. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;