import { useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export function useInvertedBorderRadius(radius) {
  const scaleX = useMotionValue(1);
  const scaleY = useMotionValue(1);

  // Invert scale manually (instead of useInvertedScale)
  const invertedScaleX = useTransform(scaleX, (v) => 1 / v);
  const invertedScaleY = useTransform(scaleY, (v) => 1 / v);

  const borderRadius = useMotionValue(`${radius}px`);

  useEffect(() => {
    function updateRadius() {
      const latestX = invertedScaleX.get();
      const latestY = invertedScaleY.get();
      const xRadius = latestX * radius + "px";
      const yRadius = latestY * radius + "px";

      borderRadius.set(`${xRadius} ${yRadius}`);
    }

    const unsubX = invertedScaleX.on("change", updateRadius);
    const unsubY = invertedScaleY.on("change", updateRadius);

    return () => {
      unsubX();
      unsubY();
    };
  }, [radius, invertedScaleX, invertedScaleY]);

  return {
    scaleX,
    scaleY,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  };
}
