import React from "react";
import Image from "next/image";
import GradientButton from "../components/button";

export default function AboutMe() {
  return (
    <section className="p-4 mt-10 md:p-12">
      <h2 className="text-[32px] font-crimson md:text-[48px]">About me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:mt-12">
        <div className=" flex flex-col justify-center items-center gap-8 py-10 relative bg-[linear-gradient(to_bottom,_rgba(255,165,133,0.4)_0%,_rgba(255,165,133,0.3)_85%,_rgba(255,237,160,0.5)_110%)] shadow-sm rounded-xl p-6 mt-4">
          <Image src={"/brain.svg"} alt="Brain icon" width={120} height={210} />
          <p className="font-crimson italic text-[28px] text-center">
            I’m Ulas — a fullstack JavaScript developer who also loves crafting
            clean and intuitive UI/UX.
          </p>

          <GradientButton
            className="absolute top-[-10%] right-0 -rotate-12 md:right-[50%]"
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
          <p className="font-crimson text-[28px] text-center">
            Let’s build something <br /> great together.
          </p>
          <GradientButton className="rotate-12" text="Copy Email" size="md" />
        </div>
        <div className="bg-gradient-to-l from-[#FFA585]/80 from-0% to-[#FFEDA0]/80 to-100% shadow-sm rounded-xl py-12 md:flex md:flex-col md:justify-center md:items-center ">
          <p className="font-crimson italic text-[28px] text-center">
            Great design starts <br /> with empathy.
          </p>
          <br />
          <br />
          <p className=" p-2 font-crimson italic text-[28px] text-center">
            From sketch to final product — <br /> I do it all.
          </p>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden flex flex-col justify-center items-center gap-8 shadow-sm rounded-xl py-30">
            <Image
              src="/blob-blur.svg"
              alt="Blob icon"
              fill
              className="absolute w-full h-full object-cover -z-10"
            />
            <div className="flex flex-col gap-4 font-fredoka font-semibold text-[30px] text-[#3C3C3C]">
              <button className="border-2 border-white rounded-3xl px-8 py-1 shadow-md  backdrop-blur-2xl bg-white/25">
                French
              </button>
              <button className="border-2 border-white rounded-3xl px-8 py-1  shadow-md  backdrop-blur-2xl bg-white/25">
                English
              </button>
              <button className="border-2 border-white rounded-3xl px-8 py-1  shadow-md  backdrop-blur-2xl bg-white/25">
                Turkish
              </button>
            </div>
          </div>
          <GradientButton
            className="rotate-10 absolute bottom-[-2%] left-0"
            text="Languages"
            size="md"
          />
        </div>
        <div className="shadow-sm rounded-xl flex justify-center items-center relative py-34 md:col-span-2">
          <p className="font-crimson italic text-[28px] text-center">
            I’m looking for a job where I can build efficient apps and <br />{" "}
            <span className="bg-gradient-to-r from-[#FFA585] to-[#FFEDA0] bg-clip-text text-transparent font-fredoka font-bold">
              grow my skills.
            </span>
          </p>
          <Image
            className="absolute bottom-0 right-0"
            src={"/mail.svg"}
            alt="Mail icon"
            width={95}
            height={95}
          />
          <Image
            className="absolute top-0 left-0"
            src={"/phone.svg"}
            alt="Phone icon"
            width={95}
            height={95}
          />
          <Image
            className="absolute top-5 right-5"
            src={"/circle.svg"}
            alt="Mail icon"
            width={110}
            height={110}
          />
        </div>
      </div>
    </section>
  );
}
