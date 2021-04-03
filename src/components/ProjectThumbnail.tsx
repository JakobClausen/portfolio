import React from "react";
import { Item } from "../types/item";
import disableScroll from "disable-scroll";
import { Box, Heading } from "@chakra-ui/react";
import { Tween } from "react-gsap";

interface ProjectThumbnailProps {
  item: Item;
  handleSelectedItem: (item: Item) => void;
  tweenSettings: { from: { x: string }; to: { x: string; ease: string } };
}

export const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({
  item,
  handleSelectedItem,
  tweenSettings,
}) => {
  return (
    <Box mt={10}>
      <Tween position={0} from={tweenSettings.from} to={tweenSettings.to}>
        <Heading
          onClick={() => {
            handleSelectedItem(item);
            disableScroll.on();
          }}
          as="h3"
          fontSize="clamp(50px, 10vw, 50px)"
          color="#cecece"
          cursor="pointer"
        >
          {item.title}
        </Heading>
      </Tween>
    </Box>
  );
};
