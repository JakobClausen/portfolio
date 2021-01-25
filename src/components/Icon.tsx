import { Link, Img, Text, Flex } from "@chakra-ui/react";

interface iconProps {
  icon: string;
  url: string;
  name: string;
}

export const Icon: React.FC<iconProps> = ({ icon, url, name }) => (
  <Flex flexDirection="column" align="center">
    <Link href={url} rel="preload">
      <Img
        src={`/icons/${icon}`}
        alt={`${name} icon`}
        width={{ base: "32px", md: "40px" }}
        height={{ base: "32px", md: "40px" }}
      ></Img>
    </Link>
    <Text color="text.100" opacity="55%" m="10px">
      {name}
    </Text>
  </Flex>
);
