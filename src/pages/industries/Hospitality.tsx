import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, MapPin, Calendar, CreditCard, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Hospitality = () => {
  const services = [
    "Hotel Booking Systems",
    "Restaurant Management",
    "Event Planning Platforms",
    "Guest Experience Apps",
    "Revenue Management",
    "Property Management Systems",
    "Online Reservation Systems",
    "Customer Review Management"
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Hospitality Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Enhance guest experiences with cutting-edge hospitality technology.
          </p>
          <Button size="lg" asChild>
            <Link to="/configure-pod">Improve Guest Experience</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Hospitality Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Hospitality;