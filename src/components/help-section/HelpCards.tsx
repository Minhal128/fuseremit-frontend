"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const helpData = [
  {
    title: "Account & Onboarding",
    desc: "Details to know regarding sign-ups and verification across the U.K., U.S., Canada and Europe.",
    icon: "https://i.pravatar.cc/100?u=acc",
  },
  {
    title: "About",
    desc: "Details to know regarding sign-ups and verification across the U.K., U.S., Canada and Europe.",
    icon: "https://i.pravatar.cc/100?u=abt",
  },
  {
    title: "Sending and Receive Payments",
    desc: "Details to know regarding sign-ups and verification across the U.K., U.S., Canada and Europe.",
    icon: "https://i.pravatar.cc/100?u=pay",
  },
  {
    title: "Rewards and Referral Program",
    desc: "Details to know regarding sign-ups and verification across the U.K., U.S., Canada and Europe.",
    icon: "https://i.pravatar.cc/100?u=rew",
  },
  {
    title: "Account & Onboarding",
    desc: "Details to know regarding sign-ups and verification across the U.K., U.S., Canada and Europe.",
    icon: "https://i.pravatar.cc/100?u=acc2",
  },
  {
    title: "About",
    desc: "Details to know regarding sign-ups and verification across the U.K., U.S., Canada and Europe.",
    icon: "https://i.pravatar.cc/100?u=abt2",
  },
  {
    title: "Sending and Receive Payments",
    desc: "Details to know regarding sign-ups and verification across the U.K., U.S., Canada and Europe.",
    icon: "https://i.pravatar.cc/100?u=pay2",
  },
  {
    title: "Rewards and Referral Program",
    desc: "Details to know regarding sign-ups and verification across the U.K., U.S., Canada and Europe.",
    icon: "https://i.pravatar.cc/100?u=rew2",
  },
];

export default function HelpCategories() {
  return (
    <section className="w-full py-12 md:py-20 bg-white font-manrope">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-30 md:gap-y-20">
          {helpData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="group relative bg-[#CAE7FC] p-6 md:p-8 rounded-[20px] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-2 border-black"
            >
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-black/10">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#020617]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-[#020617] text-sm md:text-base leading-relaxed max-w-[90%]">
                  {item.desc}
                </p>

                <Link
                  href="#"
                  className="inline-block text-[#0B3963] font-bold text-sm md:text-base underline underline-offset-4 cursor-pointer hover:text-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
