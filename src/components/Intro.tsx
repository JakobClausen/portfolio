import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

export const Intro: React.FC = () => {
  return (
    <Box w="100%" h="100vh">
      <Controller>
        <Scene triggerHook="onLeave" duration={"44%"} triggerElement="#ye">
          {(progress) => {
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
                  <Box position={progress >= 1 ? "fixed" : "static"} top={-100}>
                    <Heading as="h1" fontSize="8em" color="#cecece">
                      JAKOB
                    </Heading>
                    <Heading
                      as="h1"
                      fontSize="8em"
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
                        fontSize="1em"
                        color="#FF4500"
                        marginTop="-25px"
                        marginLeft="5px"
                      >
                        Software Engineer
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
