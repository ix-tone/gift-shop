import { configureStore } from "@reduxjs/toolkit";
import gifts from './giftsSlice';
import cart from './cartSlice';


export const store = configureStore({
    reducer: {
        gifts, 
        cart
    }
})