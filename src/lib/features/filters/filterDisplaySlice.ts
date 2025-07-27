import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Import existing slice actions for auto-sync
import { setSelectedDate } from "./dateSlice";
import { resetTimeSlots } from "./timeSlotsSlice";
import { setPriceRange, resetPriceRange } from "./priceRangeSlice";
import { setSearchValue } from "./inputSlice";

interface FilterDisplayState {
  displaySummary: {
    date: string | null;
    timeSlot: string | null;
    categories: string | null;
    priceRange: string | null;
    location: string | null;
    paymentOptions: string | null;
    ratings: string | null;
    accessibility: string | null;
  };
  activeFilters: string[];
}

const initialState: FilterDisplayState = {
  displaySummary: {
    date: null,
    timeSlot: null,
    categories: null,
    priceRange: null,
    location: null,
    paymentOptions: null,
    ratings: null,
    accessibility: null,
  },
  activeFilters: [],
};

const filterDisplaySlice = createSlice({
  name: "filterDisplay",
  initialState,
  reducers: {
    updateDisplaySummary: (
      state,
      action: PayloadAction<{
        filterType: keyof FilterDisplayState["displaySummary"];
        displayText: string | null;
      }>,
    ) => {
      const { filterType, displayText } = action.payload;
      state.displaySummary[filterType] = displayText;

      if (displayText) {
        if (!state.activeFilters.includes(filterType)) {
          state.activeFilters.push(filterType);
        }
      } else {
        state.activeFilters = state.activeFilters.filter(
          (f: string) => f !== filterType,
        );
      }
    },

    clearDisplaySummary: (
      state,
      action: PayloadAction<keyof FilterDisplayState["displaySummary"]>,
    ) => {
      const filterType = action.payload;
      state.displaySummary[filterType] = null;
      state.activeFilters = state.activeFilters.filter(
        (f: string) => f !== filterType,
      );
    },

    clearAllDisplaySummaries: (state) => {
      Object.keys(state.displaySummary).forEach((key) => {
        state.displaySummary[key as keyof typeof state.displaySummary] = null;
      });
      state.activeFilters = [];
    },

    toggleActiveFilter: (
      state,
      action: PayloadAction<keyof FilterDisplayState["displaySummary"]>,
    ) => {
      const filterType = action.payload;
      if (state.activeFilters.includes(filterType)) {
        state.activeFilters = state.activeFilters.filter(
          (f: string) => f !== filterType,
        );
      } else {
        state.activeFilters.push(filterType);
      }
    },

    updateTimeSlotDisplay: (
      state,
      action: PayloadAction<{
        startSlot: string | null;
        endSlot: string | null;
      }>,
    ) => {
      const { startSlot, endSlot } = action.payload;
      if (startSlot && endSlot) {
        state.displaySummary.timeSlot = `${startSlot} - ${endSlot}`;
        if (!state.activeFilters.includes("timeSlot")) {
          state.activeFilters.push("timeSlot");
        }
      } else if (startSlot) {
        state.displaySummary.timeSlot = startSlot;
        if (!state.activeFilters.includes("timeSlot")) {
          state.activeFilters.push("timeSlot");
        }
      } else {
        state.displaySummary.timeSlot = null;
        state.activeFilters = state.activeFilters.filter(
          (f: string) => f !== "timeSlot",
        );
      }
    },
  },
  // Auto-sync with other slice actions
  extraReducers: (builder) => {
    builder.addCase(setSelectedDate, (state, action) => {
      if (action.payload) {
        const date = new Date(action.payload);
        state.displaySummary.date = date.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        });
        if (!state.activeFilters.includes("date")) {
          state.activeFilters.push("date");
        }
      } else {
        state.displaySummary.date = null;
        state.activeFilters = state.activeFilters.filter(
          (f: string) => f !== "date",
        );
      }
    });

    builder.addCase(resetTimeSlots, (state) => {
      state.displaySummary.timeSlot = null;
      state.activeFilters = state.activeFilters.filter(
        (f: string) => f !== "timeSlot",
      );
    });

    builder.addCase(setPriceRange, (state, action) => {
      const { min, max } = action.payload;
      state.displaySummary.priceRange = `$${min} - $${max}`;
      if (!state.activeFilters.includes("priceRange")) {
        state.activeFilters.push("priceRange");
      }
    });

    builder.addCase(resetPriceRange, (state) => {
      state.displaySummary.priceRange = null;
      state.activeFilters = state.activeFilters.filter(
        (f: string) => f !== "priceRange",
      );
    });

    builder.addCase(setSearchValue, (state, action) => {
      if (action.payload) {
        state.displaySummary.location = action.payload;
        if (!state.activeFilters.includes("location")) {
          state.activeFilters.push("location");
        }
      } else {
        state.displaySummary.location = null;
        state.activeFilters = state.activeFilters.filter(
          (f: string) => f !== "location",
        );
      }
    });
  },
});

export const {
  updateDisplaySummary,
  clearDisplaySummary,
  clearAllDisplaySummaries,
  toggleActiveFilter,
  updateTimeSlotDisplay,
} = filterDisplaySlice.actions;

// Re-export actions from individual slices for convenience
export { setSelectedDate } from "./dateSlice";
export { setStartSlot, setEndSlot, resetTimeSlots } from "./timeSlotsSlice";
export {
  toggleCategory,
  toggleSubCategory,
  resetCategories,
  resetSubCategories,
} from "./categoriesSlice";
export { setPriceRange, resetPriceRange } from "./priceRangeSlice";
export { setSearchValue } from "./inputSlice";
export {
  setValue as setDistanceValue,
  setVisibility as setDistanceVisibility,
} from "./distanceRangeSlice";
export { toggleCheckbox, resetCheckboxes } from "./checkboxSlice";

export default filterDisplaySlice.reducer;
