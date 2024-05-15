import React from "react";
import SkeletonCard from "@/components/Skeletons/SkeletonCard/SkeletonCard";
import AvatarSkeleton from "@/components/Skeletons/AvatarSkeleton/AvatarSkeleton";
import CardImageSkeleton from "@/components/Skeletons/CardImageSkeleton/CardImageSkeleton";
import CardTitleSkeleton from "@/components/Skeletons/CardTitleSkeleton/CardTitleSkeleton";
import CardTextSkeleton from "@/components/Skeletons/CardTextSkeleton/CardTextSkeleton";
import CardDetailSkeleton from "@/components/Skeletons/CardDetailSkeleton/CardDetailSkeleton";

const SkeletonCardList = ({ skeletonArray }: { skeletonArray: number[] }) => (
  <>
    {skeletonArray.map((index) => (
      <SkeletonCard
        key={index}
        type="skeleton-wrapper"
        aria-label="skeleton wrapper"
      >
        <SkeletonCard key={index} type={"card"} aria-label="skeleton card">
          <CardImageSkeleton />
          <SkeletonCard
            type="wrapper-info"
            aria-label="skeleton card info wrapper"
          >
            <CardTitleSkeleton />
            <CardTextSkeleton />
            <CardTextSkeleton />
            <div style={{ display: "flex", alignItems: "center" }}>
              <AvatarSkeleton />
              <CardDetailSkeleton />
            </div>
          </SkeletonCard>
        </SkeletonCard>
      </SkeletonCard>
    ))}
  </>
);

export default SkeletonCardList;
