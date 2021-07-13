import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { Box, Flex } from '@chakra-ui/react';

interface ImageGalleryProps {}
const images = [
  'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png',
];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const ImageGallery: React.FC<ImageGalleryProps> = ({}) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [height, setHeight] = useState(0);
  const reference = useRef(null);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    if (reference) {
      console.log(reference?.current.offsetHeight);
      setHeight(reference?.current?.offsetHeight);
    }
  }, [reference]);

  useEffect(() => {
    console.log('height', height);
  }, [height]);
  return (
    <Box width="100%" position="relative" h="auto">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          ref={reference}
          className="gallery-img"
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <Flex justify="space-between">
        <Flex
          bg="white"
          borderRadius="30px"
          w="40px"
          h="40px"
          justify="center"
          alignItems="center"
          userSelect="none"
          cursor="pointer"
          fontWeight="bold"
          fontSize="18px"
          transform="scale(-1)"
          zIndex={2}
          onClick={() => paginate(1)}
        >
          {'‣'}
        </Flex>
        <Flex
          bg="white"
          borderRadius="30px"
          w="40px"
          h="40px"
          justify="center"
          alignItems="center"
          userSelect="none"
          cursor="pointer"
          fontWeight="bold"
          fontSize="18px"
          zIndex={2}
          onClick={() => paginate(-1)}
        >
          {'‣'}
        </Flex>
      </Flex>
    </Box>
  );
};
