"use client";

import { motion } from "framer-motion";

export default function HeroSectionCompany() {
  return (
    <section className="relative w-full flex text-center font-manrope bg-[#F0F5FF] overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-[#B6CCFF]/30 to-transparent hidden md:block" />

      <div className="max-w-full font-manrope mx-auto px-6 md:px-25 py-20 md:py-50 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative md:pt-0 pt-10 max-w-2xl font-manrope z-10"
        >
          <h1 className="text-2xl md:text-7xl font-extrabold text-[#0B3963] leading-[1.1] tracking-tight">
            Empowering Financial Freedom
          </h1>
          <p className="md:text-lg text-sm md:mb-20 text-black py-3 leading-relaxed">
            Experience fast, secure, and affordable international money
            transfers with Fuseremit.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
