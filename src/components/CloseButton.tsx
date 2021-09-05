import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

interface CloseButtonProps {
  onClose: () => void;
}

export const CloseButton: React.FC<CloseButtonProps> = ({ onClose }) => {
  return (
    <Box position="absolute" top={0} right={0} onClick={onClose} cursor="pointer">
      <motion.img
        src="/icons/close.png"
        alt="Close logo"
        className="close-icon"
        transition={{
          type: "spring",
          bounce: 0.25,
          delay: 0.3,
        }}
        initial={{ x: 50, opacity: 0.5 }}
        animate={{ x: 0, opacity: 0.8 }}
        exit={{ x: 50, opacity: 0 }}
      />
    </Box>
  );
};
