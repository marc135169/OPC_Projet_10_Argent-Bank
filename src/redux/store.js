import {configureStore} from "@reduxjs/toolkit";
import authFormReducer from "./authFormSlice";
import authReducer from "./authSlice";
import {fetchUserProfile} from "../data/getUserProfile.js";


const preloadedState = {
    auth: {
        token: sessionStorage.getItem("token") || null,
        isAuthenticated: !!sessionStorage.getItem("token"),
        dataProfile: await fetchUserProfile(),
    },
};

const store = configureStore({
    reducer: {
        auth: authReducer,
        authForm: authFormReducer,
    },
    preloadedState,
});

export default store;

