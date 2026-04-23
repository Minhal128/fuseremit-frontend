"use client";

import { motion } from "framer-motion";

const aiFeatures = [
  {
    title: "Predictive Suggestions",
    desc: "AI learns your habits, reminds you to send, suggests timing when exchange rates are favorable.",
    position: "top-left",
    icon: "/images/one.png",
  },
  {
    title: "Exchange Rate Insights",
    desc: "Real-time exchange rate and market trend insights tailored to your needs.",
    position: "top-right",
    icon: "/images/three.png",
  },
  {
    title: "Secure by AI",
    desc: "Your data and transfers are protected with military-grade encryption and smart alerts.",
    position: "bottom-left",
    icon: "/images/two.png",
  },
  {
    title: "Smart Notifications",
    desc: "Real-time transfer updates, fraud flagging, and delay alerts, before you even ask.",
    position: "bottom-right",
    icon: "/images/four.png",
  },
];

export default function AIInsights() {
  return (
    <section className="md:py-20 bg-white font-manrope overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
       
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3963] mb-4">
            How <span className="text-[#81C4FF]">AI</span> Helps You
          </h2>
          <p className="text-black max-w-2xl mx-auto md:text-lg">
            Get helpful suggestions, automatic reminders, and real-time exchange
            rate insights tailored to you.
          </p>
        </motion.div>

        <div className="relative flex items-center justify-center mt-12">
          <div className="relative w-full max-w-150 flex justify-center items-end h-full md:pt-60">
           
            <motion.img
              src="/images/globe.png"
              alt="Globe Background"
              className="absolute bottom-0 w-full md:scale-170 scale-180 max-w-none md:mr-25 mr-15 z-0 animate-pulse-slow"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            />
            <motion.img
              src="/images/robot.png"
              alt="AI Assistant"
              className="relative z-10 w-64 md:w-60 drop-shadow-2xl md:scale-100 scale-60 animate-bounce-slow mb-10"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            />
          </div>

          <div className="absolute inset-0 hidden md:flex pointer-events-none">
            {aiFeatures.map((f, i) => {
              let initialPos = { opacity: 0, x: 0, y: 0 };
              if (f.position.includes("top")) initialPos.y = -50;
              if (f.position.includes("bottom")) initialPos.y = 50;
              if (f.position.includes("left")) initialPos.x = -50;
              if (f.position.includes("right")) initialPos.x = 50;

              return (
                <motion.div
                  key={i}
                  initial={initialPos}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.15 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`absolute flex items-center justify-center gap-2 p-2 bg-linear-to-r from-[#B6CCFF] to-[#EBF1FF] backdrop-blur-md rounded-2xl shadow-xl w-fit pointer-events-auto
                    ${f.position === "top-left" ? "top-[15%] left-0" : ""}
                    ${f.position === "top-right" ? "top-[30%] right-0 opacity-100 blur-xs" : ""}
                    ${f.position === "bottom-left" ? "bottom-[30%] left-0" : ""}
                    ${f.position === "bottom-right" ? "bottom-[20%] right-0" : ""}
                  `}
                >
                  <img src={f.icon} alt="" className="h-20 w-25 mb-4" />
                  <div className="flex flex-col">
                    <h4 className="font-bold text-[#0B3963] mb-2 text-sm">{f.title}</h4>
                    <p className="text-[10px] text-[#0B3963] leading-relaxed max-w-50">{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:hidden mt-12">
          {aiFeatures.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="p-3 bg-white gap-5 flex items-center justify-between rounded-2xl shadow-md bg-linear-to-r from-[#B6CCFF] to-[#EBF1FF]"
            >
              <img src={f.icon} alt="" className="h-20 w-25 mb-4" />
              <div className="flex flex-col items-start justify-center">
                <h4 className="font-bold text-gray-900 mb-2">{f.title}</h4>
                <p className="text-[10px] text-gray-500">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}