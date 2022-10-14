import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  show: false,
};

let modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state) => {
      state.show = true;
    },
    cancel: (state) => {
      state.show = false;
    },
  },
});

export default modalSlice.reducer;

export const { showModal, cancel } = modalSlice.actions;
