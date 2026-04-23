"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const allArticles = [
  {
    id: 1,
    category: "Fintech Tips",
    title: "The Future Of Fintech: Trends For 2025",
    date: "24 Januari 2025",
    image: "/images/latestone.png",
  },
  {
    id: 2,
    category: "Budgeting",
    title: "Master Your Budget in 3 Simple Steps",
    date: "Dec 15, 2024",
    image: "/images/latesttwo.png",
  },
  {
    id: 3,
    category: "Technology",
    title: "How AI is Revolutionizing Personal Finance",
    date: "Nov 30, 2024",
    image: "/images/latestthree.png",
  },
  {
    id: 4,
    category: "Security",
    title: "Protecting Your Assets in the Digital Age",
    date: "Oct 12, 2024",
    image: "/images/latestone.png",
  },
  {
    id: 5,
    category: "Business",
    title: "Scaling Your Business with Digital Payments",
    date: "Nov 10, 2024",
    image: "/images/latesttwo.png",
  },
  {
    id: 6,
    category: "User Stories",
    title: "How Paynext Helped Small Businesses Thrive",
    date: "Oct 25, 2024",
    image: "/images/latestthree.png",
  },
  {
    id: 7,
    category: "Global Trade",
    title: "The Future of Remittance in 2026",
    date: "Oct 05, 2024",
    image: "/images/latestone.png",
  },
  {
    id: 8,
    category: "Inclusion",
    title: "Banking for the Unbanked Population",
    date: "Sept 28, 2024",
    image: "/images/latesttwo.png",
  },
  {
    id: 9,
    category: "Fintech Tips",
    title: "Understanding Blockchain Beyond Crypto",
    date: "Sept 15, 2024",
    image: "/images/latestthree.png",
  },
];

interface BlogSectionProps {
  onArticleClick: (article: any) => void;
}

export default function BlogSection({ onArticleClick }: BlogSectionProps) {
  const [visibleCount, setVisibleCount] = useState(6);

  const toggleVisible = () => {
    if (visibleCount >= allArticles.length) {
      setVisibleCount(6);
      const section = document.getElementById("latest-section");
      section?.scrollIntoView({ behavior: "smooth" });
    } else {
      setVisibleCount((prev) => prev + 3);
    }
  };

  return (
    <section id="latest-section" className="w-full bg-white font-manrope py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] md:mb-12 mb-8">
          Latest
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {allArticles.slice(0, visibleCount).map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              onClick={() => onArticleClick(article)}
              className="group flex flex-col cursor-pointer"
            >
              <div className="w-full aspect-16/10 rounded-3xl overflow-hidden mb-6 bg-gray-100 border border-gray-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <span className="text-sm font-bold text-[#46208F] uppercase tracking-wider">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold text-[#110E34] group-hover:text-[#46208F] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-[#97A3B6] font-medium">{article.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {allArticles.length > 6 && (
          <div className="mt-16 flex justify-center">
            <motion.button
              onClick={toggleVisible}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-[#0B3963] text-white font-bold rounded-full cursor-pointer shadow-lg hover:bg-[#082d4f] transition-all transform"
            >
              {visibleCount >= allArticles.length ? "Show Less" : "Load More"}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}