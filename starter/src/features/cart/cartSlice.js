import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    cartItems: [],
    amount:0,
    total: 0,
    isLoading: false
}

let cartSlice = createSlice({
    name: 'cart', 
    initialState
})


export default cartSlice.reducer


