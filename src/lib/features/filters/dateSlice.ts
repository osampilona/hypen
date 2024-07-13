import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DateState {
  selectedDate: Date | null;
}

const initialState: DateState = {
  selectedDate: null,
};

const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setSelectedDate: (state, action: PayloadAction<Date | null>) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { setSelectedDate } = dateSlice.actions;
export default dateSlice.reducer;
