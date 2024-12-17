import { createSlice } from '@reduxjs/toolkit'



const initialState= {
    userName:"",
    password:"",
}

export const LoginUserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    createDetails: (state,action) => {
      state.userName=action.payload.userName;
      state.password=action.payload.password;
    },
    
  },
});

export const {createDetails} = LoginUserSlice.actions;

export default LoginUserSlice.reducer;