import {createAsyncThunk} from "@reduxjs/toolkit";
import authApi from "../http/authApi";
import {
    setDetailCompetition,
    setDetailCompetitionError,
    setDetailCompetitionLoaded, setParticipations, setParticipationsError, setParticipationsLoaded,
    setPublicCompetitions,
    setPublicCompetitionsError,
    setPublicCompetitionsLoaded, setRecommendedCompetitions, setRecommendedCompetitionsError,
    setRecommendedCompetitionsLoaded,
    setSearchCompetitions,
    setSearchCompetitionsError,
    setSearchCompetitionsLoaded,
} from "../store/reducers/competition";
import {authErrors, competitionErrors} from "../constants/errors";
import {
    setParticipationError,
    setParticipationInfoLoaded,
    setParticipationIsSuccess,
    setParticipationUpdateError,
    setParticipationUpdateInfoLoaded,
    setParticipationUpdateSuccess,
} from "../store/reducers/test";



export const getDetailCompetition = createAsyncThunk(
    'competition/detail/',
    async (id, {dispatch}) => {
        dispatch(setDetailCompetitionLoaded(false));
        try {
            const {data} = await authApi.get(`/competition/mine/${id}/`);
            dispatch(setDetailCompetition(data));
        } catch (e) {
            if(e.response){
                if(e.response.status === 404){
                    dispatch(setDetailCompetitionError(competitionErrors['DETAIL_COMPETITION_ERROR_404']));
                }else{
                    dispatch(setDetailCompetitionError(authErrors['ERROR_500']));
                }
            }else if(e.request && !e.response){
                dispatch(setDetailCompetitionError(authErrors['ERROR_500']));
            }else{
                dispatch(setDetailCompetitionError(authErrors['ERROR_500']));
            }
        } finally {
            dispatch(setDetailCompetitionLoaded(true));
        }
    }
);


export const setParticipation = createAsyncThunk(
    'participation/set/',
    async (body, {dispatch}) => {
        dispatch(setParticipationInfoLoaded(false));
        dispatch(setParticipationIsSuccess(false));
        dispatch(setParticipationError(null));
        try {
            await authApi.post(`/competition/participation/`, body);
            dispatch(setParticipationIsSuccess(true));
        } catch (e) {
            if(e.response && e.response.status === 403){
                dispatch(setParticipationError(competitionErrors['ALREADY_PARTICIPATED']));
            }else{
                dispatch(setParticipationError(authErrors['ERROR_500']));
            }
        } finally {
            dispatch(setParticipationInfoLoaded(true));
        }
    }
);

export const participationUpdate = createAsyncThunk(
    'participation/update/',
    async (body, {dispatch}) => {
        dispatch(setParticipationUpdateInfoLoaded(false));
        try {
            await authApi.patch(`/competition/participation/`, body);
            dispatch(setParticipationUpdateSuccess(true));
        } catch (e) {
            dispatch(setParticipationUpdateError(authErrors['ERROR_500']));
        } finally {
            dispatch(setParticipationUpdateInfoLoaded(true));
        }
    }
);


export const getPublicCompetitions = createAsyncThunk(
    'competition/public/',
    async (path, {dispatch}) => {
        dispatch(setPublicCompetitionsLoaded(false));
        dispatch(setPublicCompetitionsError(null));
        dispatch(setPublicCompetitions([]));
        try {
            const {data} = await authApi.get(path);
            dispatch(setPublicCompetitions(data));
        } catch (e) {
            dispatch(setPublicCompetitionsError(authErrors['ERROR_500']));
        } finally {
            dispatch(setPublicCompetitionsLoaded(true));
        }
    }
);


export const fetchCompetitionBySearch = createAsyncThunk(
    'competition/search/',
    async (query, {dispatch}) => {
        dispatch(setSearchCompetitionsLoaded(false));
        try {
            const {data} = await authApi.get(`/competition/search/?search=${query}`);
            dispatch(setSearchCompetitions(data));
        } catch (e) {
            dispatch(setSearchCompetitionsError(authErrors['ERROR_500']));
        } finally {
            dispatch(setSearchCompetitionsLoaded(true));
        }
    }
);

export const fetchRecommendedCompetition = createAsyncThunk(
    'competition/recommended/',
    async (query, {dispatch}) => {
        dispatch(setRecommendedCompetitionsLoaded(false));
        dispatch(setRecommendedCompetitionsError(null));
        try {
            const {data} = await authApi.get(`/competition/recommended/`);
            dispatch(setRecommendedCompetitions(data));
        } catch (e) {
            dispatch(setRecommendedCompetitionsError(authErrors['ERROR_500']));
        } finally {
            dispatch(setRecommendedCompetitionsLoaded(true));
        }
    }
);

export const fetchCompetitionParticipation = createAsyncThunk(
    'admin/competition/participation',
    async (id, {dispatch}) => {
        dispatch(setParticipationsLoaded(false));
        dispatch(setParticipations(null));
        dispatch(setParticipationsError(null));
        try {
            const {data} = await authApi.get(`/competition/result/${id}/`);
            dispatch(setParticipations(data));
        } catch (e) {
            dispatch(setParticipationsError(authErrors['ERROR_500']));
        } finally {
            dispatch(setParticipationsLoaded(true));
        }
    }
);