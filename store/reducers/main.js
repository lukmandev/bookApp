import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    isHeaderFormOpen: false,
    modalActive: false,
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
        },
        setModalActive(state, action){
            state.modalActive = action.payload;
        }
    },
});

export const {
    setLoading,
    setHeaderFormOpen,
    setModalActive
} = main.actions;
export default main.reducer;