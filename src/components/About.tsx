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
      <Flex
        float={{ base: "none", md: "left" }}
        p={{ base: "0px 20px 20px 0px", md: "0px 20px 20px 0px" }}
      >
        <Image
          src="/images/jakob.jpeg"
          alt="Jakob Clausen"
          borderRadius="3px"
          w={{ base: "200px", sm: "350px" }}
        />
        <Flex w="100%" pl="20px">
          <Box w="1px" h="100%" bg="offColor" mr="20px" />
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
          >
            {skills.map((tech) => (
              <Text key={tech} fontFamily="body" color="text.main">
                {tech}
              </Text>
            ))}
          </Flex>
          <Box w="1px" h="100%" bg="offColor" ml="20px" />
        </Flex>
      </Flex>
      <Box pt={{ base: "20px", md: "0px" }}>
        <Text fontFamily="body" color="text.main">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          dicta natus amet, molestiae tenetur impedit aut incidunt quas sunt
          provident sed minima quis porro modi culpa sequi omnis voluptas
          aspernatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Dolorem dicta natus amet, molestiae tenetur impedit aut incidunt quas
          sunt provident sed minima quis porro modi culpa sequi omnis voluptas
          aspernatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Dolorem dicta natus amet, molestiae tenetur impedit aut incidunt quas
          sunt provident sed minima quis porro modi culpa sequi omnis voluptas
          aspernatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Dolorem dicta natus amet, molestiae tenetur impedit aut incidunt quas
          sunt provident sed minima quis porro modi culpa sequi omnis voluptas
          aspernatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Dolorem dicta natus amet, molestiae tenetur impedit aut incidunt quas
          sunt provident sed minima quis porro modi culpa sequi omnis voluptas
          aspernatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Dolorem dicta natus amet, molestiae tenetur impedit aut incidunt quas
          sunt provident sed minima quis porro modi culpa sequi omnis voluptas
          aspernatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Dolorem dicta natus amet, molestiae tenetur impedit aut incidunt quas
          sunt provident sed minima quis porro modi culpa sequi omnis voluptas
          aspernatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Dolorem dicta natus amet, molestiae tenetur impedit aut incidunt quas
          sunt provident sed minima quis porro modi culpa sequi omnis voluptas
          aspernatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Dolorem dicta natus amet, molestiae tenetur impedit aut incidunt quas
          sunt provident sed minima quis porro modi culpa sequi omnis voluptas
          aspernatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Dolorem dicta natus amet, molestiae tenetur impedit aut incidunt quas
          sunt provident sed minima quis porro modi culpa sequi omnis voluptas
          aspernatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Dolorem dicta natus amet, molestiae tenetur impedit aut incidunt quas
          sunt provident sed minima quis porro modi culpa sequi omnis voluptas
          aspernatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Dolorem dicta natus amet, molestiae tenetur impedit aut incidunt quas
          sunt provident sed minima quis porro modi culpa sequi omnis voluptas
          aspernatur.
        </Text>
      </Box>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        m="40px 0px 20px 0px"
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
