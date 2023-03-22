import {combineReducers} from "@reduxjs/toolkit";
import {fxApi} from "../api";

export const reducer = combineReducers({
    [fxApi.reducerPath]: fxApi.reducer
});