import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
import React from "react";

type Item = {
  id: number;
  title: string;
  subtitle: string;
};

interface ProjectListProps {
  handleSelectedItem: (item: Item) => void;
}

export const ProjectList: React.FC<ProjectListProps> = ({
  handleSelectedItem,
}) => {
  return (
    <Grid gap={4} p="20px">
      {data.map((item) => (
        <motion.div
          key={item.title}
          onClick={() => handleSelectedItem(item)}
          className="card-container"
          layoutId={`card-container-${item.id}`}
        >
          <p>{item.title}</p>
          <p>{item.subtitle}</p>
        </motion.div>
      ))}
    </Grid>
  );
};

const data = [
  { id: 1, title: "Jakob", subtitle: "clausen" },
  { id: 2, title: "Fanny", subtitle: "Kamph" },
  { id: 3, title: "test", subtitle: "test" },
];
