
import { Star } from "lucide-react";

const TrustSection = () => (
  <section id="trust" className="max-w-5xl mx-auto py-12 md:py-16 px-4">
    <div className="text-center mb-8">
      <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Trusted by 25+ Global Startups</span>
    </div>
    
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
      {['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5'].map((brand, index) => (
        <div key={index} className="flex items-center">
          <div className="bg-white/80 rounded-xl px-6 py-3 shadow-sm border border-gray-100 flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="font-medium text-gray-700">{brand}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TrustSection;
