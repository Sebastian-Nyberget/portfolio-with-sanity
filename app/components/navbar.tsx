"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./MobileMenu";

export const navigationItems = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Guestbook',
        href: '/guestbook'
    },
    {
        name: 'Projects',
        href: '/projects'
    },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="max-w-7xl mx-auto px-4 md:px-8 py-5 grid grid-cols-12">
      <div className="col-span-6 flex md:col-span-3">
        <Link href="/">
          <h1 className="text-2xl font-semibold">Sebastian <span className="text-blue-500">Nyberget</span></h1>
        </Link>  
      </div>

      <div className="hidden sm:flex justify-center items-center col-span-6">
        <NavigationMenu>
          <NavigationMenuList>
            {navigationItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink 
                      active={pathname === item.href} 
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center justify-end md:col-span-3 col-span-6">
        <Button className="hidden sm:flex" asChild>
          <a href="mailto:sebnyb30@innlandetfylke.no">Kontakt meg</a>
        </Button>
        <div className="sm:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}