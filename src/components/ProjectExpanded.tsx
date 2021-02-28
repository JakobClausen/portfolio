import React from "react";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Item } from "../types/item";
import disableScroll from "disable-scroll";
import { MotionP } from "./MotionP";

interface ProjectExpandedProps {
  item: Item;
  handleSelectedItem: (item: Item | null) => void;
}

export const ProjectExpanded: React.FC<ProjectExpandedProps> = ({
  item,
  handleSelectedItem,
}) => {
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
        {item.img ? (
          <motion.img
            src={item.img}
            alt="Picture of the author"
            className="card-img"
            layoutId={`card-img-${item.id}`}
          />
        ) : (
          <motion.div
            className="portfolio-img"
            layoutId={`portfolio-img-${item.id}`}
          >
            <motion.p layoutId={`portfolio-img-text-${item.id}`}>
              <span>this</span>.portfolio
            </motion.p>
          </motion.div>
        )}

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
