import { createSlice } from '@reduxjs/toolkit'



const initialState= {
    emailId:"",
    password:"",
}

export const LoginUserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    createDetails: (state,action) => {
      state.emailId=action.emailId;
      state.password=action.password;
    },
    
  },
});

export const { createDetails } = LoginUserSlice.actions;

export default LoginUserSlice.reducer;