import { createSlice } from '@reduxjs/toolkit'
import { loggedInUser } from './LoginUserSlice';


const initialState= {
    cart:[],
    user:null,
}

export const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addItem(state,action){
      state.cart.push(action.payload);
    
    },
    deleteItem(state,action){
      state.cart=state.cart.filter((item)=>item.id!==action.payload);
    },   
    setUser(state,action){
      state.user=action.payload;
    },
    clearCart: (state) => {
      state.cart = []; 
  },
  },
});

export const {addItem,deleteItem,setUser,clearCart} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart=(state)=>state.cart;
