import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

let initialState = {
  cartItems: cartItems,
  amount: 0,
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
    calcTotals: (state) => {
      let amount = state.cartItems.reduce(
        (total, item) => (total += item.amount),
        0
      );
      let total = state.cartItems.reduce(
        (total, item) => (total += item.price * item.amount),
        0
      );

      state.amount = amount;
      state.total = total;
    },
  },
});

export const { clearCart, removeItem, toggleAmount, calcTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
