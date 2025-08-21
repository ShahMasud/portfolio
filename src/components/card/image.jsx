import React from "react";
import { motion } from "framer-motion";
import { closeSpring, openSpring } from "./animations";

export const Image = ({ isSelected, backgroundColor, pointOfInterest }) => {
  const x = isSelected ? 30 : 15;
  const y = x;

  return (
    <motion.div
      className="image-container"
      initial={false}
      animate={{ x, y }}
      transition={isSelected ? openSpring : closeSpring}
      style={{
        backgroundColor,
        originX: 0,
        originY: 0
      }}
    >
      <div
        className="image"
        style={{
          background: backgroundColor,
          transformOrigin: "0 0",
          transform: `translate(${pointOfInterest}px, 0)`
        }}
      />
    </motion.div>
  );
};
