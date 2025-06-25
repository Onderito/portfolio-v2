"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function MyProjects() {
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);
  const projects = [
    {
      name: "Tripgather",
      image: "/tripgather-img.svg",
      text: "A complete travel planning platform where I led the frontend development with Angular and handled backend integration using Spring Boot. I focused on building reusable components, smooth user experience, and responsive layouts. The app allows users to collaboratively organize trips and share itineraries in real-time.",
      url: "https://tripgather.wcs-students.fr/home",
    },
    {
      name: "Sealocker app",
      image: "/sealocker-img.svg",
      text: "A marketing website for a startup that provides smart lockers for water sports. I designed and developed the site in Webflow, using CMS collections for scalable content. I also integrated custom GSAP animations for smooth transitions, enhancing the premium feel of the brand.",
      url: "https://www.sealocker.fr/",
    },
    {
      name: "Pokedex",
      image: "/pokedex-img.svg",
      text: "A Pokedex app built with Angular, utilizing the PokeAPI to fetch and display Pokemon data. I implemented features like search, filtering, and pagination, focusing on performance and user experience. The app showcases my skills in frontend development and API integration.",
      url: "https://pokemon-app-ang.vercel.app/",
    },
  ];

  return (
    <section className="mt-10 p-4 md:p-12 lg:p-16 xl:px-60 relative overflow-hidden">
      <div className="flex justify-center items-center">
        <Image
          className="bg-[#2F2F2F] rotate-12 rounded-xl border-2 border-[#0B0B0B] mr-4 xl:mr-6 w-[45px] h-[45px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px]"
          src="/laptop.svg"
          alt="Laptop"
          width={0}
          height={0}
        />
        <h2 className="text-[28px] md:text-[48px] lg:text-[58px] xl:text-[64px] text-center font-crimson">
          My Creative{" "}
          <span className="bg-[#FFA585]/50 text-[#FFA585] border border-[#FFA585] p-2 font-shantell rounded-lg relative overflow-hidden">
            Journey
            <Image
              src="/ellipse.svg"
              alt="Eclipse background"
              width={566}
              height={380}
              className="absolute inset-0 z-0 w-full object-cover rounded-lg"
            />
          </span>
        </h2>
      </div>

      {/* Version Carousel visible en xl */}
      <div className="hidden xl:block mt-8 md:mt-12 xl:mt-10">
        <button
          disabled={isBeginning}
          className="my-prev-button absolute left-40 top-1/2 -translate-y-1/2 z-10 px-4 py-2 bg-white shadow-md text-black rounded-xl font-shantell cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-300  "
        >
          Prev
        </button>
        <button
          disabled={isEnd}
          className="my-next-button absolute right-40 top-1/2 -translate-y-1/2 z-10 px-4 py-2 bg-[#2B2B2B] shadow-md text-white rounded-xl font-shantell cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-300"
        >
          Next
        </button>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".my-next-button",
            prevEl: ".my-prev-button",
          }}
          spaceBetween={40}
          slidesPerView={1}
          onSwiper={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="border border-[#EBEBEB] rounded-xl mt-6">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={1000}
                  height={500}
                  className="w-full h-auto py-4 px-4"
                />
                <div className="px-4">
                  <h3 className="font-crimson text-[35px]">{project.name}</h3>
                  <p className="text-[#6B6B6B] text-[18px] mt-1">
                    {project.text}
                  </p>
                  <button className="py-3 bg-[#323232] font-crimson text-[20px] rounded-lg text-white px-6 mb-4 mt-6 shadow-orange hover:shadow-none transition-all duration-600 cursor-pointer">
                    <a target="_blank" href={project.url}>
                      See my project
                    </a>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Version en liste visible jusqu’à lg */}
      <div className="relative block xl:hidden">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-[#EBEBEB] rounded-xl mt-8 md:mt-12 xl:mt-20"
          >
            <Image
              src={project.image}
              alt={project.name}
              width={1000}
              height={500}
              className="w-full h-auto py-4 px-4"
            />
            <div className="px-4">
              <h3 className="font-shantell text-[24px]">{project.name}</h3>
              <p className="text-[#6B6B6B] text-[14px] mt-1 ">{project.text}</p>
              <button className="py-3 bg-[#323232] font-crimson text-[16px] rounded-lg text-white px-6 mb-4 mt-4 shadow-orange hover:shadow-none transition-all duration-600 cursor-pointer">
                <a href={project.url}>See my project</a>
              </button>
            </div>
          </div>
        ))}
      </div>
      <Image
        src="/eclipse.png"
        alt="Eclipse background"
        width={566}
        height={380}
        className="hidden xl:blockabsolute bottom-[20%] right-[-20%] z-0"
      />
    </section>
  );
}
