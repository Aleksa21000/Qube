import * as barba from "@barba/core";
import gsap from "gsap";

import nav from './nav';
import slider from './slider';
import preventReload from './preventReload';
import horizontalParallax from './horizontalParallax';

const pageTransition = () => {
  const tl1 = gsap.timeline({paused: true});

  tl1.fromTo(
    ".transition-container",
    {
      left: -1920
    },
    {
      left: 0,
      duration: .7,
      stagger: .3
    }
  );

  barba.init({
    timeout: 5000,
    debug: true,
    debugger: true,
    transitions: [
      {
        name: "default-transition",
        leave(data) {
          document.querySelector("body").classList.add("transitioning");
          return tl1.play();
        },

        beforeEnter(data) {},
        afterEnter() {
          setTimeout(() => {
            nav();
            slider();
            preventReload();
            horizontalParallax();
            return tl1.reverse();
          }, 0);
        },
      },
    ],
  });
}

export default pageTransition;