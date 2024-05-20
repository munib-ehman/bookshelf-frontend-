import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: {
        isLoggedIn: false,
        userData: null
    }
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginReducer: (state, action) => {
            state.auth.isLoggedIn = true;
            state.auth.userData = action.payload;
        },
        logoutReducer: (state, action) => {
            state.auth.isLoggedIn = false;
            state.auth.userData = null;
        },
    }
});

export const { loginReducer, logoutReducer } = authSlice.actions;
export default authSlice.reducer;
