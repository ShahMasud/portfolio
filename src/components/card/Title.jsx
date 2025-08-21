import React from "react";
import { motion } from "framer-motion";
import { closeSpring, openSpring } from "./animations";

export const Title = ({ title, category, isSelected }) => {
  const x = isSelected ? 30 : 15;
  const y = x;

  return (
    <motion.div
      className="title-container"
      initial={false}
      animate={{ x, y }}
      transition={isSelected ? openSpring : closeSpring}
      style={{ originX: 0, originY: 0 }}
    >
      <span className="category">{category}</span>
      <h2>{title}</h2>
    </motion.div>
  );
};
