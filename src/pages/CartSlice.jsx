import { createSlice } from '@reduxjs/toolkit'



const initialState= {
    cart:[],
}

export const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addItem(state,action){
      state.cart.push(action.payload);
      console.log(state.cart.length);
    },
    deleteItem(state,action){
      state.cart=state.cart.filter((item)=>item.productId!==action.payload);
    },
    
  },
});

export const {addItem,deleteItem} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart=(state)=>state.cart;