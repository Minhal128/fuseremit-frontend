"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const content = [
  {
    tag: "Fintech",
    title: "The Future of Fintech: Trends for 2025",
    description:
      "Discover the latest trends shaping the fintech landscape in 2025. From advanced security features to AI-driven financial tools.",
    image: "/images/bitcoin.png",
    isReversed: false,
  },
];

export default function SingleCard() {
  const buttons = [
    "Latest",
    "Fintech",
    "Newsroom",
    "Money",
    "Life at Fusremit",
  ];
  const [activeInex, setActiveIndex] = useState(0);

  return (
    <section className="w-full md:py-20 py-5 font-manrope">
      <div className="md:max-w-7xl md:mx-auto px-6 space-y-12">
        {content.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className={`flex flex-col lg:items-center gap-6 px-8 md:px-12 md:py-25 py-10 bg-white rounded-4xl shadow-2xl border border-gray-100 
              ${item.isReversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}
          >
            <div className="w-full lg:w-1/2">
              <img
                src={item.image}
                alt={item.tag}
                className="w-full h-auto object-contain max-h-87.5 mx-auto"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-3">
              <span className="inline-block px-4 py-1.5 bg-[#0B39631A] text-[#0B3963] text-sm font-bold rounded-full">
                {item.tag}
              </span>

              <h2 className="text-2xl md:text-5xl  font-semibold text-[#0B3963] leading-tight">
                {item.title}
              </h2>

              <p className="text-black md:text-md text-sm leading-relaxed">
                {item.description}
              </p>

              <div className="flex items-center justify-items-start gap-4">
                <img
                  src="/images/profileimage.png"
                  alt=""
                  className="h-10 w-10"
                />
                <h4 className="text-[#0B3963] md:text-lg text-sm">
                  Sarah Winter . Jan 1, 2025
                </h4>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="md:flex grid grid-cols-3 md:px-0 px-6 items-center md:mt-10 mt-5 md:gap-3 gap-2 justify-center">
        {buttons.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`rounded-full md:text-base text-xs cursor-pointer ${
              index === 4 ? "col-span-2" : ""
            } px-4 py-1.5 ${
              activeInex === index
                ? "bg-[#0B3963] text-white"
                : "bg-[#0B396333] text-[#0B3963]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}
