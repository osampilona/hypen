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
    resetCheckboxes: (state) => {
      Object.keys(state).forEach((key) => {
        state[key] = false;
      });
    },
  },
});

export const { toggleCheckbox, setCheckboxState, resetCheckboxes } =
  checkboxSlice.actions;
export default checkboxSlice.reducer;
