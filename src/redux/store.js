import { configureStore } from "@reduxjs/toolkit";
import iMstoreReducer from "./iMstoreSlice";

export const store = configureStore({
  reducer: {},
  iMstore: iMstoreReducer,
});
