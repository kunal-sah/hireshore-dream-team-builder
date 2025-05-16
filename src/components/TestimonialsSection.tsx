
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
    name: "Alex J.",
    title: "Founder @ Nutrogen",
    text: "We saved over $850K hiring with Hireshore. Insanely good people, and no hiring headaches.",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Marlon M.",
    title: "CEO @ Medz Media",
    text: "Our VA from Hireshore works across research, project management, and even Shopify tasks. We now save over 30 hours a week — for just $499/month.",
    photo: "https://randomuser.me/api/portraits/men/78.jpg",
  },
  {
    name: "Rachel S.",
    title: "Head of Ops @ Digital Six",
    text: "The fastest hiring process I've experienced. We had a designer onboarded in 6 days — and she's a rockstar.",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const TestimonialsSection = () => (
  <motion.section 
    id="testimonials" 
    className="max-w-5xl mx-auto py-16 md:py-24 px-4"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <motion.h2 
      className="text-2xl md:text-3xl font-bold mb-10 text-center"
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
