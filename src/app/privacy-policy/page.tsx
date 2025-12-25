import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - BudgetWise",
  description:
    "Privacy Policy for BudgetWise mobile application. Learn how we collect, use, and protect your information.",
  openGraph: {
    title: "Privacy Policy - BudgetWise",
    description:
      "Privacy Policy for BudgetWise mobile application. Learn how we collect, use, and protect your information.",
  },
};

export default function PrivacyPolicy() {
  const lastUpdated = "25th December 2025";
  const email = "uvcode139@gmail.com";

  return (
    <div className="min-h-screen bg-[#171717] text-[#f9fafb]">
      {/* Navigation */}
      <nav className="border-b border-[#1f2937] bg-[#171717]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/icon.png"
                alt="BudgetWise"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-sm font-semibold tracking-wider text-[#f9fafb]">
                BudgetWise
              </span>
            </Link>
            <Link
              href="/"
              className="text-sm text-[#9ca3af] hover:text-[#22c55e] transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-linear-to-r from-white via-[#f9fafb] to-[#9ca3af] bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-lg text-[#9ca3af]">Last updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-8 text-[#f9fafb]">
            {/* Introduction */}
            <section className="bg-[#020617] border border-[#1f2937] rounded-2xl p-6 sm:p-8">
              <p className="text-base sm:text-lg leading-relaxed text-[#f9fafb]">
                BudgetWise (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is a personal finance and
                expense tracking application. Your privacy is important to us,
                and this Privacy Policy explains how we collect, use, and
                protect your information when you use the BudgetWise mobile
                application (&quot;App&quot;).
              </p>
            </section>

            {/* Section 1 */}
            <section className="bg-[#020617] border border-[#1f2937] rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#f9fafb]">
                1. Information We Collect
              </h2>
              <p className="text-base sm:text-lg mb-6 text-[#f9fafb]">
                BudgetWise may collect the following types of information:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#22c55e]">
                    a) Personal Information
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-[#9ca3af] ml-4">
                    <li>
                      Email address (only if you choose to sign in or create an
                      account)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#22c55e]">
                    b) Financial Information
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-[#9ca3af] ml-4">
                    <li>Expense and income entries</li>
                    <li>Transaction notes, categories, and amounts</li>
                    <li>Account names created by the user</li>
                  </ul>
                  <p className="text-base text-[#9ca3af] mt-3">
                    This data is entered voluntarily by the user for the purpose
                    of tracking personal finances.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#22c55e]">
                    c) App Usage Data
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-[#9ca3af] ml-4">
                    <li>
                      Basic app interactions required for app functionality
                    </li>
                    <li>
                      Error logs or crash information (used only to improve app
                      stability)
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="bg-[#020617] border border-[#1f2937] rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#f9fafb]">
                2. How We Use Your Information
              </h2>
              <p className="text-base sm:text-lg mb-4 text-[#f9fafb]">
                We use the collected information to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#9ca3af] ml-4">
                <li>
                  Provide core app functionality (expense tracking, analytics,
                  summaries)
                </li>
                <li>Sync and store your data securely</li>
                <li>Improve app performance and user experience</li>
                <li>Fix bugs and prevent crashes</li>
              </ul>
              <p className="text-base text-[#9ca3af] mt-4">
                We do not use your data for advertising or marketing purposes.
              </p>
            </section>

            {/* Section 3 */}
            <section className="bg-[#020617] border border-[#1f2937] rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#f9fafb]">
                3. Data Storage and Security
              </h2>
              <ul className="list-disc list-inside space-y-2 text-[#9ca3af] ml-4">
                <li>
                  User data is securely stored using Supabase, a cloud backend
                  service.
                </li>
                <li>
                  All data transmission is encrypted using industry-standard
                  security protocols.
                </li>
                <li>
                  We do not sell, rent, or trade your personal or financial data
                  to third parties.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="bg-[#020617] border border-[#1f2937] rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#f9fafb]">
                4. Data Sharing
              </h2>
              <p className="text-base sm:text-lg mb-4 text-[#f9fafb]">
                BudgetWise does not share your personal or financial data with
                third parties, except:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#9ca3af] ml-4">
                <li>When required by law</li>
                <li>
                  When necessary to provide core app functionality (e.g., secure
                  cloud storage via Supabase)
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="bg-[#020617] border border-[#1f2937] rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#f9fafb]">
                5. Data Retention and Deletion
              </h2>
              <ul className="list-disc list-inside space-y-2 text-[#9ca3af] ml-4">
                <li>
                  Your data is retained as long as your account remains active.
                </li>
                <li>
                  You may request deletion of your data by{" "}
                  <Link
                    href="/delete-account"
                    className="text-[#22c55e] hover:text-[#16a34a] transition-colors underline"
                  >
                    submitting a deletion request
                  </Link>{" "}
                  or by contacting us at the email address below.
                </li>
                <li>
                  Upon deletion, your data will be permanently removed from our
                  systems.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="bg-[#020617] border border-[#1f2937] rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#f9fafb]">
                6. Children&apos;s Privacy
              </h2>
              <ul className="list-disc list-inside space-y-2 text-[#9ca3af] ml-4">
                <li>
                  BudgetWise is not designed for children under the age of 13.
                </li>
                <li>
                  We do not knowingly collect personal information from
                  children.
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="bg-[#020617] border border-[#1f2937] rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#f9fafb]">
                7. Your Rights
              </h2>
              <p className="text-base sm:text-lg mb-4 text-[#f9fafb]">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#9ca3af] ml-4">
                <li>Access the data we store about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent for data processing</li>
              </ul>
              <p className="text-base text-[#9ca3af] mt-4">
                To exercise these rights, contact us using the details below.
              </p>
            </section>

            {/* Section 8 */}
            <section className="bg-[#020617] border border-[#1f2937] rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#f9fafb]">
                8. Changes to This Privacy Policy
              </h2>
              <ul className="list-disc list-inside space-y-2 text-[#9ca3af] ml-4">
                <li>We may update this Privacy Policy from time to time.</li>
                <li>
                  Any changes will be reflected on this page with an updated
                  revision date.
                </li>
              </ul>
            </section>

            {/* Section 9 */}
            <section className="bg-[#020617] border border-[#1f2937] rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#f9fafb]">
                9. Contact Us
              </h2>
              <p className="text-base sm:text-lg mb-4 text-[#f9fafb]">
                If you have any questions or concerns about this Privacy Policy
                or your data, you can contact us at:
              </p>
              <div className="space-y-2 text-[#9ca3af]">
                <p>
                  <strong className="text-[#f9fafb]">Email:</strong>{" "}
                  <a
                    href={`mailto:${email}`}
                    className="text-[#22c55e] underline hover:text-[#16a34a] transition-colors"
                  >
                    {email}
                  </a>
                </p>
                <p>
                  <strong className="text-[#f9fafb]">App Name:</strong>{" "}
                  BudgetWise
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-full bg-[#22c55e] text-[#022c22] font-medium hover:bg-[#16a34a] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1f2937] bg-[#171717] py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <Image
                src="/icon.png"
                alt="BudgetWise"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-sm font-semibold tracking-wider text-[#f9fafb]">
                BudgetWise
              </span>
            </div>
            <p className="text-sm text-[#9ca3af]">
              © {new Date().getFullYear()} BudgetWise. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
