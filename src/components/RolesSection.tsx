
const roles = [
  "Full Stack Developers (React, Node, Laravel, etc.)",
  "UI/UX Designers (Figma, Webflow)",
  "Digital Marketers (SEO, Performance, Email)",
  "Virtual Assistants (Admin, Sales Support, Project Management)",
  "QA Engineers & DevOps",
  "Shopify / WordPress Experts",
  "Customer Support Reps (Email, Chat, Phone)",
  "More — tailored for your needs"
];

const RolesSection = () => (
  <section id="roles" className="max-w-4xl mx-auto py-16 md:py-24 px-4">
    <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
      Roles We Specialize In
    </h2>
    <div
      className="
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
        gap-4
        justify-items-center
      "
    >
      {roles.map((role) => (
        <div
          key={role}
          className="bg-white text-gray-800 px-5 py-4 rounded-lg shadow-sm border border-gray-100 text-sm md:text-base w-full text-center hover:shadow-md transition-shadow"
        >
          {role}
        </div>
      ))}
    </div>
  </section>
);

export default RolesSection;
