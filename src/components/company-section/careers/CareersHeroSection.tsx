"use client";

import React from "react";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

export default function CareersHero() {
  return (
    <section className="relative w-full bg-[#F0F5FF] font-manrope overflow-hidden md:min-h-175 flex items-center">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-blue-200/20 to-transparent hidden md:block" />

      <div className="max-w-full mx-auto md:px-20 px-5 py-20 md:py-32 flex flex-col md:flex-row items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full md:w-1/2 flex flex-col items-start space-y-8 text-left"
        >
          <h1 className="text-4xl md:text-7xl font-bold text-[#0B3963] tracking-tight">
            Careers
          </h1>
          <p className="text-sm md:text-lg text-gray-700 leading-relaxed md:max-w-xl">
            Fuseremit is an employee-centred company that looks after every
            employee, gives autonomy to make choices, supports self-development
            and career growth. Our development team is always in search of
            talented individuals to join our employee-centred culture.
          </p>
          <button className="px-8 py-3 md:mt-20 bg-[#0B3963] text-white rounded-full shadow-lg cursor-pointer text-sm">
            Open Positions
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full md:w-1/2 mt-16 md:mt-0 relative flex justify-center items-center"
        >
          <div className="relative group cursor-pointer z-20">
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl relative transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                alt="Meet the team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0B3963]/20 group-hover:bg-[#0B3963]/10 transition-colors" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
                  <FaPlay className="text-[#090808] ml-1 text-xl md:text-2xl" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative top-0 w-120 object-contain md:flex hidden h-90">
            <img src="/images/careersection.png" alt="Team member" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
