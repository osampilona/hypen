import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/lib/features/theme/theme";
import categoriesReducer from "@/lib/features/filters/categoriesSlice";
import timeSlotsReducer from "@/lib/features/filters/timeSlotsSlice";
import dateReducer from "@/lib/features/filters/dateSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    categories: categoriesReducer,
    timeSlots: timeSlotsReducer,
    date: dateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
