
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavBar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                <button 
                  onClick={() => scrollToSection('benefits')} 
                  className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900"
                >
                  Benefits
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[200px] p-2">
                    <button 
                      onClick={() => scrollToSection('roles')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      Available Roles
                    </button>
                    <button 
                      onClick={() => scrollToSection('trust')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      Trust & Safety
                    </button>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button 
                  onClick={() => scrollToSection('testimonials')} 
                  className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900"
                >
                  Testimonials
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button 
                  onClick={() => scrollToSection('hire-form')} 
                  className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900"
                >
                  Contact
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div>
            <button
              onClick={() => scrollToSection('hire-form')}
              className="inline-block bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee] text-white font-medium py-2 px-4 rounded-full text-sm hover:opacity-90 transition-opacity"
            >
              Start Hiring
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
