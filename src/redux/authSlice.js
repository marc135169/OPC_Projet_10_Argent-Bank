import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    token: null,
    isAuthenticated: false,
    dataProfile: null,
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            state.isAuthenticated = !!action.payload;
        },
        clearToken: (state) => {
            state.token = null;
            state.isAuthenticated = false;
        },
        setDataProfile: (state, action) => {
            state.dataProfile = action.payload;            
        },
        clearDataProfile: (state) => {
            state.dataProfile = null;
        }
        
    },
});

export const { clearDataProfile,setDataProfile,setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;