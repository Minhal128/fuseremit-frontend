"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Save on fees",
    description: "Send more money to anyone at low cost or zero fees",
    icon: "/images/send.png",
  },
  {
    title: "Move Money Your Way",
    description:
      "Choose how you want to send and receive: direct to bank accounts, mobile money, and more options at your fingertips.",
    icon: "/images/move.png",
  },
  {
    title: "Competitive rates",
    description: "Fair and trustworthy rates you can count on.",
    icon: "/images/competitive.png",
  },
  {
    title: "Within Minutes Transfer",
    description:
      "Get your money where it needs to go when it needs to get there.",
    icon: "/images/minutes.png",
  },
];

export default function MoveMoney() {
  return (
    <section className="md:py-24 py-10 bg-white font-manrope">
      <div className="max-w-full mx-auto px-3 md:px-30">
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center md:mb-20 mb-10 md:space-y-4"
        >
          <h3 className="text-xl md:text-3xl font-medium text-black">
            We care about how?
          </h3>
          <h2 className="text-2xl md:text-6xl font-semibold text-[#0B3963] tracking-tight">
            You move your money
          </h2>
        </motion.div>

        {/* Animated Feature Cards */}
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