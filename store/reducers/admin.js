import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    competitions: null,
    competitionsLoaded: false,
    competitionsError: false,
    books: null,
    booksLoaded: false,
    booksError: null,
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
        setBooks(state, action){
            state.books = action.payload;
        },
        setBooksLoaded(state, action){
            state.booksLoaded = action.payload;
        },
        setBooksError(state, action){
            state.booksError = action.payload;
        }
    },
});

export const {
    setCompetitionsLoaded,
    setCompetitions,
    setCompetitionsError,
    setBooksLoaded,
    setBooks,
    setBooksError
} = admin.actions;
export default admin.reducer;