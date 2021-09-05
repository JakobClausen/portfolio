import { Flex } from '@chakra-ui/react';
import React from 'react';
import { ImageGalleryButton } from './ImageGalleryButton';

interface GalleryButtonsContainerProps {
  paginate: (newDirection: number) => void;
  height: number;
}

export const GalleryButtonsContainer: React.FC<GalleryButtonsContainerProps> =
  ({ paginate, height }) => {
    return (
      <Flex
        justify="space-between"
        w="100%"
        h={height}
        position="absolute"
        top="calc(50% - 20px)"
      >
        <ImageGalleryButton
          handleClick={() => paginate(-1)}
          transform="scale(-1)"
        />
        <ImageGalleryButton handleClick={() => paginate(1)} />
      </Flex>
    );
  };
