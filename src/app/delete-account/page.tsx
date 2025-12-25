"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DeleteAccount() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/account-deletion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Something went wrong");
        setLoading(false);
        return;
      }

      setSuccess(true);
      setEmail("");
      setLoading(false);
    } catch (err) {
      setError("Failed to submit request. Please try again.");
      setLoading(false);
    }
  };

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
            <div className="flex items-center gap-4">
              <Link
                href="/privacy-policy"
                className="text-sm text-[#9ca3af] hover:text-[#22c55e] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="text-sm text-[#9ca3af] hover:text-[#22c55e] transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-[#f9fafb] to-[#9ca3af] bg-clip-text text-transparent">
            Request Account Deletion
          </h1>
          <p className="text-lg text-[#9ca3af]">
            We&apos;re sorry to see you go. Please submit your request below.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-[#020617] border border-[#1f2937] rounded-2xl p-6 sm:p-8">
          {success ? (
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#22c55e]/15 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-[#22c55e]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-[#f9fafb]">
                Request Submitted Successfully
              </h2>
              <div className="bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-xl p-6 mb-6">
                <p className="text-base text-[#9ca3af] leading-relaxed">
                  Your account deletion request has been received. We will process
                  your request and permanently delete your account and all
                  associated data within{" "}
                  <strong className="text-[#22c55e]">7 business days</strong>.
                </p>
              </div>
              <p className="text-sm text-[#9ca3af] mb-6">
                You will receive a confirmation email once your account has been
                deleted.
              </p>
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 rounded-full bg-[#22c55e] text-[#022c22] font-medium hover:bg-[#16a34a] transition-colors"
              >
                Return to Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#f9fafb] mb-2"
                >
                  Email Address
                </label>
                <p className="text-sm text-[#9ca3af] mb-4">
                  Please enter the email address associated with your BudgetWise
                  account.
                </p>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#1f2937] text-[#f9fafb] placeholder-[#6b7280] focus:outline-none focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 transition-all"
                  required
                  disabled={loading}
                />
              </div>

              {error && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                  <p className="text-sm text-red-400">{error}</p>
                </div>
              )}

              <div className="bg-[#1f2937]/50 border border-[#374151] rounded-xl p-4">
                <p className="text-sm text-[#9ca3af] leading-relaxed">
                  <strong className="text-[#f9fafb]">Important:</strong> Once
                  your account is deleted, all your data including transactions,
                  categories, accounts, and settings will be permanently removed
                  and cannot be recovered.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-4 rounded-xl bg-red-600 text-white font-semibold text-lg hover:bg-red-700 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg shadow-red-600/20"
              >
                {loading ? "Submitting Request..." : "Submit Deletion Request"}
              </button>
            </form>
          )}
        </div>

        {/* Additional Info */}
        {!success && (
          <div className="mt-8 text-center">
            <p className="text-sm text-[#9ca3af]">
              Need help?{" "}
              <Link
                href="/privacy-policy"
                className="text-[#22c55e] hover:text-[#16a34a] transition-colors underline"
              >
                View our Privacy Policy
              </Link>
            </p>
          </div>
        )}
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

