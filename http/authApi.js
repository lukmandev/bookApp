import axios from 'axios';
import {setAuth} from "../store/reducers/auth";
import api from "./api";
import {getCookie, setCookie} from "../utils/cookie";
import {store} from "../store/reducer";


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
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await api.post(`/users/refresh/`, {
                refresh: getCookie('refreshToken'),
            });
            localStorage.setItem('accessToken', response.data.access);
            setCookie('refreshToken', response.data.refresh, 30);
            store.dispatch(setAuth(true));
            return authApi.request(originalRequest);
        } catch (e) {
            store.dispatch(setAuth(false));
            return Promise.reject(error);
        }
    }
    if(error.config._isRetry){
        store.dispatch(setAuth(false));
    }
    return Promise.reject(error);
});

export default authApi;