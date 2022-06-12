import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api_end } from "@/utils/api_end";

export const getTeams = createAsyncThunk(
  "/team/getTeam",
  async (obj, { dispatch, getState }) => {
    return await fetch(
      `${api_end}/teams?per_page=${getState().teams.per_page}`
    ).then((res) => res.json());
  }
);

let initialState = {
  data: [],
  status: null,
  per_page: 10,
};
const teamSlice = createSlice({
  name: "teams",
  initialState: initialState,
  reducers: {
    loadMore(state) {
      // load 10 more player and dispath in the state
      state.per_page += 10;
    },
    reset(state) {
      state = initialState;
    },
  },
  extraReducers: {
    [getTeams.pending]: (state, action) => {
      state.status = "loading";
    },
    [getTeams.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "success";
    },
    [getTeams.rejected]: (state, action) => {
      state.status = "error";
    },
  },
});
export const { loadMore, reset } = teamSlice.actions;

export default teamSlice.reducer;
