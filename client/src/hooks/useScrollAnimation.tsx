import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const useScrollAnimation = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ 
        opacity: 1, 
        y: 0, 
        x: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut"
        }
      });
    }
  }, [controls, inView]);

  return { ref, controls, inView };
};
