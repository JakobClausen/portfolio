import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { ProjectInfo } from "../types/item";
import { ProjectExpanded } from "./ProjectExpanded";
import { ProjectList } from "./ProjectList";

export const Projects: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ProjectInfo>(null);

  const handleSelectedItem = (item: ProjectInfo) => {
    setSelectedItem(item);
  };
  return (
    <AnimateSharedLayout type="crossfade">
      <ProjectList handleSelectedItem={handleSelectedItem} />
      <AnimatePresence>
        {selectedItem && (
          <ProjectExpanded
            projectInfo={selectedItem}
            handleSelectedItem={handleSelectedItem}
          />
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};
