"use client";

import React from "react";
import { motion } from "framer-motion";

const jobOpenings = [
  {
    id: 1,
    title: "CA/CH Campaign",
    description:
      "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
  },
  {
    id: 2,
    title: "CA/CH Campaign",
    description:
      "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
  },
  {
    id: 3,
    title: "CA/CH Campaign",
    description:
      "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
  },
  {
    id: 4,
    title: "CA/CH Campaign",
    description:
      "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
  },
];

export default function JobBoard() {
  return (
    <section className="w-full py-20 bg-white font-manrope">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col gap-6">
          {jobOpenings.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="group w-full p-8 border border-[#00000033] rounded-3xl bg-white cursor-pointer shadow-sm transition-shadow duration-200"
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#090808] tracking-tight">
                  {job.title}
                </h3>

                <p className="text-[#090808] text-base md:text-lg leading-relaxed max-w-4xl">
                  {job.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
