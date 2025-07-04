import React, { useEffect, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { animateProfileIntro } from "../animation/ProfileIntro";
import { gsap } from "gsap";

export default function Profile() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLHeadingElement | null>(null);
  const pinRef = useRef<HTMLImageElement | null>(null);
  const profileRef = useRef<HTMLImageElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const blobRef = useRef<HTMLImageElement | null>(null);

  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      animateProfileIntro({
        title: titleRef,
        subtitle: subtitleRef,
        pin: pinRef,
        profile: profileRef,
        description: descRef,
        button: buttonRef,
        blob: blobRef,
      });
    });
    return () => ctx.revert(); // kill the animate but return your element to its original state
  }, []);
  return (
    <div className="relative overflow-x-hidden">
      <Image
        ref={blobRef}
        src="/little-noise.svg"
        alt="Profile picture"
        width={0}
        height={0}
        className=" w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[550px] lg:h-[550px] xl:w-[600px] xl:h-[600px] absolute right-[-20%] xl:right-[-5%] xl:top-[19%] top-0 md:top-[-10%] lg:top-30 lg:right-[-30%] rounded-full xl:rounded-none "
      />
      <section className="p-4 pt-20 md:p-12 lg:p-16 xl:p-40 ">
        <Image
          src="/eclipse.svg"
          alt="Eclipse background"
          width={700}
          height={380}
          className="hidden xl:block absolute z-0 top-[-30%] left-[-20%] "
        />
        <Image
          ref={profileRef}
          src="/profile.webp"
          alt="Profile picture"
          width={200}
          height={200}
          quality={100}
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-2xl shadow-md border-4 border-white"
        />

        <div>
          <h1
            ref={titleRef}
            className="font-crimson text-[#2F2F2F] text-[40px] mt-4 xl:mt-6 md:text-[60px] lg:text-[68px] xl-text[84px] lg:leading-28 xl:leading-14"
          >
            Hey, I&apos;m Ulas Önder.
          </h1>
          <div>
            <h2
              ref={subtitleRef}
              className="font-crimson text-[#2F2F2F] text-[27px] md:text-[44px] lg:text[56px] xl:text-[64px]"
            >
              Developer Fullstack &{" "}
              <span className="relative font-shantell font-bold shadow-md p-2 text-[30px] lg:text-[40px] xl:text-[50px] rounded-2xl bg-gradient-to-r from-[#FFA585] to-[#FFEDA0] bg-clip-text text-transparent border-2 border-double border-[#FFEDA0]">
                Ux/Ui
                <Image
                  ref={pinRef}
                  className=" w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] absolute top-[-46%] right-[-28%]"
                  src={"/pin.svg"}
                  alt="Pin icon"
                  width={0}
                  height={0}
                />
              </span>{" "}
              designer
            </h2>
          </div>
          <p
            ref={descRef}
            className="text-[16px] font-crimson mt-2 lg:mt-4 xl:mt-4 text-neutral-700 max-w-md md:max-w-2xl xl:max-w-3xl md:text-[24px] lg:text-[28px]"
          >
            I code like a dev and think like a designer. Always curious, always
            building.
          </p>
          <div
            ref={buttonRef}
            className="mt-6 lg:mt-8 xl:mt-8 font-crimson text-[22px] lg:text-[28px] flex gap-3"
          >
            <button className="text-white shadow-md inset-shadow-md bg-[#2F2F2F] rounded-lg p-3 md:p-4 xl:px-6 cursor-pointer">
              <a target="_blank" href="https://github.com/Onderito">
                See my projects
              </a>
            </button>
            <button className="text-[#0B66C2] shadow-xs inset-shadow-lg bg-[#0B66C2]/20 rounded-full p-3 md:p-4 xl:py-1 xl:px-8 cursor-pointer">
              <a target="_blank" href="https://www.linkedin.com/in/ulasonder/">
                Linkedin
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
