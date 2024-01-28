'use client'
import {configureStore} from '@reduxjs/toolkit';
import {productSlice} from "@/lib/features/products/productSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            products: productSlice.reducer,
        },
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
