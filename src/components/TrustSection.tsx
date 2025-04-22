
import { Star } from "lucide-react";

const clients = [
  {
    name: "Medz Media",
    url: "https://medzmediaagency.com.au/",
    logo: "https://medzmediaagency.com.au/wp-content/uploads/2024/03/Logo-main-1.svg",
  },
  {
    name: "Affective Health",
    url: "http://affectivehealthservices.com.au/",
    // No clear white logo; fallback to name
    logo: "",
  },
  {
    name: "Digital Six",
    url: "https://digitalsix.com.au/",
    logo: "https://digitalsix.com.au/wp-content/uploads/2024/03/Digital-Six-Logo-Retina.png",
  },
  {
    name: "Yes Digital",
    url: "https://www.yesdigital.com.au/",
    logo: "https://www.yesdigital.com.au/wp-content/uploads/2022/09/Logo.svg",
  },
  {
    name: "PropertyStack",
    url: "https://propertystack.ai/",
    logo: "https://propertystack.ai/images/logo-light.svg",
  },
];

const TrustSection = () => (
  <section id="trust" className="max-w-5xl mx-auto py-12 md:py-16 px-4">
    <div className="text-center mb-8">
      <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Trusted by 25+ Global Startups</span>
    </div>

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
          <div className="bg-white/80 rounded-xl px-6 py-3 shadow-sm border border-gray-100 flex items-center min-w-[140px] min-h-[54px] justify-center">
            {client.logo ? (
              <img
                src={client.logo}
                alt={client.name + ' logo'}
                className="h-8 max-w-[100px] object-contain"
                loading="lazy"
                onError={(e) => {
                  // If image fails to load, fallback to showing the client name
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; // Prevent infinite loop
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `<span class="font-semibold text-gray-700 text-base whitespace-nowrap flex items-center gap-2"><span class="text-yellow-500">★</span>${client.name}</span>`;
                }}
              />
            ) : (
              <span className="font-semibold text-gray-700 text-base whitespace-nowrap flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                {client.name}
              </span>
            )}
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default TrustSection;
