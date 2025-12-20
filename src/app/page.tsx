"use client";

import Image from "next/image";
import { WaitlistForm } from "@/components/WaitlistForm";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Animated section component
function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#171717] text-[#f9fafb]">
      {/* Navigation */}
      <nav className="border-b border-[#1f2937] bg-[#171717]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
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
            <div className="flex items-center gap-4">
              <a
                href="#features"
                className="text-sm text-[#9ca3af] hover:text-[#22c55e] transition-colors"
              >
                Features
              </a>
              <a
                href="#hero"
                className="px-4 py-2 rounded-full bg-[#22c55e] text-[#022c22] font-medium hover:bg-[#16a34a] transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative overflow-hidden pt-5 pb-32 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-left"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#22c55e]/15 border border-[#22c55e]/30 mb-8">
                <span className="text-[#22c55e] text-sm font-medium">
                  ✨ Smart Budget Management
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#f9fafb] to-[#9ca3af] bg-clip-text text-transparent">
                Take Control of
                <span className="block">
                  Your <span className="text-[#22c55e]">Finances</span>
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-[#9ca3af] mb-12 max-w-2xl leading-relaxed">
                Organize your income and expenses with smart category
                management, account tracking, and fund reservations. Your
                personal finance companion.
              </p>
              <div className="mb-8">
                <div className="max-w-md">
                  <div className="p-6 rounded-2xl bg-[#020617] border border-[#1f2937] shadow-2xl">
                    <WaitlistForm />
                  </div>
                </div>
              </div>
              {/* <div className="flex flex-col sm:flex-row items-start gap-4">
                <a
                  href="#features"
                  className="px-8 py-4 rounded-full border-2 border-[#1f2937] text-[#f9fafb] font-semibold text-lg hover:border-[#22c55e] hover:text-[#22c55e] transition-all"
                >
                  Learn More
                </a>
              </div> */}
            </motion.div>

            {/* Right Column - App Screenshots */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              className="relative h-[600px] lg:h-[700px] flex items-center justify-center lg:justify-end"
            >
              {/* Categories Screen - Leftmost, angled left */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className="absolute left-0 lg:left-0 xl:left-4 z-10 transform -rotate-12 hover:rotate-0 hover:z-30 transition-all duration-300"
              >
                <div
                  className="relative w-[180px] sm:w-[220px] lg:w-[260px] xl:w-[280px] rounded-[2.5rem] overflow-hidden border-4 border-[#1f2937]"
                  style={{ boxShadow: "0 0 90px 10px rgba(34, 197, 94, 0.1)" }}
                >
                  <Image
                    src="/app-screenshots/categories-screen.jpeg"
                    alt="Categories Screen"
                    width={280}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </motion.div>

              {/* Transactions Screen - Middle, slightly angled */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
                className="absolute left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-1/4 xl:right-1/3 z-20 transform rotate-3 hover:rotate-0 hover:z-30 transition-all duration-300"
              >
                <div
                  className="relative w-[200px] sm:w-[240px] lg:w-[280px] xl:w-[300px] rounded-[2.5rem] overflow-hidden border-4 border-[#1f2937]"
                  style={{ boxShadow: "0 0 90px 10px rgba(34, 197, 94, 0.1)" }}
                >
                  <Image
                    src="/app-screenshots/transactions-screen.jpeg"
                    alt="Transactions Screen"
                    width={300}
                    height={650}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </motion.div>

              {/* Accounts Screen - Rightmost, angled right */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.9, ease: "easeOut" }}
                className="absolute right-0 lg:right-0 xl:right-4 z-10 transform rotate-12 hover:rotate-0 hover:z-30 transition-all duration-300"
              >
                <div
                  className="relative w-[180px] sm:w-[220px] lg:w-[260px] xl:w-[280px] rounded-[2.5rem] overflow-hidden border-4 border-[#1f2937]"
                  style={{ boxShadow: "0 0 90px 10px rgba(34, 197, 94, 0.1)" }}
                >
                  <Image
                    src="/app-screenshots/accounts-screen.jpeg"
                    alt="Accounts Screen"
                    width={280}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Background gradient effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#22c55e]/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#4338ca]/5 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Features Section */}
      <AnimatedSection>
        <section
          id="features"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-[#262626]"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 1.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Everything You Need to
                <span className="text-[#22c55e]"> Manage Your Money</span>
              </h2>
              <p className="text-xl text-[#9ca3af] max-w-2xl mx-auto">
                Powerful features designed to help you stay on top of your
                finances
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {/* Categories Feature */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 1.2 }}
                className="group p-6 rounded-2xl bg-[#020617] border border-[#1f2937] hover:border-[#22c55e]/50 transition-all hover:shadow-lg hover:shadow-[#22c55e]/10"
              >
                <div className="w-12 h-12 rounded-xl bg-[#22c55e]/15 flex items-center justify-center mb-4 group-hover:bg-[#22c55e]/25 transition-colors">
                  <svg
                    className="w-6 h-6 text-[#22c55e]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Categories</h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed">
                  Organize income and expenses with smart categories. Reserve
                  funds from multiple accounts for better budget control.
                </p>
              </motion.div>

              {/* Accounts Feature */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 1.2, delay: 0.1 }}
                className="group p-6 rounded-2xl bg-[#020617] border border-[#1f2937] hover:border-[#22c55e]/50 transition-all hover:shadow-lg hover:shadow-[#22c55e]/10"
              >
                <div className="w-12 h-12 rounded-xl bg-[#22c55e]/15 flex items-center justify-center mb-4 group-hover:bg-[#22c55e]/25 transition-colors">
                  <svg
                    className="w-6 h-6 text-[#22c55e]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-6 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Accounts</h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed">
                  Track multiple accounts including bank accounts and cash. See
                  total balance, reserved funds, and available balance at a
                  glance.
                </p>
              </motion.div>

              {/* Transactions Feature */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="group p-6 rounded-2xl bg-[#020617] border border-[#1f2937] hover:border-[#22c55e]/50 transition-all hover:shadow-lg hover:shadow-[#22c55e]/10"
              >
                <div className="w-12 h-12 rounded-xl bg-[#22c55e]/15 flex items-center justify-center mb-4 group-hover:bg-[#22c55e]/25 transition-colors">
                  <svg
                    className="w-6 h-6 text-[#22c55e]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Transactions</h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed">
                  Log income, expenses, and transfers with ease. View your
                  transaction history organized by date with smart
                  categorization.
                </p>
              </motion.div>

              {/* Planning Feature */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="group p-6 rounded-2xl bg-[#020617] border border-[#1f2937] hover:border-[#22c55e]/50 transition-all hover:shadow-lg hover:shadow-[#22c55e]/10"
              >
                <div className="w-12 h-12 rounded-xl bg-[#22c55e]/15 flex items-center justify-center mb-4 group-hover:bg-[#22c55e]/25 transition-colors">
                  <svg
                    className="w-6 h-6 text-[#22c55e]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Planning</h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed">
                  Plan ahead with fund reservations. Allocate money to
                  categories and track your spending against your budget goals.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* How It Works Section */}
      <AnimatedSection>
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#171717]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 1.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Simple. <span className="text-[#22c55e]">Smart.</span>{" "}
                Effective.
              </h2>
              <p className="text-xl text-[#9ca3af] max-w-2xl mx-auto">
                Get started in minutes and take control of your finances
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 1.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#22c55e] flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-[#022c22]">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Create Categories
                </h3>
                <p className="text-[#9ca3af]">
                  Set up income and expense categories. Reserve funds from your
                  accounts for better budget control.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#22c55e] flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-[#022c22]">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Add Accounts</h3>
                <p className="text-[#9ca3af]">
                  Link your bank accounts and track cash. See your total balance
                  and reserved funds at a glance.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#22c55e] flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-[#022c22]">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Track Everything</h3>
                <p className="text-[#9ca3af]">
                  Log transactions, monitor spending, and stay on top of your
                  financial goals effortlessly.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section
          id="download"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#262626] to-[#171717] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#22c55e]/5 blur-3xl"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 1.5 }}
              className="text-center mb-12 flex flex-col items-center justify-center"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Ready to Transform Your
                <span className="text-[#22c55e]"> Financial Life?</span>
              </h2>
              <p className="text-xl text-[#9ca3af] max-w-2xl mx-auto">
                Join the waitlist and be among the first to experience Budget
                Tracker when it launches.
              </p>
              <div className="mt-8 w-full flex items-center justify-center">
                <div className="min-w-96">
                  <div className="p-6 rounded-2xl bg-[#020617] border border-[#1f2937] shadow-2xl">
                    <WaitlistForm />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <footer className="border-t border-[#1f2937] bg-[#171717] py-12 px-4 sm:px-6 lg:px-8">
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
              © 2025 Budget Tracker. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
