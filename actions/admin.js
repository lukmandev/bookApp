import {createAsyncThunk} from "@reduxjs/toolkit";
import authApi from "../http/authApi";
import {
    setCompetitions,
    setCompetitionsError,
    setCompetitionsLoaded, setParticipations, setParticipationsError,
    setParticipationsLoaded
} from "../store/reducers/admin";
import {authErrors} from "../constants/errors";


export const fetchAdminCompetitions = createAsyncThunk(
    'admin/competitions/',
    async (body, {dispatch}) => {
        dispatch(setCompetitionsLoaded(false));
        dispatch(setCompetitionsError(null));
        dispatch(setCompetitions(null));
        try {
            const {data} = await authApi.get('/competition/result/');
            dispatch(setCompetitions(data));
        } catch (e) {
            dispatch(setCompetitionsError(authErrors['ERROR_500']));
        } finally {
            dispatch(setCompetitionsLoaded(true));
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
            const {data} = await authApi.get(`/competition/result/${id}`);
            dispatch(setParticipations(data));
        } catch (e) {
            dispatch(setParticipationsError(authErrors['ERROR_500']));
        } finally {
            dispatch(setParticipationsLoaded(true));
        }
    }
);
