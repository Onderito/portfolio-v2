import { gsap } from "gsap";
import React from "react";

export const animateProfileIntro = (refs: {
  title: React.RefObject<HTMLElement | null>;
  subtitle: React.RefObject<HTMLElement | null>;
  pin: React.RefObject<HTMLElement | null>;
  profile: React.RefObject<HTMLElement | null>;
  description: React.RefObject<HTMLElement | null>;
  button: React.RefObject<HTMLElement | null>;
  blob: React.RefObject<HTMLElement | null>;
}) => {
  const tl = gsap.timeline();

  if (refs.profile.current) {
    tl.from(refs.profile.current, {
      autoAlpha: 0,
      y: 60,
      x: -90,
      rotate: -25,
      duration: 1.2,
      ease: "power4.out",
    });
  }
  if (refs.blob.current) {
    tl.from(
      refs.blob.current,
      {
        opacity: 0,
        y: -100,
        rotate: -45,
        duration: 1.4,
        ease: "back.out(1.7)",
      },
      "-=0.7"
    );
  }
  if (refs.title.current) {
    tl.from(
      refs.title.current,
      {
        opacity: 0,
        y: 60,
        x: -90,
        duration: 1.2,
        ease: "power4.out",
      },
      "-=0.8"
    );
  }
  if (refs.subtitle.current) {
    tl.from(
      refs.subtitle.current,
      {
        opacity: 0,
        y: 60,
        x: -90,
        duration: 1.2,
        ease: "power4.out",
      },
      "-=0.8"
    );
  }
  if (refs.pin.current) {
    tl.from(
      refs.pin.current,
      {
        opacity: 0,
        y: -100,
        rotate: -45,
        duration: 1.4,
        ease: "back.out(1.7)",
      },
      "-=0.7"
    );
  }
  if (refs.description.current) {
    tl.from(
      refs.description.current,
      {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power4.out",
      },
      "-=0.6"
    );
  }
  if (refs.button.current) {
    tl.from(
      refs.button.current,
      {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power4.out",
      },
      "-=0.6"
    );
  }
};
