import React from "react";
import { Item } from "../types/item";
import disableScroll from "disable-scroll";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Tween } from "react-gsap";

interface ProjectThumbnailProps {
  item: Item;
  handleSelectedItem: (item: Item) => void;
  width: string;
  mt?: number;
}

export const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({
  item,
  handleSelectedItem,
  mt = 0,
  width,
}) => {
  return (
    <Flex mt={`${mt}px`} alignItems="center">
      <Tween
        position={0}
        from={{ width: 0, ease: "slow(0.7, 0.7, false)" }}
        to={{ width, ease: "slow(0.7, 0.7, false)" }}
      >
        <Box height="3px" backgroundColor="offColor" opacity={0.6} />
      </Tween>
      <Box
        onClick={() => {
          handleSelectedItem(item);
          disableScroll.on();
        }}
        cursor="pointer"
      >
        <Heading
          ml="10px"
          as="h3"
          fontSize="clamp(50px, 10vw, 50px)"
          color="text.main"
        >
          {item.title}
        </Heading>
        {item.type && (
          <Text color="text.main" ml="20px" mt="-10px">
            {item.type}
          </Text>
        )}
      </Box>
    </Flex>
  );
};
