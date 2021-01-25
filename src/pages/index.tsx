import Head from "next/head";
import { Html } from "next/document";
import { Box, Flex } from "@chakra-ui/react";
import { Content } from "../components/Content";

const Home = () => {
  return (
    <Box w="100%" h="100vh" bg="brand.100">
      <Head>
        <title>Jakob Clausen</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Jakob Clausen" key="title" />
        <meta
          name="Description"
          content="Jakob Clausen. Wed developer in Gothenburg. Focusing on backend technologies as graphql and node js. Writing in typescript."
        />
      </Head>
      <Content />
    </Box>
  );
};

export default Home;
