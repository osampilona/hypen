import React from "react";
import SkeletonCard from "@/components/Skeletons/SkeletonCard/SkeletonCard";
import Shimmer from "@/components/Skeletons/Shimmer/Shimmer";

const CardDetailSkeleton = () => (
  <SkeletonCard type="detail" aria-label="skeleton card detail">
    <Shimmer />
  </SkeletonCard>
);

export default CardDetailSkeleton;
