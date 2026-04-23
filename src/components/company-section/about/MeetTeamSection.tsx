"use client";

import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Charles Moore",
    role: "Chief Executive Officer",
    image: "/images/cardone.png",
  },
  {
    name: "Daniella Vista",
    role: "Chief Executive Officer",
    image: "/images/cardtwo.png",
  },
  {
    name: "Evan Wong",
    role: "Chief Financial Officer",
    image: "/images/cardthree.png",
  },
  {
    name: "Farah Medina",
    role: "Head of Customer Success",
    image: "/images/cardfour.png",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="w-full py-24 bg-white font-manrope">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="inline-block px-4 py-1.5 bg-[#0B39631A] text-[#0B3963] text-xs font-bold rounded-full tracking-wider">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#110E34] leading-tight">
            Meet The Team Behind <br className="hidden md:block" /> Fuseremit
            Innovation
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-10 gap-8 md:gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="group cursor-pointer flex flex-col items-start"
            >
              <div className="w-full rounded-3xl overflow-hidden mb-6 bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-auto h-85 object-cover"
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#0B3963] transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-400 font-medium tracking-wide">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
