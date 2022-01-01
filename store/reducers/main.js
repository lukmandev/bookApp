import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    isHeaderFormOpen: false,
}

const main = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setLoading(state, action){
            state.isLoading = action.payload;
        },
        setHeaderFormOpen(state, action){
            state.isHeaderFormOpen = action.payload;
        }
    },
});

export const {
    setLoading,
    setHeaderFormOpen
} = main.actions;
export default main.reducer;