
const LandingHero = () => {
  return (
    <header className="w-full bg-gradient-to-br from-[#fdfcfb] via-[#e2d1c3] to-[#c3e2de] pt-16 pb-20 md:py-24 px-4 md:px-0">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-2xl md:text-3xl inline-block mb-3 font-playfair">
          🌍 Build Your Global Dream Team —
          <span className="text-[#8a63f6]"> At 80% Less Cost, In Just 14 Days</span>
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold font-playfair mt-4 mb-3 text-gray-900 leading-tight tracking-tight drop-shadow">
          🔥 Top 1% Remote Talent from Nepal, Vetted & Ready to Go
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-6 font-medium">
          Hireshore helps startups and agencies hire senior tech, creative, and support talent — fast, affordable, risk-free.
        </p>
        <a
          href="#hire-form"
          className="inline-block bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee] text-white font-bold py-4 px-10 rounded-full shadow-lg text-xl transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#c7a3fa]"
        >
          👉 Start Hiring Now
        </a>
        <div className="text-sm mt-4 text-gray-500 italic">
          (No commitment. Get a free shortlist.)
        </div>
      </div>
    </header>
  );
};
export default LandingHero;
