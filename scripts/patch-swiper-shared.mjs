import { writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const swiperSharedDir = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "node_modules",
  "swiper",
  "shared",
);

if (!existsSync(join(swiperSharedDir, "utils.mjs"))) {
  process.exit(0);
}

const target = join(swiperSharedDir, "effect-virtual-transition-end.mjs");

const source = `import { o as elementTransitionEnd } from './utils.mjs';

function effectVirtualTransitionEnd({
  swiper,
  duration,
  transformElements,
  allSlides,
}) {
  const { activeIndex } = swiper;
  const getSlide = (el) => {
    if (!el.parentElement) {
      const slide = swiper.slides.find(
        (slideEl) => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode,
      );
      return slide;
    }
    return el.parentElement;
  };
  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let transitionEndTarget;
    if (allSlides) {
      transitionEndTarget = transformElements;
    } else {
      transitionEndTarget = transformElements.filter((transformEl) => {
        const el = transformEl.classList.contains('swiper-slide-transform')
          ? getSlide(transformEl)
          : transformEl;
        return swiper.getSlideIndex(el) === activeIndex;
      });
    }
    transitionEndTarget.forEach((el) => {
      elementTransitionEnd(el, () => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const evt = new window.CustomEvent('transitionend', {
          bubbles: true,
          cancelable: true,
        });
        swiper.wrapperEl.dispatchEvent(evt);
      });
    });
  }
}

export { effectVirtualTransitionEnd as e };
`;

writeFileSync(target, source, "utf8");
