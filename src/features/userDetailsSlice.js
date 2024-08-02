import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userDetails: {
  
  },
  isAuthenticated: false,
}

export const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
      state.isAuthenticated = true;
    },
    clearUserDetails: (state) => {
      state.userDetails = initialState.userDetails;
      state.isAuthenticated = false;
    },
    updateUserDetails: (state, action) => {
      state.userDetails = {
        ...state.userDetails,
        ...action.payload
      };
    },
  }
})

// Action creators are generated for each case reducer function
export const { setUserDetails, clearUserDetails, updateUserDetails } = userDetailsSlice.actions

// Selectors
export const selectUserDetails = (state) => state.userDetails.userDetails;
export const selectIsAuthenticated = (state) => state.userDetails.isAuthenticated;

export default userDetailsSlice.reducer
