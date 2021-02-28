import { motion } from "framer-motion";
import React from "react";

interface MotionPProps {
  className: string;
  layoutId: string;
  payload: string;
}

export const MotionP: React.FC<MotionPProps> = ({
  className,
  layoutId,
  payload,
  ...props
}) => {
  return (
    <motion.p
      {...props}
      className={className}
      layoutId={layoutId}
      initial={{ x: "50%", opacity: 0 }}
      animate={{ x: "100%", opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {payload}
    </motion.p>
  );
};
