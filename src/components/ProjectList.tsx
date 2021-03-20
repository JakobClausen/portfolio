import { Grid } from "@chakra-ui/react";
import React from "react";
import { data } from "../data/projects";
import { Item, ProjectInfo } from "../types/item";
import { ProjectThumbnail } from "./ProjectThumbnail";

interface ProjectListProps {
  handleSelectedItem: (projectInfo: ProjectInfo) => void;
}

export const ProjectList: React.FC<ProjectListProps> = ({
  handleSelectedItem,
}) => {
  return (
    <Grid gap={4} p="0px 50px 50px 50px">
      <ProjectThumbnail item={data[0]} handleSelectedItem={handleSelectedItem}>
        <span>this</span>.projects
      </ProjectThumbnail>
      <ProjectThumbnail item={data[1]} handleSelectedItem={handleSelectedItem}>
        Gym hub <br /> <span>frontend</span>
      </ProjectThumbnail>
      <ProjectThumbnail item={data[2]} handleSelectedItem={handleSelectedItem}>
        Gym hub <br /> <span>backend</span>
      </ProjectThumbnail>
    </Grid>
  );
};
