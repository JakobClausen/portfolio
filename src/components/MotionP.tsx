import { motion } from "framer-motion";
import React from "react";

interface MotionPProps {
  className: string;
  payload: string;
}

export const MotionP: React.FC<MotionPProps> = ({
  className,
  payload,
  ...props
}) => {
  return (
    <motion.p
      {...props}
      className={className}
      transition={{
        type: "spring",
        delay: 0.2,
        duration: 1,
      }}
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {payload}
    </motion.p>
  );
};
