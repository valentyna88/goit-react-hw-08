import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {},
});

export const authReducer = authSlice.reducer;
