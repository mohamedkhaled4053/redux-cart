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
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    toggleAmount: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === payload.id) {
          if (payload.type === 'inc') {
            return { ...item, amount: item.amount + 1 };
          } else {
            return { ...item, amount: item.amount - 1 };
          }
        }
        return item;
      });
    },
  },
});

export const { clearCart, removeItem, toggleAmount } = cartSlice.actions;
export default cartSlice.reducer;
