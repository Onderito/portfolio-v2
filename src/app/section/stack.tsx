import React from "react";
import Image from "next/image";

export default function Stack() {
  const stack = [
    { src: "/webflow.svg", alt: "Webflow icon" },
    { src: "/figma.svg", alt: "Figma icon" },
    { src: "/react.svg", alt: "React icon" },
    { src: "/next.svg", alt: "Next.js icon" },
    { src: "/javascript.svg", alt: "JavaScript icon" },
    { src: "/angular.svg", alt: "Angular icon" },
    { src: "/gsap.svg", alt: "GSAP icon" },
    { src: "/typescript.svg", alt: "TypeScript icon" },
    { src: "/tailwind.svg", alt: "Tailwind CSS icon" },
    { src: "/node.svg", alt: "Node.js icon" },
    { src: "/mongo.svg", alt: "MongoDB icon" },
  ];

  const stackIcons = [...stack, ...stack]; // Duplicate the array

  return (
    <div className="overflow-hidden w-full py-4 mt-20">
      <ul className="flex justify-center items-center animate-marquee gap-14 xl:gap-28 min-w-max ">
        {stackIcons.map((icon, index) => (
          <li key={index}>
            <Image
              src={icon.src}
              alt={icon.alt}
              width={0}
              height={0}
              className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] xl:w-[80px] xl:h-[80px] object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
