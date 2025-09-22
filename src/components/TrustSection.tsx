
import { Star } from "lucide-react";
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

const mediaFeatures = [
  {
    name: "Forbes",
    logo: "/lovable-uploads/fca333ed-fa13-4bf6-8cde-4708ebfb7ae9.png",
  },
  {
    name: "Google News",
    logo: "/lovable-uploads/ecf56630-afb3-4e7b-9ae6-94694f6f12a7.png",
  },
  {
    name: "Inman",
    logo: "/lovable-uploads/45e83f55-ac8b-42ac-943b-ff04ecaf7b0f.png",
  },
  {
    name: "Realtor",
    logo: "/lovable-uploads/191e546d-59d4-4888-baf8-be28996f7dd3.png",
  },
  {
    name: "MSN",
    logo: "/lovable-uploads/39722330-5204-4d51-a69b-4979142e6e40.png",
  },
];

const TrustSection = () => {
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
      id="trust" 
      className="max-w-5xl mx-auto py-12 md:py-16 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Trusted by Global Startups Section */}
      <motion.div 
        className="text-center mb-8"
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
        className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-16"
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
              <CacheOptimizedImage
                src={client.logo}
                alt={client.name + ' logo'}
                className="h-8 max-w-[100px] object-contain transition-opacity duration-300 hover:opacity-80"
                width={100}
                height={32}
                displayWidth={100}
                displayHeight={32}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  // If image fails to load, fallback to showing the client name
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; // Prevent infinite loop
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `<span class="font-semibold text-gray-700 text-base whitespace-nowrap flex items-center gap-2"><span class="text-yellow-500">★</span>${client.name}</span>`;
                }}
              />
            </motion.div>
          </motion.a>
        ))}
      </motion.div>

      {/* Featured In Media Section */}
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.span 
          className="text-sm font-medium text-gray-500 uppercase tracking-wider inline-block"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        >
          Trusted by Clients Featured In:
        </motion.span>
      </motion.div>

      <motion.div 
        className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {mediaFeatures.map((media, index) => (
          <motion.div
            key={index}
            className="flex items-center"
            aria-label={media.name}
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
              <CacheOptimizedImage
                src={media.logo}
                alt={media.name + ' logo'}
                className="h-8 max-w-[100px] object-contain transition-opacity duration-300 hover:opacity-80 grayscale hover:grayscale-0"
                width={100}
                height={32}
                displayWidth={100}
                displayHeight={32}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  // If image fails to load, fallback to showing the media name
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; // Prevent infinite loop
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `<span class="font-semibold text-gray-700 text-base whitespace-nowrap">${media.name}</span>`;
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default TrustSection;
