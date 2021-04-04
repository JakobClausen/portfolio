import React, { useState } from "react";
import { motion } from "framer-motion";
import { Item } from "../types/item";
import disableScroll from "disable-scroll";
import { MotionP } from "./MotionP";
import { ProjectTechTimeline } from "./ProjectTechTimeline";
import { Box, Link, Divider } from "@chakra-ui/react";
import { CloseButton } from "./CloseButton";

interface ProjectExpandedProps {
  item: Item;
  handleSelectedItem: (item: Item | null) => void;
}

const variants = {
  open: { y: 0 },
  closed: { y: "100%" },
};

export const ProjectExpanded: React.FC<ProjectExpandedProps> = ({
  item,
  handleSelectedItem,
}) => {
  const [close, setClose] = useState(false);
  const { title, description, link, techStack } = item;

  const handleCloseProject = () => {
    setClose(true);
    disableScroll.off();
  };

  const handleAnimationComplete = () => close && handleSelectedItem(null);

  return (
    <motion.div
      className="card-container"
      transition={{ duration: 0.3 }}
      initial={{ y: "100%" }}
      animate={close ? "closed" : "open"}
      variants={variants}
      onAnimationComplete={handleAnimationComplete}
    >
      <motion.div className="card-content">
        <Box w="100%">
          <motion.h3
            className="portfolio-title"
            transition={{
              delay: 0.2,
              duration: 0.3,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {title}
          </motion.h3>
          <CloseButton onClose={handleCloseProject} />
        </Box>

        <Divider backgroundColor="#000000" opacity={1} />

        <motion.div className="card-text">
          <MotionP className="card-text-description" payload={description} />
        </motion.div>
        <motion.div
          className="project-bottom-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ProjectTechTimeline techStack={techStack} />
          <Box display="flex" justifyContent="center" mt="20px">
            <Link
              href={link}
              isExternal
              cursor="pointer"
              outline="none !important"
            >
              <motion.p
                className="github-icon"
                transition={{
                  type: "spring",
                  bounce: 0.25,
                  delay: 1.3,
                }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
              >
                Github
              </motion.p>
            </Link>
          </Box>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
