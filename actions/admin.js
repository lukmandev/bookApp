import {createAsyncThunk} from "@reduxjs/toolkit";
import authApi from "../http/authApi";
import {
    setBooks,
    setBooksError,
    setBooksLoaded,
    setCompetitions,
    setCompetitionsError,
    setCompetitionsLoaded,
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

export const bulkCreateUsers = createAsyncThunk(
    'admin/users/add',
    async (body, _) => {
        const result = {
            isSuccess: false,
            data: ""
        }
        try {
            const {data} = await authApi.post('/users/bulk-create/', body);
            result.isSuccess = true;
            result.data = "Пользовательдер кошулду";
        } catch (e) {
            result.data = "Ката кетип калды";
        }
        return result;
    }
);


export const fetchAllBooks = createAsyncThunk(
    'admin/books',
    async (_, {dispatch}) => {
        dispatch(setBooksLoaded(false));
        dispatch(setBooksError(null));
        dispatch(setBooks(null));
        try {
            const {data} = await authApi.get('/books/all/');
            dispatch(setBooks(data));
        } catch (e){
            dispatch(setBooksError(authErrors['ERROR_500']));
        } finally {
            dispatch(setBooksLoaded(true));
        }
    }
)