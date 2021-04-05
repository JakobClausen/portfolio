import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { motion } from "framer-motion";

export const Intro: React.FC = () => {
  return (
    <Box w="100%" h="100vh">
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        h="100px"
        bgGradient="linear(brand 35%, transparent 90%)"
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
                    <motion.h1
                      className="intro-title"
                      transition={{
                        type: "spring",
                        delay: 0.3,
                        duration: 0.5,
                      }}
                      initial={{ x: 300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                    >
                      JAKOB
                    </motion.h1>
                    <motion.h1
                      className="intro-title-lastname"
                      transition={{
                        type: "spring",
                        delay: 0.3,
                        duration: 0.5,
                      }}
                      initial={{ x: -300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                    >
                      CLAUSEN
                    </motion.h1>

                    <Tween
                      position="0"
                      from={{
                        top: "0",
                      }}
                      to={{
                        top: "100%",
                        opacity: 0,
                      }}
                    >
                      <motion.p
                        className="intro-undertitle "
                        transition={{
                          type: "spring",
                          delay: 0.8,
                          duration: 1,
                        }}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                      >
                        Full Stack Developer
                      </motion.p>
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
