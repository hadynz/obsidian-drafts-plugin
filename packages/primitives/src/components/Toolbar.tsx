import React from 'react';

type ToolbarProps = {
  children: React.ReactNode;
};

export const Toolbar = ({ children }: ToolbarProps) => {
  return <div className="nav-buttons-container">{children}</div>;
};
