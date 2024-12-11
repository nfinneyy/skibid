import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

interface ShrinkHeaderProps {
  logo: string;
}

export default function ShrinkHeader({ logo }: ShrinkHeaderProps) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const maxHeight = 1000;
  const minHeight = 64;
  const shrinkRange = 200;
  const initialOffset = 100; // Initial offset from top

  const currentHeight = Math.max(
    maxHeight - (scrollPosition * (maxHeight - minHeight)) / shrinkRange,
    minHeight
  );

  const logoSize = Math.max(120 + (currentHeight - minHeight) * 1.5, 120);

  // Calculate opacity and transforms based on scroll position
  const scrollProgress = Math.min(scrollPosition / shrinkRange, 1);
  const linksOpacity = Math.max(
    0,
    Math.min((scrollPosition - 100) / (shrinkRange / 2), 1)
  );
  const linksTransform = `translateX(${(1 - linksOpacity) * 50}px)`;

  // Calculate logo position
  const logoTransform = `translateX(${(1 - scrollProgress) * 7}%)`;
  const topOffset = Math.max(initialOffset - scrollPosition, 0);

  return (
    <>
      <NavigationMenu
        style={{ top: `${topOffset}px`, paddingBottom: `${currentHeight}px` }}
        className="fixed top-0 left-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <NavigationMenuList
          style={{
            transform: logoTransform,
            transition: "transform 0.3s ease-out",
            width: "100%",
            justifyContent: scrollProgress === 1 ? "flex-start" : "center",
          }}
        >
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink>
                <img
                  src={logo}
                  alt="logo"
                  style={{
                    width: `${logoSize}px`,
                    transition: "width 0.2s ease-out",
                  }}
                />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList
          style={{
            opacity: linksOpacity,
            transform: linksTransform,
            transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
          }}
        >
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
      <main style={{ paddingTop: `${currentHeight + 400}px` }}>
        <Outlet />
      </main>
    </>
  );
}
