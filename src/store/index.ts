import { configureStore} from "@reduxjs/toolkit";
import {fxApi} from "../api";
import {reducer} from "./reducer";

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({thunk: true}).concat(fxApi.middleware),
})