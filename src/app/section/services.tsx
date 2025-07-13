"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-col justify-center items-center p-4 mt-10 md:p-12 lg:p-16 xl:px-40"
    >
      <span className="text-[#3A3A3A] font-shantell bg-white shadow-xs shadow-orange-300 p-1 px-3 rounded-full">
        services
      </span>
      <h2
        id="aboutMe"
        className="about-title text-[32px] mt-4 leading-10 text-center text-[#3A3A3A] font-crimson md:text-[48px] lg:text-[58px] xl:text-[64px]"
      >
        From Concept to Live Product
      </h2>
      <p className="text-center text-[#3A3A3A] font-crimson mt-2 lg:mt-4 xl:mt-6 lg:text-[24px]">
        Bringing your vision to life with a seamless mix of design and
        <br className="hidden lg:inline" />— powered by Next.js, Tailwind & GSAP
      </p>
      <div className="lg:flex lg:gap-10 xl:gap-20 xl:mt-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="border-1 border-[#FBFBFB] card-shadow mt-8 bg-white rounded-lg p-2 pb-8 w-full"
        >
          <div className="h-48 bg-[#FBFBFB] rounded-lg overflow-hidden">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={"/club-hive.jpg"}
              alt="club-hive"
              width={200}
              height={200}
            />
          </div>
          <h3 className="text-[#3A3A3A] font-crimson font-semibold text-[20px] mt-4">
            Landing Page Design
          </h3>
          <p className="text-[#999999] mt-1">
            Crafted to convert — fast, clean & responsive.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="border-1 border-[#FBFBFB] card-shadow mt-8 bg-white rounded-lg p-2 pb-8 w-full"
        >
          <div className="h-48 bg-[#FBFBFB] rounded-lg little-shadow ">
            <Image
              className="w-full"
              src={"/next-js.svg"}
              alt="next-js"
              width={200}
              height={200}
            />
          </div>
          <h3 className="text-[#3A3A3A] font-crimson font-semibold text-[20px] mt-4">
            Next Js Development
          </h3>
          <p className="text-[#999999] mt-1">Fully powered by Next.js.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="border-1 border-[#FBFBFB] card-shadow mt-8 bg-white rounded-lg p-2 pb-8 w-full"
        >
          <div className="h-48 bg-[#FBFBFB] rounded-lg flex justify-center items-center little-shadow relative">
            <Image
              className="absolute top-4 rotate-170 right-0"
              alt="simple-arrow"
              width={120}
              height={120}
              src={"/simple-arrow.svg"}
            />
            <button className="font-shantell text-white bg-[#191919] shadow-spread px-10 py-3 -rotate-6 rounded-xl text-[16px]">
              Publish
            </button>
            <Image
              className="absolute bottom-4 left-0 -rotate-8"
              alt="simple-arrow"
              width={120}
              height={120}
              src={"/simple-arrow.svg"}
            />
          </div>
          <h3 className="text-[#3A3A3A] font-crimson font-semibold text-[20px] mt-4">
            Ready to launch !
          </h3>
          <p className="text-[#999999] mt-1">
            Your product — deployed, optimised & live.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
