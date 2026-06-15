import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initFeatures() {
  const wrapper = document.querySelector('[data-animate="features-wrapper"]');

  const cards = document.querySelectorAll('[data-animate="feature-card"]');

  if (!wrapper || !cards.length) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapper,
      start: "top 80%",
      once: true,
    },
  });

  tl.from(wrapper, {
    opacity: 0,
    y: 30,
    duration: 0.9,
    ease: "power3.out",
  });

  tl.from(
    cards,
    {
      opacity: 0,
      y: 20,
      stagger: 0.12,
      duration: 0.6,
      ease: "power3.out",
    },
    "-=0.4",
  );
}
