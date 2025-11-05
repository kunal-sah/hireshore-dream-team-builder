import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { getCalendlyURL, trackCTAClick, getCurrentPagePath } from "@/utils/utmTracking";

export function StickyCTA() {
  const bookCall = () => {
    const utmURL = getCalendlyURL(`sticky_cta_${getCurrentPagePath()}`);
    trackCTAClick('sticky_book_pilot', getCurrentPagePath());
    window.open(utmURL, '_blank');
  };

  const handleContact = () => {
    trackCTAClick('sticky_contact', getCurrentPagePath());
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