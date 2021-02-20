import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { ProjectExpanded } from "./ProjectExpanded";
import { ProjectList } from "./ProjectList";

type Item = {
  id: number;
  title: string;
  subtitle: string;
};

export const Projects: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleSelectedItem = (item: Item | null) => {
    setSelectedItem(item);
  };
  return (
    <AnimateSharedLayout type="crossfade">
      <ProjectList handleSelectedItem={handleSelectedItem} />
      <AnimatePresence>
        {selectedItem && (
          <ProjectExpanded
            item={selectedItem}
            handleSelectedItem={handleSelectedItem}
          />
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};
