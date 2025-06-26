"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

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
  const navbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const nav = navbarRef.current;
    gsap.from(nav, {
      opacity: 0,
      x: 400,
      duration: 1.9,
      ease: "power4.out",
    });
  }, []);
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

      <div className="hidden lg:block z-70 ">
        <nav
          ref={navbarRef}
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
        </nav>
      </div>
    </div>
  );
}
