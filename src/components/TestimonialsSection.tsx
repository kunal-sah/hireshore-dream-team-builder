import React from "react";
import { motion } from "framer-motion";
import YouTubeFacade from "./ui/youtube-facade";

type Testimonial = {
  name: string;
  title: string;
  text: string;
  photo: string;
  videoId?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Aaron Erwich",
    title: "Founder, Digital Six",
    text: "We were maybe 22–23 when we started... now there are 47 people across Australia and Nepal. The WordPress guys are killing it. The SEO side is strong. This is way better than our past freelancer experience.",
    photo: "/lovable-uploads/8d290392-3676-42f7-91a8-d1bb48f6fca7.png",
    videoId: "yW90cSyX_iI",
  },
  {
    name: "Ryan Jope",
    title: "Founder, PropertyStack",
    text: "We've hired over 15 people through Hireshore in just a year — and could've done 10 more. Resume videos and pre-vetted candidates make the process easy. The quality from Nepal has been significantly better.",
    photo: "/lovable-uploads/d4be4a5a-7f58-4205-b403-c137a43e5d8b.png",
    videoId: "9xMVgH1j9XE",
  },
  {
    name: "Marlon M.",
    title: "Founder, Medz Media",
    text: "The best experience I've had working with a remote team. Websites came out fantastic — fast, secure, beautifully designed. Their energy, proactiveness, and suggestions make them feel like a real part of my business.",
    photo: "/lovable-uploads/fbdcffaa-5b42-4efe-ae99-e7cec23a54c8.png",
    videoId: "43qQdLve5Ps",
  },
  {
    name: "Yona Meissner",
    title: "Head of Operations, Swimply",
    text: "Easy to work with and well priced. We needed to staff up customer support while staying focused on profitability — Hireshore let us achieve both. If cost, ease to scale, and speed matter, I'd definitely recommend them.",
    photo: "/lovable-uploads/yona-meissner.png",
    videoId: "LjnthdX87Ao",
  },
  {
    name: "Dave Cannell",
    title: "Cofounder & CEO, Sendr",
    text: "Hireshore helped us hire reliable remote talent for key support and GTM roles at Sendr. Their team understood our needs quickly, shared relevant profiles, and made the hiring process smooth and efficient.",
    photo: "/lovable-uploads/dave-cannell.png",
  },
  {
    name: "Chloe Bundy",
    title: "Founder, Cove Digital",
    text: "Working with Hireshore has given me more time to grow my business and take on new local clients. I hand over the project and SOP, and it's done before the deadline.",
    photo: "/lovable-uploads/a2773a93-5211-4d24-a4b1-ec9b04e22039.png",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="bg-background py-16 md:py-24 px-4">
    <div className="max-w-6xl mx-auto">
    <motion.div
      className="text-center mb-10 sm:mb-14"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-gray-900">
        Hear it directly from{" "}
        <span className="font-display text-primary">our clients.</span>
      </h2>
      <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
        Real founders. Real outcomes. Watch what teams shipping with Hireshore have to say.
      </p>
    </motion.div>

    <div className="space-y-6 sm:space-y-8">
      {testimonials.map((t, index) => {
        const reversed = index % 2 === 1;
        const hasVideo = !!t.videoId;
        return (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-5 sm:p-8 md:p-10 overflow-hidden"
          >
            <div
              className={`grid gap-6 md:gap-10 items-center ${
                hasVideo ? "md:grid-cols-2" : "md:grid-cols-1"
              }`}
            >
              {hasVideo && (
                <div className={reversed ? "md:order-2" : ""}>
                  <YouTubeFacade
                    videoId={t.videoId!}
                    title={`${t.name} testimonial`}
                    className="aspect-video bg-gray-100 rounded-xl overflow-hidden"
                  />
                </div>
              )}
              <div className={`min-w-0 ${reversed && hasVideo ? "md:order-1" : ""}`}>
                <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed break-words">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <img
                    src={t.photo}
                    alt={t.name}
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-100 bg-gray-100"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
    </div>
  </section>
);

export default TestimonialsSection;
