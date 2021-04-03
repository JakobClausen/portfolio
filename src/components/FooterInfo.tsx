import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface FooterInfoProps {
  title: string;
  nodes: string[];
}

export const FooterInfo: React.FC<FooterInfoProps> = ({ title, nodes }) => {
  return (
    <Box color="#cecece" mt="20px">
      <Text fontFamily="body" fontWeight="bold" fontSize="14px" m="8px 0px">
        {title}
      </Text>
      {nodes.map((node) => (
        <Text fontFamily="body" fontSize="14px" m="8px 0px">
          {node}
        </Text>
      ))}
    </Box>
  );
};
