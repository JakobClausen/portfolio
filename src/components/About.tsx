import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export const About: React.FC = () => {
  return (
    <Box w="100%" h="100vh" p="25px" id="about-me">
      <Flex>
        <Image
          src="/images/jakob.jpeg"
          alt="Jakob Clausen"
          borderRadius="3px"
          w="200px"
          ml="-35px"
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
