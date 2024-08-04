// redux/filters/distanceRangeSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { serviceData } from "@/data/serviceData";

interface SliderState {
  value: number;
  isVisible: boolean;
}

const calculateDistanceRange = (): SliderState => {
  const distances = serviceData.map((service) =>
    Number(service.serviceDistance),
  );
  return { value: 0, isVisible: false };
};

const initialState: SliderState = calculateDistanceRange();

const distanceRangeSlice = createSlice({
  name: "distanceRange",
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
    setVisibility(state, action: PayloadAction<boolean>) {
      state.isVisible = action.payload;
    },
  },
});

export const { setValue, setVisibility } = distanceRangeSlice.actions;
export default distanceRangeSlice.reducer;
