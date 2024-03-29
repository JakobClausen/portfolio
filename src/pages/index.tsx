import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Intro } from "../components/Intro";
import { Projects } from "../components/Projects";
import { About } from "../components/About";

const Home = () => {
  return (
    <Flex justifyContent="center" bg="brand" overflow="hidden">
      <Head>
        <title>Jakob Clausen</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Jakob Clausen" key="title" />

        <meta
          name="Description"
          content="Jakob Clausen. Wed developer in Gothenburg. Focusing on backend technologies as graphql and node js. Writing in typescript."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Varela&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box
        w={{
          base: "100vw",
          xl: "68vw",
          xxxl: "55vw",
        }}
      >
        <Intro />
        <Projects />
        <About />
      </Box>
    </Flex>
  );
};

export default Home;
