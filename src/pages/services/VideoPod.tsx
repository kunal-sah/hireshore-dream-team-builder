import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Video, Film, Edit, Mic, Camera, Play, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const VideoPod = () => {
  const features = [
    "Video Production & Editing",
    "Animated Explainer Videos", 
    "Social Media Video Content",
    "Product Demo Videos",
    "Training & Educational Videos",
    "Motion Graphics & Animations",
    "Video Ads & Commercials",
    "Podcast Production & Editing"
  ];

  const deliverables = [
    {
      icon: Video,
      title: "Marketing Videos",
      description: "Engaging promotional videos that drive conversions and brand awareness"
    },
    {
      icon: Film,
      title: "Product Demos",
      description: "Clear, compelling demonstrations of your products or services in action"
    },
    {
      icon: Edit,
      title: "Social Content",
      description: "Optimized video content for all major social media platforms"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Video Pod
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Professional video production and editing services delivered on-demand. 
            From concept to final cut, we create videos that engage, educate, and convert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/configure-pod">Configure Your Video Pod</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What's Included</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature) => (
              <Card key={feature} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Deliverables */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Deliverables</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {deliverables.map((item) => (
              <Card key={item.title} className="p-8 text-center">
                <CardContent className="p-0">
                  <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Camera className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">1. Plan & Script</h3>
                <p className="text-muted-foreground">
                  We work with you to develop concepts, scripts, and storyboards for your video content
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Mic className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">2. Produce & Record</h3>
                <p className="text-muted-foreground">
                  Professional production with high-quality equipment and experienced videographers
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Play className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">3. Edit & Deliver</h3>
                <p className="text-muted-foreground">
                  Expert editing and post-production to create polished, engaging final videos
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Compelling Videos?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Professional video production that tells your story and drives results.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/configure-pod">Start Your Video Pod Today</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default VideoPod;