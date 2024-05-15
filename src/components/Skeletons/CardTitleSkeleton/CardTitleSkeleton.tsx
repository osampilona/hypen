import React from "react";
import SkeletonCard from "@/components/Skeletons/SkeletonCard/SkeletonCard";
import Shimmer from "@/components/Skeletons/Shimmer/Shimmer";

const CardTitleSkeleton = () => (
  <SkeletonCard type="title" aria-label="skeleton card info title">
    <Shimmer />
  </SkeletonCard>
);

export default CardTitleSkeleton;
