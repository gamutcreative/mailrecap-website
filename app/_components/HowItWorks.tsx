const steps = [
  {
    number: "1",
    title: "Snap a photo of your mail",
    description: "Open MailRecap and take a photo of any piece of mail. No scanner, no setup — just your phone.",
  },
  {
    number: "2",
    title: "MailRecap organizes it automatically",
    description: "Your mail is read, summarized in plain language, and sorted into the right category instantly.",
  },
  {
    number: "3",
    title: "Access, search, and manage from anywhere",
    description: "Find any document, track deadlines, and know exactly what to do next — whenever you need it.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 bg-[#F3EFE9]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Three steps. That&apos;s it.
          </h2>
          <p className="text-lg text-stone-500 max-w-xl mx-auto">
            Getting on top of your mail has never been this simple.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-stone-300 -translate-x-4 z-0" />
              )}
              <div className="relative z-10 bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
                <div className="w-10 h-10 rounded-full bg-[#D42232] text-white flex items-center justify-center font-extrabold text-lg mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">{step.title}</h3>
                <p className="text-stone-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
