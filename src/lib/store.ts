import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/lib/features/theme/theme";
import filterReducer from "@/lib/features/filters/filters";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    filters: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
