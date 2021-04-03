import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export const About: React.FC = () => {
  return (
    <Box w="100%" h="100vh" p="25px" id="about-me">
      <Flex alignItems="center">
        <svg height="4px" width="15px">
          <line
            x1="0"
            x2="100%"
            stroke="#cecece"
            style={{ strokeWidth: "4px" }}
          />
        </svg>
        <Text
          ml="7px"
          fontFamily="body"
          color="#cecece"
          fontWeight="bold"
          fontSize="18px"
        >
          About
        </Text>
      </Flex>
      <Flex>
        <Image
          src="/images/jakob.jpeg"
          alt="Jakob Clausen"
          borderRadius="3px"
          w="200px"
        />
        <Box w="100%" pl="20px">
          {["React", "Next", "Gatsby", "Node", "GraphQL", "SQL"].map((tech) => (
            <Text key={tech} fontFamily="body" color="#cecece">
              {tech}
            </Text>
          ))}
        </Box>
      </Flex>
    </Box>
  );
};
