"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { ThemeContext } from "@/context/ContextProvider";



const NavBar: React.FC = () => {
  const pathname = usePathname();
  const { isDarkMode, toggleTheme }: any = useContext(ThemeContext);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const activeClass = "text-red-500 font-semibold";
  const normalClass = "hover:text-red-500 transition-colors";

  return (
    <header
      className={`py-4 shadow-md ${isDarkMode ? "bg-gray-900 text-white" : ""}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <div>
          <Link
            href="/"
            className="font-bold text-xl text-black dark:bg-gray-900 dark:text-white"
          >
            Daily News
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-8">
              {/* News */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/news"
                    className={isActive("/news") ? activeClass : normalClass}
                  >
                    News
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Services */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`transition-colors ${
                    pathname.startsWith("/services") ? activeClass : normalClass
                  } dark:bg-gray-900 dark:text-white`}
                >
                  Services
                </NavigationMenuTrigger>

                <NavigationMenuContent className="mt-2">
                  <ul className="bg-white text-gray-600 shadow-lg rounded-md px-5 py-4 space-y-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/cricket"
                          className={
                            isActive("/services/cricket")
                              ? activeClass
                              : normalClass
                          }
                        >
                          Cricket
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/political"
                          className={
                            isActive("/services/political")
                              ? activeClass
                              : normalClass
                          }
                        >
                          Political
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* About */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className={isActive("/about") ? activeClass : normalClass}
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Contact */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className={isActive("/contact") ? activeClass : normalClass}
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Dark Mode + Login */}
          <div className="flex items-center space-x-4 ml-6">
            <div onClick={toggleTheme} className="flex items-center">
              <span className="mr-2">Dark Mode</span>
              <Switch />
            </div>
            <Button variant="default">Login</Button>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md hover:bg-gray-200"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col px-4 py-2 space-y-2">
            <li>
              <Link
                href="/news"
                className={isActive("/news") ? activeClass : normalClass}
              >
                News
              </Link>
            </li>

            <li>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`w-full flex justify-between items-center py-2 ${
                  pathname.startsWith("/services") ? activeClass : normalClass
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <ul className="pl-4 mt-1 space-y-1">
                  <li>
                    <Link
                      href="/services/cricket"
                      className={
                        isActive("/services/cricket")
                          ? activeClass
                          : normalClass
                      }
                    >
                      Cricket
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/political"
                      className={
                        isActive("/services/political")
                          ? activeClass
                          : normalClass
                      }
                    >
                      Political
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/about"
                className={isActive("/about") ? activeClass : normalClass}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={isActive("/contact") ? activeClass : normalClass}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
