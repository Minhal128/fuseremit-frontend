"use client";

import { motion } from "framer-motion";

export default function CreatorHeroSection() {
  return (
    <section className="relative w-full flex flex-col text-center font-manrope bg-[#F0F5FF] overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-[#B6CCFF]/30 to-transparent hidden md:block" />

      <div className="max-w-full mx-auto px-6 md:px-25 md:pt-50 pt-20 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative md:pt-0 pt-10 max-w-3xl flex flex-col items-center z-10"
        >
          <h1 className="text-4xl md:text-7xl font-extrabold text-[#0B3963] leading-[1.1] tracking-tight">
            Become a Creator
          </h1>
          <p className="text-sm text-black py-3 leading-relaxed">
            Being one of our creator means doing brand deals differently and
            joining our members of innovative influencers working with us to
            make content that they and their fans love.
          </p>
          <button className="rounded-full bg-[#0B3963] text-white py-3 px-8 text-sm shadow-2xl">
            Apply Now
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex items-center justify-center mt-10 md:mt-20"
      >
        <img
          src="/images/creatorsection.png"
          alt=""
          className="md:w-7xl md:h-full w-80 h-50 object-contain"
        />
      </motion.div>
    </section>
  );
}
