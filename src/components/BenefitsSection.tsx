
const benefits = [
  {
    emoji: "🚀",
    title: "Top 1% Talent, Pre-Vetted",
    desc: "Our candidates go through 7 layers of screening — skills, attitude, communication, and cultural fit.",
  },
  {
    emoji: "💸",
    title: "Up to 80% Cost Savings",
    desc: "Scale fast without burning capital. Hire senior talent starting at $499/month.",
  },
  {
    emoji: "⏱",
    title: "Fast Hiring. 2-Week Turnaround.",
    desc: "From job requirement to onboarding in just 14 days.",
  },
  {
    emoji: "🔁",
    title: "Free Replacements Within 90 Days",
    desc: "If it doesn’t work out, we’ll replace them — no questions asked.",
  },
  {
    emoji: "🧾",
    title: "No Upfront Fees",
    desc: "You only pay after your perfect hire is onboarded.",
  },
];

const BenefitsSection = () => (
  <section className="max-w-5xl mx-auto py-12 md:py-20 grid gap-8 md:gap-12 px-4">
    <h2 className="text-2xl md:text-3xl font-playfair mb-2 text-center">✅ Why Founders Trust Hireshore</h2>
    <p className="text-lg text-center text-gray-500 mb-8">We're not just another recruiter. We’re your offshore hiring partner.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {benefits.map((b) => (
        <div key={b.title} className="bg-white bg-opacity-60 rounded-2xl shadow-glass p-6 flex flex-col items-center gap-2 border border-gray-200">
          <span className="text-3xl mb-1">{b.emoji}</span>
          <h3 className="text-xl font-bold mb-1 text-center">{b.title}</h3>
          <p className="text-gray-600 text-center">{b.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default BenefitsSection;
