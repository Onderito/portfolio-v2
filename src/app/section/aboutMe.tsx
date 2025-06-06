import React from "react";
import Image from "next/image";
import GradientButton from "../components/button";

export default function AboutMe() {
  return (
    <section className="p-4 mt-10">
      <h2 className="text-[32px] font-crimson">About me</h2>
      <div className="flex flex-col gap-6">
        <div className=" flex flex-col justify-center items-center gap-8 py-10 relative bg-[linear-gradient(to_bottom,_rgba(255,165,133,0.4)_0%,_rgba(255,165,133,0.3)_85%,_rgba(255,237,160,0.5)_110%)] shadow-sm rounded-xl p-6 mt-4">
          <Image src={"/brain.svg"} alt="Brain icon" width={120} height={210} />
          <p className="font-crimson italic text-[26px] text-center">
            I’m Ulas — a fullstack JavaScript developer who also loves crafting
            clean and intuitive UI/UX.
          </p>

          <GradientButton
            className="absolute top-[-10%] right-0 rotate-12"
            text="Who am I ?"
            size="sm"
          />
        </div>

        <div className=" relative flex flex-col justify-center items-center gap-8 shadow-sm rounded-xl py-8">
          <GradientButton
            className="absolute -rotate-12 top-[-3%] left-0"
            text="Let's work together"
            size="md"
          />
          <Image
            src={"/rocket.svg"}
            alt="Rocket icon"
            width={120}
            height={120}
          />
          <p className="font-crimson text-[26px] text-center">
            Let’s build something <br /> great together.
          </p>
          <GradientButton className="rotate-12" text="Copy Email" size="md" />
        </div>
        <div className="bg-gradient-to-l from-[#FFA585]/80 from-0% to-[#FFEDA0]/80 to-100% shadow-sm rounded-xl py-12">
          <p className="font-crimson italic text-[28px] text-center">
            Great design starts <br /> with empathy.
          </p>
          <br />
          <br />
          <p className=" p-2 font-crimson italic text-[28px] text-center">
            From sketch to final product — <br /> I do it all.
          </p>
        </div>
      </div>
    </section>
  );
}
