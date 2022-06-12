import authSlice from "@/state/slices/authSlice";
import playerSlice from "@/state/slices/playerSlice";
import teamCURDSlice from "@/state/slices/teamCURDSlice";
import teamSlice from "@/state/slices/teamSlice";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
const reducers = combineReducers({
  players: playerSlice,
  auth: authSlice,
  teams: teamSlice,
  teamCURD: teamCURDSlice,
});
const persistConfig = {
  timeout: 2000,
  key: "root",
  storage,
  whitelist: ["players", "auth", "teams", "teamCURD"],
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
