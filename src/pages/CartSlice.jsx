

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  user: null,
};

export const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; 
      } else {
        state.cart.push({ ...action.payload, quantity: 1 }); 
      }
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    clearCart(state) {
      state.cart = [];
    },
    incrementItem(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1; 
      }
    },
    decrementItem(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1; 
      }
    },
  },
});

export const { addItem, deleteItem, setUser, clearCart, incrementItem, decrementItem } = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart;
