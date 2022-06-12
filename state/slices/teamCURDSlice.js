import { createSlice } from "@reduxjs/toolkit";
// reduxtoolkit auth slice
const teamCURDSlice = createSlice({
  name: "teamCURD",
  initialState: {
    inProgress: false,
    type: "add",
    name: null,
    count: null,
    region: null,
    country: null,
  },
  reducers: {
    toggle(state, action) {
      state.inProgress = action.payload.inProgress;
      state.type = action.payload.type;
    },
    onChange(state, action) {
      state[action.payload.name] = action.payload.value;
    },
    reset(state) {
      state.name = null;
      state.count = null;
      state.region = null;
      state.country = null;
    },
  },
});
export const { onChange, reset, toggle } = teamCURDSlice.actions;

export default teamCURDSlice.reducer;
