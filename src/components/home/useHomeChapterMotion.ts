"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/lib/motion/usePrefersReducedMotion";

export function useHomeChapterMotion(rootRef: RefObject<HTMLElement | null>) {
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    const chapters = Array.from(
      root.querySelectorAll<HTMLElement>("[data-chapter]")
    );
    const reveals = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    if (reducedMotion) {
      chapters.forEach((chapter) => {
        chapter.dataset.motion = "ready";
        chapter.style.opacity = "1";
        chapter.style.transform = "none";
      });
      reveals.forEach((item) => {
        item.dataset.motion = "ready";
        item.style.opacity = "1";
        item.style.transform = "none";
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    chapters.forEach((chapter) => {
      chapter.dataset.motion = "pending";
    });
    reveals.forEach((item) => {
      item.dataset.motion = "pending";
    });

    const ctx = gsap.context(() => {
      chapters.forEach((chapter, index) => {
        const pin = chapter.dataset.pin === "true";
        const headline = chapter.querySelector("[data-chapter-headline]");
        const media = chapter.querySelector("[data-chapter-media]");

        gsap.set(chapter, { autoAlpha: 0, y: index === 0 ? 0 : 40 });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: chapter,
            start: "top 78%",
            end: pin ? "+=120%" : undefined,
            pin: pin,
            scrub: pin ? 0.6 : false,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
          onComplete: () => {
            chapter.dataset.motion = "ready";
          },
        });

        timeline.to(chapter, {
          autoAlpha: 1,
          y: 0,
          duration: pin ? 1 : 0.9,
          ease: "power2.out",
        });

        if (headline) {
          timeline.fromTo(
            headline,
            { y: 24, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out" },
            pin ? 0.15 : 0
          );
        }

        if (media) {
          timeline.fromTo(
            media,
            { scale: 1.06, autoAlpha: 0.85 },
            { scale: 1, autoAlpha: 1, duration: 1, ease: "power2.out" },
            pin ? 0.05 : 0.1
          );
        }
      });

      reveals.forEach((item) => {
        gsap.fromTo(
          item,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
            },
            onComplete: () => {
              item.dataset.motion = "ready";
            },
          }
        );
      });
    }, root);

    return () => {
      ctx.revert();
    };
  }, [reducedMotion, rootRef]);
}
