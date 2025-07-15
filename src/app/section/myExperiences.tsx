"use client";

import React from "react";
import { motion } from "motion/react";

const experiences = [
  {
    date: "2023 - 2024 (6 months)",
    title: "Front end developer",
    company: "DevCSI",
    bgClass: "bg-[#0B66C2]/20",
    textClass: "text-[#50A7FF]",
    url: "https://devcsi.fr/",
  },
  {
    date: "2024 - 2025 (15 months)",
    title: "Full stack developer",
    company: "Sealocker",
    bgClass: "bg-[#FF946D]/20",
    textClass: "text-[#FF946E]",
    url: "https://www.sealocker.fr/",
  },
  {
    date: "2024 - 2025 (freelance)",
    title: "Front end developer",
    company: "Ubby",
    bgClass: "bg-[#0B66C2]/20",
    textClass: "text-[#50A7FF]",
    url: "https://www.ubby.ai/",
  },
];

export default function MyExperiences() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="px-4 mt-10 md:px-12 lg:p-16 xl:px-40"
    >
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.4 }}
        id="myExperiences"
        className="my-experiences text-[32px] text-[#3A3A3A] md:text-[48px] lg:text-[58px] xl:text-[64px] font-crimson"
      >
        My experiences
      </motion.h2>

      <div className="mt-8 md:mt-12 xl:mt-10 flex flex-col gap-6 xl:gap-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`flex flex-col-reverse xl:flex xl:flex-row xl:items-center xl:gap-20 ${
              index === 1 ? "border-y border-[#cecece]/40 py-6" : ""
            }`}
          >
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.4 }}
              className="date text-[#cecece] text-[20px] md:text-[25px] lg:text-[30px] font-crimson italic"
            >
              {exp.date}
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.4 }}
              className="title text-[#3A3A3A] text-[24px] md:text-[35px] lg:text-[40px] font-fredoka font-light"
            >
              {exp.title} at{" "}
              <motion.a
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{
                  duration: 0.4,
                }}
                viewport={{ once: true, amount: 0.4 }}
                rel="noopener noreferrer"
                target="_blank"
                className={`company relative font-shantell font-semibold cursor-pointer rounded-xl p-1 px-2 md:px-4 md:p-0 text-[18px] md:text-[35px] lg:text-[40] inline-block border-[0.4px] ${exp.bgClass} ${exp.textClass}`}
                href={exp.url}
              >
                {" "}
                {exp.company}
                <motion.img
                  initial={{ opacity: 0, x: 20, rotate: -45, scale: 0.8 }}
                  whileInView={{ opacity: 0.4, x: 0, rotate: 0, scale: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: 0.5,
                    ease: [0.25, 1, 0.4, 1],
                  }}
                  viewport={{ once: true, amount: 0.4 }}
                  className="absolute bottom-[-15px] right-[-10px] opacity-40 "
                  src={"/click.svg"}
                  width={30}
                  height={30}
                />
              </motion.a>
            </motion.h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
