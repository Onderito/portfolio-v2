import React from "react";
import Image from "next/image";

const navIcons = [
  { src: "/home.svg", alt: "Home icon" },
  { src: "/bag.svg", alt: "Bag icon" },
  { src: "/folder.svg", alt: "Folder icon" },
  { src: "/user.svg", alt: "User icon" },
];

export default function Navbar() {
  return (
    <div>
      <div className="lg:hidden ">
        <nav className="inset-shadow-2xs rounded-full fixed bottom-0 p-5 w-full ">
          <ul className="flex gap-4 items-center justify-around">
            {navIcons.map((icon, index) => (
              <li key={index}>
                <Image src={icon.src} alt={icon.alt} width={26} height={26} />
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="hidden lg:block ">
        <nav className="font-crimson border-[#DDDDDD] border p-5 xl:p-8 rounded-2xl fixed right-[-1%] top-14 z-50 backdrop-blur-md bg-white/40  ">
          <ul className="flex items-center text-2xl xl:text-3xl divide-x divide-[#DDDDDD]">
            <li className="px-4">Home</li>
            <li className="px-4">About me</li>
            <li className="px-4">My experiences</li>
            <li className="px-4">My projects</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
