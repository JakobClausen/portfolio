import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { ProjectInfo } from "../types/item";
import { ProjectExpanded } from "./ProjectExpanded";
import { ProjectList } from "./ProjectList";

export const Projects: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ProjectInfo | null>(null);

  const handleSelectedItem = (item: ProjectInfo | null) => {
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
