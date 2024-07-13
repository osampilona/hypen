import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  selectedCategories: string[];
  selectedSubCategories: string[];
  startSlot: string | null;
  endSlot: string | null;
}

const initialState: FiltersState = {
  selectedCategories: [],
  selectedSubCategories: [],
  startSlot: null,
  endSlot: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleCategory: (state, action: PayloadAction<string>) => {
      const category = action.payload;
      const index = state.selectedCategories.indexOf(category);
      if (index === -1) {
        state.selectedCategories.push(category);
      } else {
        state.selectedCategories.splice(index, 1);
      }
    },
    toggleSubCategory: (state, action: PayloadAction<string>) => {
      const subCategory = action.payload;
      const index = state.selectedSubCategories.indexOf(subCategory);
      if (index === -1) {
        state.selectedSubCategories.push(subCategory);
      } else {
        state.selectedSubCategories.splice(index, 1);
      }
    },
    setStartSlot: (state, action: PayloadAction<string | null>) => {
      state.startSlot = action.payload;
    },
    setEndSlot: (state, action: PayloadAction<string | null>) => {
      state.endSlot = action.payload;
    },
  },
});

export const { toggleCategory, toggleSubCategory, setStartSlot, setEndSlot } =
  filtersSlice.actions;
export default filtersSlice.reducer;
