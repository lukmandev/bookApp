import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import main from './reducers/main';
import auth from './reducers/auth';
import competition from './reducers/competition';

export const makeStore = () => configureStore({
    reducer: {
        main,
        auth,
        competition,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const wrapper = createWrapper(makeStore);