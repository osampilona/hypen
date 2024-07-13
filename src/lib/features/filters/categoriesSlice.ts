import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoriesState {
  selectedCategories: string[];
  selectedSubCategories: string[];
}

const initialState: CategoriesState = {
  selectedCategories: [],
  selectedSubCategories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
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
  },
});

export const { toggleCategory, toggleSubCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;