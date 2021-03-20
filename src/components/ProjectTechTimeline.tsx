import { motion } from "framer-motion";
import React from "react";
import { TechStack } from "../types/item";
import { TimelineUnit } from "./TimelineUnit";

interface ProjectTechTimelineProps {
  techStack: TechStack[];
}

export const ProjectTechTimeline: React.FC<ProjectTechTimelineProps> = ({
  techStack,
}) => {
  return (
    <motion.div
      className="timeline-container"
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      transition={{ type: "spring", stiffness: 55, duration: 0.8 }}
    >
      {techStack.map(({ title, borderStyle, width, backgroundColor }) => (
        <TimelineUnit
          key={title}
          title={title}
          style={{
            ...borderStyle,
            width,
            backgroundColor,
          }}
        />
      ))}
    </motion.div>
  );
};
