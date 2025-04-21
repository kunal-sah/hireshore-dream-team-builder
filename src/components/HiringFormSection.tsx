
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const HiringFormSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4500);
    if (form.current) form.current.reset();
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
          <Button
            type="submit"
            className="bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee] text-white font-bold py-4 px-8 rounded-xl shadow-lg text-lg transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#c7a3fa] w-full"
          >
            {submitted ? "🎉 Thank you! We'll reach out soon." : "Start Hiring Now"}
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
