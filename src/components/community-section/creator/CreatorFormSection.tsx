"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CreatorForm() {
  const formFields = [
    "Full Name",
    "Nickname",
    "Instagram Link",
    "Facebook Link",
    "Twitter Link",
    "Linkedin",
    "What's on your mind?",
  ];

  return (
    <section className="w-full py-10 bg-white font-manrope">
      <div className="max-w-3xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-xl font-bold text-[#0B3963] mb-4">
            Become our creator?
          </h2>
          <p className="text-[#1E293B] md:text-lg text-sm font-medium max-w-xl mx-auto leading-relaxed">
            Tell us about yourself and provide your social media account. We
            will verify all accounts.
          </p>
        </motion.div>

        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>

          <div className="space-y-12 max-w-xl md:pl-30">
            {formFields.map((label, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative"
              >
                <input
                  type="text"
                  placeholder={label}
                  className="w-full py-3 bg-transparent border-b border-gray-300 focus:border-[#0B3963] outline-none text-[#787878] placeholder-[#787878] transition-colors text-sm"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center pt-8 gap-6"
          >
            <button
              type="submit"
              className="px-13 py-2 bg-[#0B3963] text-white rounded-full cursor-pointer shadow-lg shadow-blue-900/20 active:scale-95 transition-transform text-sm"
            >
              Continue
            </button>

            <a
              href="mailto:influencer@fuseremit.com"
              className="text-[#0B3963] py-5 font-medium hover:underline text-xs"
            >
              influencer@fuseremit.com
            </a>
          </motion.div>

        </form>
      </div>
    </section>
  );
}