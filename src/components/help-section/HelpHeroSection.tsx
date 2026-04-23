"use client";

import React from "react";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";

export default function HelpSearchHero() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#F0F5FF] font-manrope overflow-hidden">
      <div className="mx-auto md:px-25 px-6 md:py-15 py-10 flex flex-col md:flex-row items-center gap-12 md:gap-20">
    
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full md:w-1/2 flex flex-col items-start text-left space-y-8"
        >
          <h1 className="text-4xl md:text-7xl font-bold text-[#0B3963] leading-[1.1] tracking-tight">
            How can we help?
          </h1>

          <div className="w-full flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-full max-w-sm">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0B3963]">
                <FiSearch size={20} />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-12 pr-4 py-2 bg-white border border-transparent rounded-xl shadow-sm focus:outline-none text-[#364153] text-lg"
              />
            </div>

            <button className="w-full sm:w-auto px-8 py-2.5 bg-[#0B3963] text-white rounded-xl cursor-pointer text-md">
              Search
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full md:w-1/2 flex justify-center items-center"
        >
          <div className="relative w-full aspect-4/3 max-w-125 rounded-3xl flex flex-col items-center justify-center">
            <img
              src="/images/help.png"
              alt="Help Illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
