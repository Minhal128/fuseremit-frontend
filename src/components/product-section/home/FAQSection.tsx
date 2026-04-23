"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Is Fuseremit a bank?",
    answer:
      "Fuseremit is a financial technology company and is not a bank. RightCard Payment Services Limited is registered with the Financial Conduct Authority in the UK as an Electronic Money Institution. In Canada, LemFi is registered and regularised by the Financial Transactions and Report Analysis Centre of Canada. In the United States, the remittance and bank services program is sponsored by Community Federal Savings Bank.",
  },
  {
    question: "Where is Fuseremit available?",
    answer:
      "Fuseremit is currently available in the UK, Canada, and the United States, supporting transfers to over 80+ countries globally with real-time processing.",
  },
  {
    question: "How does Fuseremit work?",
    answer:
      "Simply download the app, verify your identity, add a recipient, and send money. Our AI-backed system ensures you get the best exchange rates and military-grade security for every transfer.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="md:py-5 bg-white font-manrope">
      <div className="max-w-4xl mx-auto px-6 md:px-20">
      
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center md:mb-16 mb-10 space-y-4"
        >
          <h2 className="text-3xl md:text-7xl font-semibold text-[#0B3963] ">
            Got questions?
          </h2>
          <p className="text-black text-lg">
            Some of most frequently asked questions.
          </p>
        </motion.div>

        <div className="space-y-4 mb-10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: index * 0.15,
                }}
                viewport={{ once: true, amount: 0.3 }}
                className={`border rounded-3xl transition-all duration-300 ${isOpen ? "border-black shadow-sm" : "border-[#666666]"}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 md:p-7 text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[#003366] text-xl">✦</span>
                    <span
                      className={`text-sm md:text-xl font-bold transition-colors ${
                        isOpen
                          ? "text-[#003366]"
                          : "text-gray-700 group-hover:text-[#003366]"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`p-1 rounded-full transition-transform duration-300 ${isOpen ? "rotate-0" : "rotate-90"}`}
                  >
                    {isOpen ? (
                      <X className="w-6 h-6 text-[#003366]" />
                    ) : (
                      <Plus className="w-6 h-6 text-[#003366]" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 md:px-8 pb-8 text-gray-500 leading-relaxed text-sm md:text-lg border-t border-gray-50 ml-8">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
