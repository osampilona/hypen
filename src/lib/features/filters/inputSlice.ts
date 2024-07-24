import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InputState {
  searchValue: string;
}

const initialState: InputState = {
  searchValue: "",
};

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = inputSlice.actions;
export default inputSlice.reducer;
