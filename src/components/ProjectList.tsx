import { Box, Grid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { data } from "../data/projects";
import { Item } from "../types/item";

interface ProjectListProps {
  handleSelectedItem: (item: Item) => void;
}

export const ProjectList: React.FC<ProjectListProps> = ({
  handleSelectedItem,
}) => {
  return (
    <Grid gap={4} p="70px">
      {data.map((item) => (
        <motion.div
          key={item.title}
          onClick={() => handleSelectedItem(item)}
          className="card-container"
          layoutId={`card-container-${item.id}`}
        >
          <div className="card-content">
            <motion.img
              src={item.img}
              alt="Picture of the author"
              className="card-img"
              layoutId={`card-img-${item.id}`}
            />
            <motion.div className="card-text" layoutId={`card-text-${item.id}`}>
              <p>{item.title}</p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </Grid>
  );
};
