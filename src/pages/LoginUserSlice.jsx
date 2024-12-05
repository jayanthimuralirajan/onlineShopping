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
      state.emailId=action.payload.emailId;
      state.password=action.payload.password;
    },
    
  },
});

export const {createDetails} = LoginUserSlice.actions;

export default LoginUserSlice.reducer;