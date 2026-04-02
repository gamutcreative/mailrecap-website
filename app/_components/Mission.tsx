export default function Mission() {
  return (
    <section className="relative py-32 px-4 sm:px-6 overflow-hidden">
      {/* Warm lifestyle background — home office, natural light */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format&fit=crop')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#111827]/65" aria-hidden="true" />

      <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
        <h2
          className="text-3xl sm:text-4xl font-extrabold leading-tight mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Life is complicated. Your mail doesn&apos;t have to be.
        </h2>
        <p className="text-lg text-white/80 leading-relaxed mb-4">
          MailRecap was built for people who want more control over their household — and less stress from the stuff
          that piles up. We believe managing your mail should take minutes, not hours.
        </p>
        <p className="text-xl font-semibold text-white/90 mb-10">Mail made simple.</p>
        <a
          href="#download"
          className="inline-block bg-[#D42232] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#b01c29] transition-colors shadow-lg"
        >
          Start for Free
        </a>
      </div>
    </section>
  );
}
