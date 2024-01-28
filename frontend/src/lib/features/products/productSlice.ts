import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ProductModel} from "@/app/modal/ProductModel";

interface ProductState {
    products: ProductModel[]
}

const initialState: ProductState = {
    products: []
};

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ProductModel>) => {
            console.table(action.payload);
            state.products.push(action.payload);
        },
        updateItem: (state, action: PayloadAction<ProductModel>) => {
            const index = state.products.findIndex((product) => product.productID === action.payload.productID);
            if (index !== -1) {
                state.products[index] = action.payload;
            }
        },
        deleteItems: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter((product) => product.productID !== action.payload);
        },
        initializeProducts: (state, action: PayloadAction<ProductModel[]>) => {
            state.products = action.payload;
        }
    },
});

export const { initializeProducts, addItem, deleteItems, updateItem} = productSlice.actions;

export default productSlice.reducer;