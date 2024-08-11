import { serviceData } from "@/data/serviceData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PriceRangeState {
  min: number;
  max: number;
  currentMin: number;
  currentMax: number;
}

const calculatePriceRange = () => {
  const prices = serviceData.map((service) => service.servicePrice);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  };
};

const initialRange = calculatePriceRange();

const initialState: PriceRangeState = {
  ...initialRange,
  currentMin: initialRange.min,
  currentMax: initialRange.max,
};

const priceRangeSlice = createSlice({
  name: "priceRange",
  initialState,
  reducers: {
    setPriceRange: (
      state,
      action: PayloadAction<{ min: number; max: number }>,
    ) => {
      state.currentMin = action.payload.min;
      state.currentMax = action.payload.max;
    },
    resetPriceRange: (state) => {
      state.currentMin = state.min;
      state.currentMax = state.max;
      return state;
    },
  },
});

export const { setPriceRange, resetPriceRange } = priceRangeSlice.actions;
export default priceRangeSlice.reducer;

// Add this selector
export const selectPriceRange = (state: { priceRange: PriceRangeState }) =>
  state.priceRange;
