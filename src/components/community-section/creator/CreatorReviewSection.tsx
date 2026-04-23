"use client";

import React from "react";
import { IoStar } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Lana Bernier",
    role: "Senior Paradigm Strategist",
    image: "https://i.pravatar.cc/150?u=lana",
    text: "Great company. Money gets to receiver on time. They are very unique, processing was very unique and fast, and never pay a fee to send money. I am loving it.",
  },
  {
    name: "Mrs. Van Hartmann",
    role: "Legacy Usability Manager",
    image: "https://i.pravatar.cc/150?u=van",
    text: "Great company. Money gets to receiver on time. They are very unique, processing was very unique and fast, and never pay a fee to send money. I am loving it.",
  },
  {
    name: "Philip Deckow",
    role: "District Assurance Officer",
    image: "https://i.pravatar.cc/150?u=philip",
    text: "Great company. Money gets to receiver on time. They are very unique, processing was very unique and fast, and never pay a fee to send money. I am loving it.",
  },
  {
    name: "Philip Deckow",
    role: "District Assurance Officer",
    image: "https://i.pravatar.cc/150?u=philip2",
    text: "Great company. Money gets to receiver on time. They are very unique, processing was very unique and fast, and never pay a fee to send money. I am loving it.",
  },
  {
    name: "Lana Bernier",
    role: "Senior Paradigm Strategist",
    image: "https://i.pravatar.cc/150?u=lana2",
    text: "Great company. Money gets to receiver on time. They are very unique, processing was very unique and fast, and never pay a fee to send money. I am loving it.",
  },
  {
    name: "Mrs. Van Hartmann",
    role: "Legacy Usability Manager",
    image: "https://i.pravatar.cc/150?u=van2",
    text: "Great company. Money gets to receiver on time. They are very unique, processing was very unique and fast, and never pay a fee to send money. I am loving it.",
  },
  {
    name: "Philip Deckow",
    role: "District Assurance Officer",
    image: "https://i.pravatar.cc/150?u=philip3",
    text: "Great company. Money gets to receiver on time. They are very unique, processing was very unique and fast, and never pay a fee to send money. I am loving it.",
  },
  {
    name: "Lana Bernier",
    role: "Senior Paradigm Strategist",
    image: "https://i.pravatar.cc/150?u=lana3",
    text: "Great company. Money gets to receiver on time. They are very unique, processing was very unique and fast, and never pay a fee to send money. I am loving it.",
  },
];

export default function CreatorReviewSection() {
  return (
    <section className="py-20 bg-white font-manrope overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-10 relative z-10"
        >
          <h2 className="text-3xl max-w-4xl md:text-5xl font-bold text-[#0B3963] mb-4">
            Here's what people are saying about Fuseremit..!
          </h2>
        </motion.div>

        <div className="relative h-auto md:h-175 md:my-20 flex items-center justify-center">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 
                       md:transform-[rotateX(20deg)_rotateZ(-13deg)]
                       md:scale-130 transition-all duration-700 ease-in-out"
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white p-6 shadow-2xl rounded-sm border border-gray-100 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <IoStar key={i} className="w-3 h-3 text-[#0B3963]" />
                      ))}
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-[#0B3963] rounded-full flex items-center justify-center">
                        <BiSolidLike size={10} className="text-white" />
                      </div>
                      <span className="text-[10px] text-[#202020] font-bold">
                        Testimonial
                      </span>
                    </div>
                  </div>

                  <p className="text-[#4B5563] text-xs leading-relaxed mb-6">
                    {review.text}
                  </p>
                </div>

                <div className="flex items-center gap-2 border-t border-gray-50 pt-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <h4 className="font-bold text-xs text-black leading-tight">
                      {review.name}
                    </h4>
                    <p className="text-[10px] text-gray-500">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
