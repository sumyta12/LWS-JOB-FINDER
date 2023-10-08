import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  GetAllJobsResponse,
  AddJobsInResponse,
  EditJobsInResponse,
  DeleteJobsInResponse,
} from "./JobApi";

const initialState = {
  isLoading: false,
  job: [],
  isError: false,
  error: "",
};

export const fetchalljobaction = createAsyncThunk("job/fetchall", async () => {
  const jobsResponse = await GetAllJobsResponse();

  return jobsResponse.json();
});

export const createjobaction = createAsyncThunk("job/create", async (data) => {
  const jobsResponse = await AddJobsInResponse(data);
  const response = await jobsResponse.json();

  return response;
});

export const updatejobaction = createAsyncThunk(
  "job/update",
  async ({ id, data }) => {
    const jobsResponse = await EditJobsInResponse(id, data);

    return await jobsResponse.json();
  }
);

export const removejobaction = createAsyncThunk("job/remove", async (id) => {
  await DeleteJobsInResponse(id);
  return id;
});

const JobSlice = createSlice({
  name: "job",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchalljobaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchalljobaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.job = action.payload;
      })
      .addCase(fetchalljobaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.job = [];
        state.error = action.error.code;
      })
      .addCase(createjobaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(createjobaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.job.push(action.payload);
      })
      .addCase(createjobaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.code;
      })
      .addCase(updatejobaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(updatejobaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.job = state.job.map((jobs) => {
          if (jobs.id === action.payload.id) {
            return {
              jobs,
              ...action.payload,
            };
          }
          return jobs;
        });
      })
      .addCase(updatejobaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.code;
      })
      .addCase(removejobaction.pending, (state) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(removejobaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.job = state.job.filter((jobs) => jobs.id !== action.meta.arg);
      })
      .addCase(removejobaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.code;
      });
  },
});

export default JobSlice.reducer;
