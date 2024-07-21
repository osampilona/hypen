import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/lib/features/theme/theme";
import categoriesReducer from "@/lib/features/filters/categoriesSlice";
import timeSlotsReducer from "@/lib/features/filters/timeSlotsSlice";
import dateReducer from "@/lib/features/filters/dateSlice";
import checkboxReducer from "@/lib/features/filters/checkboxSlice";
import priceRangeSlice from "@/lib/features/filters/priceRangeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    categories: categoriesReducer,
    timeSlots: timeSlotsReducer,
    date: dateReducer,
    checkbox: checkboxReducer,
    priceRange: priceRangeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
