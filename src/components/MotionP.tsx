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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {payload}
    </motion.p>
  );
};
