import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import {
  performanceImages,
  performanceImgPositions,
} from "../constants/index.js";

const Performance = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      const mm = gsap.matchMedia();

      // Text Animation (All Screens)
      mm.add("all", () => {
        gsap.fromTo(
          ".content p",
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            ease: "power1.out",
            scrollTrigger: {
              trigger: ".content p",
              start: "top bottom",
              end: "top center",
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
      });

      const buildTimeline = (breakpoint) => {
        const tl = gsap.timeline({
          defaults: { duration: 2, ease: "power1.inOut", overwrite: "auto" },
          scrollTrigger: {
            trigger: sectionEl,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        performanceImgPositions.forEach((item) => {
          if (item.id === "p5") return;

          const selector = `.${item.id}`;
          const vars = {};

          let posData = item;
          if (breakpoint === "tablet" && item.tablet) posData = item.tablet;
          if (breakpoint === "mobile" && item.mobile) posData = item.mobile;

          if (typeof posData.left === "number") vars.left = `${posData.left}%`;
          if (typeof posData.right === "number") vars.right = `${posData.right}%`;
          if (typeof posData.bottom === "number") vars.bottom = `${posData.bottom}%`;

          if (item.transform) vars.transform = item.transform;

          tl.to(selector, vars, 0);
        });
      };

      // Desktop Image Positioning
      mm.add("(min-width: 1025px)", () => {
        buildTimeline("desktop");
      });

      // Tablet Image Positioning
      mm.add("(min-width: 769px) and (max-width: 1024px)", () => {
        buildTimeline("tablet");
      });

      // Mobile Image Positioning
      mm.add("(max-width: 768px)", () => {
        buildTimeline("mobile");
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section id="performance" ref={sectionRef}>
      <h2>Next-level graphics performance. Game on.</h2>

      <div className="wrapper">
        {performanceImages.map((item, index) => (
          <img
            key={index}
            src={item.src}
            className={item.id}
            alt={item.alt || `Performance Image #${index + 1}`}
          />
        ))}
      </div>

      <div className="content mt-1">
        <p>
          Execute fluxos de trabalho intensivos com uma rapidez que acompanha
          sua imaginação. A família de chips M4 traz uma GPU com mecanismo de
          traçado de raios acelerado por hardware de segunda geração que
          renderiza imagens ainda mais rápido, para que{" "}
          <span className="text-white">
            os jogos fiquem mais imersivos e realistas do que nunca.
          </span>{" "}
          E o Cache Dinâmico otimiza a memória de alta velocidade no chip para
          aumentar drasticamente a utilização média da GPU, proporcionando um
          salto enorme de desempenho para os apps pro e jogos mais exigentes.
        </p>
      </div>
    </section>
  );
};

export default Performance;
