import { configureStore } from "@reduxjs/toolkit";
import JobSlice from "../features/Job/JobSlice";
import FilterSlice from "../features/FilterJob/FilterSlice";

const store = configureStore({
  reducer: {
    job: JobSlice,
    filter: FilterSlice,
  },
});

export default store;
