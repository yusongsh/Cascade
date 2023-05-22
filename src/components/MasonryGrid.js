import React from "react";

const MasonryGrid = ({ children }) => {
  return <div className="gap-2 columns-2 lg:columns-3">{children}</div>;
};

export default MasonryGrid;
