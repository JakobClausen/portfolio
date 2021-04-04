import React, { useState } from "react";
import { motion } from "framer-motion";
import { Item } from "../types/item";
import disableScroll from "disable-scroll";
import { ProjectTechTimeline } from "./ProjectTechTimeline";
import { Box, Link } from "@chakra-ui/react";
import { CloseButton } from "./CloseButton";

interface ProjectExpandedProps {
  item: Item;
  handleSelectedItem: (item: Item | null) => void;
}

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
      className="portfolio-container"
      transition={{ duration: 0.3 }}
      initial={{ y: "100%" }}
      animate={close ? { y: "100%" } : { y: 0 }}
      onAnimationComplete={handleAnimationComplete}
    >
      <motion.div className="portfolio-content">
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

        <Box h="1px" w="100%" bg="#000000" opacity={0.8} />

        <motion.div className="portfolio-description">
          <motion.p
            className="portfolio-text-description"
            transition={{
              type: "spring",
              delay: 0.2,
              duration: 1,
            }}
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {description}
          </motion.p>
        </motion.div>
        <motion.div
          className="project-bottom-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <ProjectTechTimeline techStack={techStack} />
          <Box display="flex" justifyContent="center" mt="20px">
            <Link href={link} isExternal cursor="pointer">
              <motion.p
                className="github-link"
                transition={{
                  type: "spring",
                  bounce: 0.25,
                  delay: 1.3,
                }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
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
