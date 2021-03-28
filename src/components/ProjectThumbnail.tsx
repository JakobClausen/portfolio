import React from "react";
import { Item, ProjectInfo } from "../types/item";
import disableScroll from "disable-scroll";
import { Box, Text } from "@chakra-ui/react";

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
    <Box
      onClick={() => {
        handleSelectedItem({ item, children });
        disableScroll.on();
      }}
    >
      <Text color="white">{item.title}</Text>
    </Box>
  );
};
