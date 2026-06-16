import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { initHero } from "./hero";
import { initFeatures } from "./features";
import { initAbout } from "./about";
import { initAdvantages } from "./advantages";
import { initPricing } from "./pricing";
import { initLocation } from "./location";
import { initContact } from "./contact";
import { initFooter } from "./footer";

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  initHero();

  initFeatures();

  initAbout();

  initAdvantages();

  initPricing();

  initLocation();

  initContact();

  initFooter();
}
