import React from "react";
import SkeletonCard from "@/components/Skeletons/SkeletonCard/SkeletonCard";
import Shimmer from "@/components/Skeletons/Shimmer/Shimmer";

const AvatarSkeleton = () => (
  <SkeletonCard type="avatar" aria-label="skeleton card avatar">
    <Shimmer />
  </SkeletonCard>
);

export default AvatarSkeleton;
