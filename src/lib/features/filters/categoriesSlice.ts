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
      if (state.selectedCategories.includes(category)) {
        state.selectedCategories = state.selectedCategories.filter(
          (item) => item !== category,
        );
      } else {
        state.selectedCategories = [...state.selectedCategories, category];
      }
    },
    toggleSubCategory: (state, action: PayloadAction<string>) => {
      const subCategory = action.payload;
      if (state.selectedSubCategories.includes(subCategory)) {
        state.selectedSubCategories = state.selectedSubCategories.filter(
          (item) => item !== subCategory,
        );
      } else {
        state.selectedSubCategories = [
          ...state.selectedSubCategories,
          subCategory,
        ];
      }
    },
  },
});

export const { toggleCategory, toggleSubCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
