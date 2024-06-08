import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './Features/Auth/index'

export const store = configureStore({
  reducer: {
    auth: AuthReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch