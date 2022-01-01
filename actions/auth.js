import {createAsyncThunk} from '@reduxjs/toolkit';
import api from "../http/api";
import {setAuth, setAuthInfoLoaded, setProfile} from "../store/reducers/auth";
import {authErrors} from "../constants/errors";
import authApi from "../http/authApi";
import {getCookie, setCookie} from "../utils/cookie";


export const login = createAsyncThunk(
    'auth/login/',
    async (body, {dispatch}) => {
        const result = {
            error: null,
            isSuccess: false
        }
        try {
            const {data} = await api.post('/users/competition/login/', body);
            localStorage.setItem('accessToken', data.accessToken);
            setCookie('refreshToken', data.refreshToken, 30);
            dispatch(setProfile(data.user));
            dispatch(setAuth(true));
        } catch (e) {
            if(e.response){
                if(e.response.status === 400 && e.response.data.error){
                    result.error = authErrors[e.response.data.code];
                }else{
                    result.error = authErrors['ERROR_500'];
                }
            }else if(e.request && !e.response){
                result.error = authErrors['ERROR_500'];
            }else{
                result.error = authErrors['ERROR_500'];
            }
        } finally {
            dispatch(setAuthInfoLoaded(true));
        }
        return result;
    }
);


export const setCompetitionProfile = createAsyncThunk(
    'auth/competition/',
    async (body, {dispatch}) => {
        const result = {
            error: null,
            isSuccess: false
        }
        try {
            const {data} = await authApi.post('/users/competition-profile/', body);
            setCookie('refreshToken', data.refreshToken, 30);
            localStorage.setItem('accessToken', data.accessToken);
            dispatch(setProfile(data.user));
        } catch (e) {
            if(e.response){
                if(e.response.status === 400 && e.response.error){
                    result.error = authErrors[e.response.data.code];
                }else{
                    result.error = authErrors['ERROR_500'];
                }
            }else if(e.request && !e.response){
                result.error = authErrors['ERROR_500'];
            }else{
                result.error = authErrors['ERROR_500'];
            }
        }
        return result;
    }
);

export const refresh = createAsyncThunk(
    'auth/refresh/',
    async (_, {dispatch}) => {
        dispatch(setAuthInfoLoaded(false));
        const refreshToken = getCookie('refreshToken');
        if(!refreshToken){
            dispatch(setAuth(false));
            dispatch(setAuthInfoLoaded(true));
            return null;
        }
        try {
            const {data} = await authApi.post('/users/refresh-with-user/', {refresh: refreshToken});
            localStorage.setItem('accessToken', data.access);
            setCookie('refreshToken', data.refresh, 30);
            dispatch(setAuth(true));
            dispatch(setProfile(data.user));
        } catch (e) {
            dispatch(setAuth(false));
        } finally {
            dispatch(setAuthInfoLoaded(true));
        }
    }
);