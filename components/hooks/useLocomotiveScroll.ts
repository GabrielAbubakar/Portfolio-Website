import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

export const useLocomotiveScroll = () => {
  const scrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    const scrollContainer = document.querySelector("[data-scroll-container]");

    if (scrollContainer) {
      scrollRef.current = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      });
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
      }
    };
  }, []);

  return scrollRef;
};
