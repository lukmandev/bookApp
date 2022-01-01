import axios from 'axios';
import {useDispatch} from "react-redux";
import {setAuth} from "../store/reducers/auth";
import api from "./api";
import {getCookie, setCookie} from "../utils/cookie";


const authApi = axios.create({
    baseURL: `${process.env.API_URL}/api/v1`,
});

authApi.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    return config;
})

authApi.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const dispatch = useDispatch();
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await api.post(`/auth/refresh/`, {
                refresh: getCookie('refreshToken'),
            });
            localStorage.setItem('accessToken', response.data.access);
            setCookie('refreshToken', response.data.refresh, 30);
            dispatch(setAuth(true));
            return authApi.request(originalRequest);
        } catch (e) {
            dispatch(setAuth(false));
            return Promise.reject(error);
        }
    }
    if(error.config._isRetry){
        dispatch(setAuth(false));
    }
    return Promise.reject(error);
});

export default authApi;