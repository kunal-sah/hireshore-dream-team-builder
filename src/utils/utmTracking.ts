/**
 * UTM Parameter Tracking Utility
 * Centralized management of UTM parameters for Google Analytics tracking
 */

export interface UTMParams {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content?: string;
  utm_term?: string;
}

/**
 * Build UTM parameters for tracking
 */
export const buildUTMParams = (params: UTMParams): string => {
  const utmObject: Record<string, string> = {
    utm_source: params.utm_source,
    utm_medium: params.utm_medium,
    utm_campaign: params.utm_campaign,
  };

  if (params.utm_content) utmObject.utm_content = params.utm_content;
  if (params.utm_term) utmObject.utm_term = params.utm_term;

  return new URLSearchParams(utmObject).toString();
};

/**
 * Add UTM parameters to a URL
 */
export const addUTMToURL = (baseUrl: string, params: UTMParams): string => {
  const utmString = buildUTMParams(params);
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}${utmString}`;
};

/**
 * Get current page path for utm_content
 */
export const getCurrentPagePath = (): string => {
  if (typeof window === 'undefined') return 'homepage';
  return window.location.pathname.replace('/', '') || 'homepage';
};

/**
 * Calendly booking link with UTM tracking
 */
export const getCalendlyURL = (content: string): string => {
  const baseURL = 'https://calendly.com/hireshore/30min';
  const params: UTMParams = {
    utm_source: 'hireshore_website',
    utm_medium: 'cta',
    utm_campaign: 'book_consultation',
    utm_content: content,
  };
  return addUTMToURL(baseURL, params);
};

/**
 * WhatsApp link with UTM tracking
 */
export const getWhatsAppURL = (message: string, content: string): string => {
  const baseURL = `https://wa.me/9779819074501?text=${encodeURIComponent(message)}`;
  const params: UTMParams = {
    utm_source: 'hireshore_website',
    utm_medium: 'messaging',
    utm_campaign: 'whatsapp_inquiry',
    utm_content: content,
  };
  return addUTMToURL(baseURL, params);
};

/**
 * Social media link with UTM tracking
 */
export const getSocialMediaURL = (platform: 'linkedin' | 'whatsapp', profileUrl: string, content: string): string => {
  const params: UTMParams = {
    utm_source: 'hireshore_website',
    utm_medium: 'social',
    utm_campaign: `${platform}_profile`,
    utm_content: content,
  };
  return addUTMToURL(profileUrl, params);
};

/**
 * External resource link with UTM tracking
 */
export const getExternalResourceURL = (url: string, resourceType: string, content: string): string => {
  const params: UTMParams = {
    utm_source: 'hireshore_website',
    utm_medium: 'resource',
    utm_campaign: resourceType,
    utm_content: content,
  };
  return addUTMToURL(url, params);
};

/**
 * Track GA event for CTA clicks
 */
export const trackCTAClick = (ctaType: string, ctaLocation: string): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', {
      cta_type: ctaType,
      cta_location: ctaLocation,
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }
};

/**
 * Track GA event for form submissions
 */
export const trackFormSubmission = (formType: string, formLocation: string, success: boolean): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submission', {
      form_type: formType,
      form_location: formLocation,
      submission_status: success ? 'success' : 'failed',
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }
};

/**
 * Track GA event for lead generation
 */
export const trackLeadGeneration = (leadSource: string, leadType: string): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      lead_source: leadSource,
      lead_type: leadType,
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }
};

/**
 * Track GA event for external link clicks
 */
export const trackExternalLink = (linkUrl: string, linkType: string, linkLocation: string): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'outbound_link', {
      link_url: linkUrl,
      link_type: linkType,
      link_location: linkLocation,
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }
};
