import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import MegaMenu from './MegaMenu';
import { getCalendlyURL, trackCTAClick } from "@/utils/utmTracking";

const mobileSections: { label: string; href: string; children: { label: string; href: string }[] }[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Web Dev Pod', href: '/services/web-dev' },
      { label: 'Design Pod', href: '/services/design' },
      { label: 'Video Pod', href: '/services/video' },
      { label: 'SEO & Content Pod', href: '/services/seo-content' },
      { label: 'Marketing Ops Pod', href: '/services/marketing-ops' },
      { label: 'Data / AI Pod', href: '/services/data-ai' },
      { label: 'Support & QA Pod', href: '/services/support-qa' },
      { label: 'Launch faster', href: '/solutions/launch-faster' },
      { label: 'Scale design', href: '/solutions/scale-design' },
      { label: 'Automate operations', href: '/solutions/automate-ops' },
      { label: 'Fill sales pipeline', href: '/solutions/sales-pipeline' },
      { label: 'Support & QA', href: '/solutions/support-qa' },
      { label: 'Configure your Pod', href: '/configure-pod' },
    ],
  },
  {
    label: 'Staffing',
    href: '/staffing',
    children: [
      { label: 'Dedicated Talent', href: '/staffing/dedicated' },
      { label: 'Build-a-Team', href: '/staffing/build-team' },
      { label: 'Recruitment-as-a-Service', href: '/staffing/recruitment' },
      { label: 'Compliance & Payroll', href: '/staffing/compliance' },
      { label: 'Paid Trial', href: '/staffing/trial' },
      { label: 'Rates & Roles', href: '/staffing/rates' },
      { label: 'Talent Profiles', href: '/staffing/talent-profiles' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Guides Library', href: '/resources/guides' },
      { label: 'Templates Library', href: '/resources/templates' },
      { label: 'Cost Calculator', href: '/resources/cost-calculator' },
      { label: 'Delivery Pods Playbook', href: '/resources/delivery-pods-playbook' },
      { label: 'Case Notes', href: '/resources/case-notes' },
      { label: 'Webinars', href: '/resources/webinars' },
      { label: 'FAQs', href: '/resources/faqs' },
      { label: 'Browse by Industry', href: '/industries' },
    ],
  },
];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string>('');
  const [activeMenu, setActiveMenu] = useState('');
  const [menuTimeout, setMenuTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

  const handleMenuEnter = (menuType: string) => {
    if (menuTimeout) {
      clearTimeout(menuTimeout);
      setMenuTimeout(null);
    }
    setActiveMenu(menuType);
  };

  const handleMenuLeave = () => {
    const timeout = setTimeout(() => setActiveMenu(''), 600);
    setMenuTimeout(timeout);
  };

  const handleMegaMenuEnter = () => {
    if (menuTimeout) {
      clearTimeout(menuTimeout);
      setMenuTimeout(null);
    }
  };

  const handleMegaMenuLeave = () => {
    const timeout = setTimeout(() => setActiveMenu(''), 500);
    setMenuTimeout(timeout);
  };

  const closeMegaMenu = () => {
    setActiveMenu('');
    if (menuTimeout) {
      clearTimeout(menuTimeout);
      setMenuTimeout(null);
    }
  };

  const handleBookTrial = (source: string, location: string) => {
    const utmURL = getCalendlyURL(source);
    trackCTAClick(source, location);
    window.open(utmURL, '_blank');
  };

  const desktopItems: { label: string; href: string; menu?: string }[] = [
    { label: 'Services', href: '/services', menu: 'services' },
    { label: 'Staffing', href: '/staffing', menu: 'staffing' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Resources', href: '/resources', menu: 'resources' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 w-full bg-white shadow-sm z-50 border-b transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="flex-shrink-0 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center">
              <motion.img
                src="/lovable-uploads/ebb69f88-62a2-4344-a4f5-5f906856fb26.png"
                alt="HireShore Logo"
                className="h-10 w-auto"
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
              />
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 relative">
            {desktopItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.menu ? handleMenuEnter(item.menu) : handleMenuLeave()}
              >
                {item.menu && (
                  <div className="absolute -top-4 left-0 w-full h-4 bg-transparent pointer-events-auto"></div>
                )}
                <Link
                  to={item.href}
                  className="flex items-center px-4 py-2 text-gray-900 hover:text-primary font-semibold transition-colors rounded-lg hover:bg-gray-50"
                >
                  {item.label}
                  {item.menu && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
              </div>
            ))}

            {/* CTA */}
            <motion.button
              className="ml-4 inline-flex items-center justify-center bg-primary text-white font-semibold px-6 py-3 rounded-lg text-sm hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleBookTrial('navbar_book_trial', 'main_navigation')}
            >
              <Phone className="mr-2 h-4 w-4" />
              Book a paid trial
            </motion.button>

            <MegaMenu
              isOpen={!!activeMenu}
              menuType={activeMenu}
              onClose={closeMegaMenu}
              onHoverEnter={handleMegaMenuEnter}
              onHoverLeave={handleMegaMenuLeave}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 transition-all duration-300"
              whileTap={{ scale: 0.95 }}
              aria-label="Open main menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-white border-t border-gray-200 shadow-lg overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 max-h-[80vh] overflow-y-auto">
                {mobileSections.map((section) => {
                  const expanded = mobileExpanded === section.label;
                  return (
                    <div key={section.label} className="border-b border-gray-100 last:border-b-0">
                      <button
                        onClick={() => setMobileExpanded(expanded ? '' : section.label)}
                        className="w-full flex justify-between items-center px-3 py-3 text-base font-semibold text-gray-900 hover:text-primary"
                      >
                        <span>{section.label}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {expanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden bg-gray-50"
                          >
                            <Link
                              to={section.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-6 py-2 text-sm font-semibold text-primary"
                            >
                              View all →
                            </Link>
                            {section.children.map((child) => (
                              <Link
                                key={child.href}
                                to={child.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-6 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-100"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                <Link
                  to="/pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-semibold text-gray-900 hover:text-primary border-b border-gray-100"
                >
                  Pricing
                </Link>
                <Link
                  to="/case-studies"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-semibold text-gray-900 hover:text-primary border-b border-gray-100"
                >
                  Case Studies
                </Link>

                <motion.button
                  className="w-full mt-4 inline-flex items-center justify-center bg-primary text-white font-semibold px-4 py-3 rounded-lg text-base hover:bg-primary/90 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    handleBookTrial('mobile_menu_book_trial', 'mobile_navigation');
                    setMobileMenuOpen(false);
                  }}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Book a paid trial
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default NavBar;
