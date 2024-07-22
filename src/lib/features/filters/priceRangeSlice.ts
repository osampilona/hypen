import { serviceData } from "@/data/serviceData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PriceRangeState {
  min: number;
  max: number;
}

const calculatePriceRange = () => {
  const prices = serviceData.map((service) => service.servicePrice);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  };
};

const initialState: PriceRangeState = calculatePriceRange();

const priceRangeSlice = createSlice({
  name: "priceRange",
  initialState,
  reducers: {
    setPriceRange: (state, action: PayloadAction<Partial<PriceRangeState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setPriceRange } = priceRangeSlice.actions;
export default priceRangeSlice.reducer;
