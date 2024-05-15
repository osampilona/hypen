// SkeletonCardList.tsx

import React from "react";
import SkeletonCard from "@/components/Skeletons/SkeletonCard/SkeletonCard";
import Shimmer from "@/components/Skeletons/Shimmer/Shimmer";

const SkeletonCardList = ({ skeletonArray }: { skeletonArray: number[] }) => (
  <>
    {skeletonArray.map((index) => (
      <SkeletonCard
        key={index}
        type="skeleton-wrapper"
        aria-label="skeleton wrapper"
      >
        <SkeletonCard key={index} type={"card"} aria-label="skeleton card">
          <SkeletonCard type="image" aria-label="skeleton card image">
            <Shimmer />
          </SkeletonCard>
          <SkeletonCard
            type="wrapper-info"
            aria-label="skeleton card info wrapper"
          >
            <SkeletonCard type="title" aria-label="skeleton card info title">
              <Shimmer />
            </SkeletonCard>
            <SkeletonCard type="text" aria-label="skeleton card info text">
              <Shimmer />
            </SkeletonCard>
            <SkeletonCard type="text" aria-label="skeleton card info text">
              <Shimmer />
            </SkeletonCard>
            <div style={{ display: "flex", alignItems: "center" }}>
              <SkeletonCard type="avatar" aria-label="skeleton card avatar">
                <Shimmer />
              </SkeletonCard>
              <SkeletonCard type="detail" aria-label="skeleton card detail">
                <Shimmer />
              </SkeletonCard>
            </div>
          </SkeletonCard>
        </SkeletonCard>
      </SkeletonCard>
    ))}
  </>
);

export default SkeletonCardList;
