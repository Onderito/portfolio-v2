import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="p-4 mt-8 md:p-12 lg:p-16 xl:px-60 relative overflow-x-hidden ">
      <div className="bg-white/20 backdrop-blur-xs border border-white shadow-md rounded-lg p-6 md:p-8 lg:p-10 xl:py-20 z-10 relative ">
        <h2 className="font-shantell text-6xl md:text-8xl lg:text-9xl xl:text-[180px] md:pt-2 text-[#676767] text-center relative">
          Thank You <span className="text-[#FFA585]/27">!</span>
          <Image
            className="w-[50px] h-[50px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px] xl:w-[150px] xl:h-[150px] absolute top-[-55%] xl:top-[-45%] left-[-5%] xl:left-[-1%] "
            src="/highlight.svg"
            alt="Highlight"
            width={0}
            height={0}
          />
        </h2>

        <p className="relative text-center mt-2 lg:mt-6 font-crimson text-base md:text-2xl lg:text-4xl  ">
          Excited to collaborate together.
          <Image
            className="absolute left-20 md:left-45 xl:left-[32%] w-[100px] md:w-[200px] lg:w-[300px] "
            src="/line.svg"
            alt="Highlight"
            width={0}
            height={0}
          />
        </p>
      </div>
      <Image
        src="/little-noise.svg"
        alt="Profile picture"
        width={0}
        height={0}
        className="hidden xl:block w-[500px] right-[-10%] absolute bottom-50 z-0 "
      />
    </section>
  );
}
