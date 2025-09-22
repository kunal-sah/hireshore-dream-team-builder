// Dynamic SEO utilities for structured data and meta tags

// Get current domain dynamically
export const getCurrentDomain = (): string => {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  // Fallback for build time or SSR
  return 'https://hireshore.lovable.app';
};

// Get current full URL
export const getCurrentUrl = (): string => {
  if (typeof window !== 'undefined') {
    return window.location.href;
  }
  return getCurrentDomain();
};

// Generate dynamic structured data for Organization
export const getOrganizationSchema = () => {
  const domain = getCurrentDomain();
  
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HireShore",
    "url": domain,
    "logo": `${domain}/lovable-uploads/ebb69f88-62a2-4344-a4f5-5f906856fb26.png`,
    "description": "Scale without chaos with HireShore's vetted delivery pods for development, design, automation & support.",
    "founder": {
      "@type": "Person",
      "name": "Kunal Sah"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AU"
    },
    "sameAs": [
      "https://www.linkedin.com/in/digitalkunalsah/",
      "https://www.hireshore.co"
    ]
  };
};

// Generate dynamic structured data for case studies
export const getCaseStudySchema = (caseStudyData: {
  title: string;
  description: string;
  slug: string;
  client?: string;
  datePublished?: string;
  industry?: string;
}) => {
  const domain = getCurrentDomain();
  const currentDate = new Date().toISOString();
  
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": caseStudyData.title,
    "description": caseStudyData.description,
    "author": {
      "@type": "Organization",
      "name": "HireShore"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "HireShore",
      "logo": {
        "@type": "ImageObject",
        "url": `${domain}/lovable-uploads/ebb69f88-62a2-4344-a4f5-5f906856fb26.png`
      }
    },
    "datePublished": caseStudyData.datePublished || currentDate,
    "dateModified": currentDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${domain}/case-studies/${caseStudyData.slug}`
    },
    "about": caseStudyData.industry || "Business Services"
  };
};

// Generate dynamic structured data for service pages
export const getServiceSchema = (serviceData: {
  name: string;
  description: string;
  provider?: string;
}) => {
  const domain = getCurrentDomain();
  
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceData.name,
    "description": serviceData.description,
    "provider": {
      "@type": "Organization",
      "name": serviceData.provider || "HireShore",
      "url": domain
    },
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": domain,
      "servicePhone": "+977-9819074501"
    }
  };
};

// Generate dynamic breadcrumb schema
export const getBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => {
  const domain = getCurrentDomain();
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url.startsWith('http') ? crumb.url : `${domain}${crumb.url}`
    }))
  };
};

// Generate dynamic FAQ schema
export const getFAQSchema = (faqs: Array<{question: string, answer: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// Update meta tags dynamically
export const updateMetaTags = (metaData: {
  title?: string;
  description?: string;
  ogImage?: string;
  canonicalUrl?: string;
}) => {
  if (typeof window === 'undefined') return;
  
  const domain = getCurrentDomain();
  
  // Update title
  if (metaData.title) {
    document.title = metaData.title;
    
    // Update OG title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', metaData.title);
  }
  
  // Update description
  if (metaData.description) {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', metaData.description);
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', metaData.description);
  }
  
  // Update canonical URL
  if (metaData.canonicalUrl) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', metaData.canonicalUrl.startsWith('http') 
      ? metaData.canonicalUrl 
      : `${domain}${metaData.canonicalUrl}`);
  }
};

// Inject structured data into page
export const injectStructuredData = (schema: object, id?: string) => {
  if (typeof window === 'undefined') return;
  
  const schemaId = id || 'dynamic-schema';
  
  // Remove existing schema with same ID
  const existingSchema = document.getElementById(schemaId);
  if (existingSchema) {
    existingSchema.remove();
  }
  
  // Create and inject new schema
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = schemaId;
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};