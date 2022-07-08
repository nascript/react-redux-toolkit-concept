import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/productSlice'

console.log('ini product reducer', productReducer)
export const store = configureStore({
  reducer: {
    product: productReducer,
  },
})
