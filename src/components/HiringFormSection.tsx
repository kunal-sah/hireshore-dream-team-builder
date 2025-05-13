
import { useEffect } from "react";

const HiringFormSection = () => {
  // Add useEffect to load the Calendly script when component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

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
        
        {/* Calendly inline widget */}
        <div 
          className="calendly-inline-widget" 
          data-url="https://calendly.com/hireshore/30min?email_notifications[email]=wehireshore@gmail.com&hide_gdpr_banner=1" 
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>
    </section>
  );
};

export default HiringFormSection;
