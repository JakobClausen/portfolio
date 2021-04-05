import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Divider,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { contact, skills, social } from "../data/about";
import { FooterInfo } from "./FooterInfo";
import { Category } from "./Category";

export const About: React.FC = () => {
  return (
    <Box w="100%" p="25px" id="about-me">
      <Category title={"About"} />
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
        <GridItem>
          <Flex>
            <Image
              src="/images/jakob.jpeg"
              alt="Jakob Clausen"
              borderRadius="3px"
              w="200px"
            />
            <Flex w="100%" pl="20px">
              <Box w="1px" h="100%" bg="offColor" mr="20px" />
              <Flex flexDirection="column" justifyContent="space-between">
                {skills.map((tech) => (
                  <Text key={tech} fontFamily="body" color="text.main">
                    {tech}
                  </Text>
                ))}
              </Flex>
            </Flex>
          </Flex>
          <Box pt="20px">
            <Text fontFamily="body" color="text.main">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              dicta natus amet, molestiae tenetur impedit aut incidunt quas sunt
              provident sed minima quis porro modi culpa sequi omnis voluptas
              aspernatur.
            </Text>
          </Box>
        </GridItem>
        <GridItem>
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            m={{ base: "20px 0px", md: "0px" }}
          >
            <GridItem>
              <FooterInfo title={"Contact"} links={contact} />
            </GridItem>
            <GridItem>
              <Box mt={{ base: "20px", md: "0px" }}>
                <FooterInfo title={"Social"} links={social} />
              </Box>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
      <Divider opacity={0.2} />
      <Text
        color="text.main"
        fontFamily="body"
        fontSize="12px"
        mt="20px"
        opacity={0.2}
      >
        © 2021 JAKOBCLAUSEN.COM
      </Text>
    </Box>
  );
};
