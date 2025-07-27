import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import {
  toggleFollowCompany,
  followCompany,
  unfollowCompany,
  setFollowCompany,
} from "@/lib/features/followSlice";

export const useFollow = (companyId: string, initialState = false) => {
  const dispatch = useDispatch();

  const isFollowing = useSelector(
    (state: RootState) =>
      state.follow.followedCompanies[companyId] ?? initialState,
  );

  const toggleFollow = () => {
    dispatch(toggleFollowCompany(companyId));
  };

  const follow = () => {
    dispatch(followCompany(companyId));
  };

  const unfollow = () => {
    dispatch(unfollowCompany(companyId));
  };

  const setFollow = (isFollowing: boolean) => {
    dispatch(setFollowCompany({ companyId, isFollowing }));
  };

  return {
    isFollowing,
    toggleFollow,
    follow,
    unfollow,
    setFollow,
  };
};
