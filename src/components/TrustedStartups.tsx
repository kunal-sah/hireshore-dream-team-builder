
import { motion } from "framer-motion";

const clients = [
  {
    name: "Medz Media",
    url: "https://medzmediaagency.com.au/",
    logo: "/lovable-uploads/b757a07c-9d5c-419d-9cc8-63208511c119.png",
  },
  {
    name: "Cove Digital",
    url: "#",
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
  {
    name: "Sendr",
    url: "https://sendr.ai/",
    logo: "/lovable-uploads/sendr-logo.png",
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

  // Duplicate for seamless marquee loop
  const marqueeLogos = [...clients, ...clients];

  return (
    <motion.section
      className="bg-background py-10 md:py-14 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
      <div className="text-center mb-6">
        <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
          Trusted by 25+ Global Startups
        </span>
      </div>

      <div
        className="relative overflow-hidden group"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div className="flex gap-8 md:gap-12 w-max animate-marquee group-hover:[animation-play-state:paused]">
          {marqueeLogos.map((client, index) => (
            <a
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              aria-label={client.name}
              className="flex items-center shrink-0"
            >
              <div className="bg-white/80 rounded-xl px-6 py-3 shadow-sm border border-gray-100 flex items-center min-w-[140px] min-h-[54px] justify-center hover:shadow-md hover:border-purple-200 transition-all duration-300">
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
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TrustedStartups;
