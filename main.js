import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//==========Hero section============
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

//==========About section============
gsap.from(".about__text-heading", {
  x: 100,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".about__text-heading",
    start: "top 80%",
    end: "80% center",
    scrub: true,
    // markers: true,
  },
});

gsap.from(".about__heading", {
  y: 150,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".about__text-heading",
    start: "top 80%",
    end: "80% center",
    scrub: true,
  },
});

gsap.from(".about__card--1, .card-1-text", {
  y: 150,
  opacity: 0,
  duration: 1,
  stagger: 0.7,
  scrollTrigger: {
    trigger: ".about__text-heading",
    start: "10% 80%",
    end: "center 40%",
    scrub: true,
  },
});

gsap.from(".about__connection--1, .about__connection--2", {
  y: 150,
  opacity: 0,
  stagger: 0.7,
  scrollTrigger: {
    trigger: ".about__card--1",
    start: "-40% center",
    end: "top 30%",
    scrub: true,
  },
});

gsap.from(".about__card--2, .card-2-text", {
  x: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.7,
  scrollTrigger: {
    trigger: ".about__card--1",
    start: "-40% center",
    end: "top 30%",
    scrub: true,
  },
});

gsap.from(".about__card--3, .card-3-text", {
  x: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.7,
  scrollTrigger: {
    trigger: ".about__card--1",
    start: "-40% center",
    end: "top 30%",
    scrub: true,
  },
});
