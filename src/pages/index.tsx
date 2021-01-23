import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react";
import { Content } from "../components/Content";

const Home = () => {
  return (
    <Box w="100%" h="100vh" bg="brand.100" position="relative">
      <Content />
    </Box>
  );
};

export default Home;
