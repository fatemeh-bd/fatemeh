import React from "react";
import { motion } from "framer-motion";
const FadeY = ({ component, delay ,className}) => {
  const cardVariants = {
    offscreen: {
      y: 120,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay?delay:0,
        type: "spring",
        bounce: 0.4,
        duration: 2,
      },
    },
  };
  return (
    <motion.div
      className={`${className?className:""} card-container`}
      initial="offscreen"
      whileInView="onscreen"
    viewport={{ once: true}}
      variants={cardVariants}
    >
      {component}
    </motion.div>
  );
};

export default FadeY;
