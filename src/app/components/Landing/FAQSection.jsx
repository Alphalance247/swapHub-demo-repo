"use client"; // Required for state in Next.js App Router
import Layout from "@/app/common/layout";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import HeadingWithSubHead from "@/app/common/headingWithSubHead";

export default function FAQSection() {
  // Initial FAQs
  const initialFAQs = [
    {
      question: "How is SwapHub different from other online marketplaces?",
      answer:
        "SwapHub offers a unique experience by integrating bartering, selling, and service exchange in one seamless platform.",
    },
    {
      question: "Can I use SwapHub if I only provide services?",
      answer:
        "Yes! SwapHub allows service providers to list their offerings just like products, making it easy to connect with customers.",
    },
    {
      question: "Is it free to set up my business on SwapHub?",
      answer:
        "Yes! Creating an account and listing your products or services on SwapHub is completely free.",
    },
  ];

  // Additional FAQs to be shown when "See more FAQs" is clicked
  const extraFAQs = [
    {
      question: "How do I receive payments on SwapHub?",
      answer:
        "SwapHub supports multiple payment options including credit cards, PayPal, and cryptocurrency.",
    },
    {
      question: "Can I barter my products instead of selling?",
      answer:
        "Absolutely! SwapHub allows users to barter products and services, making trade more flexible.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  // Function to toggle FAQ open/close
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Function to load more FAQs
  const handleShowMore = () => {
    setShowMore(true);
  };

  // Function to collapse extra FAQs
  const handleShowLess = () => {
    setShowMore(false);
    setOpenIndex(null); // Close any open FAQ
  };

  return (
    <section className="bg-white">
      <Layout>
        {/* Heading */}
        <HeadingWithSubHead
          heading={" Frequently Asked Questions"}
          vaiant={"secondary"}
          className={"text-center mb-16 w-[60%] mx-auto max-md:w-full"}
        />

        {/* FAQ List */}
        <div className="mt-6 space-y-6 w-[60%] mx-auto max-lg:w-[80%] max-md:w-full">
          {[...initialFAQs, ...(showMore ? extraFAQs : [])].map(
            (faq, index) => (
              <div
                key={index}
                className="border-4 border-[#121212] rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full flex gap-x-4 items-center p-4 bg-white dark:bg-gray-900 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  {openIndex === index ? (
                    <FaMinus className="text-gray-600" />
                  ) : (
                    <FaPlus className="text-[#EF6703]" />
                  )}
                  <span className="font-recoletaBold text-[#121212] text-lg max-lg:text-base">
                    {faq.question}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          )}
        </div>

        {/* Show More / Show Less Button */}
        <div className="mt-6 text-center">
          {!showMore ? (
            <button
              onClick={handleShowMore}
              className="px-6 py-2 border border-gray-900 dark:border-gray-100 rounded-lg text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              See more FAQs →
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="px-6 py-2 border border-gray-900 dark:border-gray-100 rounded-lg text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Show less FAQs ↑
            </button>
          )}
        </div>
      </Layout>
    </section>
  );
}
