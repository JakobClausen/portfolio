import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

interface CategoryProps {
  title: string;
}

export const Category: React.FC<CategoryProps> = ({ title }) => {
  return (
    <Flex alignItems="center" opacity={0.8} mb="10px">
      <Box h="2px" w="10px" backgroundColor="text.main" />
      <Text
        ml="7px"
        fontFamily="body"
        color="text.main"
        fontWeight="bold"
        fontSize="14px"
      >
        {title}
      </Text>
    </Flex>
  );
};
