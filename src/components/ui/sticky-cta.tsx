import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { getCalendlyURL, trackCTAClick, getCurrentPagePath } from "@/utils/utmTracking";

export function StickyCTA() {
  const handlePrimary = () => {
    trackCTAClick('sticky_start_paid_trial', getCurrentPagePath());
    // Prefer inline Calendly section when present (e.g. homepage)
    const bookEl = document.getElementById('book');
    if (bookEl) {
      document.dispatchEvent(new CustomEvent('calendly-load'));
      bookEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    // Fallback: open Calendly in new tab with UTM
    const utmURL = getCalendlyURL(`sticky_cta_${getCurrentPagePath()}`);
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
            onClick={handlePrimary}
          >
            <Phone className="h-4 w-4 mr-2" />
            Start a paid trial
          </Button>
          <Button
            size="sm"
            variant="outline"
            asChild
            onClick={handleContact}
          >
            <Link to="/contact-us">
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact
            </Link>
          </Button>
        </div>
        <p className="text-[11px] text-muted-foreground leading-tight">
          1–2 week paid trial. No long-term commitment.
        </p>
      </div>
    </Card>
  );
}
