"use client";

import React from "react";
import { motion } from "framer-motion";

const competitors = [
  { name: "Fuseremit", logo: "/images/navbar-logo.png", isMain: true },
  { name: "IPSUM", logo: "/images/ipsum.png", isMain: false },
  { name: "logo ipsum", logo: "/images/logoipsum.png", isMain: false },
  { name: "Logoipsum", logo: "/images/logo-ipsum.png", isMain: false },
];

const rows = [
  { label: "Signup Fee", values: ["Zero", "No", "No", "No"] },
  {
    label: "Transfer Fee",
    values: [
      "Destination specific",
      "Destination specific",
      "Yes",
      "Destination specific",
    ],
  },
  {
    label: "Delivery Time",
    values: ["In minutes", "In minutes", "In minutes", "In minutes"],
  },
];

export default function ComparisonTable() {
  return (
    <motion.section
      className="bg-[#0B3963] md:py-24 py-10 font-manrope"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-2xl md:text-6xl font-bold text-white">
            Fuseremit Vs Others
          </h2>
          <p className="text-white text-xs md:text-base max-w-4xl md:mb-30 mx-auto leading-relaxed">
            The information provided in this comparison table is based on
            publicly available data and may be subject to change. Please verify
            the latest details on our website and independently confirm
            competitor data for accuracy.
          </p>
        </div>

        <div className="overflow-x-auto pb-4 custom-scrollbar">
          <div className=" bg-white md:rounded-3xl overflow-auto shadow-2xl">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2">
                  <th className="w-1/5 p-8"></th>

                  {competitors.map((comp, idx) => (
                    <th
                      key={idx}
                      className={`w-1/5 p-6 align-middle border-r-2 transition-colors ${
                        comp.isMain ? "bg-[#0B3963]" : "bg-white"
                      }`}
                    >
                      <div className="flex justify-center items-center">
                        <img
                          src={comp.logo}
                          alt={comp.name}
                          className={`max-h-7 w-auto object-contain ${
                            comp.isMain ? "brightness-0 invert" : ""
                          }`}
                        />
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {rows.map((row, rowIdx) => (
                  <tr key={rowIdx} className="border-b-2 last:border-0">
                    <td className="p-6 font-bold text-black md:text-sm text-xs">
                      {row.label}
                    </td>

                    {row.values.map((val, valIdx) => {
                      const isMain = competitors[valIdx + 0]?.isMain;
                      return (
                        <td
                          key={valIdx}
                          className={`p-6 text-center md:text-sm text-xs font-medium transition-colors ${
                            isMain
                              ? "bg-[#0B3963] text-white border-2 border-black last:border-0"
                              : "text-gray-600 border-2"
                          }`}
                        >
                          {val}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="md:hidden text-center text-gray-400 text-xs mt-4 italic">
          ← Swipe to see full comparison →
        </p>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }
      `}</style>
    </motion.section>
  );
}
