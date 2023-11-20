import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice'
import cartReducer, { getTotal }  from './cartSlice'
import authReducer,{ loadUser } from './authSlice'

import { getProductItems } from "./productSlice";


 const store = configureStore({
    reducer:{
        products:productReducer,
        cart:cartReducer,
        auth:authReducer,
    }
})

store.dispatch(getProductItems())
store.dispatch(getTotal())
store.dispatch(loadUser(null))




export default store