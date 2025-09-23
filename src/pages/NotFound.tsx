import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Add structured data for 404 page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Page Not Found - HireShore",
      "description": "The requested page could not be found. Return to HireShore homepage.",
      "url": window.location.href,
      "mainEntity": {
        "@type": "SearchAction",
        "target": "https://hireshore.co/",
        "query-input": "required name=search_term_string"
      }
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-6">
        {/* Animated 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-8xl font-bold text-primary/20 animate-pulse-subtle">
            404
          </h1>
          <div className="absolute inset-0 text-8xl font-bold text-gradient animate-float">
            404
          </div>
        </div>
        
        {/* Error Message */}
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-bold text-foreground">
            Oops! Page not found
          </h2>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-sm text-muted-foreground">
            Requested path: <code className="bg-muted px-2 py-1 rounded text-xs">{location.pathname}</code>
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="gradient-btn">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Return Home
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="hover-border-effect">
              <button onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </button>
            </Button>
          </div>
          
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground mb-3">
              Popular pages:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button asChild variant="ghost" size="sm">
                <Link to="/services">Services</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link to="/case-studies">Case Studies</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link to="/about-us">About Us</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link to="/contact-us">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Element */}
        <div className="mt-12 opacity-20">
          <Search className="w-16 h-16 mx-auto text-primary animate-pulse-subtle" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
