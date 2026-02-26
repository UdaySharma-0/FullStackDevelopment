import { createSlice } from "@reduxjs/toolkit";

const FetchStatusSlice = createSlice({
  name: "FetchStatus",
  initialState: {
    fetchingDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchingDone = true;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const FetchStatusActions = FetchStatusSlice.actions;

export default FetchStatusSlice;
