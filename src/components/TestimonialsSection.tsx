
const testimonials = [
  {
    name: "Alex J.",
    title: "Founder @ Nutrogen",
    text: "“We saved over $850K hiring with Hireshore. Insanely good people, and no hiring headaches.”",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Marlon M.",
    title: "CEO @ Medz Media",
    text: "“Our VA from Hireshore works across research, project management, and even Shopify tasks. We now save over 30 hours a week — for just $499/month.”",
    photo: "https://randomuser.me/api/portraits/men/78.jpg",
  },
  {
    name: "Rachel S.",
    title: "Head of Ops @ Digital Six",
    text: "“The fastest hiring process I’ve experienced. We had a designer onboarded in 6 days — and she’s a rockstar.”",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const TestimonialsSection = () => (
  <section className="max-w-5xl mx-auto py-10 md:py-14 px-4">
    <h2 className="text-xl md:text-2xl font-playfair mb-6 text-center">❤️ Why Founders & Agencies Rely on Hireshore</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {testimonials.map((t) => (
        <div key={t.name} className="bg-white/90 rounded-xl p-6 shadow-glass border border-gray-100 flex flex-col gap-3 items-start">
          <div className="flex items-center gap-3">
            <img src={t.photo} alt={t.name} className="w-10 h-10 rounded-full border-2 border-[#988ffe] object-cover" />
            <div>
              <div className="font-semibold text-gray-900">{t.name}</div>
              <div className="text-xs text-gray-500">{t.title}</div>
            </div>
          </div>
          <div className="text-gray-700 italic mt-2">{t.text}</div>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
