import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Heart, Shield, Users, Database, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Healthcare = () => {
  const services = [
    "HIPAA-Compliant Development",
    "Electronic Health Records (EHR)",
    "Telemedicine Platforms",
    "Healthcare Analytics",
    "Patient Management Systems",
    "Medical Device Integration",
    "Healthcare Mobile Apps",
    "Compliance & Security"
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Healthcare Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transform healthcare delivery with secure, compliant technology solutions.
          </p>
          <Button size="lg" asChild>
            <Link to="/configure-pod">Get Healthcare Solutions</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Healthcare Services</h2>
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

      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Improve Healthcare?</h2>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/configure-pod">Start Your Healthcare Project</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Healthcare;