import { configureStore } from "@reduxjs/toolkit";
import auth from "../modules/authSlice";
import chat from "../modules/chatSlice"

const store = configureStore({
    reducer: {
        auth,
        chat,
    },

    devTools: process.env.NODE_ENV !== "production",

});

export default store;
