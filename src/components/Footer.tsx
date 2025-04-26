import { Link } from "react-router-dom";
import { ShieldAlert } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-sidebar border-t border-border py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary mb-3">
              <ShieldAlert className="h-6 w-6" />
              <span>SCE Foundation</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Secure. Control. Explore.
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              © 2025 SCE Foundation. Все права защищены.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-foreground">Главная</Link></li>
              <li><Link to="/objects" className="text-sm text-muted-foreground hover:text-foreground">Объекты SCE</Link></li>
              <li><Link to="/news" className="text-sm text-muted-foreground hover:text-foreground">Новости</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">О Фонде</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Документы</h3>
            <ul className="space-y-2">
              <li><Link to="/docs/terms" className="text-sm text-muted-foreground hover:text-foreground">Условия использования</Link></li>
              <li><Link to="/docs/privacy" className="text-sm text-muted-foreground hover:text-foreground">Политика конфиденциальности</Link></li>
              <li><Link to="/docs/protocols" className="text-sm text-muted-foreground hover:text-foreground">Протоколы безопасности</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Доступ</h3>
            <ul className="space-y-2">
              <li><Link to="/login" className="text-sm text-muted-foreground hover:text-foreground">Вход</Link></li>
              <li><Link to="/register" className="text-sm text-muted-foreground hover:text-foreground">Регистрация</Link></li>
              <li><Link to="/clearance" className="text-sm text-muted-foreground hover:text-foreground">Уровни доступа</Link></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="text-xs text-muted-foreground">
          <p>ВНИМАНИЕ: Несанкционированный доступ или распространение информации о объектах SCE является нарушением протоколов безопасности и преследуется по закону.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
