import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

export const SEOHead = ({
  title = "Senior Offshore Teams from Nepal | Hireshore",
  description = "Hire senior offshore talent from Nepal. Dedicated specialists or managed delivery pods — save up to 83% on payroll. Vetted, fully managed, paid trial available.",
  keywords = "offshore teams Nepal, offshore talent, dedicated specialists, delivery pods, virtual assistants, bookkeeping, remote team, managed offshore staffing",
  ogImage = "https://hireshore.co/lovable-uploads/ebb69f88-62a2-4344-a4f5-5f906856fb26.png",
  ogType = "website",
  canonicalUrl,
  noindex = false,
}: SEOHeadProps) => {
  const resolvedCanonical = canonicalUrl || (typeof window !== 'undefined' 
    ? `https://hireshore.co${window.location.pathname}`
    : "https://hireshore.co/");

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={resolvedCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={resolvedCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Hireshore" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@hireshore" />
      <meta name="twitter:url" content={resolvedCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};
