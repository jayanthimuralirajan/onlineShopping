
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
        state.user.push(action.payload); // Add cart to the new user
      }
    },
    loginUser: (state, action) => {
      const user = state.user.find(
        (user) => user.email === action.payload.email && user.password === action.payload.password
      );
      if (user) {
        state.loggedInUser = user; // Set loggedInUser to the found user
      } else {
        state.loggedInUser = null; // Reset if no user found
      }
    },
    logoutUser: (state) => {
      state.loggedInUser = null; // Clear the logged-in user on logout
    },
  },
});

export const { loggedInUser,createDetails, loginUser, logoutUser } = LoginUserSlice.actions;
export default LoginUserSlice.reducer;

