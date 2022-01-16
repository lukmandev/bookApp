import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    competitions: null,
    competitionsLoaded: false,
    competitionsError: false,
}

const admin = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setCompetitions(state, action){
            state.competitions = action.payload;
        },
        setCompetitionsError(state, action){
            state.competitionsError = action.payload;
        },
        setCompetitionsLoaded(state, action){
            state.competitionsLoaded = action.payload;
        },
    },
});

export const {
    setCompetitionsLoaded,
    setCompetitions,
    setCompetitionsError,
} = admin.actions;
export default admin.reducer;