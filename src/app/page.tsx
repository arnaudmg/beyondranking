"use client";
import { Bodoni_Moda, Inter, Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import FAQSection from "./components/FAQSection";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringLeft, setIsHoveringLeft] = useState(false);
  const [isHoveringRight, setIsHoveringRight] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isExitingLeft, setIsExitingLeft] = useState(false);
  const [isExitingRight, setIsExitingRight] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Initialize Cal.com
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "beyond-ranking-seo" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMobile) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseEnterLeft = () => {
    if (!isMobile) {
      setIsHoveringLeft(true);
      setIsExitingLeft(false);
    }
  };

  const handleMouseLeaveLeft = () => {
    setIsExitingLeft(true);
    // Délai pour permettre l'animation de sortie
    setTimeout(() => {
      setIsHoveringLeft(false);
      setIsExitingLeft(false);
    }, 500); // Correspond à la durée de l'animation
  };

  const handleMouseEnterRight = () => {
    if (!isMobile) {
      setIsHoveringRight(true);
      setIsExitingRight(false);
    }
  };

  const handleMouseLeaveRight = () => {
    setIsExitingRight(true);
    // Délai pour permettre l'animation de sortie
    setTimeout(() => {
      setIsHoveringRight(false);
      setIsExitingRight(false);
    }, 500); // Correspond à la durée de l'animation
  };

  return (
    <div className="min-h-screen bg-white ">
      <div className="max-w-6xl mx-auto border border-[#ddced3]">
        {/* Hero Section with Header and Content */}
        <section className="px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-12 items-stretch min-h-[500px]">
            {/* Left Column - Header + Content */}
            <div className="lg:col-span-2 space-y-8 flex flex-col justify-between h-full">
              {/* Logo Header */}
              <header className="flex justify-between items-center">
                <Image
                  src="/BeyondRanking.svg"
                  alt="Beyond Ranking"
                  width={180}
                  height={24}
                  className="h-6 w-auto"
                />
                <div className="hidden md:flex items-center gap-3">
                  <button
                    onClick={() => {
                      document
                        .getElementById("pricing")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`${plusJakartaSans.variable} font-plus-jakarta-sans px-4 py-1.5 border border-[#ddced3] text-black rounded-md text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer`}
                  >
                    See Pricing
                  </button>
                  <button
                    onClick={() => {
                      document
                        .getElementById("cal-booking")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`${plusJakartaSans.variable} font-plus-jakarta-sans px-4 py-1.5 border border-[#ddced3] text-black rounded-md text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-1.5 cursor-pointer`}
                  >
                    <Image
                      src="/phone.svg"
                      alt="Phone icon"
                      width={12}
                      height={12}
                      className="w-3 h-3"
                    />
                    Book a call
                  </button>
                </div>
              </header>

              {/* Hero Content */}
              <motion.div
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
                  While competitors lock you into year-long contracts, we
                  deliver results fast. Pause or cancel anytime.
                </motion.p>
              </motion.div>
            </div>

            {/* Right Column - Image */}
            <motion.div
              className="lg:col-span-1 relative flex"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4] w-full">
                <Image
                  src="/marble_computer.png"
                  alt="Modern workspace with marble computer"
                  fill
                  className="object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
                {/* Join Beyond Copywriting */}
                <motion.div
                  className="absolute bottom-4 left-4 right-4"
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
                    className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-2xl font-bold text-white`}
                  >
                    Join BeyondRanking
                  </p>
                  <p
                    className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-xs text-white/80 mt-1`}
                  >
                    Where businesses become impossible to ignore
                  </p>

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => {
                      document
                        .getElementById("cal-booking")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="mt-4 w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 flex items-center justify-between hover:bg-white/20 transition-colors cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="text-left">
                      <p
                        className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-sm font-semibold text-white`}
                      >
                        Book a 15-min intro call
                      </p>
                      <p
                        className={`${plusJakartaSans.variable} font-plus-jakarta-sans text-xs text-white/70`}
                      >
                        Schedule now
                      </p>
                    </div>
                    <Image
                      src="/arrow_book.svg"
                      alt="Book a call"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </motion.button>
                </motion.div>
              </div>
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
            should&apos;ve been done in the first place
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
              It&apos;s{" "}
              <span
                className={`${bodoniModa.variable} font-bodoni-moda italic`}
              >
                &apos;you&apos;ll never go back&apos;
              </span>{" "}
              better
            </h2>
            <p
              className={`${inter.variable} font-inter text-lg text-gray-700 mb-12`}
            >
              Ranking Beyond replaces unreliable freelancers and expensive
              long-term agencies with complete monthly SEO execution, delivered
              so consistently you&apos;ll wonder why SEO was ever so
              complicated.
            </p>
          </div>

          {/* Infinite Scroll Animation - Cruip Method */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
              <li className="flex flex-col w-64">
                <div className="w-48 h-48 bg-white rounded-lg shadow-lg overflow-hidden mb-4">
                  <Image
                    src="/complete.png"
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
                    src="/pricing.png"
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
                    src="/publish.png"
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
                    src="/guaranteed.png"
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
                    src="/flexible.png"
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
                    src="/subscribe.png"
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
                    src="/complete.png"
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
                    src="/pricing.png"
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
                    src="/publish.png"
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
                    src="/guaranteed.png"
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
                    src="/flexible.png"
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
                    src="/subscribe.png"
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
              className="p-6 rounded-lg relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnterLeft}
              onMouseLeave={handleMouseLeaveLeft}
            >
              <motion.p
                className={`${bodoniModa.variable} font-bodoni-moda text-4xl italic text-gray-800`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                &ldquo;We went from barely 50 visitors per month to over 10k.
                Beyond Ranking delivered exactly what they promised.&rdquo;
              </motion.p>
              <motion.div
                className="mt-6 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <Image
                  src="/MarketFit.com.svg"
                  alt="MarketFit.com"
                  width={120}
                  height={30}
                  className="h-8 w-auto"
                />
              </motion.div>

              {/* Image semrush.png qui suit le curseur */}
              {isHoveringLeft && !isMobile && (
                <motion.div
                  className="fixed pointer-events-none z-50"
                  style={{
                    left: mousePosition.x + 20,
                    top: mousePosition.y - 60,
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0.2,
                    rotate: -15,
                    y: 30,
                    x: -10,
                  }}
                  animate={
                    isExitingLeft
                      ? {
                          opacity: 0,
                          scale: 0.05,
                          rotate: 45,
                          y: -60,
                          x: 40,
                        }
                      : {
                          opacity: 1,
                          scale: 1,
                          rotate: 0,
                          y: 0,
                          x: 0,
                        }
                  }
                  transition={{
                    duration: 0.5,
                    ease: isExitingLeft ? "easeIn" : "easeOut",
                    type: "spring",
                    stiffness: isExitingLeft ? 100 : 150,
                    damping: isExitingLeft ? 8 : 15,
                  }}
                >
                  <Image
                    src="/semrush.png"
                    alt="Semrush"
                    width={800}
                    height={400}
                    className="w-[32rem] h-64 object-contain drop-shadow-2xl"
                  />
                </motion.div>
              )}
            </motion.div>
            <motion.div
              className="p-6 rounded-lg relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnterRight}
              onMouseLeave={handleMouseLeaveRight}
            >
              <motion.p
                className={`${bodoniModa.variable} font-bodoni-moda text-4xl italic text-gray-800`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                Our organic traffic jumped 300% in 3 months, and we&apos;re
                ranking #1 for our main keywords. Results in weeks.&rdquo;
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
                    src="/iain.jpeg"
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

              {/* Image semrush.png qui suit le curseur */}
              {isHoveringRight && !isMobile && (
                <motion.div
                  className="fixed pointer-events-none z-50"
                  style={{
                    left: mousePosition.x + 20,
                    top: mousePosition.y - 60,
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0.2,
                    rotate: -15,
                    y: 30,
                    x: -10,
                  }}
                  animate={
                    isExitingRight
                      ? {
                          opacity: 0,
                          scale: 0.05,
                          rotate: 45,
                          y: -60,
                          x: 40,
                        }
                      : {
                          opacity: 1,
                          scale: 1,
                          rotate: 0,
                          y: 0,
                          x: 0,
                        }
                  }
                  transition={{
                    duration: 0.5,
                    ease: isExitingRight ? "easeIn" : "easeOut",
                    type: "spring",
                    stiffness: isExitingRight ? 100 : 150,
                    damping: isExitingRight ? 8 : 15,
                  }}
                >
                  <Image
                    src="/semrush_two.png"
                    alt="Semrush"
                    width={800}
                    height={400}
                    className="w-[32rem] h-64 object-contain drop-shadow-2xl"
                  />
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className={`${bodoniModa.variable} font-bodoni-moda text-3xl italic mb-12 text-black`}
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
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
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
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
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
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

                  {/* Brand Awareness Tool Development - Full Width */}
                  <motion.div
                    className="relative bg-black/20 backdrop-blur-sm rounded-xl p-6 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                  >
                    <div className="absolute -top-2 left-6 bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full text-xs font-bold">
                      BONUS FEATURE
                    </div>

                    <div className="mt-4">
                      <motion.div
                        className="text-white text-sm relative group cursor-help inline-block"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.6,
                          ease: "easeOut",
                        }}
                      >
                        Brand Awareness Tool Development
                        <span className="text-xs ml-1">ⓘ</span>
                        {/* Enhanced Tooltip with Multiple Sectors */}
                        <div className="absolute bottom-full left-0 mb-2 w-96 bg-black/95 text-white text-xs rounded-lg p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 shadow-2xl border border-white/30 hidden md:block">
                          <div className="font-semibold mb-3 text-sm">
                            Custom Awareness Tools
                          </div>
                          <div className="space-y-3">
                            <p>
                              We develop custom &ldquo;free&rdquo; tools that
                              boost your brand awareness and attract potential
                              customers to your website.
                            </p>
                            <p className="text-green-300">
                              <strong>✓ 1 tool included</strong> in your monthly
                              subscription
                            </p>

                            <div>
                              <p className="font-semibold mb-2">
                                Examples by Industry:
                              </p>
                              <div className="space-y-1 text-xs">
                                <p>
                                  <strong>Law Firms:</strong> Legal fee
                                  calculators, contract templates, compliance
                                  checklists
                                </p>
                                <p>
                                  <strong>Real Estate:</strong> Mortgage
                                  calculators, property valuation tools, market
                                  trend trackers
                                </p>
                                <p>
                                  <strong>Notaries:</strong> Document
                                  preparation guides, fee calculators,
                                  appointment schedulers
                                </p>
                                <p>
                                  <strong>M&A/Finance:</strong> Valuation
                                  simulators, multiple trackers, due diligence
                                  checklists
                                </p>
                                <p>
                                  <strong>Consulting:</strong> ROI calculators,
                                  assessment tools, industry benchmarks
                                </p>
                                <p>
                                  <strong>Healthcare:</strong> Symptom checkers,
                                  appointment booking, insurance guides
                                </p>
                              </div>
                            </div>

                            <p className="text-yellow-300">
                              <strong>Additional tools:</strong> Available as
                              add-ons for enhanced visibility across multiple
                              touchpoints
                            </p>
                          </div>
                          {/* Arrow */}
                          <div className="absolute top-full left-8 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black/95"></div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    className="w-full bg-white/10 border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-3 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                    data-cal-namespace="beyond-ranking-seo"
                    data-cal-link="arnaud-mege/beyond-ranking-seo"
                    data-cal-config='{"layout":"month_view"}'
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <motion.h3
                  className={`${bodoniModa.variable} font-bodoni-moda text-xl italic mb-6 text-black`}
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
                    <p className="text-gray-700 leading-relaxed">
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
                    <p className="text-gray-700 leading-relaxed">
                      It begins with strategy, with a clear map of your
                      competitive landscape, with tools adapted to your business
                      instead of generic dashboards. What we deliver is not a
                      forgotten PDF full of alerts, but a living blueprint:
                      prioritized, contextualized, and built to drive measurable
                      impact.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                  >
                    <h4
                      className={`${bodoniModa.variable} font-bodoni-moda text-xl italic mb-4 text-black`}
                    >
                      The power of free tools
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Beyond traditional SEO, we believe in creating genuine
                      value that extends far beyond rankings. Free tools
                      aren&apos;t just marketing gimmicks—they&apos;re
                      trust-builders that establish your authority, solve real
                      problems for your audience, and create meaningful
                      touchpoints that turn prospects into clients. These tools
                      become assets that work for you 24/7, demonstrating your
                      expertise while building trust before the first
                      conversation even begins.
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
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
            &ldquo;AI has transformed creation, but attention remains scarce. In
            a world where anyone can build, only the visible thrive. Organic
            visibility is your sustainable competitive advantage - it compounds,
            it lasts, it builds authority that competitors notice and customers
            trust.&rdquo;
          </motion.p>
        </motion.section>

        {/* Cal.com Booking Section */}
        <motion.section
          id="cal-booking"
          className="px-6 py-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="">
            <motion.h2
              className={`${bodoniModa.variable} font-bodoni-moda text-3xl italic mb-6 text-black`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Ready to get started?
            </motion.h2>

            <motion.div
              className="bg-white rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <Cal
                namespace="beyond-ranking-seo"
                calLink="arnaud-mege/beyond-ranking-seo"
                style={{ width: "100%", height: "600px", overflow: "scroll" }}
                config={{ layout: "month_view" }}
              />
            </motion.div>
          </div>
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
