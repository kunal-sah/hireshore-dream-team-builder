
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aaron Erwich",
    title: "Founder, Digital Six",
    text: "We were maybe 22–23 when we started... now there are 47 people across Australia and Nepal. The WordPress guys are killing it. The SEO side is strong. This is way better than our past freelancer experience. I've already referred several people to Hireshore.",
    photo: "/lovable-uploads/8d290392-3676-42f7-91a8-d1bb48f6fca7.png",
  },
  {
    name: "Marlon M.",
    title: "Founder, Medz Media",
    text: "The best experience I've had working with a remote team. Websites came out fantastic—fast, secure, beautifully designed. The team's energy, proactiveness, and suggestions make them feel like a real part of my business. I've worked with freelancers before—this is a whole different level.",
    photo: "/lovable-uploads/fbdcffaa-5b42-4efe-ae99-e7cec23a54c8.png",
  },
  {
    name: "Ryan Jope",
    title: "Founder, PropertyStack",
    text: "We've hired over 15 people through Hireshore in just a year—and could've done 10 more. The hiring process is much easier now with resume videos and pre-vetted candidates. Compared to freelancers or other markets, the quality from Nepal has been significantly better.",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Chloe Bundy",
    title: "Founder, Cove Digital",
    text: "Working with Hireshore has given me more time to grow my business and take on new local clients. I'm also a WordPress expert myself, so having a pod I trust to deliver—without compromise—is a game changer. I hand over the project and SOP, and it's done before the deadline.",
    photo: "/lovable-uploads/a2773a93-5211-4d24-a4b1-ec9b04e22039.png",
  },
  {
    name: "Breearna Jope",
    title: "Founder, Uncommon Solutions",
    text: "The team is well-skilled, easy to work with, and they deliver on time. I get estimates upfront, so I can confidently promise timelines to my clients—and they're met. I don't need to search for freelancers anymore. Kunal and the Hireshore team help me pitch, plan, and deliver custom solutions for every client.",
    photo: "/lovable-uploads/394a2ced-a988-4153-8ef9-1e99f76765fb.png",
  },
];

const TestimonialsSection = () => (
  <motion.section 
    id="testimonials" 
    className="max-w-5xl mx-auto py-12 px-4"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <motion.h2 
      className="text-2xl md:text-3xl font-bold mb-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      Why Founders & Agencies Rely on Hireshore
    </motion.h2>
    
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
            <motion.div 
              className="p-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-purple-200">
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className="flex items-center gap-4">
                    <motion.img 
                      src={testimonial.photo} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-transparent hover:ring-[#8b5cf6] transition-all duration-300"
                      initial={{ scale: 0.9 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      whileHover={{ scale: 1.1 }}
                    />
                    <div>
                      <p className="font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                  <motion.p 
                    className="text-gray-700 italic"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    "{testimonial.text}"
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-2 mt-6">
        <CarouselPrevious className="static transform-none mx-2 hover:bg-[#8b5cf6]/10 hover:text-[#8b5cf6] transition-colors" />
        <CarouselNext className="static transform-none mx-2 hover:bg-[#8b5cf6]/10 hover:text-[#8b5cf6] transition-colors" />
      </div>
    </Carousel>
  </motion.section>
);

export default TestimonialsSection;
