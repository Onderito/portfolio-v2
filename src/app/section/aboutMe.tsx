import React from "react";
import Image from "next/image";
import GradientButton from "../components/button";

export default function AboutMe() {
  return (
    <section className="p-4 mt-10 md:p-12 lg:p-16 xl:p-40">
      <h2 className="text-[32px] font-crimson md:text-[48px] lg:text-[58px]">
        About me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-8 xl:auto-rows-fr gap-6 mt-8 md:mt-12">
        {/* Brain card */}
        <div className="flex flex-col justify-center items-center xl:col-span-4 gap-8 py-10 relative bg-[linear-gradient(to_bottom,_rgba(255,165,133,0.4)_0%,_rgba(255,165,133,0.3)_85%,_rgba(255,237,160,0.5)_110%)] shadow-sm rounded-xl p-6 xl:p-0 min-h-[350px]">
          <Image
            src="/brain.svg"
            alt="Brain icon"
            width={120}
            height={210}
            className="xl:self-start"
          />
          <p className="font-crimson italic text-[28px] lg:text-[35px] xl:text-[36px] text-center">
            I’m Ulas — a fullstack JavaScript developer who also loves crafting
            clean and intuitive UI/UX.
          </p>
          <GradientButton
            className="absolute top-[-10%] right-0 xl:right-[70%] xl:top-[-5%] -rotate-12 md:right-[50%]"
            text="Who am I ?"
            size="lg"
          />
        </div>

        {/* Card build together */}
        <div className="relative flex flex-col justify-center items-center gap-8 shadow-sm rounded-xl py-12 xl:col-span-2 min-h-[350px]">
          <GradientButton
            className="absolute -rotate-12 top-[-3%] left-0"
            text="Let's work together"
            size="lg"
          />
          <Image src="/rocket.svg" alt="Rocket icon" width={120} height={120} />
          <p className="font-crimson text-[28px] lg:text-[35px] xl:text-[30px] text-center">
            Let’s build something <br /> great together.
          </p>
          <GradientButton className="rotate-12" text="Copy Email" size="lg" />
        </div>

        {/* Card 3  */}
        <div className="bg-gradient-to-l from-[#FFA585]/80 to-[#FFEDA0]/80 shadow-sm xl:col-span-2 rounded-xl py-12 flex flex-col justify-center items-center min-h-[350px]">
          <p className="font-crimson italic text-[28px] lg:text-[35px] xl:text-[32px] text-center">
            Great design starts <br /> with empathy.
          </p>
          <br />
          <p className="p-2 font-crimson italic text-[28px] lg:text-[35px] xl:text-[32px] text-center">
            From sketch to final product — I do it all.
          </p>
        </div>

        {/* Languages */}
        <div className="xl:col-span-2 shadow-sm rounded-xl relative min-h-[350px] flex flex-col justify-center items-center">
          <div className="relative overflow-hidden rounded-xl w-full h-full flex flex-col justify-center items-center gap-8">
            <Image
              src="/blob-blur.svg"
              alt="Blob icon"
              fill
              className="absolute w-full h-full object-cover -z-10"
            />
            <div className="flex flex-col gap-4 lg:gap-6 font-fredoka font-semibold text-[30px] lg:text-[35px] text-[#3C3C3C]">
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

        {/* Final card */}
        <div
          className="shadow-sm rounded-xl flex justify-center items-center relative py-12 px-6 md:col-span-2 xl:col-span-6 xl:col-start-1 xl:row-start-2
"
        >
          <p className="font-crimson italic text-[28px] lg:text-[35px] xl:text-[37px] text-center">
            I’m looking for a job where I can build efficient apps and <br />
            <span className="bg-gradient-to-r from-[#FFA585] to-[#FFEDA0] bg-clip-text text-transparent font-fredoka font-bold">
              grow my skills.
            </span>
          </p>
          <Image
            className="absolute top-0 left-0"
            src="/puzzle.svg"
            alt="Puzzle icon"
            width={250}
            height={200}
          />
          <Image
            className="absolute top-5 right-5"
            src="/circle.svg"
            alt="Mail icon"
            width={110}
            height={110}
          />
        </div>
      </div>
    </section>
  );
}
