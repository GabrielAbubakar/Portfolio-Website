import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

export const useLocomotiveScroll = () => {
  const scrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    scrollRef.current = new LocomotiveScroll();

    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
      }
    };
  }, []);

  return scrollRef;
};
