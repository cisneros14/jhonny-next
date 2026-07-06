"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Instagram } from "lucide-react";
import { FaWhatsapp, FaTiktok } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Inicio", href: "/" },
  { title: "Conócenos", href: "/conocenos" },
  { title: "Galería", href: "/galeria" },
  { title: "Posters", href: "/posters" },
  { title: "Contáctanos", href: "/contactanos" },
  { title: "Blog", href: "/blog" },
  { title: "Noticias", href: "/noticias" },
];

const socialLinks = [
  { icon: Instagram, href: "#" },
  { icon: FaTiktok, href: "#" },
  { icon: FaThreads, href: "#" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 !bg-[#0f0f0f]">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20">
              <Image
                src="/logoG.png"
                alt="Geoalienz Logo"
                fill
                className="object-cover"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden flex-col items-center gap-2 lg:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {navItems.slice(0, 5).map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent text-white hover:bg-white/10 hover:text-white",
                      )}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}

              {/* Dropdown for Entradas */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-white">
                  Entradas
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 bg-black border border-white/10">
                    {navItems.slice(5).map((item) => (
                      <li key={item.title}>
                        <Link href={item.href} legacyBehavior passHref>
                          <NavigationMenuLink
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white text-white",
                            )}
                          >
                            {item.title}
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Social Icons (Desktop) */}
        <div className="hidden items-center gap-4 lg:flex">
          {socialLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="text-white/70 hover:text-white transition-colors"
            >
              <link.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu (Sheet) */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-black border-white/10 text-white"
            >
              <SheetHeader>
                <SheetTitle className="text-white text-left">Menú</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-lg font-medium hover:text-brand-green transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
                <div className="flex gap-6 pt-6 border-t border-white/10">
                  {socialLinks.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      className="text-white/70 hover:text-white"
                    >
                      <link.icon className="h-6 w-6" />
                    </Link>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
