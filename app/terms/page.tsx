import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — MailRecap",
  description: "Terms governing your use of the MailRecap app and website.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      <header className="border-b border-stone-200 bg-[#FAF8F4] px-4 sm:px-6 py-4">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <svg width="20" height="20" viewBox="0 0 80 80" fill="none" aria-hidden="true">
            <path d="M10 20C10 17.2 12.2 15 15 15H65C67.8 15 70 17.2 70 20V60C70 62.8 67.8 65 65 65H15C12.2 65 10 62.8 10 60V20Z" stroke="#D42232" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <path d="M10 22L40 44L70 22" stroke="#D42232" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-bold text-[#111827]" style={{ fontFamily: "var(--font-pacifico)" }}>mailrecap.co</span>
        </Link>
      </header>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
          Terms of Service
        </h1>
        <p className="text-stone-500 text-sm mb-10">Last updated: April 2, 2026</p>

        <div className="prose prose-stone max-w-none space-y-8 text-stone-700">
          <section>
            <h2 className="text-xl font-bold text-[#111827] mb-3">Agreement</h2>
            <p className="leading-relaxed">
              By downloading or using MailRecap, you agree to these Terms of Service. If you do not agree, please do not use the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111827] mb-3">Use of the Service</h2>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>MailRecap is for personal and household use.</li>
              <li>You must be 13 years or older to use the service.</li>
              <li>You are responsible for keeping your account credentials secure.</li>
              <li>You may not use MailRecap to scan or process mail that does not belong to you or your household.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111827] mb-3">Subscriptions and Billing</h2>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>Free tier includes 5 scans to get started.</li>
              <li>Paid plans are billed monthly or annually as selected.</li>
              <li>Subscriptions renew automatically. You can cancel at any time from your device&apos;s subscription settings.</li>
              <li>Refunds are handled according to the App Store or Google Play refund policies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111827] mb-3">Intellectual Property</h2>
            <p className="leading-relaxed">
              The MailRecap app, website, and all associated content are the property of MailRecap and its licensors. You may not copy, modify, or distribute any part of the service without our written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111827] mb-3">Limitation of Liability</h2>
            <p className="leading-relaxed">
              MailRecap is provided &ldquo;as is&rdquo;. We are not liable for any damages arising from your use of the service, including but not limited to data loss or missed notifications. MailRecap does not provide legal, financial, or professional advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111827] mb-3">Changes to These Terms</h2>
            <p className="leading-relaxed">
              We may update these terms from time to time. Continued use of the service after changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111827] mb-3">Contact</h2>
            <p className="leading-relaxed">
              Questions about these terms? Email{" "}
              <a href="mailto:legal@mailrecap.co" className="text-[#D42232] hover:underline">
                legal@mailrecap.co
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <footer className="border-t border-stone-200 px-4 sm:px-6 py-6 text-center text-sm text-stone-400">
        <Link href="/" className="hover:text-[#111827] transition-colors">← Back to mailrecap.co</Link>
        {" · "}
        <Link href="/privacy" className="hover:text-[#111827] transition-colors">Privacy Policy</Link>
      </footer>
    </div>
  );
}
