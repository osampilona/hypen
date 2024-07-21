import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PriceRangeState {
  min: number;
  max: number;
}

const initialState: PriceRangeState = {
  min: 0,
  max: 100,
};

const priceRangeSlice = createSlice({
  name: "priceRange",
  initialState,
  reducers: {
    setPriceRange: (state, action: PayloadAction<Partial<PriceRangeState>>) => {
      const { min, max } = action.payload;
      if (min !== undefined) state.min = min;
      if (max !== undefined) state.max = max;
    },
  },
});

export const { setPriceRange } = priceRangeSlice.actions;
export default priceRangeSlice.reducer;
