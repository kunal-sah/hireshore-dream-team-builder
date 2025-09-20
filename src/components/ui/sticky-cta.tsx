import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function StickyCTA() {
  const bookCall = () => {
    window.open('https://calendly.com/hireshore/30min', '_blank');
    
    // Analytics event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        cta_type: 'sticky_book_pilot',
        page_location: window.location.href
      });
    }
  };

  const handleContact = () => {
    // Analytics event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        cta_type: 'sticky_contact',
        page_location: window.location.href
      });
    }
  };

  return (
    <Card className="fixed bottom-6 right-6 p-4 shadow-lg border-primary/20 bg-background/95 backdrop-blur-sm z-50 max-w-sm">
      <div className="space-y-3">
        <p className="text-sm font-medium">Ready to get started?</p>
        <div className="flex gap-2">
          <Button 
            size="sm" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1"
            onClick={bookCall}
          >
            <Phone className="h-4 w-4 mr-2" />
            Start a pilot
          </Button>
          <Button 
            size="sm" 
            variant="outline"
            asChild
            onClick={handleContact}
          >
            <Link to="/contact">
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}