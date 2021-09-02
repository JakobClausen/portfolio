import React, { useState } from 'react';
import { Item } from '../types/item';
import { ProjectExpanded } from './ProjectExpanded';
import { ProjectList } from './ProjectList';

export const Projects: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleSelectedItem = (item: Item | null) => {
    setSelectedItem(item);
  };
  return (
    <>
      <ProjectList handleSelectedItem={handleSelectedItem} />
      {selectedItem && (
        <ProjectExpanded
          item={selectedItem}
          handleSelectedItem={handleSelectedItem}
        />
      )}
    </>
  );
};
