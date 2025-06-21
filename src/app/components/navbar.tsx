"use client";

import React from "react";
import Image from "next/image";

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
        <nav className="inset-shadow-2xs rounded-full fixed bottom-0 p-5 w-full ">
          <ul className="flex justify-around items-center">
            {sections.map((section) => (
              <li
                key={section.label}
                onClick={() => handleClick(section.ref)}
                className="cursor-pointer"
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

      <div className="hidden lg:block ">
        <nav className="font-crimson border-[#DDDDDD] border p-5 xl:p-8 rounded-2xl fixed right-[-1%] top-14 z-50 backdrop-blur-md bg-white/40 ">
          <ul className="flex items-center text-2xl xl:text-3xl divide-x divide-[#DDDDDD]">
            {sections.map((section, index) => (
              <li
                key={section.label}
                onClick={() => handleClick(section.ref)}
                className={`px-4 cursor-pointer`}
              >
                {section.label}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
