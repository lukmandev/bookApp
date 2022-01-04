import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    competitions: null,
    competitionsLoaded: false,
    competitionsError: false,
    participations: null,
    participationsLoaded: false,
    participationsError: null,
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
        setParticipations(state, action){
            state.participations = action.payload;
        },
        setParticipationsLoaded(state, action){
            state.participationsLoaded = action.payload;
        },
        setParticipationsError(state, action){
            state.participationsError = action.payload;
        },
    },
});

export const {
    setCompetitionsLoaded,
    setCompetitions,
    setCompetitionsError,
    setParticipationsLoaded,
    setParticipationsError,
    setParticipations
} = admin.actions;
export default admin.reducer;