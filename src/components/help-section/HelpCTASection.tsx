"use client";

import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="w-full py-12 bg-white font-manrope">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:px-16 md:py-6 border-3 border-black rounded-full text-center md:text-left"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-[#0B3963]">
              <img src="/images/chaticon.png" alt="" className="h-40 w-40" />
            </div>

            <h2 className="text-3xl md:text-6xl font-bold text-[#0B3963] leading-tight">
              Don't see what <br className="hidden md:block" /> you need?
            </h2>
          </div>

          <button className="whitespace-nowrap px-8 py-4 bg-[#0B3963] text-white rounded-lg cursor-pointer text-sm">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
