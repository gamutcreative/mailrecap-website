export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 80 80" fill="none" aria-hidden="true">
            <path d="M10 20C10 17.2 12.2 15 15 15H65C67.8 15 70 17.2 70 20V60C70 62.8 67.8 65 65 65H15C12.2 65 10 62.8 10 60V20Z" stroke="#D42232" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <path d="M10 22L40 44L70 22" stroke="#D42232" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span
            className="text-2xl text-[#D42232]"
            style={{ fontFamily: "var(--font-pacifico)" }}
          >
            mailrecap.co
          </span>
        </a>
        <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-slate-900 transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
        </div>
        <a
          href="#download"
          className="bg-[#D42232] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#a81b28] transition-colors"
        >
          Download App
        </a>
      </div>
    </nav>
  );
}
