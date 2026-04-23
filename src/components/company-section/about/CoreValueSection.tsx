"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Innovation",
    description: "We continuously create cutting-edge financial tools.",
    icon: "/images/corevalueone.png",
  },
  {
    title: "Integrity",
    description: "Transparency and trust are at the core of everything we do.",
    icon: "/images/corevaluetwo.png",
  },
  {
    title: "Customer-Centricity",
    description: "Our users' success is our top priority.",
    icon: "/images/corevaluethree.png",
  },
  {
    title: "Customer-Centricity",
    description: "Ensuring the safety of your data and transactions.",
    icon: "/images/corevaluefour.png",
  },
];

export default function CoreValueSection() {
  return (
    <section className="md:py-24 py-10 bg-white font-manrope">
      <div className="max-w-full mx-auto px-3">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center md:mb-20 mb-10 md:space-y-4"
        >
          <span className="inline-block px-4 py-1.5 bg-[#0B396333] text-[#0B3963] text-sm font-bold rounded-full">
            Our Core Value
          </span>
          <h2 className="text-2xl md:text-6xl font-semibold text-[#0B3963] tracking-tight">
            The Foundation of Fuseremit
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pl-5 md:pl-0 w-full">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-start group"
            >
              <div className="h-18 w-18 flex items-center justify-start">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-12 w-auto object-contain"
                />
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-black">
                  {feature.title}
                </h4>
                <p className="text-black text-sm w-60 md:text-base">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
