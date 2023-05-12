import { configureStore } from "@reduxjs/toolkit";
import auth from "../modules/authSlice";

const store = configureStore({
    reducer: {
        auth,
    },

    devTools: process.env.NODE_ENV !== "production",

});

export default store;
