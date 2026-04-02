export default function Footer() {
  return (
    <footer className="bg-[#111827] text-stone-400 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          <div>
            <a href="/" className="flex items-center gap-2 mb-3">
              <svg width="20" height="20" viewBox="0 0 80 80" fill="none" aria-hidden="true">
                <path d="M10 20C10 17.2 12.2 15 15 15H65C67.8 15 70 17.2 70 20V60C70 62.8 67.8 65 65 65H15C12.2 65 10 62.8 10 60V20Z" stroke="#D42232" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M10 22L40 44L70 22" stroke="#D42232" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-pacifico)" }}>
                mailrecap.co
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
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How it works</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="/creators-lab" className="hover:text-white transition-colors">Creators Lab</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Support</h4>
              <ul className="space-y-2">
                <li><a href="mailto:support@mailrecap.co" className="hover:text-white transition-colors">Contact</a></li>
                <li>
                  <a
                    href="https://apps.apple.com/us/app/mailrecap-co/id6756124597"
                    className="hover:text-white transition-colors"
                  >
                    App Store
                  </a>
                </li>
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.mailrecap"
                    className="hover:text-white transition-colors"
                  >
                    Google Play
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} MailRecap. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a
              href="https://twitter.com/mailrecap"
              aria-label="Twitter/X"
              className="hover:text-white transition-colors"
            >
              𝕏
            </a>
            <a
              href="https://instagram.com/mailrecap"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com/@mailrecap"
              aria-label="TikTok"
              className="hover:text-white transition-colors"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
