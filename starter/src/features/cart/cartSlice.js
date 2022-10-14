import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

let initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

let url = 'https://course-api.com/react-useReducer-cart-project';

export let getCartItems = createAsyncThunk('cart/getCartItems', () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

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
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.cartItems = payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { clearCart, removeItem, toggleAmount, calcTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
