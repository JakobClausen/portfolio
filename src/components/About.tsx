import React from "react";
import { Box, Flex, Image, Text, Divider } from "@chakra-ui/react";
import { contact, skills, social } from "../data/about";
import { FooterInfo } from "./FooterInfo";
import { Category } from "./Category";

export const About: React.FC = () => {
  return (
    <Box w="100%" p="25px" id="about-me">
      <Category title={"About"} />
      <Flex>
        <Image
          src="/images/jakob.jpeg"
          alt="Jakob Clausen"
          borderRadius="3px"
          w="200px"
        />
        <Box w="100%" pl="20px">
          {skills.map((tech) => (
            <Text key={tech} fontFamily="body" color="#cecece">
              {tech}
            </Text>
          ))}
        </Box>
      </Flex>
      <Box pt="20px">
        <Text fontFamily="body" color="#cecece">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          dicta natus amet, molestiae tenetur impedit aut incidunt quas sunt
          provident sed minima quis porro modi culpa sequi omnis voluptas
          aspernatur.
        </Text>
      </Box>
      <Box m="20px 0px">
        <FooterInfo title={"Contact"} links={contact} />
        <FooterInfo title={"Social"} links={social} />
      </Box>
      <Divider opacity={0.2} />
      <Text
        color="#cecece"
        fontFamily="body"
        fontSize="12px"
        mt="12px"
        opacity={0.2}
      >
        © 2021 JAKOBCLAUSEN.COM
      </Text>
    </Box>
  );
};
