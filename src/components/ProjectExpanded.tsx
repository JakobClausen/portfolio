import React from "react";
import { motion } from "framer-motion";
import { ProjectInfo } from "../types/item";
import disableScroll from "disable-scroll";
import { MotionP } from "./MotionP";

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
          <motion.div
            className="card-github-container"
            layoutId={`card-github-container-${item.id}`}
            initial={{ x: "0%", opacity: 0 }}
            animate={{ x: "100%", opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src="/icons/github.svg"
              alt="Github logo"
              className="card-github"
              layoutId={`card-github-${item.id}`}
              initial={{ x: "0%", opacity: 0 }}
              animate={{ x: "100%", opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <MotionP
              className="card-text-github"
              layoutId={`card-text-github-${item.id}`}
              payload={"Github"}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
