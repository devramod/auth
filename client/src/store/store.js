import { configureStore } from "@reduxjs/toolkit";
import userSliceReducers from "../states/user";

export const store = configureStore({
  reducer: userSliceReducers,
});
