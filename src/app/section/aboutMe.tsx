"use client";

import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import GradientButton from "../components/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const [copied, setCopied] = useState(false);
  const container = useRef(null);
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#aboutMe",
          start: "top 60%",
        },
      });

      // Animate title
      tl.from(".about-title", {
        x: -200,
        opacity: 0,
        scale: 0.9,
        duration: 0.7,
        ease: "sine.out",
      });

      // Animate bento cards with stagger
      tl.from(
        ".bento",
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
      ); // optionnel pour commencer un peu avant la fin du titre
    }, container);
    return () => ctx.revert();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("ulas.onder@outlook.fr");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section ref={container} className="p-4 mt-10 md:p-12 lg:p-16 xl:px-40">
      <h2
        id="aboutMe"
        className="about-title text-[32px] font-crimson md:text-[48px] lg:text-[58px] xl:text-[64px]"
      >
        About me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-8 xl:auto-rows-fr gap-6 mt-8 md:mt-12 xl:mt-10">
        {/* CARD 1 */}
        <div className="bento flex flex-col justify-center items-center xl:col-span-4 gap-8 py-10 relative bg-white shadow-sm rounded-xl p-6 xl:p-0 min-h-[350px] bg-dots">
          <Image
            src="/brain.svg"
            alt="Brain icon"
            width={120}
            height={210}
            className="xl:self-start"
          />
          <p className="font-crimson text-[28px] lg:text-[35px] xl:text-[30px] text-center ">
            I’m a fullstack developer who loves clean UI/UX and building
            thoughtful interfaces that just make sense.
          </p>
          <GradientButton
            className="absolute top-[-10%] right-0 md:right-[35%] xl:right-[70%] xl:top-[-5%] -rotate-12 "
            text="Who am I ?"
            size="lg"
          />
        </div>

        {/* CARD 2 */}
        <div className="bento relative flex flex-col justify-center items-center gap-8 shadow-sm rounded-xl py-12 xl:col-span-2 min-h-[350px] bg-dots ">
          <GradientButton
            className="absolute rotate-8 top-[-3%] left-0 xl:top-[-30%] xl:left-55"
            text="Let's work together"
            size="lg"
          />
          <Image
            className="absolute hidden xl:block right-[-40%] top-[-8%] -rotate-6"
            src={"/arrow.svg"}
            alt="Arrow icon"
            width={120}
            height={120}
          />
          <Image src="/rocket.svg" alt="Rocket icon" width={120} height={120} />
          <p className="font-crimson text-[28px] lg:text-[35px] xl:text-[30px] text-center">
            Let’s build something <br /> great together.
          </p>
          <GradientButton
            showCursor={true}
            enableHover={true}
            onClick={handleCopy}
            text="Copy Email"
            size="lg"
          />
          <span className="absolute bottom-2 text-4xl">
            {copied ? "✓" : ""}
          </span>
        </div>

        {/* CARD 3 */}
        <div className="bento bg-gradient-to-l from-[#FFA585]/80 to-[#FFEDA0]/80 shadow-sm rounded-xl py-12 flex flex-col justify-center items-center min-h-[350px] xl:col-span-2 xl:col-start-5 xl:row-start-1">
          <p className="font-crimson italic text-[28px] lg:text-[35px] xl:text-[32px] text-center">
            Great design starts <br /> with empathy.
          </p>
          <br />
          <p className="p-2 font-crimson italic text-[28px] lg:text-[35px] xl:text-[32px] text-center">
            From sketch to final product — I do it all.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="bento xl:col-span-2 shadow-sm rounded-xl relative min-h-[350px] flex flex-col justify-center items-center">
          <div className="relative overflow-hidden rounded-xl w-full h-full flex flex-col justify-center items-center gap-8">
            <Image
              src="/blob-blur.svg"
              alt="Blob icon"
              fill
              className="absolute w-full h-full object-cover -z-10"
            />
            <div className="flex flex-col gap-4 lg:gap-6 font-shantell text-[30px] lg:text-[35px] text-[#3C3C3C]">
              <button className="border-2 border-white rounded-3xl px-8 py-1 shadow-md backdrop-blur-2xl bg-white/25">
                French
              </button>
              <button className="border-2 border-white rounded-3xl px-8 py-1 shadow-md backdrop-blur-2xl bg-white/25">
                English
              </button>
              <button className="border-2 border-white rounded-3xl px-8 py-1 shadow-md backdrop-blur-2xl bg-white/25">
                Turkish
              </button>
            </div>
          </div>
          <GradientButton
            className="rotate-10 absolute bottom-[-2%] left-0"
            text="Languages"
            size="lg"
          />
        </div>

        {/* CARD 5 */}
        <div
          className="bento shadow-sm rounded-xl flex flex-col justify-center relative overflow-hidden py-12 px-6 md:col-span-2 xl:col-span-6 xl:col-start-1 xl:row-start-2 bg-squares
"
        >
          <p className="font-shantell text-[#474747] text-[26px] lg:text-[35px] xl:text-[37px] text-center">
            My journey as <span className="text-[#B3B3B3]">a developer</span>{" "}
            <br />
          </p>

          <div className="relative mt-10 md:flex md:justify-center md:items-center z-10 ">
            <Image
              src={"/coffee-shop.jpg"}
              alt="Coffee Shop"
              width={250}
              height={280}
              className="hidden md:block absolute xl:-rotate-6 rounded-xl border-2 xl:border-4 border-white shadow-md md:relative top-10 md:top-[-1%] left-20 w-[160px] md:w-[200px] lg:w-[250px] xl:w-[280px] z-30 md:z-0"
            />
            <Image
              src={"/ui.jpg"}
              alt="UI Icon"
              width={250}
              height={280}
              className="rounded-xl -rotate-4 border-2 xl:border-4 border-white shadow-md w-[160px] md:w-[200px] lg:w-[250px] xl:w-[280px] relative z-50 "
            />
            <Image
              src={"/setup.jpg"}
              alt="setup"
              width={250}
              height={220}
              className="absolute rotate-4 xl:rotate-6 rounded-xl border-2 xl:border-4 border-white shadow-md md:relative top-[-10%] xl:top-[8%] left-35 md:left-[-7%] md:rotate-0 w-[160px] md:w-[160px] lg:w-[250px] xl:w-[250px] z-60 md:z-0"
            />
          </div>
          <Image
            src={"/layer-blur.svg"}
            alt="Layer icon"
            width={0}
            height={0}
            className="absolute w-[108px] h-[108px] xl:w-[150px] xl:h-[150px] top-50 md:top-40 lg:top-55  right-0 md:right-10 lg:right-20 xl:right-30 z-0"
          />
        </div>
      </div>
    </section>
  );
}
