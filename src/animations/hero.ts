import gsap from "gsap";

export function initHero() {
  const eyebrow = document.querySelector('[data-animate="hero-eyebrow"]');

  const title = document.querySelector('[data-animate="hero-title"]');

  const subtitle = document.querySelector('[data-animate="hero-subtitle"]');

  const cta = document.querySelector('[data-animate="hero-cta"]');

  if (!eyebrow || !title || !subtitle || !cta) return;

  const tl = gsap.timeline();

  tl.from(eyebrow, {
    opacity: 0,
    y: 24,
    duration: 0.8,
    ease: "power3.out",
  });

  tl.from(
    title,
    {
      opacity: 0,
      y: 32,
      duration: 1,
      ease: "power3.out",
    },
    "-=0.4",
  );

  tl.from(
    subtitle,
    {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.5",
  );

  tl.from(
    cta,
    {
      opacity: 0,
      y: 16,
      duration: 0.7,
      ease: "power3.out",
    },
    "-=0.3",
  );
}
