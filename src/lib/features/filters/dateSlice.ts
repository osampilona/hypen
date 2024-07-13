import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DateState {
  selectedDate: string | null; // Store date as ISO string
}

const initialState: DateState = {
  selectedDate: null,
};

const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setSelectedDate: (state, action: PayloadAction<string | null>) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { setSelectedDate } = dateSlice.actions;
export default dateSlice.reducer;
