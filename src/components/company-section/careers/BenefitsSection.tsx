"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Dumbbell,
  ShieldCheck,
  Handshake,
  PartyPopper,
  Rocket,
  Calendar,
  Wallet,
  Glasses,
  GraduationCap,
  Baby,
  Target,
  Cake,
} from "lucide-react";

const benefits = [
  { title: "Flexible working hours", Icon: Clock },
  { title: "Sport compensation", Icon: Dumbbell },
  { title: "Health care Insurance", Icon: ShieldCheck },
  { title: "Marriage bonus", Icon: Handshake },
  { title: "Fun team events", Icon: PartyPopper },
  { title: "Professional grow budget", Icon: Rocket },
  { title: "30 days paid vacation", Icon: Calendar },
  { title: "Competitive salary", Icon: Wallet },
  { title: "Compensation for eyeglasses", Icon: Glasses },
  { title: "Allowance for first-graders", Icon: GraduationCap },
  { title: "Childbirth allowance", Icon: Baby },
  { title: "Employee referral bonus", Icon: Target },
  { title: "Birthdays celebration", Icon: Cake },
];

export default function Benefits() {
  return (
    <section className="w-full py-16 md:py-24 bg-white font-manrope">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B3963] mb-4">
            What Benefits Waiting For You?
          </h2>
          <p className="text-black text-sm md:text-lg max-w-3xl mx-auto">
            Visioncraft offers a variety of hand-picked benefits that you can
            take advantage of!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.1 + 0.3,
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-center gap-4 p-5 bg-[#CAE7FC] group cursor-pointer border border-transparent"
            >
              <div className="shrink-0 w-10 h-10 flex items-center justify-center text-black">
                <benefit.Icon size={33} strokeWidth={1.5} />
              </div>
              <span className="text-md text-black leading-tight">
                {benefit.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}