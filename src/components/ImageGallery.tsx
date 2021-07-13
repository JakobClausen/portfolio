import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { Box, Flex } from '@chakra-ui/react';
import { ImageGalleryButton } from './ImageGalleryButton';

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

export const ImageGallery: React.FC<ImageGalleryProps> = ({}) => {
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };
  const swipeConfidenceThreshold = 10000;
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);
  const imgRef = useRef(null);
  const [height, setHeight] = useState(0);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  useEffect(() => {
    if (imgRef) {
      setHeight(imgRef?.current?.offsetHeight);
    }
  }, [imgRef]);

  return (
    <Box width="100%" position="relative" mt="10px" h={`${height}px`}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          ref={imgRef}
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
      <Flex
        justify="space-between"
        w="100%"
        position="absolute"
        top="calc(50% - 20px)"
      >
        <ImageGalleryButton
          handleClick={() => paginate(-1)}
          transform="scale(-1)"
        />
        <ImageGalleryButton handleClick={() => paginate(1)} />
      </Flex>
    </Box>
  );
};
