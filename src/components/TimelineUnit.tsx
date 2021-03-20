import { motion, MotionStyle } from "framer-motion";
import React from "react";

interface TimelineUnitProps {
  title: string;
  style: MotionStyle;
}

export const TimelineUnit: React.FC<TimelineUnitProps> = ({
  title,
  style: { width, ...restStyle },
}) => {
  return (
    <motion.div
      style={{
        display: "inline-block",
        width,
      }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {title}
      </motion.p>
      <motion.div
        style={{
          width: "100%",
          height: "15px",
          ...restStyle,
        }}
      />
    </motion.div>
  );
};
