import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterType: "",
  searchText: "",
  Status: "Default",
};

const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filteraction: (state, action) => {
      state.filterType = action.payload;
    },
    searchaction: (state, action) => {
      state.searchText = action.payload;
    },
    statusaction: (state, action) => {
      state.Status = action.payload;
    },
  },
});

export default FilterSlice.reducer;
export const { filteraction, searchaction,statusaction } = FilterSlice.actions;
