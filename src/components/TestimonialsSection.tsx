
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Alex J.",
    title: "Founder @ Nutrogen",
    text: ""We saved over $850K hiring with Hireshore. Insanely good people, and no hiring headaches."",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Marlon M.",
    title: "CEO @ Medz Media",
    text: ""Our VA from Hireshore works across research, project management, and even Shopify tasks. We now save over 30 hours a week — for just $499/month."",
    photo: "https://randomuser.me/api/portraits/men/78.jpg",
  },
  {
    name: "Rachel S.",
    title: "Head of Ops @ Digital Six",
    text: ""The fastest hiring process I've experienced. We had a designer onboarded in 6 days — and she's a rockstar."",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="max-w-5xl mx-auto py-16 md:py-24 px-4">
    <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
      Why Founders & Agencies Rely on Hireshore
    </h2>
    
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="py-4">
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.photo} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">{testimonial.text}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-2 mt-6">
        <CarouselPrevious className="static transform-none mx-2" />
        <CarouselNext className="static transform-none mx-2" />
      </div>
    </Carousel>
  </section>
);

export default TestimonialsSection;
