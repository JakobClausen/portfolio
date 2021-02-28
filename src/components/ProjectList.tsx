import { Box, Text, Grid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { data } from "../data/projects";
import { Item } from "../types/item";
import disableScroll from "disable-scroll";

interface ProjectListProps {
  handleSelectedItem: (item: Item) => void;
}

export const ProjectList: React.FC<ProjectListProps> = ({
  handleSelectedItem,
}) => {
  return (
    <Grid gap={4} p="0px 50px 50px 50px">
      {data.map((item) => (
        <motion.div
          key={item.title}
          onClick={() => {
            handleSelectedItem(item);
            disableScroll.on();
          }}
          className="card-container"
          layoutId={`card-container-${item.id}`}
        >
          <div className="card-content">
            {item.img ? (
              <motion.img
                src={item.img}
                alt="Picture of the author"
                className="card-img"
                layoutId={`card-img-${item.id}`}
              />
            ) : (
              <motion.div
                className="portfolio-img"
                layoutId={`portfolio-img-${item.id}`}
              >
                <motion.p layoutId={`portfolio-img-text-${item.id}`}>
                  <span>this</span>.portfolio
                </motion.p>
              </motion.div>
            )}

            <motion.div layoutId={`card-text-${item.id}`} />
          </div>
        </motion.div>
      ))}
    </Grid>
  );
};
