import gsap from "gsap";

export function initFooter() {
  const divider = document.querySelector('[data-animate="footer-divider"]');

  if (!divider) return;

  gsap.from(divider, {
    scaleX: 0,

    transformOrigin: "center center",

    duration: 1.2,

    ease: "power2.out",

    scrollTrigger: {
      trigger: divider,
      start: "top 90%",
      once: true,
    },
  });
}
