import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from '../features/products';
import { ordersReducer } from '../features/orders';

export const store = configureStore({
    reducer:{
        products: productsReducer,
        orders: ordersReducer
    }
})