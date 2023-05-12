import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authToken",
  initialState: {
    authenticated: false,
    username: "",
  },

  reducers: {
    SET_TOKEN: (state, action) => {
      state.authenticated = true;
      state.username = action.payload.userName;
    },
    DELETE_TOKEN: (state) => {
      state.authenticated = false;
      state.username = "";
    },
  },
});

export const { SET_TOKEN, DELETE_TOKEN } = authSlice.actions;
export default authSlice.reducer;
