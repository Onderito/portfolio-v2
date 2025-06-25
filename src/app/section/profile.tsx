import React from "react";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="relative overflow-x-hidden">
      <Image
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
          src="/profile.svg"
          alt="Profile picture"
          width={0}
          height={0}
          quality={100}
          className="w-[150px] h-[142px] md:w-[180px] md:h-[182px] lg:w-[200px] lg:h-[202px] xl:w-[250px] xl:h-[252px] "
        />

        <div>
          <h1 className="font-crimson text-[#2F2F2F] text-[40px] mt-4 xl:mt-6 md:text-[60px] lg:text-[68px] xl-text[84px] lg:leading-28 xl:leading-14">
            Hey, I&apos;m Ulas Önder.
          </h1>
          <div>
            <h2 className="font-crimson text-[#2F2F2F] text-[27px] md:text-[44px] lg:text[56px] xl:text-[64px]">
              Developer Fullstack &{" "}
              <span className="relative font-shantell font-bold shadow-md p-2 text-[30px] lg:text-[40px] xl:text-[50px] rounded-2xl bg-gradient-to-r from-[#FFA585] to-[#FFEDA0] bg-clip-text text-transparent border-2 border-double border-[#FFEDA0]">
                Ux/Ui
                <Image
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
          <p className="text-[16px] font-crimson mt-2 lg:mt-4 xl:mt-4 text-neutral-700 max-w-md md:max-w-2xl xl:max-w-3xl md:text-[24px] lg:text-[28px]">
            I code like a dev and think like a designer. Always curious, always
            building.
          </p>
          <div className="mt-6 lg:mt-8 xl:mt-8 font-crimson text-[22px] lg:text-[28px] flex gap-3">
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
