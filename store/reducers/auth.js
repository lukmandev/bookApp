import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuth: false,
    authInfoLoaded: false,
    profile: null,
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action){
            state.isAuth = action.payload;
        },
        setAuthInfoLoaded(state, action){
            state.authInfoLoaded = action.payload;
        },
        setProfile(state, action){
            state.profile = action.payload;
        },
    },
});

export const {
    setProfile,
    setAuth,
    setAuthInfoLoaded,
} = auth.actions;
export default auth.reducer;