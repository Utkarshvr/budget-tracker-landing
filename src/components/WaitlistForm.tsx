"use client";

import { useState } from "react";
import { CustomSelect } from "./CustomSelect";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [excitement, setExcitement] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!email || !name || !excitement) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, excitement }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Something went wrong");
        setLoading(false);
        return;
      }

      setSuccess(true);
      setEmail("");
      setName("");
      setExcitement("");
      setLoading(false);
    } catch (err) {
      setError("Failed to submit. Please try again.");
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="p-6 rounded-2xl bg-[#020617] border border-[#22c55e]/50">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-[#22c55e]/15 flex items-center justify-center mx-auto mb-4">
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
          <h3 className="text-2xl font-semibold mb-2 text-[#22c55e]">
            You&apos;re on the list! 🎉
          </h3>
          <p className="text-[#9ca3af]">
            We&apos;ll notify you as soon as the app is ready.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[#9ca3af] mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#1f2937] text-[#f9fafb] placeholder-[#6b7280] focus:outline-none focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 transition-all"
          required
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[#9ca3af] mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#1f2937] text-[#f9fafb] placeholder-[#6b7280] focus:outline-none focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 transition-all"
          required
        />
      </div>

      <div>
        <label
          htmlFor="excitement"
          className="block text-sm font-medium text-[#9ca3af] mb-2"
        >
          How excited are you for this?
        </label>
        <CustomSelect
          id="excitement"
          value={excitement}
          onChange={setExcitement}
          placeholder="🤔 Very excited...?"
          required
          options={[
            { value: "very-excited", label: "Very Excited! 🚀" },
            { value: "somewhat-excited", label: "Somewhat Excited 🙂" },
            { value: "curious", label: "Curious 🤔" },
          ]}
        />
      </div>

      {error && (
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-4 rounded-xl bg-[#22c55e] text-[#022c22] font-semibold text-lg hover:bg-[#16a34a] transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg shadow-[#22c55e]/20"
      >
        {loading ? "Joining..." : "Join the Waitlist"}
      </button>
    </form>
  );
}

