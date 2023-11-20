import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const url = 'https://fakestoreapi.com/products';


const initialState = {
    productItems:[],
    
}

export const getProductItems = createAsyncThunk('products/getProductItems',

async(name,thunkAPI)=>{
    try{
     const response  = await axios.get(url)
     return response.data
    } catch(error){
     return thunkAPI.rejectWithValue('something went wrong')
    }
 })

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getProductItems.pending,(state)=>{
            state.isLoading = true
        }).addCase(getProductItems.fulfilled,(state,action)=>{
            state.isLoading = false
            state.productItems = action.payload
        }).addCase(getProductItems.rejected,(state)=>{
            state.isLoading = false
        })
    },

})

export default productSlice.reducer