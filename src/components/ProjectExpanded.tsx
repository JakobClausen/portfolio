import React, { useState } from "react";
import { motion } from "framer-motion";
import { Item } from "../types/item";
import disableScroll from "disable-scroll";
import { ProjectTechTimeline } from "./ProjectTechTimeline";
import { Box, Heading, Link, Text } from "@chakra-ui/react";
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
  const isMobile = window && window.innerWidth < 800;

  const containerAnimateMobile = close ? { y: "100%" } : { y: 0 };
  const containerAnimateDektop = close ? { x: "100vw" } : { x: "60vw" };
  return (
    <motion.div
      className="portfolio-container"
      transition={{ duration: 0.3 }}
      initial={isMobile ? { y: "100%" } : { x: "100vw" }}
      animate={isMobile ? containerAnimateMobile : containerAnimateDektop}
      onAnimationComplete={handleAnimationComplete}
    >
      <motion.div className="portfolio-content">
        <motion.div
          className="portfolio-title"
          transition={{
            type: "spring",
            delay: 0.2,
            duration: 1,
          }}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Heading as="h4" fontSize="36px">
            {title}
          </Heading>
          {item.type && <Text mt="-10px">{`${item.type}`}</Text>}
          <CloseButton onClose={handleCloseProject} />
        </motion.div>

        <motion.div
          className="motion-divider"
          transition={{
            type: "spring",
            delay: 0.3,
            duration: 1,
          }}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        />

        <motion.div className="portfolio-description">
          <motion.p
            className="portfolio-text-description"
            transition={{
              type: "spring",
              delay: 0.4,
              duration: 1,
            }}
            initial={{ y: 10, opacity: 0 }}
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
          <Link href={link} isExternal cursor="pointer">
            <motion.div
              className="github-link"
              transition={{
                type: "spring",
                delay: 0.5,
                duration: 1,
              }}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Text color="text.main">Github</Text>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
