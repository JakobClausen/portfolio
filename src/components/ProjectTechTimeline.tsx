import { motion } from "framer-motion";
import React from "react";
import { TimelineUnit } from "./TimelineUnit";

interface ProjectTechTimelineProps {}

export const ProjectTechTimeline: React.FC<ProjectTechTimelineProps> = ({}) => {
  return (
    <motion.div
      style={{
        marginBottom: 20,
      }}
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      transition={{ type: "spring", stiffness: 55, duration: 0.8 }}
    >
      <TimelineUnit
        title="Typescript"
        style={{
          backgroundColor: "#007acc",
          width: "50%",
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
        }}
      />
      <TimelineUnit
        title="GraphQL"
        style={{ backgroundColor: "#e535ab", width: "15%" }}
      />
      <TimelineUnit
        title="TypeORM"
        style={{ backgroundColor: "#FE0C05", width: "15%" }}
      />
      <TimelineUnit
        title="PostgreSQL"
        style={{
          backgroundColor: "#336791",
          width: "20%",
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        }}
      />
    </motion.div>
  );
};
