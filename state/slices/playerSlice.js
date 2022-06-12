import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api_end } from "@/utils/api_end";

export const getPlayers = createAsyncThunk(
  "/players/getPlayers",
  async (obj, { dispatch, getState }) => {
    return await fetch(
      `${api_end}/players?per_page=${getState().players.per_page}`
    ).then((res) => res.json());
  }
);

let initialState = {
  data: [],
  status: null,
  per_page: 10,
};
const playerSlice = createSlice({
  name: "Players",
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
    [getPlayers.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPlayers.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "success";
    },
    [getPlayers.rejected]: (state, action) => {
      state.status = "error";
    },
  },
});
export const { loadMore, reset } = playerSlice.actions;

export default playerSlice.reducer;
