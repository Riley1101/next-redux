import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
// reduxtoolkit auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: null,
    authenticated: false,
  },
  reducers: {
    login(state, action) {
      state.username = action.payload;
      state.authenticated = true;
    },
    logout(state) {
      state.username = null;
      state.authenticated = false;
      storage.removeItem("persist:root");
      localStorage.removeItem("persist:root");
      window.location.reload();
    },
  },
});
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
