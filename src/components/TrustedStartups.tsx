
import { motion } from "framer-motion";

const clients = [
  {
    name: "Medz Media",
    url: "https://medzmediaagency.com.au/",
    logo: "/lovable-uploads/b757a07c-9d5c-419d-9cc8-63208511c119.png",
  },
  {
    name: "Affective Health",
    url: "http://affectivehealthservices.com.au/",
    logo: "/lovable-uploads/311b322b-98dc-490e-8eef-00a2ba10de8c.png",
  },
  {
    name: "Digital Six",
    url: "https://digitalsix.com.au/",
    logo: "/lovable-uploads/e8eb4eea-0993-4006-beb8-9c96700cc841.png",
  },
  {
    name: "Yes Digital",
    url: "https://www.yesdigital.com.au/",
    logo: "/lovable-uploads/0645b68b-e612-4979-b35e-2a5406bdda0b.png",
  },
  {
    name: "PropertyStack",
    url: "https://propertystack.ai/",
    logo: "/lovable-uploads/01309d50-9aad-4e5d-b846-f75569799366.png",
  },
];

const TrustedStartups = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      className="max-w-5xl mx-auto py-8 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.span 
          className="text-sm font-medium text-gray-500 uppercase tracking-wider inline-block"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          Trusted by 25+ Global Startups
        </motion.span>
      </motion.div>

      <motion.div 
        className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {clients.map((client, index) => (
          <motion.a
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="flex items-center"
            aria-label={client.name}
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <motion.div 
              className="bg-white/80 rounded-xl px-6 py-3 shadow-sm border border-gray-100 flex items-center min-w-[140px] min-h-[54px] justify-center hover:shadow-md hover:border-purple-200 transition-all duration-300"
              whileHover={{ 
                boxShadow: "0 4px 20px rgba(139, 92, 246, 0.15)" 
              }}
            >
              <img
                src={client.logo}
                alt={client.name + ' logo'}
                className="h-8 max-w-[100px] object-contain transition-opacity duration-300 hover:opacity-80"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `<span class="font-semibold text-gray-700 text-base whitespace-nowrap flex items-center gap-2"><span class="text-yellow-500">★</span>${client.name}</span>`;
                }}
              />
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default TrustedStartups;
