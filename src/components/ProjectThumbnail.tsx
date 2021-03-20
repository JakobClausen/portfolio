import React from "react";
import { Item, ProjectInfo } from "../types/item";
import disableScroll from "disable-scroll";
import { motion } from "framer-motion";

interface ProjectThumbnailProps {
  item: Item;
  handleSelectedItem: (projectInfo: ProjectInfo) => void;
}

export const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({
  children,
  item,
  handleSelectedItem,
}) => {
  return (
    <motion.div
      key={item.title}
      onClick={() => {
        handleSelectedItem({ item, children });
        disableScroll.on();
      }}
      className="card-container"
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

        <motion.div layoutId={`card-text-${item.id}`} />
      </div>
    </motion.div>
  );
};
