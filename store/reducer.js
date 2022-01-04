import { configureStore } from "@reduxjs/toolkit";

import main from './reducers/main';
import auth from './reducers/auth';
import competition from './reducers/competition';
import test from './reducers/test';
import admin from './reducers/admin';

export const store = configureStore({
    reducer: {
        main,
        auth,
        competition,
        test,
        admin,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});