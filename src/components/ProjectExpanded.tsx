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
  handleSelectedItem: (item: Item | null) => void;
}

export const ProjectExpanded: React.FC<ProjectExpandedProps> = ({
  item,
  handleSelectedItem,
}) => {
  return (
    <>
      <motion.div
        onClick={() => handleSelectedItem(null)}
        className="card-container open"
        layoutId={`card-container-${item.id}`}
      >
        <p>{item.title}</p>
        <p>{item.subtitle}</p>
      </motion.div>
    </>
  );
};
