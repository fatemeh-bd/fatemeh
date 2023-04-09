import React from "react";
import { motion } from "framer-motion";
const FadeX = ({ component, delay }) => {
  const cardVariants = {
    offscreen: {
      x: 120,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay ? delay : 0,
        type: "spring",
        duration: 2,
      },
    },
  };
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariants}
    viewport={{ once: true}}
    >
      {component}
    </motion.div>
  );
};

export default FadeX;
