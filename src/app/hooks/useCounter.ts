"use client";
import { useState, useEffect, useRef } from "react";
import { useScrollAnimation } from "./useScrollAnimation";

export function useCounter(target: number, duration: number = 2000, suffix: string = "") {
  const { ref, isVisible } = useScrollAnimation();
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = 0;

    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      const current = Math.floor(startValue + (target - startValue) * easeOut);
      setCount(current);
      countRef.current = current;

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    updateCount();
  }, [isVisible, target, duration]);

  return { ref, count: count.toString() + suffix };
}
