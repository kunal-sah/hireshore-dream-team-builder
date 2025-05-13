
import React from "react";

const HiringFormSection = () => {
  const scrollToBooking = () => {
    const footerCalendly = document.getElementById('booking-form');
    if (footerCalendly) {
      footerCalendly.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hire-form" className="max-w-3xl mx-auto py-16 md:py-24 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Let's Build Your Offshore Team
        </h2>
        <p className="text-gray-600 mb-8 text-center max-w-xl mx-auto">
          Whether you're hiring a VA or a full tech squad — we've got you. Free hiring consultation, 
          shortlist in 48 hours, onboard in 14 days. <b>Pay only after onboarding.</b>
        </p>
        
        <div className="flex justify-center">
          <button 
            onClick={scrollToBooking}
            className="bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee] text-white font-bold py-4 px-8 rounded-xl shadow-lg text-lg transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#c7a3fa]"
          >
            Book a Free Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default HiringFormSection;
