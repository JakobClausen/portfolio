import { Box } from "@chakra-ui/react";
import { motion, MotionStyle } from "framer-motion";

interface TimelineUnitProps {
  title: string;
  icon: string;
  style: MotionStyle;
}

export const TimelineUnit: React.FC<TimelineUnitProps> = ({
  icon,
  style: { width, ...restStyle },
}) => {
  return (
    <motion.div
      style={{
        display: "inline-block",
        width,
      }}
    >
      <Box display="flex" flexDirection="column">
        <Box display="flex" justifyContent="center">
          <motion.img
            style={{ width: 30, height: 30, marginBottom: 10 }}
            src={icon}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              bounce: 0.5,
              duration: 0.4,
              delay: 1.1,
            }}
          />
        </Box>
        <Box display="flex" justifyContent="center">
          <motion.div
            initial={{ height: 0, opacity: 0.7 }}
            animate={{ height: 20, opacity: 1 }}
            transition={{
              type: "spring",
              bounce: 0.5,
              duration: 0.5,
              delay: 0.9,
            }}
            style={{
              width: "1px",
              backgroundColor: restStyle.backgroundColor,
            }}
          />
        </Box>
      </Box>
      <motion.div
        style={{
          width: "100%",
          height: "8px",
          ...restStyle,
        }}
      />
    </motion.div>
  );
};
