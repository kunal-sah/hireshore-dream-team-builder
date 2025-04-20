
const testimonials = [
  {
    name: "Alex J.",
    title: "Founder @ Nutrogen",
    text: "“Hireshore helped us save over $850K in hiring. We scaled our product team fast — without compromising on quality.”",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Marlon M.",
    title: "CEO @ Medz Media",
    text: "“Our VA from Hireshore is a powerhouse. Handles research, client comms, and project support — at a fraction of the usual cost.”",
    photo: "https://randomuser.me/api/portraits/men/78.jpg",
  },
];

const TestimonialsSection = () => (
  <section className="max-w-5xl mx-auto py-10 md:py-14 px-4">
    <div className="grid sm:grid-cols-2 gap-6">
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
