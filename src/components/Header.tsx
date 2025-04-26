import { Link } from "react-router-dom";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger, 
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Lock, ShieldAlert, FileText } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <ShieldAlert className="h-6 w-6" />
            <span>SCE Foundation</span>
          </Link>
          <div className="text-xs text-muted-foreground">Secure. Control. Explore.</div>
        </div>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Главная
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/objects">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Объекты SCE
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>О фонде</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <li className="row-span-3">
                    <Link to="/about">
                      <NavigationMenuLink
                        className={cn(
                          "flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        )}
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          О SCE Foundation
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          История, структура и цели фонда
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <ListItem to="/docs" title="Документы" icon={<FileText className="h-4 w-4 mr-2" />}>
                    Протоколы и руководства фонда
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/news">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Новости
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center gap-4">
          <Link to="/login" className="flex items-center gap-1 text-sm">
            <Lock className="h-4 w-4" />
            <span>Вход</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

interface ListItemProps {
  to: string;
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const ListItem = ({ to, title, children, icon }: ListItemProps) => {
  return (
    <li>
      <Link to={to}>
        <NavigationMenuLink asChild>
          <a
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            )}
          >
            <div className="flex items-center text-sm font-medium leading-none">
              {icon && icon}
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </Link>
    </li>
  );
};

export default Header;
