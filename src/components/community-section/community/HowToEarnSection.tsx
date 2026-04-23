"use client";

import React from 'react';
import { motion } from 'framer-motion';

const earnBenefits = [
  {
    title: "Company Values",
    description: "Trust, learning, honesty, and co-operation are the pillars that sit at the core of what we do.",
    image: "/images/joinus.png"
  },
  {
    title: "Friendly atmosphere",
    description: "We hold a positive attitude in order to foster respect and decency for our entire team.",
    image: "/images/friendly.png"
  },
  {
    title: "Work-life balance",
    description: "For us, a healthy personal life is just as important as the time you spend in the office.",
    image: "/images/worklife.png"
  }
];

export default function HowYouEarn() {
  return (
    <section className="w-full py-24 bg-white font-manrope">
      <div className="max-w-5xl mx-auto px-6">
        
        <motion.div 
          className="text-center md:mb-16 mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-[#0B3963] tracking-tight">
            How You Earn..?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {earnBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col border border-[#253A670D] overflow-hidden bg-white cursor-pointer"
            >
              <div className="w-full aspect-square flex items-center justify-center p-4">
                <img 
                  src={benefit.image} 
                  alt={benefit.title} 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://placehold.co/400x400/F0F5FF/0B3963?text=Benefit+Image";
                  }}
                />
              </div>

              <div className="p-4 space-y-4">
                <h3 className="text-2xl md:text-2xl text-[#090808]">
                  {benefit.title}
                </h3>
                <p className="text-[#53648B] text-md leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}