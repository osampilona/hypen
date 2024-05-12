import React from "react";
import shimmer from "@/components/Skeletons/Shimmer/shimmer.module.scss";

const Shimmer = () => {
  return (
    <div className={shimmer.wrapper} data-testid="shimmer-wrapper">
      <div className={shimmer.wrapper__shimmer} data-testid="shimmer"></div>
    </div>
  );
};

export default Shimmer;
