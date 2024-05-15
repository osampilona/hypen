import React from "react";
import SkeletonCard from "@/components/Skeletons/SkeletonCard/SkeletonCard";
import Shimmer from "@/components/Skeletons/Shimmer/Shimmer";

const CardTextSkeleton = () => (
  <SkeletonCard type="text" aria-label="skeleton card info text">
    <Shimmer />
  </SkeletonCard>
);

export default CardTextSkeleton;
