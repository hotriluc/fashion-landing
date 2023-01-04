import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const heroImgTL = gsap.timeline();
const heroTextTL = gsap.timeline();

// Hero Text animations
heroTextTL.from(".hero__heading", { x: 100, opacity: 0, duration: 1 });
heroTextTL.from(".hero__content-text", {
  y: 70,
  opacity: 0,
  duration: 0.7,
});
heroTextTL.from(
  ".hero__contact-btn",
  {
    x: 100,
    opacity: 0,
    duration: 0.7,
  },
  "<"
);

// Hero cards animations
heroImgTL.from(".hero__card", {
  duration: 1,
  stagger: 0.5,
  y: 100,
  opacity: 0,
});
heroImgTL.from(
  ".hero__behind",
  { y: -100, opacity: 0, duration: 0.8 },
  "-=0.8"
);
