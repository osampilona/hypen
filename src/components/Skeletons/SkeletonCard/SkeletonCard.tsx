import React from "react";
import skeleton from "@/components/Skeletons/SkeletonCard/skeletonCard.module.scss";

const SkeletonElement = ({
  type,
  children,
}: {
  type: string;
  children?: React.ReactNode;
}) => {
  const classes = `${skeleton.skeleton} ${skeleton[type]}`;

  return (
    <div data-testid="skeleton-card" className={classes}>
      {children}
    </div>
  );
};

export default SkeletonElement;
