import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import { Timeline } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import { data } from "../data/projects";
import { ProjectInfo } from "../types/item";
import { ProjectThumbnail } from "./ProjectThumbnail";

interface ProjectListProps {
  handleSelectedItem: (projectInfo: ProjectInfo | null) => void;
}

export const ProjectList: React.FC<ProjectListProps> = ({
  handleSelectedItem,
}) => {
  const right = {
    from: { x: "0%" },
    to: { x: "50%", ease: "slow(0.7, 0.7, false)" },
  };
  const left = {
    from: { x: "65%" },
    to: { x: "0%", ease: "slow(0.7, 0.7, false)" },
  };

  return (
    <Grid gap={4} p="0px 50px 50px 50px" id="ye1">
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
              tweenSettings={right}
            >
              <span>this</span>.portfolio
            </ProjectThumbnail>
            <ProjectThumbnail
              item={data[1]}
              handleSelectedItem={handleSelectedItem}
              tweenSettings={left}
            >
              Gym hub <br /> <span>frontend</span>
            </ProjectThumbnail>
            <ProjectThumbnail
              item={data[2]}
              handleSelectedItem={handleSelectedItem}
              tweenSettings={right}
            >
              Gym hub <br /> <span>backend</span>
            </ProjectThumbnail>
          </Timeline>
        </Scene>
      </Controller>
    </Grid>
  );
};
