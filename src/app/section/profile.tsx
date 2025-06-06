import React from "react";
import Image from "next/image";

export default function Profile() {
  return (
    <div>
      <Image
        src="/little-noise.svg"
        alt="Profile picture"
        width={300}
        height={152}
        className="rounded-full absolute right-[-10%] top-[-2%]"
      />
      <section className="p-4 pt-20">
        <Image
          src="/profile.svg"
          alt="Profile picture"
          width={150}
          height={142}
          className=""
        />
        <div>
          <h1 className="font-crimson text-[30px] mt-4">
            Hey, I'm Ulas Önder.
          </h1>
          <div className="relative">
            <h2 className="font-crimson text-[30px]">
              Developer fullstack &{" "}
              <span className="font-fredoka font-bold shadow-md p-2 text-[30px] rounded-2xl bg-gradient-to-r from-[#FFA585] to-[#FFEDA0] bg-clip-text text-transparent border-2 border-double border-[#FFEDA0]">
                Ux/Ui
              </span>{" "}
              <Image
                className="absolute top-[-30%] right-0"
                src={"/pin.svg"}
                alt="Pin icon"
                width={40}
                height={40}
              />
              designer
            </h2>
          </div>
          <p className="text-[16px] mt-2 text-neutral-700 max-w-md">
            I code like a dev and think like a designer. Always curious, always
            building.
          </p>
          <div className="mt-6 font-crimson text-[22px] flex gap-3">
            <button className="text-white shadow-md inset-shadow-md bg-[#2F2F2F] rounded-lg p-3 ">
              See my projects
            </button>
            <button className="text-[#0B66C2] shadow-xs inset-shadow-lg bg-[#0B66C2]/20 rounded-full p-3 ">
              Linkedin
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
