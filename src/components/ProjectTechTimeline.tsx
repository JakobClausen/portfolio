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
      initial={{ width: "0%", opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 55,
        duration: 0.8,
        delay: 1,
      }}
    >
      {techStack.map(({ title, borderStyle, width, icon, backgroundColor }) => (
        <TimelineUnit
          key={title}
          icon={icon}
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
