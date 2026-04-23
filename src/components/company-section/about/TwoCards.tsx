"use client";

import { motion } from "framer-motion";

const content = [
  {
    tag: "Vision",
    title: "Our Vision Is To Be The Leading Global Fintech Solution",
    description:
      "We empowering individuals and businesses to achieve financial clarity and success. We strive to foster a world where managing money is simple, secure, and accessible to all.",
    image: "/images/cardup.png",
    isReversed: false,
  },
  {
    tag: "Mission",
    title: "Empowering Financial Freedom Through Innovation",
    description:
      "We aim to build tools that enable users to gain clarity and control over their finances while promoting trust and innovation. By cultivating a customer-centric approach, we ensure that every individual and business can achieve long-term financial stability and success.",
    image: "/images/carddown.png",
    isReversed: true,
  },
];

export default function TwoCards() {
  return (
    <section className="w-full md:py-20 py-5 font-manrope">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {content.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
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
              <span className="inline-block px-4 py-1.5 bg-[#0B396333] text-[#0B3963] text-sm font-bold rounded-full">
                {item.tag}
              </span>

              <h2 className="text-3xl md:text-5xl font-semibold text-[#0B3963] leading-tight">
                {item.title}
              </h2>

              <p className="text-black text-md leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
