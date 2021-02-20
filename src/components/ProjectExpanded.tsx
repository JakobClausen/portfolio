import React from "react";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Item } from "../types/item";

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
      onClick={() => handleSelectedItem(null)}
      className="card-container open"
      layoutId={`card-container-${item.id}`}
    >
      <div className="card-content">
        <motion.img
          src={item.img}
          alt="Picture of the author"
          className="card-img"
          layoutId={`card-img-${item.id}`}
        />
        <motion.div className="card-text" layoutId={`card-text-${item.id}`}>
          <p>{item.title}</p>
          <p>{item.subtitle}</p>
        </motion.div>
        <Flex position="absolute" bottom="30" w="100%" justify="center">
          <img src="/icons/github.svg"></img>
        </Flex>
      </div>
    </motion.div>
  );
};
