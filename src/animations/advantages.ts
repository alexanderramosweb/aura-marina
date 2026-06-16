import gsap from "gsap";

export function initAdvantages() {
  const layout = document.querySelector('[data-animate="advantages-layout"]');

  const title = document.querySelector('[data-animate="advantages-title"]');

  const cards = document.querySelectorAll('[data-animate="advantage-card"]');

  if (!layout || !title || !cards.length) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: layout,
      start: "top 80%",
      once: true,
    },
  });

  tl.from(title, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out",
  });

  tl.from(
    cards,
    {
      opacity: 0,
      y: 24,
      stagger: 0.12,
      duration: 0.7,
      ease: "power3.out",
    },
    "-=0.3",
  );
}
