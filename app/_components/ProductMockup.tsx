export default function ProductMockup() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Phone mockup */}
          <div className="shrink-0">
            <div className="relative bg-[#111827] rounded-[2.8rem] p-3 shadow-2xl shadow-stone-400/30 border-4 border-[#1f2937] w-64">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#111827] rounded-full z-10" />
              <div className="bg-[#FAF8F4] rounded-[2.2rem] overflow-hidden">
                <div className="bg-[#D42232] px-5 pt-7 pb-3 flex items-center justify-between">
                  <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-pacifico)" }}>
                    mailrecap
                  </span>
                  <span className="text-white/70 text-xs">9:41 AM</span>
                </div>
                <div className="p-3 space-y-2 bg-white">
                  {[
                    { from: "Chase Bank", subject: "Statement ready — action needed", urgent: true },
                    { from: "USPS", subject: "Package arriving Thursday", urgent: false },
                    { from: "City of Portland", subject: "Water bill — $48 due in 5 days", urgent: true },
                    { from: "Amazon", subject: "Your return was received", urgent: false },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-100">
                      <div className="w-8 h-8 rounded-full bg-[#D42232]/10 flex items-center justify-center shrink-0 text-[#D42232] font-bold text-xs">
                        {item.from[0]}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-[#111827] text-xs truncate">{item.from}</p>
                        <p className="text-stone-400 text-[10px] truncate">{item.subject}</p>
                      </div>
                      {item.urgent && <div className="w-2 h-2 rounded-full bg-[#D42232] shrink-0" />}
                    </div>
                  ))}
                </div>
                <div className="bg-white border-t border-stone-100 px-4 py-2 flex justify-around">
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-5 h-5 rounded bg-[#D42232]/10 flex items-center justify-center text-[10px]">📬</div>
                    <span className="text-[9px] text-[#D42232] font-medium">Inbox</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-5 h-5 rounded bg-stone-100 flex items-center justify-center text-[10px]">🔔</div>
                    <span className="text-[9px] text-stone-400">Alerts</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-5 h-5 rounded bg-stone-100 flex items-center justify-center text-[10px]">⚙️</div>
                    <span className="text-[9px] text-stone-400">Settings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature callouts */}
          <div className="flex-1 space-y-8">
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-[#111827] leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              See your mail the moment it matters.
            </h2>
            <div className="space-y-6">
              {[
                {
                  icon: "📸",
                  title: "Scan any piece of mail in seconds",
                  body: "Take a photo and MailRecap reads it instantly — no manual entry, no scanning equipment.",
                },
                {
                  icon: "🗂️",
                  title: "Organized automatically",
                  body: "Bills, packages, notices, and statements are sorted the moment they arrive.",
                },
                {
                  icon: "🔍",
                  title: "Find any document, any time",
                  body: "Search your full mail history. Never dig through a pile again.",
                },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="text-2xl shrink-0 mt-0.5">{f.icon}</div>
                  <div>
                    <h3 className="font-semibold text-[#111827] mb-1">{f.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#download"
              className="inline-block bg-[#D42232] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#b01c29] transition-colors"
            >
              Download for free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
