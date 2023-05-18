import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const authSlice = createSlice({
  name: "authToken",
  initialState: {
    authenticated: false,
    user_id: "",
    socket_id: "",
  },

  reducers: {
    SET_SOCKET_ID: (state, action) => {
      state.socket_id = action.payload;
    },
    SET_TOKEN: (state, action) => {
      state.authenticated = true;
      state.user_id = action.payload;
    },
    DELETE_TOKEN: (state) => {
      Cookies.remove("refreshToken");
      Cookies.remove("authorization");
      state.authenticated = false;
      state.user_id = "";
    },
  },
});

export const { SET_TOKEN, DELETE_TOKEN, SET_SOCKET_ID } = authSlice.actions;
export default authSlice.reducer;
