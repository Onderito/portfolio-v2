"use client";
import React, { useRef } from "react";
import Navbar from "./components/navbar";
import Profile from "./section/profile";
import Stack from "./section/stack";
import MyExperiences from "./section/myExperiences";
import MyProjects from "./section/myProjects";
import Footer from "./components/footer";
import Services from "./section/services";

export default function Home() {
  const homeRef = useRef<HTMLElement | null>(null);
  const servicesRef = useRef<HTMLElement | null>(null);
  const experiencesRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);

  const sections = [
    { label: "Home", icon: "/home.svg", alt: "Home", ref: homeRef },
    { label: "Services", icon: "/user.svg", alt: "Services", ref: servicesRef },
    {
      label: "My experiences",
      icon: "/bag.svg",
      alt: "Experience",
      ref: experiencesRef,
    },
    {
      label: "Projects",
      icon: "/folder.svg",
      alt: "Projects",
      ref: projectsRef,
    },
  ];
  return (
    <div>
      {/* Contenu principal avec padding-bottom pour la navbar */}
      <main className="pb-24 min-h-screen">
        <section ref={homeRef}>
          <Profile />
        </section>
        <Stack />
        <section ref={servicesRef}>
          <Services />
        </section>
        <section ref={experiencesRef}>
          <MyExperiences />
        </section>
        <section ref={projectsRef}>
          <MyProjects />
        </section>
        <Footer />
      </main>

      {/* Navbar fixe en bas */}
      <Navbar sections={sections} />
    </div>
  );
}
