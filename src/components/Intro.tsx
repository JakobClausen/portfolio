import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

export const Intro: React.FC = () => {
  return (
    <Box w="100%" h="100vh">
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        h="150px"
        bgGradient="linear(brand.100 35%, transparent 90%)"
        zIndex={9}
      />
      <Controller>
        <Scene triggerHook="onLeave" duration={"44%"} triggerElement="#ye">
          {(progress: number) => {
            return (
              <Timeline
                totalProgress={progress}
                paused
                wrapper={
                  <Flex
                    id="ye"
                    w="100%"
                    h="100%"
                    overflow="hidden"
                    justify="center"
                    align="center"
                  />
                }
              >
                <Tween
                  position="0"
                  from={{
                    scale: 1,
                    rotation: -20,
                  }}
                  to={{
                    scale: 0.23,
                    rotation: 0,
                    ease: "slow(0.7, 0.7, false)",
                  }}
                >
                  <Box
                    position={progress >= 1 ? "fixed" : "static"}
                    top={-100}
                    zIndex={10}
                  >
                    <Heading
                      as="h1"
                      fontSize="clamp(50px, 35vw, 200px)"
                      color="#cecece"
                    >
                      JAKOB
                    </Heading>
                    <Heading
                      as="h1"
                      fontSize="clamp(50px, 35vw, 200px)"
                      color="#cecece"
                      marginTop="-60px"
                    >
                      CLAUSEN
                    </Heading>
                    <Tween
                      position="0"
                      from={{
                        top: "0",
                        scale: 1,
                      }}
                      to={{
                        top: "100%",
                        opacity: 0,
                      }}
                    >
                      <Text
                        fontSize={["sm", "md", "lg", "xl"]}
                        color="#b33a0f"
                        marginTop="-30px"
                        marginLeft="5px"
                      >
                        Full Stack Developer
                      </Text>
                    </Tween>
                  </Box>
                </Tween>
              </Timeline>
            );
          }}
        </Scene>
      </Controller>
    </Box>
  );
};
