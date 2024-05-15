import React from "react";
import SkeletonCard from "@/components/Skeletons/SkeletonCard/SkeletonCard";
import Shimmer from "@/components/Skeletons/Shimmer/Shimmer";

const CardImageSkeleton = () => (
  <SkeletonCard type="image" aria-label="skeleton card image">
    <Shimmer />
  </SkeletonCard>
);

export default CardImageSkeleton;
