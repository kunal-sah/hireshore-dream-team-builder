// Utility to update the static sitemap.xml file with dynamic content
import { generateSitemapXML } from './sitemapGenerator';

// Function to update sitemap.xml in public folder
// Note: This would typically run at build time or via a separate script
export const updatePublicSitemap = async (customDomain?: string): Promise<void> => {
  try {
    const sitemapContent = generateSitemapXML(customDomain);
    
    // In a real implementation, you'd write this to the public folder
    // For now, we'll provide instructions to manually update or use a build script
    console.log('Generated sitemap content:');
    console.log(sitemapContent);
    
    // Option 1: Download the file for manual replacement
    const blob = new Blob([sitemapContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    console.log('Sitemap downloaded! Replace the existing public/sitemap.xml with this file.');
    
  } catch (error) {
    console.error('Error updating sitemap:', error);
  }
};

// Hook to automatically update sitemap when domain changes
export const useSitemapUpdater = (domain?: string) => {
  const updateSitemap = () => {
    updatePublicSitemap(domain);
  };
  
  return { updateSitemap };
};

// Build-time sitemap generator (for use in build scripts)
export const generateSitemapForBuild = (domain: string): string => {
  return generateSitemapXML(domain);
};

// Instructions for manual sitemap updates
export const showSitemapInstructions = (newDomain?: string) => {
  const domain = newDomain || window.location.origin;
  
  const instructions = `
🔄 SITEMAP UPDATE INSTRUCTIONS

When migrating to a new domain, follow these steps:

1. 📝 GENERATE NEW SITEMAP:
   - Open browser console on your site
   - Run: updatePublicSitemap('${domain}')
   - Download the generated sitemap.xml file

2. 📁 REPLACE SITEMAP:
   - Replace public/sitemap.xml with the downloaded file
   - Or manually update all URLs in public/sitemap.xml from old domain to: ${domain}

3. 🔍 SUBMIT TO SEARCH ENGINES:
   - Submit ${domain}/sitemap.xml to Google Search Console
   - Submit to Bing Webmaster Tools
   - Update robots.txt if needed

4. ✅ VERIFY:
   - Visit ${domain}/sitemap.xml to confirm it works
   - Check that all URLs use the new domain

💡 TIP: The sitemap automatically includes all routes defined in your app!
  `;
  
  console.log(instructions);
  return instructions;
};

// Development helper to validate current sitemap
export const validateCurrentSitemap = async (): Promise<{valid: boolean, issues: string[]}> => {
  try {
    const response = await fetch('/sitemap.xml');
    const sitemapText = await response.text();
    
    const issues: string[] = [];
    const currentDomain = window.location.origin;
    
    // Check if sitemap exists
    if (!response.ok) {
      issues.push('❌ Sitemap.xml not found at /sitemap.xml');
      return { valid: false, issues };
    }
    
    // Check domain consistency
    if (!sitemapText.includes(currentDomain)) {
      issues.push(`❌ Sitemap uses different domain than current: ${currentDomain}`);
    }
    
    // Check if all major routes are included
    const majorRoutes = ['/', '/services', '/case-studies', '/about-us', '/contact-us'];
    majorRoutes.forEach(route => {
      if (!sitemapText.includes(`${currentDomain}${route}`)) {
        issues.push(`❌ Missing route in sitemap: ${route}`);
      }
    });
    
    if (issues.length === 0) {
      console.log('✅ Sitemap validation passed!');
      return { valid: true, issues: [] };
    }
    
    console.log('⚠️ Sitemap validation issues found:', issues);
    return { valid: false, issues };
    
  } catch (error) {
    console.error('Error validating sitemap:', error);
    return { 
      valid: false, 
      issues: [`❌ Error validating sitemap: ${error instanceof Error ? error.message : 'Unknown error'}`] 
    };
  }
};