"use client";

import { useState } from "react";
import Image from "next/image";
import { Bodoni_Moda, Inter } from "next/font/google";

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

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqData = [
    {
      question: "How fast will I see results?",
      answer:
        "Results depend on your goals. But in 60 days, you can see the traction going, and since it scales very strongly in the long term, it will give you an idea of the trajectory.",
    },
    {
      question: "What exactly do I get each month?",
      answer:
        "Every month includes: 10+ optimized blog posts, 10+ high-quality backlinks, complete technical SEO optimization, strategic keyword research, monthly strategy calls, and detailed performance reports. Everything is done-for-you and published on your site.",
    },
    {
      question: "Do you really publish 10+ blog posts monthly?",
      answer:
        "Yes, we first research the keywords to position ourselves on, trending keywords, core business keywords, and especially we write quality articles that we submit to you each time for review, while applying all the best practices.",
    },
    {
      question: "What if I don't see results in 60 days?",
      answer: "You will.",
    },
    {
      question: "How do you guarantee backlink quality?",
      answer:
        "We partner with LinkDR and other trusted platforms that support us to provide you with quality backlinks regardless of your industry.",
    },
    {
      question: "What happens during the technical SEO hours?",
      answer:
        "Our technical SEO work includes: site speed optimization, mobile responsiveness fixes, schema markup implementation, crawl error resolution, internal linking optimization, and ensuring your site meets all Google Core Web Vitals requirements.",
    },
    {
      question: "Do I own all the content you create?",
      answer: "Absolutely.",
    },
    {
      question: "Can I pause my subscription anytime?",
      answer: "Anytime, just an email and it's done.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="px-4 py-8">
      <h2
        className={`${bodoniModa.variable} font-bodoni-moda text-3xl italic mb-12 text-black`}
      >
        Frequently Asked Questions
      </h2>
      <div className="space-y-0">
        {faqData.map((faq, i) => (
          <div key={i} className="border-b border-gray-200">
            <button
              onClick={() => toggleFAQ(i)}
              className="w-full p-4 text-left text-lg text-gray-800 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium">{faq.question}</span>
              <Image
                src="/arrow.svg"
                alt="Arrow"
                width={16}
                height={16}
                className={`ml-4 flex-shrink-0 transition-transform duration-200 ${
                  openFAQ === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openFAQ === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-4 pb-4 pt-2">
                <p
                  className={`${inter.variable} font-inter text-gray-700 leading-relaxed`}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
