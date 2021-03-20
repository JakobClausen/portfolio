import { motion } from "framer-motion";
import React from "react";

interface ProjectTechTimelineProps {}

export const ProjectTechTimeline: React.FC<ProjectTechTimelineProps> = ({}) => {
  return (
    <motion.div
      style={{
        height: "15px",
        marginBottom: 20,
      }}
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      transition={{ ease: "easeOut", duration: 0.8 }}
    >
      <motion.div
        style={{
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
          display: "inline-block",
          width: "70%",
          height: "100%",
          backgroundColor: "#007acc",
        }}
      />
      <motion.div
        style={{
          display: "inline-block",
          width: "10%",
          height: "100%",
          backgroundColor: "#e535ab",
        }}
      />
      <motion.div
        style={{
          display: "inline-block",
          width: "10%",
          height: "100%",
          backgroundColor: "#FE0C05",
        }}
      />
      <motion.div
        style={{
          display: "inline-block",
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
          width: "10%",
          height: "100%",
          backgroundColor: "#336791",
        }}
      />
    </motion.div>
  );
};
