import React, { useState } from 'react';

import { FileItem, TreeItem } from './TreeItem';

type TreeProps = {
  inbox: FileItem[];
};

export const Tree = ({ inbox }: TreeProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(null);
  return inbox.map((file, index) => (
    <TreeItem
      key={file.title}
      file={file}
      onSelected={() => setSelectedIndex(index)}
      isSelected={index === selectedIndex}
    />
  ));
};
