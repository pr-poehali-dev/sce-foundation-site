import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle, ShieldAlert } from "lucide-react";

// Типы для объекта SCE
type ObjectClass = 'Safe' | 'Euclid' | 'Keter' | 'Thaumiel' | 'Neutralized';

interface SCEObject {
  id: number;
  itemNumber: string;
  objectClass: ObjectClass;
  title: string;
  summary: string;
  containmentSummary: string;
}

// Мок-данные для демонстрации
const randomObject: SCEObject = {
  id: 173,
  itemNumber: "SCE-173",
  objectClass: "Euclid",
  title: "Скульптура - Первородная",
  summary: "Бетонная статуя, способная двигаться с невероятной скоростью, когда не находится в прямом поле зрения наблюдателя.",
  containmentSummary: "Объект должен содержаться в запертом контейнере, к которому запрещено приближаться ближе 5 метров без сопровождения как минимум 3 сотрудников класса D."
};

// Цвета для классов объектов
const objectClassColors: Record<ObjectClass, string> = {
  Safe: "bg-green-500",
  Euclid: "bg-yellow-500",
  Keter: "bg-red-500",
  Thaumiel: "bg-blue-500",
  Neutralized: "bg-gray-500"
};

const FeaturedObject = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Случайный объект SCE</h2>
          <Button variant="outline" size="sm" asChild>
            <Link to="/objects">
              Другой объект
            </Link>
          </Button>
        </div>
        
        <Card className="border-2">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="font-mono text-lg font-bold">{randomObject.itemNumber}</div>
                <div className={`h-3 w-3 rounded-full ${objectClassColors[randomObject.objectClass]}`} />
                <div className="text-sm">Класс: <span className="font-medium">{randomObject.objectClass}</span></div>
              </div>
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
            </div>
            <Separator className="my-3" />
            <CardTitle className="text-2xl">{randomObject.title}</CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2 flex items-center">
                <ShieldAlert className="mr-2 h-5 w-5 text-primary" />
                Краткие процедуры содержания
              </h3>
              <p className="text-muted-foreground">{randomObject.containmentSummary}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Описание</h3>
              <p className="text-muted-foreground">{randomObject.summary}</p>
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-between">
            <Badge variant="outline">Требуется уровень доступа 1</Badge>
            <Button asChild>
              <Link to={`/objects/${randomObject.itemNumber}`}>
                Полное досье
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default FeaturedObject;
