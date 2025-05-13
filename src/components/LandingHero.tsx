
import React from 'react';
import { Button } from "@/components/ui/button";

const LandingHero = () => {
  const scrollToBooking = () => {
    const footerCalendly = document.querySelector('.calendly-inline-widget');
    if (footerCalendly) {
      footerCalendly.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header className="w-full bg-gradient-to-b from-white to-[#f0f4ff] pt-28 pb-20 md:pb-32 px-4 md:px-0">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-sans mb-6 text-gray-900 leading-tight tracking-tight">
          Top 1% Remote Talent from Nepal
          <span className="bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee] inline-block text-transparent bg-clip-text"> Startup-Friendly Cost</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Hireshore helps startups and agencies hire senior tech, creative, and support talent — fast, affordable, risk-free.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#hire-form"
            className="inline-flex items-center justify-center h-12 bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee] text-white font-bold py-4 px-8 rounded-xl shadow-lg text-lg transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#c7a3fa]"
          >
            Start Hiring Now
          </a>
          <Button 
            variant="outline" 
            size="lg" 
            className="h-12 border-2 border-[#8b5cf6] text-[#8b5cf6] hover:bg-[#8b5cf6]/10"
            onClick={scrollToBooking}
          >
            Book a Free Call
          </Button>
        </div>
        <div className="text-sm mt-4 text-gray-500 italic">
          No commitments. Get a free talent shortlist in 48 hours.
        </div>
      </div>
    </header>
  );
};
export default LandingHero;
