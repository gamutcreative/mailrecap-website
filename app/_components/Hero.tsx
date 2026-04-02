export default function Hero() {
  return (
    <section className="relative pt-16 min-h-screen flex items-center overflow-hidden">
      {/* Full-width lifestyle background — person at kitchen table, natural light */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1600&q=80&auto=format&fit=crop')",
        }}
        aria-hidden="true"
      />
      {/* Warm dark overlay */}
      <div className="absolute inset-0 bg-[#111827]/60" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 text-center text-white w-full">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 max-w-3xl mx-auto"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Your mail, finally under control.
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          MailRecap turns every piece of physical mail into a clear, organized digital record — automatically.
        </p>
        <div id="download" className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://apps.apple.com/us/app/mailrecap-co/id6756124597"
            className="flex items-center gap-3 bg-[#D42232] text-white px-7 py-4 rounded-xl font-semibold hover:bg-[#b01c29] transition-colors w-full sm:w-auto justify-center shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current shrink-0" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.24 1.31-2.22 3.91.03 3.1 2.72 4.13 2.75 4.14l-.08.17zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span>
              <span className="block text-xs text-red-200 leading-none">Download on the</span>
              <span className="block text-base leading-tight">App Store</span>
            </span>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.mailrecap"
            className="flex items-center gap-3 bg-white/15 border border-white/40 text-white px-7 py-4 rounded-xl font-semibold hover:bg-white/25 transition-colors w-full sm:w-auto justify-center backdrop-blur-sm"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current shrink-0" aria-hidden="true">
              <path d="M3.18 23.76c.3.17.64.24.99.2l.11-.03L13.65 12 4.28.07l-.11-.03a1.4 1.4 0 00-.99.2C2.85.57 2.5 1.22 2.5 2v19.76c0 .78.35 1.43.68 2zm14.4-12.42l-2.5-2.5-8.18-8.18 9.59 5.54a1.5 1.5 0 010 2.6l-.91.54zm-10.68 10.1l8.18-8.18 2.5-2.5.91.54a1.5 1.5 0 010 2.6l-9.59 5.54z" />
            </svg>
            <span>
              <span className="block text-xs text-white/70 leading-none">Get it on</span>
              <span className="block text-base leading-tight">Google Play</span>
            </span>
          </a>
        </div>
        <p className="text-white/55 text-sm mt-6">5 free scans · No credit card required</p>
      </div>
    </section>
  );
}
