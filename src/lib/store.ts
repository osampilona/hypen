import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/lib/features/theme/theme";
import categoriesReducer from "@/lib/features/filters/categoriesSlice";
import timeSlotsReducer from "@/lib/features/filters/timeSlotsSlice";
import dateReducer from "@/lib/features/filters/dateSlice";
import checkboxReducer from "@/lib/features/filters/checkboxSlice";
import priceRangeSlice from "@/lib/features/filters/priceRangeSlice";
import inputSlice from "@/lib/features/filters/inputSlice";
import distanceRangeSlice from "@/lib/features/filters/distanceRangeSlice";
import filterDisplayReducer from "@/lib/features/filters/filterDisplaySlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    categories: categoriesReducer,
    timeSlots: timeSlotsReducer,
    date: dateReducer,
    checkbox: checkboxReducer,
    priceRange: priceRangeSlice,
    input: inputSlice,
    distanceRange: distanceRangeSlice,
    filterDisplay: filterDisplayReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
