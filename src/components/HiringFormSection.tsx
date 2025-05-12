
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import emailjs from 'emailjs-com';
import { toast } from "@/components/ui/sonner";

const HiringFormSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  // Initialize EmailJS with your user ID (public key)
  useEffect(() => {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    
    if (form.current) {
      // Add recipient email as a hidden field
      const formData = new FormData(form.current);
      formData.append("to_email", "wehireshore@gmail.com");
      
      // Send email using EmailJS
      emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
        form.current
      )
        .then(() => {
          setSubmitted(true);
          setLoading(false);
          form.current?.reset();
          toast.success("Form submitted successfully! We'll contact you soon.");
          setTimeout(() => setSubmitted(false), 4500);
        })
        .catch((error) => {
          console.error("Email sending failed:", error);
          setLoading(false);
          toast.error("Something went wrong. Please try again.");
        });
    }
  }

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
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 max-w-lg mx-auto"
          autoComplete="off"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              required
              className="w-full p-3 rounded-lg border border-gray-200 bg-white focus:outline-[#925fff] focus:ring-1 focus:ring-[#925fff]"
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <input
              required
              className="w-full p-3 rounded-lg border border-gray-200 bg-white focus:outline-[#925fff] focus:ring-1 focus:ring-[#925fff]"
              type="email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <textarea
            className="w-full p-3 rounded-lg border border-gray-200 bg-white focus:outline-[#925fff] focus:ring-1 focus:ring-[#925fff] min-h-[120px]"
            name="needs"
            placeholder="What roles do you want to hire? (e.g., 2 developers for SaaS project)"
            required
          />
          {/* Hidden field for recipient email */}
          <input type="hidden" name="to_email" value="wehireshore@gmail.com" />
          
          <Button
            type="submit"
            className="bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee] text-white font-bold py-4 px-8 rounded-xl shadow-lg text-lg transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#c7a3fa] w-full"
            disabled={loading || submitted}
          >
            {loading ? "Sending..." : submitted ? "🎉 Thank you! We'll reach out soon." : "Start Hiring Now"}
          </Button>
          <div className="text-sm mt-2 text-gray-400 text-center">
            No commitment. Get a free shortlist.
          </div>
        </form>
      </div>
    </section>
  );
};
export default HiringFormSection;
