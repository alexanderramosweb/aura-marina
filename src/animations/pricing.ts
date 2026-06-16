import gsap from "gsap";

export function initPricing() {
  const grid = document.querySelector('[data-animate="pricing-grid"]');

  const title = document.querySelector('[data-animate="pricing-title"]');

  const cards = document.querySelectorAll('[data-animate="pricing-card"]');

  if (!grid || !title || !cards.length) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: grid,
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
      y: 30,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
    },
    "-=0.3",
  );
}
