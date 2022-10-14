import {configureStore} from '@reduxjs/toolkit';
import itemListReducer from './slice'

export  default store = configureStore({
    reducer : {
        slice : itemListReducer
    }
})