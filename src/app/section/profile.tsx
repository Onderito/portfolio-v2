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
        className=" w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full absolute right-[-10%] top-[-10%] "
      />
      <section className="p-4 pt-20 md:p-12">
        <Image
          src="/profile.svg"
          alt="Profile picture"
          width={0}
          height={0}
          className="w-[150px] h-[142px] md:w-[180px] md:h-[182px]"
        />

        <div>
          <h1 className="font-crimson text-[44px] mt-4 md:text-[60px]">
            Hey, I'm Ulas Önder.
          </h1>
          <div>
            <h2 className="font-crimson text-[32px] md:text-[44px]">
              Developer fullstack &{" "}
              <span className="relative font-fredoka font-bold shadow-md p-2 text-[30px] rounded-2xl bg-gradient-to-r from-[#FFA585] to-[#FFEDA0] bg-clip-text text-transparent border-2 border-double border-[#FFEDA0]">
                Ux/Ui
                <Image
                  className=" w-[40px] h-[40px] absolute top-[-46%] right-[-28%]"
                  src={"/pin.svg"}
                  alt="Pin icon"
                  width={0}
                  height={0}
                />
              </span>{" "}
              designer
            </h2>
          </div>
          <p className="text-[16px] font-fredoka font-light mt-2 text-neutral-700 max-w-md md:max-w-2xl md:text-[24px]">
            I code like a dev and think like a designer. Always curious, always
            building.
          </p>
          <div className="mt-6 font-crimson text-[22px] flex gap-3">
            <button className="text-white shadow-md inset-shadow-md bg-[#2F2F2F] rounded-lg p-3 md:p-4">
              See my projects
            </button>
            <button className="text-[#0B66C2] shadow-xs inset-shadow-lg bg-[#0B66C2]/20 rounded-full p-3 md:p-4">
              Linkedin
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
