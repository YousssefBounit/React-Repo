import { configureStore } from "@reduxjs/toolkit";
import ShopReducer from "./StoreSlices/ShopSlice";
import CartReducer from "./StoreSlices/CartSlice";

export const  Store=configureStore({
    reducer:{
        shop:ShopReducer,
        cart:CartReducer
    }
})