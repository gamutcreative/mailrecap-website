export default function Footer() {
  return (
    <footer className="bg-[#0C1461] text-blue-200 py-12 px-4 sm:px-6">
      {/* Airmail stripe at top of footer */}
      <div className="airmail-stripe h-2 -mx-4 sm:-mx-6 mb-12 opacity-70"></div>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          <div>
            <a href="/" className="flex items-center gap-2 mb-3">
              <span className="text-[#D42232]">✉</span>
              <span
                className="text-xl text-[#D42232]"
                style={{ fontFamily: "var(--font-pacifico)" }}
              >
                MailRecap
              </span>
            </a>
            <p className="text-sm max-w-xs leading-relaxed">
              Scan, understand, and act on your physical mail — in English and Spanish.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="text-white font-semibold mb-3">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How it works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-[#1a2480] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} MailRecap. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter/X" className="hover:text-white transition-colors">𝕏</a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
