import { configureStore } from '@reduxjs/toolkit'

import userDetailsReducer from '../features/userDetailsSlice'

export default configureStore({
  reducer: {
    userDetails: userDetailsReducer,
  }
})