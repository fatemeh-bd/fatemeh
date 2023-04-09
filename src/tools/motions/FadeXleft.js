import React from "react";
import { motion } from "framer-motion";
const FadeXleft = ({ component, delay }) => {
  const cardVariants = {
    offscreen: {
      x: -120,
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
    viewport={{ once: true}}
      variants={cardVariants}
    >
      {component}
    </motion.div>
  );
};

export default FadeXleft;
