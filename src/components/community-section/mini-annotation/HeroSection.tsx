"use client";

import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { motion } from "framer-motion";

const countries = [
  { name: "Nigeria", flag: "/images/nigeria.png", code: "NG" },
  { name: "United Kingdom", flag: "/images/uk.png", code: "UK" },
  { name: "United States", flag: "/images/usa.png", code: "US" },
  { name: "Canada", flag: "/images/canada.png", code: "CA" },
  { name: "Germany", flag: "/images/germany.png", code: "DE" },
];

export default function AnnotationHeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <section className="relative w-full flex text-center font-manrope bg-[#F0F5FF]">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-[#B6CCFF]/30 to-transparent hidden md:block" />

      <div className="max-w-full w-full mx-auto px-6 md:px-25 md:pt-50 pt-20 pb-20 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative md:pt-0 pt-10 max-w-3xl flex flex-col items-center z-10"
        >
          <h1 className="text-4xl md:text-7xl font-extrabold text-[#0B3963] leading-[1.1] tracking-tight">
            Campaigns & Promotions
          </h1>
          <p className="text-lg text-black py-3 max-w-2xl mt-6 md:mt-10 leading-relaxed">
            Stay updated on the latest campaigns and promotions for awesome ways
            to get even more from Fuseremit.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative mt-5 w-full flex justify-center"
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between w-48 md:w-56 px-5 py-2.5 bg-white rounded-full shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <img src={selectedCountry.flag} className="h-6 w-6" />
                <span className="text-[#0B3963] font-semibold text-base">
                  {selectedCountry.name}
                </span>
              </div>
              <IoChevronDown
                className={`text-[#0B3963] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-xl border border-gray-50 z-50"
              >
                <div className="py-2">
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      onClick={() => {
                        setSelectedCountry(country);
                        setIsOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-5 py-3 hover:bg-[#F0F5FF] transition-colors cursor-pointer text-left"
                    >
                      <img src={country.flag} className="h-6 w-6" />
                      <span
                        className={`text-sm font-medium ${
                          selectedCountry.code === country.code
                            ? "text-[#0B3963] font-bold"
                            : "text-gray-600"
                        }`}
                      >
                        {country.name}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
