"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Safety",
    description:
      "Increased protection as there's no need to send your payment information when you request for money.",
    icon: "/images/safety.png",
  },
  {
    title: "No Cost",
    description:
      "We don't charge any fees to help you collect your money so you can keep your head above water.",
    icon: "/images/nocost.png",
  },
  {
    title: "Share Payment Link",
    description:
      "Easily share your payment link with friends and family directly on the app.",
    icon: "/images/share.png",
  },
  {
    title: "Track Payment",
    description: "We keep you in the loop directly on the app.",
    icon: "/images/track.png",
  },
];

export default function RequestMoney() {
  return (
    <section className="md:py-24 py-10 bg-white font-manrope">
      <div className="max-w-full mx-auto px-3 md:px-30">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center md:mb-20 mb-10 md:space-y-4"
        >
          <h3 className="text-xl md:text-3xl font-medium text-black">
            Be global. Live abroad.
          </h3>
          <h2 className="text-2xl md:text-6xl font-semibold text-[#0B3963] tracking-tight">
            Request money from anyone.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pl-5 md:pl-0 gap-5 w-full">
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
