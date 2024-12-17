import { configureStore } from '@reduxjs/toolkit'
import userReducer from './pages/LoginUserSlice';
import cartReducer from './pages/CartSlice'
export const store = configureStore({
  reducer: {
    User:userReducer,
    Cart:cartReducer,
  },
});
