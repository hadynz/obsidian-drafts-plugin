import React, { useState } from 'react';
import { TreeItem } from './';

export const Tree = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  return Array.from({ length: 3 })
    .fill(null)
    .map((_, index) => (
      <TreeItem
        key={index}
        title="Hello world"
        contentPreview="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        tags={['#tag1', '#tag2']}
        lastModifiedDate={new Date()}
        onSelected={() => setSelectedIndex(index)}
        isSelected={index == selectedIndex}
      />
    ));
};
