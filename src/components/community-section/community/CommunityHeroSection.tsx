"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CommunityHeroSection() {
  return (
    <section className="relative w-full flex text-center font-manrope bg-[#F0F5FF] overflow-hidden">
     
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-[#B6CCFF]/30 to-transparent hidden md:block" />

      <div className="max-w-full mx-auto px-6 md:px-25 md:pt-50 pt-20 flex items-center">
        <div className="relative md:pt-0 pt-10 max-w-3xl flex flex-col items-center z-10">
       
          <motion.h1
            className="text-4xl md:text-7xl font-extrabold text-[#0B3963] leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Refer & Earn
          </motion.h1>

          <motion.p
            className="text-sm text-black py-3 leading-relaxed text-center md:max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Invite your friends to join Fuseremit and you'll both get NGN 20
            when they sign up, verify their account, and send over NGN 100 to
            any supported country on Fuseremit in a single transfer.
          </motion.p>

          <motion.button
            className="rounded-full bg-[#0B3963] text-white cursor-pointer py-3 px-8 text-sm shadow-2xl mt-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Open Positions
          </motion.button>

          <motion.img
            src="/images/referearn.png"
            alt="Refer & Earn"
            className="md:w-90 md:h-90 w-50 h-50 object-contain mt-8"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </div>
      </div>
    </section>
  );
}
