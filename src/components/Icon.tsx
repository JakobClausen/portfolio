import { Link, Img, Text, Flex } from "@chakra-ui/react";
import { useSpring, animated } from "react-spring";

interface iconProps {
  icon: string;
  url: string;
  name: string;
}
const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const Icon: React.FC<iconProps> = ({ icon, url, name }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 1000, friction: 40 },
  }));

  return (
    <Flex flexDirection="column" align="center">
      <Link href={url}>
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{
            transform: props.xys.interpolate(trans),
          }}
        >
          <Img
            src={`/icons/${icon}`}
            transition="box-shadow 0.5s"
            willChange="transform"
          ></Img>
        </animated.div>
      </Link>
      <Text color="text.100" opacity="55%" m="10px">
        {name}
      </Text>
    </Flex>
  );
};
