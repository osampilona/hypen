// redux/filters/distanceRangeSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { serviceData } from "@/data/serviceData";

// Define the shape of the slice state
interface SliderState {
  value: number; // Holds the current value of the slider
}

// Calculate the maximum distance from serviceData
const calculateDistanceRange = (): SliderState => {
  const distances = serviceData.map((service) =>
    Number(service.serviceDistance),
  );

  return { value: 0 }; // Initial value can be 0
};

const initialState: SliderState = calculateDistanceRange();

const distanceRangeSlice = createSlice({
  name: "distanceRange",
  initialState,
  reducers: {
    // Action to update the slider value
    setValue(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  },
});

export const { setValue } = distanceRangeSlice.actions;

export default distanceRangeSlice.reducer;
