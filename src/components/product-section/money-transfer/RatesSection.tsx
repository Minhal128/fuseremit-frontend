"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function RatesSection() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <section className="relative w-full min-h-screen font-manrope md:mb-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full hidden md:block" />

      <div className="max-w-full mx-auto px-6 md:px-25 py-6 md:py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative max-w-xl md:pt-0 pt-10 z-10"
        >
          <h1 className="text-4xl md:text-6xl font-semibold text-[#020617] leading-[1.1] tracking-tight">
            See our rates <br />
            <span className="text-[#0B3963]">At Great Value</span>
          </h1>

          <p className="md:text-2xl text-black py-3 md:mb-10 leading-relaxed">
            <span className="text-[#0B3963]">Fuseremit</span> helps you stay
            connected with the people you care about, enabling fast, secure
            transfers with full transparency and control, no stress, no hidden
            fees.
          </p>
          <p className="text-lg mb-5">
            Convert EUR to GBP at the mid-market exchange rate. Fuseremit is the
            international account for sending, spending and converting money
            like a local.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
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

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-row items-center gap-2 pt-4"
            >
              <button className="flex items-center gap-3 px-4 py-2 border border-[#B6CCFF26] bg-white rounded-lg">
                <img
                  src="/images/apple.png"
                  alt=""
                  className="md:h-7 h-5 w-auto"
                />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-medium text-gray-600">
                    Download on the
                  </span>
                  <span className="md:text-lg text-sm font-bold text-black tracking-tight">
                    App Store
                  </span>
                </div>
              </button>

              <button className="flex items-center gap-3 px-4 py-2 bg-white border border-[#B6CCFF26] rounded-lg">
                <img
                  src="/images/playstore.png"
                  alt=""
                  className="md:h-7 h-5 w-auto"
                />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-medium text-gray-600">
                    GET IT ON
                  </span>
                  <span className="md:text-lg text-sm font-bold text-black tracking-tight">
                    Google Play
                  </span>
                </div>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="md:absolute right-40 bottom-0"
        >
          <div className="md:relative md:flex w-full">
            <img
              src="/images/ratessection.png"
              alt="Fuseremit App Interface"
              className="w-110 h-auto drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
