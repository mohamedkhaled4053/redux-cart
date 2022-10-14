import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

let initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: false,
};

let cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state)=>{
      state.cartItems = []
    },
    removeItem : (state, action)=>{
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
    }
  }
});


export const {clearCart, removeItem} = cartSlice.actions
export default cartSlice.reducer;
