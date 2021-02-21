import { motion, useMotionValue, useTransform } from "framer-motion";
import { Flex, Text } from "@chakra-ui/react";
import React, { useRef } from "react";

interface SliderLinkProps {}

export const SliderLink: React.FC<SliderLinkProps> = ({}) => {
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  const background = useTransform(x, [0, 600], ["#1c1919", "#2ee217"]);
  return (
    <Flex
      position="absolute"
      bottom="30"
      w="100%"
      justify="center"
      className="slider-container"
    >
      <motion.div
        className="drag-area"
        ref={constraintsRef}
        style={{ background }}
      >
        <motion.img
          src="/icons/github.svg"
          drag="x"
          style={{ x }}
          dragConstraints={constraintsRef}
          onDragEnd={(event, info) => {
            // TODO - link to instagram
          }}
        />
        <Text fontSize="14px" opacity={0.5} color="white">
          Source code
        </Text>
      </motion.div>
    </Flex>
  );
};
