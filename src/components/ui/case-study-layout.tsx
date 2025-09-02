import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { 
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CaseStudyLayoutProps {
  children: React.ReactNode;
  title: string;
  client: string;
  industry: string;
  location: string;
  showCTA?: boolean;
}

export const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
  children,
  title,
  client,
  industry,
  location,
  showCTA = true
}) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            ✅ Case Study
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-600 mb-8">
            <span className="font-semibold">Client: {client}</span>
            <span className="hidden md:block">•</span>
            <span>Industry: {industry}</span>
            <span className="hidden md:block">•</span>
            <span>Location: {location}</span>
          </div>
          
          {showCTA && (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg text-lg font-medium inline-flex items-center gap-2">
                  Book a Free Strategy Session 👉
                </Button>
              </DialogTrigger>
              <DialogContent className="p-0 border-none bg-transparent shadow-none max-w-3xl w-full">
                <div className="h-[600px] w-full">
                  <iframe
                    src="https://api.parracityweb.com/widget/form/shdOJ5vbCj1i9JYIQOyt"
                    style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
                    title="Strategy Session Form"
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </motion.div>

        {/* Content */}
        {children}
      </div>
    </section>
  );
};

export default CaseStudyLayout;