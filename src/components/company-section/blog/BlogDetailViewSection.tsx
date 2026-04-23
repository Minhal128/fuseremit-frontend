"use client";

import React from "react";
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

interface BlogDetailProps {
  article: any;
  onBack: () => void;
}

const sidebarData = {
  latest: [
    {
      title: "Top 3 Fintech Tools for Small Businesses",
      date: "Jan 5, 2025",
      img: "/images/latestone.png",
    },
    {
      title: "Digital Wallets: Are They the Future of Payments?",
      date: "Jan 5, 2025",
      img: "/images/latesttwo.png",
    },
    {
      title: "5 Ways to Improve Your Financial Habits",
      date: "Jan 5, 2025",
      img: "/images/latestthree.png",
    },
  ],
  categories: [
    "Fintech",
    "Finance Tips",
    "Security",
    "Budgeting",
    "Technology",
  ],
  tags: [
    "#FintechTrends",
    "#DigitalPayments",
    "#BudgetTips",
    "#AIInFinance",
    "#SecureTransactions",
  ],
  articleTags: [
    "#FintechTrends",
    "#DigitalTransformation",
    "#AIInFinance",
    "#SecureTransactions",
    "#GreenFintech",
  ],
};

export default function BlogDetail({ article, onBack }: BlogDetailProps) {
  return (
    <>
      <section className="relative w-full flex text-center font-manrope bg-[#F0F5FF] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-[#B6CCFF]/30 to-transparent hidden md:block" />
        <div className="max-w-full mx-auto px-6 md:px-25 py-20 md:py-50 flex items-center">
          <motion.div
            className="relative md:pt-0 pt-10 max-w-2xl z-10 text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-4xl md:text-7xl font-extrabold text-[#0B3963] leading-[1.1] tracking-tight">
              Blog
            </h1>
            <p className="md:text-lg text-sm text-black py-3 leading-relaxed">
              Insights, stories, and everything Fuseremit.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="w-full bg-white font-manrope min-h-screen pb-20">
        <div className="mx-auto md:px-15 px-6 py-10">
          
          <motion.nav
            className="flex items-center gap-2 text-sm text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <button
              onClick={onBack}
              className="hover:text-[#0B3963] cursor-pointer transition-colors"
            >
              Blog
            </button>
            <span>&gt;</span>
            <span className="text-[#0B3963] font-medium truncate">
              {article.title}
            </span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-5xl font-bold text-[#0B3963] mb-6 leading-tight max-w-5xl"
          >
            {article.title}
          </motion.h1>

          <motion.div
            className="flex items-center gap-3 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
              <img
                src="https://i.pravatar.cc/150?u=sarah"
                alt="Author"
                className="object-cover"
              />
            </div>
            <div className="text-sm">
              <span className="text-gray-600 font-semibold">Sarah Winter</span>
              <span className="text-gray-300 mx-2">•</span>
              <span className="text-gray-400">{article.date}</span>
            </div>
          </motion.div>

          <motion.div
            className="w-full aspect-video md:aspect-21/9 rounded-3xl overflow-hidden mb-12 shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={article.image}
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 md:gap-20">
            <article className="md:w-350 space-y-8">
              <motion.div
                className="text-gray-600 leading-relaxed text-lg space-y-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <p>
                  The fintech industry continues to evolve at a rapid pace,
                  reshaping how individuals and businesses manage their
                  finances. In 2025, we are witnessing groundbreaking trends...
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    1. AI-Driven Financial Tools
                  </h3>
                  <p>
                    Artificial intelligence is redefining financial management.
                    From predictive analytics to personalized budgeting, AI
                    tools empower users with data-driven insights...
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    2. Advanced Security Measures
                  </h3>
                  <p>
                    As cyber threats become more sophisticated, fintech
                    companies are enhancing their security protocols. In 2025,
                    multi-layered encryption and biometric authentication have
                    become standard.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-[#E9F1F8] px-8 py-4 border-l-8 border-[#0B3963]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <p className="text-xl font-bold text-[#0B3963] leading-relaxed">
                  "The fintech industry in 2025 is not just about technology;
                  it's about creating a more secure, inclusive, and sustainable
                  financial future."
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-2 pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {sidebarData.articleTags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-100 text-gray-500 rounded-full text-xs font-medium cursor-pointer hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </article>

            <aside className="md:w-1/3 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h4 className="text-lg font-bold text-black mb-6">
                  Latest Post
                </h4>
                <div className="space-y-6">
                  {sidebarData.latest.map((post, i) => (
                    <motion.div
                      key={i}
                      className="flex gap-4 group cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.7,
                        ease: "easeOut",
                        delay: i * 0.1,
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                        <img
                          src={post.img}
                          alt="Post"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h5 className="text-sm font-bold text-black  line-clamp-2 leading-snug">
                          {post.title}
                        </h5>
                        <p className="text-xs text-gray-400 mt-1">
                          {post.date}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h4 className="text-lg font-bold text-black mb-4">
                  Categories
                </h4>
                <div className="flex flex-wrap gap-2">
                  {sidebarData.categories.map((cat, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 border border-gray-100 text-gray-400 rounded-full text-xs font-medium hover:border-blue-400 hover:text-blue-400 cursor-pointer transition-all"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h4 className="text-lg font-bold text-black mb-4">
                  Popular Tags
                </h4>
                <div className="space-y-3">
                  {sidebarData.tags.map((tag, i) => (
                    <div
                      key={i}
                      className="text-sm text-gray-400 hover:text-[#0B3963] cursor-pointer transition-colors pb-2 border-b border-gray-50 last:border-0"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h4 className="text-lg font-bold text-black mb-6">
                  Social Media
                </h4>
                <div className="flex gap-3">
                  {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                    <button
                      key={i}
                      className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                    >
                      <Icon size={16} />
                    </button>
                  ))}
                </div>
              </motion.div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
