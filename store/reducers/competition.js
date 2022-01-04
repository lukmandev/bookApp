import { createSlice } from '@reduxjs/toolkit';
import {competitionsTabs} from "../../constants/main";

const initialState = {
    userCompetitions: null,
    userCompetitionsLoaded: false,
    userCompetitionsError: null,
    publicCompetitions: null,
    publicCompetitionsLoaded: false,
    publicCompetitionsError: null,
    detailCompetition: null,
    detailCompetitionLoaded: false,
    detailCompetitionError: null,
    selectedTab: competitionsTabs[0],
    searchCompetitionsLoaded: false,
    searchCompetitions: null,
    searchCompetitionsError: null,
}

const competition = createSlice({
    name: 'competition',
    initialState,
    reducers: {
        setUserCompetitions(state, action){
            state.userCompetitions = action.payload;
        },
        setUserCompetitionsLoaded(state, action){
            state.userCompetitionsLoaded = action.payload;
        },
        setUserCompetitionsError(state, action){
            state.userCompetitionsError = action.payload;
        },
        setPublicCompetitions(state, action){
            state.publicCompetitions = action.payload;
        },
        setPublicCompetitionsLoaded(state, action){
            state.publicCompetitionsLoaded = action.payload;
        },
        setPublicCompetitionsError(state, action){
            state.publicCompetitionsError = action.payload;
        },
        setDetailCompetition(state, action){
            state.detailCompetition = action.payload;
        },
        setDetailCompetitionLoaded(state, action){
            state.detailCompetitionLoaded = action.payload;
        },
        setDetailCompetitionError(state, action){
            state.detailCompetitionError = action.payload;
        },
        setSelectedTab(state, action){
            state.selectedTab = action.payload;
        },
        setSearchCompetitionsLoaded(state, action){
            state.searchCompetitionsLoaded = action.payload;
        },
        setSearchCompetitions(state, action){
            state.searchCompetitions = action.payload;
        },
        setSearchCompetitionsError(state, action){
            state.searchCompetitionsError = action.payload;
        }
    },
});

export const {
    setUserCompetitionsLoaded,
    setUserCompetitionsError,
    setUserCompetitions,
    setPublicCompetitionsLoaded,
    setPublicCompetitions,
    setPublicCompetitionsError,
    setDetailCompetitionLoaded,
    setDetailCompetition,
    setDetailCompetitionError,
    setSelectedTab,
    setSearchCompetitions,
    setSearchCompetitionsError,
    setSearchCompetitionsLoaded
} = competition.actions;
export default competition.reducer;