import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-accent/30 z-0" />
      
      {/* Декоративные элементы */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 bg-muted rounded-full mb-6 animate-pulse-slow">
            <ShieldAlert className="h-6 w-6 text-primary mr-2" />
            <span className="text-sm font-medium">Уровень угрозы: умеренный</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            SCE Foundation
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Обеспечиваем безопасность человечества путем <span className="text-primary font-medium">изоляции</span>, <span className="text-primary font-medium">изучения</span> и <span className="text-primary font-medium">контроля</span> аномальных объектов и явлений.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg" className="animate-fade-in">
              <Link to="/objects">Исследовать объекты</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">О нашей миссии</Link>
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="bg-card border border-border rounded-lg p-4 inline-flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-muted-foreground">Системы содержания функционируют нормально</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
