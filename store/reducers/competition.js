import { createSlice } from '@reduxjs/toolkit';
import {competitionsTabs} from "../../constants/main";

const initialState = {
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
    recommendedCompetitions: null,
    recommendedCompetitionsLoaded: false,
    recommendedCompetitionsError: null,

    participations: null,
    participationsLoaded: false,
    participationsError: null,
}

const competition = createSlice({
    name: 'competition',
    initialState,
    reducers: {
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
        },
        setRecommendedCompetitions(state, action){
            state.recommendedCompetitions = action.payload;
        },
        setRecommendedCompetitionsError(state, action){
            state.recommendedCompetitionsError = action.payload;
        },
        setRecommendedCompetitionsLoaded(state, action){
            state.recommendedCompetitionsLoaded = action.payload;
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
    setPublicCompetitionsLoaded,
    setPublicCompetitions,
    setPublicCompetitionsError,
    setDetailCompetitionLoaded,
    setDetailCompetition,
    setDetailCompetitionError,
    setSelectedTab,
    setSearchCompetitions,
    setSearchCompetitionsError,
    setSearchCompetitionsLoaded,
    setRecommendedCompetitionsLoaded,
    setRecommendedCompetitions,
    setRecommendedCompetitionsError,

    setParticipationsLoaded,
    setParticipations,
    setParticipationsError
} = competition.actions;
export default competition.reducer;