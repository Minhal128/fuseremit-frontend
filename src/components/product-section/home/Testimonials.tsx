"use client";

import { IoStar } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Lana Bernier",
    role: "Senior Paradigm Strategist",
    image: "https://i.pravatar.cc/150?u=lana",
    text: "Great company. Money gets to receiver on time. They are very unique, processing was very unique and fast, and never pay a fee to send money. I am loving it. Thanks to FintechApp, my parents can now get money any time.",
  },
  {
    name: "Mrs. Van Hartmann",
    role: "Legacy Usability Manager",
    image: "https://i.pravatar.cc/150?u=van",
    text: "Great company. Money gets to receiver on time. They are very unique, processing was very unique and fast, and never pay a fee to send money. I am loving it. Thanks to FintechApp, my parents can now get money any time.",
  },
  {
    name: "Philip Deckow",
    role: "District Assurance Officer",
    image: "https://i.pravatar.cc/150?u=philip",
    text: "Great company. Money gets to receiver on time. They are very unique, processing was very unique and fast, and never pay a fee to send money. I am loving it. Thanks to FintechApp, my parents can now get money any time.",
  },
  {
    name: "Lana Bernier",
    role: "Senior Paradigm Strategist",
    image: "https://i.pravatar.cc/150?u=lana2",
    text: "Great company. Money gets to receiver on time. They are very unique, processing was very unique and fast, and never pay a fee to send money. I am loving it. Thanks to FintechApp, my parents can now get money any time.",
  },
  {
    name: "Mrs. Van Hartmann",
    role: "Legacy Usability Manager",
    image: "https://i.pravatar.cc/150?u=van2",
    text: "Great company. Money gets to receiver on time. They are very unique, processing was very unique and fast, and never pay a fee to send money. I am loving it. Thanks to FintechApp, my parents can now get money any time.",
  },
  {
    name: "Philip Deckow",
    role: "District Assurance Officer",
    image: "https://i.pravatar.cc/150?u=philip2",
    text: "Great company. Money gets to receiver on time. They are very unique, processing was very unique and fast, and never pay a fee to send money. I am loving it. Thanks to FintechApp, my parents can now get money any time.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white font-manrope">
      <div className="mx-auto px-6 md:px-30">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 space-y-4"
        >
          <h3 className="md:text-3xl text-lg font-medium text-black">
            See how fast
          </h3>
          <h2 className="text-2xl md:text-6xl font-semibold text-[#0B3963] tracking-tight">
            Love by people globally
          </h2>
          <p className="text-black max-w-2xl mx-auto md:text-lg text-sm leading-relaxed">
            You're in control of your funds. Rely on us to ensure they reach
            their destination securely, yet don't just take our assurance at
            face value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
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
              className="bg-white p-8 shadow-xl border border-gray-50 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <IoStar
                        key={i}
                        className="w-4 h-4 fill-[#0B3963] text-[#0B3963]"
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-1">
                    <div className="w-5 h-5 bg-[#003366] rounded-full flex items-center justify-center">
                      <span className="text-[8px] text-white italic">
                        <BiSolidLike size={12} />
                      </span>
                    </div>
                    <span className="text-sm text-[#202020] font-bold">
                      Testimonial
                    </span>
                  </div>
                </div>

                <p className="text-[#4B5563] text-sm mb-8">{review.text}</p>
              </div>

              <div className="flex items-center gap-1">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-8 h-8 rounded-full object-cover bg-gray-100"
                />
                <div className="flex flex-col">
                  <h4 className="font-bold text-black leading-tight">
                    {review.name}
                  </h4>
                  <p className="text-xs text-[#505050]">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center justify-center gap-15 mt-10"
        >
          <div className="flex flex-col items-center justify-center">
            <img
              src="/images/blackappstore.png"
              alt=""
              className="md:h-30 md:w-30 h-20 w-20 object-contain"
            />
            <h4 className="md:text-xs text-[8px]">
              Rated 4.8 stars on App Store
            </h4>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="/images/blackplaystore.png"
              alt=""
              className="md:h-30 md:w-30 h-20 w-20 object-contain"
            />
            <h4 className="md:text-xs text-[8px]">
              Rated 4.5 stars on Play Store
            </h4>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
