"use client";

import React from "react";
import Image from "next/image";
import { easeInOut, motion } from "motion/react";

interface Section {
  label: string;
  icon: string;
  alt: string;
  ref: React.RefObject<HTMLElement | null>; // <= ici
}

interface NavbarProps {
  sections: Section[];
}

export default function Navbar({ sections }: NavbarProps) {
  const handleClick = (sectionRef: React.RefObject<HTMLElement | null>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <div className="lg:hidden">
        <nav className="inset-shadow-2xs bg-white/20 backdrop-blur-xs rounded-2xl fixed bottom-0 p-5 w-full ">
          <ul className="flex justify-around items-center">
            {sections.map((section) => (
              <li
                key={section.label}
                onClick={() => handleClick(section.ref)}
                className={`px-4 cursor-pointer z-90`}
              >
                <Image
                  src={section.icon}
                  alt={section.alt}
                  width={24}
                  height={24}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="hidden lg:block z-70 ">
        <motion.nav
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: easeInOut,
          }}
          className="font-crimson border-[#DDDDDD] border p-5 xl:p-6 rounded-2xl fixed left-1/2 -translate-x-1/2 top-0 mt-4 z-80 backdrop-blur-md bg-white/70"
        >
          <ul className="flex items-center text-2xl xl:text-3xl divide-x divide-[#DDDDDD]">
            {sections.map((section) => (
              <li
                key={section.label}
                onClick={() => handleClick(section.ref)}
                className={`px-4 cursor-pointer`}
              >
                <Image
                  src={section.icon}
                  alt={section.alt}
                  width={24}
                  height={24}
                />
              </li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </div>
  );
}
