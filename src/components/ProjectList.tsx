import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import { Timeline } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import { data } from "../data/projects";
import { Item } from "../types/item";
import { ProjectThumbnail } from "./ProjectThumbnail";

interface ProjectListProps {
  handleSelectedItem: (item: Item | null) => void;
}

export const ProjectList: React.FC<ProjectListProps> = ({
  handleSelectedItem,
}) => {
  return (
    <Grid gap={4} p="0px 25px 25px 25px">
      <Controller>
        <Scene
          triggerHook="onEnter"
          duration="300%"
          triggerElement="#project-container"
        >
          <Timeline paused wrapper={<Box id="project-container" />}>
            <ProjectThumbnail
              item={data[0]}
              handleSelectedItem={handleSelectedItem}
              width={"15%"}
            />
            <ProjectThumbnail
              item={data[1]}
              handleSelectedItem={handleSelectedItem}
              width={"35%"}
            />

            <ProjectThumbnail
              item={data[2]}
              handleSelectedItem={handleSelectedItem}
              width={"50%"}
            />
          </Timeline>
        </Scene>
      </Controller>
    </Grid>
  );
};
