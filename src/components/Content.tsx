import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { Title } from "../components/Title";
import FadeIn from "react-fade-in";
import { Icon } from "../components/Icon";

const icons = [
  {
    icon: "social-1_logo-linkedin.svg",
    url: "https://www.linkedin.com/in/jakob-clausen-574a6658/",
    name: "Linkedin",
  },
  {
    icon: "social-1_round-github.svg",
    url: "https://github.com/JakobClausen",
    name: "Github",
  },
  {
    icon: "social-1_logo-twitter.svg",
    url: "https://twitter.com/JakobClausenDev",
    name: "Twitter",
  },
];

export const Content: React.FC = () => {
  return (
    <>
      <Flex w="100%" h="80vh" align="center" justify="center">
        <FadeIn delay={30} transitionDuration={600}>
          <Title />
          <Flex w="100%" justify="space-around" mt="15%">
            {icons.map(({ icon, url, name }) => (
              <Icon key={name} icon={icon} url={url} name={name} />
            ))}
          </Flex>
        </FadeIn>
      </Flex>
      <FadeIn delay={100} transitionDuration={1000}>
        <Text textAlign="center" color="text.100" opacity="80%">
          Under construction ...
        </Text>
      </FadeIn>
    </>
  );
};
