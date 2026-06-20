import Lenis from "lenis";

export function initSmoothScroll() {
  const lenis = new Lenis({
    duration: 5,
    smoothWheel: true,
    anchors: true,
  });

  function raf(time: number) {
    lenis.raf(time);

    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
