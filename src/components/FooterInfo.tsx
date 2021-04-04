import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import { AboutMeLinks } from "../types/about";

interface FooterInfoProps {
  title: string;
  links: AboutMeLinks[];
}

export const FooterInfo: React.FC<FooterInfoProps> = ({ title, links }) => {
  return (
    <Box color="text.main" mt="20px">
      <Text fontFamily="body" fontWeight="bold" fontSize="14px" m="8px 0px">
        {title}
      </Text>
      {links.map(({ name, link }) => (
        <Text key={name} fontFamily="body" fontSize="14px" m="8px 0px">
          <Link
            href={link}
            isExternal
            cursor="pointer"
            outline="none !important"
          >
            {name}
          </Link>
        </Text>
      ))}
    </Box>
  );
};
