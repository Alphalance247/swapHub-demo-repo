"use client"; // Required for state in Next.js App Router
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

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
    <div className="max-w-3xl mx-auto py-12 px-4">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 dark:text-gray-100">
        Frequently Asked Questions
      </h2>

      {/* FAQ List */}
      <div className="mt-6 space-y-4">
        {[...initialFAQs, ...(showMore ? extraFAQs : [])].map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-300"
          >
            <button
              className="w-full flex justify-between items-center p-4 bg-white dark:bg-gray-900 text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                {faq.question}
              </span>
              {openIndex === index ? (
                <FaMinus className="text-gray-600 dark:text-gray-300" />
              ) : (
                <FaPlus className="text-gray-600 dark:text-gray-300" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
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
    </div>
  );
}
