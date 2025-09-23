import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Rocket, 
  Users, 
  Target, 
  Settings, 
  TrendingUp,
  User,
  Building,
  Globe,
  Code,
  Palette,
  Video,
  Search,
  BarChart,
  Headphones,
  Award,
  FileText,
  Calculator,
  BookOpen,
  MessageCircle,
  Phone,
  ArrowRight
} from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  menuType: string;
  onClose: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, menuType, onClose }) => {
  const menuContent = {
    solutions: {
      title: 'Solutions',
      columns: [
        {
          title: 'By Outcome',
          items: [
            { title: 'Launch websites faster', href: '/solutions/launch-faster', icon: Rocket },
            { title: 'Scale design without hires', href: '/solutions/scale-design', icon: Palette },
            { title: 'Automate operations', href: '/solutions/automate-ops', icon: Settings },
            { title: 'Fill your sales pipeline', href: '/solutions/sales-pipeline', icon: TrendingUp },
            { title: 'Ongoing support & QA', href: '/solutions/support-qa', icon: Headphones }
          ]
        },
        {
          title: 'By Role',
          items: [
            { title: 'For Agency Owners', href: '/solutions/agency-owners', icon: Building },
            { title: 'For Marketing Leaders', href: '/solutions/marketing-leaders', icon: Target },
            { title: 'For Founders/Startups', href: '/solutions/founders', icon: User },
            { title: 'For HR/Recruiters', href: '/solutions/hr-recruiters', icon: Users }
          ]
        }
      ],
      spotlight: {
        title: 'Configure your Delivery Pod',
        description: 'Get a custom solution tailored to your needs',
        href: '/configure-pod',
        cta: 'Get Started'
      }
    },
    services: {
      title: 'Pods / Services',
      columns: [
        {
          title: 'Development Pods',
          items: [
            { title: 'Web Dev Pod', description: 'Webflow/WordPress/Shopify', href: '/services/web-dev', icon: Code },
            { title: 'Design Pod', description: 'Branding, social, ads', href: '/services/design', icon: Palette },
            { title: 'Video Pod', description: 'Edits, reels, UGC', href: '/services/video', icon: Video }
          ]
        },
        {
          title: 'Growth Pods',
          items: [
            { title: 'SEO & Content Pod', href: '/services/seo-content', icon: Search },
            { title: 'Marketing Ops Pod', description: 'CRM & automation', href: '/services/marketing-ops', icon: Settings },
            { title: 'Data / AI Pod', description: 'Dashboards, reporting', href: '/services/data-ai', icon: BarChart },
            { title: 'Support & QA Pod', href: '/services/support-qa', icon: Headphones }
          ]
        },
        {
          title: 'How it works',
          items: [
            { title: 'Process & SLAs', href: '/how-it-works/process', icon: FileText },
            { title: 'QA & PM Framework', href: '/how-it-works/qa-framework', icon: Award },
            { title: 'Onboarding 5–7 days', href: '/how-it-works/onboarding', icon: Rocket }
          ]
        }
      ],
      spotlight: {
        title: 'View Case Studies',
        description: 'See how we\'ve helped 100+ companies scale',
        href: '/case-studies',
        cta: 'View Proof'
      }
    },
    staffing: {
      title: 'Staffing',
      columns: [
        {
          title: 'Hiring Options',
          items: [
            { title: 'Dedicated Talent', description: 'Full-time/part-time', href: '/staffing/dedicated', icon: User },
            { title: 'Build-a-Team', description: 'Multi-role solutions', href: '/staffing/build-team', icon: Users },
            { title: 'Recruitment-as-a-Service', href: '/staffing/recruitment', icon: Search },
            { title: 'Compliance & Payroll', href: '/staffing/compliance', icon: FileText }
          ]
        },
        {
          title: 'Get Started',
          items: [
            { title: '1-Week Trial', href: '/staffing/trial', icon: Award },
            { title: 'Roles & Rate Card', href: '/staffing/rates', icon: Calculator },
            { title: 'Talent Profiles', href: '/staffing/profiles', icon: Users }
          ]
        }
      ],
      spotlight: {
        title: 'Start Your Trial',
        description: 'Try our talent for one week, risk-free',
        href: '/staffing/trial',
        cta: 'Start Trial'
      }
    },
    industries: {
      title: 'Industries',
      columns: [
        {
          title: 'Key Sectors',
          items: [
            { title: 'Agencies', href: '/industries/agencies', icon: Building },
            { title: 'Real Estate & Property', href: '/industries/real-estate', icon: Building },
            { title: 'E-commerce', href: '/industries/ecommerce', icon: Globe },
            { title: 'SaaS/Tech', href: '/industries/saas-tech', icon: Code }
          ]
        },
        {
          title: 'More Industries',
          items: [
            { title: 'Healthcare', href: '/industries/healthcare', icon: Headphones },
            { title: 'Education', href: '/industries/education', icon: BookOpen },
            { title: 'Hospitality/Restaurants', href: '/industries/hospitality', icon: Building },
            { title: 'Finance/Professional Services', href: '/industries/finance', icon: BarChart }
          ]
        }
      ],
      spotlight: {
        title: 'Tailored Playbooks',
        description: 'Industry-specific strategies and frameworks',
        href: '/industries',
        cta: 'View Playbooks'
      }
    },
    resources: {
      title: 'Resources',
      columns: [
        {
          title: 'Start Here',
          items: [
            { title: 'Resource Hub', href: '/resources', icon: BookOpen },
            { title: 'Guides Library', href: '/resources/guides', icon: FileText },
            { title: 'Templates Library', href: '/resources/templates', icon: FileText }
          ]
        },
        {
          title: 'Tools & Templates',
          items: [
            { title: 'Creative Brief Template', href: '/resources/creative-brief-template', icon: Palette },
            { title: 'Web Launch Checklist', href: '/resources/web-launch-checklist', icon: Award },
            { title: 'Cost Calculator', href: '/resources/cost-calculator', icon: Calculator }
          ]
        },
        {
          title: 'Deep Dives',
          items: [
            { title: 'Delivery Pods Playbook', href: '/resources/delivery-pods-playbook', icon: BookOpen },
            { title: 'Case Notes', href: '/resources/case-notes', icon: FileText },
            { title: 'Webinars', href: '/resources/webinars', icon: Video },
            { title: 'FAQs', href: '/resources/faqs', icon: MessageCircle }
          ]
        }
      ],
      spotlight: {
        title: 'Free Resources',
        description: 'Everything you need to scale your business',
        href: '/resources',
        cta: 'Browse All'
      }
    },
    company: {
      title: 'Company',
      columns: [
        {
          title: 'About HireShore',
          items: [
            { title: 'About Us', href: '/about-us', icon: Users },
            { title: 'Team & Culture', href: '/about-us#team', icon: User },
            { title: 'Careers', href: '/careers', icon: Award },
            { title: 'Partners', href: '/partners', icon: Building },
            { title: 'Contact Us', href: '/contact-us', icon: Phone }
          ]
        }
      ],
      spotlight: {
        title: 'Join Our Team',
        description: 'Help us build the future of work',
        href: '/careers',
        cta: 'View Jobs'
      }
    }
  };

  const currentMenu = menuContent[menuType as keyof typeof menuContent];
  
  if (!currentMenu) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 w-full bg-white shadow-xl border-t z-50"
          onMouseLeave={onClose}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Menu Columns */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
                {currentMenu.columns.map((column, index) => (
                  <div key={index}>
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                      {column.title}
                    </h3>
                    <ul className="space-y-3">
                      {column.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <Link
                            to={item.href}
                            className="group flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                            onClick={onClose}
                          >
                            <item.icon className="h-5 w-5 text-gray-400 group-hover:text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-primary">
                                {item.title}
                              </div>
                              {'description' in item && item.description && (
                                <div className="text-xs text-gray-500 mt-1">
                                  {item.description}
                                </div>
                              )}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Spotlight Card */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {currentMenu.spotlight.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {currentMenu.spotlight.description}
                  </p>
                  <Link
                    to={currentMenu.spotlight.href}
                    className="inline-flex items-center justify-center w-full bg-primary text-white font-semibold py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors group"
                    onClick={onClose}
                  >
                    {currentMenu.spotlight.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;