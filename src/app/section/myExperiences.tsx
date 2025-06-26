"use client";

import React, { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    date: "2023 - 2024 (6 months)",
    title: "Front end developer",
    company: "DevCSI",
    bgClass: "bg-[#0B66C2]/20",
    textClass: "text-[#50A7FF]",
  },
  {
    date: "2024 - 2025 (15 months)",
    title: "Full stack developer",
    company: "Sealocker",
    bgClass: "bg-[#FF946D]/20",
    textClass: "text-[#FF946E]",
  },
  {
    date: "2024 - 2025 (freelance)",
    title: "Front end developer",
    company: "Ubby",
    bgClass: "bg-[#0B66C2]/20",
    textClass: "text-[#50A7FF]",
  },
];

export default function MyExperiences() {
  const container = useRef(null);
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#myExperiences",
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });
      tl.from(".my-experiences", {
        x: -200,
        opacity: 0,
        scale: 0.9,
        duration: 0.7,
        ease: "sine.out",
      });
      tl.from(".date", {
        x: -200,
        opacity: 0,
        scale: 0.9,
        duration: 0.7,
        ease: "sine.out",
        stagger: {
          each: 0.25,
        },
      });
      tl.from(
        ".title",
        {
          y: -200,
          opacity: 0,
          scale: 0.9,
          duration: 0.7,
          ease: "sine.out",
          stagger: {
            each: 0.25,
          },
        },
        "-=0.5"
      );
      tl.from(
        ".company",
        {
          y: 50,
          x: 100,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          stagger: {
            each: 0.25,
          },
        },
        "-=0.1"
      );
    }, container);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={container} className="px-4 mt-10 md:px-12 lg:p-16 xl:px-40">
      <h2
        id="myExperiences"
        className="my-experiences text-[32px] md:text-[48px] lg:text-[58px] xl:text-[64px] font-crimson"
      >
        My experiences
      </h2>

      <div className="mt-8 md:mt-12 xl:mt-10 flex flex-col gap-6 xl:gap-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse xl:flex xl:flex-row xl:items-center xl:gap-20 ${
              index === 1 ? "border-y border-[#cecece]/40 py-6" : ""
            }`}
          >
            <p className="date text-[#cecece] text-[20px] md:text-[25px] lg:text-[30px] font-crimson italic">
              {exp.date}
            </p>
            <h3 className="title text-[24px] md:text-[35px] lg:text-[40px] font-fredoka font-light">
              {exp.title} at{" "}
              <span
                className={`company font-shantell font-semibold rounded-xl p-1 px-2 md:px-4 md:p-0 text-[18px] md:text-[35px] lg:text-[40] inline-block -rotate-4 ${exp.bgClass} ${exp.textClass}`}
              >
                {exp.company}
              </span>
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
