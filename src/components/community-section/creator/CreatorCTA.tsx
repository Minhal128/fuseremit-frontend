"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function CreatorCTA() {
    return (
        <section className="w-full py-24 bg-white font-manrope">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative w-full bg-linear-to-r from-[#0B3963] to-[#A6BFF1] rounded-[40px] flex flex-col md:flex-row items-center min-h-80 border-3 border-black"
                >

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="w-full md:w-1/2 p-10 md:p-16 z-10"
                    >
                        <h2 className="text-2xl md:text-4xl font-semibold text-white mb-8 leading-tight">
                            Ready to join the Fuseremit <br /> Creator community?
                        </h2>

                        <button className="px-10 py-3 bg-[#0B2545] text-white rounded-full cursor-pointer text-sm shadow-xl">
                            Apply here
                        </button>
                    </motion.div>

                    <div className="relative w-full md:w-1/2 h-75 md:h-full">

                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="absolute md:-top-50 top-35 left-10 md:left-9 w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden md:z-20 z-60 shadow-2xl"
                        >
                            <img
                                src="/images/circleone.png"
                                className="w-full h-full object-cover"
                                alt="Creator 1"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="absolute top-2 right-40 w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden z-50"
                        >
                            <img
                                src="/images/circletwo.png"
                                className="w-full h-full object-cover grayscale"
                                alt="Creator 2"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="absolute md:-bottom-30 bottom-20 md:right-0 -right-3 w-44 h-44 md:w-65 md:h-65 rounded-full overflow-hidden z-30 shadow-2xl"
                        >
                            <img
                                src="/images/circlethree.png"
                                className="w-full h-full object-cover"
                                alt="Creator 3"
                            />
                        </motion.div>

                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='flex flex-col max-w-2xl text-center items-center justify-center md:pt-50 pt-20'
                >
                    <h1 className='font-semibold md:text-4xl text-2xl font-manrope mb-10'>Why Apply?</h1>
                    <p>Work with us on brand deals and content creation. Our priority is enabling you to create content that fits your channel and helps you grow. There is no idea too big. Tell us about it and let's make it happen</p>
                    <span className='py-8'>Sounds great?</span>
                    <button
                        type="submit"
                        className="px-8 py-2 bg-[#0B3963] text-white rounded-full cursor-pointer shadow-lg shadow-blue-900/20 text-sm"
                    >
                        Apply here
                    </button>
                </motion.div>

            </div>
        </section>
    );
}