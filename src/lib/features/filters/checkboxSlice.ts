import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CheckboxState {
  [key: string]: boolean;
}

const initialState: CheckboxState = {};

const checkboxSlice = createSlice({
  name: "checkbox",
  initialState,
  reducers: {
    toggleCheckbox: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state[id] = !state[id];
    },
    setCheckboxState: (
      state,
      action: PayloadAction<{ id: string; checked: boolean }>,
    ) => {
      const { id, checked } = action.payload;
      state[id] = checked;
    },
  },
});

export const { toggleCheckbox, setCheckboxState } = checkboxSlice.actions;
export default checkboxSlice.reducer;
