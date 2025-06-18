"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function MyProjects() {
  const [swiperInstance, setSwiperInstance] = React.useState<any>(null);
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
      name: "My first portfolio",
      image: "/portfolio-img.svg",
      text: "My very first personal portfolio as a web developer. I built it with React and Tailwind CSS to showcase my projects and skills. I focused on clean design, accessibility, and responsiveness. It served as a stepping stone in my transition into full-time development.",
      url: "https://onderulas-portfolio.vercel.app/",
    },
  ];

  return (
    <section className="mt-10 p-4 md:p-12 lg:p-16 xl:px-40 relative overflow-hidden">
      <h2 className="text-[32px] md:text-[48px] lg:text-[58px] font-crimson">
        My projects
      </h2>

      {/* Version Carousel visible en xl */}
      <div className="hidden xl:block">
        <button
          disabled={isBeginning}
          className="my-prev-button absolute left-20 top-1/2 -translate-y-1/2 z-10 px-4 py-2 bg-white shadow-md text-black rounded-xl font-shantell cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-300  "
        >
          Prev
        </button>
        <button
          disabled={isEnd}
          className="my-next-button absolute right-20 top-1/2 -translate-y-1/2 z-10 px-4 py-2 bg-[#2B2B2B] shadow-md text-white rounded-xl font-shantell cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-300"
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
            setSwiperInstance(swiper);
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
                  <h3 className="font-shantell text-[35px]">{project.name}</h3>
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
      <div className="block xl:hidden">
        {projects.map((project, index) => (
          <div key={index} className="border border-[#EBEBEB] rounded-xl mt-6">
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
    </section>
  );
}
