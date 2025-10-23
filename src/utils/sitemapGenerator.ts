// Dynamic sitemap generator that auto-updates when new routes are added
export interface SitemapEntry {
  path: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastmod?: string;
}

// Define all routes with their SEO metadata
export const siteRoutes: SitemapEntry[] = [
  // Main pages - highest priority
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/services', priority: 0.9, changefreq: 'monthly' },
  { path: '/case-studies', priority: 0.9, changefreq: 'weekly' },
  { path: '/solutions', priority: 0.9, changefreq: 'monthly' },
  { path: '/staffing', priority: 0.9, changefreq: 'monthly' },
  
  // Important pages
  { path: '/about-us', priority: 0.8, changefreq: 'monthly' },
  { path: '/pricing', priority: 0.8, changefreq: 'monthly' },
  { path: '/resources', priority: 0.8, changefreq: 'weekly' },
  { path: '/industries', priority: 0.7, changefreq: 'monthly' },
  { path: '/contact-us', priority: 0.7, changefreq: 'monthly' },
  { path: '/configure-pod', priority: 0.7, changefreq: 'monthly' },

  // Case Studies - high priority for SEO
  { path: '/case-studies/digital-six', priority: 0.8, changefreq: 'monthly' },
  { path: '/case-studies/medz-media', priority: 0.8, changefreq: 'monthly' },
  { path: '/case-studies/swimply', priority: 0.8, changefreq: 'monthly' },
  { path: '/case-studies/property-stack', priority: 0.8, changefreq: 'monthly' },
  { path: '/case-studies/affective-care', priority: 0.8, changefreq: 'monthly' },
  { path: '/case-studies/uncommon-solutions', priority: 0.8, changefreq: 'monthly' },
  { path: '/case-studies/cove-digital', priority: 0.8, changefreq: 'monthly' },
  { path: '/case-studies/ekleipsi-digital', priority: 0.8, changefreq: 'monthly' },

  // Solutions pages
  { path: '/solutions/launch-faster', priority: 0.7, changefreq: 'monthly' },
  { path: '/solutions/scale-design', priority: 0.7, changefreq: 'monthly' },
  { path: '/solutions/automate-ops', priority: 0.7, changefreq: 'monthly' },
  { path: '/solutions/sales-pipeline', priority: 0.7, changefreq: 'monthly' },
  { path: '/solutions/support-qa', priority: 0.7, changefreq: 'monthly' },
  { path: '/solutions/agency-owners', priority: 0.7, changefreq: 'monthly' },
  { path: '/solutions/marketing-leaders', priority: 0.7, changefreq: 'monthly' },
  { path: '/solutions/founders', priority: 0.7, changefreq: 'monthly' },
  { path: '/solutions/hr-recruiters', priority: 0.7, changefreq: 'monthly' },

  // Services/Pod pages
  { path: '/services/web-dev', priority: 0.7, changefreq: 'monthly' },
  { path: '/services/design', priority: 0.7, changefreq: 'monthly' },
  { path: '/services/video', priority: 0.7, changefreq: 'monthly' },
  { path: '/services/seo-content', priority: 0.7, changefreq: 'monthly' },
  { path: '/services/marketing-ops', priority: 0.7, changefreq: 'monthly' },
  { path: '/services/data-ai', priority: 0.7, changefreq: 'monthly' },
  { path: '/services/support-qa', priority: 0.7, changefreq: 'monthly' },

  // Staffing pages
  { path: '/staffing/recruitment', priority: 0.7, changefreq: 'monthly' },
  { path: '/staffing/compliance', priority: 0.7, changefreq: 'monthly' },
  { path: '/staffing/trial', priority: 0.7, changefreq: 'monthly' },
  { path: '/staffing/rates', priority: 0.7, changefreq: 'monthly' },
  { path: '/staffing/talent-profiles', priority: 0.7, changefreq: 'monthly' },
  { path: '/staffing/dedicated', priority: 0.7, changefreq: 'monthly' },
  { path: '/staffing/build-team', priority: 0.7, changefreq: 'monthly' },

  // How It Works pages
  { path: '/how-it-works/qa-framework', priority: 0.6, changefreq: 'monthly' },
  { path: '/how-it-works/onboarding', priority: 0.6, changefreq: 'monthly' },
  { path: '/how-it-works/process-sla', priority: 0.6, changefreq: 'monthly' },

  // Industries pages
  { path: '/industries/ecommerce', priority: 0.7, changefreq: 'monthly' },
  { path: '/industries/saas-tech', priority: 0.7, changefreq: 'monthly' },
  { path: '/industries/healthcare', priority: 0.7, changefreq: 'monthly' },
  { path: '/industries/education', priority: 0.7, changefreq: 'monthly' },
  { path: '/industries/hospitality', priority: 0.7, changefreq: 'monthly' },
  { path: '/industries/finance', priority: 0.7, changefreq: 'monthly' },
  { path: '/industries/agencies', priority: 0.7, changefreq: 'monthly' },
  { path: '/industries/real-estate', priority: 0.7, changefreq: 'monthly' },

  // Company pages
  { path: '/company/careers', priority: 0.6, changefreq: 'monthly' },
  { path: '/company/partners', priority: 0.6, changefreq: 'monthly' },
  { path: '/company/team-culture', priority: 0.6, changefreq: 'monthly' },

  // Resource Categories
  { path: '/resources/guides', priority: 0.7, changefreq: 'weekly' },
  { path: '/resources/templates', priority: 0.7, changefreq: 'weekly' },
  { path: '/resources/case-notes', priority: 0.7, changefreq: 'weekly' },
  { path: '/resources/webinars', priority: 0.7, changefreq: 'weekly' },

  // Resource Tools
  { path: '/resources/faqs', priority: 0.6, changefreq: 'monthly' },
  { path: '/resources/delivery-pods-playbook', priority: 0.6, changefreq: 'monthly' },
  { path: '/resources/web-launch-checklist', priority: 0.6, changefreq: 'monthly' },
  { path: '/resources/cost-calculator', priority: 0.6, changefreq: 'monthly' },
  { path: '/resources/creative-brief-template', priority: 0.6, changefreq: 'monthly' },

  // Guides
  { path: '/resources/guides/funnels', priority: 0.6, changefreq: 'monthly' },
  { path: '/resources/guides/seo-basics', priority: 0.6, changefreq: 'monthly' },
  { path: '/resources/guides/automation-starters', priority: 0.6, changefreq: 'monthly' },
  { path: '/resources/guides/outreach-systems', priority: 0.6, changefreq: 'monthly' },

  // Templates
  { path: '/resources/templates/content-calendar', priority: 0.6, changefreq: 'monthly' },
  { path: '/resources/templates/sprint-plan', priority: 0.6, changefreq: 'monthly' },
  { path: '/resources/templates/sop-starter', priority: 0.6, changefreq: 'monthly' },
  { path: '/resources/templates/ugc-brief', priority: 0.6, changefreq: 'monthly' },

  // Case Notes
  { path: '/resources/case-notes/ndis-automation', priority: 0.6, changefreq: 'monthly' },
  { path: '/resources/case-notes/ecommerce-replatform', priority: 0.6, changefreq: 'monthly' },
  { path: '/resources/case-notes/saas-onboarding', priority: 0.6, changefreq: 'monthly' },
  { path: '/resources/case-notes/ads-leads-gap-funnel', priority: 0.6, changefreq: 'monthly' },
  { path: '/resources/case-notes/cold-outreach-automation', priority: 0.6, changefreq: 'monthly' },
  { path: '/resources/case-notes/shopify-fulfillment-automation', priority: 0.6, changefreq: 'monthly' },
  { path: '/resources/case-notes/coaching-booking-optimization', priority: 0.6, changefreq: 'monthly' },
  { path: '/resources/case-notes/real-estate-lead-nurture', priority: 0.6, changefreq: 'monthly' },

  // Legal pages - lowest priority
  { path: '/privacy', priority: 0.3, changefreq: 'yearly' },
  { path: '/terms', priority: 0.3, changefreq: 'yearly' },
  { path: '/legal', priority: 0.3, changefreq: 'yearly' },
];

// Get current domain dynamically
export const getCurrentDomain = (): string => {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  // Fallback for SSR or build time
  return 'https://hireshore.co';
};

// Generate sitemap XML content
export const generateSitemapXML = (customDomain?: string): string => {
  const domain = customDomain || getCurrentDomain();
  const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  const xmlFooter = `</urlset>`;

  const urlEntries = siteRoutes.map(route => {
    const lastmod = route.lastmod || currentDate;
    return `  <url>
    <loc>${domain}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n');

  return `${xmlHeader}\n${urlEntries}\n${xmlFooter}`;
};

// Generate and download sitemap (for development/manual updates)
export const downloadSitemap = (customDomain?: string): void => {
  const sitemapContent = generateSitemapXML(customDomain);
  const blob = new Blob([sitemapContent], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Utility to add new routes (call this when adding new pages)
export const addRoute = (route: SitemapEntry): void => {
  siteRoutes.push(route);
  console.log(`New route added to sitemap: ${route.path}`);
};

// Update existing sitemap.xml file with current routes and domain
export const updateSitemapFile = async (customDomain?: string): Promise<string> => {
  return generateSitemapXML(customDomain);
};