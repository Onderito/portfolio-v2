import React from "react";

import { easeInOut, easeOut, motion } from "motion/react";

export default function HeroSection() {
  return (
    <div className="relative overflow-x-hidden">
      <motion.img
        initial={{ opacity: 0, scale: 0.8, rotate: -25 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 1.1,
          delay: 1.2,
          ease: [0.25, 0.5, 0.5, 1], // power4.out
        }}
        src="/little-noise.svg"
        alt="Profile picture"
        width={0}
        height={0}
        className=" w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[550px] lg:h-[550px] xl:w-[600px] xl:h-[600px] absolute right-[-20%] xl:right-[-5%] xl:top-[19%] top-0 md:top-[-10%] lg:top-30 lg:right-[-30%] rounded-full xl:rounded-none "
      />
      <section className="p-4 pt-20 md:p-12 lg:p-16 xl:p-40 ">
        <motion.img
          initial={{ opacity: 0, x: 400, scale: 0.8, rotate: -25 }}
          animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
          transition={{
            duration: 1.1,
            ease: [0.25, 0.5, 0.5, 1], // power4.out
          }}
          src="/eclipse.svg"
          alt="Eclipse background"
          width={700}
          height={380}
          className="hidden xl:block absolute z-0 top-[-30%] left-[-20%]"
        />
        <motion.img
          initial={{ opacity: 0, x: 100, scale: 0.8, rotate: -25 }}
          animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
          transition={{
            duration: 1.1,
            ease: [0.25, 1, 0.5, 1], // power4.out
          }}
          src="/profile.webp"
          alt="Profile picture"
          width={200}
          height={200}
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-2xl shadow-md border-4 border-white z-50 relative"
        />

        <motion.div
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.4,
            ease: [0.25, 1, 0.8, 1],
          }}
        >
          <h1 className="font-crimson text-[#3A3A3A] text-[40px] mt-4 xl:mt-6 md:text-[60px] lg:text-[68px] xl-text[84px] lg:leading-28 xl:leading-14">
            Hey, I&apos;m Ulas Önder.
          </h1>
          <div>
            <h2 className="font-crimson text-[#3A3A3A] text-[27px] md:text-[44px] lg:text[56px] xl:text-[64px]">
              Developer Fullstack &{" "}
              <span className="relative backdrop-blur-md bg-white/70 border-[#DDDDDD] border font-crimson p-2 text-[30px] lg:text-[40px] xl:text-[50px] rounded-xl">
                Ux/Ui
                <motion.img
                  initial={{ opacity: 0, y: -90, rotate: -45, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                  transition={{
                    duration: 2,
                    delay: 0.9,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  className=" w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] absolute top-[-52%] right-[-28%]"
                  src={"/pin.svg"}
                  alt="Pin icon"
                  width={0}
                  height={0}
                />
              </span>{" "}
              designer.
            </h2>
          </div>
          <p className="text-[16px] font-crimson mt-2 lg:mt-4 xl:mt-4 text-neutral-700 max-w-md md:max-w-2xl xl:max-w-3xl md:text-[24px] lg:text-[28px]">
            I code like a dev and think like a designer. Always curious, always
            building.
          </p>
          <motion.div
            initial={{ opacity: 0, x: -90 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.1,
              delay: 1.1,
              ease: easeOut,
            }}
            // ref={buttonRef}
            className="mt-6 lg:mt-8 xl:mt-8 font-crimson text-[22px] lg:text-[28px] flex gap-3"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.5, ease: easeInOut },
              }}
              whileTap={{ scale: 0.95, rotate: "2.5deg" }}
              className="text-white shadow-md inset-shadow-md bg-[#2F2F2F] rounded-lg p-3 md:p-4 xl:px-6 cursor-pointer"
            >
              <a target="_blank" href="https://github.com/Onderito">
                See my projects
              </a>
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.5, ease: easeInOut },
              }}
              whileTap={{ scale: 0.95, rotate: "2.5deg" }}
              className="text-[#0B66C2] shadow-xs inset-shadow-lg bg-[#0B66C2]/20 rounded-full p-3 md:p-4 xl:py-1 xl:px-8 cursor-pointer"
            >
              <a target="_blank" href="https://www.linkedin.com/in/ulasonder/">
                Linkedin
              </a>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
