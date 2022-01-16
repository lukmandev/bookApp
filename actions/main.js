import {createAsyncThunk} from "@reduxjs/toolkit";
import {authErrors} from "../constants/errors";
import api from "../http/api";
import {setSocialsError, setSocialsLoaded} from "../store/reducers/main";


export const fetchSocials = createAsyncThunk(
    'main/socials/',
    async (_, {dispatch}) => {
        dispatch(setSocialsLoaded(false));
        dispatch(setSocialsError(null));
        try{
            const {data} = await api.get('/socials/');
            dispatch(setSocials(data));
        } catch (e){
            dispatch(setSocialsError(authErrors['ERROR_500']));
        } finally {
            dispatch(setSocialsLoaded(true));
        }
    }
);
