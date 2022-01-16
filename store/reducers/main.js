import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    isHeaderFormOpen: false,
    modalActive: false,
    socials: null,
    socialsLoaded: false,
    socialsError: null,
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
        },
        setSocials(state, action){
            state.socials = action.payload;
        },
        setSocialsLoaded(state, action){
            state.socialsLoaded = action.payload;
        },
        setSocialsError(state, action){
            state.socialsError = action.payload;
        }
    },
});

export const {
    setLoading,
    setHeaderFormOpen,
    setModalActive,
    setSocials,
    setSocialsError,
    setSocialsLoaded
} = main.actions;
export default main.reducer;