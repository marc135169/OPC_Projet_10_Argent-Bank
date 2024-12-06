import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    email: '',
    password: '',
};

const authFormSlice = createSlice({
    name: 'authForm',
    initialState,
    reducers:{
        updateField: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        },
        resetForm: () => initialState,
    },
});

export const { updateField, resetForm } = authFormSlice.actions;
export default authFormSlice.reducer;