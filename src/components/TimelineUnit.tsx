import { background } from "@chakra-ui/styled-system";
import { motion, MotionStyle } from "framer-motion";
import React from "react";

interface TimelineUnitProps {
  title: string;
  icon: string;
  style: MotionStyle;
}

export const TimelineUnit: React.FC<TimelineUnitProps> = ({
  icon,
  style: { width, ...restStyle },
}) => {
  return (
    <motion.div
      style={{
        display: "inline-block",
        width,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <motion.img
            style={{ width: 30, height: 30, marginBottom: 10 }}
            src={icon}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 2.5 }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <motion.div
            initial={{ height: 0, opacity: 0.7 }}
            animate={{ height: 25, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 55,
              duration: 0.8,
              delay: 2,
            }}
            style={{
              width: "1px",
              backgroundColor: restStyle.backgroundColor,
            }}
          />
        </div>
      </div>
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
