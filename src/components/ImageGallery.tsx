import { Flex } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from 'popmotion';
import React, { useEffect, useRef, useState } from 'react';
import { ImageGalleryButton } from './ImageGalleryButton';

interface ImageGalleryProps {
  images: string[];
}

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

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };
  const swipeConfidenceThreshold = 10000;
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);
  const imgRef = useRef<null | HTMLImageElement>(null);
  const [showButtons, setShowButtons] = useState(false);
  const [height, setHeight] = useState<null | number>(null);

  const paginate = (newDirection: number) =>
    setPage([page + newDirection, newDirection]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (imgRef?.current?.offsetHeight) {
        setHeight(imgRef?.current?.offsetHeight);
      }
      setShowButtons(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [imgRef]);

  return (
    <motion.div
      className="project-image-gallery"
      transition={{
        type: 'spring',
        delay: 0.6,
        duration: 0.8,
      }}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
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
      {showButtons && height && (
        <Flex justify="space-between" alignItems="center" w="100%" h={height}>
          <ImageGalleryButton
            handleClick={() => paginate(-1)}
            transform="scale(-1)"
          />
          <ImageGalleryButton handleClick={() => paginate(1)} />
        </Flex>
      )}
    </motion.div>
  );
};
