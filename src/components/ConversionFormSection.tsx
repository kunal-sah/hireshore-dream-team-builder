import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageSquare } from 'lucide-react';

const ConversionFormSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    primaryNeed: '',
    notes: ''
  });

  const scrollToCalendly = () => {
    const element = document.getElementById('book');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href = '/contact-us#book';
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hi! I'm interested in learning more about Hireshore's Delivery Pods. My company is ${formData.company || '[Company]'} and I need help with ${formData.primaryNeed || 'general business operations'}.`);
    window.open(`https://wa.me/9779819074501?text=${message}`, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 100 }
    }
  };

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-2xl mx-auto px-6 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-30 transform translate-x-20 -translate-y-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full opacity-30 transform -translate-x-16 translate-y-16"></div>
          
          <div className="relative z-10">
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Book a Free Strategy Session
              </h2>
              <p className="text-gray-600 text-lg">
                Get a custom plan for your business in 30 minutes
              </p>
            </motion.div>

            <motion.form 
              variants={containerVariants}
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Full Name */}
              <motion.div variants={itemVariants}>
                <Input
                  type="text"
                  placeholder="Full Name *"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="h-12 text-base"
                  required
                />
              </motion.div>

              {/* Work Email */}
              <motion.div variants={itemVariants}>
                <Input
                  type="email"
                  placeholder="Work Email *"
                  value={formData.workEmail}
                  onChange={(e) => setFormData({...formData, workEmail: e.target.value})}
                  className="h-12 text-base"
                  required
                />
              </motion.div>

              {/* Company */}
              <motion.div variants={itemVariants}>
                <Input
                  type="text"
                  placeholder="Company *"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="h-12 text-base"
                  required
                />
              </motion.div>

              {/* Primary Need */}
              <motion.div variants={itemVariants}>
                <Select onValueChange={(value) => setFormData({...formData, primaryNeed: value})}>
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Primary Need *" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="development">Development & Tech</SelectItem>
                    <SelectItem value="design">Design & Creative</SelectItem>
                    <SelectItem value="marketing">Marketing & Growth</SelectItem>
                    <SelectItem value="admin">Admin & Operations</SelectItem>
                    <SelectItem value="sales">Sales & Lead Generation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              {/* Notes (Optional) */}
              <motion.div variants={itemVariants}>
                <Textarea
                  placeholder="Additional notes (optional)"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="min-h-[100px] text-base resize-none"
                />
              </motion.div>

              {/* Buttons */}
              <motion.div variants={itemVariants} className="space-y-4">
                <Button
                  onClick={scrollToCalendly}
                  className="w-full h-14 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Book Session
                </Button>

                <Button
                  onClick={handleWhatsApp}
                  variant="outline"
                  className="w-full h-14 border-2 border-green-500 text-green-700 hover:bg-green-50 font-semibold text-lg rounded-xl transition-all duration-300"
                  size="lg"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
              </motion.div>

              {/* Privacy note */}
              <motion.div variants={itemVariants} className="text-center">
                <p className="text-sm text-gray-500">
                  By booking, you agree to our{" "}
                  <a href="/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </motion.div>
            </motion.form>

            {/* Micro-reassurance */}
            <motion.div variants={itemVariants} className="text-center mt-6">
              <p className="text-sm text-gray-600 font-medium">
                No lock-in. ~30 seconds to book.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConversionFormSection;