import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TimeSlotsState {
  startSlot: string | null;
  endSlot: string | null;
}

const initialState: TimeSlotsState = {
  startSlot: null,
  endSlot: null,
};

const timeSlotsSlice = createSlice({
  name: "timeSlots",
  initialState,
  reducers: {
    setStartSlot: (state, action: PayloadAction<string | null>) => {
      state.startSlot = action.payload;
    },
    setEndSlot: (state, action: PayloadAction<string | null>) => {
      state.endSlot = action.payload;
    },
    toggleSlot: (state, action: PayloadAction<string>) => {
      const slot = action.payload;
      if (!state.startSlot) {
        state.startSlot = slot;
      } else if (!state.endSlot) {
        if (state.startSlot === slot) {
          state.startSlot = null;
        } else if (state.startSlot < slot) {
          state.endSlot = slot;
        } else {
          state.endSlot = state.startSlot;
          state.startSlot = slot;
        }
      } else {
        state.startSlot = slot;
        state.endSlot = null;
      }
    },
    resetTimeSlots: (state) => {
      state.startSlot = null;
      state.endSlot = null;
    },
  },
});

export const { setStartSlot, setEndSlot, toggleSlot, resetTimeSlots } = timeSlotsSlice.actions;
export default timeSlotsSlice.reducer;
