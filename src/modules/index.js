import { combineReducers } from "redux";
import auth from "./auth";
import menu from "./menu";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "menu"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ menu, auth })
);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
