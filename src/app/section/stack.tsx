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
    <div className="overflow-hidden w-full bg-white py-4 mt-20">
      <ul className="flex items-center animate-marquee gap-14 min-w-max ">
        {stackIcons.map((icon, index) => (
          <li key={index}>
            <Image src={icon.src} alt={icon.alt} width={50} height={50} />
          </li>
        ))}
      </ul>
    </div>
  );
}
