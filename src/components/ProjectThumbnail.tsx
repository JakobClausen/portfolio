import React from "react";
import { Item, ProjectInfo } from "../types/item";
import disableScroll from "disable-scroll";
import { Box, Heading } from "@chakra-ui/react";

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
      <Heading
        as="h3"
        fontSize="clamp(50px, 10vw, 50px)"
        color="#cecece"
        cursor="pointer"
      >
        {item.title}
      </Heading>
    </Box>
  );
};
