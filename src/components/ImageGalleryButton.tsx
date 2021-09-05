import { Flex } from '@chakra-ui/react';
import React from 'react';

interface ImageGalleryButtonProps {
  handleClick: () => void;
  transform?: string;
}

export const ImageGalleryButton: React.FC<ImageGalleryButtonProps> = ({
  handleClick,
  transform,
}) => {
  return (
    <Flex
      bg="white"
      borderRadius="30px"
      w="40px"
      h="40px"
      m="0px 10px"
      justify="center"
      alignItems="center"
      userSelect="none"
      cursor="pointer"
      fontWeight="bold"
      fontSize="18px"
      zIndex={2}
      onClick={handleClick}
      transform={transform}
    >
      {'‣'}
    </Flex>
  );
};
