const benefits = [
  {
    emoji: "🧠",
    title: "Elite Talent. No Guesswork.",
    desc: "We handpick the top 1% from Nepal across technical skills, soft skills & startup fit. Only the best make the cut.",
  },
  {
    emoji: "💸",
    title: "Massive Cost Advantage",
    desc: "Save up to 80–90% vs. local hires. Pros from $800/month. Grow lean — without compromise.",
  },
  {
    emoji: "⚡️",
    title: "Speed to Hire: 14 Days or Less",
    desc: "Shortlist in 48 hours. Fully onboarded in 2 weeks, maximum.",
  },
  {
    emoji: "🔁",
    title: "Zero Risk Hiring Guarantee",
    desc: "If it’s not a fit, we’ll replace them free — within 90 days. Your success, guaranteed.",
  },
  {
    emoji: "💰",
    title: "No Upfront Cost",
    desc: "Pay only after you onboard and are fully satisfied. Hiring made frictionless.",
  },
  {
    emoji: "🤝",
    title: "Personalized Support",
    desc: "From custom role scoping to post-hire support — we act as your extended hiring team, not just a vendor.",
  }
];

const vettingSteps = [
  "Role & Culture Mapping",
  "Resume & Background Screening",
  "Technical Assessment",
  "Live Interview",
  "Communication Check",
  "Cultural Fit & Attitude Test",
  "Final Review + Shortlist Delivery",
];

const BenefitsSection = () => (
  <section id="benefits" className="max-w-5xl mx-auto py-12 md:py-20 grid gap-8 md:gap-12 px-4">
    <h2 className="text-2xl md:text-3xl font-sans mb-2 text-center">🧠 Why Hireshore?</h2>
    <p className="text-lg text-center text-gray-500 mb-8">We’re not just recruiters. We’re an extension of your founding team.</p>
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6">
      {benefits.map((b) => (
        <div key={b.title} className="bg-white bg-opacity-60 rounded-2xl shadow-glass p-6 flex flex-col items-center gap-2 border border-gray-200">
          <span className="text-3xl mb-1">{b.emoji}</span>
          <h3 className="text-lg font-bold mb-1 text-center">{b.title}</h3>
          <p className="text-gray-600 text-center">{b.desc}</p>
        </div>
      ))}
    </div>
    <div className="mt-12 mx-auto max-w-2xl rounded-xl bg-white/95 border border-gray-100 shadow-glass p-6">
      <h3 className="font-bold text-center mb-2 text-[#6336c9] text-lg">
        ⚙️ Our Proven 7-Step Vetting Process
      </h3>
      <ol className="list-decimal list-inside text-gray-600 space-y-1 text-center md:text-left">
        {vettingSteps.map((step) => (
          <li key={step} className="">{step}</li>
        ))}
      </ol>
      <div className="text-gray-500 text-sm text-center mt-2">
        📌 Every person you meet is client-ready. No time-wasters.
      </div>
    </div>
  </section>
);

export default BenefitsSection;
