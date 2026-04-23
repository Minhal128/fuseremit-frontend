"use client";

import Link from "next/link";
import { Instagram, ChevronDown } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <footer className="w-full font-manrope">
      <section className="relative w-full bg-[#F0F5FF] pt-20 md:pt-24 pb-0 overflow-hidden">
        <div className="md:max-w-7xl md:mx-auto px-6 text-center flex flex-col items-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-xl md:text-5xl font-bold text-[#0F172A] leading-tight  mx-auto mb-8"
          >
            See for yourself how easy it is to be in control of your financial
            life with <span className="text-[#0B3963]">Fuseremit.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center justify-center gap-4 pt-4 mb-12 md:mb-16"
          >
            <button className="w-full sm:w-auto flex items-center gap-3 px-4 py-2 bg-white border rounded-lg cursor-pointer hover:shadow-md transition-shadow">
              <img src="/images/apple.png" alt="" className="h-7 w-auto" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-[8px] font-medium text-black">
                  Download on the
                </span>
                <span className="md:text-lg text-xs font-bold text-black tracking-tight">
                  App Store
                </span>
              </div>
            </button>

            <button className="w-full sm:w-auto flex items-center gap-3 px-4 py-2 bg-white border rounded-lg cursor-pointer hover:shadow-md transition-shadow">
              <img src="/images/playstore.png" alt="" className="h-7 w-auto" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-[8px] font-medium text-black uppercase">
                  GET IT ON
                </span>
                <span className="md:text-lg text-xs font-bold text-black tracking-tight">
                  GooglePlay
                </span>
              </div>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative w-full flex justify-center translate-y-2"
          >
            <img
              src="/images/footer.png"
              alt="Global Connectivity"
              className="w-full h-auto max-w-5xl object-contain"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-white pt-16 md:pt-20 pb-0 border-t border-gray-100">
        <div className="mx-auto px-6 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12 md:mb-20"
          >
            <div className="flex flex-col gap-5">
              <div className="max-w-md">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] leading-tight">
                  Stay updated with{" "}
                  <span className="text-[#0B3963]">Fuseremit</span> by signing
                  up for our newsletter
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
                <input
                  type="email"
                  placeholder="Email Address"
                  className=" w-full md:w-110 px-6 py-3 border border-[#868D88] rounded-full text-sm bg-gray-50/50"
                />
                <button className="w-full sm:w-auto px-4 py-3 bg-[#0B3963] text-white font-semibold rounded-full cursor-pointer ">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="flex gap-4 w-full lg:w-auto justify-start sm:justify-center">
              {[Instagram, FaFacebookF, FaXTwitter, FaLinkedinIn].map(
                (Icon, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 bg-black text-white rounded-full cursor-pointer hover:scale-110 transition-transform shadow-lg"
                  >
                    <Icon size={18} />
                  </div>
                ),
              )}
            </div>
          </motion.div>
        </div>

        <hr className="border-gray-200 w-full" />

        <div className="bg-[#F0F5FF] w-full pt-16 pb-16">
          <div className="mx-auto px-6 md:px-20 text-white">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
              className="grid grid-cols-2 md:grid-cols-5 gap-y-12 md:gap-x-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                variants={{ visible: { opacity: 1, y: 0 } }}
                className="col-span-2 md:col-span-1 space-y-6"
              >
                <img
                  src="/images/navbar-logo.png"
                  alt="Fuseremit"
                  className="h-11 w-auto"
                />
                <div className="relative inline-block w-full max-w-30">
                  <select className="w-full appearance-none bg-transparent border border-black rounded-full px-4 py-2.5 text-sm font-semibold cursor-pointer outline-none text-black">
                    <option className="text-black">English</option>
                    <option className="text-black">Spanish</option>
                    <option className="text-black">French</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                </div>
              </motion.div>

              {[
                {
                  title: "Products",
                  links: ["International Money Transfer", "Request Money"],
                },
                { title: "Company", links: ["About Us", "Blog", "Careers"] },
                {
                  title: "Community",
                  links: ["Invite & Earn", "Influencer", "Promotions"],
                },
                { title: "Resources", links: ["Legal", "Help", "Contact Us"] },
              ].map((group) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 30 }}
                  variants={{ visible: { opacity: 1, y: 0 } }}
                  className="space-y-4"
                >
                  <h4 className="font-bold text-black">{group.title}</h4>
                  <ul
                    className={`space-y-3 ${
                      group.title === "Products" ? "md:w-50 w-30" : "w-30"
                    } text-sm text-black font-medium`}
                  >
                    {group.links.map((link) => (
                      <li key={link}>
                        <Link href="#" className="hover:underline">
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </footer>
  );
}