import { motion, useMotionValue, useTransform } from "framer-motion";
import { Flex } from "@chakra-ui/react";
import React, { useRef } from "react";

interface SliderLinkProps {}

export const SliderLink: React.FC<SliderLinkProps> = ({}) => {
  const constraintsRef = useRef(null);
  return (
    <Flex position="absolute" bottom="30" w="100%" justify="center">
      <div className="example-container">
        <motion.div className="drag-area" ref={constraintsRef}>
          <motion.img
            src="/icons/github.svg"
            drag
            dragConstraints={constraintsRef}
          />
        </motion.div>
      </div>
      {/* <img src="/icons/github.svg"></img> */}
    </Flex>
  );
};
