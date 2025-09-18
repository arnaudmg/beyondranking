"use client";
import { Bodoni_Moda, Inter, Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import FAQSection from "./components/FAQSection";
import { motion } from "framer-motion";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-bodoni-moda",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
});

export default function Home() {
  return (
    <div className="min-h-screen bg-white ">
      <div className="max-w-6xl mx-auto border border-[#ddced3]">
        {/* Logo Header */}
        <header className="px-6 py-6">
          <Image
            src="/BeyondRanking.svg"
            alt="Beyond Ranking"
            width={233}
            height={30}
            className="h-8 w-auto"
          />
        </header>

        {/* Hero Section */}
        <section className="px-6 py-20">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-4xl md:text-5xl font-bold mb-6 text-black`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                SEO subscriptions for modern businesses
              </motion.h1>
              <motion.p
                className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-xl text-gray-800 mb-4 font-semibold`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                Measurable visibility in 60 days, not 6 months
              </motion.p>
              <motion.p
                className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-lg text-gray-700 mb-8 leading-relaxed`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                While competitors lock you into year-long contracts, we deliver
                results fast. Pause or cancel anytime.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                <a
                  href="#pricing"
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans bg-black text-white px-8 py-3 rounded-md font-semibold text-left hover:bg-gray-800 transition-colors`}
                >
                  See pricing
                </a>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/marble_computer.png"
                  alt="Modern workspace with marble computer"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
              </div>
              {/* Join Beyond Copywriting */}
              <motion.div
                className="absolute bottom-4 left-4 max-w-xs"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
              >
                <p
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-sm font-medium text-white mb-1`}
                >
                  Ready to transform your visibility?
                </p>
                <p
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-3xl font-bold text-white`}
                >
                  Join BeyondRanking
                </p>
                <p
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-xs text-white/80 mt-1`}
                >
                  Where businesses become impossible to ignore
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="px-6 py-16">
          <motion.h2
            className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-3xl font-bold mb-12 text-black`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            The way{" "}
            <span className={`${bodoniModa.variable} font-bodoni-moda italic`}>
              SEO
            </span>{" "}
            should've been done in the first place
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Subscribe Card */}
            <motion.div
              className="relative h-96 rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <Image
                src="/subscribe.png"
                alt="Subscribe"
                fill
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80"></div>
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-xl font-bold mb-3`}
                >
                  Subscribe
                </h3>
                <p
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-sm leading-relaxed opacity-90`}
                >
                  Subscribe to complete SEO execution for one flat monthly fee.
                  No hidden costs, no surprises.
                </p>
              </div>
            </motion.div>

            {/* Execute Card */}
            <motion.div
              className="relative h-96 rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <Image
                src="/execute.png"
                alt="Execute"
                fill
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80"></div>
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-xl font-bold mb-3`}
                >
                  Execute
                </h3>
                <p
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-sm leading-relaxed opacity-90`}
                >
                  Every month we deliver: content, backlinks, technical
                  optimization, and strategic analysis - all done for you.
                </p>
              </div>
            </motion.div>

            {/* See Results Card */}
            <motion.div
              className="relative h-96 rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <Image
                src="/see_results.png"
                alt="See Results"
                fill
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80"></div>
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-xl font-bold mb-3`}
                >
                  See Results
                </h3>
                <p
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-sm leading-relaxed opacity-90`}
                >
                  Measurable visibility gains within 60 days. Real traffic, real
                  leads, real growth.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="px-6 py-16 overflow-hidden">
          <div className="max-w-2xl mb-16">
            <h2
              className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-3xl font-bold mb-6 text-black`}
            >
              It's{" "}
              <span
                className={`${bodoniModa.variable} font-bodoni-moda italic`}
              >
                'you'll never go back'
              </span>{" "}
              better
            </h2>
            <p
              className={`${inter.variable} font-inter text-lg text-gray-700 mb-12`}
            >
              Ranking Beyond replaces unreliable freelancers and expensive
              long-term agencies with complete monthly SEO execution, delivered
              so consistently you'll wonder why SEO was ever so complicated.
            </p>
          </div>

          {/* Infinite Scroll Animation - Cruip Method */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
              <li className="flex flex-col w-64">
                <div className="w-48 h-48 bg-white rounded-lg shadow-lg overflow-hidden mb-4">
                  <Image
                    src="/marble_computer.png"
                    alt="Complete monthly delivery"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover max-w-none"
                  />
                </div>
                <h3
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-lg font-semibold text-black mb-2 text-left`}
                >
                  Complete monthly delivery
                </h3>
                <p
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-sm text-gray-600 text-left leading-relaxed`}
                >
                  Everything gets done, every month, no exceptions.
                </p>
              </li>

              <li className="flex flex-col w-64">
                <div className="w-48 h-48 bg-white rounded-lg shadow-lg overflow-hidden mb-4">
                  <Image
                    src="/marble_computer.png"
                    alt="Fixed monthly rate"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover max-w-none"
                  />
                </div>
                <h3
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-lg font-semibold text-black mb-2 text-left`}
                >
                  Fixed monthly rate
                </h3>
                <p
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-sm text-gray-600 text-left leading-relaxed`}
                >
                  $990/month, no hidden costs, no surprise invoices.
                </p>
              </li>

              <li className="flex flex-col w-64">
                <div className="w-48 h-48 bg-white rounded-lg shadow-lg overflow-hidden mb-4">
                  <Image
                    src="/marble_computer.png"
                    alt="Done-for-you publishing"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover max-w-none"
                  />
                </div>
                <h3
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-lg font-semibold text-black mb-2 text-left`}
                >
                  Done-for-you publishing
                </h3>
                <p
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-sm text-gray-600 text-left leading-relaxed`}
                >
                  We write, optimize, and publish everything.
                </p>
              </li>

              <li className="flex flex-col w-64">
                <div className="w-48 h-48 bg-white rounded-lg shadow-lg overflow-hidden mb-4">
                  <Image
                    src="/marble_computer.png"
                    alt="Guaranteed monthly output"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover max-w-none"
                  />
                </div>
                <h3
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-lg font-semibold text-black mb-2 text-left`}
                >
                  Guaranteed monthly output
                </h3>
                <p
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-sm text-gray-600 text-left leading-relaxed`}
                >
                  10+ blog posts, 10+ backlinks, technical updates - delivered.
                </p>
              </li>

              <li className="flex flex-col w-64">
                <div className="w-48 h-48 bg-white rounded-lg shadow-lg overflow-hidden mb-4">
                  <Image
                    src="/marble_computer.png"
                    alt="Flexible and scalable"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover max-w-none"
                  />
                </div>
                <h3
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-lg font-semibold text-black mb-2 text-left`}
                >
                  Flexible and scalable
                </h3>
                <p
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-sm text-gray-600 text-left leading-relaxed`}
                >
                  Pause or cancel anytime, no questions asked.
                </p>
              </li>

              <li className="flex flex-col w-64">
                <div className="w-48 h-48 bg-white rounded-lg shadow-lg overflow-hidden mb-4">
                  <Image
                    src="/marble_computer.png"
                    alt="Yours to keep"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover max-w-none"
                  />
                </div>
                <h3
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-lg font-semibold text-black mb-2 text-left`}
                >
                  Yours to keep
                </h3>
                <p
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-sm text-gray-600 text-left leading-relaxed`}
                >
                  All content, backlinks, and improvements stay with you
                  forever.
                </p>
              </li>
            </ul>

            {/* Duplicate for seamless loop */}
            <ul
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll"
              aria-hidden="true"
            >
              <li className="flex flex-col w-64">
                <div className="w-48 h-48 bg-white rounded-lg shadow-lg overflow-hidden mb-4">
                  <Image
                    src="/marble_computer.png"
                    alt="Complete monthly delivery"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover max-w-none"
                  />
                </div>
                <h3
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-lg font-semibold text-black mb-2 text-left`}
                >
                  Complete monthly delivery
                </h3>
                <p
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-sm text-gray-600 text-left leading-relaxed`}
                >
                  Everything gets done, every month, no exceptions.
                </p>
              </li>

              <li className="flex flex-col w-64">
                <div className="w-48 h-48 bg-white rounded-lg shadow-lg overflow-hidden mb-4">
                  <Image
                    src="/marble_computer.png"
                    alt="Fixed monthly rate"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover max-w-none"
                  />
                </div>
                <h3
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-lg font-semibold text-black mb-2 text-left`}
                >
                  Fixed monthly rate
                </h3>
                <p
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-sm text-gray-600 text-left leading-relaxed`}
                >
                  $990/month, no hidden costs, no surprise invoices.
                </p>
              </li>

              <li className="flex flex-col w-64">
                <div className="w-48 h-48 bg-white rounded-lg shadow-lg overflow-hidden mb-4">
                  <Image
                    src="/marble_computer.png"
                    alt="Done-for-you publishing"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover max-w-none"
                  />
                </div>
                <h3
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-lg font-semibold text-black mb-2 text-left`}
                >
                  Done-for-you publishing
                </h3>
                <p
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-sm text-gray-600 text-left leading-relaxed`}
                >
                  We write, optimize, and publish everything.
                </p>
              </li>

              <li className="flex flex-col w-64">
                <div className="w-48 h-48 bg-white rounded-lg shadow-lg overflow-hidden mb-4">
                  <Image
                    src="/marble_computer.png"
                    alt="Guaranteed monthly output"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover max-w-none"
                  />
                </div>
                <h3
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-lg font-semibold text-black mb-2 text-left`}
                >
                  Guaranteed monthly output
                </h3>
                <p
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-sm text-gray-600 text-left leading-relaxed`}
                >
                  10+ blog posts, 10+ backlinks, technical updates - delivered.
                </p>
              </li>

              <li className="flex flex-col w-64">
                <div className="w-48 h-48 bg-white rounded-lg shadow-lg overflow-hidden mb-4">
                  <Image
                    src="/marble_computer.png"
                    alt="Flexible and scalable"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover max-w-none"
                  />
                </div>
                <h3
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-lg font-semibold text-black mb-2 text-left`}
                >
                  Flexible and scalable
                </h3>
                <p
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-sm text-gray-600 text-left leading-relaxed`}
                >
                  Pause or cancel anytime, no questions asked.
                </p>
              </li>

              <li className="flex flex-col w-64">
                <div className="w-48 h-48 bg-white rounded-lg shadow-lg overflow-hidden mb-4">
                  <Image
                    src="/marble_computer.png"
                    alt="Yours to keep"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover max-w-none"
                  />
                </div>
                <h3
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-lg font-semibold text-black mb-2 text-left`}
                >
                  Yours to keep
                </h3>
                <p
                  className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-sm text-gray-600 text-left leading-relaxed`}
                >
                  All content, backlinks, and improvements stay with you
                  forever.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="p-6 rounded-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.p
                className={`${bodoniModa.variable} font-bodoni-moda text-4xl italic text-gray-800`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                "Finally, an SEO agency that delivers what they promise, when
                they promise it."
              </motion.p>
              <motion.div
                className="mt-6 flex items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/execute.png"
                    alt="Client avatar"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Marketing Director</p>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="p-6 rounded-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <motion.p
                className={`${bodoniModa.variable} font-bodoni-moda text-4xl italic text-gray-800`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                "They don't just talk SEO, they engineer visibility. Results in
                weeks, not years."
              </motion.p>
              <motion.div
                className="mt-6 flex items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/execute.png"
                    alt="Client avatar"
                    width={72}
                    height={72}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Iain Wallace</p>
                  <p className="text-sm text-gray-600">
                    Coach and Entrepreneur
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className={`${bodoniModa.variable} font-bodoni-moda text-3xl italic mb-12 text-black text-center`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              One subscription, unlimited growth
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Pricing */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="text-white rounded-2xl p-8 relative z-10 shadow-2xl">
                  {/* Header */}
                  <motion.div
                    className="flex justify-between items-start mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  >
                    <h3 className="text-3xl font-bold text-white">
                      SEO Growth Plan
                    </h3>
                    <div className="bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-medium">
                      PAUSE OR CANCEL ANYTIME
                    </div>
                  </motion.div>

                  {/* Price */}
                  <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                  >
                    <div className="flex items-baseline">
                      <span className="text-6xl font-black text-white">
                        $990
                      </span>
                      <span className="text-xl text-white/80 ml-2">/month</span>
                    </div>
                    <div className="w-16 h-0.5 bg-white/30 mt-4"></div>
                  </motion.div>

                  {/* Features Box */}
                  <motion.div
                    className="relative bg-black/40 backdrop-blur-sm rounded-xl p-6 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  >
                    <div className="absolute -top-2 left-6 bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full text-xs font-bold">
                      INCLUDED
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <motion.div
                        className="space-y-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.5,
                          ease: "easeOut",
                        }}
                      >
                        <div className="text-white text-sm">
                          Complete SEO Audit & Strategy
                        </div>
                        <div className="text-white text-sm">
                          10+ Blog Posts Monthly
                        </div>
                        <div className="text-white text-sm">
                          Strategic Keyword Research
                        </div>
                        <div className="text-white text-sm">
                          Technical SEO Optimization
                        </div>
                        <div className="text-white text-sm">
                          Monthly Strategy Calls
                        </div>
                      </motion.div>
                      <motion.div
                        className="space-y-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.6,
                          ease: "easeOut",
                        }}
                      >
                        <div className="text-white text-sm">
                          10+ High-Quality Backlinks
                        </div>
                        <div className="text-white text-sm">
                          100% Done-For-You Publishing
                        </div>
                        <div className="text-white text-sm">
                          All Content Yours to Keep
                        </div>
                        <div className="text-white text-sm">
                          Pause or Cancel Anytime
                        </div>
                        <div className="text-white text-sm">
                          60-Day Results Guarantee
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    className="w-full bg-white/10 border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                  >
                    JOIN TODAY!
                  </motion.button>
                </div>

                {/* Background Image with Overlay */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <Image
                    src="/pricing.png"
                    alt="Pricing background"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60"></div>
                </div>
              </motion.div>

              {/* Right Column - Audit Philosophy */}
              <motion.div
                className="bg-white border border-gray-200 rounded-lg p-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <motion.h3
                  className={`${bodoniModa.variable} font-bodoni-moda text-2xl italic mb-6 text-black`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                  Why most audits made by agencies are useless
                </motion.h3>

                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                  >
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Most SEO audits are little more than noise: endless tool
                      reports counting the same issue a thousand times, yet
                      missing the point entirely. A true audit is not about
                      collecting errors, it is about interpreting them.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                  >
                    <p className="text-gray-700 leading-relaxed text-lg">
                      It begins with strategy, with a clear map of your
                      competitive landscape, with tools adapted to your business
                      instead of generic dashboards. What we deliver is not a
                      forgotten PDF full of alerts, but a living blueprint:
                      prioritized, contextualized, and built to drive measurable
                      impact.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Guarantees Section */}
        <section className="px-6 py-6">
          <div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Pause Anytime Card */}
              <motion.div
                className="border-2 border-dashed border-gray-300 rounded-xl p-8 bg-white"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-3">
                      Pause anytime
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Temporarily pause your subscription anytime, no sweat.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Try it for a week Card */}
              <motion.div
                className="border-2 border-dashed border-gray-300 rounded-xl p-8 bg-white"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-3">
                      Try it for a week
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Not loving it after a week? Get 75% back, no questions
                      asked.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Manifesto Section (Condensed) */}
        <motion.section
          className="px-6 py-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className={`${bodoniModa.variable} font-bodoni-moda text-3xl italic mb-6 text-black`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Why visibility matters more than ever
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 leading-relaxed italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            "AI has transformed creation, but attention remains scarce. In a
            world where anyone can build, only the visible thrive. Organic
            visibility is your sustainable competitive advantage - it compounds,
            it lasts, it builds authority that competitors notice and customers
            trust."
          </motion.p>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="px-6 py-12 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p
            className={`${bodoniModa.variable} font-bodoni-moda text-sm italic text-gray-600`}
          >
            The Ranking Beyond Team © 2025 Beyond Ranking. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </div>
  );
}
