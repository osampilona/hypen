import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FollowState {
  followedCompanies: Record<string, boolean>; // companyId -> isFollowing
}

const initialState: FollowState = {
  followedCompanies: {},
};

const followSlice = createSlice({
  name: "follow",
  initialState,
  reducers: {
    toggleFollowCompany: (state, action: PayloadAction<string>) => {
      const companyId = action.payload;
      state.followedCompanies[companyId] = !state.followedCompanies[companyId];
    },
    setFollowCompany: (
      state,
      action: PayloadAction<{ companyId: string; isFollowing: boolean }>,
    ) => {
      const { companyId, isFollowing } = action.payload;
      state.followedCompanies[companyId] = isFollowing;
    },
    unfollowCompany: (state, action: PayloadAction<string>) => {
      const companyId = action.payload;
      state.followedCompanies[companyId] = false;
    },
    followCompany: (state, action: PayloadAction<string>) => {
      const companyId = action.payload;
      state.followedCompanies[companyId] = true;
    },
    initializeFollowState: (
      state,
      action: PayloadAction<Record<string, boolean>>,
    ) => {
      state.followedCompanies = {
        ...state.followedCompanies,
        ...action.payload,
      };
    },
  },
});

export const {
  toggleFollowCompany,
  setFollowCompany,
  unfollowCompany,
  followCompany,
  initializeFollowState,
} = followSlice.actions;

export default followSlice.reducer;
