
import { useRef, useState } from "react";

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
    <section id="hire-form" className="max-w-xl mx-auto py-12 md:py-20 px-4">
      <div className="bg-gradient-to-tr from-white to-[#eeeefd] rounded-2xl shadow-lg p-8 border border-gray-100">
        <h2 className="text-2xl md:text-3xl font-playfair mb-3 text-center text-[#6336c9]">📩 Ready to Hire Smarter?</h2>
        <p className="text-lg text-gray-600 mb-8 text-center">Fill out the quick form below and get your first shortlist in 48 hours.</p>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          autoComplete="off"
        >
          <input
            required
            className="w-full p-3 rounded-lg border border-gray-200 bg-white shadow focus:outline-[#925fff]"
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            required
            className="w-full p-3 rounded-lg border border-gray-200 bg-white shadow focus:outline-[#925fff]"
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <textarea
            className="w-full p-3 rounded-lg border border-gray-200 bg-white shadow focus:outline-[#925fff] min-h-[80px]"
            name="needs"
            placeholder="What roles do you want to hire? (e.g., 2 developers for SaaS project)"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee] text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg transition-transform hover:scale-105 mt-2"
          >
            {submitted ? "🎉 Thank you! We’ll reach out soon." : "Start Hiring Now"}
          </button>
        </form>
        <div className="text-sm mt-5 text-gray-400 text-center">
          Free Consultation. No Strings Attached.
        </div>
      </div>
    </section>
  );
};
export default HiringFormSection;
