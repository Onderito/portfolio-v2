import React from "react";
import Image from "next/image";

export default function MyProjects() {
  const projects = [
    {
      name: "Sealocker app",
      image: "/webflow-img.svg",
      by: "No code + UI/UX",
      text: "I designed and built a fully responsive website with Webflow, using native CMS features for structured content and integrating custom animations with GSAP",
      url: "https://www.sealocker.com",
      firstTag: "Webflow",
      firstTextColor: "rgba(80, 167, 255, 0.4)",
      firstBgColor: "rgba(11, 102, 194, 0.1)",
      secondTag: "G-sap",
      secondTextColor: "rgba(136, 206, 2, 0.4)",
      secondBgColor: "rgba(136, 206, 2, 0.1)",
    },
    {
      name: "Tripgather",
      image: "/angular-spring-img.svg",
      by: "coding",
      text: "I designer and built a fully responsive website with Angular and Spring",
      url: "https://www.devcsi.com",
      firstTag: "Angular",
      firstTextColor: "rgba(229, 58, 54, 0.4)",
      firstBgColor: "rgba(231, 62, 57, 0.1)",
      secondTag: "Spring",
      secondTextColor: "rgba(136, 206, 2, 0.4)",
      secondBgColor: "rgba(136, 206, 2, 0.1)",
    },
    {
      name: "My first portfolio",
      image: "/react-img.svg",
      by: "coding",
      text: "A clean and responsive portfolio built with React & Tailwind — my first step into web development.",
      url: "https://www.ubby.com",
      firstTag: "React",
      firstTextColor: "rgba(80, 167, 255, 0.4)",
      firstBgColor: "rgba(11, 102, 194, 0.1)",
      secondTag: "Tailwind",
      secondTextColor: "rgba(80, 167, 255, 0.4)",
      secondBgColor: "rgba(11, 102, 194, 0.1)",
    },
  ];
  return (
    <section className="p-4 md:p-12 mt-10  relative overflow-hidden">
      <h2 className="text-[32px] md:text-[48px] font-crimson">My projects</h2>
      <ul className="flex flex-col gap-8 mt-8">
        {projects.map((project, index) => (
          <li
            className="shadow-sm rounded-xl font-crimson bg-white "
            key={index}
          >
            <Image
              src={project.image}
              alt="Project image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-cover p-4 md:p-6"
            />
            <div className="flex flex-col p-4 md:p-6 pb-4">
              <h3 className="font-fredoka text-[25px] md:text-[35px]">
                {project.name}
              </h3>
              <p className="text-[#B5B5B5] text-[18px] font-fredoka md:text-[22px] italic">
                {project.by}
              </p>
              <p className="mt-5 text-[19px] md:text-[24px] font-fredoka font-light ">
                {project.text}
              </p>
              <div className="flex gap-2 mt-6">
                <span
                  style={{
                    backgroundColor: project.firstBgColor,
                    color: project.firstTextColor,
                  }}
                  className="px-4 py-1 rounded-full text-[20px] md:text-[25px] font-fredoka font-semibold"
                >
                  {project.firstTag}
                </span>
                <span
                  style={{
                    backgroundColor: project.secondBgColor,
                    color: project.secondTextColor,
                  }}
                  className="px-3 py-1 rounded-full text-[20px] md:text-[25px] font-fredoka font-semibold"
                >
                  {project.secondTag}
                </span>
              </div>
              <button className="mt-8 text-[22px] md:text-[26px] inset-shadow-sm inset-shadow-[#FFA585] font-medium font-fredoka py-2 rounded-xl">
                See a project
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Image
        src={"/little-blob-blur.svg"}
        alt="Little blob"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto object-cover absolute bottom-0 -z-10"
      />
      <Image
        src={"/big-blob-blur.svg"}
        alt="Big blob"
        width={0}
        height={0}
        className="w-full h-auto object-cover absolute top-10 left-0 -z-10"
      />
    </section>
  );
}
