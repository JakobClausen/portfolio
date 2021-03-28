import React from "react";
import { motion } from "framer-motion";
import { ProjectInfo } from "../types/item";
import disableScroll from "disable-scroll";
import { MotionP } from "./MotionP";
import { ProjectTechTimeline } from "./ProjectTechTimeline";
import { Box } from "@chakra-ui/react";

interface ProjectExpandedProps {
  projectInfo: ProjectInfo;
  handleSelectedItem: (projectInfo: ProjectInfo | null) => void;
}

export const ProjectExpanded: React.FC<ProjectExpandedProps> = ({
  projectInfo,
  handleSelectedItem,
}) => {
  const { item, children } = projectInfo;
  return (
    <motion.div
      onClick={() => {
        handleSelectedItem(null);
        disableScroll.off();
      }}
      className="card-container open"
      layoutId={`card-container-${item.id}`}
    >
      <motion.div
        className="card-content open"
        layoutId={`card-content-${item.id}`}
      >
        <Box position="absolute" top={0} right={0}>
          <motion.img
            src="/icons/close.png"
            alt="Close logo"
            className="close-icon"
            layoutId={`close-icon-${item.id}`}
            transition={{ duration: 0.1, delay: 0.8 }}
            initial={{ x: 50, opacity: 0.5 }}
            animate={{ x: 0, opacity: 0.8 }}
            exit={{ x: 50, opacity: 0 }}
          />
        </Box>
        <motion.div
          className="portfolio-img"
          layoutId={`portfolio-img-${item.id}`}
        >
          <motion.p layoutId={`portfolio-img-text-${item.id}`}>
            {children}
          </motion.p>
        </motion.div>

        <motion.div className="card-text">
          <MotionP className="card-text-title open" payload={item.title} />
          <MotionP
            className="card-text-description"
            payload={item.description}
          />
        </motion.div>
        <motion.div
          className="project-bottom-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ProjectTechTimeline techStack={item.techStack} />
          <motion.img
            src="/icons/github.svg"
            alt="Github logo"
            className="github-icon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
