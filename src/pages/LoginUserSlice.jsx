
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: [],
  loggedInUser: null,
};

export const LoginUserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    createDetails: (state, action) => {
      const existingUser = state.user.find(
        (user) => user.email === action.payload.email
      );
      if (!existingUser) {
        state.user.push(action.payload); 
      }
    },
    loginUser: (state, action) => {
      const user = state.user.find(
        (user) => user.email === action.payload.email && user.password === action.payload.password
      );
      if (user) {
        state.loggedInUser = user; 
      } else {
        state.loggedInUser = null; 
      }
    },
    logoutUser: (state) => {
      state.loggedInUser = null;
    },
  },
});

export const { loggedInUser,createDetails, loginUser, logoutUser } = LoginUserSlice.actions;
export default LoginUserSlice.reducer;

