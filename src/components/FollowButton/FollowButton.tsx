"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiUserPlus, FiUserCheck } from "react-icons/fi";
import { RootState } from "@/lib/store";
import { toggleFollowCompany } from "@/lib/features/followSlice";
import styles from "./followButton.module.scss";

interface FollowButtonProps {
  companyId: string;
  companyName?: string;
  size?: number;
  className?: string;
  initialFollowState?: boolean;
}

const FollowButton: React.FC<FollowButtonProps> = ({
  companyId,
  companyName,
  size = 24,
  className = "",
  initialFollowState = false,
}) => {
  const dispatch = useDispatch();

  // Get follow state from Redux, fallback to initialFollowState if not set
  const isFollowing = useSelector(
    (state: RootState) =>
      state.follow.followedCompanies[companyId] ?? initialFollowState,
  );

  const handleClick = () => {
    dispatch(toggleFollowCompany(companyId));
    console.log(
      `${isFollowing ? "Unfollowed" : "Followed"} company:`,
      companyName || companyId,
    );
  };

  return (
    <button
      className={`${styles.followButton} ${className}`}
      onClick={handleClick}
      aria-label={isFollowing ? "Unfollow" : "Follow"}
      title={isFollowing ? "Following" : "Follow"}
    >
      {isFollowing ? (
        <FiUserCheck size={size} data-testid="company-following-icon" />
      ) : (
        <FiUserPlus size={size} data-testid="company-not-following-icon" />
      )}
    </button>
  );
};

export default FollowButton;
