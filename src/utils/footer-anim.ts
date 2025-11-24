// Updated footer-anim.ts with reduced font size for .footer-big-text
import $ from 'jquery';
import { gsap } from 'gsap';
import { SplitText, chroma } from '@/plugins';

function footerOneAnimation() {
  if (typeof window !== 'undefined') {
    document
      .querySelectorAll(".tp-text-anim > li > a")
      .forEach(
        (button) =>
        (button.innerHTML =
          '<div class="tp-menu-text"><span>' +
          (button.textContent!.split("").join("</span><span>")) +
          "</span></div>")
      );

    setTimeout(() => {
      const menuText = document.querySelectorAll<HTMLSpanElement>(".tp-menu-text span");
      menuText.forEach((item) => {
        const fontSizes = window.getComputedStyle(item, null);
        let fontSize = fontSizes.getPropertyValue("font-size");
        let sizeInNumber = parseInt(fontSize.replace("px", ""));
        let newSize = String(sizeInNumber / 3);
        newSize = newSize + "px";
        if (item.innerHTML === " ") {
          item.style.width = newSize;
        }
      });
    }, 1000);
  }
}

function footerTwoAnimation() {
  if (document.querySelector('.footer-big-text')) {
    let cta = gsap.timeline({
      repeat: -1,
      delay: 0.5,
      scrollTrigger: {
        trigger: '.footer-big-text',
        start: 'bottom 100%-=50px'
      }
    });

    gsap.set('.footer-big-text', {
      opacity: 0
    });

    gsap.to('.footer-big-text', {
      opacity: 1,
      duration: 1,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.footer-big-text',
        start: 'bottom 100%-=50px',
        once: true
      }
    });

    let mySplitText = new SplitText(".footer-big-text", { type: "words,chars" });
    let chars = mySplitText.chars;
    let endGradient = (chroma as any).scale(['#FFF', '#FFF', '#FFF', '#FFF', '#FFF']);

    // Reduce font size by 20% - adjust this value as needed
    const footerBigTextElement = document.querySelector('.footer-big-text') as HTMLElement;
    if (footerBigTextElement) {
      const currentFontSize = window.getComputedStyle(footerBigTextElement).fontSize;
      const currentSizeValue = parseFloat(currentFontSize);
      const reducedSize = currentSizeValue * 0.73; // 80% of original size
      footerBigTextElement.style.fontSize = `${reducedSize}px`;
    }

    cta.to(chars, {
      duration: 0.5,
      scaleY: 0.6,
      ease: "power1.out",
      stagger: 0.04,
      transformOrigin: 'center bottom'
    });
    cta.to(chars, {
      yPercent: -20,
      ease: "elastic",
      stagger: 0.03,
      duration: 0.8
    }, 0.5);
    cta.to(chars, {
      scaleY: 1,
      ease: "elastic.out",
      stagger: 0.03,
      duration: 1.5
    }, 0.5);
    cta.to(chars, {
      color: (i, el, arr) => {
        return endGradient(i / arr.length).hex();
      },
      ease: "power1.out",
      stagger: 0.03,
      duration: 0.3
    }, 0.5);
    cta.to(chars, {
      yPercent: 0,
      ease: "back",
      stagger: 0.03,
      duration: 0.8
    }, 0.7);
    cta.to(chars, {
      color: '#fff',
      duration: 1.4,
      stagger: 0.05
    });
  }
}

export {
  footerOneAnimation,
  footerTwoAnimation,
}