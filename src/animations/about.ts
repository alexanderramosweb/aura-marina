import gsap from "gsap";

export function initAbout() {
  const layout = document.querySelector('[data-animate="about-layout"]');

  const content = document.querySelector('[data-animate="about-content"]');

  const image = document.querySelector('[data-animate="about-image"]');

  if (!layout || !content || !image) return;

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
    image,
    {
      opacity: 0,
      x: 40,
      duration: 0.9,
      ease: "power3.out",
    },
    "-=0.4",
  );
}
