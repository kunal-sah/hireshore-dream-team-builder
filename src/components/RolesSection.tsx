
const roles = [
  "Full Stack Developers",
  "UI/UX Designers",
  "Digital Marketers",
  "Virtual Assistants",
  "QA Engineers",
  "Customer Support",
  "Shopify/WordPress Experts",
  "…and more",
];

const RolesSection = () => (
  <section className="max-w-4xl mx-auto py-8 md:py-14 px-4">
    <h2 className="text-xl md:text-2xl font-playfair mb-6 text-center">👨‍💻 Roles We Specialize In:</h2>
    <div className="flex flex-wrap justify-center gap-3 md:gap-6">
      {roles.map((role, i) => (
        <span key={role} className="bg-gradient-to-r from-[#f1ecfc] to-[#e0f3ef] text-[#6336c9] font-semibold px-5 py-2 rounded-full shadow-sm border border-[#e4d2fd] text-sm md:text-base">
          {role}
        </span>
      ))}
    </div>
  </section>
);

export default RolesSection;
