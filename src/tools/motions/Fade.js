import React from "react";
import { motion } from "framer-motion";
const Fade = ({ component, delay }) => {
  const cardVariants = {
    offscreen: {
   
      opacity: 0,
    },
    onscreen: {
  
      opacity: 1,
      transition: {
        delay: delay ? delay : 0,
        type: "spring",
        duration: 3,
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

export default Fade;
