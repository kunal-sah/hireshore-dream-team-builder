
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavBar = () => {
  return (
    <nav className="w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-gray-900">
              Hireshore
            </Link>
          </div>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900">
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[200px] p-2">
                    <Link to="/tech-talent" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                      Tech Talent
                    </Link>
                    <Link to="/creative-talent" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                      Creative Talent
                    </Link>
                    <Link to="/support-talent" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                      Support Talent
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900">
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact" className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div>
            <a
              href="#hire-form"
              className="inline-block bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee] text-white font-medium py-2 px-4 rounded-full text-sm hover:opacity-90 transition-opacity"
            >
              Start Hiring
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
