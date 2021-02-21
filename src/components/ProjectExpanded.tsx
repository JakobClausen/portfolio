import React from "react";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Item } from "../types/item";
import { SliderLink } from "./SliderLink";

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
      // onClick={() => handleSelectedItem(null)}
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
          <motion.p
            className="card-text-title open"
            layoutId={`card-text-title-${item.id}`}
            initial={{ x: "0%", opacity: 0 }}
            animate={{ x: "100%", opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {item.title}
          </motion.p>
          <motion.p
            className="card-text-description"
            layoutId={`card-text-description-${item.id}`}
            initial={{ x: "50%", opacity: 0 }}
            animate={{ x: "100%", opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {item.description}
          </motion.p>
        </motion.div>
        <SliderLink />
      </div>
    </motion.div>
  );
};
