"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  { id: "all", label: "All positions", count: 17 },
  { id: "engineering", label: "Engineering", count: 7 },
  { id: "product", label: "Product", count: 3 },
  { id: "design", label: "Design", count: 1 },
  { id: "operation", label: "Operation", count: 4 },
  { id: "marketing", label: "Marketing", count: 2 },
];

const jobs = [
  {
    id: 1,
    category: "engineering",
    title: "Full-Stack Developers",
    location: "Tartu",
    type: "Full-time",
    desc: "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
  },
  {
    id: 2,
    category: "engineering",
    title: "Backend Engineer",
    location: "Remote",
    type: "Full-time",
    desc: "Join our core infrastructure team to build scalable payment processing systems across Europe and North America.",
  },
  {
    id: 3,
    category: "engineering",
    title: "Mobile Developer (iOS/Android)",
    location: "Remote",
    type: "Full-time",
    desc: "We are seeking a versatile Mobile Developer to help us build the next generation of our financial services application.",
  },
  {
    id: 4,
    category: "product",
    title: "Product Designer",
    location: "Tallinn",
    type: "Full-time",
    desc: "Work with our design team to create seamless user experiences for millions of users worldwide.",
  },
];

export default function OpenPositions() {
  const [activeTab, setActiveTab] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredJobs =
    activeTab === "all"
      ? jobs
      : jobs.filter((job) => job.category === activeTab);

  const displayedJobs = showAll ? filteredJobs : filteredJobs.slice(0, 2);

  return (
    <section className="w-full py-16 md:py-24 bg-white font-manrope">
      <div className=" mx-auto px-6 md:px-25">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-5xl font-bold text-[#0B3963] text-center mb-16"
        >
          We Have 17 Open Positions Now!
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12">
          <aside className="w-full md:w-1/4 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible pb-4 md:pb-0 gap-2 md:gap-0 border-b md:border-b-0 border-gray-100"
            >
              {categories.map((cat, index) => (
                <motion.button
                  key={cat.id}
                  onClick={() => {
                    setActiveTab(cat.id);
                    setShowAll(false);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`shrink-0 text-left px-4 py-3 md:px-5 md:py-4 text-sm md:text-base cursor-pointer border-l-4 md:w-full
                    ${
                      activeTab === cat.id
                        ? "border-[#0040D8] text-black font-semibold bg-blue-50/50 md:bg-transparent"
                        : "border-transparent text-[#253A67] "
                    }`}
                >
                  {cat.label} ({cat.count})
                </motion.button>
              ))}
            </motion.div>

            <div className="hidden md:block pt-5">
              <p className="text-md text-black mb-6 tracking-wide">
                We are always seeking talented people. In case you cannot find
                your desired position here, please send us your LinkedIn profile
                and give us your contact information. We will be in touch.
              </p>
              <button className="px-5 py-5 mt-5 bg-[#0B3963] text-white font-semibold rounded-full shadow-[4px_4px_0px_0px_rgba(11,57,99,0.3)] cursor-pointer text-md">
                Share your LinkedIn profile
              </button>
            </div>
          </aside>

          <main className="w-full md:pl-20 md:w-3/4 ">
            {displayedJobs.length > 0 ? (
              <>
                {displayedJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="pb-12 "
                  >
                    <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                      {job.title}
                    </h3>

                    <div className="flex gap-3 mb-6">
                      <span className="px-2.5 py-2 border border-black rounded-full text-xs font-medium">
                        {job.location}
                      </span>
                      <span className="px-2.5 py-2 border border-black rounded-full text-xs font-medium">
                        {job.type}
                      </span>
                    </div>

                    <p className="text-[#090808] text-sm md:text-base leading-relaxed mb-8 max-w-3xl">
                      {job.desc}
                    </p>

                    <button className="px-10 mb-10 py-3 bg-[#0B3963] text-white font-bold rounded-full shadow-[4px_4px_0px_0px_rgba(11,57,99,0.3)] cursor-pointer text-sm">
                      Apply Online
                    </button>
                  </motion.div>
                ))}

                {filteredJobs.length > 2 && (
                  <div className="md:ml-40 flex justify-center md:justify-start">
                    <button
                      onClick={() => setShowAll(!showAll)}
                      className="px-12 py-3 border-2 rounded-full bg-[#0B3963] text-white cursor-pointer"
                    >
                      {showAll ? "Show Less" : "Load More"}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="py-20 text-center text-gray-400 italic">
                No open positions currently in this category.
              </div>
            )}
          </main>

          <div className="md:hidden pt-8 border-t border-gray-100">
            <p className="text-xs text-gray-500 mb-4 text-center">
              Can't find your role? Share your LinkedIn profile with us.
            </p>
            <button className="w-full py-4 bg-[#0B3963] text-white font-bold rounded-full cursor-pointer">
              Share your LinkedIn profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
