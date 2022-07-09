import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit'
import axios from 'axios'

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await axios.get('http://localhost:5000/products')
    console.log('ini data in store', response.data)
    return response.data
  }
)

const productEntity = createEntityAdapter({
  selectId: (product) => product.id,
})

console.warn('ini get product', getProducts)

const productSlice = createSlice({
  name: 'product',
  initialState: productEntity.getInitialState(),
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      productEntity.setAll(state, action.payload)
    },
  },
})

export const productSelectors = productEntity.getSelectors(
  (state) => state.product
)

export default productSlice.reducer
