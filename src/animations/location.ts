import gsap from "gsap";

export function initLocation() {
  const layout = document.querySelector('[data-animate="location-layout"]');

  const content = document.querySelector('[data-animate="location-content"]');

  const cards = document.querySelectorAll('[data-animate="location-card"]');

  if (!layout || !content || !cards.length) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: layout,
      start: "top 80%",
      once: true,
    },
  });

  tl.from(content, {
    opacity: 0,
    y: 40,
    duration: 0.9,
    ease: "power3.out",
  });

  tl.from(
    cards,
    {
      opacity: 0,
      y: 30,
      stagger: 0.25,
      duration: 1,
      ease: "power3.out",
    },
    "-=0.4",
  );
}
