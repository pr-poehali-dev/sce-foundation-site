import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, AlertCircle, Beaker } from "lucide-react";

// Типы для новостей
type PostType = 'news' | 'announcement' | 'research';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  type: PostType;
  minClearanceLevel: number;
}

// Мок-данные для демонстрации
const recentNews: NewsItem[] = [
  {
    id: 1,
    title: "Обнаружен новый объект класса Евклид",
    excerpt: "Поисковая группа Альфа-7 обнаружила новый аномальный объект в северных районах Сибири. Ведется работа по созданию протоколов содержания.",
    date: "26 апреля 2025",
    type: "news",
    minClearanceLevel: 1
  },
  {
    id: 2,
    title: "Внимание: Нарушение протокола безопасности",
    excerpt: "Зафиксировано нарушение протокола безопасности в Зоне-12. Весь персонал должен ознакомиться с обновленными инструкциями.",
    date: "24 апреля 2025",
    type: "announcement",
    minClearanceLevel: 2
  },
  {
    id: 3,
    title: "Результаты исследования SCE-173",
    excerpt: "Опубликованы результаты последнего исследования объекта SCE-173. Обнаружены новые способности к мимикрии.",
    date: "20 апреля 2025",
    type: "research",
    minClearanceLevel: 3
  }
];

// Иконки для типов новостей
const newsTypeIcons = {
  news: <FileText className="h-4 w-4" />,
  announcement: <AlertCircle className="h-4 w-4" />,
  research: <Beaker className="h-4 w-4" />
};

// Цвета для типов новостей
const newsTypeColors = {
  news: "default",
  announcement: "destructive",
  research: "secondary"
};

// Названия типов новостей
const newsTypeNames = {
  news: "Новость",
  announcement: "Объявление",
  research: "Исследование"
};

const LatestNews = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Последние новости</h2>
          <Link to="/news" className="flex items-center text-primary hover:underline">
            Все новости <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentNews.map((item) => (
            <Card key={item.id} className="hover-scale">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge 
                    variant={newsTypeColors[item.type] as any} 
                    className="flex items-center gap-1"
                  >
                    {newsTypeIcons[item.type]}
                    {newsTypeNames[item.type]}
                  </Badge>
                  {item.minClearanceLevel > 1 && (
                    <Badge variant="outline" className="text-xs">
                      Уровень доступа: {item.minClearanceLevel}
                    </Badge>
                  )}
                </div>
                <CardTitle className="mt-2">{item.title}</CardTitle>
                <CardDescription>{item.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link 
                  to={`/news/${item.id}`} 
                  className="text-sm text-primary flex items-center story-link"
                >
                  Читать полностью
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
