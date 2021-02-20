import Head from "next/head";
import { Box } from "@chakra-ui/react";
import React from "react";
import { Intro } from "../components/intro";
import { Projects } from "../components/Projects";
import { About } from "../components/About";

const Home = () => {
  return (
    <Box w="100%" bg="brand.100" overflow="hidden">
      <Head>
        <title>Jakob Clausen</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Jakob Clausen" key="title" />
        <meta
          name="Description"
          content="Jakob Clausen. Wed developer in Gothenburg. Focusing on backend technologies as graphql and node js. Writing in typescript."
        />
      </Head>
      <Intro />
      <Projects />
      <About />
    </Box>
  );
};

export default Home;
