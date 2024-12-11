// src/components/RootLayout.tsx
import { Link, Outlet } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import logo from "../assets/logo.svg";

const RootLayout = () => {
  return (
    <div>
      <NavigationMenu className="sticky top-0 left-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink>
                <img width={120} src={logo} alt="logo" />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink>Music</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/about">
              <NavigationMenuLink>Socials</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/news">
              <NavigationMenuLink>News</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
