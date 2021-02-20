import React from "react";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";

type Item = {
  id: number;
  title: string;
  subtitle: string;
};
interface ProjectExpandedProps {
  item: Item;
  handleSelectedItem: (item: Item) => void;
}

export const ProjectExpanded: React.FC<ProjectExpandedProps> = ({
  item,
  handleSelectedItem,
}) => {
  return (
    <motion.div
      onClick={() => handleSelectedItem(null)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      transition={{ duration: 0.2, delay: 0.15 }}
      style={{ pointerEvents: "auto" }}
      className="overlay"
    >
      {" "}
      <motion.div
        className="card-container open"
        layoutId={`card-container-${item.id}`}
      >
        <p>{item.title}</p>
        <p>{item.subtitle}</p>
      </motion.div>
    </motion.div>
  );
};
