import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccordionSelection {
  value: string | null;
  displayText: string | null;
}

interface AccordionSelectionsState {
  timeslot: AccordionSelection;
  date: AccordionSelection;
  // Add more selection types as needed
}

const initialState: AccordionSelectionsState = {
  timeslot: { value: null, displayText: null },
  date: { value: null, displayText: null },
};

const accordionSelectionsSlice = createSlice({
  name: "accordionSelections",
  initialState,
  reducers: {
    setTimeslotSelection: (
      state,
      action: PayloadAction<{ value: string | null; displayText: string | null }>
    ) => {
      state.timeslot = action.payload;
    },
    setDateSelection: (
      state,
      action: PayloadAction<{ value: string | null; displayText: string | null }>
    ) => {
      state.date = action.payload;
    },
    clearTimeslotSelection: (state) => {
      state.timeslot = { value: null, displayText: null };
    },
    clearDateSelection: (state) => {
      state.date = { value: null, displayText: null };
    },
    clearAllSelections: (state) => {
      state.timeslot = { value: null, displayText: null };
      state.date = { value: null, displayText: null };
    },
  },
});

export const {
  setTimeslotSelection,
  setDateSelection,
  clearTimeslotSelection,
  clearDateSelection,
  clearAllSelections,
} = accordionSelectionsSlice.actions;

export default accordionSelectionsSlice.reducer;
