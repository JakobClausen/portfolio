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
  const one = {
    from: { x: "0%" },
    to: { x: "20%", ease: "slow(0.7, 0.7, false)" },
  };
  const two = {
    from: { x: "0%" },
    to: { x: "30%", ease: "slow(0.7, 0.7, false)" },
  };
  const three = {
    from: { x: "0%" },
    to: { x: "40%", ease: "slow(0.7, 0.7, false)" },
  };

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
              tweenSettings={one}
            >
              <span>this</span>.portfolio
            </ProjectThumbnail>
            <ProjectThumbnail
              item={data[1]}
              handleSelectedItem={handleSelectedItem}
              tweenSettings={two}
            >
              Gym hub <br /> <span>frontend</span>
            </ProjectThumbnail>
            <ProjectThumbnail
              item={data[2]}
              handleSelectedItem={handleSelectedItem}
              tweenSettings={three}
            >
              Gym hub <br /> <span>backend</span>
            </ProjectThumbnail>
          </Timeline>
        </Scene>
      </Controller>
    </Grid>
  );
};
