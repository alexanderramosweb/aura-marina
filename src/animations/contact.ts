import gsap from "gsap";

export function initContact() {
  const layout = document.querySelector('[data-animate="contact-layout"]');

  const content = document.querySelector('[data-animate="contact-content"]');

  const form = document.querySelector('[data-animate="contact-form"]');

  if (!layout || !content || !form) return;

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
    form,
    {
      opacity: 0,
      y: 30,
      duration: 0.9,
      ease: "power3.out",
    },
    "-=0.3",
  );
}
