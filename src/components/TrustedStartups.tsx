
import { motion } from "framer-motion";
import { CacheOptimizedImage } from "./CacheOptimizedImage";

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
  {
    name: "Swimply",
    url: "https://swimply.com/",
    logo: "/lovable-uploads/2999c320-31d3-437d-ac66-13dca87efa9b.png",
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

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <a
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="flex items-center"
              aria-label={client.name}
            >
              <div className="bg-white/80 rounded-xl px-6 py-3 shadow-sm border border-gray-100 flex items-center min-w-[140px] min-h-[54px] justify-center hover:shadow-md hover:border-purple-200 transition-all duration-300">
                <CacheOptimizedImage
                  src={client.logo}
                  alt={client.name + ' logo'}
                  className="h-8 max-w-[100px] object-contain transition-opacity duration-300 hover:opacity-80"
                  width={100}
                  height={32}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `<span class="font-semibold text-gray-700 text-base whitespace-nowrap flex items-center gap-2"><span class="text-yellow-500">★</span>${client.name}</span>`;
                  }}
                />
              </div>
            </a>
          ))}
        </div>
    </motion.section>
  );
};

export default TrustedStartups;
