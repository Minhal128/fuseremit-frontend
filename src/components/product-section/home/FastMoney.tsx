"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "1. Create Account",
    desc: "Download the app and sign up in minutes with your phone number",
    icon: "/images/create.png",
    side: "left",
  },
  {
    id: "02",
    title: "2. Verify Identity",
    desc: "Complete a quick KYC check with your local ID to ensure total security",
    icon: "/images/verify.png",
    side: "left",
  },
  {
    id: "03",
    title: "3. Add Recipient",
    desc: "Input the details of your family member or friend in any of our 80+ countries.",
    icon: "/images/add.png",
    side: "right",
  },
  {
    id: "04",
    title: "4. Send & Track",
    desc: "Hit send and watch your money arrive in real-time. It's that simple.",
    icon: "/images/send.png",
    side: "right",
  },
];

export default function HowItWorks() {
  return (
    <section className="md:py-20 py-10 bg-white font-manrope overflow-hidden">
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h3 className="text-xl md:text-3xl font-medium text-black mb-2">
            See how fast
          </h3>
          <h2 className="text-2xl md:text-6xl font-semibold text-[#0B3963] mb-8">
            You can request money..!
          </h2>

          <div className="inline-flex items-center gap-1 px-3 py-2 bg-white border rounded-full cursor-pointer">
            <img
              src="/images/flag.png"
              alt="NG"
              className="w-5 h-5 rounded-full"
            />
            <span className="text-sm font-bold text-black uppercase">NG</span>
            <ChevronDown className="w-4 h-4 text-black" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:pl-30 pl-8 px-3">
          <div className="space-y-16 md:space-y-45 order-2 md:order-1">
            {steps
              .filter((s) => s.side === "left")
              .map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -70 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex flex-col items-start md:items-start text-left"
                >
                  <img
                    src={step.icon}
                    alt=""
                    className="h-12 w-12 object-contain"
                  />
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-black">
                      {step.title}
                    </h4>
                    <p className="text-black text-sm leading-relaxed max-w-xs">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>

          <div className="relative md:flex hidden justify-end order-2">
            <motion.img
              src="/images/bigmobile.png"
              alt="App Interface"
              className="drop-shadow-2xl object-contain scale-125"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            />
          </div>

          <div className="space-y-16 md:space-y-45 order-3 md:order-3">
            {steps
              .filter((s) => s.side === "right")
              .map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 70 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex flex-col items-start md:items-start text-left"
                >
                  <img
                    src={step.icon}
                    alt=""
                    className="h-12 w-12 object-contain"
                  />
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-black">
                      {step.title}
                    </h4>
                    <p className="text-black text-sm leading-relaxed max-w-xs">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
