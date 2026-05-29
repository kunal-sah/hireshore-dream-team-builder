import { motion } from "framer-motion";

const founders = [
  { name: "Aaron Erwich", title: "Founder, Digital Six", photo: "/lovable-uploads/8d290392-3676-42f7-91a8-d1bb48f6fca7.png" },
  { name: "Ryan Jope", title: "Founder, PropertyStack", photo: "/lovable-uploads/d4be4a5a-7f58-4205-b403-c137a43e5d8b.png" },
  { name: "Marlon M.", title: "Founder, Medz Media", photo: "/lovable-uploads/fbdcffaa-5b42-4efe-ae99-e7cec23a54c8.png" },
  { name: "Chloe Bundy", title: "Founder, Cove Digital", photo: "/lovable-uploads/a2773a93-5211-4d24-a4b1-ec9b04e22039.png" },
  { name: "Breearna Jope", title: "Founder, Uncommon Solutions", photo: "/lovable-uploads/394a2ced-a988-4153-8ef9-1e99f76765fb.png" },
  { name: "Dave Cannell", title: "CEO, Sendr", photo: "/lovable-uploads/dave-cannell.png" },
  { name: "John Bromley", title: "Cofounder, Sendr", photo: "/lovable-uploads/john-bromley.png" },
  { name: "Yona Meissner", title: "Head of Ops, Swimply", photo: "/lovable-uploads/yona-meissner.png" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};
const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } };

const FoundersWall = () => {
  return (
    <motion.section
      className="bg-secondary py-16 md:py-24 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            And the founders who trust our pods
          </span>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-3 sm:gap-x-6 sm:gap-y-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {founders.map((f) => (
            <motion.div
              key={f.name}
              variants={item}
              whileHover={{ y: -2 }}
              className="flex items-center gap-2 sm:gap-3 bg-white border border-gray-100 rounded-full pl-1 pr-3 sm:pr-4 py-1 shadow-sm hover:shadow-md hover:border-purple-200 transition-all overflow-hidden min-w-0"
            >
              <img
                src={f.photo}
                alt={f.name}
                loading="lazy"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-purple-100 bg-gray-100 flex-shrink-0"
              />
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm font-semibold text-gray-900 truncate">{f.name}</p>
                <p className="text-[11px] sm:text-xs text-gray-500 truncate">{f.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FoundersWall;
