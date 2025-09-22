
import React from "react";
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
    text: "The best experience I've had working with a remote team. Websites came out fantastic - fast, secure, beautifully designed. The team's energy, proactiveness, and suggestions make them feel like a real part of my business. I've worked with freelancers before - this is a whole different level.",
    photo: "/lovable-uploads/fbdcffaa-5b42-4efe-ae99-e7cec23a54c8.png",
  },
  {
    name: "Ryan Jope",
    title: "Founder, PropertyStack",
    text: "We've hired over 15 people through Hireshore in just a year - and could've done 10 more. The hiring process is much easier now with resume videos and pre-vetted candidates. Compared to freelancers or other markets, the quality from Nepal has been significantly better.",
    photo: "/lovable-uploads/d4be4a5a-7f58-4205-b403-c137a43e5d8b.png",
  },
  {
    name: "Chloe Bundy",
    title: "Founder, Cove Digital",
    text: "Working with Hireshore has given me more time to grow my business and take on new local clients. I'm also a WordPress expert myself, so having a pod I trust to deliver without compromise is a game changer. I hand over the project and SOP, and it's done before the deadline.",
    photo: "/lovable-uploads/a2773a93-5211-4d24-a4b1-ec9b04e22039.png",
  },
  {
    name: "Breearna Jope",
    title: "Founder, Uncommon Solutions",
    text: "The team is well-skilled, easy to work with, and they deliver on time. I get estimates upfront, so I can confidently promise timelines to my clients - and they're met. I don't need to search for freelancers anymore. Kunal and the Hireshore team help me pitch, plan, and deliver custom solutions for every client.",
    photo: "/lovable-uploads/394a2ced-a988-4153-8ef9-1e99f76765fb.png",
  },
];

const TestimonialsSection = () => (
  <motion.section 
    id="testimonials" 
    className="max-w-5xl mx-auto py-8 sm:py-12 px-4"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <motion.h2 
      className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      Why Founders & Agencies Rely on Hireshore
    </motion.h2>
    
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-1">
              <div className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-purple-200 rounded-lg">
                <div className="flex flex-col gap-4 p-6">
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.photo} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-transparent hover:ring-[#8b5cf6] transition-all duration-300 testimonial-avatar"
                      width={48}
                      height={48}
                      loading="lazy"
                      decoding="async"
                      style={{ width: '48px', height: '48px', maxWidth: '48px', maxHeight: '48px' }}
                    />
                    <div>
                      <p className="font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
  </motion.section>
);

export default TestimonialsSection;
