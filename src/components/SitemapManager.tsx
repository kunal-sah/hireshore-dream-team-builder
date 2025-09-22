import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { updatePublicSitemap, validateCurrentSitemap, showSitemapInstructions } from '@/utils/sitemapUpdater';
import { getCurrentDomain } from '@/utils/dynamicSEO';
import { Download, RefreshCw, CheckCircle, AlertTriangle, Info } from 'lucide-react';

// Development component for managing sitemap - add to admin/settings page
const SitemapManager: React.FC = () => {
  const [customDomain, setCustomDomain] = useState('');
  const [validationResult, setValidationResult] = useState<{valid: boolean, issues: string[]} | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  
  const currentDomain = getCurrentDomain();

  const handleUpdateSitemap = () => {
    const domain = customDomain.trim() || currentDomain;
    updatePublicSitemap(domain);
  };

  const handleValidateSitemap = async () => {
    setIsValidating(true);
    try {
      const result = await validateCurrentSitemap();
      setValidationResult(result);
    } catch (error) {
      setValidationResult({
        valid: false,
        issues: [`Validation error: ${error instanceof Error ? error.message : 'Unknown error'}`]
      });
    } finally {
      setIsValidating(false);
    }
  };

  const handleShowInstructions = () => {
    const domain = customDomain.trim() || currentDomain;
    showSitemapInstructions(domain);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RefreshCw className="h-5 w-5" />
            Sitemap Manager
          </CardTitle>
          <CardDescription>
            Manage your website's sitemap for SEO and domain migrations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Current Status */}
          <div className="bg-muted/50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Current Configuration</h3>
            <p><strong>Domain:</strong> {currentDomain}</p>
            <p><strong>Sitemap URL:</strong> {currentDomain}/sitemap.xml</p>
            <p><strong>Routes Tracked:</strong> 40+ pages automatically included</p>
          </div>

          {/* Domain Migration */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="customDomain">New Domain (for migration)</Label>
              <Input
                id="customDomain"
                placeholder="https://yourdomain.com"
                value={customDomain}
                onChange={(e) => setCustomDomain(e.target.value)}
              />
              <p className="text-sm text-muted-foreground">
                Leave blank to use current domain: {currentDomain}
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button onClick={handleUpdateSitemap} className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Generate & Download Sitemap
              </Button>
              
              <Button variant="outline" onClick={handleShowInstructions}>
                <Info className="h-4 w-4 mr-2" />
                Show Instructions
              </Button>
            </div>
          </div>

          {/* Validation */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Sitemap Validation</h3>
              <Button 
                variant="outline" 
                onClick={handleValidateSitemap} 
                disabled={isValidating}
                className="flex items-center gap-2"
              >
                {isValidating ? (
                  <RefreshCw className="h-4 w-4 animate-spin" />
                ) : (
                  <CheckCircle className="h-4 w-4" />
                )}
                {isValidating ? 'Validating...' : 'Validate Current Sitemap'}
              </Button>
            </div>

            {validationResult && (
              <div className={`p-4 rounded-lg ${
                validationResult.valid 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-red-50 border border-red-200'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  {validationResult.valid ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  )}
                  <span className={`font-medium ${
                    validationResult.valid ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {validationResult.valid ? 'Sitemap is valid!' : 'Issues found in sitemap:'}
                  </span>
                </div>
                
                {validationResult.issues.length > 0 && (
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {validationResult.issues.map((issue, index) => (
                      <li key={index} className="text-red-700">{issue}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <h3 className="font-medium text-blue-800 mb-2">🚀 Migration Steps</h3>
            <ol className="list-decimal list-inside space-y-1 text-sm text-blue-700">
              <li>Enter your new domain above</li>
              <li>Click "Generate & Download Sitemap"</li>
              <li>Replace public/sitemap.xml with the downloaded file</li>
              <li>Update structured data in your pages using the dynamic SEO utils</li>
              <li>Submit new sitemap to Google Search Console</li>
            </ol>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <h4 className="font-medium">✅ Auto-Included Features</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• All app routes automatically tracked</li>
                <li>• Proper SEO priorities & frequencies</li>
                <li>• Dynamic domain detection</li>
                <li>• Last modified dates</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">🔧 Available Utilities</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• <code>updatePublicSitemap()</code> - Generate new sitemap</li>
                <li>• <code>validateCurrentSitemap()</code> - Check for issues</li>
                <li>• <code>addRoute()</code> - Add new pages</li>
                <li>• <code>injectStructuredData()</code> - Dynamic schema</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SitemapManager;