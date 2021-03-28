import React, { useState } from "react";
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

const variants = {
  open: { y: 0 },
  closed: { y: "100%" },
};

export const ProjectExpanded: React.FC<ProjectExpandedProps> = ({
  projectInfo,
  handleSelectedItem,
}) => {
  const [close, setClose] = useState(false);
  const { item, children } = projectInfo;
  return (
    <motion.div
      className="card-container open"
      transition={{ duration: 0.3 }}
      initial={{ y: "100%" }}
      animate={close ? "closed" : "open"}
      variants={variants}
      onAnimationComplete={() => {
        if (close) {
          handleSelectedItem(null);
        }
      }}
    >
      <motion.div className="card-content open">
        <Box
          position="absolute"
          top={0}
          right={0}
          onClick={() => {
            setClose(true);
            disableScroll.off();
          }}
        >
          <motion.img
            src="/icons/close.png"
            alt="Close logo"
            className="close-icon"
            transition={{
              type: "spring",
              bounce: 0.25,
              delay: 0.3,
            }}
            initial={{ x: 50, opacity: 0.5 }}
            animate={{ x: 0, opacity: 0.8 }}
            exit={{ x: 50, opacity: 0 }}
          />
        </Box>
        <motion.div className="portfolio-img">
          <motion.p>{children}</motion.p>
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
          <Box display="flex" justifyContent="center" mt="40px">
            <motion.img
              src="/icons/github.svg"
              alt="Github logo"
              className="github-icon"
              transition={{
                type: "spring",
                bounce: 0.25,
                delay: 1.7,
              }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            />
          </Box>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
