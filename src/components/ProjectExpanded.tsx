import React from "react";
import { motion } from "framer-motion";
import { ProjectInfo } from "../types/item";
import disableScroll from "disable-scroll";
import { MotionP } from "./MotionP";
import { ProjectTechTimeline } from "./ProjectTechTimeline";

interface ProjectExpandedProps {
  projectInfo: ProjectInfo;
  handleSelectedItem: (projectInfo: ProjectInfo) => void;
}

export const ProjectExpanded: React.FC<ProjectExpandedProps> = ({
  projectInfo,
  handleSelectedItem,
}) => {
  if (!projectInfo) return null;
  const { item, children } = projectInfo;
  console.log(item);
  return (
    <motion.div
      onClick={() => {
        handleSelectedItem(null);
        disableScroll.off();
      }}
      className="card-container open"
      layoutId={`card-container-${item.id}`}
    >
      <div className="card-content">
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
        <motion.div
          className="portfolio-img"
          layoutId={`portfolio-img-${item.id}`}
        >
          <motion.p layoutId={`portfolio-img-text-${item.id}`}>
            {children}
          </motion.p>
        </motion.div>

        <motion.div className="card-text" layoutId={`card-text-${item.id}`}>
          <MotionP
            className="card-text-title open"
            layoutId={`card-text-title-${item.id}`}
            payload={item.title}
          />
          <MotionP
            layoutId={`card-text-description-${item.id}`}
            className="card-text-description"
            payload={item.description}
          />
        </motion.div>
        <motion.div
          className="project-bottom-container"
          layoutId={`project-bottom-container-${item.id}`}
          initial={{ x: "0%", opacity: 0 }}
          animate={{ x: "100%", opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ProjectTechTimeline techStack={item.techStack} />
          <motion.img
            src="/icons/github.svg"
            alt="Github logo"
            className="github-icon"
            layoutId={`github-icon-${item.id}`}
            initial={{ x: "0%", opacity: 0 }}
            animate={{ x: "100%", opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
