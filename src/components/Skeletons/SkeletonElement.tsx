import React from "react";
import skeleton from "@/components/Skeletons/skeletonElement.module.scss";

const SkeletonElement = ({
  type,
  children,
}: {
  type: string;
  children?: React.ReactNode;
}) => {
  const classes = `${skeleton.skeleton} ${skeleton[type]}`;

  return <div className={classes}>{children}</div>;
};

export default SkeletonElement;
