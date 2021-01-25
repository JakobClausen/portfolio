import { Heading, Text } from "@chakra-ui/react";

export const Title: React.FC = () => {
  return (
    <>
      <Heading
        as="h1"
        size="lg"
        fontWeight="300"
        fontSize={{ base: "9vw", md: "6vw", lg: "5vw" }}
        color="text.100"
        textAlign="center"
      >
        Jakob Clausen
      </Heading>
      <Text textAlign="center" color="text.100" opacity="80%">
        Web developer
      </Text>
      <Text textAlign="center" color="text.100" opacity="80%" fontSize="14px">
        <a href="mailto:Jakob.Fridmar@gmail.com">Jakob.Fridmar@gmail.com</a>
      </Text>
    </>
  );
};
