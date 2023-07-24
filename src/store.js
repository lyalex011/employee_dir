import { configureStore } from "@reduxjs/toolkit";
import listReducer from './employeeListSlice'

export const store = configureStore({
    reducer: {
        list: listReducer
    }
})