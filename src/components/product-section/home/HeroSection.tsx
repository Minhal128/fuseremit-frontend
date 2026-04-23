"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <section className="relative w-full md:min-h-screen font-manrope bg-[#F0F5FF] overflow-hidden font-manrope">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-[#B6CCFF]/30 to-transparent hidden md:block" />

      <div className="max-w-full font-manrope mx-auto px-6 md:px-25 py-12 md:py-30 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative md:pt-0 pt-10 font-manrope z-10"
        >
          <div className="inline-block px-4 py-1.5 mb-4 bg-[#0B39630F] text-[#0B3963] rounded-full md:text-sm text-xs font-semibold">
            Trusted Users Globally
          </div>

          <h1 className="text-4xl md:text-7xl font-extrabold text-[#020617] leading-[1.1] tracking-tight">
            Empower Your <br />
            <span className="text-[#0B3963]">Global Transfer</span>
          </h1>

          <p className="md:text-lg text-sm text-[#0B3963] py-3 leading-relaxed">
            The future of fintech at your fingertips—secure, smart, and AI
            Based.
          </p>

          <div>
            <div className="py-3">
              <label className="md:text-sm text-xs font-medium text-black ml-1">
                Enter your phone number to download
              </label>

              <div className="flex items-center py-3 gap-4">
                <button className="flex items-center gap-2 px-4 py-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src="/images/flag.png"
                    alt="Country"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                <div className="flex-1 max-w-70">
                  <input
                    type="tel"
                    placeholder="+234"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-6 py-3 bg-white rounded-full shadow-sm outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-900 font-bold placeholder:text-gray-400 transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 font-manrope">
              <button className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg">
                <img src="/images/apple.png" alt="" className="h-7 w-auto" />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-medium text-gray-600">
                    Download on the
                  </span>
                  <span className="text-lg font-bold text-black tracking-tight">
                    App Store
                  </span>
                </div>
              </button>

              <button className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg">
                <img
                  src="/images/playstore.png"
                  alt=""
                  className="h-7 w-auto"
                />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-medium text-gray-600">
                    GET IT ON
                  </span>
                  <span className="text-lg font-bold text-black tracking-tight">
                    Google Play
                  </span>
                </div>
              </button>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-sm text-[#020617] mb-4">
              Trusted by <span className="text-[#0B3963]">500+</span> Companies
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <img src="/images/trusted.png" alt="Partner" className="h-6" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="md:absolute right-40 bottom-0"
        >
          <div className="md:relative md:flex hidden w-full">
            <img
              src="/images/home-mobile.png"
              alt="Fuseremit App Interface"
              className="w-130 h-auto drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
