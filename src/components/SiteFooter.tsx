
const SiteFooter = () => (
  <footer className="w-full py-10 bg-gradient-to-t from-[#e7e9f9] to-transparent mt-auto">
    <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-3 md:gap-0 items-center justify-between px-4">
      <div className="text-gray-600 text-center md:text-left text-sm">
        🤝 Backed by Real People, Real Results<br />
        <span className="text-gray-700">
          Hireshore is founded by a global team in Nepal, dedicated to helping startups and agencies grow lean and smart.<br />
          You're not talking to a faceless recruiter — you're partnering with a founder who’s built and scaled remote teams.
        </span>
      </div>
      <div className="flex flex-col md:items-end gap-1 text-sm mt-2 md:mt-0">
        <a className="text-[#7346e6] font-bold hover:underline" href="https://cal.com/hireshore/consult" rel="noopener noreferrer" target="_blank">
          📞 Book a free strategy call
        </a>
        <a className="text-gray-500 hover:text-[#7346e6] hover:underline" href="mailto:hello@hireshore.co">
          📧 hello@hireshore.co
        </a>
        <a className="text-gray-500 hover:text-[#7346e6] hover:underline" href="https://www.hireshore.co" target="_blank" rel="noopener noreferrer">
          🌐 www.hireshore.co
        </a>
      </div>
    </div>
    <div className="text-xs text-center text-gray-400 pt-6">© {new Date().getFullYear()} Hireshore. All rights reserved.</div>
  </footer>
);
export default SiteFooter;
